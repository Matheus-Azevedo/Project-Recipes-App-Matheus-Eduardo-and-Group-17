import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from '../styles/components/Card.module.css';

function Card({ RecipesMeals, RecipesDrinks, Category,
  MealsFiltered, DrinksFiltered, Search }) {
  const [Recipes, setRecipes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (Category === '/drinks') {
      setRecipes(RecipesDrinks);
    } else {
      setRecipes(RecipesMeals);
    }
  }, [RecipesMeals, RecipesDrinks, Category]);

  useEffect(() => {
    if (Category === '/drinks' && Search === true) {
      if (DrinksFiltered.length === 0) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
      if (DrinksFiltered.length === 1) {
        history.push(`/drinks/${DrinksFiltered[0].idDrink}`);
      } else {
        setRecipes(DrinksFiltered);
      }
    }
    if (Category !== '/drinks' && Search === true) {
      if (MealsFiltered.length === 0) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
      if (MealsFiltered.length === 1) {
        history.push(`/meals/${MealsFiltered[0].idMeal}`);
      } else {
        setRecipes(MealsFiltered);
      }
    }
  }, [Search]); // eslint-disable-line

  const handleRedirect = (id) => {
    if (Category === '/drinks') {
      history.push(`/drinks/${id}`);
    } else {
      history.push(`/meals/${id}`);
    }
  };

  return (
    <div className={ styles.Card }>
      {
        Recipes.map((e, i) => (
          <button
            className={ styles.Card_Container }
            key={ i }
            data-testid={ `${i}-recipe-card` }
            type="button"
            name="recipes"
            onClick={ () => handleRedirect(Category === '/drinks'
              ? e.idDrink : e.idMeal) }
          >
            <img
              data-testid={ `${i}-card-img` }
              src={ Category === '/drinks' ? e.strDrinkThumb : e.strMealThumb }
              alt="imagens receitas"
            />
            <p
              data-testid={ `${i}-card-name` }
            >
              {Category === '/drinks' ? e.strDrink : e.strMeal}
            </p>
          </button>
        ))
      }
    </div>
  );
}

Card.defaultProps = {
  RecipesMeals: [],
  RecipesDrinks: [],
  MealsFiltered: [],
  DrinksFiltered: [],
};

Card.propTypes = {
  RecipesMeals: PropTypes.arrayOf(PropTypes.objectOf),
  RecipesDrinks: PropTypes.arrayOf(PropTypes.objectOf),
  MealsFiltered: PropTypes.arrayOf(PropTypes.objectOf),
  DrinksFiltered: PropTypes.arrayOf(PropTypes.objectOf),
  Category: PropTypes.string.isRequired,
  Search: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  RecipesMeals: state.RecipesAPI.DataRecipesMeals,
  RecipesDrinks: state.RecipesAPI.DataRecipesDrinks,
  Category: state.RecipesAPI.Category,
  MealsFiltered: state.SearchAPI.DataRecipesMealsFiltered,
  DrinksFiltered: state.SearchAPI.DataRecipesDrinksFiltered,
  Search: state.SearchAPI.Search,
});

export default connect(mapStateToProps, null)(Card);

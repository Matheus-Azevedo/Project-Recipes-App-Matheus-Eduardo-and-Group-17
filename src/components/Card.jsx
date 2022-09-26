import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Styles from './Card.module.css';

function Card({ RecipesMeals, RecipesDrinks, Category }) {
  const [Recipes, setRecipes] = useState([]);
  useEffect(() => {
    if (Category === '/drinks') {
      setRecipes(RecipesDrinks);
    } else {
      setRecipes(RecipesMeals);
    }
  }, [RecipesMeals, RecipesDrinks, Category]);

  return (
    <div className={ Styles.Card }>
      {
        Recipes.map((e, i) => (
          <div
            className={ Styles.Card_Container }
            key={ i }
            data-testid={ `${i}-recipe-card` }
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
          </div>
        ))
      }
    </div>
  );
}

Card.defaultProps = {
  RecipesMeals: [],
  RecipesDrinks: [],
};

Card.propTypes = {
  RecipesMeals: PropTypes.arrayOf(PropTypes.objectOf),
  RecipesDrinks: PropTypes.arrayOf(PropTypes.objectOf),
  Category: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  RecipesMeals: state.RecipesAPI.DataRecipesMeals,
  RecipesDrinks: state.RecipesAPI.DataRecipesDrinks,
  Category: state.RecipesAPI.Category,
});

export default connect(mapStateToProps, null)(Card);

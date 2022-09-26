import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Styles from './CategoryButtons.module.css';
// Import Meals Icons
import Beef from '../Assets/beef.svg';
import Breakfast from '../Assets/breakfast.svg';
import Chicken from '../Assets/chicken.svg';
import Lamb from '../Assets/lamb.svg';
import Dessert from '../Assets/dessert.svg';
import AllMeals from '../Assets/AllMeals.svg';
// Import Drinks Icons
import Drink from '../Assets/drink.svg';
import Cocktail from '../Assets/cocktail.svg';
import Shake from '../Assets/shake.svg';
import Other from '../Assets/other.svg';
import Cocoa from '../Assets/cocoa.svg';
import AllDrinks from '../Assets/AllDrinks.svg';
// Import Actions
import {
  fetchRecipesByCategoryDrinks,
  fetchRecipesByCategoryMeals,
  fetchApiDrinks, fetchApiMeals,
} from '../redux/actions/actionRecipeApi';

function CategoryButtons({ DataCategoryDrinks, DataCategoryMeals, Category, dispatch }) {
  const [Recipes, setRecipes] = useState([]);
  const [strCategory, setStrCategory] = useState();

  const [IconCategoryMeals] = useState([
    Beef,
    Breakfast,
    Chicken,
    Dessert,
    Lamb]);

  const [IconCategoryDrink] = useState([
    Drink,
    Cocktail,
    Shake,
    Other,
    Cocoa,
  ]);

  useEffect(() => {
    if (Category === '/drinks') {
      setRecipes(DataCategoryDrinks);
    } else {
      setRecipes(DataCategoryMeals);
    }
  }, [DataCategoryDrinks, DataCategoryMeals, Category]);

  const handleActivateFilter = (category) => {
    if (Category === '/drinks') {
      dispatch(fetchRecipesByCategoryDrinks(category));
    } else {
      dispatch(fetchRecipesByCategoryMeals(category));
    }
  };

  const handleCleanFilters = () => {
    if (Category === '/drinks') {
      dispatch(fetchApiDrinks());
    } else {
      dispatch(fetchApiMeals());
    }
    setStrCategory();
  };

  const handleToggleCategory = async (category) => {
    if (strCategory === category) {
      handleCleanFilters();
    } else {
      setStrCategory(category);
      handleActivateFilter(category);
    }
  };

  return (
    <div className={ Styles.CategoryButtonsContainer }>
      <button
        className={ Styles.buttonCategory }
        type="button"
        data-testid="All-category-filter"
        onClick={ () => handleCleanFilters() }
      >
        <img
          src={ Category === '/drinks' ? AllDrinks : AllMeals }
          alt="Icone Beef"
        />
      </button>
      {Recipes.map((e, i) => (
        <button
          className={ Styles.buttonCategory }
          key={ i }
          type="button"
          data-testid={ `${e.strCategory}-category-filter` }
          onClick={ () => handleToggleCategory(e.strCategory) }
        >
          <img
            src={ Category === '/drinks' ? IconCategoryDrink[i] : IconCategoryMeals[i] }
            alt="Icone Beef"
          />
        </button>
      ))}
    </div>
  );
}

CategoryButtons.defaultProps = {
  DataCategoryMeals: [],
  DataCategoryDrinks: [],
};

CategoryButtons.propTypes = {
  DataCategoryDrinks: PropTypes.arrayOf(PropTypes.objectOf),
  DataCategoryMeals: PropTypes.arrayOf(PropTypes.objectOf),
  Category: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  DataCategoryDrinks: state.RecipesAPI.DataCategoryDrinks,
  DataCategoryMeals: state.RecipesAPI.DataCategoryMeals,
  Category: state.RecipesAPI.Category,
});

export default connect(mapStateToProps, null)(CategoryButtons);

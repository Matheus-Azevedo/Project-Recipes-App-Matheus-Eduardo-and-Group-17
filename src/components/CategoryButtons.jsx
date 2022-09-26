import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function CategoryButtons({ DataCategoryDrinks, DataCategoryMeals, Category }) {
  let category = DataCategoryMeals;
  if (Category === '/drinks') {
    category = DataCategoryDrinks;
  }

  return (
    <div>
      {category.map((e, i) => (
        <button
          key={ i }
          type="button"
          data-testid={ `${e.strCategory}-category-filter` }
        >
          {e.strCategory}

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
};

const mapStateToProps = (state) => ({
  DataCategoryDrinks: state.RecipesAPI.DataCategoryDrinks,
  DataCategoryMeals: state.RecipesAPI.DataCategoryMeals,
  Category: state.RecipesAPI.Category,
});

export default connect(mapStateToProps, null)(CategoryButtons);

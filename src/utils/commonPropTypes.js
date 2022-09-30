import PropTypes from 'prop-types';

const IngredientType = PropTypes.shape({
  ingredient: PropTypes.string.isRequired,
  measure: PropTypes.string,
});

const RecipeType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(IngredientType.isRequired),
});

export { IngredientType, RecipeType };

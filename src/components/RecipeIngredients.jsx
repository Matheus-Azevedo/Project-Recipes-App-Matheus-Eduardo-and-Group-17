import PropTypes from 'prop-types';

import { IngredientType } from '../utils/commonPropTypes';

function RecipeIngredients({ ingredients }) {
  return (
    <ol>
      {ingredients.map(({ ingredient, measure }, index) => (
        <li key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
          <span>{ingredient}</span>
          <span>{measure}</span>
        </li>
      ))}
    </ol>
  );
}

RecipeIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(IngredientType).isRequired,
};

export default RecipeIngredients;

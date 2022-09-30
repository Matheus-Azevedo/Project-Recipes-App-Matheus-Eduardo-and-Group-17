import PropTypes from 'prop-types';

import { RecipeType } from '../utils/commonPropTypes';

function Recommendations({ recommendations }) {
  return (
    <ul style={ { display: 'flex', maxWidth: '100vw', overflowX: 'auto' } }>
      {recommendations.map((recommendation, index) => (
        <li
          key={ recommendation.id }
          style={ { maxWidth: 180 } }
          data-testid={ `${index}-recommendation-card` }
        >
          <img src={ recommendation.thumbnailUrl } alt={ recommendation.title } />
          <span data-testid={ `${index}-recommendation-title` }>
            {recommendation.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

Recommendations.propTypes = {
  recommendations: PropTypes.arrayOf(RecipeType).isRequired,
};

export default Recommendations;

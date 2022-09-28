import React, { useEffect, useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';

import LoadingCard from '../components/LoadingCard';
import { getDrinkById, getDrinks, getMealById, getMeals } from '../services/recipes';

const RECOMMENDATIONS_LENGTH = 6;

function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const { pathname } = useLocation();
  const { params } = useRouteMatch();
  const { id } = params;

  const isMeal = /^\/meals\/.*/i.test(pathname);
  const isDrink = /^\/drinks\/.*/i.test(pathname);

  useEffect(() => {
    function sliceArray(array, length = RECOMMENDATIONS_LENGTH) {
      return array.slice(0, length);
    }

    if (isDrink) {
      getDrinkById(id).then(setRecipe);
      getMeals().then((recipes) => setRecommendations(sliceArray(recipes)));
    } else if (isMeal) {
      getMealById(id).then(setRecipe);
      getDrinks().then((recipes) => setRecommendations(sliceArray(recipes)));
    }
  }, [id, isDrink, isMeal]);

  if (!recipe) return <LoadingCard />;

  return (
    <div>
      <div>
        <img
          src={ recipe.thumbnailUrl }
          alt={ recipe.title }
          style={ { width: '100%' } }
          data-testid="recipe-photo"
        />

        <Link to="/">
          <FiHome />
        </Link>
      </div>

      <h1 data-testid="recipe-title">{recipe.title}</h1>
      <p data-testid="recipe-category">
        {recipe.categories}
        {isDrink && (
          <>
            {' - '}
            {recipe.alcoholic}
          </>
        )}
      </p>

      <ol>
        {recipe.ingredients.map(({ ingredient, measure }, index) => (
          <li key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
            <span>{ingredient}</span>
            <span>{measure}</span>
          </li>
        ))}
      </ol>

      <p data-testid="instructions">{recipe.instructions}</p>

      {recipe.videoUrl && (
        <iframe
          width="100%"
          height="315"
          src={ `https://www.youtube.com/embed/${recipe.videoCode}` }
          title="YouTube video player"
          frameBorder="0"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture
          "
          data-testid="video"
          allowFullScreen
        />
      )}

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
    </div>
  );
}

export default RecipeDetails;

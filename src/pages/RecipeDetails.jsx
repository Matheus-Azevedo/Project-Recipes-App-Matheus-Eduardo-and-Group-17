import React, { useEffect, useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';

import styles from '../styles/pages/RecipeDetails.module.css';
import LoadingCard from '../components/LoadingCard';
import Recommendations from '../components/Recommendations';
import RecipeVideo from '../components/RecipeVideo';
import RecipeIngredients from '../components/RecipeIngredients';
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

      <RecipeIngredients ingredients={ recipe.ingredients } />

      <p data-testid="instructions">{recipe.instructions}</p>

      {recipe.videoUrl && <RecipeVideo videoCode={ recipe.videoCode } />}

      <Recommendations recommendations={ recommendations } />
    </div>
  );
}

export default RecipeDetails;

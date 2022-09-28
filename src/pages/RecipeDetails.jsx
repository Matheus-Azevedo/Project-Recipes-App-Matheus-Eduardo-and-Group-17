import copy from 'clipboard-copy';
import React, { useEffect, useState, useMemo } from 'react';
import { FiHeart, FiHome, FiShare } from 'react-icons/fi';
import { Link, NavLink, useLocation, useRouteMatch } from 'react-router-dom';

import styles from '../styles/pages/RecipeDetails.module.css';
import LoadingCard from '../components/LoadingCard';
import Recommendations from '../components/Recommendations';
import RecipeVideo from '../components/RecipeVideo';
import RecipeIngredients from '../components/RecipeIngredients';
import { getDrinkById, getDrinks, getMealById, getMeals } from '../services/recipes';
import { getInProgressRecipeById } from '../services/storage';

const RECOMMENDATIONS_LENGTH = 6;
const ONE_SECOND = 1_000;
let messageClearTimeoutId;

function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [message, setMessage] = useState('');

  const { pathname } = useLocation();
  const { params } = useRouteMatch();
  const { id } = params;

  const isMeal = /^\/meals\/.*/i.test(pathname);
  const isDrink = /^\/drinks\/.*/i.test(pathname);

  const isInProgress = useMemo(() => !!getInProgressRecipeById(id), [id]);

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

  useEffect(() => () => {
    clearTimeout(messageClearTimeoutId);
  }, []);

  function handleShareRecipe() {
    copy(window.location.href);
    setMessage('Link copied!');

    if (messageClearTimeoutId) clearTimeout(messageClearTimeoutId);

    messageClearTimeoutId = setTimeout(() => {
      setMessage('');
    }, ONE_SECOND);
  }

  if (!recipe) return <LoadingCard />;

  return (
    <div>
      <div>
        {message && <span>{message}</span>}
        <img
          src={ recipe.thumbnailUrl }
          alt={ recipe.title }
          style={ { width: '100%' } }
          data-testid="recipe-photo"
        />

        <Link to="/">
          <FiHome />
        </Link>

        <button type="button" onClick={ handleShareRecipe } data-testid="share-btn">
          <FiShare />
        </button>
        <button type="button" onClick={ () => {} } data-testid="favorite-btn">
          <FiHeart />
        </button>
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

      <NavLink
        to={ `${pathname}/in-progress` }
        className={ styles.startRecipeButton }
        data-testid="start-recipe-btn"
      >
        {isInProgress ? 'Continue Recipe' : 'Start Recipe'}
      </NavLink>
    </div>
  );
}

export default RecipeDetails;

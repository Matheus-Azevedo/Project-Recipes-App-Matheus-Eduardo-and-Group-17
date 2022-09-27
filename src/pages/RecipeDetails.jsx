import React, { useEffect, useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';

import LoadingCard from '../components/LoadingCard';
import { getDrinkById, getMealById } from '../services/recipes';

function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);

  const { pathname } = useLocation();
  const { params } = useRouteMatch();
  const { id } = params;

  const isMeal = /^\/meals\/.*/i.test(pathname);
  const isDrink = /^\/drinks\/.*/i.test(pathname);

  useEffect(() => {
    if (isDrink) getDrinkById(id).then(setRecipe);
    else if (isMeal) getMealById(id).then(setRecipe);
  }, [id, isDrink, isMeal]);

  if (!recipe) return <LoadingCard />;

  return (
    <div>
      <pre>{JSON.stringify(recipe, null, 2)}</pre>

      <div>
        <img
          src={ recipe.thumbnailUrl }
          alt={ recipe.title }
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
          <li
            key={ ingredient }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            <span>{ingredient}</span>
            <span>{measure}</span>
          </li>
        ))}
      </ol>

      <p data-testid="instructions">{recipe.instructions}</p>

      {recipe.videoUrl && (
        <iframe
          width="560"
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
    </div>
  );
}

export default RecipeDetails;

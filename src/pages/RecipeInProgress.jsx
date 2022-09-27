import React, { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import LoadingCard from '../components/LoadingCard';
import { getDrinkById, getMealById } from '../services/recipes';

function RecipeInProgress() {
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

  const { title, categories, thumbnailUrl, instructions, ingredients } = recipe;
  return (
    <div>
      <pre>{JSON.stringify(recipe, null, 2)}</pre>

      <img src={ thumbnailUrl } alt="" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{title}</h1>
      <h3 data-testid="recipe-category">{categories}</h3>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="instructions">{instructions}</p>
      <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={ index }>
            <label
              htmlFor={ `checkbox${index}` }
              data-testid={ `${index}-ingredient-step` }
            >
              <input type="checkbox" id={ `checkbox${index}` } />
              <span>{`${ingredient.ingredient} - ${ingredient.measure}`}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeInProgress;

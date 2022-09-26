import React, { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

import LoadingCard from '../components/LoadingCard';
import { getDrinkById, getMealById } from '../services/recipes';

function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);

  const { pathname } = useLocation();
  const { params } = useRouteMatch();
  const { id } = params;

  const isMeals = /^\/meals\/.*/i.test(pathname);
  const isDrinks = /^\/drinks\/.*/i.test(pathname);

  useEffect(() => {
    if (isDrinks) getDrinkById(id).then(setRecipe);
    else if (isMeals) getMealById(id).then(setRecipe);
  }, [id, isDrinks, isMeals]);

  if (!recipe) return <LoadingCard />;

  return (
    <div>
      {isMeals && !isDrinks && <span>Meals</span>}
      {isDrinks && !isMeals && <span>Drinks</span>}
    </div>
  );
}

export default RecipeDetails;

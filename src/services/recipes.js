import { mapToRecipe } from '../utils/recipeMapper';

const BASE_DRINK_API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
const BASE_MEAL_API_URL = 'https://www.themealdb.com/api/json/v1/1';

async function getDrinkById(id) {
  const url = `${BASE_DRINK_API_URL}/lookup.php?i=${id}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => (data.drinks ? mapToRecipe(data.drinks[0], 'drinks') : null));
}

async function getMealById(id) {
  const url = `${BASE_MEAL_API_URL}/lookup.php?i=${id}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => (data.meals ? mapToRecipe(data.meals[0]) : null));
}

export { getDrinkById, getMealById };

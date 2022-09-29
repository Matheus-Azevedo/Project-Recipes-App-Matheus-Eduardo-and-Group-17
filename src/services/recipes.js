import { mapToRecipe, mapToRecipes } from '../utils/recipeMapper';

const BASE_DRINK_API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
const BASE_MEAL_API_URL = 'https://www.themealdb.com/api/json/v1/1';

async function getDrinkById(id) {
  const url = `${BASE_DRINK_API_URL}/lookup.php?i=${id}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => (data.drinks ? mapToRecipe(data.drinks[0], 'drink') : null));
}

async function getMealById(id) {
  const url = `${BASE_MEAL_API_URL}/lookup.php?i=${id}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => (data.meals ? mapToRecipe(data.meals[0]) : null));
}

async function getDrinks(searchTerm = '') {
  const url = `${BASE_DRINK_API_URL}/search.php?s=${searchTerm}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => (data.drinks ? mapToRecipes(data.drinks, 'drink') : null));
}

async function getMeals(searchTerm = '') {
  const url = `${BASE_MEAL_API_URL}/search.php?s=${searchTerm}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => (data.meals ? mapToRecipes(data.meals) : null));
}

export { getDrinkById, getDrinks, getMealById, getMeals };

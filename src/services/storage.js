const IN_PROGRESS_KEY = 'inProgressRecipes';
const ALREADY_DONE_KEY = 'doneRecipes';
const FAVORITE_RECIPES_KEY = 'favoriteRecipes';

function readStorage(key, fallback = undefined) {
  return JSON.parse(window.localStorage.getItem(key)) || fallback;
}

function writeStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function addInProgressRecipe(recipe) {
  const alreadyInProgress = readStorage(IN_PROGRESS_KEY, []);

  writeStorage([...alreadyInProgress, recipe]);
}

function addDoneRecipe(recipe) {
  const alreadyDone = readStorage(ALREADY_DONE_KEY, []);

  writeStorage([...alreadyDone, recipe]);
}

function addFavoriteRecipe(recipe) {
  const currentFavorites = readStorage(FAVORITE_RECIPES_KEY, []);

  const newFavoriteRecipe = {
    id: recipe.id,
    type: recipe.type,
    nationality: recipe.nationality || '',
    category: recipe.categories,
    alcoholicOrNot: recipe.alcoholic || '',
    name: recipe.title,
    image: recipe.thumbnailUrl,
  };

  writeStorage(FAVORITE_RECIPES_KEY, [...currentFavorites, newFavoriteRecipe]);
}

function getInProgressRecipeById(id) {
  const inProgressRecipes = readStorage(IN_PROGRESS_KEY, {});
  return inProgressRecipes.meals?.[id] || inProgressRecipes.drinks?.[id];
}

function getDoneRecipeById(id) {
  return readStorage(ALREADY_DONE_KEY, []).find((recipe) => recipe.id === id);
}

export {
  addDoneRecipe,
  addInProgressRecipe,
  addFavoriteRecipe,
  getDoneRecipeById,
  getInProgressRecipeById,
};

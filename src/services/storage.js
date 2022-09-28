const IN_PROGRESS_KEY = 'inProgressRecipes';
const ALREADY_DONE_KEY = 'doneRecipes';

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

function getInProgressRecipeById(id) {
  const inProgressRecipes = readStorage(IN_PROGRESS_KEY, {});
  return inProgressRecipes.meals?.[id] || inProgressRecipes.drinks?.[id];
}

function getDoneRecipeById(id) {
  return readStorage(ALREADY_DONE_KEY, []).find((recipe) => recipe.id === id);
}

export { addDoneRecipe, addInProgressRecipe, getDoneRecipeById, getInProgressRecipeById };

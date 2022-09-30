const INGREDIENT_KEY_REG_EXP = /^strIngredient(\d+)$/;
const VIDEO_CODE_REG_EXP = /^https:\/\/www\.youtube\.com\/watch\?v=([\w\d\-_]+)$/;

function ingredientMapper(data, key, value) {
  if (!INGREDIENT_KEY_REG_EXP.test(key)) return null;

  if (!value) return null;

  return {
    ingredient: value,
    measure: data[key.replace(INGREDIENT_KEY_REG_EXP, 'strMeasure$1')],
  };
}

function mapToRecipe(data, type = 'meal') {
  const videoCodeMatch = (data.strYoutube || '').match(VIDEO_CODE_REG_EXP);
  const videoCode = videoCodeMatch && videoCodeMatch[1];

  return {
    id: type === 'meal' ? data.idMeal : data.idDrink,
    title: type === 'meal' ? data.strMeal : data.strDrink,
    tags: data.strTags,
    type,
    categories: data.strCategory,
    thumbnailUrl: type === 'meal' ? data.strMealThumb : data.strDrinkThumb,
    instructions: data.strInstructions,
    videoUrl: data.strYoutube,
    alcoholic: data.strAlcoholic,
    videoCode,
    nationality: data.strArea,
    ingredients: Object.entries(data)
      .map(([key, value]) => ingredientMapper(data, key, value))
      .filter((value) => value !== null),
  };
}

function mapToRecipes(data, type = 'meal') {
  return data.map((raw) => mapToRecipe(raw, type));
}

export { mapToRecipe, mapToRecipes };

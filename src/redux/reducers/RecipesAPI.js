const INITIAL_STATE = {
  DataRecipesMeals: [],
  DataRecipesDrinks: [],
  DataCategoryDrinks: [],
  DataCategoryMeals: [],
  Category: '',
  LoadingAPI: true,
};

function RecipesAPI(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'MEALS_API':
    return {
      ...state,
      DataRecipesMeals: action.data,
      DataCategoryMeals: action.categoryMeals,
      LoadingAPI: false,
    };
  case 'DRINKS_API':
    return {
      ...state,
      DataRecipesDrinks: action.data,
      DataCategoryDrinks: action.categoryDrink,
      Category: '/drinks',
      LoadingAPI: false,
    };
  default:
    return state;
  }
}

export default RecipesAPI;

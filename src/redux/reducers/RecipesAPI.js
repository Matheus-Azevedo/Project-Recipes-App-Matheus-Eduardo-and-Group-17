const INITIAL_STATE = {
  DataRecipesMeals: [],
  DataRecipesDrinks: [],
  Category: '',
};

function RecipesAPI(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'MEALS_API':
    return {
      ...state,
      DataRecipesMeals: action.data,
    };
  case 'DRINKS_API':
    return {
      ...state,
      DataRecipesDrinks: action.data,
      Category: '/drinks',
    };
  default:
    return state;
  }
}

export default RecipesAPI;

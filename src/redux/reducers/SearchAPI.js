import { DRINKS_API, MEALS_API } from '../actions/actionSearchApi';

const INITIAL_STATE = {
  DataRecipesMeals: [],
  DataRecipesDrinks: [],
  LoadingAPI: true,
};

function RecipesAPI(state = INITIAL_STATE, action) {
  switch (action.type) {
  case MEALS_API:
    return {
      ...state,
      DataRecipesMeals: action.data,
      LoadingAPI: false,
    };
  case DRINKS_API:
    return {
      ...state,
      DataRecipesDrinks: action.data,
      LoadingAPI: false,
    };
  default:
    return state;
  }
}

export default RecipesAPI;

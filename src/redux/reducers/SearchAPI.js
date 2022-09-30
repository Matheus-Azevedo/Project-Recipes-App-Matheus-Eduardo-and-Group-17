import { DRINKS_API_FILTERED, MEALS_API_FILTERED } from '../actions/actionSearchApi';

const INITIAL_STATE = {
  DataRecipesMealsFiltered: [],
  DataRecipesDrinksFiltered: [],
  LoadingAPI: true,
  Search: false,
};

function RecipesAPI(state = INITIAL_STATE, action) {
  switch (action.type) {
  case MEALS_API_FILTERED:
    return {
      ...state,
      DataRecipesMealsFiltered: action.data,
      Search: true,
      LoadingAPI: false,
    };
  case DRINKS_API_FILTERED:
    return {
      ...state,
      DataRecipesDrinksFiltered: action.data,
      Search: true,
      LoadingAPI: false,
    };
  default:
    return state;
  }
}

export default RecipesAPI;

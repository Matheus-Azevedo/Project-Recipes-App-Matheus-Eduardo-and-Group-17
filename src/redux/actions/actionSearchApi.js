const NUMBER_12 = 12;
const NUMBER_0 = 0;
export const DRINKS_API_FILTERED = 'DRINKS_API_FILTERED';
export const MEALS_API_FILTERED = 'MEALS_API_FILTERED';

export const drinksFilteredAPI = (data) => ({
  type: DRINKS_API_FILTERED,
  data,
});

export const mealsFilteredAPI = (data) => ({
  type: MEALS_API_FILTERED,
  data,
});

export function fetchApiDrinks(filter, search) {
  return async (dispatch) => { // thunk declarado
    try {
      const URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
      const response = await fetch(`${URL}${filter}${search}`);
      const data = await response.json();
      const dataFilter12Array = data.drinks.length === 0
        ? data.drinks : data.drinks.slice(NUMBER_0, NUMBER_12);
      dispatch(drinksFilteredAPI(dataFilter12Array));
    } catch (error) {
      dispatch(drinksFilteredAPI([]));
    }
  };
}

export function fetchApiMeals(filter, search) {
  return async (dispatch) => { // thunk declarado
    try {
      const URL = 'https://www.themealdb.com/api/json/v1/1/';
      const response = await fetch(`${URL}${filter}${search}`);
      const data = await response.json();
      const dataFilter12Array = data.meals.length === 0
        ? data.meals : data.meals.slice(NUMBER_0, NUMBER_12);
      dispatch(mealsFilteredAPI(dataFilter12Array));
    } catch (error) {
      dispatch(mealsFilteredAPI([]));
    }
  };
}

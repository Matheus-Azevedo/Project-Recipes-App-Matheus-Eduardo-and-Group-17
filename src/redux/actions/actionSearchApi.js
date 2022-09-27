export const DRINKS_API = 'DRINKS_API';
export const MEALS_API = 'MEALS_API';

export const drinksAPI = (data) => ({
  type: DRINKS_API,
  data,
});

export const mealsAPI = (data) => ({
  type: MEALS_API,
  data,
});

export function fetchApiDrinks(filter, search) {
  return async (dispatch) => { // thunk declarado
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
    const response = await fetch(`${URL}${filter}${search}`);
    const data = await response.json();
    console.log(data);
    return dispatch(drinksAPI(data));
  };
}

export function fetchApiMeals(filter, search) {
  return async (dispatch) => { // thunk declarado
    const URL = 'https://www.themealdb.com/api/json/v1/1/';
    const response = await fetch(`${URL}${filter}${search}`);
    const data = await response.json();
    console.log(data);
    return dispatch(mealsAPI(data));
  };
}

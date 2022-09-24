const NUMBER_12 = 12;
const NUMBER_0 = 0;

export const drinksAPI = (data) => ({
  type: 'DRINKS_API',
  data,
});

export const mealsAPI = (data) => ({
  type: 'MEALS_API',
  data,
});

export function fetchApiDrinks() {
  return async (dispatch) => { // thunk declarado
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    const dataFilter12Array = data.drinks.slice(NUMBER_0, NUMBER_12);
    return dispatch(drinksAPI(dataFilter12Array));
  };
}

export function fetchApiMeals() {
  return async (dispatch) => { // thunk declarado
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    const dataFilter12Array = data.meals.slice(NUMBER_0, NUMBER_12);
    return dispatch(mealsAPI(dataFilter12Array));
  };
}

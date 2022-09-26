const NUMBER_12 = 12;
const NUMBER_5 = 5;
const NUMBER_0 = 0;

export const drinksAPI = (data, categoryDrink) => ({
  type: 'DRINKS_API',
  data,
  categoryDrink,

});

export const mealsAPI = (data, categoryMeals) => ({
  type: 'MEALS_API',
  data,
  categoryMeals,
});

export function fetchApiDrinks() {
  return async (dispatch) => { // thunk declarado
    const responseCategoryDrinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const dataCategoryDrinks = await responseCategoryDrinks.json();
    const dataFilter5Array = dataCategoryDrinks.drinks.slice(NUMBER_0, NUMBER_5);

    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    const dataFilter12Array = data.drinks.slice(NUMBER_0, NUMBER_12);
    dispatch(drinksAPI(dataFilter12Array, dataFilter5Array));
  };
}

export function fetchApiMeals() {
  return async (dispatch) => { // thunk declarado
    const responseCategoryMeals = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const dataCategoryMeals = await responseCategoryMeals.json();
    const dataFilter5Array = dataCategoryMeals.meals.slice(NUMBER_0, NUMBER_5);

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    const dataFilter12Array = data.meals.slice(NUMBER_0, NUMBER_12);
    return dispatch(mealsAPI(dataFilter12Array, dataFilter5Array));
  };
}

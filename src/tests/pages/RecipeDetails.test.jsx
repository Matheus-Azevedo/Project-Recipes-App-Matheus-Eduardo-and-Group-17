import copy from 'clipboard-copy';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

import '../helpers/mocks/recipeUtil';
import '../helpers/mocks/storageUtil';
import * as storage from '../../services/storage';
import * as recipes from '../../services/recipes';
import App from '../../App';
import render from '../helpers/renderWithRouter';
import { drinkMock, mealMock } from '../helpers/mockData';

jest.mock('clipboard-copy', () => jest.fn());

const DRINK_ID = 'test-drink';
const MEAL_ID = 'test-meal';
const DRINK_RECIPE_PATH = `/drinks/${DRINK_ID}`;
const MEAL_RECIPE_PATH = `/meals/${MEAL_ID}`;

async function waitPageLoad() {
  await waitFor(() => {
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
}

describe('<RecipeDetails />', () => {
  beforeEach(() => {
    recipes.getDrinkById.mockResolvedValue(drinkMock);
    recipes.getMealById.mockResolvedValue(mealMock);
    recipes.getDrinks.mockResolvedValue([]);
    recipes.getMeals.mockResolvedValue([]);
  });

  test('should render loading when page renders', async () => {
    render(<App />, {}, MEAL_RECIPE_PATH);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitPageLoad();
  });

  test('should fetch drinks when recipe is a drink', async () => {
    render(<App />, {}, DRINK_RECIPE_PATH);

    await waitPageLoad();

    expect(recipes.getDrinkById).toBeCalledTimes(1);
    expect(recipes.getDrinkById).toBeCalledWith(DRINK_ID);
    expect(recipes.getMeals).toBeCalledTimes(1);
  });

  test('should fetch meals when recipe is a meal', async () => {
    render(<App />, {}, MEAL_RECIPE_PATH);

    await waitPageLoad();

    expect(recipes.getMealById).toBeCalledTimes(1);
    expect(recipes.getMealById).toBeCalledWith(MEAL_ID);
    expect(recipes.getDrinks).toBeCalledTimes(1);
  });

  test('should can share a recipe', async () => {
    render(<App />, {}, MEAL_RECIPE_PATH);

    await waitPageLoad();

    const shareButton = screen.getByTestId('share-btn');

    userEvent.click(shareButton);

    expect(copy).toBeCalledTimes(1);
  });

  test('should render a message click on share button', async () => {
    render(<App />, {}, MEAL_RECIPE_PATH);

    await waitPageLoad();

    const shareButton = screen.getByTestId('share-btn');

    userEvent.click(shareButton);

    const message = screen.getByText(/link copied/i);

    expect(message).toBeInTheDocument();

    await waitFor(() => {
      expect(message).not.toBeInTheDocument();
    });
  });

  test('should can favorite a recipe', async () => {
    render(<App />, {}, MEAL_RECIPE_PATH);

    await waitPageLoad();

    const favoriteButton = screen.getByTestId('favorite-btn');

    userEvent.click(favoriteButton);

    expect(storage.addFavoriteRecipe).toBeCalledTimes(1);
    expect(storage.addFavoriteRecipe).toBeCalledWith(mealMock);
  });

  test('should render video embed', async () => {
    render(<App />, {}, MEAL_RECIPE_PATH);

    await waitPageLoad();

    const videoElement = screen.getByTestId('video');

    expect(videoElement).toHaveAttribute('src', 'https://www.youtube.com/embed/test');
  });

  test('should render continue recipe text when recipe is in progress', async () => {
    storage.getInProgressRecipeById.mockReturnValue(true);

    render(<App />, {}, MEAL_RECIPE_PATH);

    await waitPageLoad();

    const startRecipeButton = screen.getByTestId('start-recipe-btn');

    expect(startRecipeButton).toHaveTextContent(/continue recipe/i);
    expect(storage.getInProgressRecipeById).toBeCalledTimes(1);
    expect(storage.getInProgressRecipeById).toBeCalledWith(MEAL_ID);
  });
});

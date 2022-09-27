import React from 'react';
import { screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import MockDrink from '../../cypress/mocks/drinks';
import MockMeals from '../../cypress/mocks/meals';
import renderWithRouter from './renderWithRouter';

const inputDataTestId = '0-recipe-card';
const beefCategoryButtonTestId = 'Side-category-filter';

test('testa se é renderizado bebidas quando a rota é /drinks', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(MockDrink),
  });

  const { history } = renderWithRouter((<App />));
  act(() => {
    history.push('/drinks');
  });

  const drinkName = await screen.findByTestId(inputDataTestId);
  await (waitFor(() => expect(drinkName).toBeInTheDocument(), { timeout: 3000 }));
});

test('testa se é renderizado bebidas quando a rota é /meals', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(MockMeals),
  });

  const { history } = renderWithRouter((<App />));
  act(() => {
    history.push('/meals');
  });

  const drinkName = await screen.findByTestId(inputDataTestId);
  await (waitFor(() => expect(drinkName).toBeInTheDocument(), { timeout: 3000 }));
});

test('testa se ao clicar na categoria de Beef é mudado as receitas', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(MockMeals),
  });

  const { history } = renderWithRouter((<App />));
  act(() => {
    history.push('/meals');
  });

  const beefCategoryButton = await screen.findAllByTestId(beefCategoryButtonTestId);
  await (waitFor(
    () => expect(beefCategoryButton[0]).toBeInTheDocument(),
    { timeout: 3000 },
  ));
  userEvent.click(beefCategoryButton[0]);

  const beefRecipeInput = await screen.findByTestId(inputDataTestId);
  await (waitFor(
    () => expect(beefRecipeInput).toBeInTheDocument(),
    { timeout: 3000 },
  ));
});

test('testa se ao clicar na categoria de Beef é mudado as receitas e apos clicar em all o filtro é limpo', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(MockMeals),
  });

  const { history } = renderWithRouter((<App />));
  act(() => {
    history.push('/meals');
  });

  const beefCategoryButton = await screen.findAllByTestId(beefCategoryButtonTestId);
  await (waitFor(
    () => expect(beefCategoryButton[0]).toBeInTheDocument(),
    { timeout: 3000 },
  ));
  userEvent.click(beefCategoryButton[0]);

  const beefRecipeInput = await screen.findByTestId(inputDataTestId);
  await (waitFor(
    () => expect(beefRecipeInput).toBeInTheDocument(),
    { timeout: 3000 },
  ));

  const allCategoryButton = await screen.findByTestId('All-category-filter');
  await (waitFor(
    () => expect(allCategoryButton).toBeInTheDocument(),
    { timeout: 3000 },
  ));
  userEvent.click(allCategoryButton);
  const allRecipesCorba = await screen.findByTestId(inputDataTestId);
  await (waitFor(
    () => expect(allRecipesCorba).toBeInTheDocument(),
    { timeout: 3000 },
  ));
});

test('testa se ao clicar no card de comida redireciona para a rota /meals/id', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(MockMeals),
  });

  const { history } = renderWithRouter((<App />));
  act(() => {
    history.push('/meals');
  });

  const allRecipesCorba = await screen.findByTestId(inputDataTestId);
  await (waitFor(
    () => expect(allRecipesCorba).toBeInTheDocument(),
    { timeout: 3000 },
  ));
  userEvent.click(allRecipesCorba);
  await (waitFor(
    () => expect(history.location.pathname).toBe('/meals/52977'),
    { timeout: 3000 },
  ));
});

test('testa se ao clicar no card de bebida redireciona para a rota /drinks/id', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(MockDrink),
  });

  const { history } = renderWithRouter((<App />));
  act(() => {
    history.push('/drinks');
  });

  const allRecipesGGDrink = await screen.findByTestId(inputDataTestId);
  await (waitFor(
    () => expect(allRecipesGGDrink).toBeInTheDocument(),
    { timeout: 3000 },
  ));
  userEvent.click(allRecipesGGDrink);
  await (waitFor(
    () => expect(history.location.pathname).toBe('/drinks/15997'),
    { timeout: 3000 },
  ));
});

test('testa se ao clicar pela segunda vez no mesmo botão de categoria o filtro é limpo', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(MockMeals),
  });

  const { history } = renderWithRouter((<App />));
  act(() => {
    history.push('/meals');
  });

  const beefCategoryButton = await screen.findAllByTestId('Side-category-filter');
  await (waitFor(
    () => expect(beefCategoryButton[0]).toBeInTheDocument(),
    { timeout: 3000 },
  ));
  userEvent.click(beefCategoryButton[0]);

  const beefRecipeInput = await screen.findByTestId(inputDataTestId);
  await (waitFor(
    () => expect(beefRecipeInput).toBeInTheDocument(),
    { timeout: 3000 },
  ));
  userEvent.click(beefCategoryButton[0]);
  const recipeCorba = screen.getByRole('button', { name: 'imagens receitas Corba' });
  await (waitFor(
    () => expect(recipeCorba).toBeInTheDocument(),
    { timeout: 3000 },
  ));
});

test('testa se ao clicar pela segunda vez no mesmo botão de categoria de Drinks o filtro é limpo', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(MockDrink),
  });

  const { history } = renderWithRouter((<App />));
  act(() => {
    history.push('/drinks');
  });

  const DrinkOrdinaryCategoryButton = await screen.findAllByTestId('Ordinary Drink-category-filter');
  await (waitFor(
    () => expect(DrinkOrdinaryCategoryButton[0]).toBeInTheDocument(),
    { timeout: 3000 },
  ));
  userEvent.click(DrinkOrdinaryCategoryButton[0]);
  userEvent.click(DrinkOrdinaryCategoryButton[0]);
  const recipeGG = screen.getByRole('button', { name: 'imagens receitas GG' });
  await (waitFor(
    () => expect(recipeGG).toBeInTheDocument(),
    { timeout: 3000 },
  ));
});

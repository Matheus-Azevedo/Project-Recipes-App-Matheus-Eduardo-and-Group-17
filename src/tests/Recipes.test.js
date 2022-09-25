import React from 'react';
import { screen, act, waitFor } from '@testing-library/react';
import App from '../App';
import MockDrink from '../../cypress/mocks/drinks';
import MockMeals from '../../cypress/mocks/meals';
import renderWithRouter from './renderWithRouter';

test('testa se é renderizado bebidas quando a rota é /drinks', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(MockDrink),
  });

  const { history } = renderWithRouter((<App />));
  act(() => {
    history.push('/drinks');
  });

  const drinkName = await screen.findByTestId('0-recipe-card');
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

  const drinkName = await screen.findByTestId('0-recipe-card');
  await (waitFor(() => expect(drinkName).toBeInTheDocument(), { timeout: 3000 }));
});

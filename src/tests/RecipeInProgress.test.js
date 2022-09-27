import React from 'react';
import { screen, act, waitFor } from '@testing-library/react';
/* import userEvent from '@testing-library/user-event'; */
import App from '../App';
import MockDrink from '../../cypress/mocks/drinks';
import MockMeals from '../../cypress/mocks/meals';
import renderWithRouter from './renderWithRouter';

const inputDataTestId = 'recipe-title';
/* const beefCategoryButtonTestId = 'Side-category-filter'; */

test('testa se é renderizado bebidas quando a rota é /drinks', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(MockDrink),
  });

  const { history } = renderWithRouter((<App />));
  act(() => {
    history.push('drinks/15997/in-progress');
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
    history.push('meals/53065/in-progress');
  });

  const drinkName = await screen.findByTestId(inputDataTestId);
  await (waitFor(() => expect(drinkName).toBeInTheDocument(), { timeout: 3000 }));
});

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Footer from '../components/Footer';

describe('Testando o componente Footer', () => {
  test('Testa se o clicar no botão "drinks" rediriciona para a pagina drinks', () => {
    const { history } = renderWithRouter(<Footer />);

    const buttonDrinks = screen.getByTestId('drinks-bottom-btn');

    expect(buttonDrinks).toBeInTheDocument();

    userEvent.click(buttonDrinks);

    expect(history.location.pathname).toBe('/drinks');
  });

  test('Testa se o clicar no botão "meals" rediriciona para a pagina meals', () => {
    const { history } = renderWithRouter(<Footer />);

    const buttonMeals = screen.getByTestId('meals-bottom-btn');

    expect(buttonMeals).toBeInTheDocument();

    userEvent.click(buttonMeals);

    expect(history.location.pathname).toBe('/meals');
  });
});

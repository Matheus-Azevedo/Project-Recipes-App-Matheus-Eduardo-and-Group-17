import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import DoneRecipes from '../pages/DoneRecipes';
import Recipes from '../pages/Recipes';

describe('Testando o componente Header através da página <Recipes />', () => {
  test('Verifica se existe o Titulo Meals', () => {
    renderWithRouter(<Recipes />);
    const pageTitle = screen.getByText(/Meals/i);
    expect(pageTitle.innerHTML).toEqual('Meals');
  });
  test('Verifica se ao clicar no btn Profile o usuário é redirecionado', () => {
    const { history } = renderWithRouter(<Recipes />);
    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/profile');
  });
  test('Verifica se ao clicar no btn Search a barra é mostrada', () => {
    renderWithRouter(<Recipes />);
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
  test('Verifica se ao clicar no btn Search pela segunda vez a barra some', () => {
    renderWithRouter(<Recipes />);
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    const searchInput = screen.getByTestId('search-input');
    userEvent.click(searchBtn);
    expect(searchInput).not.toBeInTheDocument();
  });
  test('Verifica se existe apenas o button para o Profile na pagina Done Recipes', () => {
    renderWithRouter(<DoneRecipes />);
    const profileBtn = screen.getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
  });
});

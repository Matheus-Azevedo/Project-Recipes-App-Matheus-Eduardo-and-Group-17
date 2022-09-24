import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Meals from '../pages/Meals';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import DoneRecipes from '../pages/DoneRecipes';

describe('Testando o componente Header através da página <Meals />', () => {
  test('Verifica se existe o button para o Profile', () => {
    renderWithRouterAndRedux(<Meals />);
    const profileBtn = screen.getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
  });
  test('Verifica se existe o button para o Search', () => {
    renderWithRouterAndRedux(<Meals />);
    const searchBtn = screen.getByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();
  });
  test('Verifica se existe o Titulo Meals', () => {
    renderWithRouterAndRedux(<Meals />);
    const pageTitle = screen.getByText(/Meals/i);
    expect(pageTitle.innerHTML).toEqual('Meals');
  });
  test('Verifica se ao clicar no btn Profile o usuário é redirecionado', () => {
    const { history } = renderWithRouterAndRedux(<Meals />);
    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/profile');
  });
  test('Verifica se ao clicar no btn Search a barra é mostrada', () => {
    renderWithRouterAndRedux(<Meals />);
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
  test('Verifica se ao clicar no btn Search pela segunda vez a barra some', () => {
    renderWithRouterAndRedux(<Meals />);
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    const searchInput = screen.getByTestId('search-input');
    userEvent.click(searchBtn);
    expect(searchInput).not.toBeInTheDocument();
  });
  test('Verifica se existe apenas o button para o Profile na pagina Done Recipes', () => {
    renderWithRouterAndRedux(<DoneRecipes />);
    const profileBtn = screen.getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
  });
});

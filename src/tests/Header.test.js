import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import mockFetch from '../../cypress/mocks/meals';

describe('Testando o componente Header através da página <Recipes />', () => {
  afterEach(() => { global.fetch.mockClear(); });
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockFetch),
    });
  });

  test('Verifica se existe o Titulo Meals', async () => {
    renderWithRouter(<App />, {}, '/meals');
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    const pageTitle = screen.getByText(/Meals/i);
    expect(pageTitle.innerHTML).toEqual('Meals');
  });
  test('Verifica se ao clicar no btn Profile o usuário é redirecionado', () => {
    const { history } = renderWithRouter(<App />, {}, '/profile');
    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/profile');
  });
  test('Verifica se ao clicar no btn Search a barra é mostrada', async () => {
    renderWithRouter(<App />, {}, '/meals');
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
  test('Verifica se ao clicar no btn Search pela segunda vez a barra some', async () => {
    renderWithRouter(<App />, {}, '/meals');
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    const searchInput = screen.getByTestId('search-input');
    userEvent.click(searchBtn);
    expect(searchInput).not.toBeInTheDocument();
  });
  test('Verifica se existe apenas o button para o Profile na pagina Done Recipes', async () => {
    renderWithRouter(<App />, {}, '/done-recipes');
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    const profileBtn = screen.getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
  });
});

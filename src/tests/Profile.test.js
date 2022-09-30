import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando tela de Profile', () => {
  test('testando se ao clicar no botão done ricepes a rota muda', () => {
    const { history } = renderWithRouter((<App />));
    act(() => {
      history.push('/profile');
    });
    const inputDoneRicepes = screen.getByTestId('profile-done-btn');
    userEvent.click(inputDoneRicepes);
    expect(history.location.pathname).toBe('/done-recipes');
  });

  test('testando se ao clicar no botão favorite recipes a rota muda', () => {
    const { history } = renderWithRouter((<App />));
    act(() => {
      history.push('/profile');
    });
    const inputDoneFavorite = screen.getByTestId('profile-favorite-btn');
    userEvent.click(inputDoneFavorite);
    expect(history.location.pathname).toBe('/favorite-recipes');
  });

  test('testando se ao clicar no botão Logout a rota muda para /', () => {
    const { history } = renderWithRouter((<App />));
    act(() => {
      history.push('/profile');
    });
    const inputDoneLogout = screen.getByTestId('profile-logout-btn');
    userEvent.click(inputDoneLogout);
    expect(history.location.pathname).toBe('/');
  });
});

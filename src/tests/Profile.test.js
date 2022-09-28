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

  test('testando se o input do email aparece', () => {
    const { history } = renderWithRouter((<App />));
    act(() => {
      history.push('/profile');
    });
    const inputDoneTestes = screen.getByTestId('profile-email');
    expect(inputDoneTestes).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import renderWithRouter from './renderWithRouter';

describe('Testando tela de login', () => {
  test('testando se botão habilita', () => {
    const { history } = renderWithRouter((<Login />));
    const inputLogin = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    userEvent.type(inputLogin, 'trybe@trybe.com.br');
    userEvent.type(inputPassword, 'daledale');
    userEvent.click(button);

    history.push('/meals');
  });
});

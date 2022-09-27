import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import mockFetch from '../../cypress/mocks/meals';

const searchTopBtnID = 'search-top-btn';
const searchInputID = 'search-input';

const dataTestIdBtns = ['ingredient-search-radio', 'name-search-radio', 'first-letter-search-radio'];
const filters = ['filter.php?i=', 'search.php?s=', 'search.php?f='];

describe('Testando o componente SearchBar', () => {
  afterEach(() => { global.fetch.mockClear(); });
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockFetch),
    });
  });

  test('Verifica se o estado filter quando o btn quando clicado  recebe o valor correto ', async () => {
    renderWithRouter(<App />, {}, '/meals');
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    const searchBtn = screen.getByTestId(searchTopBtnID);
    userEvent.click(searchBtn);
    dataTestIdBtns.forEach((dataTestId, index) => {
      const radioBtn = screen.getByTestId(dataTestId);
      userEvent.click(radioBtn);
      expect(radioBtn.value).toEqual(filters[index]);
    });
  });
  test('Verifica se é possível buscar um ingrediente chicken', async () => {
    renderWithRouter(<App />, {}, '/meals');
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    userEvent.click(screen.getByTestId(searchTopBtnID));
    userEvent.click(screen.getByTestId(dataTestIdBtns[0]));
    userEvent.type(screen.getByTestId(searchInputID), 'chicken');
    expect(screen.getByTestId(searchInputID)).toHaveValue('chicken');
    userEvent.click(screen.getByTestId('exec-search-btn'));
  });
  test('Verifica se é disparado um alert', async () => {
    global.alert = jest.fn();
    renderWithRouter(<App />, {}, '/meals');
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    userEvent.click(screen.getByTestId(searchTopBtnID));
    userEvent.click(screen.getByTestId(dataTestIdBtns[2]));
    userEvent.type(screen.getByTestId(searchInputID), 'as');
    expect(global.alert).toHaveBeenCalledTimes(1);
  });
});

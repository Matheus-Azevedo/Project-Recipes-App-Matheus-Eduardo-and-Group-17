import React from 'react';
// import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritesRecipes from '../pages/FavoriteRecipes';

// const recipes = [
//   {
//     id: '52771',
//     type: 'meal',
//     nationality: 'Italian',
//     category: 'Vegetarian',
//     alcoholicOrNot: '',
//     name: 'Spicy Arrabiata Penne',
//     image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
//   },
// ];

describe.only('Testando o componente FavoritesRecipes', () => {
  test('Se os botões de "all", "Meals" e "Drinks" são renderizados na tela  ', () => {
    renderWithRouter(<FavoritesRecipes />);

    const buttonDrinks = screen.getByTestId('filter-by-drink-btn');
    const buttonAll = screen.getByTestId('filter-by-all-btn');
    const buttonMeals = screen.getByTestId('filter-by-meal-btn');

    expect(buttonDrinks).toBeInTheDocument();
    expect(buttonAll).toBeInTheDocument();
    expect(buttonMeals).toBeInTheDocument();
  });

  test('Se foi renderizado os botões "share" e "FavoritesIcons" corretamente', () => {
    renderWithRouter(<FavoritesRecipes />);

    const buttonShare = screen.getByTestId('0-horizontal-share-btn');
    const buttonFavorites = screen.getByTestId('0-horizontal-favorite-btn');

    expect(buttonShare).toBeInTheDocument();
    expect(buttonFavorites).toBeInTheDocument();
  });
});

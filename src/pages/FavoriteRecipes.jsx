import React from 'react';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

function copyLinkToShare(id, type) {
  if (type === 'bebida') {
    copy(`/drinks/${id}`);
  } else {
    copy(`/meals/${id}`);
  }
  alert('Link copied!');
}

const mockRecipe = [
  {
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  }];

function FavoriteRecipes() {
  const TITLE_PAGE = 'Favorite Recipes';
  return (
    <div>
      <Header title={ TITLE_PAGE } />
      <button type="button" data-testid="filter-by-all-btn">
        All
      </button>
      <button type="button" data-testid="filter-by-meal-btn">
        Meals
      </button>
      <button type="button" data-testid="filter-by-drink-btn">
        Drinks
      </button>
      {mockRecipe.map((recipe, index) => (
        <div key={ recipe.id }>
          <img
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image` }
            style={ { width: 150, height: 150 } }
          />
          {recipe.alcoholicOrNot === 'Alcoholic' ? (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.alcoholicOrNot}
              {' '}
              -
              {' '}
              {recipe.category}
            </p>
          ) : (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.area}
              {' '}
              -
              {' '}
              {recipe.category}
            </p>
          ) }
          <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          <button type="button" data-testid={ `${index}-horizontal-favorite-btn` }>
            <img src={ blackHeartIcon } alt="Icone de Favorito" />
          </button>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => (copyLinkToShare(recipe.id, recipe.type)) }
          >
            <img src={ shareIcon } alt="Icone para Compartilhar link" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoriteRecipes;

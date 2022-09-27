import React from 'react';

const arrayMock = [
  {
    id: '52771',
    title: 'Spicy Arrabiata Penne',
    tags: 'Pasta,Curry',
    categories: 'Vegetarian',
    thumbnail: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    instructions: 'Bring a large pot of water',
    video: 'https://www.youtube.com/watch?v=1IszT_guI08',
    ingredients: [
      {
        ingredient: 'penne rigate',
        measure: '1 pound',
      },
      {
        ingredient: 'pesdfdsfe',
        measure: '2 poasfdasfund',
      },
      {
        ingredient: 'pesdfdsfe',
        measure: '2 poasfdasfund',
      },
      {
        ingredient: 'pesdfdsfe',
        measure: '2 poasfdasfund',
      },
      {
        ingredient: 'pesdfdsfe',
        measure: '2 poasfdasfund',
      },
      {
        ingredient: 'pesdfdsfe',
        measure: '2 poasfdasfund',
      },
      {
        ingredient: 'pesdfdsfe',
        measure: '2 poasfdasfund',
      },
      {
        ingredient: 'pesdfdsfe',
        measure: '2 poasfdasfund',
      },
    ],
  },
];

function RecipeInProgress() {
  const { title, categories, thumbnail, instructions, ingredients } = arrayMock[0];
  return (
    <div>
      <img src={ thumbnail } alt="" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{title}</h1>
      <h3 data-testid="recipe-category">{categories}</h3>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="instructions">{instructions}</p>
      <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={ index }>
            <label
              htmlFor={ `checkbox${index}` }
              data-testid={ `${index}-ingredient-step` }
            >
              <input type="checkbox" id={ `checkbox${index}` } />
              <span>{`${ingredient.ingredient} - ${ingredient.measure}`}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeInProgress;

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function DoneRecipes() {
  const TITLE_PAGE = 'Done Recipes';
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const recipesGetStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    if (recipesGetStorage === null) {
      return;
    }
    setRecipes(recipesGetStorage);
  }, []);

  return (
    <div>
      <Header title={ TITLE_PAGE } />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-meal-btn">Meals</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      {recipes.map((e, i) => (
        <div key={ i }>
          <img
            src={ e.image }
            alt="imagem da receita"
            data-testid={ `${i}-horizontal-image` }
          />
          <p data-testid={ `${i}-horizontal-top-text` }>{e.category}</p>
          <p data-testid={ `${i}-horizontal-name` }>{e.name}</p>
          <p data-testid={ `${i}-horizontal-done-date` }>{e.doneDate}</p>
          <button
            type="button"
            data-testid={ `${i}-horizontal-share-btn` }
          >
            Compartilhar
          </button>
          {e.tags.map((e1) => (
            <p key={ i } data-testid={ `${i}-${e1}-horizontal-tag` }>{e1}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DoneRecipes;

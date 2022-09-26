import React from 'react';

function SearchBar() {
  return (
    <fieldset>
      <label htmlFor="name-search-radio">
        <input data-testid="name-search-radio" type="radio" />
        Ingrediente
      </label>
      <label htmlFor="ingredient-search-radio">
        <input data-testid="ingredient-search-radio" type="radio" />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input data-testid="first-letter-search-radio" type="radio" />
        Primeira Letra
      </label>
      <label htmlFor="search-input">
        <input data-testid="search-input" type="text" />
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
      >
        Buscar
      </button>
    </fieldset>
  );
}

export default SearchBar;

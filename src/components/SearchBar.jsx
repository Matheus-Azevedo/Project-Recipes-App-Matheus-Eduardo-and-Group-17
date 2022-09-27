import React from 'react';

function SearchBar() {
  return (
    <fieldset>
      <label htmlFor="name-search-radio">
        <input
          data-testid="name-search-radio"
          type="radio"
          name="search-radio"
          value="Ingrediente"
        />
        Ingrediente
      </label>
      <label htmlFor="ingredient-search-radio">
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          name="search-radio"
          value="Nome"
        />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          name="search-radio"
          value="primeira-letra"
        />
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

// https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente};
// https://www.themealdb.com/api/json/v1/1/search.php?s={nome};
// https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra};

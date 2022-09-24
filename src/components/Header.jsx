import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

function Header(props) {
  const history = useHistory();
  const [showSearchBar, setSearchBar] = useState(false);
  const { title } = props;

  function goToProfile() {
    history.push('/profile');
  }

  function showTheSearchBar() {
    if (showSearchBar) {
      return setSearchBar(false);
    }
    return setSearchBar(true);
  }

  if (
    title === 'Favorite Recipes'
    || title === 'Done Recipes'
    || title === 'Profile'
  ) {
    return (
      <header>
        <h1 data-testid="page-title">{ title }</h1>
        <button
          data-testid="profile-top-btn"
          type="button"
          src={ ProfileIcon }
          onClick={ goToProfile }
        >
          <img src={ ProfileIcon } alt="Profile Icon" />
          Perfil
        </button>
      </header>
    );
  }

  return (
    <header>
      <h1 data-testid="page-title">{ title }</h1>
      <button
        data-testid="profile-top-btn"
        type="button"
        src={ ProfileIcon }
        onClick={ goToProfile }
      >
        <img src={ ProfileIcon } alt="Profile Icon" />
        Perfil
      </button>
      <button
        data-testid="search-top-btn"
        type="button"
        src={ SearchIcon }
        onClick={ showTheSearchBar }
      >
        <img src={ SearchIcon } alt="Search Icon" />
        Search
      </button>
      { showSearchBar && (
        <label htmlFor="search-input">
          <input data-testid="search-input" type="text" />
        </label>
      ) }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

// Rota "/meals": possui o header com o título "Meals" e os ícones de perfil e pesquisa
// Rota "/drinks": possui o header com o título "Drinks" e os ícones de perfil e pesquisa
// Rota "/profile": possui o header com o título "Profile" e o ícone de perfil, mas sem o ícone de pesquisa
// Rota "/done-recipes": possui o header com o título "Done Recipes" e o ícone de perfil, mas sem o ícone de pesquisa
// Rota "/favorite-recipes": possui o header com o título "Favorite Recipes" e o ícone de perfil, mas sem o ícone de pesquisa

import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
// commit

function Header() {
  const location = useLocation();
  const history = useHistory();
  const [showSearchBar, setSearchBar] = useState(false);

  function goToProfile() {
    history.push('/profile');
  }

  function showTheSearchBar() {
    if (showSearchBar) {
      return setSearchBar(false);
    }
    return setSearchBar(true);
  }

  const path = location.pathname;
  let showTitle = '';

  if (path === '/drinks') {
    showTitle = 'Drinks';
  }
  if (path === '/meals') {
    showTitle = 'Meals';
  }

  if (
    path === '/favorite-recipes'
    || path === '/done-recipes'
    || path === '/profile'
  ) {
    if (path === '/favorite-recipes') {
      showTitle = 'Favorite Recipes';
    }
    if (path === '/done-recipes') {
      showTitle = 'Done Recipes';
    }
    if (path === '/profile') {
      showTitle = 'Profile';
    }
    return (
      <header>
        <h1 data-testid="page-title">{ showTitle }</h1>
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
      <h1 data-testid="page-title">{ showTitle}</h1>
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

export default Header;

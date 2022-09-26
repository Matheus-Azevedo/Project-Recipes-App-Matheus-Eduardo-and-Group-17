import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

function Header() {
  const location = useLocation();
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
      >
        <img src={ ProfileIcon } alt="Profile Icon" />
        Perfil
      </button>
      <button
        data-testid="search-top-btn"
        type="button"
        src={ SearchIcon }
      >
        <img src={ SearchIcon } alt="Search Icon" />
        Search
      </button>
    </header>
  );
}

export default Header;

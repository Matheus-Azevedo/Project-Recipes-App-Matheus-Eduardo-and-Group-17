import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

import Style from './Footer.module.css';

function Footer() {
  return (
    <footer className={ Style.Content_footer } data-testid="footer">
      <Link
        to="/drinks"
      >
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="Icone de Bebidas" />
      </Link>
      <Link
        to="/meals"
      >
        <img data-testid="meals-bottom-btn" src={ mealIcon } alt="Icone de Comidas" />
      </Link>
    </footer>
  );
}

export default Footer;

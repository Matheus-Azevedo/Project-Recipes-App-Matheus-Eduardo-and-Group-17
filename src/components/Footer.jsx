import React from 'react';
import { Link } from 'react-router-dom';

import style from '../styles/components/Footer.module.css';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className={ style.Content_footer } data-testid="footer">
      <Link to="/drinks">
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="Icone de Bebidas"
        />
      </Link>
      <Link to="/meals">
        <img
          data-testid="meals-bottom-btn"
          src={ mealIcon }
          alt="Icone de Comidas"
        />
      </Link>
    </footer>
  );
}

export default Footer;

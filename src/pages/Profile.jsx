import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const [user, setUser] = useState({ email: '' });
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('user'));
    if (storage === null) {
      return;
    }
    setUser(storage);
  }, []);
  const { email } = user;
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('drinksToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
    history.push('/');
  };

  return (
    <div>
      <Header />
      <section>
        <p data-testid="profile-email">{email}</p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleLogout }
        >
          Logout
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  const { email } = user;
  return (
    <div>
      <Header />
      <section>
        <p data-testid="profile-email">{email}</p>
        <button type="button" data-testid="profile-done-btn">Done Recipes</button>
        <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
        <button type="button" data-testid="profile-logout-btn">Logout</button>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;

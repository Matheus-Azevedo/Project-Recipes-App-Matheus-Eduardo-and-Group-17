import { Route, Switch } from 'react-router-dom';
import React from 'react';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import './App.css';
import Login from './pages/Login';
import Recipes from './pages/Recipes';

import './App.css';
// import rockGlass from './images/rockGlass.svg';

function App() {
  return (

    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/meals" component={ Recipes } />
      <Route exact path="/drinks" component={ Recipes } />
      <Route exact path="/meals/:id" component={ () => null } />
      <Route exact path="/drinks/:id" component={ () => null } />
      <Route exact path="/meals/:id/in-progress" component={ () => null } />
      <Route exact path="/drinks/:id/in-progress" component={ () => null } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;

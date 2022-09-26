import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile';
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
      <Route exact path="/done-recipes" component={ () => null } />
      <Route exact path="/favorite-recipes" component={ () => null } />
    </Switch>
  );
}

export default App;

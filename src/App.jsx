import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Recipes from './pages/Recipes';

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
      <Route exact path="/profile" component={ () => null } />
      <Route exact path="/done-recipes" component={ () => null } />
      <Route exact path="/favorite-recipes" component={ () => null } />
    </Switch>
  );
}

export default App;

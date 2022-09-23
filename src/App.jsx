import React from 'react';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <div className="meals">
      <Login />
    </div>
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ () => null } />
      <Route exact path="/meals" component={ () => null } />
      <Route exact path="/drinks" component={ () => null } />
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

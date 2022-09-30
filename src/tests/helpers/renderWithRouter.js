import React from 'react';
import thunk from 'redux-thunk';

import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import rootReducers from '../../redux/reducers';

export const renderWithRouterAndRedux = (component, initialState, route = '/') => {
  const store = createStore(rootReducers, initialState, applyMiddleware(thunk));
  const history = createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>{component}</Router>
      </Provider>,
    ),
    history,
    store,
  };
};

export default renderWithRouterAndRedux;

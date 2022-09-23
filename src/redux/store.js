import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

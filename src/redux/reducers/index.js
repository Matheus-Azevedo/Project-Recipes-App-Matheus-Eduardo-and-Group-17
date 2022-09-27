import { combineReducers } from 'redux';
import RecipesAPI from './RecipesAPI';
import SearchAPI from './SearchAPI';

const rootReducer = combineReducers({
  RecipesAPI,
  SearchAPI,
});

export default rootReducer;

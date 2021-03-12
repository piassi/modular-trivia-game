import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import errors from './ducks/errors';
import { getFeaturesReducers } from '../features';
import thunk from 'redux-thunk';

export function store() {
  const store = createStore(
    combineReducers({
      errors,
      ...getFeaturesReducers(),
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}

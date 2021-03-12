import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import errors from './ducks/errors';
import { getModulesReducers } from '../modules';
import thunk from 'redux-thunk';

export function store() {
  const store = createStore(
    combineReducers({
      errors,
      ...getModulesReducers(),
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}

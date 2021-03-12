import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getModulesReducers } from '../modules';
import thunk from 'redux-thunk';

export function store() {
  const store = createStore(
    combineReducers(getModulesReducers()),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}

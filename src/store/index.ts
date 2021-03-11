import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import errors from './ducks/errors';
import createSagaMiddleware from 'redux-saga';
import { root } from './sagas';

export function store() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers({
      errors,
    }),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(root);

  return store;
}

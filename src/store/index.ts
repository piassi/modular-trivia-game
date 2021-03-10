import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import errors from './ducks/errors';
import createSagaMiddleware from 'redux-saga';
import { root } from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function store() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers({
      errors,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(root);

  return store;
}

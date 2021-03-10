import { all, fork } from 'redux-saga/effects';
import { errors } from './errors';

export function* root() {
  yield all([fork(errors)]);
}

import { all, fork } from 'redux-saga/effects';
import { root } from '.';
import { errors } from './errors';

describe('root saga', () => {
  it('should create root saga', () => {
    const saga = root();
    expect(saga.next().value).toEqual(all([fork(errors)]));
  });
});

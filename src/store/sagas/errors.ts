import { call, put, takeLatest } from 'redux-saga/effects';
import { reportError } from '../../services/report-error';
import { ADD, addError } from '../ducks/errors';

export function* sendErrorReport(payload: Error) {
  yield call(reportError, payload);
  yield put(addError(payload.message));
}

export function* errors() {
  yield takeLatest(ADD, sendErrorReport);
}

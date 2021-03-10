import { call, put, takeLatest } from 'redux-saga/effects';
import { reportError } from '../../services/report-error';
import { ADD, addError } from '../ducks/errors';
import { errors, sendErrorReport } from './errors';

describe('errors saga', () => {
  describe('root', () => {
    const saga = errors();
    expect(saga.next().value).toEqual(takeLatest(ADD, sendErrorReport));
  });

  describe('sendErrorReport', () => {
    it('should call reportError api with payload and add call addError', () => {
      const mockPayload = { message: 'Mock' };
      const saga = sendErrorReport(mockPayload);
      expect(saga.next().value).toEqual(call(reportError, mockPayload));
      expect(saga.next().value).toEqual(put(addError(mockPayload.message)));
    });
  });
});

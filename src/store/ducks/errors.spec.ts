import errorsReducer, { ADD, addError, getErrors } from './errors';
import { state } from '../../test/fixtures/state';

describe('reportError ducks', () => {
  describe('reducer', () => {
    it('should should return an empty array by default', () => {
      const reducer = errorsReducer();
      expect(reducer).toEqual([]);
    });

    it('should add new error to errors array', () => {
      const errorMessage = 'Mocked error!';
      const reducer = errorsReducer([], addError(errorMessage));
      expect(reducer).toEqual([errorMessage]);
    });
  });

  describe('action generators', () => {
    describe('addError', () => {
      it('should return add error action properly', () => {
        const errorMock = 'Mocked error!';
        expect(addError(errorMock)).toEqual({
          type: ADD,
          payload: errorMock,
        });
      });
    });

    describe('selectors', () => {
      describe('getErrors', () => {
        it('should select erors from state', () => {
          const games = getErrors(state);
          expect(games).toEqual(state.errors);
        });
      });
    });
  });
});

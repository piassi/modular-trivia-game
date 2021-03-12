import { store } from '.';
import { state } from '../tests/fixtures/state';

describe('store', () => {
  it('should create redux store', () => {
    const reduxStore = store();
    expect(reduxStore.getState()).toEqual(state);
  });
});

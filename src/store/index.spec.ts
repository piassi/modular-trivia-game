import { store } from '.';

describe('store', () => {
  it('should create redux store', () => {
    const reduxStore = store();
    expect(reduxStore.getState()).toEqual({
      errors: [],
    });
  });
});

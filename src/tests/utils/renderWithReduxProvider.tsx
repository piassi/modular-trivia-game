import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

export const renderWithReduxProvider = (children: ReactElement) => {
  return render(<Provider store={store()}>{children}</Provider>);
};

import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store';

export const renderWithProviders = (children: ReactElement) => {
  return render(
    <BrowserRouter>
      <Provider store={store()}>{children}</Provider>
    </BrowserRouter>
  );
};

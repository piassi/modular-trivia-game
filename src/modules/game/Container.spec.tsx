import { screen } from '@testing-library/react';
import { renderWithReduxProvider } from '../../tests/utils/renderWithReduxProvider';
import { Container } from './Container';

describe('Container', () => {
  it('should render welcome screen by default', () => {
    renderWithReduxProvider(<Container />);
    const title = screen.getByRole('heading', {
      name: /welcome/i,
    });

    expect(title).toBeInTheDocument();
  });
});

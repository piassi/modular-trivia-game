import { renderWithProviders } from '../../tests/utils/renderWithProviders';
import { Container } from './Container';
import reactRouter from 'react-router';

describe('Container', () => {
  it('should redirect to root if have no trivias', () => {
    const RedirectSpy = jest.spyOn(reactRouter, 'Redirect');
    renderWithProviders(<Container />);
    expect(RedirectSpy).toHaveBeenCalledWith({ to: '/' }, {});
  });
});

import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { trivias } from '../../tests/fixtures/trivias';
import { renderWithReduxProvider } from '../../tests/utils/renderWithReduxProvider';
import { Container } from './Container';
import * as service from './service';

describe('Container', () => {
  it('should render welcome screen by default', () => {
    renderWithReduxProvider(<Container />);
    const title = screen.getByRole('heading', {
      name: /welcome/i,
    });

    expect(title).toBeInTheDocument();
  });

  it('should load first trivia when user clicks on start button', async () => {
    renderWithReduxProvider(<Container />);
    jest.spyOn(service, 'getTrivias').mockResolvedValue(trivias);
    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    user.click(startButton);

    await waitFor(() => {
      const title = screen.queryByRole('heading', {
        name: trivias[0].category,
      });
      const question = screen.queryByText(trivias[0].question);

      expect(title).toBeInTheDocument();
      expect(question).toBeInTheDocument();
    });
  });

  it('should load next trivia after user select answer', async () => {
    renderWithReduxProvider(<Container />);
    jest.spyOn(service, 'getTrivias').mockResolvedValue(trivias);
    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    user.click(startButton);

    await waitFor(() => {
      const answerTruthyButton = screen.getByRole('button', {
        name: /true/i,
      });
      user.click(answerTruthyButton);

      const title = screen.queryByRole('heading', {
        name: trivias[1].category,
      });
      const question = screen.queryByText(trivias[1].question);

      expect(title).toBeInTheDocument();
      expect(question).toBeInTheDocument();
    });
  });
});

import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { trivias } from '../../tests/fixtures/trivias';
import { renderWithProviders } from '../../tests/utils/renderWithProviders';
import { Container } from './Container';
import * as service from './service';
import reactRouter from 'react-router';

describe('Container', () => {
  it('should render welcome screen by default', () => {
    renderWithProviders(<Container />);
    const title = screen.getByRole('heading', {
      name: /welcome/i,
    });

    expect(title).toBeInTheDocument();
  });

  it('should load first trivia when user clicks on start button', async () => {
    renderWithProviders(<Container />);
    jest.spyOn(service, 'getTrivias').mockResolvedValue(trivias);
    const startButton = await screen.findByRole('button', {
      name: /start/i,
    });

    user.click(startButton);

    const title = await screen.findByRole('heading', {
      name: trivias[0].category,
    });
    const question = screen.queryByText(trivias[0].question);

    await waitFor(() => {
      expect(title).toBeInTheDocument();
      expect(question).toBeInTheDocument();
    });
  });

  it('should load next trivia after user select answer', async () => {
    renderWithProviders(<Container />);
    jest.spyOn(service, 'getTrivias').mockResolvedValue(trivias);

    const startButton = await screen.findByRole('button', {
      name: /start/i,
    });

    user.click(startButton);

    const answerTruthyButton = await screen.findByRole('button', {
      name: /true/i,
    });

    user.click(answerTruthyButton);

    const title = screen.queryByRole('heading', {
      name: trivias[1].category,
    });
    const question = screen.queryByText(trivias[1].question);

    await waitFor(() => {
      expect(title).toBeInTheDocument();
      expect(question).toBeInTheDocument();
    });
  });

  it('should redirect to score after user finishes answering', async () => {
    renderWithProviders(<Container />);
    jest.spyOn(service, 'getTrivias').mockResolvedValue(trivias);
    const RedirectSpy = jest.spyOn(reactRouter, 'Redirect');
    const startButton = await screen.findByRole('button', {
      name: /start/i,
    });

    user.click(startButton);

    const answerTruthyButton = await screen.findByRole('button', {
      name: /true/i,
    });
    user.click(answerTruthyButton);
    user.click(answerTruthyButton);
    user.click(answerTruthyButton);

    expect(RedirectSpy).toHaveBeenCalledWith({ to: '/score' }, {});
  });
});

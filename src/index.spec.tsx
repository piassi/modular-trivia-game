import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { start } from './';
import { startMocks } from './mocks/startMocks';

jest.mock('react-dom', () => ({ render: jest.fn() }));
jest.mock('./mocks/startMocks');

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

beforeAll(() => {
  process.env = Object.assign(process.env, { NODE_ENV: 'development' });
});

const buildApp = () => {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
  start();

  return div;
};

describe('index', () => {
  it('should render application', () => {
    const div = buildApp();

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      div
    );
  });

  describe('on development environment', () => {
    it('should start mocked api', () => {
      buildApp();
      expect(startMocks).toHaveBeenCalledTimes(1);
    });
  });
});

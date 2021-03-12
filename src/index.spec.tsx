import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { start } from './';

jest.mock('react-dom', () => ({ render: jest.fn() }));

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
});

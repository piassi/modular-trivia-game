import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/bootstrap.scss';

export const start = (): void => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

start();

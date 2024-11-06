import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'; // Global styles
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.ts';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import './index.css';
  import { CounterContextProvider } from './context/CounterContext';

  ReactDOM.render(
  <React.StrictMode>

    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>,
    document.getElementById('root')
  );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { CounterContextProvider } from './context/CounterContext'; // Corrija a importação aqui
import { TitleColorContextProvider } from './context/TitleColorContext'; // Corrija a importação aqui

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

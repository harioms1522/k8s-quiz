import React from 'react';
import ReactDOM from 'react-dom/client';
import K8sQuizGame from './components/K8sQuizGame';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <K8sQuizGame />
    </ThemeProvider>
  </React.StrictMode>
);

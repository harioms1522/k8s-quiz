import React from 'react';
import ReactDOM from 'react-dom/client';
import K8sQuizGame from './components/K8sQuizGame';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <K8sQuizGame />
  </React.StrictMode>
);

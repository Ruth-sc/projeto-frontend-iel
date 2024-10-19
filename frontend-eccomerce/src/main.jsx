import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Crie a raiz do React usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderize o aplicativo dentro da raiz criada
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FavoritesProvider } from './components/FavouritesContext';

ReactDOM.render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

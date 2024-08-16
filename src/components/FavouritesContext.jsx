import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

 function FavoritesProvider({ children }) {
  
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (name) => 
    {
    setFavorites(prevFavorites => [...prevFavorites, name]);
  };

  const removeFavorite = (name) => 
    {
    setFavorites(prevFavorites => prevFavorites.filter(fav => fav !== name));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export {FavoritesProvider}
export {FavoritesContext}
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavouritesContext';

function FavouriteStudents() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="container mx-auto bg-orange-300 p-5 border rounded-md">
      <h1 className="text-2xl font-bold mb-4">Favourite Students ⭐</h1>
      <ul className="list-disc pl-5">
        {favorites.length > 0 ? (
          favorites.map(student => (
            <li key={student} className="mb-2 flex justify-between items-center">
              <span className="text-lg">{student}</span>
              <button
                onClick={() => removeFavorite(student)}
                className="ml-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>No favorite students yet.</p>
        )}
      </ul>
      <Link to="/" className="mt-4 inline-block text-slate-600 underline">
        Go to List of Students
      </Link>
    </div>
  );
}

export default FavouriteStudents;

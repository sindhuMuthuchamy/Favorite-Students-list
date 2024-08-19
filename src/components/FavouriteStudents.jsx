import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavouritesContext';

function FavouriteStudents() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="container mx-auto bg-pink-200 p-5 border rounded-md" style={{backgroundImage:'url("https://images2.alphacoders.com/130/1303532.png")'}}>
      <h1 className="text-2xl font-bold mb-4 text-blue-200">Favorite Students🪄</h1>
      <ul className="list-disc pl-5">
        {favorites.length > 0 ? (
          favorites.map(student => (
            <li key={student} className="mb-2 flex justify-between items-center text-white">
              <span className="text-lg text-[#787055] font-bold">{student}</span>
              <button
                onClick={() => removeFavorite(student)}
                className="ml-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className='text-[#787055] font-semibold'>No favorite students yet.</p>
        )}
      </ul>
      <Link to="/" className="mt-4 inline-block font-bold text-blue-400 underline" >
        Go to List of Students
      </Link>
    </div>
  );
}

export default FavouriteStudents;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavouritesContext';

const studentsList = [
  'Sindhu', 'Hasni', 'Priya', 'Thaslim', 'Suba'
];

function ListOfStudents() {
  const { favorites, addFavorite } = useContext(FavoritesContext);

  return (
    <div className="container mx-auto bg-slate-400 p-5 border rounded-md">
      <h1 className="text-2xl font-bold mb-4">List of Students</h1>
      <ul className="list-disc pl-5">
        {studentsList.map(student => (
          <li key={student} className="mb-2 flex justify-between items-center">
            <span className="text-lg">{student}</span>
            <button
              onClick={() => addFavorite(student)}
              disabled={favorites.includes(student)}
              className={`ml-4 px-4 py-2 text-white font-bold rounded ${
                favorites.includes(student) ? 'bg-gray-600' : 'bg-black hover:bg-gray-900'
              }`}
            >
              Add to ⭐
            </button>
          </li>
        ))}
      </ul>
      <Link to="/favourites" className="mt-4 inline-block text-orange-600 underline">
        Go to Favourite Students
      </Link>
    </div>
  );
}

export default ListOfStudents;

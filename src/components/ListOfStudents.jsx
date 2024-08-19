import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavouritesContext';
// import {background} from '../images/Hogwarts.jpg';

const studentsList = [
  'Hermione Granger', 'Harry Potter', 'Ron Weasley', 'Ginny Weasley', 'Cedric Diggory','Draco Malfoy'
];

function ListOfStudents() {
  const { favorites, addFavorite } = useContext(FavoritesContext);

  return (
    <div className="container mx-auto bg-slate-400 p-5 border rounded-md h-full" style={{backgroundImage:'url("https://preview.redd.it/hogwarts-legacy-dark-edition-official-pc-wallpaper-v0-potn7vwaxyj91.png?width=1080&crop=smart&auto=webp&s=06c43132256143ee78313b2b576c8ab41b41b086")'}}>
      <h1 className="text-2xl font-bold mb-4 text-[#5EE588]">List of Students</h1>
      <ul className="list-disc pl-5">
        {studentsList.map(student => (
          <li key={student} className="mb-2 flex justify-between items-center text-[#C9E2C8] font-bold">
            <span className="text-lg">{student}</span>
            <button
              onClick={() => addFavorite(student)}
              disabled={favorites.includes(student)}
              className={`ml-4 px-4 py-2 text-white font-bold rounded ${
                favorites.includes(student) ? 'bg-gray-600' : 'bg-[#787055] hover:bg-[#a89b71]'
              }`}
            >
              Add to ⭐
            </button>
          </li>
        ))}
      </ul>
      <Link to="/favourites" className="mt-4 font-bold inline-block text-green-700 hover:underline">
        Go to Favourite Students
      </Link>
    </div>
  );
}

export default ListOfStudents;

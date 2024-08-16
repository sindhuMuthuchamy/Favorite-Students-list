import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListOfStudents from './components/ListOfStudents';
import FavouriteStudents from './components/FavouriteStudents';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-5">
        <Routes>
          <Route path="/" element={<ListOfStudents />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

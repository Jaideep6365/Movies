import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const API_KEY = 'de76a6dea675f5425bc09b226f986644';

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      const data = await response.json();
      if (data.results) {
        setMovies(data.results);
        setError(null);
      } else {
        setMovies([]);
        setError('No popular movies found');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching data');
    }
  };

  const fetchMovies = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
      const data = await response.json();
      if (data.results) {
        setMovies(data.results);
        setError(null);
      } else {
        setMovies([]);
        setError('No movies found');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    fetchPopularMovies(); 
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetchMovies(searchTerm); 
    } else {
      fetchPopularMovies(); 
    }
  }, [searchTerm]);

  return (
    <div className="bg-gradient-to-r from-pink-300 to-blue-300 min-h-screen">
      <Navbar />
      <div className='flex justify-center w-full'>
        <input
          type="text"
          placeholder="Search movies by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-xl m-4 w-80"
        />
      </div>
      <Routes>
        <Route path="/" element={<Card movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;


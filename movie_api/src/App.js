import React from "react";
import { useEffect, useState } from 'react';

import MovieCard from "./Components/MovieCard";

import { FaSearchengin } from "react-icons/fa";

// cc18a50d

import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=cc18a50d';

// const movie1 = {
//   "Title": "Superman, Spiderman or Batman",
//   "Year": "2011", 
//   "imdbID": "tt2084949",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// };

const App = () => {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  
    setMovies(data.Search);
  };
  

  useEffect(() => {
    searchMovies('Shrek');
  }, []);

  console.log(movies)

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input 
          type="text" 
          placeholder="Search for movies!" 
          value={searchTerm} 
          onChange={(event) => setSearchTerm(event.target.value)}
          />
          <FaSearchengin 
            className=""
            onClick={() => searchMovies(searchTerm)}    
          />
      </div>

      {movies?.length > 0 
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
import React from "react";
import { useEffect } from 'react';

import MovieCard from "./Components/MovieCard";

import { FaSearchengin } from "react-icons/fa";

// cc18a50d

import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=cc18a50d';

const movie1 = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
};

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    searchMovies('SPiderman');
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input 
          type="text" 
          placeholder="Search for movies!" 
          value="Spiderman" 
          onChange={() => {}}
          />
          <FaSearchengin 
            className=""
            onClick={() => {

            }}    
          />
      </div>

      <div className="container">
         <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
}

export default App;
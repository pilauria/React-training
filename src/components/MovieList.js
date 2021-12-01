// src/components/MovieList.js

import { useState } from 'react';
import moviesDataJSON from '../movies-data.json';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import FilterMovies from './FilterMovies';

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);

  const addNewMovie = newMovie => {
    const updatedMoviesData = [...moviesData, newMovie];
    const updatedMovies = [...movies, newMovie];

    setMoviesData(updatedMoviesData);
    setMovies(updatedMovies);
  };

  const filterMovieList = str => {
    let filteredMovies;

    if (str === 'All') {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter(movie => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }

    setMovies(filteredMovies);
  };

  return (
    <div>
      <FilterMovies filterMovies={filterMovieList} />
      <AddMovie addMovie={addNewMovie} />
      <h2>Movie List</h2>
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;

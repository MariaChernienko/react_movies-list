import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = (props) => {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
    </div>
  );
};
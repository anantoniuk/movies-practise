export const filterMoviesByGenre = (genre, movies) => {
  const moviesFilter = movies.filter((movie) => movie.genre.includes(genre));
  return moviesFilter;
};

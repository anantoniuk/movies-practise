export const sortMovies = (query, movies) => {
  const sortedMovies = [...movies].sort((a, b) => {
    if (query === "year") {
      return b.year - a.year;
    } else if (query === "rating") {
      return b.rating - a.rating;
    }
  });
  return sortedMovies;
};

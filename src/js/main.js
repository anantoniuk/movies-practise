import movies from "./data.js";
import { renderMovies } from "./render.js";
import { searchFilm } from "./search.js";
import { filterMoviesByGenre } from "./filter-by-genre.js";
import { sortMovies } from "./sort-by-year.js";

const moviesContainer = document.querySelector("[data-movies]");
renderMovies(movies, moviesContainer);

const inputMoviesSearch = document.querySelector("[data-search]");

const handleSearchMovie = (event) => {
  const query = event.target.value.toLowerCase();
  const searchedFilm = searchFilm(query, movies);
  renderMovies(searchedFilm, moviesContainer);
};

const containerGenre = document.querySelector("[data-filter]");

const handelFilterByGenre = (event) => {
  const curentGenre = event.target.dataset.ganre;
  const filterMovies = filterMoviesByGenre(curentGenre, movies);
  renderMovies(filterMovies, moviesContainer);
};

const containerSort = document.querySelector("[data-sort]");

const handelSortMovies = (event) => {
  const query = event.target.value;
  console.log(query);
  const sortedMovies = sortMovies(query, movies);
  console.log(sortedMovies);
  renderMovies(sortedMovies, moviesContainer);
};

inputMoviesSearch.addEventListener("input", handleSearchMovie);
containerGenre.addEventListener("click", handelFilterByGenre);
containerSort.addEventListener("change", handelSortMovies);

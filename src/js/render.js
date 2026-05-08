export const renderMovies = (movies, container) => {
  const movieHtml = `<ul class="movie-list">${movies
    .map(
      (movie) =>
        `<li class="movie-item">
                <article class="movie">
                  <div class="movie-photo">
                    <img class="movie-image" src="${movie.poster}" alt="${movie.title}" />
                  </div>
                  <div class="movie-meta">
                    <h2 class="movie-title">${movie.title}</h2>
                    <p class="movie-year">${movie.year}</p>
                    <p class="movie-description">${movie.description}</p>
                    <p class="movie-genre">${movie.genre.join(", ")}</p>
                    <p class="movie-rating">${movie.rating}</p>
                  </div>
                </article>
              </li>`,
    )
    .join("")}</ul>`;
  if (container) {
    container.innerHTML = movieHtml;
  }
};

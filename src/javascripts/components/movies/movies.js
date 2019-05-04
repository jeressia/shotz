import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<div id="${movie.id}" class="card movie" style="width: 18rem;">`;
    domString += `<div class="card-header"><h2>${movie.name}<h2></div>`;
    domString += `<img class="card-img-top" src=${movie.imageURL} alt="${movie.name}">`;
    domString += '<ul class="card-body">';
    domString += `<li class="list-group-item"><strong>Genre:</strong> ${movie.genre}</li>`;
    domString += `<li class="list-group-item"><strong>Release Date:</strong> ${movie.releaseDate}</li>`;
    domString += `<li class="list-group-item description"><strong>Description:</strong> ${movie.description}</li>`;
    domString += `<li class="list-group-item locationText"><strong>${movie.locations.length}</strong> Locations</li>`;
    domString += '</ul>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResults = resp.data.movies;
      movies = moviesResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies, domStringBuilder };

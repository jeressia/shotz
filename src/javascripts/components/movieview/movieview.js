import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

let moviesArray = [];

const domStringBuilder = (view1) => {
  let domString = '';
  view1.forEach((movie) => {
    domString += `<div id="${movie.id}" class="card movie bg-dark text-light" style="width: 18rem;">`;
    domString += `<div class="card-header bg-light text-dark"><h4>${movie.name}</h4></div>`;
    domString += `<img class="card-img-top" src=${movie.imageURL} alt="${movie.name}">`;
    domString += '<ul class="card-body">';
    domString += `<li class="list-group-item bg-secondary text-light"><strong>Genre:</strong> ${movie.genre}</li>`;
    domString += `<li class="list-group-item bg-light text-dark"><strong>Release Date:</strong> ${movie.releaseDate}</li>`;
    domString += `<li class="list-group-item description bg-secondary text-light"><strong>Description:</strong><br> ${movie.description}</li>`;
    domString += `<li class="list-group-item locationText bg-light text-dark"><strong>${movie.locations.length}</strong> Locations</li>`;
    domString += '</ul>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const filterButtonEvent = (e) => {
  e.stopPropagation();
  const buttonId = e.target.parentElement.id;
  const movie1 = moviesArray.filter(x => x.id === 'movie1');
  const movie2 = moviesArray.filter(x => x.id === 'movie2');
  const movie3 = moviesArray.filter(x => x.id === 'movie3');
  const movie4 = moviesArray.filter(x => x.id === 'movie4');
  switch (buttonId) {
    case 'movie1':
      domStringBuilder(movie1);
      break;
    case 'movie2':
      domStringBuilder(movie2);
      break;
    case 'movie3':
      domStringBuilder(movie3);
      break;
    case 'movie4':
      domStringBuilder(movie4);
      break;
    default:
      domStringBuilder(moviesArray);
  }
};

const singleMovie = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      moviesArray = movieResults;
      domStringBuilder(moviesArray);
      document.getElementById('movie1').addEventListener('click', filterButtonEvent);
      document.getElementById('movie2').addEventListener('click', filterButtonEvent);
      document.getElementById('movie3').addEventListener('click', filterButtonEvent);
      document.getElementById('movie4').addEventListener('click', filterButtonEvent);
    })
    .catch(err => console.error(err));
};

export default { singleMovie };

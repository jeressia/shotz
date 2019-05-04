import movies from './components/movies/movies';
import locations from './components/locations/locations';
import views from './components/movieview/movieview';

import '../styles/main.scss';

const init = () => {
  movies.initializeMovies();
  locations.initializeLocations();
  views.singleMovie();
};

init();

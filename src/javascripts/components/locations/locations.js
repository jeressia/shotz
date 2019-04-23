import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div id="${location.id}" class="card location col-2">`;
    domString += `<div class="card-header">${location.name}</div>`;
    domString += `<img class="card-img-top"> <img src="${location.imageUrl}">`;
    domString += '<ul class="list-group list-group-flush">';
    domString += `<li class="list-group-item address"><strong>Address</strong><br> ${location.address}</li>`;
    domString += '</ul>';
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationsResults = resp.data.locations;
      locations = locationsResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations, domStringBuilder };

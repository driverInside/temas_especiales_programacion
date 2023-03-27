const BASE_URL = 'https://rickandmortyapi.com/api';
const RESOURCE = 'episode';

const episodesController = {
  getAll: () => {
    return fetch(`${BASE_URL}/${RESOURCE}`).then(response => response.json())
  }
};

module.exports = episodesController;

const { EpisodesModel } = require('../models')

const BASE_URL = 'https://rickandmortyapi.com/api';
const RESOURCE = 'episode';

async function getAll () {
  const episodesSaved = await EpisodesModel.find({});

  if (episodesSaved.length) {
    return episodesSaved;
  }

  let next;
  const episodes = [];
  do {
    const result = await getByUrl(next);
    next = result.info?.next;
    episodes.push(...result.results)
  } while (next !== null);

  if (episodes.length) {
    for (const episode of episodes) {
      const newEpisode = new EpisodesModel(episode);
      await newEpisode.save();
    }
  }

  return episodes;
}

async function getByUrl (next = null) {
  const url = next || `${BASE_URL}/${RESOURCE}`;

  return fetch(url).then(response => response.json());
}

const episodesController = {
  getAll,
  getByUrl
};

module.exports = episodesController;

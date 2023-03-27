const express = require('express');
const router = express.Router();

const episodesController = require('../controllers/episodes');

router.get('/', async (_, res) => {
  const episodes = await episodesController.getAll();

  res.send(episodes);
});

module.exports = router;

const express = require('express');
const router = express.Router();

const episodesRouter = require('./episodes');

router.use('/episodes', episodesRouter);

module.exports = router;

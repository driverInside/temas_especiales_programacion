const express = require('express');
const app = express();

const routes = require('./api');

app.use(routes);

module.exports = app;

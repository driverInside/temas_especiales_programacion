const express = require('express');
const app = express();

const routes = require('./api');

app.use(routes);

app.get('/episodes', (_, res) => {
  res.send({
    message: 'hello world'
  });
});

module.exports = app;

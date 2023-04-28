const express = require('express');
const app = express();

app.get('/', (_, res) => {
  return res.send({
    message: 'ex7'
  });
});

module.exports = app;

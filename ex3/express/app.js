const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (_, res) => {
  res.send({
    message: 'Hello world'
  });
});

app.post('/', (_, res) => {
  res.send({
    message: 'Foo bar'
  });
});

app.put('/foo', (req, res) => {
  res.send({
    method: req.method,
    url: req.url
  })
});

app.get('/random', (_, res) => {
  res.send({
    number: getRandomIntInclusive(1, 10)
  });
});

app.post('/fib/:nth', (req, res) => {
  const nth = req.params.nth; // const { nth } = req.params;
  const result = [];

  for (let i = 0; i <= nth; i++) {
    result.push(fib(i));
  }

  res.send({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT :${PORT}`);
});

function fib(nth) {
  return nth < 2 ? 1: fib (nth - 1) + fib (nth - 2);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

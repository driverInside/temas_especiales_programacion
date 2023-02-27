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

app.listen(PORT, () => {
  console.log(`Server is running at PORT :${PORT}`);
});

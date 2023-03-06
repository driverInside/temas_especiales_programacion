const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.send({
    message: 'get all the teachers'
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    message: `searching the id: ${id}`
  });
});

module.exports = router;

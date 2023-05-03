const express = require('express');
const router = express.Router();

const editorialsController = require('../controllers/editorials');

router.get('/', async (_, res) => {
  const editorials = await editorialsController.getAll();

  return res.send(editorials);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const editorial = await editorialsController.findByPk(id);

  if (editorial) {
    return res.send(editorial);
  }

  console.warn(`${new Date().toISOString()}: id ${id} not found`);

  return res.status(404).send({
    message: `The editorial is not found`,
    id
  })
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await editorialsController.deleteById(id);

  return res.status(204).send();
});

module.exports = router;

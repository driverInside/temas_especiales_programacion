const express = require('express');
const router = express.Router();

const studentsRouter = require('./students');

router.use('/students', studentsRouter);

module.exports = router;

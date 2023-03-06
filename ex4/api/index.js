const express = require('express');
const router = express.Router();

const studentsRouter = require('./students');
const teachersRouter = require('./teachers');

router.use('/students', studentsRouter);
router.use('/teachers', teachersRouter);

module.exports = router;

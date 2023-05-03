const router = require('express').Router();

const editorialsRouter = require('./editorials');

router.use('/editorials', editorialsRouter);

module.exports = router;

const express = require('express');
const router = express.Router();

const {studentModel} = require('../models');

router.get('/', async (_, res) => {
  const students = await studentModel.find({});

  res.send({
    message: 'get all the students',
    students
  });
});

router.post('/', async (req, res) => {
  const body = req.body;

  const newStudent = new studentModel(body);

  await newStudent.save();

  res.send({
    message: 'create a student',
    newStudent
  });
});

module.exports = router;

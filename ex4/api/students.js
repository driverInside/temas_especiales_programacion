// const router = require('express').Router();
const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker');

const DEFAULT_LIMIT = 20;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function buildStudents(size = 1) {
  const students = [];

  for (let i = 0; i < size; i++) {
    const isRregularRandom = Math.random();
  
    const student = {
      id: `0000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: getRandomIntInclusive(18, 28),
      email: faker.internet.email().toLowerCase(),
      isRegular: isRregularRandom < 0.6,
      isHolder: isRregularRandom < 0.2
    };
    
    students.push(student);
  }

  return students;
}

router.get('/', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;
  const isHolder = req.query.is_holder && req.query.is_holder === 'true';
  const minimumAge = req.query.age? parseInt(req.query.age): 0;
  const students = buildStudents(limit);

  delete req.query.limit
  if (!Object.keys(req.query).length) {
    return res.send(students);
  }

  const studentsResult = [];

  for (let i = 0; i < students.length; i++) {
    const st = students[i];

    if (minimumAge && st.age >= minimumAge) {
      studentsResult.push(st);
    }
  }

  res.send(studentsResult);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    message: `searching the id: ${id}`
  });
});

module.exports = router;

// const router = require('express').Router();
const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker');

const DEFAULT_LIMIT = 20;

router.get('/', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;

  const students = [];

  for (let i = 0; i < limit; i++) {
    const student = {
      id: `0000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName()
      // age, grade: use the random inclusive function
      // email: faker
      // is_regular: use Math.random() true 60% probabilities
      // is_regular: use Math.random() true 20% probabilities
    };
    
    students.push(student);
  }

  res.send(students);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    message: `searching the id: ${id}`
  });
});

module.exports = router;

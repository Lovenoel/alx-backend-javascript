const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database)
    .then(() => {
      res.send('This is the list of our students');
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.listen(1245);
module.exports = app;

'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api')); // include our routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  switch (err.name) {
    case 'SequelizeForeignKeyConstraintError':
    case 'SequelizeValidationError':
      err.message = 'Validation Error: Database Refused Request';
      err.status = 400;
      break;
    default:
      err.message = 'Internal server error';
      err.status = 500;
      break;
  }
  console.log(err.stack);
  res.status(err.status).send(err.message);
});

module.exports = app;

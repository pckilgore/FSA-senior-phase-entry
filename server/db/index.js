'use strict';

const db = require('./database');
const Campus = require('./campus');
const Student = require('./student');
const Picture = require('./picture');

Student.belongsTo(Campus);
Campus.hasMany(Student);
Campus;

module.exports = {
  db,
  Campus,
  Student
};

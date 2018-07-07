const db = require('./database');
const sqz = require('sequelize');

const Student = db.define('Student', {
  name: {
    type: sqz.STRING,
    allowNull: false
  }
});

module.exports = Student;

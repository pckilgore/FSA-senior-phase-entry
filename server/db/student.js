const db = require('./database');
const sequelize = require('sequelize');

const Student = db.define('Student', {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  gpa: {
    type: sequelize.NUMBER,
    allowNull: false,
  },
  imgUrl: {
    type: sequelize.STRING,
  },
});

module.exports = Student;

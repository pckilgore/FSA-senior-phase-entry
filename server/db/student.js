const db = require('./database');
const sequelize = require('sequelize');

const Student = db.define('student', {
  firstName: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: sequelize.STRING,
    defaultValue:
      'https://dummyimage.com/128/ffffff/000000.png&text=No+Image+Provided',
    validate: {
      isUrl: true,
    },
  },
  gpa: {
    type: sequelize.DECIMAL,
    allowNull: false,
    validate: { min: 0, max: 4 },
  },
});

module.exports = Student;

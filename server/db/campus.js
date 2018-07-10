const db = require('./database');
const sequelize = require('sequelize');

const Campus = db.define('campus', {
  name: {
    type: sequelize.STRING,
    allowNull: false,
    validation: {
      notEmpty: true,
    },
  },
  address: {
    type: sequelize.STRING,
    allowNull: false,
    validation: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: sequelize.STRING,
    defaultValue: 'https://placeimg.com/800/800/arch',
    validate: {
      isUrl: true,
    },
  },
  description: {
    type: sequelize.TEXT,
    defaultValue: 'No description of this campus was provided.',
  },
});

module.exports = Campus;

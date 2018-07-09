const db = require('./database');
const sqz = require('sequelize');

const Campus = db.define('Campus', {
  name: {
    type: sqz.STRING,
    allowNull: false,
  },
  location: {
    type: sequelize.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: sequelize.STRING,
  },
  description: {
    type: sequelize.TEXT,
    defaultValue: 'No description of this campus was provided.',
  },
});

module.exports = Campus;

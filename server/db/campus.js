const db = require('./database');
const sqz = require('sequelize');

const Campus = db.define('Campus', {
  name: {
    type: sqz.STRING,
    allowNull: false
  }
});

module.exports = Campus;

const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
})

module.exports = Gig;
/* Create table user in database
const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  }
})

module.exports = User;*/

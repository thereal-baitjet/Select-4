// Require User from the models folder
const { User } = require('../models');

// Create an array of objects representing user properties
const userData = [
  {
    username: 'demo',
    password: 'password'
  },
  {
    username: 'amazonash',
    password: '12345678'
  },
  {
    username: 'christineoz',
    password: '12345678'
  },
  {
    username: 'John-Mancini',
    password: '12345678'
  },
  {
    username: 'kvaden19',
    password: '12345678'
  },
  {
    username: 'thereal-baitjet',
    password: '12345678'
  }
];

// Have Sequelize do a "bulk create" of User instances based on the array of objects
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
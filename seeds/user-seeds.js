// Require User from the models folder
const { User } = require('../models');

// Create an array of objects representing user properties
const userData = [
  {
    email: 'demo@rutgers.edu',
    name: 'demo',
    password: 'password'
  },
  {
    email: 'email@email.com',
    name: 'amazonash',
    password: '12345678'
  },
  {
    email: 'email@email.com',
    name: 'christineoz',
    password: '12345678'
  },
  {
    email: 'email@email.com',
    name: 'John-Mancini',
    password: '12345678'
  },
  {
    email: 'email@email.com',
    name: 'kvaden19',
    password: '12345678'
  },
  {
    email: 'baitjet@gmail.com',
    name: 'thereal-baitjet',
    password: '12345678'
  }
];

// Have Sequelize do a "bulk create" of User instances based on the array of objects
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
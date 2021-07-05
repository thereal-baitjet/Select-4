// Require Ticket from the models folder
const { Ticket } = require('../models');

// Create an array of objects representing ticket properties
const ticketData = [
  {
    number: '1234',
    date: new Date(new Date().setDate(new Date().getDate() + 1)), // set the Date object for tomorrow's date
    user_id: 1
  },
  {
    number: '3240',
    date: new Date(new Date().setDate(new Date().getDate() + 1)), // set the Date object for tomorrow's date
    user_id: 2
  },
  {
    number: '5081',
    date: new Date(new Date().setDate(new Date().getDate() + 1)), // set the Date object for tomorrow's date
    user_id: 3
  },
  {
    number: '0481',
    date: new Date(new Date().setDate(new Date().getDate() + 1)), // set the Date object for tomorrow's date
    user_id: 4
  },
  {
    number: '5680',
    date: new Date(new Date().setDate(new Date().getDate() + 1)), // set the Date object for tomorrow's date
    user_id: 5
  },
  {
    number: '2711',
    date: new Date(new Date().setDate(new Date().getDate() + 1)), // set the Date object for tomorrow's date
    user_id: 6
  }
];

// Have Sequelize do a "bulk create" of User instances based on the array of objects
const seedTickets = () => Ticket.bulkCreate(ticketData);

module.exports = seedTickets;
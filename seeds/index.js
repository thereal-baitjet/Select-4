// Require each of the model seed scripts
const seedUsers = require('./user-seeds');
const seedTickets = require('./ticket-seeds');

// Import sequelize connection
const sequelize = require('../config/connection');

// Sync all Models to the database, then run each seed function
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedTickets();
    console.log('\n----- TICKETS SEEDED -----\n');

    // Forces Node.js program to terminate
    process.exit(0);
};

seedAll();
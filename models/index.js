const User = require('./User');
const Ticket = require('./Ticket');

// User has many Tickets
User.hasMany(Ticket, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
  
// Ticket belongs to one user
Ticket.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Ticket };
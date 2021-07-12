const router = require('express').Router();
const ticketRoutes = require('./ticketRoutes');
const userRoutes = require ("./userRoutes")
router.use('/tickets', ticketRoutes);
router.use('/users', userRoutes);

module.exports = router;
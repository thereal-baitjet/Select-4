const router = require('express').Router();
const ticketRoutes = require('./ticketRoutes');
const userRoutes = require ("./userRoutes")
router.use('/tickets', ticketRoutes);
router.use('/user', userRoutes);

module.exports = router;
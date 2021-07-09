const router = require('express').Router();
const ticketRoutes = require('./ticketRoutes');

router.use('/tickets', ticketRoutes);

module.exports = router;
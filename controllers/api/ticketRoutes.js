const router = require('express').Router();
const { Ticket } = require('../../models');

// Route: POST /api/tickets/
// Allows user to create a new ticket
// TODO: Connect to front-end Keypad component
// TODO: Need to consider logged-in user once Auth is set up
// TODO: Need to design ticket to hold 3 numbers? 1 might be better for MVP.
router.post('/', async (req, res) => {
    try {
        const ticketData = await Ticket.create(req.body);
        res.status(200).json(ticketData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Route: GET /api/tickets/
// Allows user to view tickets in their wallet
// TODO: Connect to front-end Wallet component
// TODO: Need to consider logged-in user once Auth is set up
// TODO: Should this be designed to only pull tix for the current date?
router.get('/', async (req, res) => {
    try {
        const ticketData = await Ticket.findAll();
        res.status(200).json(ticketData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
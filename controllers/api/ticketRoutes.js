const router = require("express").Router();
const { Ticket } = require("../../models");

// Route: POST /api/tickets/
// Allows user to create a new ticket
router.post("/", async (req, res) => {
  try {
    const ticketData = await Ticket.create({
      ...req.body
    });
    res.status(200).json(ticketData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route: GET /api/tickets/wallet/:param user_id
// Allows user to view tickets in their wallet
router.get("/wallet/:user_id", async (req, res) => {
  console.log('In the GET route with ', req.params.user_id);
  try {
    const today = new Date().toDateString();
    const ticketData = await Ticket.findAll({
      where: {
        date: today,
        user_id: req.params.user_id
      }
    });
    res.status(200).json(ticketData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route: GET /api/tickets/all
// Allows user to view tickets in their wallet
router.get("/all", async (req, res) => {
  try {
    const today = new Date().toDateString();
    const ticketData = await Ticket.findAll({
      where: {
        date: today
      }
    });
    res.status(200).json(ticketData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
const router = require("express").Router();
const { Ticket } = require("../../models");

// Route: POST /api/tickets/
// Allows user to create a new ticket
router.post("/", async (req, res) => {
  console.log("post.tickets");
  console.log(req.body);
  try {
    const ticketData = await Ticket.create(req.body);

    console.log(ticketData);
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
router.get("/", async (req, res) => {
  try {
    const ticketData = await Ticket.findAll();
    res.status(200).json(ticketData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/dummyTicket", async (req, res) => {
  try {
    const ticketData = await Ticket.create({
      user_id: 5,
      number: "5555",
      date: "2021-07-15T01:38:49.151Z",
    });

    console.log(ticketData);
    res.status(200).json(ticketData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/test", async (req, res) => {
  res.send("test");
});

module.exports = router;

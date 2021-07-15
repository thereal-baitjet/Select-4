import axios from "axios";

export default {
  // Gets all tickets
  getTickets: function() {
    return axios.get("/api/tickets");
  },
  // Saves a ticket to the database
  createTicket: function(ticketData) {
    return axios.post("/api/tickets", ticketData);
  }
};
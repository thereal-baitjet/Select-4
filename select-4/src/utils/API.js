import axios from "axios";

export default {
  // Gets all tickets
  getAllTickets: function() {
    return axios.get("/api/tickets/all");
  },
  getUserTickets: function(userData) {
    return axios.get("/api/tickets/wallet/" + userData);
  },
  // Saves a ticket to the database
  createTicket: function(ticketData) {
    return axios.post("/api/tickets", ticketData);
  },
  // Gets user session
  getSession: function() {
    return axios.get("/api/user/userStatus");
  }
};
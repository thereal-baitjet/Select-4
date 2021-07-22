import React, { Component } from "react";
import API from "../utils/API.js";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import TicketContext from "../utils/TicketContext";
import "./wallet.css";

class Wallet extends Component {
  state = {
    ticket1: "",
    ticket2: "",
    ticket3: "",
    loggedInUser: ""
  };

  // Get user's tickets from database
  componentDidMount() {
    API.getSession()
    .then((res) => this.setState({ loggedInUser: res.data.user_id }))
    .then((res) => console.log('On Wallet page as ', this.state.loggedInUser))
    .then((res) => API.getUserTickets(this.state.loggedInUser))
    // .then((res) => console.log(res))
    .then((res) => {
      if (!res.data[0]) { this.setState({ ticket1: '' }) } 
        else { this.setState({ ticket1: res.data[0].number }) }
      if (!res.data[1]) { this.setState({ ticket2: '' }) } 
        else { this.setState({ ticket2: res.data[1].number }) }
      if (!res.data[2]) { this.setState({ ticket3: '' }) } 
        else { this.setState({ ticket3: res.data[2].number }) }
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <TicketContext.Provider value={this.state}>
        <div className="bkGround">
          <h1
            style={{
              display: "flex",
              justifyContent: "Center",
              alignItems: "Right",
              marginTop: "10vh",
              height: "5vh",
              color: "white",
            }}
          >
            These are your tickets! If your any of your numbers match todays'
            drawing you'll take home $1000.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "Center",
              alignItems: "Right",
              marginTop: "10vh",
              height: "30vh",
            }}
          >
            <div
              style={{ boxShadow: "1px 3px 1px #9E9E9E" }}
              className="row h-100 justify-content-center align-items-center"
            >
              <Card
                style={{
                  boxShadow: "10px 30px 10px #9E9E9E",
                  backgroundImage:
                    "url(https://i.ibb.co/mc5Vs1B/ticketbackground.jpg)",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "99px" }}>SELECT-4</Card.Title>
                  <Card.Text
                    style={{
                      borderTop: "5px solid",
                      borderBottom: "5px solid",
                    }}
                  >
                    YOUR CHANCE TO PICK TODAYS WINNING NUMBERS
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem
                    style={{
                      borderTop: "5px solid",
                      backgroundColor: "#EBCD46",
                      fontSize: "40px",
                    }}
                  >
                    <TicketContext.Consumer>
                      {(context) => {
                        const ticketNumber = context.ticket1;

                        return <p>A. {ticketNumber}</p>;
                      }}
                    </TicketContext.Consumer>
                  </ListGroupItem>
                  <ListGroupItem
                    style={{ backgroundColor: "#EBCD46", fontSize: "40px" }}
                  >
                    <TicketContext.Consumer>
                      {(context) => {
                        const ticketNumber = context.ticket2;

                        return <p>B. {ticketNumber}</p>;
                      }}
                    </TicketContext.Consumer>
                  </ListGroupItem>
                  <ListGroupItem
                    style={{
                      borderBottom: "5px solid",
                      backgroundColor: "#EBCD46",
                      fontSize: "40px",
                    }}
                  >
                    <TicketContext.Consumer>
                      {(context) => {
                        const ticketNumber = context.ticket3;

                        return <p>C. {ticketNumber}</p>;
                      }}
                    </TicketContext.Consumer>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link
                    style={{
                      fontFamily: "timesNewRoman",
                      fontSize: "30px",
                      textDecoration: "none",
                    }}
                    href="#keypad"
                  >
                    PLAY AGAIN
                  </Card.Link>
                  <Card.Text
                    style={{
                      borderTop: "5px solid",
                      borderBottom: "5px solid",
                    }}
                  >
                    GET RICH. GET HAPPY. TODAY.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </TicketContext.Provider>
    );
  }
}

export default Wallet;

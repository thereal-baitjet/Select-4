import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Wallet = (props) => {
  return (
    <div>
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
        These are your tickets if your any of your numbers match the drawing
        number for today you will win $1,000.00 dollars
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
                style={{ borderTop: "5px solid", borderBottom: "5px solid" }}
              >
                YOUR CHANCE TO PICK TODAYS WINING NUMBERS
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
                A. {props.numbersPicked[0]}
              </ListGroupItem>
              <ListGroupItem
                style={{ backgroundColor: "#EBCD46", fontSize: "40px" }}
              >
                B. {props.numbersPicked[1]}
              </ListGroupItem>
              <ListGroupItem
                style={{
                  borderBottom: "5px solid",
                  backgroundColor: "#EBCD46",
                  fontSize: "40px",
                }}
              >
                C. {props.numbersPicked[2]}
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
                style={{ borderTop: "5px solid", borderBottom: "5px solid" }}
              >
                GET RICH. GET HAPPY. TODAY.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Wallet = () => {
  return (
    <div>
      <div class="row h-100 justify-content-center align-items-center">
        <Card
          style={{
            marginTop: "5%",
            alignItems: "center",
            width: "60rem",
            height: "50rem",
            backgroundImage:
              "url(https://scontent.fewr1-6.fna.fbcdn.net/v/t1.6435-0/p526x296/211686338_346049410255257_3369337830695011129_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=5JEc2mlmRYEAX9nSiLv&_nc_ht=scontent.fewr1-6.fna&tp=6&oh=996ac2ce8ebb319cb397ddf9dfb82833&oe=60E3A75D)",
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
              A. 3248
            </ListGroupItem>
            <ListGroupItem
              style={{ backgroundColor: "#EBCD46", fontSize: "40px" }}
            >
              B. 6789
            </ListGroupItem>
            <ListGroupItem
              style={{ borderBottom: "5px solid", backgroundColor: "#EBCD46", fontSize: "40px" }}
            >
              C. 4856
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link
              style={{ fontFamily: "timesNewRoman", fontSize: "30px", textDecoration: 'none' }}
              href="#keypad"
            >
              PLAY AGAIN
            </Card.Link>
            <Card.Text style={{ borderTop: "5px solid", borderBottom: "5px solid" }}>GET RICH. GET HAPPY. TODAY.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;

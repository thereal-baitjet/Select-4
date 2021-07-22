import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./keypad.css";

const Keypad = (props) => {
  const [clickedNumber, setClickedNumber] = useState("");
  const [loggedInUser, setLoggedInUser] = useState('');

  // Get user session
  useEffect(() => {
    console.log('In useEffect. Logged in as: ', loggedInUser);
    API.getSession()
    .then((res) => setLoggedInUser(res.data.user_id))
    .catch((err) => console.log(err));
  });

  const clickButton = (event) => {
    // console.log(event.target.textContent);
    let number = event.target.textContent;
    let newNumber = clickedNumber + number;
    if (newNumber.length <= 4) {
      setClickedNumber(newNumber);
      //   props.pickNumber(newNumber);
      //   setClickedNumber("");
    }
    // else {  }
  };

  const clear = () => {
    setClickedNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // use POST route to send the ticket to the database using logged in user and today's date
    // Only call API route if ticket is exactly 4 digits
    // TODO: Need to make an error message if not
    console.log('Ticket bought: ', clickedNumber);
    if (clickedNumber.length === 4) {
      console.log('Calling the POST route!');
      API.createTicket({
        number: clickedNumber,
        date: new Date().toDateString(),
        user_id: loggedInUser
      }).catch((err) => console.log(err));
      setClickedNumber("");
    }
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="backGround">
      <h1 style={{ color: "dark gray", fontSize: "30px" }}>
        Choose your 4 numbers
      </h1>
      <div className="container py-4">
        <div
          className="body"
          style={{
            // backgroundImage: 'url("Keypadbackground.jpg")', // Took this out for debugging -kv
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "1500px 1500px",
          }}
        >
          <div
            className="container py-4"
            style={{ color: "red", fontSize: "100px" }}
          >
            <h1>
              Input four numbers per line, max 3 lines per game for each
              drawing, refer to wallet page for your selected ticket
            </h1>
            {/* Here is where typed numbers appear and get sent to database */}
            <form
              onSubmit={handleSubmit}
              style={{
                height: "25px",
              }}
            >
              <input
                style={{
                  backgroundColor: "#54626F",
                  borderWidth: "5px",
                  borderStyle: "double",
                  borderColor: "red",
                  width: "288px",
                  textAlign: "center",
                }}
                type="text"
                name="ticket"
                onChange={handleChange}
                value={clickedNumber}
              />
            </form>
            <br></br>
            <div className="row">
              <div className="col-auto mx-auto bg-white rounded shadow">
                <div
                  className="btn-group-vertical mx-4 my-5"
                  role="group"
                  aria-label="Basic example"
                >
                  <div className="btn-group btn-group-lg">
                    <button
                      type="button"
                      onClick={clickButton}
                      className="btn btn-outline-secondary border-bottom-0 rounded-0"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      onClick={clickButton}
                      className="btn btn-outline-secondary border-bottom-0"
                    >
                      2
                    </button>
                    <button
                      type="button"
                      onClick={clickButton}
                      className="btn btn-outline-secondary border-bottom-0 rounded-0"
                    >
                      3
                    </button>
                  </div>
                  <div className="btn-group btn-group-lg">
                    <button
                      type="button"
                      onClick={clickButton}
                      className="btn btn-outline-secondary border-bottom-0 rounded-0"
                    >
                      4
                    </button>
                    <button
                      type="button"
                      onClick={clickButton}
                      className="btn btn-outline-secondary border-bottom-0"
                    >
                      5
                    </button>
                    <button
                      type="button"
                      onClick={clickButton}
                      className="btn btn-outline-secondary border-bottom-0 rounded-0"
                    >
                      6
                    </button>
                  </div>
                  <div className="btn-group btn-group-lg">
                    <button
                      type="button"
                      onClick={clickButton}
                      className="btn btn-outline-secondary rounded-0"
                    >
                      7
                    </button>
                    <button
                      type="button"
                      onClick={clickButton}
                      className="btn btn-outline-secondary"
                    >
                      8
                    </button>
                    <button
                      type="button"
                      onClick={clickButton}
                      className="btn btn-outline-secondary rounded-0"
                    >
                      9
                    </button>
                  </div>
                  <div className="btn-group btn-group-lg">
                    <button
                      type="button"
                      onClick={clear}
                      className="btn btn-outline-secondary"
                    >
                      X
                    </button>
                    <button
                      type="button"
                      onClick={clickButton}
                      className="btn btn-outline-secondary"
                    >
                      0
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="btn btn-outline-secondary"
                    >
                      {">>"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypad;

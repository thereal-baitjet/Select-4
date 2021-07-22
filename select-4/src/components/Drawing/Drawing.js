import React, { useState, useEffect } from "react";
import "./Style.css";
import Header3 from "../../images/Header3.png";
import API from "../../utils/API.js";
import Winner from "../Winner.js";
import Sorry from "../Sorry.js";
// const schedule = require('node-schedule');

// Brute force method - just refresh the page every 10 seconds
// setTimeout(
//   function() { window.location.reload() },
//   10000
// );

// Node-schedule method - works but doesn't re-render the component
// const test = schedule.scheduleJob('*/10 * * * * *', function() {
//     // Draw winning number
//     winningTicket = drawWinner();
//     console.log(winningTicket);
//     // Parse the winning number so the component animation can display it
//     displayWinningTicket = winningTicket.split('');
// });

const Drawing = (props) => {

  const [numbers, setNumbers] = useState([]);
  const [displayTicket, setDisplayTicket] = useState("");
  const [didIWin, setDidIWin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

  // Get user session
  useEffect(() => {
    API.getSession()
    .then((res) => setLoggedInUser(res.data.user_id))
    .then((res) => console.log('On Drawing page, logged in as user_id: ', loggedInUser))
    .catch((err) => console.log(err));
  });

  // Randomly draw the winning number
  function drawWinner() {
    let winningString;
    let winningNumber = Math.floor(Math.random() * 10000);

    // Make sure any leading zeros show up in the winning number
    if (winningNumber === 0) {
      winningString = "0000";
    } else if (winningNumber < 10) {
      winningString = "000" + String(winningNumber);
    } else if (winningNumber < 100) {
      winningString = "00" + String(winningNumber);
    } else if (winningNumber < 1000) {
      winningString = "0" + String(winningNumber);
    } else {
      winningString = String(winningNumber);
    }

    return winningString;
  }

  useEffect(() => {
    API.getAllTickets()
      .then(async (res) => {
        await setNumbers(res);
        let winningTicket = drawWinner();
        console.log(typeof winningTicket);
        await setDisplayTicket(winningTicket.split(""));
        winOrLose(res, winningTicket);
      })
      //.then(res => console.log(res.data[0].number))
      .catch((err) => console.log(err));
  }, []);

  const winOrLose = async (numbers, winningTicket) => {
    if (numbers) {
      let winner = numbers.data.find((number) => {
        return number.number === winningTicket;
      });

      console.log(winner);
      if (winner) {
        console.log("winner");
        await setDidIWin(true);
      } else {
        console.log("loser");
        await setDidIWin(false);
      }
      // for (let index = 0; index < numbers.data.length; index++) {
      //   const numPick = numbers.data[index].number;
      //   console.log(numPick, winningTicket);
      //   if (winningTicket === numPick) {
      //     console.log("winner");
      //   } else {
      //     console.log("loser");
      //   }
      // }
    } else {
      console.log("sorry");
    }
  };
  // let

  //    if (didIWin) {
  //     return (<Winner />);
  //   } else if (isWinner === 2) {
  //     return (<Sorry />);
  //   } else {
  //     console.log("neither");
  //   }

  return (
    <div>
      <img
        src={Header3}
        style={{ maxWidth: "50%", height: "auto" }}
        alt="Logo"
      />
      <h1 style={{ marginTop: "0px", color: "white" }}>
        Here goes the DAILY DRAWING...
      </h1>
      <div className="wrap">
        <section className="stage">
          <figure className="ball">
            <span className="number" data-number={displayTicket[0]}>
              &nbsp;
            </span>
          </figure>
        </section>
        <section className="stage">
          <figure className="ball">
            <span className="number" data-number={displayTicket[1]}>
              &nbsp;
            </span>
          </figure>
        </section>
        <section className="stage">
          <figure className="ball">
            <span className="number" data-number={displayTicket[2]}>
              &nbsp;
            </span>
          </figure>
        </section>
        <section className="stage">
          <figure className="ball">
            <span className="number" data-number={displayTicket[3]}>
              &nbsp;
            </span>
          </figure>
        </section>
        {didIWin ? <Winner /> : <Sorry />}
      </div>
    </div>
  );
};

export default Drawing;

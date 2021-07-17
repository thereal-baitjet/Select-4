import React from "react";
import "./Style.css";
import Header3 from "../../images/Header3.png";
// const schedule = require('node-schedule');

const Drawing = () => {
  function drawWinner() {
    let winningString;
    let winningNumber = Math.floor(Math.random() * 10000);

    // Make sure any leading zeros show up in the winning number
    if (winningNumber === 0) {
      winningString = '0000';
    } else if (winningNumber < 10) {
      winningString = '000' + String(winningNumber);
    } else if (winningNumber < 100) {
      winningString = '00' + String(winningNumber);
    } else if (winningNumber < 1000) {
      winningString = '0' + String(winningNumber);
    } else {
      winningString = String(winningNumber);
    }

    return winningString;
  }

  let winningTicket = drawWinner();
  let splitWinningTicket = winningTicket.split('');

  // // Schedule function to run every night at 7PM
  // const job = schedule.scheduleJob('0 19 * * *', drawWinner());

  // // For testing, schedule function to run every 10 seconds
  // const test_job = schedule.scheduleJob('*/10 * * * * *', drawWinner());

  return (
    <div>
      <img
        src={Header3}
        style={{ maxWidth: "50%", height: "auto" }}
        alt="Logo"
      />
      <h1 style={{ marginTop: "0px", color: "white" }}>
        Here goes the DAILY DRAWING...
        If your numbers match these you take home $1000!
      </h1>
      <div className="wrap">
        <section className="stage">
          <figure className="ball">
            <span className="number" data-number={splitWinningTicket[0]}>
              &nbsp;
            </span>
          </figure>
        </section>
        <section className="stage">
          <figure className="ball">
            <span className="number" data-number={splitWinningTicket[1]}>
              &nbsp;
            </span>
          </figure>
        </section>
        <section className="stage">
          <figure className="ball">
            <span className="number" data-number={splitWinningTicket[2]}>
              &nbsp;
            </span>
          </figure>
        </section>
        <section className="stage">
          <figure className="ball">
            <span className="number" data-number={splitWinningTicket[3]}>
              &nbsp;
            </span>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Drawing;
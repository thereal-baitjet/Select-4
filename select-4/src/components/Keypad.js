import React, { useState } from "react";

const Keypad = (props) => {
  const [clickedNumber, setClickedNumber] = useState("");

  const clickButton = (event) => {
    console.log(event.target.textContent);
    let number = event.target.textContent;
    let newNumber = clickedNumber + number;
    if (newNumber.length == 4) {
      props.pickNumber(newNumber);
      setClickedNumber("");
    } else {
      setClickedNumber(newNumber);
    }
  };

  const shouldDisableKeypad = props.numbersPicked.length >= 3;

  return (
    <div className="container py-4">
      {clickedNumber}
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
                disabled={shouldDisableKeypad}
                type="button"
                onClick={clickButton}
                className="btn btn-outline-secondary border-bottom-0 rounded-0"
              >
                1
              </button>
              <button
                disabled={shouldDisableKeypad}
                type="button"
                onClick={clickButton}
                className="btn btn-outline-secondary border-bottom-0"
              >
                2
              </button>
              <button
                disabled={shouldDisableKeypad}
                type="button"
                onClick={clickButton}
                className="btn btn-outline-secondary border-bottom-0 rounded-0"
              >
                3
              </button>
            </div>
            <div className="btn-group btn-group-lg">
              <button
                disabled={shouldDisableKeypad}
                type="button"
                onClick={clickButton}
                className="btn btn-outline-secondary border-bottom-0 rounded-0"
              >
                4
              </button>
              <button
                disabled={shouldDisableKeypad}
                type="button"
                onClick={clickButton}
                className="btn btn-outline-secondary border-bottom-0"
              >
                5
              </button>
              <button
                disabled={shouldDisableKeypad}
                type="button"
                onClick={clickButton}
                className="btn btn-outline-secondary border-bottom-0 rounded-0"
              >
                6
              </button>
            </div>
            <div className="btn-group btn-group-lg">
              <button
                disabled={shouldDisableKeypad}
                type="button"
                onClick={clickButton}
                className="btn btn-outline-secondary rounded-0"
              >
                7
              </button>
              <button
                disabled={shouldDisableKeypad}
                type="button"
                onClick={clickButton}
                className="btn btn-outline-secondary"
              >
                8
              </button>
              <button
                disabled={shouldDisableKeypad}
                type="button"
                onClick={clickButton}
                className="btn btn-outline-secondary rounded-0"
              >
                9
              </button>
            </div>
            <div className="btn-group btn-group-lg">
              <button
                disabled={shouldDisableKeypad}
                type="button"
                onClick={clickButton}
                className="btn btn-outline-secondary"
              >
                0
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypad;

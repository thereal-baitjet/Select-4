import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarBet from "./components/NavbarBet";
import Home from "./components/Home";
import Keypad from "./components/Keypad";
import Winner from "./components/Winner";
import Wallet from "./components/Wallet";
import Drawing from "./components/Drawing/Drawing";
import Login from "./components/Login";
import Sorry from "./components/Sorry";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [numbersPicked, setNumbersPicked] = useState([]);

  const pickNumber = (number) => {
    let copy = [...numbersPicked];
    copy.push(number);
    setNumbersPicked(copy);
  };
  const clearNumbers = () => {
    setNumbersPicked([]);
  };
  window.pickNumber = pickNumber;
  window.clearNumbers = clearNumbers;

  return (
    <div className="App">
      <Router>
        <NavbarBet />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/keypad"
            component={() => {
              return (
                <Keypad pickNumber={pickNumber} numbersPicked={numbersPicked} />
              );
            }}
          />
          <Route
            exact
            path="/Wallet"
            component={() => {
              return <Wallet numbersPicked={numbersPicked} />;
            }}
          />
          <Route exact path="/winner" component={Winner} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/drawing"
            component={() => {
              return <Drawing numbersPicked={numbersPicked} />;
            }}
          />
          <Route exact path="/sorry" component={Sorry} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

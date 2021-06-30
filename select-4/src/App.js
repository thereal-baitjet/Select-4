import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavbarBet from "./components/Navbar";
import Home from "./components/Home";
import Keypad from "./components/Keypad";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <NavbarBet />
      <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/keypad" component={Keypad} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;

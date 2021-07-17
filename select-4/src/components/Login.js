import React, { useState } from "react";
// import Header3 from "../images/Header3.png";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [usernameLogin, setLoginUsername] = useState();
  const [passwordLogin, setLoginPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await axios.post(
        "/api/user",

        { username, password }
      );
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        //document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  const login = async (e) => {
    e.preventDefault();
    // if (usernameLogin && passwordLogin) {

    const response = await axios.post(
      "/api/user",

      { username: usernameLogin, password: passwordLogin }
    );
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      //document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }

    //   // Send a POST request to the API endpoint
    //   const response = await fetch('/api/user/login', {
    //     method: 'POST',
    //     body: JSON.stringify(),
    //     headers: { 'Content-Type': 'application/json' },
    //   });

    //   if (response.ok) {
    //     // If successful, redirect the browser to the profile page
    //     console.log("login worked")
    //   } else {
    //   }
    // }
  };
  return (
    <div>
      <form className="form login-form">
        <div className="form-group col-md-3 mx-auto">
        <h2 style={{ color: "white" }}>Login</h2>
          <label style={{ color: "white" }}>email:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            name="usernameLogin"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </div>
        <div className="form-group col-md-3 mx-auto">
          <label style={{ color: "white" }}>password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="passwordLogin"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <div className="form-group col-md-3 mx-auto">
          <button
            className="btn btn-primary"
            onClick={(e) => {
              login(e);
            }}
            type="submit"
          >
            login
          </button>
        </div>
      </form>

      <div className="col-md-3 mx-auto">
        <h2 style={{ color: "white" }}>Signup</h2>
        <form className="form signup-form">
          <div className="form-group">
            <label style={{ color: "white" }}>name:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label style={{ color: "white" }}>email:</label>
            <input className="form-input" type="text" id="email-signup" />
          </div>
          <div className="form-group">
            <label style={{ color: "white" }}>password:</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                handleSubmit(e);
              }}
              type="submit"
            >
              signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
// import Header3 from "../images/Header3.png";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [NewUsername, setNewUsername] = useState("");
  const [NewPassword, setNewPassword] = useState("");

  const [LoginUsername, setLoginUsername] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const Signup = async (e) => {
    e.preventDefault();
    if (NewUsername && NewPassword) {
      // Send a POST request to the API endpoint
      const response = await axios.post("/api/user", {
        NewUsername,
        NewPassword,
      });
      if (response.status == 200) {
        // If successful, redirect the browser to the Wallet page
        document.location.replace("/#/wallet");
      } else {
        alert(response.statusText); // TODO: Make this more user-friendly
      }
    }
  };

  const LoginUser = async (e) => {
    e.preventDefault();
    if (LoginUsername && LoginPassword) {
      // Send a POST request to the API endpoint
      const response = await axios.post("/api/user/login", {
        LoginUsername,
        LoginPassword,
      });
      if (response.status == 200) {
        // If successful, redirect the browser to the Wallet page
        document.location.replace("/#/wallet");
      } else {
        alert(response.statusText); // TODO: Make this more user-friendly
      }
    }
  };

  return (
    <div>
      <form className="form login-form">
        <div className="form-group col-md-3 mx-auto">
          <h2 style={{ color: "white" }}>Login</h2>
          <label style={{ color: "white" }}>username:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            name="loginUsername"
            onChange={(e) => {
              setLoginUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group col-md-3 mx-auto">
          <label style={{ color: "white" }}>password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="loginPassword"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <div className="form-group col-md-3 mx-auto">
          <button className="btn btn-success" onClick={LoginUser} type="submit">
            login
          </button>
        </div>
      </form>

      <div className="col-md-3 mx-auto">
        <h2 style={{ color: "white" }}>Signup</h2>
        <form className="form signup-form">
          <div className="form-group">
            <label style={{ color: "white" }}>username:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              name="newUsername"
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label style={{ color: "white" }}>password:</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="newPassword"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                Signup(e);
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

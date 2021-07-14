import React,{useState} from "react";
// import Header3 from "../images/Header3.png";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await axios.post('/api/user', 
          
          JSON.stringify({ username, password }),
          
        );
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          //document.location.replace('/profile');
        } else {
          alert(response.statusText);
        }
      }
    
  };
  return (
      <div>
    <h2>Login</h2>
<form className="form login-form">
  <div className="form-group">
    <label>email:</label>
    <input className="form-input" type="text" id="email-login" />
  </div>
  <div className="form-group">
    <label>password:</label>
    <input className="form-input" type="password" id="password-login" />
  </div>
  <div className="form-group">
    <button className="btn btn-primary" onClick={e => {handleSubmit(e)}} type="submit">login</button>
  </div>
</form>

<div className="col-md-6">
<h2>Signup</h2>
<form className="form signup-form">
  <div className="form-group">
    <label>name:</label>
    <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
              />
  </div>
  <div className="form-group">
    <label>email:</label>
    <input className="form-input" type="text" id="email-signup" />
  </div>
  <div className="form-group">
    <label>password:</label>
    <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
  </div>
  <div className="form-group">
    <button className="btn btn-primary" onClick={e => {handleSubmit(e)}} type="submit">signup</button>
  </div>
</form>
</div>
</div>

  );
};

export default Login; 
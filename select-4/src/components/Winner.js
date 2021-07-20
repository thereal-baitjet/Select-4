import React from "react";
import Swal from "sweetalert2";
import { HashRouter as Route } from "react-router-dom";
import axios from "axios";
import "./winner.css"

const Winner = () => {
  const displayModal = () => {
    Swal.fire({
      title: "Congratulations",
      text: "You Won 1,000.00 Dollars",
      imageUrl:
        "https://media.istockphoto.com/vectors/winner-retro-banner-vector-id1192939892?k=6&m=1192939892&s=612x612&w=0&h=VGcFn5IqcQBD337faACLfIMe3GMD25hptoR9uqddQ6M=",
      imageWidth: 800,
      imageHeight: 400,
      imageAlt: "Jackpot",
    });
  };

  const getUserStatus = () => {
    axios.get("/api/user/userStatus");
  };

  getUserStatus();

  return (
    <div className="bGround">
      <h1 
        style={{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Right",
          marginTop: "10vh",
          height: "30vh",
          color: "white",
        }}
      >
        You're a Winner! 
      </h1> <br></br>

      <h2 style={{ color: "white" }}>
        You have the winning ticket! Please go to your nearest participating,
        Western Union to Cash Out!!!!!!!!!!</h2> <br></br>
        <h2 style={{ color: "white" }}>There are none just yet but hey; you won! 
      </h2>

      {displayModal()}
    </div>
  );
};

export default Winner;

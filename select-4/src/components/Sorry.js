import React from "react";
import Swal from "sweetalert2";
import Header3 from "../images/Header3.png";


const Sorry = () => {
  const displayModal = () => {
    Swal.fire({
      title: "Sorry",
      text: "Better Luck Next Time",
      imageUrl:
        "https://thumbs.dreamstime.com/b/game-over-text-video-game-glitch-color-distortions-pixel-noise-digital-error-template-retro-vhs-effect-abstract-game-over-text-132036562.jpg",
      imageWidth: 800,
      imageHeight: 400,
      imageAlt: "Sorry Better Luck Next Time",
    });
  };

  return (
    <div>
      <img src={Header3} style={{ maxWidth: '100%', height: 'auto' }}alt="Logo"/>;
      <h1
        style={{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Right",
          marginTop: "2vh",
          height: "5vh",
          color: "white",
        }}
      >
        Sorry You Have Lost, Please Play Again!!
      </h1>
      <h2 style={{ color: "white" }}>
        <a href="#keypad">Play Again</a>
      </h2>
      <h1
        style={{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Right",
          marginTop: "5vh",
          height: "30vh",
          color: "White",
        }}
      >
        Remeber Dreams Do Come True! All It Takes Is A $Dollar
      </h1>

      {displayModal()}
    </div>
  );
};

export default Sorry;

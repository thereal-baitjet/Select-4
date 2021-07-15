import React from "react";
import Header3 from "../images/Header3.png";

const Home = () => {
  return (
    <div>
      <img
        src={Header3}
        style={{ maxWidth: "100%", height: "auto" }}
        alt="Logo"
      />
      ;
      <a
        href="#keypad"
        className="btn btn-warning btn-lg btn-block"
        role="button"
        aria-pressed="true"
      >
        Start Game
      </a>
      <p style={{ color: "white" }}>
        Why play Select-4? Lotteries can be dated back 1000's of years. Specifically throughout history, places around the world like France, England, 
       the early United States, Spain, China and many more have enjoyed this classicaly historic game. As the world changed throughout the years, so has the game. 
       Our modern day version of the lottery has adapted to our culture and especially now, our "new normal". We want to give our customers the traditional enjoyment
       we've all grown to love, but in a safe and convenient enviroment..through their own phone. Let's stay safe, save time, make money, and especially have fun playing Select-4.
      </p>
    </div>
  );
};

export default Home;

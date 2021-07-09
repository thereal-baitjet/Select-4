import React from "react";


const Home = () => {
  return (
    <>
    <div className="bg-image" style={{
      backgroundImage: 'url(../homepagebackground.png)', 
      filter: 'blur(8px)', 
      WebkitFilter: 'blur(8px)', 
      height: '100%', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover'}} />
  <div className="bg-text" style={{
      backgroundColor: 'rgba(0,0,0, 0.4)', 
      color: 'white', fontWeight: 'bold', 
      border: '3px solid #f1f1f1', 
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      zIndex: 2, 
      width: '80%', 
      padding: '20px', 
      textAlign: 'center'}}>
    <img src="select-4/src/Header.png" alt="Header" width={1050} height={300} />
  </div>
  <div className="bg-image" style={{
      backgroundImage: 'url(homepagebackground.png)', 
      filter: 'blur(8px)', 
      WebkitFilter: 'blur(8px)', 
      height: '100%', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover'}} />
  <div className="bg-text2" style={{
      backgroundColor: 'rgba(0,0,0, 0.4)', 
      color: 'white', 
      fontWeight: 'bold', 
      border: '3px solid #f1f1f1', 
      position: 'absolute', 
      top: '100%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      zIndex: 2, width: '80%', 
      padding: '20px', 
      textAlign: 'center'}}>
    <div className="container" style={{
        padding: '2px 16px'}}>
      <h4><b>Why play Select-4?</b></h4>
      <p style={{color: "white"}}> Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.</p>
    </div>
  </div>
  <button id="myButton" className="button" style={{
      display: 'inline-block', 
      padding: '15px 25px', 
      fontSize: '100px', 
      cursor: 'pointer', 
      textAlign: 'center', 
      textDecoration: 'none', 
      outline: 'none', 
      color: '#fff', 
      backgroundColor: '#4CAF50', 
      border: 'none', 
      borderRadius: '15px', 
      boxShadow: '0 5px #666', 
      position: 'absolute', 
      top: '125%', 
      left: '30%', 
      hover: 'backgroundColor: #3e8e41',
       active: 'background-color: #3e8e41', 
       transform: 'translateY(4px)'}}>Start Game</button>
    </>
    )
  );
};


export default Home;

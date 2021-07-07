import React from "react";



const Drawing = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "Center",
        alignItems: "Right",
        marginTop: "30vh",
        height: "30vh",
      }}>
                <div class="col-md-4 col-xl-3">
                <h2 style={{color: "white"}}>NEVER MISS A DRAW</h2>
        <h3 style={{color: "white"}}>Easy way to buy tickets and win $1,000.00+ from anywhere, anytime</h3>
            <div class="card bg-c-green order-card">
                <div class="card-block">
                    <h6 class="m-b-20">The Big Drawing</h6>
                    <h2 class="text-center"><i class="fa fa-rocket f-center"></i><span>486</span></h2>
                    <p class="m-b-0">I wish you your dreams to come true, and the best of luck!</p>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default Drawing;

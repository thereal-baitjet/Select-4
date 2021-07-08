import React from 'react';

const Keypad = () => {
    return (  
        <div><h1 style={{
            display: "flex",
            justifyContent: "Center",
            alignItems: "Right",
            marginTop: "20vh",
            height: "5vh",
            color:"white"
          }}>Keypad</h1>
          <h2 style={{color: "white"}}>Input a 4 digit number for one line, and hit submit! you can select upto 3 diffent lines of numbers</h2>
        <div class="container" style={{
            display: "flex",
            justifyContent: "Center",
            alignItems: "Right",
            marginTop: "5vh",
            height: "30vh",
          }}>
    <div class="row center">
        <div class="col-auto mx-auto bg-white rounded shadow">

            <div class="btn-group-vertical mx-4 my-5" role="group" aria-label="Basic example">
                <div class="btn-group btn-group-lg">
                    <button type="button" class="btn btn-outline-secondary border-bottom-0 rounded-0">1</button>
                    <button type="button" class="btn btn-outline-secondary border-bottom-0">2</button>
                    <button type="button" class="btn btn-outline-secondary border-bottom-0 rounded-0">3</button>
                </div>
                <div class="btn-group btn-group-lg">
                    <button type="button" class="btn btn-outline-secondary border-bottom-0 rounded-0">4</button>
                    <button type="button" class="btn btn-outline-secondary border-bottom-0">5</button>
                    <button type="button" class="btn btn-outline-secondary border-bottom-0 rounded-0">6</button>
                </div>
                <div class="btn-group btn-group-lg">
                    <button type="button" class="btn btn-outline-secondary rounded-0">7</button>
                    <button type="button" class="btn btn-outline-secondary">8</button>
                    <button type="button" class="btn btn-outline-secondary rounded-0">9</button>
                </div>
                <div class="btn-group btn-group-lg">
                    <button type="button" class="btn btn-outline-secondary">0</button>
                </div>
            </div>


        </div>
    </div>
</div>
</div>

        );
    };
      

export default Keypad;
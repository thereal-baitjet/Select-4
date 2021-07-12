import React from "react";
import "./Style.css";



const Drawing = () => {
  return (
    <div>
      <h1 style={{marginTop: '20px',  color: 'white'}}>DRAWING, if your numbers match these you are the $1000.00 Winner</h1>
    <div class="wrap">
  <section class="stage">
        <figure class="ball">
          <span class="number" data-number="8">&nbsp;</span>
        </figure>
  </section>
  <section class="stage">
        <figure class="ball">
          <span class="number" data-number="2">&nbsp;</span>
        </figure>
  </section>
  <section class="stage">
        <figure class="ball">
          <span class="number" data-number="4">&nbsp;</span>
        </figure>
  </section>
  <section class="stage">
        <figure class="ball">
          <span class="number" data-number="5">&nbsp;</span>
        </figure>
  </section>
</div>
</div>
  );
};

export default Drawing;

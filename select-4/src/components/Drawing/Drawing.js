import React from "react";
import "./Style.css";
import Header3 from "../../images/Header3.png";



const Drawing = () => {
  return (
    <div>
      <img src={Header3} style={{ maxWidth: '50%', height: 'auto' }}alt="Logo"/>
      <h1 style={{marginTop: '0px',  color: 'white'}}>DRAWING, if your numbers match these you are the $1000.00 Winner</h1>
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

import React from 'react';

const Keypad = () => {
    return (    
        <div class="container py-4">
    <div class="row">
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

        );
    };
      

export default Keypad;
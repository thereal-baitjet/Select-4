// Author: Kelly

// Import the node-schedule package: https://www.npmjs.com/package/node-schedule
const schedule = require('node-schedule');

// Draw a number between 0000 - 9999
function dailyDraw() {
    let winningNumber = Math.floor(Math.random() * 10000);
    console.log(winningNumber);
    // return winningNumber;
}

// Schedule function to run every night at 7PM
const job = schedule.scheduleJob('0 19 * * *', dailyDraw());

// For testing, schedule function to run every 10 seconds
const test_job = schedule.scheduleJob('*/10 * * * * *', dailyDraw());

// For React, need to export the function
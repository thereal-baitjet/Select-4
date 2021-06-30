function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

var rand = getRandom();

var handle = setInterval(function () {
    rand = getRandom(0, 9999);
    // console.log("new random number is: " + rand);
}, 1000 * 60 * 60 * 24);


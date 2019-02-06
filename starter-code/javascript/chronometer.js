

var Chronometer = {
    currentTime: 0,
    minutes: 0,
    intervalId: 0,
    hours: 0,
}


Chronometer.startClick = function () {
    Chronometer.intervalId = setInterval( function () {
        Chronometer.currentTime++;
        Chronometer.setMinutes();
        }, 1000);
    }

Chronometer.setMinutes = function () {
    console.log(Chronometer,  Chronometer.currentTime, Chronometer.hours)
    if(Chronometer.currentTime == 5) {
        Chronometer.minutes++;
        Chronometer.currentTime = 0;
        if(Chronometer.minutes == 3) {
            Chronometer.hours++;
            Chronometer.minutes = 0;
        }
    }
   
}
Chronometer.startClick();

Chronometer.splitTime = function () {
    console.log(Chronometer.minutes, Chronometer.currentTime);
}
// Chronometer.resetAll = function ()  {

//     clearInterval(Chronometer.intervalId)
// }

// btnRight.lapTime = function ()  {
//     console.log(Chronometer.intervalId);
// }
// Chronometer.setHours = function () {}

// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// }:
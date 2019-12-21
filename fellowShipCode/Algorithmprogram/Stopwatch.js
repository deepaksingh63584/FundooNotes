
const readline = require('readline-sync')

var stttime = new Date().getSeconds() % 1000;
console.log(stttime);

var stoptime1 = readline.questionInt("Enter 0 to start the time : \n");
var stoptime = new Date().getSeconds() % 1000;
console.log(stoptime);

console.log("Elapsed time is : ")

var elapstime = parseInt(stoptime - stttime);

console.log(elapstime);














































// //function StopWatch() {

// // var startTime = null;
// // var stopTime = null;
// // var running = false;

// // function getTime() {
// //     var startTime = null;
// //     var stopTime = null;
// //     var running = false;
// //     var day = new Date()
// //     return day.getTime()
// // }


// // this.start = function () {

// //     if (running == true)
// //         return;
// //     else if (startTime != null)
// //         stopTime = null;

// //     running = true;
// //     startTime = getTime();

// // }

// // this.stop = function () {

// //     if (running == false)
// //         return;

// //     stopTime = getTime();
// //     running = false;

// // }
// // this.duration = function () {

// //     if (startTime == null || stopTime == null)
// //         return 'Undefined';
// //     else
// //         return ("Elapesd Time : " + stopTime - startTime) / 1000;

// // }
// console.log("Press any key to start calculating time");
// var startofclock = input.data.input();       //accepting input from user to start watch
// var starttime = input.data.stopwatch();

// console.log("Press any key to stop clock : ");
// var stopofclock = input.data.input()
// var stoptime = input.data.stopwatch()       //reading input from user to stop watch

// var elapsedtime = stoptime - starttime      //formula to calculate time taken for execution
// console.log("Elapsed Time in seconds : " + elapsedtime);



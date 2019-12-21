const input = require('./Utility')
const readline = require('readline-sync')


var d = readline.questionInt("Enter the date : \n");

var m = readline.questionInt("Enter the month : \n");

var y = readline.questionInt("Enter the year : \n")


input.dayOfWeek(d, m, y);



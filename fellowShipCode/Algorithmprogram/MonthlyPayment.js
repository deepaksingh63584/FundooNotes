const inputfromuser = require('./Utility')
const readline = require('readline-sync')


var p = readline.questionInt("Enter the Principal : \n");

var y = readline.questionInt("Enter the Year : \n");

var r = readline.questionInt("Enter the Rate : \n")

console.log("Monthly Payment is : ");


console.log(inputfromuser.monthlyPayment(p, y, r));
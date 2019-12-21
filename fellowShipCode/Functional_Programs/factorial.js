const fact = require('./utility')
const readline = require('readline-sync')

var n = readline.questionInt("Enter the number do you want factorial : \n")
//str1.demo(number);
console.log();
fact.factorial(n);

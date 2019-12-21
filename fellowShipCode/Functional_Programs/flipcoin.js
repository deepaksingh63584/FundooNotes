const flip = require('./utility')
const readline = require('readline-sync')

var number = readline.questionInt("Enter  no of times  to flip \n")
///str1.demo(number);
console.log();

flip.flipPercen(number)
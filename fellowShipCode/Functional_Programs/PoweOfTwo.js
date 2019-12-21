const pot = require('./utility')
const readline = require('readline-sync')

var power = readline.question("Enter the power less than 32 : \n")
while (power > 31) {
    power = readline.question("Powers of 2 that are less than 2: \n")
}
var result = pot.powerof2(power);
console.log("Power of 2 " + power + " times is :" + result);
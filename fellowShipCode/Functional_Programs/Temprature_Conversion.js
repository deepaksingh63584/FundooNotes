
const conv = require('./utility')
const readline = require('readline-sync')

var fNum = readline.question("Enter the value of fehrenheit \n")
var cNum = readline.question("Enter the value of celsius \n")

conv.temperatureConversion(fNum, cNum)




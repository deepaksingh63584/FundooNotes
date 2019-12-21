const prifact = require('./utility')
const readline = require('readline-sync')

var primenum = readline.question("Enter any Number to find Prime Factors : \n")


console.log(prifact.prime_factor(primenum));


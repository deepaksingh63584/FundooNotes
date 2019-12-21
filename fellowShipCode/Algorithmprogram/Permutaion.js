var inputper = require('./Utility')
const readline = require('readline-sync')

var n = readline.questionInt("Enter the no of elements in array");
console.log("enter the array elements:");
var permutation = [];
// Displays the array elements
for (var i = 0; i < n; i++) {
    permutation[i] = readline.questionInt();
}

console.log(permutation);

console.log(inputper.permute(permutation));

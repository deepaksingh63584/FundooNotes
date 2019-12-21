var readline = require('readline-sync');
var u = require('./Utility');

var n = readline.questionInt("Enter the no of elements in array");

var arr = [];
console.log("Enter the array elements:");

// Displays the array elements
for (var i = 0; i < n; i++) {
    arr[i] = readline.questionInt();
}
console.log(arr);
u.selectionSort(arr);
const sortref = require('./Utility')
const readline = require('readline-sync')

var numbers = [9, 5, 4, 9, 24, 6, 14, 3, 7, 75, 10];
console.log("Before sorting :");
console.log(numbers);


//var arr = [5, 2, 6, 1, 3, 9];
sortref.insertionSort();


console.log(sortref.bubbleSort(numbers));

//sortref.bubbleSort();
const binarysrch = require('./Utility')
const readline = require('readline-sync')
var arr1 = [3, 11, 35, 299, 45, 320, 5, 23];

console.log(arr1);

var key = readline.question('Enter your key do you whant to search :')

//binarysrch.binary(key);

console.log("Key Found at : "+binarysrch.binary(arr1, key)+" Position");

const inputuser = require('./Utility')
const rl = require("readline-sync")

//console.log("Enter a string")
var str1 = rl.question("Enter a string : \n");

inputuser.ispalindrome(str1);
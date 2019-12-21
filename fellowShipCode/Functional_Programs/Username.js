const userut = require('./utility');
const readline = require('readline-sync')

var userval = function () {
    var username = readline.question("Enter username= :");
    var value = userut.relaceuser(username);
    console.log(value);
}
userval();

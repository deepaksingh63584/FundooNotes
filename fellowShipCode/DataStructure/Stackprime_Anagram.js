/**
 * Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
    the Linked List and Print the Anagrams in the Reverse Order. Note no Collection
    Library can be used.

    @author : Deepak Singh

    @singh : 25/11/2019
 */


var util = require('./utilitydata/Utildata');
var stklink = require('./utilitydata/stackutility');

var primeNumbers = stklink.display(1000);
console.log(primeNumbers);
var arr = [];
var range = 100;
var k = 0;
var stk = new stklink.Stacklinkedlist();
for (var i = 0; i < primeNumbers.length - 1; i++) {
    for (var j = i + 1; j < primeNumbers.length; j++) {
        //check two primes angram or not
        var value = (stklink.checkAnagram(primeNumbers[i], primeNumbers[j]))

        //console.log(primeNumbers);
        if (value == true) {
            if (primeNumbers[i] <= range) {
                if (primeNumbers[j] <= range) {
                    stk.pushdata(primeNumbers[i]);
                    stk.pushdata(primeNumbers[j]);
                }
            }
            else {
                range = range + 100;
                if (primeNumbers[j] < range) {
                    stk.pushdata(primeNumbers[i]);
                    stk.pushdata(primeNumbers[j]);
                }
            }
        }
    }
}
stk.display();
//stk.reverse();
//console.log(arr);

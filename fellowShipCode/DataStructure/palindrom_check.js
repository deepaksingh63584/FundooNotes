/**
 *                           Palindrome­Checker
 * 
    Desc ­> A palindrome is a string that reads the same forward and backward, for
        example, radar, toot, and madam. We would like to construct an algorithm to
        input a string of characters and check whether it is a palindrome.
     I/P ­> Take a String as an Input
     Logic ­> The solution to this problem will use a deque to store the characters of
        the string. We will process the string from left to right and add each character to
        the rear of the deque.
    O/P ­> True or False to Show if the String is Palindrome or not.

* @author : Deepak Singh

* @since : 25/11/2019
*/


var rl = require('readline-sync');
var deq = require('./utilitydata/dequeue')
var util = require('./utilitydata/Utildata');

var str = rl.question("Enter the String:");
palindrome = util.checkPalindrome(str);
console.log(palindrome);
if (palindrome === true)
    console.log(str + " is palindrome String.");
else
    console.log(str + " is not palindrome String.");
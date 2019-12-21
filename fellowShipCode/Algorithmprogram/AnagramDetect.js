
const anagr = require('./Utility')
const readline = require('readline-sync')
var s1 = readline.question('Enter the first string :')

var s2 = readline.question('Enter the second string :')

//anagr.isAnagram((s1, s2) ? "Words are Anagram" : "Words are not Anagram");
if (anagr.anagram(s1, s2)) {
    console.log("Words are Anagram")
}
else {
    console.log("Words are Not Anagram");

}
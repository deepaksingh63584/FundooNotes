/**
 * Desc ­> Read .a List of Numbers from a file and arrange it ascending Order in a
        Linked List. Take user input for a number, if found then pop the number out of the
        list else insert the number in appropriate position
    I/P ­> Read from file the list of Numbers and take user input for a new number
    Logic ­> Create a Ordered Linked List having Numbers in ascending order.
    O/P ­> The List of Numbers to a File.

* @author : Deepak Singh

* @since : 23/11/2019
 */


const fs = require('fs');
const rl = require('readline-sync');
const util = require('./utilitydata/Utildata');

var linklist = new util.LinkedList();
var readnumber = fs.readFileSync('ordered.txt').toString().split(" ");
console.log(readnumber);
//console.log("Number list : ");
for (var i = 0; i < readnumber.length; i++) {
    linklist.InsertSorted(readnumber[i]);
    //console.log(readnumber[i]);

}
console.log("Sorted number list : ");
linklist.sortdata();
linklist.DisplayList();
var keyNum = rl.question("Enter your no do you want to search :")
if (linklist.Search(keyNum)) {
    console.log("Number already present into list , So it was be deleted :");
    linklist.DeleteElement(keyNum);

}
else {
    console.log("Number is not into the list ,so it should be inserted :");
    linklist.InsertSorted(keyNum);
}
linklist.DisplayList();
var totallistdata = linklist.ReturnString();
fs.writeFileSync("ordereddemo.txt", totallistdata, 'utf-8');


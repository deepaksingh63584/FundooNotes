/**
 * Desc ­> Read the Text from a file, split it into words and arrange it as Linked List.
        Take a user input to search a Word in the List. If the Word is not found then add it
        to the list, and if it found then remove the word from the List. In the end save the
        list into a file
    I/P ­> Read from file the list of Words and take user input to search a Text
    Logic ­> Create a Unordered Linked List. The Basic Building Block is the Node
        Object. Each node object must hold at least two pieces of information. One ref to
        the data field and second the ref to the next node object.
    O/P ­> The List of Words to a File.
 * 
 * @author : Deepak Singh
 *
 * @since : 22/11/2019

 */



const fs = require('fs')
const inputlist = require("./utilitydata/Utildata")
const readlinelist = require('readline-sync')

var readdata = fs.readFileSync("unorder.txt", "utf-8").toString().split(" ");
//console.log(readdata);
var linkedlist = new inputlist.LinkedList();
for (var i = 0; i < readdata.length; i++) {
    linkedlist.InsertFront(readdata[i]);
}
linkedlist.DisplayList();

var searchkey = readlinelist.question('Enter the string do you want to search : \n');

if (linkedlist.Search(searchkey)) {
    linkedlist.DeleteElement(searchkey);
    linkedlist.DisplayList();
}
else {
    linkedlist.InsertFront(searchkey);
    console.log("Data is added : ")
    linkedlist.DisplayList();
}
var totallistdata = linkedlist.ReturnString();
fs.writeFileSync("unorder.txt", totallistdata, "utf-8");
linkedlist.DisplayList();

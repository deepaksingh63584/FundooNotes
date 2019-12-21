/**
 *  Desc ­> Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
        efficiently search a number from a given set of number
    I/P ­> read a set of numbers from a file and take user input to search a number
    Logic ­> Firstly store the numbers in the Slot. Since there are 10 Numbers divide
        each number by 11 and the reminder put in the appropriate slot. Create a Chain
        for each Slot to avoid Collision. If a number searched is found then pop it or else
        push it. Use Map of Slot Numbers and Ordered LinkedList to solve the problem.
        In the Figure Below, you can see number 77/11 reminder is 0 hence sits in the 0
        slot while 26/11 remainder is 4 hence sits in slot 4
    O/P ­> Save the numbers in a file

    @author : Deepak Singh

    @since : 26/11/2019
 */

var rl = require('readline-sync');
var link = require('./utilitydata/Utildata');
var fs = require("fs");

//read file from hash.txt
var file = fs.readFileSync("Hash.txt", "utf-8").toString();
//console.log(file);
var str = file.split(" ");
console.log(str);


var arr = [];
for (var i = 0; i < str.length; i++) {
    //Hash Function
    var k = str[i] % 11;
    console.log(k);


    //add Element in hash list
    if (arr[k] == undefined) {
        arr[k] = new link.LinkedList();
        arr[k].InsertFront(str[i]);
    } else {
        arr[k].InsertFront(str[i]);
    }
}


//print hash slot
for (var i = 0; i < 10; i++) {
    console.log("slot : " + i + " ");
    if (arr[i] != undefined) {
        arr[i].DisplayList();
    }
}

//search element in list
var no = rl.questionInt("Enter the you want to search in the list:");
//var found=true;
var k = no % 11;
console.log(k);


//check element present at hash list
// if present than add otherwise Remove
if (arr[k] != undefined) {
    //console.log(typeof (arr[k].Search(no)));

    if (arr[k].Search(no) == true) {
        //console.log("element found . \n elemnt should be deleted:")
        arr[k].DeleteElement(no);
    }
    else {
        console.log("element not found . \n elemnt should be added:");
        //arr[k]=new link.LinkedList();
        arr[k].InsertFront(no);

    }
}
else {
    arr[k] = new link.LinkedList();
    arr[k].InsertFront(no);
}

//print final hash list
for (var i = 0; i < 10; i++) {
    console.log("slot : " + i + " ");
    if (arr[i] != undefined) {
        arr[i].DisplayList();
    }
}
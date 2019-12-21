/**
 * Creating node class and constructor for traversing each node 
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Creating a queue linked list class
 */

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * If front and rear both are empty then its empty
     */

    isempty() {
        if (this.head == 0) {
            console.log("list is empty...")
        }
    }

    /**
      * 
      * @param {*} data : add a node element with respect of front side
      */
    InsertFront(data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    /**
     * @description : method for sorting linked list in ascending order
     * */
    sortdata() {
        var current = this.head,
            nextNode = null;
        var temp;
        // checking linked list is empty or not 
        if (this.head == null) {
            return;
        }
        else {
            // loop until current node is null
            while (current != null) {
                nextNode = current.next;
                while (nextNode != null) {
                    // comparing the current and next node
                    if (current.data > nextNode.data) {
                        // current node is greater than next node
                        // then swaping both the node
                        temp = current.data;
                        current.data = nextNode.data;
                        nextNode.data = temp;
                    }
                    nextNode = nextNode.next;
                }
                current = current.next;
            }
        }
    }

    /**
      * @description : method for sorting linked list in ascending order
      */

    InsertSorted(data) {
        var newNode = new Node(data);
        var current = this.head;
        //var previous = this.head;
        //if head is null or head data is larger than new node 
        //the make new node as a head
        if (this.head == null || current.data >= newNode.data) {

            newNode.next = this.head;
            this.head = newNode;
        }
        else {

            // loop until node larger than new node found
            while (current.next != null && current.next.data < newNode.data) {
                current = current.next;
            }
            // if new node larger than all node in the list then add to the last
            if (current.next == null) {
                current.next = newNode;
            }
            else {
                // node lager than new node is found then add before larger node
                newNode.next = current.next;
                current.next = newNode;
            }
        }
    }

    /**
     * 
     * @param {*} key : insert the into the specific position, key is define the index
     *                   position of the given list 
     * @param {*} data : data is define the list element which is insert inside the list
     */
    InsertNextTOKey(key, data) {
        var current = this.head;
        while (current.data != key) {
            if (current.next == null) {
                break;
            }
            current = current.next;
        }
        if (current.data == key) {
            var newNode = new Node(data);
            newNode.next = current.next;
            current.next = newNode;
            console.log("element is added to list");
            return true;
        }
        else {
            console.log("key is not in the list");
            return false;
        }
    }
    /**
     * displaying each elememt into list by traversing each node
     */
    DisplayList() {
        var current = this.head;
        var arr = " ";
        while (current != null) {
            arr += current.data + "->";
            current = current.next;
        }
        console.log(arr);
        console.log();
    }
    /**
     * return the data in string  
     */
    ReturnString() {
        var stringText = "";
        var current = this.head;
        if (this.head != null) {
            stringText += current.data;
            current = current.next;
            while (current != null) {
                stringText = stringText + " " + current.data;
                current = current.next;
            }
            return stringText;
        }
        else {
            Console.WriteLine("List is empty");
            return null;
        }
    }

    /**
     * 
     * @param {*} key : serach the element from the list with the help of specific unique data element 
     */
    Search(key) {
        var current = this.head;
        // if head is empty the list will be empty
        if (this.head == null) {
            console.log("List is empty so none element deleted");
            return false;
        }
        //if current element is not equals to the key then current is pointed next element as current
        while (current.data != key) {
            if (current.next == null) {
                break;
            }
            current = current.next;
        }
        //if current is equal to the key then data will be presint inside the list
        if (current.data == key) {
            console.log("element found in list");
            return true;
        }
        else {
            console.log("element is not in list");
            return false;
        }
    }

    /**
     * delete the data element from the front linklist
     */
    DeleteFront() {
        if (this.head == null) {
            console.log("List is empty so none element deleted");
        }
        //if list first element will be present and next will be null then haed will be eleminated
        else if (this.head.next == null) {
            this.head = null;
        }
        else {
            this.head.data = this.head.next.data;
            this.head.next = this.head.next.next;
        }
    }


    /**
     * 
     * @param {*} key : delete the element with the respect of data element 
     */
    DeleteElement(key) {
        var current = this.head;
        var previous = this.head;
        // if current data is equal to the key then current data will be deleted
        if (current.data == key) {
            this.head.data = this.head.next.data;
            this.head.next = this.head.next.next;
            console.log("1st element deleted from the list");
            return true;
        }
        else {
            current = current.next;
        }
        while (current.data != key) {
            if (current.next == null) {
                break;
            }
            previous = current;
            current = current.next;
        }
        if (current.data == key) {
            previous.next = current.next;
            console.log("element  deleted from the list");
            return true;
        }
        else {
            console.log("element is not in list");
            return false;
        }
    }

    // end of all methods.
}



class Bank {
    constructor(balance) {
        this.balance
    }
}




/**
 * 
 * @param {*} readlinessync : fetch the value fom user :
 * @param {*} module : Export module from server :
 * @param {*} queuelink,queutil,dequtil : requiring the classes from other module
 */
const show = require('util')
const queuelink = require('./queueLinklist')
const dequtil = require('./dequeue')
const queutil = require('./QueueUtility')
var readlinessync = require('readline-sync')
module.exports = {
    LinkedList,
    Bank,


    /**
     * 
     * @param {*} str1  : string 1st passing by another function
     * @param {*} str2  : string 2st passing by another function
     */
    isAnagram(str1, str2) {
        var count = 0;
        var string1 = str1.toString().split("");
        //sort the string 
        string1.sort();
        var string2 = str2.toString().split("");
        string2.sort();

        var l1 = string1.length;
        //console.log(l1);
        if (string1.length != string2.length) {
            return false;
        }

        else {
            for (var i = 0; i < l1; i++) {
                //comparing the each element with other string each element 
                if (string1[i] == string2[i]) {
                    count++;
                }
            }
            if (count == string1.length) {
                return true;
                //console.log("string are anagram");
            }
            else {
                return false;
                //console.log("string are not anagram");
            }
        }
    },
    // used for sorting the no or string 
    sort(no) {
        var arr = no;
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; i < arr.length; j++) {
                if (no[i] < no[j]) {
                    var temp = no[i];
                    no[i] = no[j];
                    no[j] = temp;
                }
            }
        }
        return (arr);
    },

    /**
     * check the prime number between 0 to 1000 
     */
    isprime() {
        var prime = [200];
        //console.log(prime);

        prime[0] = 2;
        var index = 1, i = 3;
        while (i <= 1000) {
            var valid = false;
            //console.log(valid);
            for (var j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    //console.log('aa rha');
                    valid = true;
                }
            }
            if (valid == false) {
                //console.log('nahi aa rha');
                prime.push([i]);
                console.log(prime);
                index++;
            }
            //console.log(' i hai');
            //console.log([i]);

            i++;
        }
    },

    /**
     * check the prime number by passing the number where to fined the prime  
     */
    isPrime(num) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    },

    display(n) {
        var arr = [2];
        for (var i = 3; i < n; i += 2) {
            if (this.isPrime(i)) {
                arr.push(i);
            }
        }
        console.log(arr); // use arr result on your own
    },

    /**
     * 
     * @param {*} word ; check the word is anagram or not
     */
    checkPalindromeWord(word) {


        var size = word.length;
        var isPalindrome = true;

        //Dequeue
        //let dequtil = new.Dequeue();
        // var ch = word.split(" ");

        for (let i = 0; i < size; i++) {
            //To add element from rear
            dequtil.addRear(word[i]);
        }
        while (!dequtil.isEmpty() && dequtil.front != dequtil.rear) {
            //if removed element from front is not equal to removed element from rear then returns false
            if (dequtil.removeFront() == dequtil.removeRear()) {
                isPalindrome = true;
            }
            else {
                return false;
            }
        }
        return true;
    },




    //Queue Data Structure
    //Simulate Banking Cash Counter
    cashCounter(balance) {
        var totalAmt = balance;
        console.log(totalAmt);
        var queue = new queutil.Queue();

        //take input no of user in queue
        var pepole = readlinessync.questionInt("enter the no pepole in queue:");
        for (var i = 0; i < pepole.length; i++) {
            queue.inqueue(i);
        }

        //travers loop for no. of pepole in queue
        while (pepole > 0) {
            var ch = 0, amount = 0;
            ch = readlinessync.questionInt("\n1.Press 1 for Deposit Amount.\n2.Prss 2 for Withdraw Amount.\n");
            switch (ch) {
                case 1:
                    //deposit amount
                    amount = readlinessync.questionInt("Enter the Amount : ");
                    totalAmt = this.depositAmt(totalAmt, amount);
                    break;
                case 2:
                    //withdraw amount
                    amount = readlinessync.questionInt("Enter the Amount :");
                    totalAmt = this.withdrawAmt(totalAmt, amount);
                    break;
                default:
                    Console.WriteLine("invalid input!! enter your option again:");
            }
            pepole--;
        }

    },
    //deposit Amount
    depositAmt(totalAmt, amount) {
        totalAmt += amount;
        console.log("Updated Balnce:" + totalAmt);
        return totalAmt;
    },
    //withdraw Amount
    withdrawAmt(totalAmt, amount) {
        if (totalAmt > amount) {
            totalAmt -= amount;
            console.log("Updated Balnce:" + totalAmt);
            return totalAmt;
        } return console.log("Insufficent Balancle..\nCurrent Balance:" + totalAmt);

    },






    //Dequeue Data Structure
    //Palindrome-Checker
    checkPalindrome(str) {
        console.log(str);

        var dqueue = new dequtil.Dequeue();
        var count = 0;
        var Palindrome = false;
        for (var i = 0; i < str.length; i++) {
            console.log(typeof (dqueue.addRear(str[i])));
        }
        console.log(dqueue.qprint());
        while (!dqueue.isEmpty() && dqueue.front !== dqueue.rear) {
            var str = "", str2 = "";
            str1 = dqueue.removeRear();
            console.log(str1)
            str2 = dqueue.removeFront();
            console.log(str2);

            if (str1 === str2) {
                count++;
            }
        }
    },

    /**
     * 
     * @param {*} n : till where, to fined the factorial
     */
    factorial(n) {
        var fact = 1;
        for (i = 1; i <= n; i++) {
            //fact=fs.readFileSync(fileName).toString().split(" ");
            //return content;
            fact = fact * i;
        } return fact;
    },
    /**
     * 
     * @param {*} node : Node is to fined the actual node into tree 
     */
    binaryTree(node) {
        var number = (Math.floor(this.factorial(2 * node)) / (this.factorial(node + 1) * this.factorial(node)));
        return number;
    },




    //Return the leap year of the program
    isLeapYear(year) {
        /*
        * ensure year is of four digit
        */
        //condition for checking leap 
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        else {
            return false;
        }
    },


    //finding the last date of the month
    GetLast_Date(month, year) {
        var lastDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 2) {
            if (this.isLeapYear(year)) {
                return 29;
            }
            else {
                return lastDates[month - 1];
            }
        }
        else {
            return lastDates[month - 1];
        }
    },


    // return the 1st day where week is start
    day(month, days, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        // console.log(y0);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        //console.log(x);
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        //console.log(m0);
        var d0 = (days + x + Math.floor((31 * m0) / 12)) % 7;
        //.log(d0);

        return d0;
    },
    // GetCalenderArray(firstDay, lastDay) {
    //     var calenderArray = [6, 7];
    //     var date = 1;
    //     for (var i = 0; i < 6; i++) {
    //         if (i == 0) {
    //             for (var j = 7 - firstDay; j < 7; j++) {
    //                 calenderArray[i, j] += date;
    //                 date++;
    //             }
    //         }
    //         else {
    //             for (var j = 0; j < 7; j++) {
    //                 if (date <= lastDay) {
    //                     calenderArray[i, j] += date;
    //                     date++;
    //                 }
    //             }

    //         }
    //     }
    //     //console.log((calenderArray));

    //     return calenderArray;

    // },



    displayCal(month, year) {


        var calendar = new Array(7);
        for (var i = 0; i < 6; i++) {
            calendar[i] = new Array(7);
        }

        // months array
        var months = [" ", "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        // array of number of days in month
        var daysInMonth = [' ', '31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
        // array week days
        var weekDays = [' S ', 'M ', 'T ', 'W ', 'Th', 'F ', 'S '];

        // if month is February the check the year is leap or not
        if (month == 2 && this.isLeapYear(year)) {
            daysInMonth[month] = 29;
        }
        console.log();
        console.log("   " + months[month] + " " + year);
        console.log();

        // retuning day by dayCalculate() function
        var day = this.day(month, 1, year);

        // adding week days and dates in array
        calendar[0] = weekDays;
        for (let i = 0; i < day; i++)
            calendar[1][i] = "  ";
        var row = 1;
        var col = day;
        for (var i = 1; i <= daysInMonth[month]; i++) {
            if (col == 7) {
                col = 0;
                row++;
            }
            if (i < 10)
                calendar[row][col++] = ' ' + i;
            else
                calendar[row][col++] = '' + i;

        }
        //console.log(calendar.join('\n'));
        return calendar;
    },



    calenderQueue(month, year) {

        var calque = new queuelink.Queue_LinkList();

        var calendar = new Array(7);
        for (var i = 0; i < 6; i++) {
            calendar[i] = new Array(7);
        }

        // months array
        var months = [" ", "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        // array of number of days in month
        var daysInMonth = [' ', '31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
        // array week days
        var weekDays = [' S ', 'M ', 'T ', 'W ', 'Th', 'F ', 'S '];

        // if month is February the check the year is leap or not
        if (month == 2 && this.isLeapYear(year)) {
            daysInMonth[month] = 29;
        }
        console.log();
        console.log("   " + months[month] + " " + year);
        console.log();

        console.log(' S  M  T  W  Th F  S ');

        // retuning day by dayCalculate() function
        var day = this.day(month, 1, year);

        // adding week days and dates in array
        calendar[0] = weekDays;
        for (let i = 0; i < day; i++)
            calque.enqueue("  ");
        for (var i = 1; i <= daysInMonth[month]; i++) {
            if (i < 10)
                calque.enqueue(' ' + i);
            else
                calque.enqueue('' + i);

        }
        //console.log(calendar.join('\n'));

        //Dequeue the date element to print the calender 
        var c = 0;
        while (!calque.isempty()) {
            if (c % 7 === 0)
                console.log();
            process.stdout.write(calque.dequeue() + ' ');
            c++;
        }
        console.log('\n');
        return calendar;

    },

    //End of all logic of data structure






    //rest of these elemnt is not give the currect output
    calender(month, year) {

        var months = [
            "",
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ];
        var days = [0, 31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
        try {
            //checking Month & year is valid or not
            if (month < 0 || month > 12)
                throw "Month value is Invalid , Please Enter a value in range 1-12";

            if (month == undefined || year == undefined)
                throw "NO input found";

            console.log();
            // if month is February then,
            //checked year is leap year or not
            if (month == 2 && this.isLeapYear(year)) days[month] = 29;
            //show.print()
            console.log("              " + months[month] + " " + year);
            console.log();
            var arr = new Array(5)
            for (let i = 0; i < 4; i++) {
                arr[i] = new Array(7);

            }
            console.log(" S  M Tu  W Th  F  S");

            //Printing the first day of first week
            var day = this.day(month, 1, year);

            // for (let i = 0; i < day; i++) {
            //     //show.print("   ")
            //     //process.stdout.write("   ")

            // }
            // for (var i = 1; i <= days[month]; i++) {
            //     //show.print(" ", i);
            //     //process.stdout.write(" ", i);
            //     //console.log(i);

            //     if (i < 10) {
            //         //show.print(" ");
            //         //process.stdout.write(" ");
            //     }
            //     if (((i + day) % 7 == 0) || (i == days[month])) {
            //         //console.log(" ");
            //     }
            // }

            //creating 2d array to print the date data
            for (let i = 0; i < day; i++)
                arr[1][i] = "  ";
            var row = 1;                            // Assingning row and colomn
            var col = day;
            for (var i = 1; i <= days[month]; i++) {        //iterate to the lenght of the month
                if (col == 7) {
                    col = 0;
                    row++;
                }
                if (i < 10)                     //printing the space between 1 to 9 digit which is in calender
                    arr[row][col++] = ' ' + i;
                else {
                    if (i == undefined)
                        arr[row][col++] = 1;
                    else
                        arr[row][col++] = '' + i;  //printing the rest of the element into calender
                }


            }
            //console.log(arr.join('\n'))
            return arr;
        }
        catch (err) {
            console.log("Error: " + err);
        }
    },



    calenderqueue(month, year) {

        var calque = new queutil.Queue();

        var months = [
            "",
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ];
        var days = [0, 31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
        try {
            //checking Month & year is valid or not
            if (month < 0 || month > 12)
                throw "Month value is Invalid , Please Enter a value in range 1-12";

            if (month == undefined || year == undefined)
                throw "NO input found";

            console.log();
            // if month is February then,
            //checked year is leap year or not
            if (month == 2 && this.isLeapYear(year)) days[month] = 29;
            //show.print()
            console.log("              " + months[month] + " " + year);
            console.log();
            var arr = new Array(5)
            for (let i = 0; i < 4; i++) {
                arr[i] = new Array(7);

            }
            console.log(" S  M Tu  W Th  F  S");

            //Printing the first day of first week
            var day = this.day(month, 1, year);

            // for (let i = 0; i < day; i++) {
            //     //show.print("   ")
            //     //process.stdout.write("   ")

            // }
            // for (var i = 1; i <= days[month]; i++) {
            //     //show.print(" ", i);
            //     //process.stdout.write(" ", i);
            //     //console.log(i);

            //     if (i < 10) {
            //         //show.print(" ");
            //         //process.stdout.write(" ");
            //     }
            //     if (((i + day) % 7 == 0) || (i == days[month])) {
            //         //console.log(" ");
            //     }
            // }

            //creating 2d array to print the date data
            for (let i = 0; i < day; i++)
                arr[1][i] = "  ";
            var row = 1;                            // Assingning row and colomn
            var col = day;
            for (var i = 1; i <= days[month]; i++) {        //iterate to the lenght of the month
                if (col == 7) {
                    col = 0;
                    row++;
                }
                if (i < 10)                     //printing the space between 1 to 9 digit which is in calender
                    arr[row][col++] = ' ' + i;
                else {
                    if (i == undefined)
                        arr[row][col++] = 1;
                    else
                        arr[row][col++] = '' + i;  //printing the rest of the element into calender
                }


            }
            //console.log(arr.join('\n'))
            return arr;
        }
        catch (err) {
            console.log("Error: " + err);
        }
    },












}
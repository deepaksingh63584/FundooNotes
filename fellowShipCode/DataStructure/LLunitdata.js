
// User defined class node 
class Node {
    // constructor 
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

// linkedlist class 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    // checks the list for empty 
    isEmpty() {
        return this.size == 0;
    }


    // gives the size of the list 
    size_of_list() {
        console.log(this.size);
    }

    // adds an element at the end 
    // of list 
    add(element) {
        // creates a new node 
        var node = new Node(element);

        // to store current node 
        var current;

        // if list is Empty add the 
        // element and make it head 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the 
            // list 
            while (current.next) {
                current = current.next;
            }

            // add node 
            current.next = node;
        }
        this.size++;
    }
    InsertSorted(data) {
        var newNode = new Node(data);
        var current = this.head;
        var previous = this.head;
        if (this.head == null) {
            newNode.next = this.head;
            this.head = newNode;
            return true;
        }
        else {
            if (current.data >= newNode.data) {
                newNode.next = this.head;
                this.head = newNode;
                console.log(current.data);
                return true;
            }
            while (current.data < newNode.data) {
                if (current.next == null) {
                    break;
                }
                previous = current;
                current = current.next;
            }
            if (previous.data < newNode.data && newNode.data < current.data) {
                newNode.next = previous.next;
                previous.next = newNode;
                return true;
            }
            else {
                newNode.next = current.next;
                current.next = newNode;
                return true;
            }
        }
    }
    /***************************************insertNextToKey method************************/
    // insert element at the position index 
    // of the list 
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node 
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the 
            // first index 
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find 
                // the position to insert 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    /*************************************DisplayStringList method************************/
    // prints the list items 
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
    /***************************************ReturnString method************************/
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
            console.log("List is empty");
            return null;
        }
    }
    /***************************************ReturnString method************************/
    ReturnNumberString() {
        var stringText = "";
        var current = head;
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
            console.log("List is empty");
            return null;
        }
    }
    /***************************************ReturnString method***********************
    public int ReturnIntArray()
    {
        int[] intArray = new int[1000];
        Node current = head;
        if (head != null)
        {
            int i = 0;
            while (current != null)
            {
                intArray[i] = current.data;
                current = current.next;
                i++;
            }
            return intArray;
        }
        else
        {
            console.log("List is empty");
            return null;
        }
    }
    */
    /***************************************Search-string method************************/
    Search(key) {
        var current = this.head;
        if (this.head == null) {
            console.log("List is empty so none element deleted");
            return false;
        }
        while (current.data != key) {
            if (current.next == null) {
                break;
            }
            current = current.next;
        }
        if (current.data == key) {
            console.log("element found in list");
            return true;
        }
        else {
            console.log("element is not in list");
            return false;
        }
    }
    /***************************************Search-integer method************************/
    SearchInt(key) {
        var current = this.head;
        if (this.head == null) {
            console.log("List is empty so none element deleted");
            return false;
        }
        while (current.data != key) {
            if (current.next == null) {
                break;
            }
            current = current.next;
        }
        if (current.data == key) {
            console.log("element found in list");
            return true;
        }
        else {
            console.log("element is not in list");
            return false;
        }
    }
    /***************************************DeleteFront method************************/
    DeleteFront() {
        if (this.head == null) {
            console.log("List is empty so none element deleted");
        }
        else if (this.head.next == null) {
            this.head = null;
        }
        else {
            this.head.data = this.head.next.data;
            this.head.next = this.head.next.next;
        }
    }
    /***************************************DeleteKeyElement(string) method************************/
    // removes an element from the 
    // specified location 
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element 
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the 
                // position to removce an element 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element 
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element 
            return curr.element;
        }
    }
    // removes a given element from the 
    // list 
    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }


    // finds the index of element 
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list 
        while (current != null) {
            // compare each element of the list 
            // with given element 
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found 
        return -1;
    }
}










































































class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isempty() {
        if (this.head == 0) {
            console.log("In list, No data is present ! its Empty : ")
        }
    }

    printList() {
        var current = this.head;
        var str = "";
        while (current != null) {
            str += " -> " + current.data;
            current = current.next;
        }
        console.log(str);
        return str;
    }

    addNode(data) {
        var node = new Node(data);
        var current = this.head;
        if (this.head == null) {
            this.head = node;
            this.size++;
            //console.log(data);
        }
        else {
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } this.size++;
    }

    specificPosition(data, pos) {
        var node = new Node(data);
        var curr, prev;
        curr = this.head;
        if (pos == 0) {
            node.next = this.head;
            this.head = node;
            this.size++;
        }
        else {
            var current = this.head;
            var it = 0;
            while (it < pos) {
                it++;
                prev = current;
                current = current.next;
            }
            prev.next = node;
            node.next = current;
        } this.size++;
    }
    removeElementIndex(pos) {
        var current, prev;
        current = this.head;
        if (pos == 0) {
            this.head = current.next;
            this.size--;
        }
        else {
            var current = this.head;
            var it = 0;
            while (it < pos) {
                it++;
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        } this.size--;
    }

    removeElement(element) {
        var prev = null;
        var current = this.head;
        while (current != null) {
            if (current.data == element) {
                if (prev == null)
                    this.head = current.next;
                else
                    prev.next = current.next;
            } prev = current;
            current = current.next;
        }
    }
    searchElement(element) {
        var current = this.head;
        var pos = 0;

        while (current != null) {
            if (current.data == element) {
                //console.log("found");
                return true;
            }
            pos++;
            current = current.next;
        } return false;
    }



    sort() {
        var current = this.head;
        var index;
        if (this.head == null) {
            return;
        }
        else {
            while (current != null) {
                index = current.next;
                while (index != null) {
                    if (current.data > index.data) {
                        console.log(current.data);
                        console.log(index.data);
                        var temp = current.data;
                        current.data = index.data;
                        index.data = temp;
                    }
                    index = index.next;
                }
                current = current.next;
            }
        }
    }
}

















var readlinessync = require('readline-sync')
module.exports = {
    LinkedList,



    //Queue Data Structure
    //Simulate Banking Cash Counter
    cashCounter(balance) {
        var totalAmt = balance;
        console.log(totalAmt);
        var queue = new que.Queue();

        //take input no of user in queue
        var pepole = rl.questionInt("enter the no pepole in queue:");
        for (var i = 0; i < pepole.length; i++) {
            queue.inqueue(i);
        }

        //travers loop for no. of pepole in queue
        while (pepole > 0) {
            var ch = 0, amount = 0;
            ch = rl.questionInt("\n1.Press 1 for Deposit Amount.\n2.Prss 2 for Withdraw Amount.\n");
            switch (ch) {
                case 1:
                    //deposit amount
                    amount = rl.questionInt("Enter the Amount : ");
                    totalAmt = this.depositAmt(totalAmt, amount);
                    break;
                case 2:
                    //withdraw amount
                    amount = rl.questionInt("Enter the Amount :");
                    totalAmt = this.withdrawAmt(totalAmt, amount);
                    break;
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
        var dqueue = new dque.Dequeue();
        var count = 0;
        var Palindrome = false;
        for (var i = 0; i < str.length; i++) {
            dqueue.addRear(str[i]);
        }
        dqueue.qprint();
        while (!dqueue.isEmpty() && dqueue.front !== dqueue.rear) {
            var str = "", str2 = "";
            str1 = dqueue.removeRear();
            str2 = dqueue.removeFront();
            if (str1 === str2) {
                count++;
            }
        }
    },
    primeNumber(range) {
        var count;
        var pos = 0;
        var arr = new Array();
        for (var i = 2; i <= range; i++) {
            count = 0;
            for (var j = 2; j < i; j++) {
                if ((i % j) == 0) {
                    count++;
                    break;
                }
            }
            if (count == 0) {
                arr[pos] = i++;
                pos++;
            }
        }
        return arr;
    },
    checkAnagram(str1, str2) {
        //var str1=13,13,11;
        //var str2=23,11,19;
        var check = false;
        var count = 0;
        var string1 = str1.toString().split("");
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
        return (arr);;
    },


    
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
            // input year & month from user
            //var year= rl.questionInt("enter the year:");
            //var month=rl.questionInt("enter the month:");

            //checking Month & year is valid or not
            if (month < 0 || month > 12) throw "Month value is Invalid , Please Enter a value in range 1-12"
            if (month == undefined || year == undefined) throw "NO input found";

            //checked year is leap year or not
            if (month == 2 && this.isLeapYear(year)) days[month] = 29;
            //show.print()
            console.log("   " + months[month] + " " + year);
            console.log(" S  M Tu  W Th  F  S");

            //days printing
            var day = this.day(month, 1, year);

            for (let i = 0; i < day; i++) {
                show.print("   ")
            }
            for (var i = 1; i <= days[month]; i++) {
                show.print(" ", i);
                if (i < 10) {
                    show.print(" ");
                }
                if (((i + day) % 7 == 0) || (i == days[month])) {
                    console.log(" ");
                }
            }
        }
        catch (err) {
            console.log("Error: " + err);
        }
    },
    day(month, days, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        console.log(y0);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        console.log(x);
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        console.log(m0);
        var d0 = (days + x + Math.floor((31 * m0) / 12)) % 7;
        console.log(d0);

        return d0;
    },
    factorial(n) {
        var fact = 1;
        for (i = 1; i <= n; i++) {
            factfs.readFileSync(fileName).toString().split(" ");
            return content;
            fact = fact * i;
        } return fact;
    },
    binaryTree(node) {
        var number = (Math.floor(this.factorial(2 * node)) / (this.factorial(node + 1) * this.factorial(node)));
        return number;
    },
}
/**
 * Creating node class and constructor for traversing each node 
 */

class Node {
    constructor(top, max) {
        this.top = top;
        this.max = max;

    }
}

// Creating object of the node class
var arr = new Node;

/**
 * Creating a Single LinkedList class
 */
class Stacklinkedlist {
    constructor() {
        this.top = -1;
        this.size = 0;
    }
    /**
     * if top is Empty then list is empty
     */
    isEmpty() {
        if (this.top == -1) {
            return true;
        } return false;
    }

    /**
     * size of the list
     */
    size() {
        return this.size;
    }
    /**
     * 
     * @param {*} data : add data into list with respect to the top 
     */
    pushdata(data) {
        if (this.top == (this.max - 1)) {
            return false;
        }
        else {
            arr[++this.top] = data;
            this.size++;
            return true;
        }
    }


    /**
     * deleting a element from the front 
     */
    pop() {
        if (this.top == -1) {
            return false;
        }
        else {
            arr[this.top--];
            this.size--;
            return true;
        }
    }

    //trturn the value of top
    peek() {
        return arr[this.top];
    }

    /**
     * display the each list element
     */
    display() {
        var str = "";
        for (var i = 0; i < this.size; i++) {
            str = str + arr[i] + " ";
        }
        console.log(str);
    }
}
module.exports = {
    Stacklinkedlist,


    /**
     * 
     * @param {*} range : range will define by user where to find the prime Number 
     */
    primeNumber(range) {
        var count;
        var pos = 0;
        // Creating a new array to store the prime number
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

    /**
     * 
     * @param {*} num : num will define by user where to find the prime Number 
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
        //console.log(arr); // use arr result on your own
        return arr;
    },

    /**
    * @description : checks number are anagrams are or not
    * @param {number to be checked for anagram} str1
    * @param {number to be checked for anagram} str2 
    */
    checkAnagram(str1, str2) {
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
    /**
     * 
     * @param {sort the no which is passing the anagram parameter} no 
     */
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









}

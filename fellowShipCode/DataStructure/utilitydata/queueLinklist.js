/**
 * Creating node class and constructor for traversing each node 
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next;
    }
}

/**
 * Creating a queue class
 */
class Queue_LinkList {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
        //console.log(size);

    }
    /**
     * If front and rear both are empty then its empty
     */
    isempty() {
        if (this.rear == null) {
            return true;
        }
        // else
        //     console.log('data empty');
        return false;
    }

    // size of the queue
    size() {
        return this.size;
    }

    /**
  * 
  * @param {*} data : add a node element with respect of front side
  */
    enqueue(data) {

        var node = new Node(data);
        if (this.rear == null) {
            this.front = node;
            this.rear = node;
            this.size++;
            return
        }
        this.rear.next = node;
        this.rear = node;
        this.size++;
    }


    /**
     * deleting a element from the front 
     */
    dequeue() {
        if (this.front == null) {
            console.log("List is Empty");
            return null;
        }
        var temp = this.front;
        this.front = this.front.next;

        if (this.front == null)
            this.rear = null;
        return temp.data;
    }

    //printing each element inside the queue
    display() {

        var arr = "";
        console.log(arr)
        while (this.rear != null) {
            arr += this.dequeue() + " ";
        }
        console.log(arr);
        return arr;
    }

    /**
     * sort the queue in accending order
     */
    sort() {
        var arr = "";
        var current = this.front;
        while (current != this.rear) {
            if (current.data > current.next.data) {
                var temp = current.data;
                current = current.next.data;
                current.next = temp;
                arr += current.data;
            }
            current = current.next;
        }
        console.log(arr);
    }
}


module.exports = {
    Queue_LinkList,





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
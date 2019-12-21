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
 * Creating a dequeue class
 */
class Dequeue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.queuesize = 0;
    }

    /**
     * If front and rear both are empty then its empty
     */

    isEmpty() {
        if (this.front == this.rear == null) {
            return true;
        } return false;
    }

    /**
     * 
     * @param {*} data : add a node element with respect of front side
     */
    addFront(data) {
        var node = new Node(data);
        // console.log(data);
        if (this.front == null) {    // front is empty then front will be make node
            this.front = node;
            this.rear = node;
            this.size++;              //increasing the size
            console.log("size" + this.size);
            // console.log("if:"+data);
        } else {
            this.front.next = node;     // if front node already exist then node go for next node 
            this.front = node;
            this.size++;

            //console.log("else:"+data);
        }
    }

    /**
     * 
     * @param {*} data : add a node element with respect of rear side
     */
    addRear(data) {
        var node = new Node(data);
        if (this.front == null) {
            this.front = node;
            this.rear = node;
            this.size++;

        }
        else {
            node.next = this.rear;
            //this.rear.next=node;
            this.rear = node;
            this.size++;

        }
    }

    /**
     * deleting a element from the front 
     */
    removeFront() {
        if (this.front == null) {
            return false;
        }
        if (this.rear == this.front) {             // delete the element present inside it
            this.rear = null;
            this.front = null;
            this.size--;

        }
        else {
            var temp = this.rear;
            while (temp.next != this.front) {
                temp = temp.next;
            }
            this.front = temp;
            this.front.next = null

        }
    }
    // remove rear element 
    removeRear() {
        if (this.front == this.rear) {
            this.front = null;
            this.rear = null;
        }
        else {
            this.rear = this.rear.next;
        }
    }

    // size of the queue
    queuesize() {
        return this.size;
    }

    //printing each element inside the dequeue
    qprint() {
        var temp = this.rear;
        var string1 = "";
        while (temp != null) {
            string1 += temp.data + "-> ";
            //console.log(temp.data);
            temp = temp.next;
        }
        console.log(string1);
    }



    /**
         * @description : traversing the deque from the front to rear
         * @returns : string 
         */

    printForword() {
        var current = this.front;
        var string = '';
        while (current != null) {
            string += current.data + ' '
            current = current.next;
        }
        return string;
    }

    /**
     * @description : traversing the deque from the rear to front
     * @returns : string 
     */

    printBackword() {

        var current = this.rear;
        var string = '';
        while (current != null) {
            string += current.data + ' '
            current = current.prev;
        }
        return string;
    }
}

module.exports = {

    //exporting the dequeue class
    Dequeue,


    //Palindrome-Checker
    checkPalindrome(str) {
        var dqueue = new this.Dequeue();
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



}

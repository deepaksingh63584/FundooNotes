/**
 * Creating a queue class
 */

class Queue {
    constructor() {
        this.data = [];
    }

    /**
    * If front and rear both are empty then its empty
    */
    isEmpty() {
        if (this.data == 0) {
            return true;
        } return false;
    }
    /**
     * 
     * @param {*} x :add data into queue
     */
    inqueue(x) {
        return this.data.push(x);
    }


    /**
     * deleting a element from the front 
     */
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return true;
        } return this.data.shift();
    }


    //printing each element inside the queue
    print() {
        var str = "";
        for (var i = 0; i < this.data.length; i++) {
            str += this.data[i] + " ";
        }
        console.log(str);
    }
}
module.exports = {
    Queue
}


/**
 * 
 * Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue using
    the Linked List and Print the Anagrams from the Queue. Note no Collection Library
    can be used.

@author : Deepak Singh

@since : 26/11/2019

 */
const queueutil = require('./utilitydata/queueLinklist');


var queue = new queueutil.Queue_LinkList();
var primeNumber = queueutil.display(1000);
console.log(primeNumber);
var range = 100;

//takeing first primeNumber
for (var i = 0; i < primeNumber.length; i++) {
    for (var j = i + 1; j < primeNumber.length; j++) {
        //cheked two primeNumbers are anagram or not
        var value = (queueutil.checkAnagram(primeNumber[i], primeNumber[j]));

        if (value === true) {
            //store in value in queue
            if (primeNumber[i] <= range) {
                if (primeNumber[j] <= range) {
                    queue.enqueue(primeNumber[i]);
                    queue.enqueue(primeNumber[j]);
                }
            }
            else {
                //increasing range    
                range = range + 100;
                if (primeNumber[j] < range) {
                    queue.enqueue(primeNumber[i]);
                    queue.enqueue(primeNumber[j]);
                }
            }
        }
    }
}
//display queue element 
queue.display();
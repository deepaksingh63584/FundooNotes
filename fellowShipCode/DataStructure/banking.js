/**
    Desc ­> Create a Program which creates Banking Cash Counter where people
    come in to deposit Cash and withdraw Cash. Have an input panel to add people
    to Queue to either deposit or withdraw money and dequeue the people. Maintain
    the Cash Balance.

    I/P ­> Panel to add People to Queue to Deposit or Withdraw Money and dequeue
    Logic ­> Write a Queue Class to enqueue and dequeue people to either deposit
        or withdraw money and maintain the cash balance.
    O/P ­> True or False to Show Arithmetic Expression is balanced or not.

    @author : Deepak Singh

    @since : 23/11/2019
 */



const queueutil = require('./utilitydata/QueueUtility');
const util = require('./utilitydata/Utildata')

console.log("********Welcome to the Axis Bank :***********");
var balance = 237598;
console.log("Current balence : " + balance);
util.cashCounter(balance);

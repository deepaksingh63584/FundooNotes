/**
 * Create the Week Object having a list of WeekDay objects each storing the day (i.e
    S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay objects are stored in a Queue
    implemented using Linked List. Further maintain also a Week Object in a Queue to
    finally display the Calendar

    Note: ­ 
        If a particular day has no date then the date is set as empty string and add it
    to queue.

    @author : Deepak Singh

    @since : 27/11/2019

 */

const util = require('./utilitydata/Utildata');
const readline = require('readline-sync');

//var queuell = queuelinklist.Queue_LinkList()

var month = readline.questionInt("Enter the month between 0 to 12 : \n");
var year = readline.questionInt("Enter the year which is 4 digit : \n")

var calque = util.calenderQueue(month, year);
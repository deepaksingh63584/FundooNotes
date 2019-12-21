/**Problems Statement:-
        Write a program Calendar.java that takes the month and year as command­line
        arguments and prints the Calendar of the month. Store the Calendar in an 2D Array,
        the first dimension the week of the month and the second dimension stores the day
        of the week.

        @author :Deepak Singh

        @since :27/11/2019
*/

const util = require('./utilitydata/Utildata');
const readline = require('readline-sync');


var month = readline.questionInt("Enter the month between o to 12 : \n");

var year = readline.questionInt("Enter the year do you want : \n");

// util.calender(month, year);
var calendar = util.displayCal(month, year);

// printing the calender
for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
                if (calendar[i][j] == undefined)
                        process.stdout.write(' ' + ' ');
                else
                        process.stdout.write(calendar[i][j] + ' ');
        }
        console.log();
}
console.log();
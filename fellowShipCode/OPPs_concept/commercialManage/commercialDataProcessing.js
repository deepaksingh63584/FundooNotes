/**
 *                                   @Commercial_Data_Processing
 * 
 * @description: StockAccount.java implements a data type that might be used by a financial institution
                 to keep track of customer information.

    @input :  read json files

    @logic : Input from user to buy and update changes to files
    
    @output : write to json files 

        @author : Deepak Singh
        @since : 03/12/2019
 */


var utility = require('./commercialData');
var utilty = require('./userData');

var u = require('../util')
var util = new utility.companyLogin();
var utl = new utilty.userLogin();
function commercial()
{
    do
    {
        console.log('1.Company Login');
        console.log('2.user Login');
        console.log('3.Exit');
        console.log('Enter your choice=');
        var choice = u.inputIntegerRead();
        switch(choice)
        {
            case 1:
                util.company();
                break;
            case 2:
                utl.user();
                break;
            case 3:
                return
            default:
                console.log('Invalid choice');
        }
    }while(choice);
}

commercial();
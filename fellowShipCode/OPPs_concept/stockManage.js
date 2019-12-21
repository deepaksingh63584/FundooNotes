
/**                         
 *                                       @Stock_Report
 
 * @Description -Write a program to read in Stock Names, Number of Share, Share Price.
    Print a Stock Report with total value of each Stock and the total value of Stock.
 *@input - N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price
 *@Logic - Calculate the value of each stock and the total value 
 *@Output - Print the Stock Report.


    @author : Deepak Singh

    @since : 02/12/2019
 */


var utility = require('./stockUtility');
var util = require('./util');
var stockM = new utility.stockManagement();
function stock() {
    do {
        console.log(" ");
        console.log("1.Add Corporation");
        console.log("2.Display share names");
        console.log("3.Display Information of particular company");
        console.log("4.Purchase share");
        console.log("5.Exit");
        console.log("Enter choice=");
        var choice = util.inputIntegerRead();
        console.log(" ");
        switch (choice) {
            case 1:
                stockM.addStock();
                break;
            case 2:
                stockM.display();
                break;
            case 3:
                stockM.display();
                console.log("Enter between 1-n = ");
                var choice = util.inputIntegerRead();
                stockM.info(choice);
                break;
            case 4:
                stockM.display();
                console.log("Enter share you wanna purchase(in between 1-n)=");
                var numberOfPurchases = util.inputIntegerRead();
                stockM.purchase(numberOfPurchases);
                break;
            case 5:
                return
            default:
                console.log("Invalid Choice")
        }
    } while (choice)

}

stock();
var rl=require('readline-sync');
var stock=require('./BuyOrSell');
var fs=require('fs');
var buySell=new stock.BuySellStock();

class BuySellStock {
    manage(){
        do{
            var ch =rl.questionInt("\npress\n1. Display available stock.\n2. information of specific stock\n3. shares you want to purchase or buy\n4. Exit\n");
            if (ch == 1) {
                buySell.availableStock();
            }
            else if (ch == 2) {
                buySell.availableStock();
                buySell.infoStock();
            }
            else if (ch == 3) {
                buySell.availableStock();
                buySell.buyStock();
                
            }
            else if (ch == 4) {
                return;
            }
            else {
                console.log("Invalid key/input ");
            }
        }while(ch!=4)    
    }
}  
//var invent=new BuySellStock()
//invent.manage();
module.exports={
    BuySellStock
}
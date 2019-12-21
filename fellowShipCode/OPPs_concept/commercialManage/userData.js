var utility = require('./userManage');
var util = new utility.User();
var utilty = require('./buyShell');
var utl = new utilty.BuySellStock();
var u = require('../util')
class userLogin
{
    user()
    {
 
        util.addList();
        do
        {
            console.log("1.Add user details");
            console.log("2.Remove user details");
            console.log("3.Write to file");
            console.log("4.Display");
            console.log("5.Buy or Sell");
            console.log("6.Exit");
            console.log("Enter your choice=");
            var choice = u.inputIntegerRead();
            switch(choice)
            {
                case 1:
                    util.addUser();
                    break;
                case 2:
                    //console.log("Enter company name to remove=");
                    //var name = u.inputStringRead();
                    util.removeUser();
                    break;
                case 3:
                    util.writeToFile();
                    break;
                case 4:
                    util.displayUserShare();
                    break;
                case 5:
                    utl.manage();
                    break;
                case 6:
                    return
                default:
                    console.log("Wrong choice");
            }
        }while(choice)
    }
}

module.exports={
    userLogin
}
//user();
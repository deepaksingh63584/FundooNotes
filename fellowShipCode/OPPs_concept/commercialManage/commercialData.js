var utility = require('./commercial');

var util = new utility.Company();
var u = require('../util')
class companyLogin
{
    company()
    {
        var content = /^[a-zA-Z]+$/;        
        util.addList();
        do
        {
            console.log("1.Add company details");
            console.log("2.Remove company details");
            console.log("3.Write to file");
            console.log("4.Display");
            console.log("5.Display Company Name");
            console.log("6.Exit");
            console.log("Enter your choice=");
            var choice = u.inputIntegerRead();
            switch(choice)
            {
                case 1:
                        //to  take input from user
                        console.log("Enter company name=");
                        var companyName = u.inputStringRead();
                        //to check if it is a character string
                        if(!content.test(companyName))   
                        {
                            //if invalid input again take input
                            console.log("Enter company name=");
                            var companyName = u.inputStringRead();
                        }
                        console.log("Enter number of shares=");
                        var noOfshare = u.inputIntegerRead();
                        console.log("Enter symbol=");
                        var symbol = u.inputStringRead();
                        console.log("Enter share price for each share=");
                        var price = u.inputIntegerRead();
                        util.addCompany(companyName,noOfshare,symbol,price);
                        break;
                case 2:
                    util.displayCompanyName();
                    console.log("Enter company name to remove=");
                    var name = u.inputStringRead();
                    //to check if it is a character string
                    if(!content.test(name))   
                    {
                        //if invalid input again take input
                        console.log("Enter company name=");
                        var name = u.inputStringRead();
                    }                    
                    util.removeCompany(name);

                    break;
                case 3:
                    util.writeToFile();
                    break;
                case 4:
                    util.displaycompanyShare();
                    break;
                case 5:
                    util.displayCompanyName();
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
    companyLogin
}
// var com = new company();
// com.company();
// company();
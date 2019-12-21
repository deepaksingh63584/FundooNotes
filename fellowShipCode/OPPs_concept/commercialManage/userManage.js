var u= require("../util");
var ut = require('./commercial');
var util = require('../../DataStructure/utilitydata/Utildata');
var utll = require('./BuyOrSell');
var utl = new utll.BuySellStock();
var list = new util.LinkedList();
var fs = require('fs');
//var utl =new ut.Company();
class StockHolder
{
    constructor()
    {
        var content = fs.readFileSync("user.json","utf-8");
        //console.log()
        this.value = JSON.parse(content);
    }
}

class User extends StockHolder
{
    addList()
    {
        for (let key in this.value.user) {
            list.InsertFront(this.value.user[key]);
        }
    }

    addUser()
    {
        var content = /^[a-zA-Z]+$/;
        console.log("Enter user name=");
        var userName = u.inputStringRead();
        //to check if it is a character string
        if(!content.test(userName))   
        {
            //if invalid input again take input
            console.log("Enter user name=");
            var userName = u.inputStringRead();
        }
        if(!this.isPresent(userName))
        {
            console.log("Enter number of shares=");
            var noOfshare = u.inputIntegerRead();
            console.log("Enter share price for each share=");
            var price = u.inputIntegerRead();
            var user = {
                "userName" : userName,
                "noOfshare" : noOfshare,
                "price" : price
            }
            list.InsertFront(user);
            this.writeToFile();
        }  
        else
        {
            console.log('User is already Registered');
        }     

    }

    //to check if corportation is present
    isPresent(userName)
    {
        var present=false;
        for(let i=0;i<this.value.user.length;i++)
        {
            //comparing the input from user and the item object
            if(this.value.user[i].userName.toLowerCase() == userName.toLowerCase())
            {        
                present=true;
                break;
            }
            else
            {
                present=false;
            }
        }
        if(present===true)
        {
            return true
        }
        else
        {
            return false
        }
    }
    removeUser()
    {
        var current=list.head;
        console.log("enter the user name you want to delete:");
        var NameOfUser = u.inputStringRead(); 
        //console.log(current.data);
        while(current.data.userName.toLowerCase()!=NameOfUser.toLowerCase() && current!=null){
            current=current.next;
        }
        if(current!=null){
            list.remove(current.data);
            console.log("User detalis remove.Successfully...");
            this.writeToFile();
        }
        else{
            console.log("User name not in the list");
            
        }
    }

    writeToFile()
    {
        this.value.user=[];
        var current = list.head;
        //var current=list.head;
        while(current!=null){
            this.value.user.push(current.data);
            current=current.next;
        }
        fs.writeFileSync("user.json",JSON.stringify(this.value),'utf-8');
    }

    displayUserShare()
    {
        console.log(`Name of user= ${this.data.user.userName}`);
        console.log(`Number of Shares= ${this.data.user.noOfShare}`);
        console.log(`Price Of Each share= ${this.data.user.price}`);
    }

    displayUserName()
    {
        for(var i=0;i<this.data.user.length;i++){
            console.log((i+1)+"."+this.data.user[i].userName);
        }
    }

}

module.exports={
    User
}
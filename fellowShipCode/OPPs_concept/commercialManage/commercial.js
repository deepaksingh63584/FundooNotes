var u= require('../util');
var util = require('../../DataStructure/utilitydata/Utildata');
var list = new util.LinkedList();
var fs = require('fs');
class Stock
{
    constructor()
    {

        var content = fs.readFileSync("commercial.json", "utf-8");

        //console.log()
        this.value = JSON.parse(content);
    }
}

class Company extends Stock
{
    addList()
    {
        for (let key in this.value.stock) {
            list.InsertFront(this.value.stock[key]);
        }
    }

    addCompany(companyName,noOfshare,symbol,price)
    {
        try
        {
            if(companyName==undefined||noOfshare==undefined||symbol==undefined||price==undefined||
               companyName==null||noOfshare==null||symbol==null||price==null)  throw 'Cannot be undefined or null'
            if(companyName==' '||noOfshare==' '||symbol==' '||price==' ')  throw 'Cannot be empty'
            if(isNaN(noOfshare)||isNaN(price))  throw 'Should be a number'

            if(!this.isPresent(companyName))
            {
                var stock = {
                    "companyName" : companyName,
                    "noOfshare" : noOfshare,
                    "symbol" : symbol,
                    "price" : price
                }
                list.add(stock);
                this.writeToFile();
            }
            else
            {
                console.log('Company details are already present');
            }
        }
        catch(e)
        {
            return e;
        }

    }
    //to check if corportation is present
    isPresent(companyName)
    {
        var present=false;
        for(let i=0;i<this.value.stock.length;i++)
        {
            //comparing the input from user and the item object
            if(this.value.stock[i].companyName.toLowerCase() == companyName.toLowerCase())
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

           /* var stock = {
                "companyName" : companyName,
                "noOfshare" : noOfshare,
                "symbol" : symbol,
                "price" : price
            }
            list.add(stock);
            this.writeToFile();
        }
        catch(e)
        {
            return e
        }

    }*/


    removeCompany(companyName)
    {
        try
        {
            console.log(companyName);

            if(companyName==undefined||companyName==null)  throw 'Cannot be undefined or null'
            if(companyName==' ')  throw 'Cannot be empty'
            if(!isNaN(companyName))   throw  'Should be a character string'
            var current=list.head;
            while(current.data.companyName.toLowerCase()!=companyName.toLowerCase() && current!=null){
                current=current.next;
            }
            if(current!=null){
                list.remove(current.data);
                console.log("Company detalis remove.Successfully...");
                this.writeToFile();
            }
            else
            {
                console.log("Company name not in the list");  
            }
        }
        catch(e)
        {
            return e;
        }
    }

    displayCompanyName()
    {
        for(let i=0;i<this.value.stock.length;i++)
        {
            console.log(i+1," "+this.value.stock[i].companyName);
        }

    }

    writeToFile()
    {
        this.value.stock=[];
        var current = list.head;
        //var current=list.head;
        while(current!=null){
            this.value.stock.push(current.data);
            current=current.next;
        }

        fs.writeFileSync('commercial.json',JSON.stringify(this.value));
    }

    displaycompanyShare()
    {
        for(let i=0;i<this.value.stock.length;i++)
        {
            console.log(`Name of Corporation:${this.value.stock[i].companyName}`);

            console.log(`Number of shares:${this.value.stock[i].noOfshare}`);
            console.log(`Symbol:${this.value.stock[i].symbol}`);
            console.log(`Price per each Share:${this.value.stock[i].price}`);
            console.log();
        }
    }
}

module.exports={
    Company
}
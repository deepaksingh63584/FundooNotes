const fs = require('fs');
const readline = require('readline-sync');


class Inventory {
    constructor() {
        console.log("DEEPAK");

        var readdata = fs.readFileSync("JSON/jsonInventory.json", "utf-8");
        this.Inventory = JSON.parse(readdata);
    }
}
class inventoryUser extends Inventory {
    dispalydata() {
        console.log("THAKUR");
        var count = 1;

        //console.log(this.Inventory)
        console.log("************************INVENTORY DATA*****************************");
        console.log(" 1. Rice list \n 2. Pulse List \n 3. Weats List \n");

        var showdata = readline.questionInt(" Enter your choice \n");
        if (isNaN(showdata)) {
            throw "Invalid passing input";
        }
        console.log("***********************************************************************");
        switch (showdata) {
            case 1:
                console.log("\t\n Rice List");
                console.log("\t\t NAME \t\tPRICE \tQuantity \tType of Rice");

                for (let i = 0; i < this.Inventory.RiceList.length; i++) {
                    console.log('\t\t ' + count++ + ' ' + this.Inventory.RiceList[i].Name + '\t' + this.Inventory.RiceList[i].Price + '\t' + this.Inventory.RiceList[i].Kg + '\t\t' + this.Inventory.RiceList[i].Type)

                }
                console.log("************************************************************************");
                var choice = readline.questionInt("Enter your choice which rice do you want to purchage? :\n");
                console.log(choice);
                var weight = readline.questionInt("how many kg dou you want to purchage :");
                console.log('\t\t price list if rice');
                //if (choice == count) {
                switch (choice) {
                    case 1:
                        for (let i = 0; i < this.Inventory.RiceList.length; i++) {
                            console.table('\t\t ' + this.Inventory.RiceList[i].Name + '\n\t\t Your rice price is : ' + weight * this.Inventory.RiceList[i].Price);
                        }
                        break;

                    case 2:
                        for (let i = 0; i < this.Inventory.RiceList.length; i++) {
                            console.table('\t\t ' + this.Inventory.RiceList[i].Name + '\n\t\t Your rice price is : ' + weight * this.Inventory.RiceList[i].Price);
                        }
                        break;

                    case 3:
                        for (let i = 0; i < this.Inventory.RiceList.length; i++) {
                            console.table('\t\t ' + this.Inventory.RiceList[i].Name + '\n\t\t Your rice price is : ' + weight * this.Inventory.RiceList[i].Price);
                        }
                        break;

                    case 4:
                        for (let i = 0; i < this.Inventory.RiceList.length; i++) {
                            console.table('\t\t ' + this.Inventory.RiceList[i].Name + '\n\t\t Your rice price is : ' + weight * this.Inventory.RiceList[i].Price);
                        }
                        break;

                    default:
                        console.log("Your choice is Inavlid ! Please try again :");
                        break;
                }
                break;
            case 2:
                console.log("\t\n Pulse List");
                console.log("\t\t NAME \t\tPRICE \tQuantity \tType of Pulse");
                //let count = 1;
                for (let i = 0; i < this.Inventory.PulseList.length; i++) {
                    console.log('\t\t ' + count++ + ' ' + this.Inventory.PulseList[i].Name + '\t' + this.Inventory.PulseList[i].Price + '\t' + this.Inventory.PulseList[i].Kg + '\t\t' + this.Inventory.PulseList[i].Type);
                }
                console.log("***********************************************************************");
                var choice = readline.questionInt("Enter your choice which pulse do you want to purchage? :\n");
                console.log(choice);
                var weight = readline.questionInt("How many kg dou you want to purchage :");
                console.log('\t\t price list of pulse : ');
                //if (choice == count) {
                switch (choice) {
                    case 1:
                        for (let i = 0; i < this.Inventory.PulseList.length; i++) {
                            console.table('\t\t ' + this.Inventory.PulseList[i].Name + '\n\t\t Your pulse price is : ' + weight * this.Inventory.PulseList[i].Price);
                        }
                        break;

                    case 2:
                        for (let i = 0; i < this.Inventory.PulseList.length; i++) {
                            console.table('\t\t ' + this.Inventory.PulseList[i].Name + '\n\t\t Your pulse price is : ' + weight * this.Inventory.PulseList[i].Price);
                        }
                        break;

                    case 3:
                        for (let i = 0; i < this.Inventory.PulseList.length; i++) {
                            console.table('\t\t ' + this.Inventory.PulseList[i].Name + '\n\t\t Your pulse price is : ' + weight * this.Inventory.PulseList[i].Price);
                        }
                        break;

                    case 4:
                        for (let i = 0; i < this.Inventory.PulseList.length; i++) {
                            console.table('\t\t ' + this.Inventory.PulseList[i].Name + '\n\t\t Your pulse price is : ' + weight * this.Inventory.PulseList[i].Price);
                        }
                        break;

                    default:
                        console.log("Your choice is Inavlid ! Please try again :");
                        break;
                }
                break;
            case 3:
                console.log("\t\n Wheats List");
                console.log("\t\t NAME \t\t\tPRICE \tQuantity  Type of Weat");
                //let count = 1;
                for (let i = 0; i < this.Inventory.WheatsList.length; i++) {
                    console.log('\t\t ' + count++ + ' ' + this.Inventory.WheatsList[i].Name + '\t' + this.Inventory.WheatsList[i].Price + '\t' + this.Inventory.WheatsList[i].Kg + '\t    ' + this.Inventory.WheatsList[i].Type)
                }
                console.log("*************************************************************************");
                var choice = readline.questionInt("Enter your choice which weats do you want to purchage? :\n");
                console.log(choice);
                var weight = readline.questionInt("How many kg dou you want to purchage :");
                console.log('\t\t price list of weats : ');
                //if (choice == count) {
                switch (choice) {
                    case 1:
                        for (let i = 0; i < this.Inventory.PulseList.length; i++) {
                            console.table('\t\t ' + this.Inventory.WheatsList[i].Name + '\n\t\t Your pulse price is : ' + weight * this.Inventory.WheatsList[i].Price);
                        }
                        break;

                    case 2:
                        for (let i = 0; i < this.Inventory.WheatsList.length; i++) {
                            console.table('\t\t ' + this.Inventory.WheatsList[i].Name + '\n\t\t Your pulse price is : ' + weight * this.Inventory.WheatsList[i].Price);
                        }
                        break;

                    case 3:
                        for (let i = 0; i < this.Inventory.WheatsList.length; i++) {
                            console.table('\t\t ' + this.Inventory.WheatsList[i].Name + '\n\t\t Your pulse price is : ' + weight * this.Inventory.WheatsList[i].Price);
                        }
                        break;

                    case 4:
                        for (let i = 0; i < this.Inventory.WheatsList.length; i++) {
                            console.table('\t\t ' + this.Inventory.WheatsList[i].Name + '\n\t\t Your pulse price is : ' + weight * this.Inventory.WheatsList[i].Price);
                        }
                        break;

                    default:
                        console.log("Your choice is Inavlid ! Please try again :");
                        break;
                }
                break;
            default:
                console.log("Your choice is Inavlid ! Please try again :");
                break;
        }

    }


}


module.exports = {
    inventoryUser,
}
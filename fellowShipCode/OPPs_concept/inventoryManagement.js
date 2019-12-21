const fs = require('fs');
const readline = require('readline-sync');

class inventoryManagement {
    constructor() {
        var readdata = fs.readFileSync("JSON/jsonInventory.json", "utf-8");
        this.inventorymanagement = JSON.parse(readdata);
        console.log(this.inventorymanagement);
    }
    //console.log("*******************!nventoryManagement*************");
}
class inventoryManagementData extends inventoryManagement {
    addData() {
        console.log("****************************InventoryManagement*********************************");
        console.log(" 1. Rice list \n 2. Pulse List \n 3. Weats List \n");
        var showdata = readline.questionInt(" Enter your choice ! Do you want to insert item : \n");
        if (isNaN(showdata)) throw "enter valid choice.";
        switch (showdata) {
            case 1:
                this.addRice();
                break;
            case 2:
                this.addPulse();
                break;
            case 3:
                this.addWeats();
                break;
            default:
                console.log("Your choice is Inavlid ! Please try again :");
                break;
        }
        fs.writeFileSync("JSON/jsonInventory.json", JSON.stringify(this.inventorymanagement), 'utf-8');
    }
    removeData() {
        console.log("****************************InventoryManagement*********************************");
        console.log(" 1. Rice list \n 2. Pulse List \n 3. Weats List \n");
        var showdata = readline.questionInt(" Enter your choice ! Do you want to remove item : \n");
        if (isNaN(showdata)) throw "enter valid choice.";
        switch (showdata) {
            case 1:
                this.removeRice();
                break;
            case 2:
                this.removePulse();
                break;
            case 3:
                this.removeWeats();
                break;
            default:
                console.log("Your choice is Inavlid ! Please try again :");
                break;
        }
        fs.writeFileSync("JSON/jsonInventory.json", JSON.stringify(this.inventorymanagement), 'utf-8');

    }
    printDisplaydata() {
        console.log(this.inventorymanagement);
    }
    addRice() {
        var name = readline.question('Enter the Name :');
        var price = readline.questionInt('Enter the Price : ');
        var weight = readline.questionInt('Enter the Weight :');
        var type = readline.question('Enter the type of rice');
        this.inventorymanagement.RiceList.push({
            Name: name,
            Price: price,
            Kg: weight,
            Type: type
        })
    }
    addPulse() {
        var name = readline.question('Enter the NamPulseListe :');
        var price = readline.questionInt('Enter the Price : ');
        var weight = readline.questionInt('Enter the Weight :');
        var type = readline.question('Enter the type of rice');
        this.inventorymanagement.PulseList.push({
            Name: name,
            Price: price,
            Kg: weight,
            Type: type
        })
    }
    addWeats() {
        var name = readline.question('Enter the Name :');
        var price = readline.questionInt('Enter the Price : ');
        var weight = readline.questionInt('Enter the Weight :');
        var type = readline.question('Enter the type of rice');
        // var arr = []
        // arr.map((item, index) = {

        // })
        this.inventorymanagement.WheatsList.push({

            Name: name,
            Price: price,
            Kg: weight,
            Type: type
        })
    }
    removeRice() {
        let status = true;
        let item = readline.question(`\nEnter the Name do you want to remove : `);
        for (let i = 0; i < this.inventorymanagement.RiceList.lenght; i++) {
            if (this.inventorymanagement.RiceList[i].name == item) {
                status = false;
                let index = this.inventorymanagement.RiceList.indexOf(this.inventorymanagement.RiceList[i]);
                this.inventorymanagement.RiceList.splice(index, 1);
                console.log(`${item} remove from Inventory Details`);
            }
        }
        if (status)
            console.log("\nEnter valid name.\n");
    }
    removePulse() {
        let status = true;
        let item = readline.question(`\nEnter the Name do you want to remove : `);
        for (let i = 0; i < this.inventorymanagement.PulseList.lenght; i++) {
            if (this.inventorymanagement.PulseList[i].name == item) {
                status = false;
                let index = this.inventorymanagement.PulseList.indexOf(this.inventorymanagement.PulseList[i]);
                this.inventorymanagement.PulseList.splice(index, 1);
                console.log(`${item} remove from Inventory Details`);
            }
        }
        if (status)
            console.log("\nEnter valid name.\n");
    }
    removeWeats() {
        let status = true;
        let item = readline.question(`\nEnter the Name do you want to remove : `);
        for (let i = 0; i < this.inventorymanagement.WheatsList.lenght; i++) {
            if (this.inventorymanagement.WheatsList[i].name == item) {
                status = false;
                let index = this.inventorymanagement.WheatsList.indexOf(this.inventorymanagement.WheatsList[i]);
                this.inventorymanagement.WheatsList.splice(index, 1);
                console.log(`${item} remove from Inventory Details`);
            }
        }
        if (status)
            console.log("\nEnter valid name.\n");
    }
}



module.exports = {
    inventoryManagementData,
}
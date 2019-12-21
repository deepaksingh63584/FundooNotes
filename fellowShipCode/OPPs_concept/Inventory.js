/**
                                @inventoryManagement
                                
@description : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
            with properties name, weight, price per kg.
@uses Library:  Java JSON Library , For IOS JSON Library use
            NSJSONSerialization for parsing the JSON .
@input : read in JSON File
@logic : Get JSON Object in Java or NSDictionary in iOS. Create Inventory
            Object from JSON. Calculate the value for every Inventory.
@output :Create the JSON from Inventory Object and output the JSON String

@AdditionalWork

@description : Extend the above program to Create InventoryManager to manage the
        Inventory. The Inventory Manager will use InventoryFactory to create Inventory
        Object from JSON. The InventoryManager will call each Inventory Object in its list
        to calculate the Inventory Price and then call the Inventory Object to return the
        JSON String. The main program will be with InventoryManager
@input : read in JSON File
@logic : Get JSON Object in Java or NSDictionary in iOS. Create Inventory
         Object from JSON. Calculate the value for every Inventory.
@output : Create the JSON from Inventory Object and output the JSON String.

    @author : Deepak Singh

    @since  : 28/11/2019
 */

const fs = require('fs');
const inventManage = require('./inventoryManagement');
const inventoryUtil = require('./inventoryUtility');
const readlinelist = require('readline-sync');

var inventManager = new inventManage.inventoryManagementData();
var inventuser = new inventoryUtil.inventoryUser();
function inventoryLogIn() {
        console.log("************************INVENTORY LOGIN************************");
        console.log(" 1. InventoryUser \n 2. InventoryManager \n 3. Exit");
        var choice = readlinelist.questionInt(" Enter Your choice Do you want : \n")
        switch (choice) {
                case 1:
                        inventuser.dispalydata();
                        break;

                case 2:
                        let inventManageData = readlinelist.questionInt("Enter your choice : ")
                        switch (inventManageData) {
                                case 1:
                                        inventManager.addData();
                                        break;
                                case 2:
                                        inventManager.removeData();
                                        break;

                                default:
                                        console.log("Invalid choice : ");
                                        break;
                        }
                        break;
                case 3:
                        

                case 3:
                        console.log("Exit");
                default:
                        break;
        }

}
inventoryLogIn();
/**
 *              @AddressBookManagement
 * 
 * @description: Address Book Management
 * 
 * @author : Deepak Singh
 * 
 * @since : 29/11/2019 
 */


var utility = require('./addressBookUtility');
var addressBook = new utility.AddressBook();
var readline = require('readline-sync');

class Address {
    addressBook() {
        do {
            console.log('1.Add Person');
            console.log('2.Edit Details');
            console.log('3.Display Address Book');
            console.log('4.Search Person Details');
            console.log('5.Remove details');
            console.log('6.Sort By First Name');
            console.log('7.Sort By Zip Code');
            console.log('8.Exit');
            var choice = readline.questionInt('Enter your choice= ')
            switch (choice) {
                case 1:
                    addressBook.addPerson();
                    break;
                case 2:
                    addressBook.edit();
                    break;
                case 3:
                    addressBook.displayAddressBook();
                    break;
                case 4:
                    addressBook.displayParticularAddress();
                    break;
                case 5:
                    addressBook.removePersonsDetails();
                    break;
                case 6:
                    addressBook.sortByFirstName();
                    break;
                case 7:
                    addressBook.sortByZipCode();
                    break;
                case 8:
                    return;
                default:
                    console.log('Wrong Choice');
            }
        }
        while (choice);
    }
}

var address = new Address();
address.addressBook();
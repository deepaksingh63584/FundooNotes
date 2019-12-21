const fs = require('fs');
const readline = require('readline-sync');
var util = require('./util');

class addressBook {
    constructor() {
        //read the json file
        var readdata = fs.readFileSync("JSON/jsonAddressBook.json", "utf-8");
        this.data = JSON.parse(readdata);
        console.log(this.data);
    }
}


//address book class inherite the property of parent class]
class AddressBook extends addressBook {
    addPerson() {
        console.log('Enter your first name=');
        var firstName = util.inputStringRead();
        console.log('Enter your last name=');
        var lastName = util.inputStringRead();
        console.log('Enter your address=');
        var address = util.inputStringRead();
        console.log('Enter your city name=');
        var city = util.inputStringRead();
        console.log('Enter the name of state=');
        var state = util.inputStringRead();
        console.log('Enter zip code=');
        var zipCode = util.inputIntegerRead();
        console.log('Enter mobile number=');
        var mobileNo = util.inputIntegerRead();
        if (!this.isPresent(firstName)) {

            //pushing data to this.data
            this.data.personList.push({
                "firstName": firstName,
                "lastName": lastName,
                "address": address,
                "city": city,
                "state": state,
                "zipCode": zipCode,
                "mobileNo": mobileNo
            })

            fs.writeFileSync("JSON/jsonAddressBook.json", JSON.stringify(this.data), 'utf-8');
        }
        else if (!this.isPresent(lastName)) {
            //pushing data to this.data
            this.data.personList.push({
                "firstName": firstName,
                "lastName": lastName,
                "address": address,
                "city": city,
                "state": state,
                "zipCode": zipCode,
                "mobileNo": mobileNo
            })


            fs.writeFileSync("JSON/jsonAddressBook.json", JSON.stringify(this.data), 'utf-8');
        }
        else {
            console.log('Your details are already in address book');
        }

    }

    //to remove details of the person
    removePersonsDetails() {
        console.log('Enter first name of person to remove');
        console.log('Enter first name=');
        var firstName = util.inputStringRead();
        if (this.isPresent(firstName)) {
            for (let i = 0; i < this.data.personList.length; i++) {
                if (this.data.personList[i].firstName.toLowerCase() == firstName.toLowerCase()) {
                    var index = this.data.personList.indexOf(this.data.personList.firstName);
                    //delete the element
                    this.data.personList.splice(index, 1);
                    fs.writeFileSync("JSON/jsonAddressBook.json", JSON.stringify(this.data), 'utf-8');
                    console.log('Details have been removed successfully');
                    break;
                }
            }
        }
    }
    //to check if corportation is present
    isPresent(firstName) {
        var present = false;
        for (let i = 0; i < this.data.personList.length; i++) {
            //comparing the input from user and the item object
            if (this.data.personList[i].firstName.toLowerCase() == firstName.toLowerCase()) {
                present = true;
                break;
            }
            else {
                present = false;
            }
        }
        if (present === true) {
            return true
        }
        else {
            return false
        }
    }

    //to check if corportation is present
    isPresentLastName(lastName) {
        var present = false;
        for (let i = 0; i < this.data.personList.length; i++) {
            //comparing the input from user and the item object
            if (this.data.personList[i].lastName.toLowerCase() == lastName.toLowerCase()) {
                present = true;
                break;
            }
            else {
                present = false;
            }
        }
        if (present === true) {
            return true
        }
        else {
            return false
        }
    }

    //editing the details in address book
    edit() {
        console.log('Please enter your first name to edit your details in address book');
        console.log('Enter first name=');
        var firstName = util.inputStringRead();
        if (this.isPresent(firstName)) {
            console.log('1.First Name');
            console.log('2.Last Name');
            console.log('3.Address');
            console.log('4.City');
            console.log('5.State');
            console.log('6.ZipCode');
            console.log('7.Mobile Number');
            console.log('8.Exit');
            console.log('Which field do yo wanna edit');
            var choice = util.inputIntegerRead();
            for (let i = 0; i < this.data.personList.length; i++) {
                if (this.data.personList[i].firstName.toLowerCase() == firstName.toLowerCase()) {
                    switch (choice) {
                        case 1:
                            console.log('Enter your first name=');
                            var firstName = util.inputStringRead();
                            this.data.personList[i].firstName = firstName;
                            fs.writeFileSync("JSON/jsonAddressBook.json", JSON.stringify(this.data), 'utf-8');
                            break;
                        case 2:
                            console.log('Enter your last name=');
                            var lastName = util.inputStringRead();
                            this.data.personList[i].lastName = lastName;
                            fs.writeFileSync("JSON/jsonAddressBook.json", JSON.stringify(this.data), 'utf-8');
                            break;
                        case 3:
                            console.log('Enter your address=');
                            var address = util.inputStringRead();
                            this.data.personList[i].address = address;
                            fs.writeFileSync("JSON/jsonAddressBook.json", JSON.stringify(this.data), 'utf-8');
                            break;
                        case 4:
                            console.log('Enter your city=');
                            var city = util.inputStringRead();
                            this.data.personList[i].city = city;
                            fs.writeFileSync("JSON/jsonAddressBook.json", JSON.stringify(this.data), 'utf-8');
                            break;
                        case 5:
                            console.log('Enter your state=');
                            var state = util.inputStringRead();
                            this.data.personList[i].state = state;
                            fs.writeFileSync("JSON/jsonAddressBook.json", JSON.stringify(this.data), 'utf-8');
                            break;
                        case 6:
                            console.log('Enter zipcode=');
                            var zipCode = util.inputStringRead();
                            this.data.personList[i].zipCode = zipCode;
                            fs.writeFileSync("JSON/jsonAddressBook.json", JSON.stringify(this.data), 'utf-8');
                            break;
                        case 7:
                            console.log('Enter mobile number=');
                            var mobileNo = util.inputStringRead();
                            this.data.personList[i].mobileNo = mobileNo;
                            fs.writeFileSync("JSON/jsonAddressBook.json", JSON.stringify(this.data), 'utf-8');
                            break;
                        case 8:
                            return;
                        default:
                            console.log('Wrong Choice');
                    }
                    break;
                }
            }
        }
    }

    sortByFirstName() {
        var temp;
        for (let i = 0; i < this.data.personList.length; i++) {
            for (let j = 0; j < this.data.personList.length - 1; j++) {
                if (this.data.personList[i].firstName.toLowerCase() < this.data.personList[j].firstName.toLowerCase()) {
                    temp = this.data.personList[i];
                    this.data.personList[i] = this.data.personList[j];
                    this.data.personList[j] = temp;
                }
            }
        }
        console.log(this.data.personList);
    }

    sortByZipCode() {
        var temp;
        for (let i = 0; i < this.data.personList.length; i++) {
            for (let j = 0; j < this.data.personList.length - 1; j++) {
                if (this.data.personList[i].zipCode < this.data.personList[j].zipCode) {
                    temp = this.data.personList[i];
                    this.data.personList[i] = this.data.personList[j];
                    this.data.personList[j] = temp;
                }
            }
        }
        console.log(this.data.personList);
    }

    displayAddressBook() {
        console.log();
        console.log("Address List is : \n");
        for (let i = 0; i < this.data.personList.length; i++) {
            console.log('\tFirst Name = ' + this.data.personList[i].firstName);
            console.log('\tLast Name = ' + this.data.personList[i].lastName);
            console.log('\tAddress = ' + this.data.personList[i].address);
            console.log('\tCity = ' + this.data.personList[i].city);
            console.log('\tState = ' + this.data.personList[i].state);
            console.log('\tZip Code = ' + this.data.personList[i].zipCode);
            console.log('\tMobile Number = ' + this.data.personList[i].mobileNo);
            console.log();
        }
    }

    displayParticularAddress() {
        console.log('Enter your mobile number=');
        var mobileNo = util.inputIntegerRead();
        if (this.isPresent(mobileNo)) {
            for (let i = 0; i < this.data.personList.length; i++) {
                if (this.data.personList[i].mobileNo == mobileNo) {
                    console.log('First Name=' + this.data.personList[i].firstName);
                    console.log('Last Name =' + this.data.personList[i].lastName);
                    console.log('Address =' + this.data.personList[i].address);
                    console.log('City =' + this.data.personList[i].city);
                    console.log('State =' + this.data.personList[i].state);
                    console.log('Zip Code =' + this.data.personList[i].zipCode);
                    console.log('Mobile Number =' + this.data.personList[i].mobileNo);
                    console.log();
                    break;
                }
            }
        }
    }
}

module.exports = {
    AddressBook,
}
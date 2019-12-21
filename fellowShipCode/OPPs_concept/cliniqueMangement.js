const util = require('./util');
const readline = require('readline-sync');
const fs = require('fs');
class clinique {
    constructor() {
        var content = fs.readFileSync('JSON/clinique.json', "utf-8");
        this.data = JSON.parse(content);
        console.log(this.data);
    }
}

class cliniqueManagement extends clinique {
    // addDoctor() {
    //     var content = /^[a-zA-Z]+$/;
    //     var doctorName = readline.question('Enter doctor name = ');
    //     if (!content.test(doctorName)) {
    //         //if invalid input again take input
    //         var doctorName = readline.question('Enter doctor name = ');
    //     }
    //     var ID = readline.question('Enter ID Number = ');
    //     var specialization = readline.question('Enter Specialization = ');
    //     if (!content.test(specialization)) {
    //         //if invalid input again take input
    //         var specialization = readline.question('Enter Specialization = ');
    //     }
    //     console.log('Enter Available time(AM ,PM or both)=');
    //     var availablity = readline.question('Enter Available time(AM ,PM or both) = ');
    //     console.log(availablity.toUpperCase());

    //     if (!content.test(availablity) || (availablity.toUpperCase() !== 'AM' && availablity.toUpperCase() !== 'PM' &&
    //         availablity.toUpperCase() !== 'BOTH')) {
    //         //if invalid input again take input
    //         var availablity = readline.question("Enter Available time(AM,  PM or both)=");
    //     }

    //     this.data.Doctor.push({
    //         "doctorName": doctorName,
    //         "ID": ID,
    //         "specialization": specialization,
    //         "availablity": availablity
    //     })
    //     fs.writeFileSync('JSON/clinique.json', JSON.stringify(this.data), "utf-8");
    // }


    /**
     * @description : adding doctor information in json
     */
    addDoctor() {
        console.log('\nAdd Doctor : ');

        var doctorName = readline.question("\nEnter name of the doctor : ");
        var ID = readline.question("Enter doctor's id : ");
        var specialization = readline.question("Enter doctor's speciality : ");
        var availablity = readline.question("Enter availability time of doctor as AM, PM or Both : ");


        this.data.doctor.push({
            "doctorName": doctorName,
            "ID": ID,
            "specialization": specialization,
            "availablity": availablity
        })

        fs.writeFileSync('JSON/clinique.json', JSON.stringify(this.data), "utf-8");

    }

    /**
     * @description : adding patient data into the json
     */
    addPatient() {
        console.log('\nAdd Patient : ');

        var patientName = readline.question("\nEnter name of the patient : ");
        var pId = readline.question("\nEnter the patient ID: ");
        var mobileNumber = readline.question("Enter patient's mobile number : ");
        var age = readline.questionInt("Enter patient's age : ");
        var pId = this.data.patient[this.data.patient.length - 1].p_Id++;

        this.data.patient.push({
            patientname: patientName,
            pId: pId,
            mobNo: mobileNumber,
            age: age
        })
        fs.writeFileSync('JSON/clinique.json', JSON.stringify(this.data), "utf-8");
        return patientName
    }

    /**
     * @description : booking patient appointment with doctor
     */
    takeAppointment() {

        var status = readline.question('\nIs Patient already added to the Database ( y or n) : ')

        if (status == 'y' || status == 'Y') {
            var patientName = readline.question('\nEnter the Patient Name : ')
        }
        else {
            var patientName = this.addPatient();
        }

        console.log('\nBooking Appointment : ');

        do {
            var look = readline.question('\nDo you want to take a look at Doctors Data (y or n) : ');
            if (look == 'y' || look == 'Y')
                this.searchDoctor();
            else
                break;
        } while (look == 'N' | look == 'n');

        var doctorName = readline.question("\nEnter doctor's name : ");

        var time = readline.question("Enter appointment time as AM, PM or Both : ");
        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        let index = -1
        for (let key in this.data.doctor) {
            if (this.data.doctor[key].doctorName == doctorName) {
                index = key;
            }
        }
        if (index != -1) {
            if (this.data.doctor[index].NoOfAppointment < 5) {
                if (this.data.doctor[index].availability == time) {
                    this.data.cliniqueAppointment.push({
                        doctorName: doctorName,
                        patientName: patientName,
                        date: date,
                        time: time
                    })
                    this.data.doctor[index].NoOfAppointment++;
                    console.log(`\nThe patient ${patientName} Appointment is booked with Dr. ${doctorName} on ${date} at ${time}.`)
                }
                else {
                    console.log("\nDoctor isn't available in this time")
                }
            }
            else {
                console.log("\nDoctor's appointments are full");
                var answer = utility.readLine().question('\nDo you want Appointment on next date (y | n) : ')
                if (answer == 'Y' || answer == 'y') {
                    if (this.data.doctor[index].availability == time) {
                        var date = today.getDate() + 1 + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                        this.data.cliniqueAppointment.push({
                            doctorName: doctorName,
                            patientName: patientName,
                            date: date,
                            time: time
                        })
                        this.data.doctor[index].NoOfAppointment++;
                        console.log(`\nThe patient ${patientName} Appointment is booked with Dr. ${doctorSName} on ${date} at ${time}.`)
                    }
                    else {
                        console.log("\nDoctor isn't available in this time")
                    }

                }
            }
        }
        else {
            console.log("\nDoctor not found")
        }
        fs.writeFileSync('JSON/clinique.json', JSON.stringify(this.data), "utf-8");
    }

    /**
     * @description : checking booked appointment
     */
    checkAppoinment() {
        var patientName = utility.readLine().question('\nEnter the patient name : ');
        let index = -1;
        for (let key in this.data.cliniqueAppointment) {
            if (this.data.cliniqueAppointment[key].patientName == patientName) {
                index = key;
            }
        }
        if (index == -1) {
            console.log('The Patients Appointment Not Booked. ');

        }
        else {

            console.log(`\nPatient Name : ${this.data.cliniqueAppointment[index].patientName}`);
            console.log(`Doctor Name : ${this.data.cliniqueAppointment[index].doctorName}`);
            console.log(`Date : ${this.data.cliniqueAppointment[index].date}`);
            console.log(`Time : ${this.data.cliniqueAppointment[index].time}`);
        }

        do {

            var cancel = utility.readLine().question('\nDo you Want to cancel the Appointment (y or n): ');
            if (cancel == 'Y' || cancel == 'y') {

                let doctorName = this.data.cliniqueAppointment[index].doctorName;

                let index2 = -1;
                for (let key in this.data.doctor) {
                    if (this.data.doctor[key].doctorName == doctorName) {
                        index2 = key;
                    }
                }
                this.data.doctor[index2].NoOfAppointment--;
                this.data.cliniqueAppointment.splice(index, 1);
            }
            else
                break;


        } while (cancel == 'N' || cancel == 'n');
        fs.writeFileSync('JSON/clinique.json', JSON.stringify(this.data), "utf-8");

    }

    /**
     * @description : serching doctor by name, id, speciality, etc 
     */
    searchDoctor() {

        console.log('\nSearch Doctor : ');

        console.log("\n\t1) Search by name\n\t2) Search by Id\n\t3) Search by speciality\n\t4) Search by availability\n");
        let choice = readline.questionInt("\nEnter your choice : ");

        switch (choice) {

            case 1:
                var doctorName = readline.question("\nEnter name of the doctor : ");
                for (let i in this.data.doctor) {
                    if (this.data.doctor[i].doctorName == doctorName) {
                        //console.log(this.data.doctor[i]);
                        console.table(this.data.doctor[i]);
                    }
                }
                break;
            case 2:
                var dr_Id = readline.questionInt("\nEnter id of the doctor : ");
                for (let i in this.data.doctor) {
                    //console.log('djg jzdfsh');

                    if (this.data.doctor[i].ID == dr_Id) {
                        //console.log('bajfdsgfjd');

                        //console.log(this.data.doctor[i]);
                        console.log(this.data.doctor[i]);
                    }
                }
                break;
            case 3:
                var speciality = readline.question("\nEnter speciality of the doctor : ");
                for (let i in this.data.doctor) {
                    if (this.data.doctor[i].speciality == speciality) {
                        //console.log(this.data.doctor[i]);
                        console.table(this.data.doctor[i]);
                    }
                }
                break;
            case 4:
                var availability = readline.question("\nEnter availability of the doctor : ");
                for (i in this.data.doctor) {
                    if (this.data.doctor[i].availability == availability) {
                        //console.log(this.data.doctor[i]);
                        console.table(this.data.doctor[i]);
                    }
                }
                break;
            default:
                console.log("\nEnter valid choice");
                break
        }
    }

    /**
     * @description : searching patient by name, id, mobile.
     */
    searchPatient() {

        console.log("\n\t1) Search by name\n\t2) Search by Id\n\t3) Search by mobile number\n");
        let choice = readline.questionInt("\nEnter your choice : ");
        switch (choice) {
            case 1:
                var patientName = readline.question("\nEnter name of the patient : ");
                for (let i in this.data.patient) {
                    if (this.data.patient[i].patientName == patientName) {
                        //console.log(this.data.patient[i]);
                        console.table(this.data.patient[i]);
                    }
                }
                break;
            case 2:
                var p_Id = readline.question("\nEnter id of the patient : ");
                for (let i in this.data.patient) {
                    if (this.data.patient[i].pId == p_Id) {
                        //console.log(this.data.patient[i]);
                        console.table(this.data.patient[i]);
                    }
                }
                break;
            case 3:
                var mobileNumber = readline.question("\nEnter mobile no of the patient : ");
                for (let i in this.data.patient) {
                    if (this.data.patient[i].mobileNumber == mobileNumber) {
                        //console.log(this.data.patient[i]);
                        console.table(this.data.patient[i]);
                    }
                }
                break;

            default:
                console.log("\nEnter valid choice");
        }
    }

}

module.exports = {
    cliniqueManagement
}
/************************** Username *******************************/

var readlinessync = require('readline-sync')
module.exports = {
    relaceuser(username) {
        try {
            var a = isNaN(username);
            //console.log(typeof(username));
            //console.log(a.localeCompare('true'));
            if (a === true) {
                if (username.length > 3) {
                    var pr = "Hello <<username>>, How are you?";
                    var string = pr.replace('<<username>>', username);
                    return string;
                }
                else
                    throw new Error('Username should greater than 3');
            }
            else
                throw new Error('Username should be character string');

        }
        catch (e) {
            console.log(e);
        }
    },



    /**********************************demo of js****************************/
    demo(number) {
        console.log('vv', number)
    },



    /******************************* Flip Coin *******************************/

    flipPercen(times) {
        var heads = 0;

        for (var i = 0; i < times; i++) {
            if (Math.random() > 0.5) {
                heads++;
            }
        }

        console.log("No of heads is : " + (heads));

        console.log("No of tails is : " + (times - heads));

        console.log("heads percentage is " + (heads / times) * 100);

        console.log("tails percentage is " + (times - heads) / times * 100);

        return times;
    },



    /******************************* Power of two *******************************/
    powerof2(power) {
        try {
            //console.log(isNaN(power));
            var check = isNaN(power)
            if (check == true)
                throw 'invalid input ! Please enter the valid input';
            else {
                var n = 1;
                for (var i = 1; i <= power; i++) {
                    n = n * 2;
                }
            }
            return n;

        }
        catch (e) {
            return e;
        }
    },




    /******************************* Harmonic Number *******************************/


    harmonicnumber(n) {
        try {
            console.log("", typeof (isNaN(n)));
            console.log(typeof (n));

            var h = isNaN(n)
            if (isNaN(n)) {
                throw 'invalid enter ! enter valid value :';
            }
            else {
                // compute 1/1 + 1/2 + 1/3 + ... + 1/n
                var sum = 0.0;
                var i = 1;
                for (i = 1; i <= n; i++) {
                    sum += 1.0 / i;
                }
                console.log(sum);
                console.log('zksgfjre');


                return sum;
            }
        }
        catch (error) {
            console.log('catch klcvgfbj', error);
            return error;
        }

    },



    /******************************* Prime Factor *******************************/

    prime_factor(number) {
        try {
            var fac = isNaN(number)
            //console.log(number);
            if (isNaN(number)) {
                throw 'Inavalid input ! please enter the valid input :';
            }
            else {
                for (var i = 2; i <= number; i++) {
                    while (number % i == 0) {
                        console.log(i + " ");
                        number = number / i;
                    }
                }
                if (number < 1)
                    console.log(number);
                return number;
            }
        }
        catch (error) {
            return error;
        }
    },



    /******************************* Temprature Conversion *******************************/

    temperatureConversion(fNum, cNum) {

        //entre choice for temp conversion from fehrenhiet<=>celsius
        console.log("1. convert from fehrenhiet to celsius");
        console.log("2. Convert from celsius to fehrenheit");
        //console.log("Enter your choice");

        var choice = readllinesync.questionInt('Enter your choice')
        //         switch (choice) {
        //             //press 1
        //             case "1":
        //                 console.log("fehrenheit to celsius :");
        //                 if (formatF.test(fNum) || fNum === undefined || fNum === null) {
        //                     throw "invalid input";
        //                 } else {
        //                     cNum = (fNum - 32) * (5 / 9);
        //                     console.log(cNum);
        //                     return true;
        //                 }
        //                 break;

        //             case "2":
        //                 console.log("celsius to fehrenheit :");
        //                 if (formatF.test(cNum) || cNum === undefined || cNum === null) {
        //                     throw "invalid input";
        //                 } else {
        //                     fNum = cNum * (5 / 9) - 32;
        //                     console.log(fNum);
        //                     return true;
        //                 }
        //                 break;
        //             default:
        //                 console.log("please enter the valid number");
        //                 break;

        //         }
        //     } catch(error) {
        //         return error;
        //     }
        // },

        switch (choice) {
            //press 1
            case 1:
                console.log("fehrenheit to celsius :");
                cNum = (fNum - 32) * (5 / 9);
                console.log(cNum);
            //return cNum

            case 2:
                //press 2
                console.log("celsius to fehrenheit :")
                fNum = cNum * (5 / 9) - 32;
                console.log(fNum);
            //return fNum
        }
    },


    /******************************* Gambling *******************************/

    gamble(times, stack, goal) {
        var bets = 0;
        var wins = 0;

        for (var i = 0; i < times; i++) {
            var cash = stack;
            while (cash > 0 && cash < goal) {
                bets++;
                if (Math.random() < 0.5)
                    cash++;
                else
                    cash--;
            }
            if (cash == goal)
                wins++;
        }
        console.log((wins + " wins out of " + times));

        console.log("wins percentage is " + (wins / times) * 100);

        console.log("loss percentage is " + (times - wins) / times * 100);

        console.log("Total bets in " + times + " games :" + bets);

        return wins;

    },


    /******************************* factorial *******************************/


    factorial(n) {
        var fact = 1;
        for (i = 1; i <= n; i++) {
            factfs.readFileSync(fileName).toString().split(" ");
            return content = fact * i;
        } return fact;
    },

    /****************************** Coupen code *******************************/

    //Coupen number genrator by using random function
    coupon_code() {
        var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
        //console.log(readline.question('generated coupen no is : \n'));


        var max = 10000000;
        var randomNum = parseInt(Math.random() * max)
        var str1 = " ";
        var arr1 = [];

        // console.log(random % chars.length);

        // console.log(chars[random % arr.length]);

        // console.log(str.concat(chars[random % arr.length]));

        var Nooftimes = readlinessync.question("eenter the Num of times to generate the coupen code : \n");
        for (var i = 0; i < Nooftimes; i++) {
            while (randomNum > 0) {
                str1 = (chars[randomNum % chars.length]);
                //console.log(str);
                randomNum = parseInt(randomNum / chars.length);
                arr1.push(str1);
            }
        }
        console.log("Generated coupen no is : \n" + arr1.join(""));
    },








}
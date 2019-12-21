var methods = {}
const readline = require('readline-sync');
var fs = require('fs');
//var w = require('');
methods.inputIntegerRead = function () {
    let value = readline.questionInt("");
    return value;
}
methods.inputStringRead = function () {
    try {
        var value;
        value = readline.question("");
        //console.log(readline.question());
        /*var content = /^[a-zA-Z]+$/;
        console.log(content.test(value));
       if(!content.test(value))    
        {
            console.log('Should be a character string');
            value = readline.question("");
            methods.inputStringRead();
            //throw  'Should be a character string'

        }
        else
        {*/
        return value;
        //}

    }
    catch (e) {
        //methods.inputStringRead();
        return e;
    }
}

methods.writeFile = function (fileName, data) {
    fs.writeFileSync(fileName, JSON.stringify(data));
}

methods.readFile = function (fileName) {
    var content = fs.readFileSync(fileName);
    return content
}

methods.hello = function () {
    console.log("Hello World");
}
module.exports = methods
Slip No.22. Create a Node.js application to count no of lines in a file in fille and display count on console



linecount.js





const readline = require('readline');

const fs = require('fs');



var file = 'C:/Users/Public/node_prog/searchf.txt';

var linesCount = 0;

var rl = readline.createInterface({

    input: fs.createReadStream(file),

    output: process.stdout,

    terminal: false

});

rl.on('line', function (line) {

    linesCount++; // on each linebreak, add +1 to 'linesCount'

});

rl.on('close', function () {

    console.log(linesCount); // print the result when the 'close' event is called

});

 

var http = require('http');

var uc = require('upper-case');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write(uc.upperCase("Hello World!"));

  res.end();

}).listen(8080);



// Save the code above in a file called "d_uppercase.js", and initiate the file:
//
// First install upper-case module
//
//
//
// C:\Users\Your Name>npm upper-case
//
//
//
// Initiate d_uppercase:
//
//
//
// C:\Users\Your Name>node d_uppercase.js

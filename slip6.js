Slip No.6. Create a Node.js Application that opens the requested file and returns the content to the client if anything goes  wrong throw 404 error.



demo_server.js



var http = require('http');

var url = require('url');

var fs = require('fs');



http.createServer(function (req, res) {

  var q = url.parse(req.url, true);

  var filename = "." + q.pathname;

  fs.readFile(filename, function(err, data) {

    if (err) {

      res.writeHead(404, {'Content-Type': 'text/html'});

      return res.end("404 Not Found");

    }

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(data);

    return res.end();

  });

}).listen(8080);

 

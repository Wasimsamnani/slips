// this is main file you need to eun on console "node slip9b.js"
// please rember to download slip 7.html file which is required to display html structure
const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
  fs.readFile(__dirname+"/slip 7.html",(err,data) => {
    res.writeHead(200, {"content-type":"text/html"});
    res.write(data);
    res.end();
  })
    }).listen(3000,() => {
  console.log("server created");
  })

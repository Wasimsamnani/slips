const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    res.write('<form action="fapp" method="post" enctype="multipart/form-data">')
    res.write('<h1> select two files</h1><br/>')
    res.write('<input type="file" name="rf"></input>')
    res.write('<input type="file" name="wf"></input>')
    res.write('<input type="submit"></input>')
    res.end();
    console.log("done with sending form ");
  } else if (req.url == '/fapp') {
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.write(err)
      }
      var w = fs.createWriteStream(files.wf.name, {
        flags: 'a'
      })
      var r = fs.createReadStream(files.rf.name)
      w.on('close', () => {
        console.log("done writing");
      })
      r.pipe(w)
      res.end("sucess")
    })
  } else {
    res.end("page not file");
  }
}).listen(8080, () => console.log("started"))

const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const {Transform} = require('stream');

// create a server
http.createServer((req,res) => {
      if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write('<form action="fapp" method="post" enctype="multipart/form-data">')
        res.write('<h1> select two files</h1><br/>')
        res.write('<input type="file" name="rf"></input>')
        res.write('<input type="file" name="wf"></input>')
        res.write('<input type="file" name="mf"></input>')
        res.write('<input type="submit"></input>')
        res.end();
      }
      else if (req.url=='/fapp') {
          var form= new formidable.IncomingForm();
          form.parse(req,(err,fields,files) => {
            if(err){
              res.write(err)
            }

            const uppercase =  new Transform({
              transform :(chunk,encoding,done )=>{
              const result = chunk.toString().toUpperCase()
                console.log(result);
                done(null,result)
              }
            })

            var r = fs.createReadStream(files.rf.name);
            var r1 = fs.createReadStream(files.wf.name);
            var w=fs.createWriteStream(files.mf.name,{flags:'w'});

            w.on('close',() => {
              console.log("writing done");
            })
            r.pipe(uppercase).pipe(w)
            r1.pipe(uppercase).pipe(w)

            res.end("sucessfull")
          })
      }else {
        res.end("page not found")
      }

}).listen(3000,() => {
  console.log("server started at 3000");
})

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
            // this is tramsform stream for 1st file
            const uppercase =  new Transform({
              transform :(chunk,encoding,done )=>{
              const result = chunk.toString().toUpperCase()
                done(null,result)
              }
            })
            // this is transform stream for 2nd file
            const uppercase1 = new Transform({
              transform:(chunk, encoding, done)=>{
                const result = chunk.toString().toUpperCase();
                done(null,result);
              }
            })
            // another way of doing with transform
  //           var uppercase = new Transform();
  // uppercase._transform = function (data, enc, cb) {
  //   cb(null, data.toString().toUpperCase());
  // };

            var r = fs.createReadStream(files.rf.name);
            var r1 = fs.createReadStream(files.wf.name);
            var w=fs.createWriteStream(files.mf.name,{flags:'a'});
            r.pipe(uppercase).pipe(w)
            r1.pipe(uppercase1).pipe(w)

            w.on('close',() => {
              console.log("writing done");
            })
            res.end("sucessfull")
          })
      }else {
        res.end("page not found")
      }

}).listen(3000,() => {
  console.log("server started at 3000");
})

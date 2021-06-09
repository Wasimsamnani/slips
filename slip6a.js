const http=require('http');
const fs=require('fs');
const formidable = require('formidable');
const server=http.createServer(function(req,res){
	if(req.url=='/'){
	res.writeHead(200,{"content-type":"text/html"})
	res.write('<form action="fapp" method="post" enctype="multipart/form-data">')
	res.write('<h1> select two files</h1><br/>')
	res.write('<input type="file" name="rf"></input>')
	res.write('<input type="submit"></input>')
	res.end();
}else if (req.url=='/fapp') {
	var form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) => {
		if (err) {
			res.write(err)
		}
		fs.readFile(files.rf.name,"utf8",(err,data)=>{
			res.writeHead(200,{"content-type":"text/html"});
			if (err)throw err;
			res.write(data);
			res.end()
})
})
}
else {
	res.end("page not found")
}
}).listen(3000,()=>console.log("server created sucessfully"));

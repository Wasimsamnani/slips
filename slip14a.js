var fs=require("fs")
let file=fs.readFileSync(__dirname+"/timeout.js","utf8");
if(file.indexOf("z")>=0){
	console.log("wrold is present");
}
else{
	console.log("world is not present");
}
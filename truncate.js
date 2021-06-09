const fs = require('fs');
const buf = Buffer.alloc(1024);
console.log("going to read a file");
fs.open(__dirname+"/demo2.txt",'r+',(err,fd) => {
  if(err){
    return console.log(err);
  }
  console.log("file opned sucessfully");

console.log("goinng to truncate the file after 10 bytes");
// Truncate the opend file
fs.ftruncate(fd,10,(err) => {
  if (err) {
  console.log(err);
}
console.log("File truncated sucessfully");

console.log("going to read same file");
fs.read(fd,buf,0,buf.length,0,(err,bytes) => {
  if (err) {
    console.log(err)
  }
 if (bytes > 0){
    console.log(buf.slice(0,bytes).toString())
 }
fs.close(fd,(err) => {
  if (err) {
    console.log(err);
  }
  console.log("file closed sucessfully");
});
});
});
});

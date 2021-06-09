Slip No.5. Create a Node.js Application that performs following operations on buffer data

a. concat  b.compare   c. copy



buffer_op.js



var buffer1 = new Buffer('TutorialsPoint ');

var buffer2 = new Buffer('Simply Easy Learning');

var buffer3 = Buffer.concat([buffer1,buffer2]);



console.log("buffer3 content: " + buffer3.toString());



var result = buffer1.compare(buffer2);



if(result < 0) {

   console.log(buffer1 +" comes before " + buffer2);

} else if(result === 0) {

   console.log(buffer1 +" is same as " + buffer2);

} else {

   console.log(buffer1 +" comes after " + buffer2);

}



buffer1.copy(buffer2);

console.log("buffer2 content: " + buffer2.toString());

 

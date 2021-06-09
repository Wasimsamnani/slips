Slip No.14. Create a Node.js application to search particular word in fille and display result on console.



search_word.js

var fs=require('fs');

fs.readFile('C:/Users/Public/node_prog/searchf.txt', function (err, data) {

  if (err) throw err;



  if(data.includes('dfgdf')){

   console.log(data.toString())

  }

else

{

  console.log('word not found');

}

});

 

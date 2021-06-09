// Slip No.2.Create a Node.js Application that uses user defined module to return the factorial of given number.
//
// fact.js

var fact={

  factorial: function(n)

{

    var f=1,i;

  for(i=1;i<=n;i++)

   {     f=f*i;

   }

  console.log('factorial of '+n+' is:'+f);}};

 module.exports=fact



app.js

var mymod=require('C:/Users/Public/node_prog/fact.js');

mymod.factorial(5);


// Initiate app.js file :
// C:\Users\Your Name>node app.js

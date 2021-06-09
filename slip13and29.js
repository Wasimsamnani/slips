Slip No.13 and Slipn no.29. Create a Node.js application that uses user defined module to find area of rectangle and display details on console.



rect.js



var rect={

  area: function(l,b)

{

    var a;

     a=l*b;



  console.log('area of rectangle is:'+a);

}

};

 module.exports=rect



myrect.js



var mymod=require('C:/Users/Public/node_prog/rect.js');

mymod.area(5,4);

 

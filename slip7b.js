const mysql = require('mysql');
require('dotenv').config();
var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:"newdatabase",
  password:process.env.PASS
},(err) => {
  if (err) throw err;
    console.log("connected");
});

//for creating Customer table
 // var q = "create table Customer (id int,name varchar(10),address varchar(30))";
 // con.query(q,(err,result) => {
 //   if(err) throw err;
 //   console.log(result);
 // })

//storing queries in arreay
 var i=["insert into Customer values(101,'ram','pune')","insert into Customer values(102,'karam','maharastra')","insert into Customer values(103,'tom','guj')","insert into Customer values(104,'jannnu','dubai')","insert into Customer values(105,'jambhai','kachh')"];

//map method works as for loop
 i.map((d,i) => {
   con.query(d,(err,result) => {
     if(err) throw err;
     console.log(result);
   });
 })

con.query("select * from Customer",(err,r) => {
  if (err) throw err;
  console.log(r);
})

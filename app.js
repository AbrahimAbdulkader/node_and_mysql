const { faker } = require('@faker-js/faker');


mysql = require('mysql') //We require the mysql package first 
var connection = mysql.createConnection({ //Created the connection to the mysql package
	host : 'localhost',
	user : 'root',
	database: 'join_us'
});



var q = 'SELECT COUNT(*) AS total FROM users';  //SELECT users
connection.query(q, function(error, results, fields) { //Connect the query
	if(error) throw error; //If error, throw error
	console.log(results); //else print the results
 });

connection.end();













const { faker } = require('@faker-js/faker');


mysql = require('mysql') //We require the mysql package first 
var connection = mysql.createConnection({ //Created the connection to the mysql package
	host : 'localhost',
	user : 'root',
	database: 'join_us'
});


// //INSERTING DATA 
// var q = 'INSERT INTO users (email) VALUES ("rustynode _the_dog@gmail.com")';
// connection.query(q, function(error, results, fields) { //Connect the query
// 	if(error) throw error; //If error, throw error
// 	console.log(results); //else print the results
//  });

// connection.end();


//INSERTING DATA TAKE 2
var person = {email: faker.internet.email()};
connection.query('INSERT INTO users SET ? ', person, function(error, result) {
	if(error) throw error;
	console.log(result);
});


connection.end();

















// var q = 'SELECT COUNT(*) AS total FROM users';  //SELECT number of users using COUNT(*)
// connection.query(q, function(error, results, fields) { //Connect the query
// 	if(error) throw error; //If error, throw error
// 	console.log(results); //else print the results
//  });

// connection.end();













const { faker } = require('@faker-js/faker');


mysql = require('mysql') //We require the mysql package first 
var connection = mysql.createConnection({ //Created the connection to the mysql package
	host : 'localhost',
	user : 'root',
	database: 'join_us'
});

var q = 'SELECT CURDATE() as time, CURDATE() as date, NOW() as now';
connection.query(q, function(error, results, fields) {
	if(error) throw error;
	console.log(results[0].time);
	console.log(results[0].date);
	console.log(results[0].now);
 });

connection.end();

// Line 11: Created variable called 'q' with 2 queries of CURDATE and a NOW 
// Line 12: connection.query(run the query) followed by an if statement with multiple conditions,
// if we encounter an error, return that error, else print the results


// //We can also define a new function 
// 	function generateAddress() {
// 		console.log(faker.address.streetAddress()); //Prints a random address 
// 		console.log(faker.address.city()); //Prints a random city
// 		console.log(faker.address.state()); //Prints a random state 
// 	}

// 	generateAddress();
// 	generateAddress();
// 	generateAddress();

//root user = root 








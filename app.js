const { faker } = require('@faker-js/faker');
console.log(faker.internet.email()); //Prints a random email
console.log(faker.internet.past()); //Prints a random past date 
console.log(faker.address.city()); //Prints a random city 


//We can also define a new function 
	function generateAddress() {
		console.log(faker.address.streetAddress());
		console.log(faker.address.city());
		console.log(faker.address.state());
	}


// Import the node-localstorage package
const { LocalStorage } = require('node-localstorage');

// Create a local storage instance with a directory for storage
const localStorage = new LocalStorage('./scratch')

const products2 = {
	name: 'shirt',
	'delivery-time': '1 day',
	rating: {
		stars: 4.5,
		count: 87
	},
	func1: function add(a, b){
		return (a + b);
	}
};

console.log(products2.func1(3, 5));
console.log(products2.rating.count);
//built-in objects these are objects in the language

// JSON
convertToJson = JSON.stringify(products2);
console.log(convertToJson);
console.log(typeof convertToJson);

console.log(JSON.parse(convertToJson));


/*
 local storage this is used to save values permenantely
 it does not get deleted
*/

localStorage.setItem('name', 'hello');

console.log(localStorage.getItem('name'));

/*
null - this is used when we want something to be empty
*/

// auto-boxing this does not work with null/undifined

console.log('hello'.length)
console.log('hello'.toUpperCase())

// objects are references

const object1 = {
	message: 'hello'
};
const object2 = object1;

object1.message = 'Good Job';

console.log(object1);
console.log(object2);
// objects cant be compared

const object4 = {
	message: 'Good Job',
	price: 234
};

console.log(object1 === object2);
console.log(object1.message !== object4.message);

//const message = object4.message;

const { message, price } = object4;
 console.log(`${message} ${price}`);


// short hand property
 const object5 = {
	message,
	add(a, b) {
		return a + b;
	}
 };

 console.log(object5.add(3, 4));
 console.log(object5);
/*
functions are also values and they
can be saved in a variable
*/

const function1 = function () {
	console.log('hello');
};

function1();

/*
functions can also be saved in objects
*/

const object1 = {
	name: "azuka",
	func: function () {
		console.log(this.name);
	}
}

object1.func();

// another way to loop through an array
const arr1 =  [1, 2, 3, 4, 5];
arr1.forEach(function (value, index) {
	if (value === 3) {
		return;
	}
	console.log(`${index}: ${value}`)
})


// arrow functions
const arrowFunction = (a, b) => {
	console.log(a + b);
}
arrowFunction(23, 55);


const oneParam = param => {
	console.log(param + 1);
};

oneParam(3);

const oneLine = () => 2 + 3;
console.log(oneLine());


const nums2 = [2, 4, 6, 8, 10];

nums2.forEach((value, index) => {
	console.log(value * 3);
})

// filter functions if the function returns true it puts the function in new array

const filterNegetive = [1, -3, 5].filter((item) => {
	if (item >= 0) {
		return true;
	} else {
		return false;
	}
	
});

console.log(filterNegetive);

// maps 

const arr5 = [1, 1, 3];

const arr5Mul2 = arr5.map((value, index) => {
	return value * 2
});
console.log(arr5Mul2);

// arrays in javascript
const arr1 = [10, 20, 30, 40, 50];
console.log(arr1)

console.log(arr1[1])

const arr2 = [1, 'hello', true, { name: 'prince'}, [1, 2]];

console.log(typeof arr2);

console.log(arr2);


// adds an item at the end of an array
arr2.push(100);
console.log(arr2);

// slice removes values form a specific index

arr2.splice(0, 1);
console.log(arr2);

// loops

let i = 1;

while (i <= 5) {
	console.log(i);
	i++;
}

for (let index = 1; index <= 5; index++) {
	console.log(index);
}

let randomNumber = 0;

while (randomNumber < 0.5) {
	randomNumber = Math.random();
}

console.log(randomNumber);

const todoList = [
	'make dinner',
	'wash dishes',
	'watch youtube'
];

for (let index = 0; index < todoList.length; index++) {
	const elements = todoList[index];
	console.log(elements);	
}

//acumulator parttern

const nums = [1, 1, 3];
//step 1
let total = 0;// accumulator variable

for (let i = 0; i < nums.length; i++) {
	const elements = nums[i];
	total += elements;
}
 console.log(total);


// accumulator can use different variables
 const numsDoubled = [];

for (let index = 0; index < nums.length; index++) {
	const element = nums[index];
	numsDoubled.push(element * 2);
 }
 console.log(numsDoubled);
 
var arr1 = [23, "azuka", true, "prince"];
console.log(arr1);

// nested array
let my_array = [["bulls", 356], 37];
console.log(my_array);

arr1[1] = 45;
console.log(arr1);
// multi dimensional arrays

let my_mult = [[1,2,3], [4,5,6], [[10,11,12], 13, 14]]
console.log(my_mult[0][1]);
let add_0indexMult = my_mult[0];
let add_1indexMult = my_mult[1];

console.log(add_0indexMult, add_1indexMult);

console.log(add_0indexMult[1] + add_1indexMult[1]);

//array manipulation

//add
var arr2 = [1,2,3];
arr2.push(23);
var len = arr2.length;
console.log(len);
console.log(arr2);

//pop
let popped = arr2.pop();

console.log(popped);

//shift removes the first element of the array
let shifted = arr2.shift();
console.log(shifted);

//unshift adds element to the begining of the array
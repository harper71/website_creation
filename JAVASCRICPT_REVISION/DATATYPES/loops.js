let myArray = [];

let i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

console.log(myArray);


let ourArray = [];

for (let i = 0; i < 6; i++) {
  ourArray.push(i);
}

console.log(ourArray);

let evenArray = [];

for (let i = 0; i < 10; i += 2) {
  evenArray.push(i);
}

console.log(evenArray);

let oddArray = []

for (let i = 1; i < 10; i += 2) {
  oddArray.push(i);
}

console.log(oddArray);


//count backwords 


let backArray = [];

for (let i = 9; i > 0; i -= 2) {
  backArray.push(i);
}

console.log(backArray);


//EXAMPLE

let ourArr = [9, 10, 11, 12];

let ourTotal = 0;

for (let i = 0; i <ourArr.length; i++) {
  ourTotal += ourArr[i];
}

console.log(ourTotal);


//Nested for loops

function multAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

let  product = multAll([[1,2], [3,4], [5,6,7]]);

console.log(product);


// tertiary operators
// condition ? statement-if-true: statement-if-false;

function checkSign(num) {
  return num > 0 ? "positive": num < 0 ? "nagetive": "zero";
}

console.log(checkSign());


function newCode() {
  console.log("hello world");
  
}

newCode();
newCode();
newCode();
newCode();


//global variable

let myGlobal = 19;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";

  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal + "\n";
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
}

fun1();

fun2();


let sum = 0;

function addThree() {
  sum += 3;
}

function addFive() {
  sum += 5;
}

addThree();
console.log(sum);


let changed = 0;


function change(num) {
 return (num + 5) / 3;
}

changed = change(10);


// stand in line (queue)


function nextInLine(arr, item) {
  arr.push(item);

  return arr.shift();
}


//random functions

let randNum = Math.floor(Math.random() * 20);


console.log(randNum);


//convert strings to an integer
function convertToInteger(str) {
  return parseInt(str);
}

let num = convertToInteger("56");

console.log(typeof num);


// ananymous functions
let magic1 = function() {
  return `azuka`
}


let magic = () => {
  return new date;
}

//or

const magic2 = () => new Date();


/* arrow functions with arguments */


const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
}

console.log(myConcat([1, 2], [3, 4, 5]));


// higher order functioons


const myName = 'prince azuka';
const myAge = 24;


let myNum = 23;

if (myNum >= 17) {
  console.log(`your number is ${myNum}`);
}


let a = 45;
let b = 34;
let c = 35;


a += b;

console.log(a);

let firstName = 'Ada';
let lenOfString = firstName.length

console.log(`your first ame is ${firstName} with a total length of ${lenOfString}`);


/* arrays*/

let ourArray = ['John', 23];

console.log(ourArray, ourArray[1], ourArray[0]);


//nested array

let moreArray = [['prince', 23], ['willams', 32], ['goodness', 21]];

moreArray.forEach(element => {
  console.log(element);
});


function freezeObj() {
  "use strict"
  const MATH_CONSTANTS = {
    PI: 3.142
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
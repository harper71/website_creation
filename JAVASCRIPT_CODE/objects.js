let ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails:": 1,
  "friends": ["everything"]
};

let myDog = [ourDog.friends, ourDog.name, ourDog.legs];
console.log(myDog);

ourDog.name = 'wilson';
ourDog.bark = 'bow bow';

console.log(ourDog);

delete ourDog.legs

console.log(ourDog);

function checkObj(checkProp) {
  if (ourDog.hasOwnProperty(checkProp)) {
    return ourDog[checkProp]
  } else {
    return 'not found';
  }
}

console.log((checkObj('bark')));

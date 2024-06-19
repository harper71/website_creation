#!/usr/bin/node
function nextInline(arr, items) {
  arr.push(items);
  return arr.shift();
}
let testArr = [1, 2, 3, 4, 5];

console.log("before: " + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log("after: " + JSON.stringify(testArr));
   
function ourTrueOrFalse() {

}
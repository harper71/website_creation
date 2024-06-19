#!/usr/bin/node
function nextInline (arr, items) {
  arr.push(items);
  return arr.shift();
}

const testArr = [1, 2, 3, 4, 5];

console.log('before: ' + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log('after: ' + JSON.stringify(testArr));

function ourTrueOrFalse (isItTrue) {
  if (isItTrue) {
    return 'YES, it is true';
  }
  return ' NO it is false';
}

function testEqual (val) {
  if (val === 12) {
    return 'Equal';
  } else {
    return 'not equal';
  }
}

console.log(testEqual(12));
console.log(ourTrueOrFalse(false));

function testLogicalOr (val) {
  if (val < 10 || val > 20) {
    return 'outside';
  } else {
    return 'inside';
  }
}

console.log(testLogicalOr());

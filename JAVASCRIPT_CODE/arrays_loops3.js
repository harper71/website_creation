const array1 = [1, 2, 3];
const arr2 = array1;

arr2.push(4);

console.log(arr2);
console.log(array1);

const arr3 = [1, 2, 3];

// destructuring
const [firstValue, secondValue] = arr3;

console.log(firstValue, secondValue);

for (let i = 1; i <= 10; i++) {
	if (i === 3) {
		continue;
	}
	console.log(`${i}`);
	if (i === 8) {
		break;
	}
}


let i = 1;

while (i <= 10) {
	if ((i % 3) === 0) {
		i++;
		continue;
	}
	console.log(i);
	i++;
}

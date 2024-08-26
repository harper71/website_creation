function arraySwap(array) {
	const size = array.length

	let  lastElement = array[size - 1];
	let fistElement = array[0];
	array[0] = lastElement;
	array[size - 1] = fistElement;

	return array;
}

console.log(arraySwap(['hi', 'hello', 'good']));
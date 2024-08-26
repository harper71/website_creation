function getLastValue(array) {

	lastElement = array.length - 1;

	return array[lastElement];
}

const element = getLastValue([1, 20, 22, 24, 5]);

console.log(element);

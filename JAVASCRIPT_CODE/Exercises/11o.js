const checkArrsy = ['hello', 'world', 'search', 'good', 'search'];
let indexRecieved = -1;
for (let index = 0; index < checkArrsy.length; index++) {
	if (checkArrsy[index] === 'search') {
		indexRecieved = index;
		break;
	}
}
console.log(indexRecieved);
for (i = 5; i >= 0; i--) {
	console.log(i);
}

//11h

function addOne(array=[]) {
	let addArray = [];
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		addArray.push(element + 1);
	}
	return addArray;
}

//11i

function addNum(array=[], num) {
	let addArray = [];
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		addArray.push(element + num);
	}
	return addArray;
}

//11j

function addArrays(array1=[], array2=[]) {
	let addArray = [];
	for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        addArray.push(array1[i] + array2[i]);
    }
	return addArray;
}

console.log(addArrays([1,1,2], [1,1,3]));

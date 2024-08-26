// this is used to run a code in the future

/*
asynchronous Code
the computer will not wait for the line to finish before going to the next line
*/
setTimeout(function () {
	console.log('timeout')
}, 3000);

console.log('nextline');

setInterval(function() {
	console.log(34 + 45);
}, 3000);

console.log('nextline2');
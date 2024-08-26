function subButton() {
	const subButtonElement = document.querySelector('.js-subButton');

	if (subButtonElement.innerHTML === 'Subscribe') {
		subButtonElement.innerHTML = 'Subscribed';
		subButtonElement.classList.add('is-subscribed');
	} else {
		subButtonElement.innerHTML = 'Subscribe';
		subButtonElement.classList.remove('is-subscribed');
	}
}

function calcTotal() {
	const inputElement = document.querySelector('.js-cost');
	let cost = Number(inputElement.value);

	if (cost < 0) {
		document.querySelector('.js-totalCost').innerHTML = `Error: cost cannot be less than $0`;
		document.querySelector('.js-totalCost').style.color = 'red';
		return;
	} else if (cost > 0 && cost < 40) {
		cost = cost + 10;
		document.querySelector('.js-totalCost').style.color = 'black';
	}
	document.querySelector('.js-totalCost').innerHTML = `$${cost}`;	
}
calcTotal();
function handleCostKeydown(event) {
	if (event.key === 'Enter') {
		calcTotal();
	}
}

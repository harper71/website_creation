score = {
	wins: 0,
	losses: 0
};

function computerMoves () {
	const randNum = Math.random();
	let compMove = '';

	if (randNum >= 0 && randNum < (1 / 2)) {
		compMove = 'heads';
	} else if (randNum >= (1 / 2) && randNum < 1) {
		compMove = 'tails';
	}
	alert(compMove);
	return compMove;
	
}




function playerMoves(playerChoice) {
	let result = '';
	const computer = computerMoves();

	if (computer === 'heads') {
		if (playerChoice === 'heads') {
			result = 'you win.';
		} else if (playerChoice === 'tails') {
			result = 'you lose.';
		}
	} else if (computer === 'tails') {
		if (playerChoice === 'tails') {
			result = 'you win.';
		} else if (playerChoice === 'heads') {
			result = 'you lose.';
		}

		if ((playerChoice === 'tails' && computer === 'tails') || (playerChoice === 'heads' && computer === 'heads')) {
			score.wins += 1;
		} else {
			score.losses += 1;
		}
		console.log(score);
		

	}
	alert(`you choosed ${playerChoice} and computer choosed ${computer} ${result}`);
}

function updateScoreElement() {
	document.querySelector('.js-score').innerHTML = `wins: ${score.wins} losses: ${score.losses}`;
}

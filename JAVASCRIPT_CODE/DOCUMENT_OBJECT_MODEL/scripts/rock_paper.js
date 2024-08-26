const score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
	score = {
		wins: 0,
		losses: 0,
		ties: 0
	};
};

function compMoves()
{
	const randNum = Math.random();

	let compMove = '';

	if (randNum >= 0 && randNum < (1/3)) {
		compMove = 'rock';
	} else if (randNum >= (1/3) && randNum < (2/3)) {
		compMove = 'paper';
	} else if (randNum >= (2/3) && randNum < 1) {
		compMove = 'scissors';
	}
	return compMove;
}


function palyerMoves(playersChoice)
{
	let result = '';
	const computer = compMoves()

	if (computer === 'rock') {
		if (playersChoice === 'rock') {
		result = 'tie';
		} else if (playersChoice === 'paper') {
			result = 'you lose.';
		} else if (playersChoice === 'scissors') {
			result = 'you win.';
		}
	} else if (computer === 'paper') {
		if (playersChoice === 'rock')
		{
			result = 'you win.';
		} else if (playersChoice === 'paper')
		{
			result = 'tie';
		} else if (playersChoice === 'scissors')
		{
			result = 'you lose.';
		}
	} else if (computer === 'scissors') {
		if (playersChoice === 'rock')
		{
			result = 'you lose.';
		} else if (playersChoice === 'paper')
		{
			result = 'you win.';
		} else if (playersChoice === 'scissors')
		{
			result = 'tie';
		}
	}

	if (result === 'you win.') {
		score.wins += 1;
	} else if (result === 'you lose.')
	{
		score.losses += 1;
	} else if (result === 'tie')
	{
		score.ties += 1;
	}

	totalScore = JSON.stringify(score)
	localStorage.setItem('score', totalScore);
	console.log(totalScore);
	

	alert(`you picked ${playersChoice} and the computer picked ${computer}. ${result}\nwins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`);

	function updateResultElement()
	{
		document.querySelector('.js-result').innerHTML = `${result}`;
	}
	const playerChoice2 = playersChoice;
	function updateMovesElement() {
		document.querySelector('.js-moves').innerHTML = `You
		<img src="images/${playerChoice2}-emoji.png" class="moves-icon">
		<img src="images/${computer}-emoji.png" class="moves-icon">
		computer`
	}

	updateResultElement();
	updateMovesElement();
	updateScoreElement();
}
function updateScoreElement() {
		document.querySelector('.js-score').innerHTML = `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
	}
updateScoreElement();
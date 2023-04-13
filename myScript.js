// Random "Rock, Paper, and Scissors Computer Selection"

function getComputerChoice() {
	const choice = ['rock', 'paper', 'scissors'];
	const randomIndex = Math.floor(Math.random() * 3);

	return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
	playerChoice = playerSelection.toLowerCase();

	const drawMsg = "It's a tie!";
	const winMsg = `You win! ${playerChoice} beats ${computerSelection}`;
	const loseMsg = `You lose! ${computerSelection} beats ${playerChoice}`;

	if (playerChoice === computerSelection.toLowerCase()) {
		return drawMsg;
	} else if (playerChoice === 'rock' && computerSelection === 'scissors' ||
	playerChoice === 'paper' && computerSelection === 'rock' ||
	playerChoice === 'scissors' && computerSelection === 'paper') {
		return winMsg;
	} else {
		return loseMsg;
	}
}

function game() {
	let compWinCount = 0;
	let playerWinCount = 0;


	for (i = 0; i <= 5; i++) {
		// let gameRounds = prompt('How many rounds do you wanna play?');
		let playerSelection = prompt('Choose Rock, Paper or Scissors?');
		let computerSelection = getComputerChoice();
		let result = playRound(playerSelection, computerSelection);
		console.log(result);

		if (result.includes("win")) {
			playerWinCount++;
		} else if (result.includes("lose")) {
			compWinCount++;
		}

		if (playerWinCount >= gameRounds/2) {
			console.log('You win!')
		} else if (compWinCount >= gameRounds/2) {
			console.log('You lose!')
		} else {
			console.log('You draw!')
		}
	}
}

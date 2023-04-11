function getComputerChoice() {
	const choice = ['Rock', 'Paper', 'Scissors'];
	const randomIndex = Math.floor(Math.random() * 3);

	return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection.toLowerCase()) {
		return "It's a tie!";
	}
	
	if (
		(playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors')
	) {
		return `You Win! ${playerSelection} beats ${computerSelection}.`;
	} else {
		return `You Lose! ${computerSelection} beats ${playerSelection}.`;
	};

}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


function getComputerChoice() {
	const choice = ['Rock', 'Paper', 'Scissors'];
	const randomIndex = Math.floor(Math.random() * 3);

	return choice[randomIndex];
}


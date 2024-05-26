const choices = ["rock", "paper", "scissors"];

let choice = Math.floor(Math.random() * 3);

function getComputerChoice() {
  return choices[choice];
}

function getHumanChoice() {
  return prompt("Choose: 'Rock', 'Paper', 'Scissors'");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound() {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice();

    if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock")
    ) {
      humanScore++;
      console.log(`Your Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
      return console.log(`You win! ${humanChoice} beat ${computerChoice}`);
    } else if (humanChoice == computerChoice) {
      console.log(`Your Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
      return console.log("It's a draw");
    } else {
      computerScore++;
      console.log(`Your Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
      return console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound();
  }

  return humanScore > computerScore
    ? console.log("You won the Round")
    : console.log("You lost the Round");
}

playGame();

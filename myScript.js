document.addEventListener("DOMContentLoaded", () => {
  const playerCountElement = document.getElementById("player-count");
  const compCountElement = document.getElementById("comp-count");
  const playerPickElement = document.querySelector(".player-pick");
  const compPickElement = document.querySelector(".comp-pick");
  const commentElement = document.querySelector(".comment-ctn h2");
  const detailElement = document.querySelector(".comment-ctn p");
  const playPicks = document.querySelectorAll(".playpick");
  const picksCtn = document.querySelector(".picks-ctn");

  let playerScore = 0;
  let compScore = 0;

  const choices = ["rock", "paper", "scissors"];
  const emojiMap = {
    rock: "✊🏽",
    paper: "✋🏽",
    scissors: "✂",
  };

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
      return "draw";
    } else if (
      (playerChoice === "rock" && compChoice === "scissors") ||
      (playerChoice === "paper" && compChoice === "rock") ||
      (playerChoice === "scissors" && compChoice === "paper")
    ) {
      return "player";
    } else {
      return "computer";
    }
  }

  function updateScore() {
    playerCountElement.textContent = playerScore.toString().padStart(2, "0");
    compCountElement.textContent = compScore.toString().padStart(2, "0");
  }

  function displayResult(playerChoice, compChoice, winner) {
    playerPickElement.textContent = emojiMap[playerChoice];
    compPickElement.textContent = emojiMap[compChoice];
    picksCtn.style.visibility = "visible"; // Make picks-ctn visible

    if (winner === "draw") {
      commentElement.textContent = "It's a draw";
      detailElement.innerHTML = `<span>${playerChoice}</span> equals <span>${compChoice}</span>`;
    } else if (winner === "player") {
      commentElement.textContent = "You win";
      detailElement.innerHTML = `<span>${playerChoice}</span> beats <span>${compChoice}</span>`;
    } else {
      commentElement.textContent = "You lose";
      detailElement.innerHTML = `<span>${compChoice}</span> beats <span>${playerChoice}</span>`;
    }
  }

  function checkGameEnd() {
    if (playerScore === 5 || compScore === 5) {
      playPicks.forEach((pick) =>
        pick.removeEventListener("click", handlePlayerPick)
      );
      if (playerScore === 5) {
        alert("Congratulations! You won the game.");
      } else {
        alert("Game over! The computer won the game.");
      }
      setTimeout(() => {
        location.reload(); // Reload the page after 10 seconds
      }, 5000);
    }
  }

  function handlePlayerPick(event) {
    const playerChoice = event.target.id;
    const compChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, compChoice);

    if (winner === "player") {
      playerScore++;
    } else if (winner === "computer") {
      compScore++;
    }

    updateScore();
    displayResult(playerChoice, compChoice, winner);
    checkGameEnd();
  }

  playPicks.forEach((pick) => pick.addEventListener("click", handlePlayerPick));
});

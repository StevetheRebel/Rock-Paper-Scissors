const playerName = document.getElementById("playerName");
const playerRounds = document.getElementById("playerRounds");
const playBtn = document.getElementById("play-btn");
const choices = document.querySelectorAll(".btn1");
const finResult = document.getElementById("result_info");
const resetBtn = document.getElementById("reset");
const resetDisplay = document.querySelector(".result-parent");
const winArea = document.getElementById("win-col");
const drawArea = document.getElementById("draw-col");
const loseArea = document.getElementById("lose-col");

// when the playBtn is clicked the game() is initiated
//

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choice[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  playBtn.style.display = "none";
  resetDisplay.style.display = "flex";

  const drawMsg = `It's a draw`;
  const winMsg = `${playerName.value} wins`;
  const loseMsg = `${playerName.value} loses`;

  for (let x of choices) {
    x.addEventListener("click", () => {
      let playerChoice = x.value;
      let computerChoice = getComputerChoice();

      const li = document.createElement("li");

      if (playerChoice === computerChoice) {
        return (drawArea.appendChild(li).innerHTML = drawMsg);
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        return (winArea.appendChild(li).innerHTML = winMsg);
      } else {
        return (loseArea.appendChild(li).innerHTML = loseMsg);
      }
    });
  }
}


function game() {
  let compWinCount = 0;
  let playerWinCount = 0;

  for (let i = 0; i < playerRounds.value; i++) {
    let result = playRound();

    if (result.includes("wins")) {
      playerWinCount++;
      console.log(playerWinCount);
    } else if (result.includes("loses")) {
      compWinCount++;
      console.log(compWinCount);
    }

    if (playerWinCount > playerRounds.value / 2) {
      finResult.innerHTML = winMsg;
      finResult.innerHTML.style.color = "green";
    } else if (compWinCount > playerRounds.value / 2) {
      finResult.innerHTML = loseArea;
      finResult.innerHTML.style.color = "red";
    } else {
      finResult.innerHTML = drawMsg;
    }
  }
}



playBtn.addEventListener("click", game);



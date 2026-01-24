getHumanChoice();

function getComputerChoice() {
  const randomNumber = Math.random();

  let computerChoice = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  const rockButton = document.querySelector(".js-rock-button");
  const paperButton = document.querySelector(".js-paper-button");
  const scissorsButton = document.querySelector(".js-scissors-button");
  
  rockButton.addEventListener("click", () => {
    document.querySelector(".js-results-container").innerText = playRound("Rock");
  });

  paperButton.addEventListener("click", () => {
    document.querySelector(".js-results-container").innerText = playRound("Paper");
  });

  scissorsButton.addEventListener("click", () => {
    document.querySelector(".js-results-container").innerText = playRound("Scissors");
  });
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let results;
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {

    humanScore++;

  } else if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {

    computerScore++;
  }

  if(humanScore === 5) {
    results = `
    You win
    Your score: ${humanScore}
    Computer score: ${computerScore}
    `;

    humanScore = 0;
    computerScore =0;

    return results;
  } else if(computerScore === 5) {
    results = `
      Computer wins
      Computer score: ${computerScore}
      Your score: ${humanScore}
    `;

    humanScore = 0;
    computerScore =0;

    return results;
  } else if(humanScore < 5 && computerScore < 5) {
    return results = `
    You: ${humanChoice} 
    Computer: ${computerChoice}
    `
  }
}

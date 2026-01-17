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
    playRound("Rock");
  });

  paperButton.addEventListener("click", () => {
    playRound("Paper");
  });

  scissorsButton.addEventListener("click", () => {
    playRound("Scissors");
  });
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (
    (humanChoice === "Rock" && computerChoice === "Rock") ||
    (humanChoice === "Paper" && computerChoice === "Paper") ||
    (humanChoice === "Scissors" && computerChoice === "Scissors")
  ) {
    console.log(`Tie 
You: ${humanChoice} computer: ${computerChoice}
Your score: ${humanScore}
Computer score: ${computerScore}`);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {

    humanScore++;
    console.log(`You win! 
You: ${humanChoice} computer: ${computerChoice}
Your score: ${humanScore}
Computer score: ${computerScore}`);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {

    computerScore++;
    console.log(`You lose 
You: ${humanChoice} computer: ${computerChoice}
Your score: ${humanScore}
Computer score: ${computerScore}`);
  }
}

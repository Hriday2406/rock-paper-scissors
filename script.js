function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function updateScoreBoard() {
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

function calcOutcomeText(outcome, choice1 = "", choice2 = "") {
  if (outcome == "Tie") return `It's a Tie.`;
  return `You ${outcome}! ${choice1} beats ${choice2}.`;
}

function calcOutcome(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) return calcOutcomeText("Tie");
  else if (playerChoice == "rock" && computerChoice == "scissors")
    return calcOutcomeText("Win", "Rock", "Scissors");
  else if (playerChoice == "paper" && computerChoice == "rock")
    return calcOutcomeText("Win", "Paper", "Rock");
  else if (playerChoice == "scissors" && computerChoice == "paper")
    return calcOutcomeText("Win", "Scissors", "Paper");
  else if (playerChoice == "scissors" && computerChoice == "rock")
    return calcOutcomeText("Lose", "Rock", "Scissors");
  else if (playerChoice == "rock" && computerChoice == "paper")
    return calcOutcomeText("Lose", "Paper", "Rock");
  else if (playerChoice == "paper" && computerChoice == "scissors")
    return calcOutcomeText("Lose", "Scissors", "Paper");
  else return "Wrong Input!";
}

function playRound(playerChoice, computerChoice = getComputerChoice()) {
  let outcome = calcOutcome(playerChoice, computerChoice);

  outcomeDiv.textContent = outcome;
  container.appendChild(outcomeDiv);

  if (outcome[4] == "W") playerScore++;
  else if (outcome[4] == "L") computerScore++;

  updateScoreBoard();

  if (playerScore == 10) winner("player");
  else if (computerScore == 10) winner("computer");
}

function winner(string) {
  btnR.disabled = true;
  btnP.disabled = true;
  btnS.disabled = true;
  if (string == "player") outcomeDiv.textContent = "You Won!!";
  else if (string == "computer") outcomeDiv.textContent = "You Lost!!";
}

/* --------------------------------------------------------------- */

let playerScore = 0,
  computerScore = 0;
const btnR = document.querySelector("#btnR");
const btnP = document.querySelector("#btnP");
const btnS = document.querySelector("#btnS");

const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");

btnR.addEventListener("click", () => playRound("rock"));
btnP.addEventListener("click", () => playRound("paper"));
btnS.addEventListener("click", () => playRound("scissors"));

const container = document.querySelector(".container");
const outcomeDiv = document.createElement("div");
outcomeDiv.classList.toggle("box");

const resultDiv = document.createElement("div");
resultDiv.classList.toggle("box");

// playRound();

/*
R > S
P > R
S > P
*/

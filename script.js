function getComputerChoice() {
    const choice = [ "rock", "paper", "scissors" ];
    return choice[ Math.floor(Math.random() * 3) ];
}

// function getPlayerChoice() {
//     let choice = prompt("What do you choose? \nRock or Paper or Scissors");
//     choice = choice.toLowerCase();
//     return choice;
// }

function calcOutcomeText(outcome, choice1="", choice2=""){
    if(outcome == "Tie")
        return `It's a Tie.`;
    return `You ${outcome}! ${choice1} beats ${choice2}.`;
}

function calcOutcome(playerChoice, computerChoice) {
    if(playerChoice == "rock" && computerChoice == "scissors")
        return calcOutcomeText("Win", "Rock", "Scissors");
    else if(playerChoice == "paper" && computerChoice == "rock")
        return calcOutcomeText("Win", "Paper", "Rock");
    else if(playerChoice == "scissors" && computerChoice == "paper")
        return calcOutcomeText("Win", "Scissors", "Paper");
    else if(playerChoice == "scissors" && computerChoice == "rock")
        return calcOutcomeText("Lose", "Rock", "Scissors");
    else if(playerChoice == "rock" && computerChoice == "paper")
        return calcOutcomeText("Lose", "Paper", "Rock");
    else if(playerChoice == "paper" && computerChoice == "scissors")
        return calcOutcomeText("Lose", "Scissors", "Paper");
    else if(playerChoice == computerChoice)
        return calcOutcomeText("Tie");
    else
        return "Wrong Input!";
}

function showResult(outcome, playerScore, computerScore) {
    // outcome can be Tie / Player / Computer
    if(outcome == "Tie"){
        console.log(`It's a Tie !!! \nScore => Player = ${playerScore} | Computer = ${computerScore}`);
        // alert( `It's a Tie !!! \n\nScore => \nPlayer = ${playerScore} | Computer = ${computerScore}` );
    }
    else {
        console.log(`${outcome} Wins !!! \nScore => Player = ${playerScore} | Computer = ${computerScore}`);
        // alert( `${outcome} Wins !!! \n\nScore => \nPlayer = ${playerScore} | Computer = ${computerScore}` );
    }
}

function playRound(playerChoice, computerChoice = getComputerChoice()){
    let outcome = calcOutcome(playerChoice, computerChoice);
    outcomeText = outcome;
    console.log( outcome );
    // alert( outcome );

    if(outcome[4] == "W")
        return "player";
    if(outcome[4] == "L")
        return "computer";
    return "tie";
}

function game(){
    let playerScore = 0, computerScore = 0;
        let result = playRound();
        if(result == "player")
            playerScore++;
        else if(result == "computer")
            computerScore++;
    console.log("/------------------------------/");
    if(playerScore > computerScore)
        showResult("Player", playerScore, computerScore);
    else if(playerScore < computerScore)
        showResult("Computer", playerScore, computerScore);
    else
        showResult("Tie", playerScore, computerScore);
}

const btnR = document.querySelector('#btnR');
const btnP = document.querySelector('#btnP');
const btnS = document.querySelector('#btnS');

btnR.addEventListener('click', () => {
    playRound('rock');
    outcomeDiv.textContent = outcomeText;
    container.appendChild(outcomeDiv);
});

btnP.addEventListener('click', () => {
    playRound('paper');
    outcomeDiv.textContent = outcomeText;
    container.appendChild(outcomeDiv);
});

btnS.addEventListener('click', () => {
    playRound('scissors');
    outcomeDiv.textContent = outcomeText;
    container.appendChild(outcomeDiv);
});

let outcomeText = '';
const container = document.querySelector('.container');
const outcomeDiv = document.createElement('div');
outcomeDiv.classList.add('outcomeDiv');





// game();

/*
R > S
P > R
S > P
*/
function getComputerChoice() {
    const choice = [ "rock", "paper", "scissors" ];
    return choice[ Math.floor(Math.random() * 3) ];
}

function getPlayerChoice() {
    let choice = prompt("What do you choose? \nRock or Paper or Scissors");
    choice = choice.toLowerCase();
    return choice;
}

function calcOutcome(playerChoice, computerChoice) {
    if(playerChoice == "rock" && computerChoice == "scissors")
        return outcomeText("Win", "Rock", "Scissors");
    else if(playerChoice == "paper" && computerChoice == "rock")
        return outcomeText("Win", "Paper", "Rock");
    else if(playerChoice == "scissors" && computerChoice == "paper")
        return outcomeText("Win", "Scissors", "Paper");
    else if(playerChoice == "scissors" && computerChoice == "rock")
        return outcomeText("Lose", "Rock", "Scissors");
    else if(playerChoice == "rock" && computerChoice == "paper")
        return outcomeText("Lose", "Paper", "Rock");
    else if(playerChoice == "paper" && computerChoice == "scissors")
        return outcomeText("Lose", "Scissors", "Paper");
    else if(playerChoice == computerChoice)
        return outcomeText("Tie");
    else
        return "Wrong Input!";
}

function outcomeText(outcome, choice1="", choice2=""){
    if(outcome == "Tie")
        return `It's a Tie.`;
    return `You ${outcome}! ${choice1} beats ${choice2}.`;
}

function playRound(){
    let playerChoice = getPlayerChoice(), computerChoice = getComputerChoice();

    let outcome = calcOutcome(playerChoice, computerChoice)
    console.log( outcome );

    if(outcome[4] == "W")
        return "player";
    if(outcome[4] == "L")
        return "computer";
    return "tie";
}

function game(){
    let score = [0, 0]; // player, computer
    for(let i=0; i<5; i++){
        let result = playRound();
        if(result == "player")
            score[0]++;
        else if(result == "computer")
            score[1]++;
    }
    console.log("/------------------------------/");
    if(score[0] > score[1])
        console.log("Player Wins !!!");
    else if(score[0] < score[1])
        console.log("Computer Wins !!!");   
    else 
        console.log("It's a Tie !!!");
    console.log(`Score => Player = ${score[0]} | Computer = ${score[1]}`);

}

game();

/*
R > S
P > R
S > P
*/
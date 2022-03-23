let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    const availableChoices = ["rock", "paper", "scissors"];
    const computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
}


function playRound(computerSelection, playerSelection){
    const playerChoice = playerSelection.toLowerCase();
    console.log(computerSelection, playerSelection)
    if (playerChoice === computerSelection){
        console.log(`${playerChoice} vs ${computerSelection}: Tie Game!`);
    } else if (playerChoice === "rock" && computerSelection === "scissors" ||
            playerChoice === "paper" && computerSelection === "rock" || 
            playerChoice === "scissors" && computerSelection === "paper"){
        console.log(`${playerChoice} beats ${computerSelection}, Player Wins!!!`);
        playerScore++;
    } else {
        console.log(`${computerSelection} beats ${playerChoice}, Computer Wins!!!`);
        computerScore++;
    }
}


function game(){
    for(let i = 0; i < 5; i++){
        playRound(computerPlay(), prompt("Rock, Paper, or Scissors?", ""));
    }
    if (playerScore > computerScore){
        console.log(`FINAL SCORE: Player Wins! ${playerScore} vs ${computerScore}`);
    } else if (computerScoreScore > playerScore) {
        console.log(`FINAL SCORE: Computer Wins! ${computerScore} vs ${playerScore}`);
    } else {
        console.log(`Tie Game`);
    }
}

game();
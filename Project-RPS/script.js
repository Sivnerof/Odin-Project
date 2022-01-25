function computerPlay(){
    const availableChoices = ["rock", "paper", "scissors"];
    const computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
}

function playRound(computerSelection, playerSelection){
    const playerChoice = playerSelection.toLowerCase();
    console.log(computerSelection, playerSelection)
    if (playerChoice === computerSelection){
        return `${playerChoice} vs ${computerSelection}: Tie Game!`;
    } else if (playerChoice === "rock" && computerSelection === "scissors" ||
            playerChoice === "paper" && computerSelection === "rock" || 
            playerChoice === "scissors" && computerSelection === "paper"){
        return `${playerChoice} beats ${computerSelection}, Player Wins!!!`;
    } else {
        return `${computerSelection} beats ${playerChoice}, Computer Wins!!!`;
    }
}

console.log(playRound(computerPlay(), prompt("Rock, Paper, or Scissors?", "")));
/*    
    Important note: you want to return the results of this function call, not console.log() them. 
    To test this function console.log the results:
    
    Write a NEW function called game(). 
    Use the previous function inside of this one to play a 5 round game that 
    keeps score and reports a winner or loser at the end.
    
    You have not officially learned how to “loop” over code to repeat function calls… 
    if you already know about loops from somewhere else 
    (or if you feel like doing some more learning) feel free to use them. 
    If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
    
    At this point you should be using console.log() to 
    display the results of each round and the winner at the end.
    
    Feel free to re-work your previous functions if you need to. 
    Specifically, you might want to change the return value to something more useful.
*/
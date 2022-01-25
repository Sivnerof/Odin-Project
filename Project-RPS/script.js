function computerPlay(){
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

console.log(computerPlay());

/*
    
    Write a function that plays a single round of Rock Paper Scissors. 
    The function should take two parameters - 
    the playerSelection and computerSelection - 
    and then return a string that declares the winner of the round like so: 
    "You Lose! Paper beats Rock"
    
    Make your function’s playerSelection parameter case-insensitive 
    (so users can input rock, ROCK, RocK or any other variation).
    
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
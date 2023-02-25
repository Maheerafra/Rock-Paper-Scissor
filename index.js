console.log("hello,world")

//function Computerchoice(){
   // return random
    ll
   // }

    function getComputerchoice() {
        let choices = ["rock", "paper", "scissors"];
        let randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      }
      
      console.log(getComputerchoice()); // outputs one of "rock", "paper", or "scissors" at random


      function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if (playerSelection === computerSelection) {
            return "It's a tie!";
        } else if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                return "You Win! Rock beats Scissors";
            } else {
                return "You Lose! Paper beats Rock";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "You Win! Paper beats Rock";
            } else {
                return "You Lose! Scissors beats Paper";
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                return "You Win! Scissors beats Paper";
            } else {
                return "You Lose! Rock beats Scissors";
            }
        } else {
            return "Invalid selection, Please select either rock, paper or scissors";
        }
    }
    const playerSelection = "rock";
    const computerSelection = getComputerchoice();
    //console.log(playRound(playerSelection, computerSelection));
    /* console.log(playRound("rock", "paper"));
    console.log(playRound("rock", "rock"));*/
    /*console.log(playRound("rock", "scissors"));
    console.log(playRound("rock", "paper"));
    console.log(playRound("rock", "rock"));*/
    
    let playerScore = 0;
    let computerScore = 0;
    
    function game() {
        for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
            let computerSelection = getComputerchoice();
            let roundResult = playRound(playerSelection, computerSelection);
            console.log(roundResult);
            if (roundResult.includes("Win")) {
                playerScore++;
            } else if (roundResult.includes("Lose")) {
                computerScore++;
            }
        }
        if (playerScore > computerScore) {
            console.log(`You won the game with a score of ${playerScore} to ${computerScore}`);
        } else if (playerScore < computerScore) {
            console.log(`You lost the game with a score of ${playerScore} to ${computerScore}`);
        } else {
            console.log(`The game was a tie with a score of ${playerScore} to ${computerScore}`);
        }
    }
    console.log(game());
    
 
      
      

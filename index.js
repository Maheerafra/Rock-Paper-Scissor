console.log("hello,world")

//function Computerchoice(){
   // return random
    
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
    console.log(playRound(playerSelection, computerSelection));
   /* console.log(playRound("rock", "paper"));
    console.log(playRound("rock", "rock"));*/
    /*console.log(playRound("rock", "scissors"));
    console.log(playRound("rock", "paper"));
    console.log(playRound("rock", "rock"));*/
    


      
      
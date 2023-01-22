console.log("hello,world")

//function Computerchoice(){
   // return random
    
   // }

    function Computerchoice() {
        let choices = ["rock", "paper", "scissors"];
        let randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      }
      
      console.log(Computerchoice()); // outputs one of "rock", "paper", or "scissors" at random
      
      
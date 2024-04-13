let getComputerChoice = () =>{
    const computerChoice = Math.floor(Math.random() * 3);
    let finalChoice;
    if (computerChoice===0){
        finalChoice="rock";
    }
    else if(computerChoice===1){
        finalChoice="paper";
    }
    else{
        finalChoice="scissors";
    }
    return finalChoice;
}


function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        result = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === computerSelection) {
        result = "It's a Tie!";
    }
    else if(playerSelection!== "rock" && playerSelection!== "paper" && playerSelection!== "scissors" && playerSelection!==null){
        result = "Your choice is invalid. Please choose between rock, paper and scissors";
    }
    else {
        result = "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    return result;
  }
  let playerSelection;
  let computerSelection;

  const rockBtn = document.querySelector("#rock");
  rockBtn.onclick = function() {
    // Inside the event handler, call playRound with appropriate arguments
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    displayResult(playerSelection, computerSelection, result);

};
const paperBtn = document.querySelector("#paper");
  paperBtn.onclick = function() {
    // Inside the event handler, call playRound with appropriate arguments
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    displayResult(playerSelection, computerSelection, result);

};
const scissorsBtn = document.querySelector("#scissors");
  scissorsBtn.onclick = function() {
    // Inside the event handler, call playRound with appropriate arguments
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    displayResult(playerSelection, computerSelection, result);
};
let roundWinner =0;
function displayResult(playerSelection, computerSelection, result) {
    // Create a new div for each round's result
    const gameResults = document.createElement("div");
    gameResults.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}. ${result}`;
    container.appendChild(gameResults);
    roundWinner++;
    if (roundWinner%5===0){
        const roundWinnerMessage = document.createElement("div");
        if(result.startsWith ("You Win! ")){
            roundWinnerMessage.textContent = `The game winner is you`;
        } 
        else if (result.startsWith ("You Lose! ")){
            roundWinnerMessage.textContent = `The game winner is computer`;
        }
        else{
            roundWinnerMessage.textContent = `Its a tie`;
        }
        container.appendChild(roundWinnerMessage);
}
}



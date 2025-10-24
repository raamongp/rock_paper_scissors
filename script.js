let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3) + 1;
  switch (randomIndex) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
  }
}

//console.log(getComputerChoice());

function getHumanChoice(humanChoice) {
  return humanChoice.toLowerCase().trim();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return alert("Draw!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    ++computerScore;
    return alert("You lose! Paper beats Rock");
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    ++humanScore;
    return alert("You win! Rock beats Scissor");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    ++humanScore;
    return alert("You win! Paper beats Rock");
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    ++computerScore;
    return alert("You lose! Scissor beats Paper");
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    ++computerScore;
    return alert("You lose! Rock beats Scissor");
  } else {
    ++humanScore;
    return alert("You win! Scissor beats Paper");
  }
}

function playGame() {
  humanChoice = prompt("Rock, Paper or Scissor?");
  playRound(getHumanChoice(humanChoice), getComputerChoice());
  humanChoice = prompt("Rock, Paper or Scissor?");
  playRound(getHumanChoice(humanChoice), getComputerChoice());
  humanChoice = prompt("Rock, Paper or Scissor?");
  playRound(getHumanChoice(humanChoice), getComputerChoice());
  humanChoice = prompt("Rock, Paper or Scissor?");
  playRound(getHumanChoice(humanChoice), getComputerChoice());
  humanChoice = prompt("Rock, Paper or Scissor?");
  playRound(getHumanChoice(humanChoice), getComputerChoice());

  return alert(`Final Score: Computer ${computerScore} x Human ${humanScore}`);
}

playGame();

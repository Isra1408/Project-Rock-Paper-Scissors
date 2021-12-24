"use strict";

// Selecting elements

const resultText = document.querySelector(".text");
const score0 = document.getElementById("player-score");
const score1 = document.getElementById("pc-score");
const elements = document.querySelector(".objects");
const playerWin = document.getElementById("playerScore");
const pcWin = document.getElementById("computerScore");

const btnScissors = document.getElementById("scissor");
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnReset = document.getElementById("button");

// Start elements

score0.textContent = 0;
score1.textContent = 0;
resultText.textContent = "";

let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let playing = true;
const choice = ["Scissor", "Paper", "Rock"];

// Function to calc the computer choice
const computerPlay = function (avv) {
  const random = Math.random();
  const position = random * avv.length;
  const trunc = Math.floor(position);
  return avv[trunc];
};

//function to calc the winner
const gamePlay = function (c1) {
  let computerSelect = computerPlay(c1);

  // Analize the choices and choose a winner

  if (playing) {
    if (playerSelection === "Scissor" && computerSelect === "Rock") {
      computerScore = computerScore + 1;
      score1.textContent = computerScore;
      console.log(`Computer Choice: ${computerSelect}`);
      resultText.textContent = "You Lose! Rock beats Scissor";
    } else if (playerSelection === "Scissor" && computerSelect === "Paper") {
      playerScore = playerScore + 1;
      score0.textContent = playerScore;
      console.log(`Computer Choice: ${computerSelect}`);
      resultText.textContent = "You Win! Scissor beats Paper";
    } else if (playerSelection === "Rock" && computerSelect === "Scissor") {
      playerScore = playerScore + 1;
      score0.textContent = playerScore;
      console.log(`Computer Choice: ${computerSelect}`);
      resultText.textContent = "You Win! Rock beats Scissor";
    } else if (playerSelection === "Rock" && computerSelect === "Paper") {
      computerScore = computerScore + 1;
      score1.textContent = computerScore;
      console.log(`Computer Choice: ${computerSelect}`);
      resultText.textContent = "You Lose! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelect === "Scissor") {
      computerScore = computerScore + 1;
      score1.textContent = computerScore;
      console.log(`Computer Choice: ${computerSelect}`);
      resultText.textContent = "You Lose! Scissor beats Paper";
    } else if (playerSelection === "Paper" && computerSelect === "Rock") {
      playerScore = playerScore + 1;
      score0.textContent = playerScore;
      console.log(`Computer Choice: ${computerSelect}`);
      resultText.textContent = "You Win! Paper beats Rock";
    } else if (
      (playerSelection === "Paper" && computerSelect === "Paper") ||
      (playerSelection === "Rock" && computerSelect === "Rock") ||
      (playerSelection === "Scissor" && computerSelect === "Scissor")
    ) {
      console.log(`Computer Choice: ${computerSelect}`);
      resultText.textContent = "It's a tie!";
    }
  }

  if (playerScore >= 5) {
    playing = 0;
    resultText.textContent = "YOU ARE THE WINNER!";
    playerWin.classList.add("winner");
  } else if (computerScore >= 5) {
    playing = 0;
    resultText.textContent = "YOU LOOSE!";
    pcWin.classList.add("winner");
  }

  console.log(`Player score ${playerScore}, Computer score ${computerScore}`);
};

btnReset.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  playerSelection = "";
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  resultText.textContent = "";

  playerWin.classList.remove("winner");
  pcWin.classList.remove("winner");
});

btnScissors.addEventListener("click", function () {
  playerSelection = "Scissor";

  gamePlay(choice);
});

btnRock.addEventListener("click", function () {
  playerSelection = "Rock";

  gamePlay(choice);
});

btnPaper.addEventListener("click", function () {
  playerSelection = "Paper";

  gamePlay(choice);
});

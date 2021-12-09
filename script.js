"use strict";

// Function to calc the computer choice
const computerPlay = function (avv) {
  const random = Math.random();
  const position = random * avv.length;
  const trunc = Math.floor(position);
  return avv[trunc];
};

//function to calc the winner
const gamePlay = function (c1) {
  let playerScore = 0;
  let computerScore = 0;

  // Loop for the five rounds
  for (let i = 1; i <= 5; i++) {
    // Summon the computer choice function
    let computerSelect = computerPlay(c1);

    let playerSelection = prompt(
      `Round: ${i}, Choose: Scissor, paper or Rock?`
    ); //Player choice

    // Analize the choices and choose a winner
    if (playerSelection === "Scissor" && computerSelect === "Rock") {
      computerScore = computerScore + 1;
      console.log(`Computer Choice: ${computerSelect}`);
      console.log(`You Lose! Rock beats Scissor`);
    } else if (playerSelection === "Scissor" && computerSelect === "Paper") {
      playerScore = playerScore + 1;
      console.log(`Computer Choice: ${computerSelect}`);
      console.log(`You Win! Scissor beats Paper`);
    } else if (playerSelection === "Rock" && computerSelect === "Scissor") {
      playerScore = playerScore + 1;
      console.log(`Computer Choice: ${computerSelect}`);
      console.log(`You Win! Rock beats Scissor`);
    } else if (playerSelection === "Rock" && computerSelect === "Paper") {
      computerScore = computerScore + 1;
      console.log(`Computer Choice: ${computerSelect}`);
      console.log(`You Lose! Paper beats Rock`);
    } else if (playerSelection === "Paper" && computerSelect === "Scissor") {
      computerScore = computerScore + 1;
      console.log(`Computer Choice: ${computerSelect}`);
      console.log(`You Lose! Scissor beats Paper`);
    } else if (playerSelection === "Paper" && computerSelect === "Rock") {
      playerScore = playerScore + 1;
      console.log(`Computer Choice: ${computerSelect}`);
      console.log(`You Win! Paper beats Rock`);
    } else if (
      (playerSelection === "Paper" && computerSelect === "Paper") ||
      (playerSelection === "Rock" && computerSelect === "Rock") ||
      (playerSelection === "Scissor" && computerSelect === "Scissor")
    ) {
      console.log(`Computer Choice: ${computerSelect}`);
      console.log(`It's a tie!`);
    }

    console.log(`Player score ${playerScore}, Computer score ${computerScore}`);
  }

  // Choose the winner
  if (playerScore > computerScore) {
    console.log(
      `YOU ARE THE WINNER! Final score: ${playerScore}, Computer score ${computerScore} `
    );
  } else if (computerScore > playerScore) {
    console.log(
      `YOU LOOSE! Final score: ${playerScore}, Computer score ${computerScore} `
    );
  } else {
    console.log(
      `IT'S A TIE! Final score: ${playerScore}, Computer score ${computerScore} `
    );
  }
};

//Computer choice
const choice = ["Scissor", "Paper", "Rock"];
const computerSelection = gamePlay(choice);

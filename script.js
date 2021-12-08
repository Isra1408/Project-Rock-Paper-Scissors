'use strict';


// Function to calc the computer choice
const computerPlay = function (avv){

    const random = Math.random();
    const position = random * avv.length;
    const trunc = Math.floor(position);
    return avv[trunc];
}

//function to calc the winner
const gamePlay = function (c1, p1){

    let playerScore = 0;
    let computerScore = 0;

    

    switch (c1) {

    case 'Scissor':
        if (c1 === 'Scissor' && p1 === 'Rock'){
            computerScore =+ i;
            console.log (`You Lose! Rock beats Scissor`);
            break;
        } else if (c1 === 'Scissor' && p1 === 'Paper') {
            playerScore =+ i;
            console.log (`You Win! Scissor beats Paper`);
            break;
     }

    default:
        console.log('Not a valid word');
    }
    

   /* 
    Player score ${playerScore}, Computer score ${computerScore}
    } else if (c1 === 'Scissor' && p1 === 'Paper') {
        return "You Win! Scissor beats Paper";
    } else if (c1 === 'Scissor' && p1 === 'Scissor') {
        return "It is a draw";
    }  else {
        return "Type a valid word"
    }const game = function (){

}
    */
} 




//Computer choice
const choice = ['Scissor', 'Paper', 'Rock'];
const computerSelection = computerPlay (choice);
console.log(computerSelection);

//Winner

let playerSelection = prompt('Choose: Scissor, paper or Rock?'); //Player choice


const final = gamePlay(playerSelection, computerSelection);
console.log (final);




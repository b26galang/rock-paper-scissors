//  Takes in user input
const prompt = require('prompt-sync')();
let player1Score = 0;
let player2Score = 0;
let round = 1;
let userInput;
function getUserChoice() {
    userInput = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Sorry, that move was not detected.');
        return null; // If the user's input is invalid
    }
};
// GOAL: Create a randomChoice function that returns a random selection of either "rock", "paper", or "scissors" every time the function is called.
function randomChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'Unexpected error.';
            break;
    }
};
// GOAL: Create a function called winner that takes two player choices of rock, paper, or scissors. The function should return the winner based on the two player choices.
function winner(userInput, randomChoice) {
    if (userInput === randomChoice) {
        return 'You tied';
    } else if ((userInput === 'rock' && randomChoice === 'paper') ||
               (userInput === 'paper' && randomChoice === 'scissors') ||
               (userInput === 'scissors' && randomChoice === 'rock')) {
        player2Score++; // Incrementing player2Score when player 2 wins
        return 'Player 2 wins!';
    } else {
        player1Score++; // Incrementing player1Score when player 1 wins
        return "You win!";
    }
};
function playGame() {
    console.log(`Round ${round}`);
    let userChoice;
    // If the input is null, promp the user to choose again and replay the round.
    do {
        userChoice = getUserChoice();
        if (userChoice === null) {
            console.log("Please enter a valid move (rock, paper, or scissors).");
        }
    } while (userChoice === null);
    let player2Choice = randomChoice();
    console.log(`You threw ${userChoice}`);
    console.log(`Player 2 threw ${player2Choice}`);
    console.log(winner(userChoice, player2Choice));
    console.log(`Score -> Player 1: ${player1Score} & Player 2: ${player2Score}`);
    round++;
};
// Welcome message
console.log("Welcome to the Rock Paper Scissors Game, here are the rules:");
console.log("You must achieve a minimum of six wins to claim the victory or have more wins than player 2 by the end of 10.");
// Runs for 10 rounds or if someone reaches 6 wins
while (round <= 10) {
    console.log();
    playGame();
};
if (player1Score > player2Score) {
    console.log("Congratulations, you win!");
} else if (player2Score > player1Score) {
    console.log("Better luck next time! Player 2 wins!");
} else {
    console.log("It's a tie! How about a rematch?");
};
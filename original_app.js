const SELECTIONS = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const randomSelection = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomSelection];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie game');
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        console.log('You lose! Paper covers Rock');
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        console.log('You lose! Scissors cuts Paper');
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        console.log('You lose! Rock beats Scissors');
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        console.log('You win! Rock beats Scissors');
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        console.log('You win! Paper covers Rock');
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        console.log('You win! Scissors cuts Paper');
    }
}

function result(playerScore, computerScore) {
    if (playerScore === computerScore) {
        return `It's a tie!`;
    } else if (playerScore > computerScore) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function game() {
    for (let i = 0; i <= 5; i++) {
        let playerSelection = prompt('Enter Rock, Paper, or Scissors: ').toLowerCase();
        const computerSelection = computerPlay();

        console.log("Computer plays " + computerSelection);

        playRound(playerSelection, computerSelection);
        console.log(playerScore);
        console.log(computerScore);
    }
}

game();
console.log(result(playerScore, computerScore));

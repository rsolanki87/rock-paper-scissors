const selectionButtons = document.querySelectorAll('.selection');
const getResults = document.querySelector('.results');
const getPlayerScore = document.querySelector('.user-score');
const getCompScore = document.querySelector('.computer-score');
const playerSign = document.querySelector('#playerSign');
const compSign = document.querySelector('#compSign');

const SELECTIONS = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const randomSelection = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomSelection];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a tie`);
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

function updateChoices(playerSelection, computerSelection) {
    const playerSignClassName = `fa-hand-${playerSelection}`;
    const compSignClassName = `fa-hand-${computerSelection}`;

    playerSign.classList = `fas ${playerSignClassName}` ;
    compSign.classList = `fas ${compSignClassName}`;
}

function result(playerScore, computerScore) {
    if(playerScore >= 5 && computerScore < 5) {
        alert(`Congratulations, You've Won!\nReload to play again`);
    } else if(playerScore < 5 && computerScore >= 5) {
        alert('Sorry, You Lose!\nReload to play again');
    }

    getPlayerScore.textContent = `${playerScore}`;
    getCompScore.textContent = `${computerScore}`;
}

function selections(playerSelection) {
    console.log(playerSelection);
}

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', (e) => {
        const playerSelection = e.currentTarget.id;
        selections(playerSelection);

        const computerSelection = computerPlay();
        console.log(computerSelection);

        playRound(playerSelection, computerSelection);
        
        updateChoices(playerSelection, computerSelection);

        result(playerScore, computerScore);
    });
});

const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('winner');
const buttons = document.getElementById('game-button');
const gameGrid = document.getElementById('game-area');

const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

for (let button of buttons) {
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-choice');
        playGame(playerChoice);
    });
    console.log(playGame);
}


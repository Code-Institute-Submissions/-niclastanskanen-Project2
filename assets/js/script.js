/**
 * DOM Elements and possible choices
 */
 const computerChoiceDisplay = document.getElementById('computer-choice')
 const userChoiceDisplay = document.getElementById('user-choice')
 const resultDisplay = document.getElementById('result')
 const randomChoices = document.querySelectorAll('.btn')
 let userChoice
 let computerChoice
 let result
 
 /**
  * For every button with className 'btn' for event listener for click
  * through a event and target correct ID and saving it to userChoice
  * and saving it in DOM. userChoice will be seen in userChoiceDisplay
  */
  randomChoices.forEach(randomChoice => randomChoice.addEventListener('click', (e) => {
     userChoice = e.target.id
     userChoiceDisplay.innerHTML = userChoice
     generateComputerChoice()
     getResult()
   }))
 
 /**
  * Generate computer choice with random number from 1-5
  * number is equal to name 
  */
 function generateComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 5) + 1 
   
   if (randomNumber === 1) {
     computerChoice = 'rock'
   }
   if (randomNumber === 2) {
     computerChoice = 'scissors'
   }
   if (randomNumber === 3) {
     computerChoice = 'paper'
   }
   if (randomNumber === 4) {
     computerChoice = 'spok'
   }
   if (randomNumber === 5) {
     computerChoice = 'lizard'
   }
   computerChoiceDisplay.innerHTML = computerChoice
 }
 
 /**
  * Computer & user choice with incresment in Score and result display message
  */
 function getResult() {
   if (computerChoice === userChoice) {
     result = 'its a draw!'
   }
   if (computerChoice === 'rock' && userChoice === 'scissors') {
     result = 'you lose!';
     incrementCompScore();
   }
   if (computerChoice === 'rock' && userChoice === 'lizard') {
     result = 'you lose!';
     incrementCompScore();
   }
   if (computerChoice === 'scissors' && userChoice === 'paper') {
     result = 'you lose!';
     incrementCompScore();
   }
   if (computerChoice === 'scissors' && userChoice === 'lizard') {
     result = 'you lose!';
     incrementCompScore();
   }
   if (computerChoice === 'paper' && userChoice === 'rock') {
     result = 'you lose!';
     incrementCompScore();
   }
   if (computerChoice === 'paper' && userChoice === 'spock') {
     result = 'you lose!';
     incrementCompScore();
   }
   if (computerChoice === 'spock' && userChoice === 'rock') {
     result = 'you lose!';
     incrementCompScore();
   }
   if (computerChoice === 'spock' && userChoice === 'scissors') {
     result = 'you lose!';
     incrementCompScore();
   }
   if (computerChoice === 'lizard' && userChoice === 'paper') {
     result = 'you lose!';
     incrementCompScore();
   }
   if (computerChoice === 'lizard' && userChoice === 'spock') {
     result = 'you lose!';
     incrementCompScore();
   }
   if (computerChoice === 'rock' && userChoice === 'paper') {
     result = 'you win!';
     incrementUserScore();
   }
   if (computerChoice === 'rock' && userChoice === 'spock') {
     result = 'you win!';
     incrementUserScore();
   }
   if (computerChoice === 'scissors' && userChoice === 'rock') {
     result = 'you win!';
     incrementUserScore();
   }
   if (computerChoice === 'scissors' && userChoice === 'spock') {
     result = 'you win!';
     incrementUserScore();
   }
   if (computerChoice === 'paper' && userChoice === 'scissors') {
     result = 'you win!';
     incrementUserScore();
   }
   if (computerChoice === 'paper' && userChoice === 'lizard') {
     result = 'you win!';
     incrementUserScore();
   }
   if (computerChoice === 'spock' && userChoice === 'paper') {
     result = 'you win!';
     incrementUserScore();
   }
   if (computerChoice === 'spock' && userChoice === 'lizard') {
     result = 'you win!';
     incrementUserScore();
   }
   if (computerChoice === 'lizard' && userChoice === 'rock') {
     result = 'you win!';
     incrementUserScore();
   }
   if (computerChoice === 'lizard' && userChoice === 'scissors') {
     result = 'you win!';
     incrementUserScore();
   }
   
   resultDisplay.innerHTML = result
 }

 /**
 * Incresment of score +1 
 * Add to old score with +1
 * Game is over at score 5.
 */
function incrementCompScore() {

    let oldScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++oldScore;
  if (oldScore == '5') {
    alert('You are trash!');
    resetAll();
  }
}  

function incrementUserScore() {
  let oldScore = parseInt(document.getElementById('user-score').innerText);
  document.getElementById('user-score').innerText = ++oldScore;
  if (oldScore == '5') {
    alert('You are the Rock Spock Dude!');
    resetAll();
  }
}

/**
 * Reset all and start from scratch
 */
 const resetChoice = document.getElementById('reset-btn').addEventListener('click', function () {
    document.getElementById('computer-choice').innerHTML = '';
    document.getElementById('user-choice').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('computer-score').innerHTML = '0';
    document.getElementById('user-score').innerHTML = '0';
});

function resetAll(){
    document.getElementById('computer-choice').innerHTML = '';
    document.getElementById('user-choice').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('computer-score').innerHTML = '0';
    document.getElementById('user-score').innerHTML = '0';
 } 
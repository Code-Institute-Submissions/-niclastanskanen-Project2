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
 * Computer & user choice with incresment in Score and message
 */
function getResult() 



/**
 * Incresment of score + Add to old score with +1
 * Game is over at score 5.
 */
 function incrementCompScore()

 function incrementUserScore() 


/**
 * Reset all and start over
 */
 function resetAll()

 
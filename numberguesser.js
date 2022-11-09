let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const compareGuesses = (human, computer, target) => {
  if (human > 9 || human< 0){
    alert('Please choose a different number');
  }
  if (getAbsoluteDistance(target, human) <= getAbsoluteDistance(target, computer)) {
    return true;
  } else {
    return false;
  }
  }

const updateScore = (winner) => {
  if (winner === 'human') {
    return humanScore++;
  } else if (winner === 'computer') {
    return computerScore++;
  }
}

const advanceRound = () => {
  return currentRoundNumber++;
}



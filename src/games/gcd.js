import {
  greeting, round, getRandomNumber, getCorrectReply, printFailText,
} from '../index.js';

let score = 0;

const getAnswer = (number1, number2) => {
  let max = Math.max(number1, number2);
  let min = Math.min(number1, number2);
  while (min) {
    const left = min;
    min = max % min;
    max = left;
  }
  return max;
};

const playGame = () => {
  const name = greeting('Find the greatest common divisor of given numbers.');
  while (score < 3) {
    const currentNumber1 = getRandomNumber(100);
    const currentNumber2 = getRandomNumber(100);
    const userAnswer = Number(round(`${currentNumber1} ${currentNumber2}`));
    const correctAnswer = getAnswer(currentNumber1, currentNumber2);
    const result = correctAnswer === userAnswer;
    if (result === true) {
      score += 1;
      console.log(getCorrectReply(score, name));
    } else {
      printFailText(name, userAnswer, correctAnswer);
      break;
    }
  }
};

export default playGame;

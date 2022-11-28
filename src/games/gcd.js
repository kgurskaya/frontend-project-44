import playGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getAnswer = (number1, number2) => {
  let max = Math.max(number1, number2);
  let min = Math.min(number1, number2);
  while (min) {
    const left = min;
    min = max % min;
    max = left;
  }
  return String(max);
};

const getGameData = () => {
  const currentNumber1 = getRandomNumber(100);
  const currentNumber2 = getRandomNumber(100);
  const question = `${currentNumber1} ${currentNumber2}`;
  const answer = getAnswer(currentNumber1, currentNumber2);
  return [question, answer];
};

const playGcd = () => {
  playGame(gameDescription, getGameData);
};

export default playGcd;

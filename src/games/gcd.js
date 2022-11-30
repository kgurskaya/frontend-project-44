import playGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let max = Math.max(number1, number2);
  let min = Math.min(number1, number2);
  while (min) {
    const left = min;
    min = max % min;
    max = left;
  }
  return max;
};

const maxRandomNumber = 100;

const getGameData = () => {
  const currentNumber1 = getRandomNumber(maxRandomNumber);
  const currentNumber2 = getRandomNumber(maxRandomNumber);
  const question = `${currentNumber1} ${currentNumber2}`;
  const answer = String(getGcd(currentNumber1, currentNumber2));
  return [question, answer];
};

const playGcd = () => {
  playGame(gameDescription, getGameData);
};

export default playGcd;

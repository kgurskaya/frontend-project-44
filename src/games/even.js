import playGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const maxRandomNumber = 100;

const getGameData = () => {
  const question = getRandomNumber(maxRandomNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const playEven = () => {
  playGame(gameDescription, getGameData);
};

export default playEven;

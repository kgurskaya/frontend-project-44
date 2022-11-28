import playGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// eslint-disable-next-line max-len
const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const isPrime = (number) => prime.includes(number);

const getGameData = () => {
  const question = getRandomNumber(100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const playPrime = () => {
  playGame(gameDescription, getGameData);
};

export default playPrime;

import playGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) return false;
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomNumber(100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const playPrime = () => {
  playGame(gameDescription, getGameData);
};

export default playPrime;

import {
  greeting, round, getRandomNumber, getCorrectReply, printFailText,
} from '../index.js';

let score = 0;

const getOpposite = (word) => (word === 'yes' ? 'no' : 'yes');

// eslint-disable-next-line max-len
const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const isPrime = (number) => (prime.includes(number) ? 'yes' : 'no');

const playGame = () => {
  const name = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (score < 3) {
    const RandomNumber = getRandomNumber(100);
    const userAnswer = round(RandomNumber);
    const result = isPrime(RandomNumber) === userAnswer;
    if (result === true) {
      score += 1;
      console.log(getCorrectReply(score, name));
    } else {
      printFailText(name, userAnswer, getOpposite(userAnswer));
      break;
    }
  }
};

export default playGame;

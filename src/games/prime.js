import { greeting, round, getRandomNumber } from '../index.js';

const getOpposite = (word) => (word === 'yes' ? 'no' : 'yes');

// eslint-disable-next-line max-len
const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const isPrime = (number) => (prime.includes(number) ? 'yes' : 'no');

const getCorrectReply = (score, name) => {
  if (score === 3) {
    return `Congratulations, ${name}!`;
  }
  return 'Correct!';
};

const playGame = () => {
  const name = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  let score = 0;
  while (score < 3) {
    const currentRandomNumber = getRandomNumber(100);
    const userAnswer = round(currentRandomNumber);
    const result = isPrime(currentRandomNumber) === userAnswer;
    if (result === true) {
      score += 1;
      console.log(getCorrectReply(score, name));
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getOpposite(userAnswer)}'.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};

export default playGame;

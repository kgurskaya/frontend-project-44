import { greeting, round, getRandomNumber } from '../index.js';

const getOpposite = (word) => (word === 'yes' ? 'no' : 'yes');

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const playGame = () => {
  const name = greeting('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;
  while (score < 3) {
    const currentRandomNumber = getRandomNumber(100);
    const userAnswer = round(currentRandomNumber);
    const result = isEven(currentRandomNumber) === userAnswer;
    if (result === true) {
      score += 1;
      if (score === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getOpposite(userAnswer)}.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};

export default playGame;

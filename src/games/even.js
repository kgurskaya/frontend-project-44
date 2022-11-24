import {
  greeting, round, getRandomNumber, getCorrectReply, printFailText,
} from '../index.js';

let score = 0;
const roundCount = 3;

const getOpposite = (word) => (word === 'yes' ? 'no' : 'yes');

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const playGame = () => {
  const name = greeting('Answer "yes" if the number is even, otherwise answer "no".');
  while (score < roundCount) {
    const currentRandomNumber = getRandomNumber(100);
    const userAnswer = round(currentRandomNumber);
    const result = isEven(currentRandomNumber) === userAnswer;
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

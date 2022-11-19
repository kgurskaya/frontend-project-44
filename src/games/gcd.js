import { greeting, round, getRandomNumber } from '../index.js';

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
  let score = 0;
  while (score < 3) {
    const currentNumber1 = getRandomNumber(100);
    const currentNumber2 = getRandomNumber(100);
    const userAnswer = Number(round(`${currentNumber1} ${currentNumber2}`));
    const correctAnswer = getAnswer(currentNumber1, currentNumber2);
    const result = correctAnswer === userAnswer;
    if (result === true) {
      score += 1;
      if (score === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};

export default playGame;

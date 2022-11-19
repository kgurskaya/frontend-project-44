import { greeting, round, getRandomNumber } from '../index.js';

const operand = ['+', '-', '*'];

const getRandomOperand = () => operand[getRandomNumber(operand.length)];

const calc = (number1, symbol, number2) => {
  if (symbol === '+') {
    return number1 + number2;
  } if (symbol === '-') {
    return number1 - number2;
  } if (symbol === '*') {
    return number1 * number2;
  }
  return null;
};
const playGame = () => {
  const name = greeting('What is the result of the expression?');
  let score = 0;
  while (score < 3) {
    const currentNumber1 = getRandomNumber(10);
    const currentNumber2 = getRandomNumber(10);
    const currentOperand = getRandomOperand();
    const userAnswer = Number(round(`${currentNumber1} ${currentOperand} ${currentNumber2}`));
    const correctAnswer = calc(currentNumber1, currentOperand, currentNumber2);
    const result = correctAnswer === userAnswer;
    if (result === true) {
      score += 1;
      if (score === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};

export default playGame;

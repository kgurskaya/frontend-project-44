import playGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const gameDescription = 'What is the result of the expression?';

const calc = (number1, symbol, number2) => {
  switch (symbol) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      throw new Error('Operand is unknown');
  }
};

const operand = ['+', '-', '*'];

const getRandomOperand = () => operand[getRandomNumber(operand.length)];

function getGameData() {
  const currentOperand = getRandomOperand();
  const currentNumber1 = getRandomNumber(10);
  const currentNumber2 = getRandomNumber(10);
  const question = `${currentNumber1} ${currentOperand} ${currentNumber2}`;
  const answer = calc(currentNumber1, currentOperand, currentNumber2);
  return [question, answer];
}

function playCalc() {
  playGame(gameDescription, getGameData);
}

export default playCalc;

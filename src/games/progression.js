import playGame from '../index.js';
import { getRandomNumber, getRandomNumberBetween } from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

const maxRandomNumber = 100;
const minIncrement = 1;
const maxIncrement = 10;
const minLength = 5;
const maxLength = 10;

const getProgression = () => {
  const start = getRandomNumber(maxRandomNumber);
  const randomIncrement = getRandomNumberBetween(minIncrement, maxIncrement);
  const result = [start];
  for (let i = 0; i < getRandomNumberBetween(minLength, maxLength); i += 1) {
    result.push(result[result.length - 1] + randomIncrement);
  }
  const randomIndex = getRandomNumberBetween(0, result.length);
  const correctAnswer = String(result[randomIndex]);
  result[randomIndex] = '..';
  return {
    correctAnswer,
    progression: result.join(' '),
  };
};

const getGameData = () => {
  const progression = getProgression();
  const question = progression.progression;
  const answer = progression.correctAnswer;
  return [question, answer];
};

const playProgression = () => {
  playGame(gameDescription, getGameData);
};

export default playProgression;

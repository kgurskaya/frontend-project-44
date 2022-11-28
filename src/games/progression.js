import playGame from '../index.js';
import { getRandomNumber, getRandomNumberBetween } from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const start = getRandomNumber(100);
  const randomIncrement = getRandomNumberBetween(1, 10);
  const result = [start];
  for (let i = 0; i < getRandomNumberBetween(5, 10); i += 1) {
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

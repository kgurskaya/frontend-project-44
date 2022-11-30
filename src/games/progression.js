import playGame from '../index.js';
import { getRandomNumber, getRandomNumberBetween } from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

const maxRandomNumber = 100;
const minIncrement = 1;
const maxIncrement = 10;
const minLength = 5;
const maxLength = 10;

const getProgression = (start, randomIncrement) => {
  const result = [start];
  for (let i = 0; i < getRandomNumberBetween(minLength, maxLength); i += 1) {
    result.push(result[result.length - 1] + randomIncrement);
  }
  return result;
};

const hideNumber = (progression) => {
  const result = progression;
  const randomIndex = getRandomNumberBetween(0, result.length);
  const hidden = String(result[randomIndex]);
  result[randomIndex] = '..';
  return [result.join(' '), hidden];
};

const getGameData = () => {
  const start = getRandomNumber(maxRandomNumber);
  const randomIncrement = getRandomNumberBetween(minIncrement, maxIncrement);
  const progression = getProgression(start, randomIncrement);
  const [question, answer] = hideNumber(progression);
  return [question, answer];
};

const playProgression = () => {
  playGame(gameDescription, getGameData);
};

export default playProgression;

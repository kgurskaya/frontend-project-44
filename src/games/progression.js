import playGame from '../index.js';
import { getRandomNumber, getRandomNumberBetween } from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

const maxRandomNumber = 100;
const minIncrement = 1;
const maxIncrement = 10;
const minLength = 5;
const maxLength = 10;

const getProgression = (start, randomIncrement, progressionLength) => {
  const result = [start];
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(result[result.length - 1] + randomIncrement);
  }
  return result;
};

const hideNumber = (progression, indexToHide) => {
  const result = [...progression];
  const hidden = String(result[indexToHide]);
  result[indexToHide] = '..';
  return [result.join(' '), hidden];
};

const getGameData = () => {
  const start = getRandomNumber(maxRandomNumber);
  const randomIncrement = getRandomNumberBetween(minIncrement, maxIncrement);
  const progressionLength = getRandomNumberBetween(minLength, maxLength);
  const progression = getProgression(start, randomIncrement, progressionLength);
  const indexToHide = getRandomNumberBetween(0, progression.length);
  return hideNumber(progression, indexToHide);
};

const playProgression = () => {
  playGame(gameDescription, getGameData);
};

export default playProgression;

import {
  greeting, round, getRandomNumber, getRandomNumberBetween,
} from '../index.js';

const getProgression = () => {
  const start = getRandomNumber(100);
  const randomIncrement = getRandomNumber(10);
  const result = [start];
  for (let i = 0; i < getRandomNumberBetween(5, 10); i += 1) {
    result.push(result[result.length - 1] + randomIncrement);
  }
  const randomIndex = getRandomNumberBetween(0, result.length);
  const correctAnswer = result[randomIndex];
  result[randomIndex] = '..';
  return {
    correctAnswer,
    pregression: result.join(' '),
  };
};

const playGame = () => {
  const name = greeting('What number is missing in the progression?');
  let score = 0;
  while (score < 3) {
    const progression = getProgression();
    const userAnswer = Number(round(`${progression.pregression}`));
    const result = progression.correctAnswer === userAnswer;
    if (result === true) {
      score += 1;
      if (score === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${progression.correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default playGame;

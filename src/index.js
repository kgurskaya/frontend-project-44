import readlineSync from 'readline-sync';

export const getRandomNumber = (max) => Math.floor(Math.random() * max);
export const getRandomNumberBetween = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
};

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const greeting = (currentGameIntroText) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(currentGameIntroText);
  return name;
};

export const round = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getCorrectReply = (score, name) => {
  if (score === 3) {
    return `Congratulations, ${name}!`;
  }
  return 'Correct!';
};

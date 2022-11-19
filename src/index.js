import readlineSync from 'readline-sync';

export const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

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

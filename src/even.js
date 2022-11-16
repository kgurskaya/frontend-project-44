import readlineSync from 'readline-sync';

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

const round = () => {
  const randomNumber = getRandomNumber(100);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  return (randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no');
};

export const playGame = () => {
  let score = 0;
  while (score < 3) {
    if (round() === true) {
      score += 1;
    } else {
      console.log('failed');
      break;
    }
  }
};

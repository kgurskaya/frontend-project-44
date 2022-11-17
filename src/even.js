import readlineSync from 'readline-sync';

let name = 'none';

const getOpposite = (word) => (word === 'yes' ? 'no' : 'yes');

export const askName = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const round = (number) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const playGame = () => {
  let score = 0;
  while (score < 3) {
    const currentRandomNumber = getRandomNumber(100);
    const userAnswer = round(currentRandomNumber);
    const result = isEven(currentRandomNumber) === userAnswer;
    if (result === true) {
      score += 1;
      if (score === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getOpposite(userAnswer)}.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};

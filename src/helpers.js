export const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const getRandomNumberBetween = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
};

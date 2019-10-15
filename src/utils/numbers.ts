interface IGetRandomNumber {
  (min?: number, max?: number): number,
}

export const DEFAULT_MIN_INT = 1;
export const DEFAULT_MAX_INT = 10;
export const DEFAULT_MIN_FRACTIONAL = 0;
export const DEFAULT_MAX_FRACTIONAL = 1;

export const getRandomFractional: IGetRandomNumber = (
  min = DEFAULT_MIN_FRACTIONAL,
  max = DEFAULT_MAX_FRACTIONAL,
) => {
  if (min > max) {
    return Math.random() * (min - max) + max;
  }

  return Math.random() * (max - min) + min;
};

export const getRandomInt: IGetRandomNumber = (min = DEFAULT_MIN_INT, max = DEFAULT_MAX_INT) => {
  if (min > max) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

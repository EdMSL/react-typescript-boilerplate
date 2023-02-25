import {
  DEFAULT_MIN_INT,
  DEFAULT_MAX_INT,
  DEFAULT_MIN_FRACTIONAL,
  DEFAULT_MAX_FRACTIONAL,
  getRandomInt,
  getRandomFractional,
} from '$utils/numbers';

/* eslint-disable func-names, prefer-arrow-callback, @typescript-eslint/no-magic-numbers, @typescript-eslint/explicit-function-return-type, max-len, no-plusplus */
describe('Returns a random integer in the given range', function () {
  it(`return true if number is greater than or equal to default min ${DEFAULT_MIN_INT} and is less than or equal to default max ${DEFAULT_MAX_INT}`, function () {
    for (let i = 0; i < 50; i++) {
      expect((function () {
        const number = getRandomInt();
        return number >= DEFAULT_MIN_INT && number <= DEFAULT_MAX_INT;
      })()).toBe(true);
    }
  });

  it('return true if number is greater than or equal to 20 and is less than or equal to 50', function () {
    for (let i = 0; i < 50; i++) {
      expect((function () {
        const number = getRandomInt(20, 50);
        return number >= 20 && number <= 50;
      })()).toBe(true);
    }
  });

  it('return true if number is greater than or equal to 15 and is less than or equal to 39', function () {
    for (let i = 0; i < 50; i++) {
      expect((function () {
        const number = getRandomInt(39, 15);
        return number >= 15 && number <= 39;
      })()).toBe(true);
    }
  });
  it('return true if number is greater than or equal to -35 and is less than or equal to -8', function () {
    for (let i = 0; i < 50; i++) {
      expect((function () {
        const number = getRandomInt(-35, -8);
        return number >= -35 && number <= -8;
      })()).toBe(true);
    }
  });
  it(`return true if number is greater than or equal to default max ${DEFAULT_MAX_INT} and is less than or equal to 64`, function () {
    for (let i = 0; i < 50; i++) {
      expect((function () {
        const number = getRandomInt(64);
        return number >= DEFAULT_MAX_INT && number <= 64;
      })()).toBe(true);
    }
  });
});

describe('Returns a random fractional number in the given range', function () {
  it(`return true if number is greater than or equal to to default min ${DEFAULT_MIN_FRACTIONAL} and is less than or equal to default max ${DEFAULT_MAX_FRACTIONAL}`, function () {
    for (let i = 0; i < 50; i++) {
      expect((function () {
        const number = getRandomFractional();
        return number >= DEFAULT_MIN_FRACTIONAL && number <= DEFAULT_MAX_FRACTIONAL;
      })()).toBe(true);
    }
  });
  it('return true if number is greater than or equal to 5 and is less than or equal to 7', function () {
    for (let i = 0; i < 50; i++) {
      expect((function () {
        const number = getRandomFractional(5, 7);
        return number >= 5 && number <= 7;
      })()).toBe(true);
    }
  });
  it('return true if number is greater than or equal to 2 and is less than or equal to 6', function () {
    for (let i = 0; i < 50; i++) {
      expect((function () {
        const number = getRandomFractional(6, 2);
        return number >= 2 && number <= 6;
      })()).toBe(true);
    }
  });
  it('return true if number is greater than or equal to -6 and is less than or equal to -3', function () {
    for (let i = 0; i < 50; i++) {
      expect((function () {
        const number = getRandomFractional(-6, -3);
        return number >= -6 && number <= -3;
      })()).toBe(true);
    }
  });
  it(`return true if number is greater than or equal to default max ${DEFAULT_MAX_FRACTIONAL} and is less than or equal to 3`, function () {
    for (let i = 0; i < 50; i++) {
      expect((function () {
        const number = getRandomFractional(3);
        return number >= DEFAULT_MAX_FRACTIONAL && number <= 3;
      })()).toBe(true);
    }
  });
});

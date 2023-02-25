/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^[$]{1}utils\/(.*)": "<rootDir>/src/utils/$1",
  },
};

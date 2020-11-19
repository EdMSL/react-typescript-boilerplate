module.exports = {
  extension: ['js', 'ts'],
  spec: ['src/tests/*'],
  require: ['ts-node/register', 'tsconfig-paths/register'],
  reporter: 'spec',
  opts: false,
};

module.exports = {
  roots: ['<rootDir>/test'],
  testRegex: 'test/(.+)_test\\.(jsx?|tsx?)$', // go style e.g. testname_test.ts
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}

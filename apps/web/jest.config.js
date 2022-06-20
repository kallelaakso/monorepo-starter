const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/routers/(.*)$': '<rootDir>/src/routers/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}

module.exports = createJestConfig(customJestConfig)
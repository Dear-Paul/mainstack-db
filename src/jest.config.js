// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jsdom', // Use JSDOM for DOM testing
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Setup file for Testing Library matchers
  testMatch: ['**/?(*.)+(test).+(ts|tsx)'], // Match test files
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest to transpile TypeScript/JSX
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock image imports
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['/node_modules/'], // Ensure node_modules are not transformed (unless needed)
};

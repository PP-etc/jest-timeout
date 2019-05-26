const { defaults: tsJestConfig } = require("ts-jest/presets");

module.exports = {
  ...tsJestConfig,
  preset: "@wordpress/jest-preset-default",
  globals: {
    "ts-jest": {
      babelConfig: false,
      tsConfig: "./tsconfig.jest.json"
    }
  },
  modulePaths: ["<rootDir>"],
  testPathIgnorePatterns: ["node_modules", "e2e"],
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
};

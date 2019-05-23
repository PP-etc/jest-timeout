const { defaults: tsJestConfig } = require("ts-jest/presets");

module.exports = {
  ...tsJestConfig,
  transform: {
    ...tsJestConfig.transform,
  },
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

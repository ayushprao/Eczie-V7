/** @type {import('jest').Config} */
module.exports = {
  preset: "react-native",
  testEnvironment: "node",
  roots: ["<rootDir>/Frontend/src", "<rootDir>/Backend/convex"],
  testMatch: ["**/__tests__/**/*.test.ts", "**/__tests__/**/*.test.tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|webp|svg)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
  transformIgnorePatterns: ["node_modules/(?!(react-native|@react-native|@testing-library/react-native)/)"],
  clearMocks: true,
};

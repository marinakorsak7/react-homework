module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
      '\\.(css|scss|sass)$': 'identity-obj-proxy', // Мапит CSS/SCSS файлы на объекты
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Обрабатывает TS/TSX файлы
    },
  };
  
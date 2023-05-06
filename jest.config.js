module.exports = {
    testEnvironment: 'jsdom',
    rootDir: '.',
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/setupJest.js'],
  }


//   As for the Jest config file, I just needed it to use jsdom and set the right directories.
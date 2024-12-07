module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transformIgnorePatterns: [
        // Transform everything except react-native-related packages
        'node_modules/(?!(react-native|@react-native|@react-native-community|@testing-library)/)',
    ],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$':['babel-jest', { configFile: './.babelrc' }],
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

// module.exports = {
//     preset: 'react-native',
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//     transformIgnorePatterns: [
//         'node_modules/(?!(react-native|@react-native|@react-native-community|@testing-library)/)',
//     ],
//     transform: {
//         '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
//     },
//     moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
// };

module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native|@react-native-community|@testing-library)/)',
    ],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.js' }]
    }
};

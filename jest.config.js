module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['/node_modules/(?!.*@portal/)'],
    testPathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],
    coveragePathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],
};

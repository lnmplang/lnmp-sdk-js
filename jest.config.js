module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/packages'],
    testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).ts'],
    collectCoverageFrom: [
        'packages/*/src/**/*.ts',
        '!packages/*/src/**/*.d.ts',
        '!packages/*/src/**/index.ts',
    ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
    moduleNameMapper: {
        '^@lnmp/lnmp$': '<rootDir>/packages/lnmp/src',
        '^@lnmp/wasm-bindings$': '<rootDir>/packages/wasm-bindings/src',
    },
};

module.exports = {
    transform: {
        '^.+\.svelte$': ["svelte-jester", { "preprocess": true }],
        '^.+\.js$': require.resolve("babel-jest"),
        '^.+\.ts$': "ts-jest",
    },
    moduleFileExtensions: [
        "ts",
        "js",
        "mjs",
        "svelte",
    ],
    moduleNameMapper: {
        "^regexparam$": "<rootDir>/node_modules/.pnpm/regexparam@1.3.0/node_modules/regexparam/dist/regexparam.mjs"
    },
    transformIgnorePatterns: [
        'node_modules/(?!(.*(svelte-spa-router|regexparam))/)',
    ],
};

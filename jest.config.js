module.exports = {
    "roots": [
        "./"
    ],
    "moduleDirectories": [
        "node_modules",
        "src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/test/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx"
    ]
};
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
        "node": true,
        "commonjs": true,


    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },    
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",        
    },
    "rules": {
        "no-console": "off",
        "no-debugger": "off",
        "no-unused-vars": "warn",
        "no-self-assign": "off",
        "no-redeclare": "off",
        "no-undef": "off",
        "for-direction": "off",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
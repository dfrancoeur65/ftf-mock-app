module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "strict": 0,
        "react/destructuring-assignment":[0,"always",{"ignoreClassFields":true}],
        "arrow-parens": ["error","as-needed"],
        "comma-dangle": ["error","never"],
        "eqeqeq": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-param-reassign": ["error", { "props": false }],
        "max-lines": ["error", {"max": 800, "skipBlankLines": true, "skipComments": true}],
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to" ]
        }],
        "jsx-a11y/label-has-for": 0,
        "no-underscore-dangle": 0,
        "camelcase": 0,
        "react/forbid-prop-types": 0
    }
};

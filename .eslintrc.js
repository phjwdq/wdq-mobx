module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8,
        "impliedStrict": true,
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "globals": {
        "feRoot": false,
        "socketPath": false,
        "process": false,
        "apiPath": false,
        "$": false,
        "wx": false,
        "shareLogo": false
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-vars": 2,
        "indent": [2, 4],
        "linebreak-style": [2, "unix"],
        "quotes": [2, "single"],
        "semi": [2, "never"],
        "spaced-comment": [2, "always"],
        "no-var": 2,
        "no-trailing-spaces": 2,
        "no-spaced-func": 2,
        "no-irregular-whitespace": 2,
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-caller": 2,
        "no-continue": 2,
        "no-div-regex": 2,
        "no-else-return": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-parens": 2,
        "no-floating-decimal": 2,
        "no-implicit-coercion": [
            2,
            {
                "allow": ["!!", "~", '+']
            }
        ],
        "no-implied-eval": 2,
        "no-inline-comments": 2,
        "no-invalid-this": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-lonely-if": 2,
        "no-loop-func": 2,
        "no-mixed-requires": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-multiple-empty-lines": 2,
        "no-native-reassign": 2,
        "no-negated-in-lhs": 2,
        "no-nested-ternary": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-wrappers": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 2,
        "no-path-concat": 2,
        "no-plusplus": 2,
        "no-process-env": 2,
        "no-process-exit": 2,
        "no-proto": 2,
        "no-restricted-modules": 2,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-throw-literal": 2,
        "no-undef-init": 2,
        "no-undefined": 2,
        "no-underscore-dangle": [
            2,
            {
                "allowAfterThis": true,
                "allowAfterSuper": true
            }
        ],
        "no-unneeded-ternary": 2,
        "no-unused-expressions": 2,
        "no-use-before-define": 2,
        "no-useless-call": 2,
        "no-warning-comments": [
            2,
            {
                "terms": ["todo", "fixme"],
                "location": "anywhere"
            }
        ],
        "no-with": 2,
        "array-bracket-spacing": 2,
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": 2,
        "accessor-pairs": 0,
        "block-scoped-var": 2,
        "brace-style": [2, "stroustrup"],
        "callback-return": 2,
        "camelcase": 0,
        "comma-dangle": [2, "never"],
        "comma-spacing": 2,
        "comma-style": 2,
        "complexity": [1, 21],
        "computed-property-spacing": [2, "never"],
        "consistent-return": 2,
        "consistent-this": [2, "me"],
        "curly": 2,
        "default-case": 2,
        "dot-location": 2,
        "dot-notation": 2,
        "eol-last": [2, "always"],
        "eqeqeq": 2,
        "func-names": [2, "always"],
        "func-style": [0, "declaration"],
        "generator-star-spacing": 2,
        "guard-for-in": 2,
        "handle-callback-err": 2,
        "id-length": 2,
        "init-declarations": [2, "always"],
        "key-spacing": 2,
        "lines-around-comment": 2,
        "max-depth": [2, 3],
        "max-len": [2, 120, 4],
        "max-nested-callbacks": [2, 3],
        "max-params": [2, 3],
        "max-statements": [2, 25],
        "new-cap": 2,
        "new-parens": 2,
        "padding-line-between-statements": 2,
        "object-curly-spacing": [2, "never"],
        "object-shorthand": [2, "consistent-as-needed"],
        "one-var": [2, "never"],
        "operator-assignment": 2,
        "operator-linebreak": [2, "before"],
        "padded-blocks": [2, "never"],
        "prefer-const": 2,
        "prefer-spread": 2,
        "quote-props": [2, "as-needed", {"keywords": true}],
        "radix": 2,
        "id-match": 0,
        "sort-vars": 0,
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [
            2,
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": 2,
        "keyword-spacing": 2,
        "space-infix-ops": [
            2,
            {
                "int32Hint": false
            }
        ],
        "space-unary-ops": [
            2,
            {
                "words": true,
                "nonwords": false
            }
        ],
        "valid-jsdoc": 0,
        "vars-on-top": 2,
        "wrap-iife": [2, "inside"],
        "wrap-regex": [0, "always"],
        "yoda": [2, "never"],
        "no-case-declarations": 1
    }
}

const importConfig = {
    extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
    rules: {
        'import/no-unresolved': [
            2,
            {
                commonjs: true,
                amd: true,
            },
        ],
        'import/namespace': 2,
        'import/default': 2,
        'import/export': 2,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-extraneous-dependencies': [0],
        'import/named': [0],
        'import/prefer-default-export': [0],
        'import/no-named-as-default': 'warn',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
            },
        },
    },
};

const jestConfig = {
    extends: ['plugin:jest/recommended'],
};

const typeScriptConfig = {
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
    rules: {
        '@typescript-eslint/ban-ts-comment': [0],
        '@typescript-eslint/explicit-function-return-type': [0],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unsafe-call': [1],
        '@typescript-eslint/no-unsafe-member-access': [1],
        '@typescript-eslint/no-unsafe-return': [1],
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/prefer-optional-chain': ['error'],
        '@typescript-eslint/restrict-template-expressions': [1],
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
    },
};

const jsdocConfig = {
    extends: ['plugin:jsdoc/recommended'],
    rules: {
        'jsdoc/require-param-type': [0],
        'jsdoc/require-returns': [0],
        'jsdoc/require-param': [1],
        'jsdoc/require-param-description': [1],
    },
};

const prettierConfig = {
    extends: ['plugin:prettier/recommended'],
    // rules for https://github.com/prettier/eslint-plugin-prettier
    rules: {
        'prettier/prettier': [
            'error',
            {
                bracketSpacing: true,
                jsxBracketSameLine: true,
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'es5',
            },
        ],
    },
};

const basicConfig = {
    extends: ['airbnb', 'plugin:promise/recommended'],
    rules: {
        camelcase: [
            'error',
            {
                ignoreImports: true,
                allow: ['^UNSAFE_'],
            },
        ],
        'explicit-function-return-type': 0,
        'class-methods-use-this': 0,
        'global-require': [0],
        'comma-dangle': 0,
        'prefer-destructuring': 0,
        'no-use-before-define': 'off',
        'no-shadow': 'off',
    },
};

export default {
    extends: [
        ...basicConfig.extends,
        ...importConfig.extends,
        ...jestConfig.extends,
        ...typeScriptConfig.extends,
        ...jsdocConfig.extends,
        ...prettierConfig.extends,
    ],
    rules: {
        ...importConfig.rules,
        ...typeScriptConfig.rules,
        ...jsdocConfig.rules,
        ...basicConfig.rules,
        ...prettierConfig.rules,
    },
    settings: {
        ...importConfig.settings,
    },
};

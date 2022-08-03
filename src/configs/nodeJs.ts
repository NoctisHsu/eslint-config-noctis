// rules for https://github.com/prettier/eslint-plugin-prettier

const nodeJsConfig = {
    extends: ['plugin:node/recommended'],
    rules: {
        'node/exports-style': ['error', 'module.exports'],
        'node/no-missing-import': [0],
        'node/no-unsupported-features/es-syntax': [0],
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'node/prefer-global/url': ['error', 'always'],
        'node/prefer-global/url-search-params': ['error', 'always'],
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/camelcase': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/prefer-optional-chain': 'off',
                '@typescript-eslint/restrict-template-expressions': 'off',
            },
        },
    ],
};

export default nodeJsConfig;

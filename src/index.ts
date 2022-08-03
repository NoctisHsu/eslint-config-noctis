import reactConfig from './configs/react';
import commonSetting from './configs/common';
import nodeJsConfig from './configs/nodeJs';

const basicLintRules = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'typescript-sort-keys', 'promise', 'import', 'jest', 'jsdoc'],
    extends: commonSetting.extends,
    env: {
        node: true,
        browser: true,
        es6: true,
        commonjs: true,
        jest: true,
    },
    rules: commonSetting.rules,
    settings: commonSetting.settings,
};

/**
 * react + nodejs 使用的 lint rule 設定
 */
const combinedLintRules = {
    ...basicLintRules,
    extends: [...basicLintRules.extends, ...nodeJsConfig.extends, ...reactConfig.extends],
    parserOptions: {
        ...basicLintRules.parserOptions,
        ...reactConfig.parserOptions,
    },
    rules: {
        ...basicLintRules.rules,
        ...nodeJsConfig.rules,
        ...reactConfig.rules,
    },
    settings: {
        ...basicLintRules.settings,
        ...reactConfig.settings,
    },
    overrides: nodeJsConfig.overrides,
};

/**
 * nodejs 使用的 lint rule 設定
 */
const nodeJsLintRules = {
    ...basicLintRules,
    extends: [...basicLintRules.extends, ...nodeJsConfig.extends],
    rules: {
        ...basicLintRules.rules,
        ...nodeJsConfig.rules,
    },
    settings: basicLintRules.settings,
    overrides: nodeJsConfig.overrides,
};

/**
 * react 使用的 lint rule 設定
 */
const reactLintRules = {
    ...basicLintRules,
    parserOptions: {
        ...basicLintRules.parserOptions,
        ...reactConfig.parserOptions,
    },
    extends: [...basicLintRules.extends, ...reactConfig.extends],
    rules: {
        ...basicLintRules.rules,
        ...reactConfig.rules,
    },
    settings: {
        ...basicLintRules.settings,
        ...reactConfig.settings,
    },
};

module.exports = {
    basicLintRules,
    combinedLintRules,
    nodeJsLintRules,
    reactLintRules,
};

## Documentation Shareable Configs

* Why not just use the tslint?
    
    The typeScript team shared their roadmap in which they described formally adopting ESLint in their repo and working to improve TypeScript compatibility for ESLint.

* Dependency packages:
  * eslint: The core ESLint linting library
  * @typescript-eslint/parser: The parser that will allow ESLint to lint TypeScript code
  * @typescript-eslint/eslint-plugin: A plugin that contains a bunch of ESLint rules that are TypeScript specific.


## Installation

Install the package with

```bash
# TypeScript or JavaScript Project
yarn add --dev eslint-config-noctis

# NodeJS Project
yarn add --dev eslint-config-noctis eslint-plugin-node

# ReactJS Project
yarn add --dev eslint-config-noctis eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

# ReactJS and NodeJS Project
yarn add --dev eslint-config-noctis  eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-node


```



restart your code editor

## Lint Setup

Now add the config to either the `.eslintrc.js`:

```js
// for TypeScript or JavaScript Project
const { basicLintRules } = require("eslint-config-noctis");
module.exports = {
    ...basicLintRules,
    parserOptions: {
        ...basicLintRules.parserOptions,
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
};

// for NodeJS Project
const { nodeJsLintRules } = require("eslint-config-noctis");
module.exports = {
    ...nodeJsLintRules,
    parserOptions: {
        ...nodeJsLintRules.parserOptions,
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
};

// for React Project
const { reactLintRules } = require("eslint-config-noctis");
module.exports = {
    ...reactLintRules,
    parserOptions: {
        ...reactLintRules.parserOptions,
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
};

// for React and NodeJS Project
const { combinedLintRules } = require("eslint-config-noctis");
module.exports = {
    ...combinedLintRules,
    parserOptions: {
        ...combinedLintRules.parserOptions,
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
};

```

## ESLint and Prettier

- This ESLint configuration can work together with Prettier, thanks to [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

- To resolve the rule conflict problem with Prettier and ESLint, we use 
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
Turn off all rules that are unnecessary or might conflict with Prettier.


## Coding style

- The ESLint rules are based on the great work of [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- The Airbnb lint plugin
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

- More lint plugins:

  * prettier/@typescript-eslint
  * prettier/recommended
  * import/errors
  * import/warnings
  * node/recommended

## using autofix with vscode

Install Vscode ESLint extension

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Add eslint auto-fix configs to .vscode/setting.json
``` json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```

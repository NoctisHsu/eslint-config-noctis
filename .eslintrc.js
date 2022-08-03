const { combinedLintRules } = require("./out/index");
module.exports = {
  ...combinedLintRules,
  parserOptions: {
    ...combinedLintRules.parserOptions,
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["webpack.config.js", "test/**/*.js"],
      rules: {
        "node/no-unpublished-require": "off",
      },
    },
  ],
};

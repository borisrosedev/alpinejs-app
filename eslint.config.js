// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js", "**/*.mjs"],
    ignores: ["**/node_modules", "**/*.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        window: "readonly",
        document: "readonly",
        setTimeout: "readonly",
        console: "readonly",
        clearTimeout: "readonly",
        localStorage: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },

  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        it: "readonly",
        describe: "readonly",
      },
    },
  },
];

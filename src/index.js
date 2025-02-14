// @ts-check

import tseslint from "typescript-eslint";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import vitest from "@vitest/eslint-plugin";

export default tseslint.config(
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.test.{ts,tsx,js,jsx}", "tests/**"],
    ...vitest.configs.recommended,
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [tseslint.configs.recommended, tseslint.configs.stylistic],
  },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      "import/no-unresolved": ["warn", { commonjs: true, amd: true }],
    },
  }
);

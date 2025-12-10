//import js from '@eslint/js'
//import globals from 'globals'
//import reactHooks from 'eslint-plugin-react-hooks'
//import reactRefresh from 'eslint-plugin-react-refresh'
//import tseslint from 'typescript-eslint'
//import { globalIgnores } from 'eslint/config'
//
//export default tseslint.config([
//  globalIgnores(['dist']),
//  {
//    files: ['**/*.{ts,tsx}'],
//    extends: [
//      js.configs.recommended,
//      tseslint.configs.recommended,
//      reactHooks.configs['recommended-latest'],
//      reactRefresh.configs.vite,
//    ],
//    languageOptions: {
//      ecmaVersion: 2020,
//      globals: globals.browser,
//    },
//  },
//])
//

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked[0].rules,

      // React Hooks (obligatorio para apps React modernas)
      ...reactHooks.configs.recommended.rules,

      // Vite + React Fast Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ]
    }
  }
];

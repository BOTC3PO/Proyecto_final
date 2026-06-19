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

export default tseslint.config(
  {
    ignores: ["node_modules", "dist", "archive"],
  },
  js.configs.recommended,
  // Nota: `tseslint.configs.recommended` es un ARRAY de configs, hay que
  // expandirlo (no `...recommended.rules`, que sería undefined). Su config base
  // desactiva reglas core como `no-undef` para archivos TS (TS ya las cubre).
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // React Hooks (obligatorio para apps React modernas)
      ...reactHooks.configs.recommended.rules,

      // Vite + React Fast Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Respetar el convenio de prefijo `_` para vars/args intencionalmente sin usar
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  }
);

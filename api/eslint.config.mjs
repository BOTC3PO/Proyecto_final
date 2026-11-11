import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

// Config de la API (Node + TypeScript). Antes era una copia del de la web: importaba plugins de React
// que la API no tiene y usaba `path`/`__dirname` sin importarlos, así que no llegaba a cargar.
// Sin reglas con tipos (`parserOptions.project`): son lentas y alcanzan las recomendadas.
export default tseslint.config(
  { ignores: ["node_modules", "dist", "media"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node, ...globals.es2021 }
    },
    rules: {
      // Lo que empieza con "_" está sin usar a propósito (p. ej. `_next` en un middleware de Express).
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }
      ],
      // El código ya usa `any` en muchos lugares: se deja visible como aviso, no como error.
      "@typescript-eslint/no-explicit-any": "warn"
    }
  },
  {
    // Los .js/.cjs (scripts y pruebas viejas) son CommonJS: `require` es lo correcto ahí.
    files: ["**/*.{js,cjs}"],
    rules: { "@typescript-eslint/no-require-imports": "off" }
  }
);

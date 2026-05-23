# @vb/vblang

VBLang — DSL para Virtual Book.

Paquete del monorepo que contendrá el lexer, parser, evaluator, validator,
runtime y adapters del lenguaje VBLang. En este sprint solo se establece el
esqueleto del paquete; la lógica del DSL se implementa en sprints posteriores.

## Estructura

- `src/lexer/`     — tokenización
- `src/parser/`    — construcción del AST
- `src/evaluator/` — evaluación / compilación
- `src/validator/` — validación semántica
- `src/runtime/`   — runtime de ejecución
- `src/adapters/`  — adaptadores hacia el host (web/mobile/api)
- `src/types/`     — tipos compartidos

## Scripts

- `pnpm test`       — corre vitest
- `pnpm typecheck`  — verifica tipos sin emitir
- `pnpm build`      — compila a `dist/`

# F7-01 — Referencia DSL auto-generada (drift-test)

Genera una referencia condensada del DSL VBLang **derivada del código
real** (gramática de bloques, funciones invocables, constantes globales y un
ejemplo por tipo de pregunta), con un test de drift que falla si la
referencia se desincroniza del parser/evaluador/schemas. Es la base para el
generador de prompts de F7-02.

## 1. Investigación

### 1.1 Precedente: `BUILTIN_NAMES` / `builtins-registry.test.ts`

`packages/vblang/src/evaluator/builtins.ts` ya tenía el patrón a replicar:

- `createBuiltins(prng, math): Record<string, BuiltinFn>` es el registro
  real de builtins propios.
- `BUILTIN_NAMES: readonly string[]` es una lista hardcodeada paralela, con
  comentarios de categoría.
- `tests/evaluator/builtins-registry.test.ts` calcula `missing`/`extra` entre
  `builtinNames(createBuiltins(...))` y `BUILTIN_NAMES`, y exige que ambos
  arrays estén vacíos.

F7-01 escala este patrón a "referencia completa": bloques, builtins
(incluyendo el fallback a math.js) y ejemplos por tipo de pregunta.

### 1.2 Inventario: derivable vs. prosa fija

| Parte de la referencia | Fuente de verdad en código | Derivable / prosa fija |
|---|---|---|
| Lista de bloques (26) | `BLOCK_KEYWORDS` (`lexer/tokens.ts`) — mismas 26 claves que el switch de 26 casos de `parseBloque` (`parser/blocks.ts`) | Lista: derivable. Resumen de una línea por bloque: prosa fija (26 líneas, mínimo posible). |
| Builtins propios (33) | `createBuiltins(prng, math)` / `BUILTIN_NAMES` (`evaluator/builtins.ts`) | Derivable (nombres). |
| Firmas de builtins propios | `BUILTIN_SIGNATURES` (`validator/builtin-signatures.ts`) | Derivable (tipos → `typeToString`). |
| Funciones math.js invocables (fallback dinámico, `evaluator.ts:300-`) | `MATHJS_SIGNATURES` (`validator/builtin-signatures.ts`) — subconjunto curado | Curado (no hay registro exhaustivo en código: math.js expone cientos de funciones). Se usa el subconjunto ya documentado para el linter. |
| Constantes globales (10) | `CONSTANTES_GLOBALES` / `GLOBAL_CONSTANTS` (`evaluator/constants.ts`) | Totalmente derivable. |
| Tipos de pregunta (9) | `ALL_QUESTION_TYPES` (`schema/question-schemas.ts`) | Totalmente derivable. |
| Ejemplo por tipo de pregunta (9) | `QUESTION_TYPE_SCHEMAS[tipo].sampleDsl` — ya validado por `tests/schema/concordance.test.ts` (parsea, infiere `tipo`, sin errores de lint, round-trip lossless) | Totalmente derivable — **cero prosa nueva**: se reusan los `sampleDsl` existentes. |

La única prosa fija nueva de F7-01 son los 26 resúmenes de bloque
(`RESUMENES_BLOQUES`, una línea cada uno). Todo lo demás (firmas de
builtins, constantes, ejemplos) se deriva de registros que ya existían.

## 2. Implementación

### 2.1 `packages/vblang/src/reference/blocks.ts`

- `BLOCK_NAMES: readonly string[]` = `Object.keys(BLOCK_KEYWORDS).sort()`.
- `RESUMENES_BLOQUES: Record<string, string>` — 26 resúmenes de una línea,
  una entrada por bloque.
- `listaBloques()` → `{nombre, resumen}[]`.
- `diffBloques(actuales = BLOCK_NAMES)` → `{faltantes, sobrantes}` (mismo
  patrón `missing`/`extra` de `builtins-registry.test.ts`).

### 2.2 `packages/vblang/src/reference/builtins.ts`

- `nombresBuiltinsRuntime()` → `builtinNames(createBuiltins(createPrng(...), createIsolatedMath()))`.
- `nombresBuiltinsDisponibles()` → unión con `Object.keys(MATHJS_SIGNATURES)`
  (las funciones math.js a las que cae el evaluador como fallback,
  `evaluator/evaluator.ts:300`).
- `listaBuiltins()` → `{nombre, firma}[]`, con `firma` renderizada desde
  `BUILTIN_SIGNATURES`/`MATHJS_SIGNATURES` vía `typeToString` (ej.:
  `(number, number) -> number`, `(string...) -> string` para variádicos,
  `(number, number?) -> number` para opcionales).
- `diffBuiltins(actuales = nombresBuiltinsDisponibles())` → `{faltantes, sobrantes}`
  contra `BUILTIN_SIGNATURES ∪ MATHJS_SIGNATURES`.

### 2.3 `packages/vblang/src/reference/index.ts`

Combina ambos módulos + `listaConstantesGlobales()` (de
`CONSTANTES_GLOBALES`) + `listaEjemplos()` (de
`QUESTION_TYPE_SCHEMAS[tipo].sampleDsl`) en `generarReferenciaDsl(): string`
(Markdown con secciones Bloques / Funciones / Constantes globales / Ejemplos
por tipo de pregunta).

Re-exportado desde `packages/vblang/src/index.ts` (sección "F7-01 —
Referencia DSL auto-generada"), como base pública para el generador de
prompts de F7-02.

## 3. Drift-test (`packages/vblang/tests/reference/drift.test.ts`)

1. **Bloques**: `diffBloques(Object.keys(BLOCK_KEYWORDS))` → `faltantes` y
   `sobrantes` vacíos.
2. **Bloque ficticio**: `diffBloques([...BLOCK_KEYWORDS, "bloque_ficticio_f7_01"])`
   → `faltantes === ["bloque_ficticio_f7_01"]` (reproduce "se agregó un
   bloque al lexer y no se documentó").
3. **Builtins**: `diffBuiltins()` → `faltantes` y `sobrantes` vacíos. Esto
   además detecta drift entre `createBuiltins(...)` (runtime) y
   `BUILTIN_SIGNATURES` (validador de tipos) — un drift que antes de F7-01
   no tenía test propio.
4. **Builtin ficticio**: `diffBuiltins([...nombresBuiltinsDisponibles(), "builtin_ficticio_f7_01"])`
   → `faltantes === ["builtin_ficticio_f7_01"]`.
5. `BUILTIN_SIGNATURES` y `MATHJS_SIGNATURES` no comparten claves (sin
   ambigüedad de firma).
6. **Ejemplos por tipo**: hay exactamente un ejemplo por cada uno de los 9
   `ALL_QUESTION_TYPES`, y cada `sampleDsl` parsea con el `tipoInferido`
   correcto.
7. **Render**: `generarReferenciaDsl()` no está vacío e incluye los 26
   bloques y todos los builtins disponibles.

## 4. Resultados

- `pnpm --filter ./packages/vblang test` → **749/749** (era 742; +7 de
  `tests/reference/drift.test.ts`). 0 regresiones.
- `tsc --noEmit` en `packages/vblang`: mismos 3 errores pre-existentes en
  `validator/linter.ts` (no relacionados, no introducidos por F7-01).

## 5. Lo que F7-01 no cubre

- **Operadores y gramática de expresiones** (aritméticos, comparación,
  `y`/`o`/`no`, `for...in`, rangos `..`): no forman parte de la referencia.
  El issue pide específicamente "gramática de bloques + builtins + ejemplos
  por tipo de pregunta"; los operadores quedan para una iteración futura si
  el generador de prompts (F7-02) los necesita.
- **`isBlockKeyword(k: TokenKind)`** (`parser/blocks.ts`): sigue siendo una
  enumeración paralela de los mismos 26 `KW_*` (usada para detectar el fin de
  un bloque dash-list). F7-01 no la unifica con `BLOCK_KEYWORDS` — es un
  drift-risk preexistente, documentado pero no resuelto aquí.
- **Render como prompt de LLM**: `generarReferenciaDsl()` produce Markdown
  genérico; el formato/extracto específico para prompts queda para F7-02.

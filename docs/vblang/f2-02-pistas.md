# F2-02 — Bloque `pistas:` (pistas escalonadas) — Investigación y diseño

> Estado: implementado. Este documento cumple el paso "documentar antes de
> codear" de la tarea F2-02 y deja registrada la decisión de diseño.

## 1. Modelo de referencia: `enunciado:` / `enunciados:`

`enunciado:` es el bloque string interpolable más cercano al que pide la tarea, y
`enunciados:` (lista de variantes) es el modelo para la forma escalonada. Al
agregarse, `enunciados:` tocó **exactamente** estos archivos (verificado con
`grep -rln "enunciados" src`):

| Capa | Archivo | Qué hace con `enunciado(s)` |
|------|---------|------------------------------|
| Lexer | `src/lexer/tokens.ts` | `TokenKind.KW_ENUNCIADO(S)` + entradas en `BLOCK_KEYWORDS` (esto también alimenta `suggestKeyword`). |
| AST | `src/parser/ast.ts` | `EnunciadoBloque { partes }`, `EnunciadosBloque { items: PasoItem[] }`, ambos en la unión `Bloque` y exportados por `index.ts`. |
| Parser | `src/parser/blocks.ts` | `parseEnunciadoBloque` (string único), `parseEnunciadosBloque` (lista vía `parseDashedStringList`), alta en `isBlockKeyword` y en el dispatcher `parseBloque`. |
| Parser | `src/parser/parser.ts` | exclusión mutua enunciado/enunciados y obligatoriedad (detección de duplicados es genérica vía `seen: Set<BloqueKind>`). |
| Runtime | `src/runtime/types.ts` | `CompiledPlantilla.enunciado` / `.enunciados`. La **salida** `GenerationResult` sólo tiene `enunciado: string` (la variante se resuelve antes). |
| Runtime | `src/runtime/compile.ts` | copia `b.partes` → `compiled.enunciado`, `b.items` → `compiled.enunciados`. |
| Runtime | `src/runtime/generate.ts` | `resolverVarianteEnunciado` (elige variante con PRNG) + `interpolar(...)`. |
| Serializer | `src/serializer/serialize.ts` | `case "enunciado"` (inline) y `case "enunciados"` (lista `- "..."`). |
| Validator (lint estático) | `src/validator/linter.ts` | inferencia de tipos de interpolaciones, warning `enunciados[i]: variable ... no declarada`, warning de duplicados, `random-inline`, y `allBlockExpressions`. |
| Validator (dinámico) | `src/validator/validator.ts` | cobertura de variantes con `forceVariant`. |

Lo que `enunciados:` **NO** tocó: `schema/question-schemas.ts`, los adapters, ni
`GenerationResult` (no agrega campo de salida nuevo, porque la variante colapsa a
un único `enunciado` string).

### Lado frontend
`packages/vblang` es autocontenido. El puente al reproductor es
`adapters/to-module-quiz-question.ts` → `ModuleQuizQuestion` (tipo espejado en
`apps/web/src/domain/module/module.types.ts`, verificado por
`apps/web/src/vblang/__tests__/compat.spec.ts`). `enunciados:` no llegó al
adapter porque no agrega salida; **`pistas:` sí** (ver §3).

## 2. Decisión de diseño: un solo `pistas:` (no el par `pista:`/`pistas:`)

**Decidido: una sola keyword `pistas:` que acepta dos formas de superficie**
(string inline para una pista, o lista con `- "..."` para varias). **No** se
replica el par `enunciado:`/`enunciados:`.

Fundamento:

1. **La dicotomía de `enunciado`/`enunciados` no aplica.** Esos dos bloques son
   semánticamente distintos: `enunciado` = un texto; `enunciados` = lista de
   **variantes** de las que el runtime elige **una** al azar. Las pistas, en
   cambio, son una **secuencia**: todas existen y se piden de a una y en orden.
   Una pista o varias pistas son el *mismo* concepto (lista ordenada, longitud
   ≥ 1), no "single vs elegir-una". Dos keywords sugerirían una selección de
   variante que no existe para pistas.
2. **Precedente en el propio DSL.** `opciones_explicitas:` ya acepta forma
   inline (una expr) y forma lista (`- ...`) bajo una sola keyword. `pistas:`
   sigue ese patrón (inline = azúcar de lista de 1).
3. **Menos superficie.** Una keyword, un nodo AST, un caso en cada capa.

Representación interna: `PistasBloque { items: PasoItem[] }` (igual que
`enunciados`/`pasos`), `items.length >= 1` siempre. El inline produce una lista
de un elemento.

## 3. Shape de salida

`generate()` devuelve `GenerationResult`. Hoy expone `enunciado: string`,
`pasos?: string[]`, etc. Las pistas materializadas (interpoladas con los valores
de la simulación, en orden) se agregan como **`pistas?: string[]`**:

- Se materializan en `generate.ts` junto al enunciado/pasos, con el mismo
  `scope`/`ctx`. Se incluyen en **todos** los caminos de resultado (tipos
  básicos, `abierta`, los 4 especiales de `generate-special.ts`, y el camino
  asistido `generador:`).
- **No-regresión:** si la plantilla no declara `pistas:`, no se interpola nada
  y `GenerationResult.pistas` queda `undefined` (no se toca el PRNG → secuencia
  idéntica a antes).
- El adapter propaga `gen.pistas` → `ModuleQuizQuestion.pistas` (y el espejo en
  `apps/web/.../module.types.ts`).

**El costo en puntos NO vive en el DSL.** Igual que `points` (que es
composición de quiz y vive en `AdapterOptions`/`ModuleQuizQuestion.points`, no
en la plantilla), el DSL sólo declara el texto y el orden de las pistas. El
costo lo decide la composición del quiz, fuera de VBLang.

## 4. Lint
- Inferencia de tipos por pista (emite `var-undef` base de `inferExprType`).
- Warning contextual `pistas-var-undef`: `pistas[i]: variable "x" no declarada`,
  análogo a `enunciados-var-undef`, para ubicar la pista rota por índice.
- `random-inline` también cubre interpolaciones dentro de pistas.

## 5. Archivos tocados (implementación)
Mismo conjunto que `enunciados:` **más** el shape de salida y el adapter:
`tokens.ts`, `ast.ts`, `blocks.ts`, `compile.ts`, `types.ts`, `generate.ts`,
`generate-special.ts`, `serialize.ts`, `linter.ts`, `index.ts`,
`adapters/module-quiz-question.ts`, `adapters/to-module-quiz-question.ts`, y el
espejo `apps/web/src/domain/module/module.types.ts`.

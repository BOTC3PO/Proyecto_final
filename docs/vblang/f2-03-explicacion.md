# F2-03 — Bloque `explicacion:` (mostrado al alumno tras responder) — Investigación y diseño

> Estado: implementado. Este documento cumple el paso "documentar antes de
> codear" de la tarea F2-03 (reutiliza el patrón de F2-02 — `docs/vblang/f2-02-pistas.md`).

## 1. Contexto y motivación

Las plantillas VBLang migradas en Fase 6 vienen de generadores nativos que
emiten una `ejercicio.explicacion` (ver `apps/web/src/generadoresV2/core/types.ts:56`).
Esa explicación llega al consumidor (`ModuleQuizQuestion.explanation`) por el
camino viejo: `ejercicioToQuestion.ts:26,37`. El camino VBLang, en cambio,
construye `explanation` desde `pasos` con `buildExplanation(pasos)` en el
adapter (ver `packages/vblang/src/adapters/to-module-quiz-question.ts:90-93`).
Sin un bloque en el DSL para declarar explicación explícita, las plantillas
migradas pierden ese campo.

`explicacion:` cubre el hueco: una sola frase interpolable que se muestra al
alumno tras responder, paridad con el `explanation` que ya tienen los quizzes
manuales/banco.

## 2. Patrón de superficie: `enunciado:` (no `pistas:`)

F2-02 (`pistas:`) introduce un patrón dual (inline o lista) por necesidad: las
pistas son una **secuencia** y se piden de a una. `explicacion:` es un solo
texto — usa el patrón más simple, el mismo de `enunciado:` / `unidad:` /
`metadata.x`:

```vblang
explicacion: "Se suman {a} y {b}, dando {a + b}."
```

También acepta multilínea con `|`, igual que `enunciado:` (parseable, pero el
serializer lo emite inline; mismo trade-off que `pistas:`).

## 3. Cadena de resolución DSL → consumer

Mismo patrón que F2-02:

| Capa | Archivo | Qué hace con `explicacion` |
|------|---------|------------------------------|
| Lexer | `src/lexer/tokens.ts` | `TokenKind.KW_EXPLICACION` + entrada en `BLOCK_KEYWORDS` (auto-descubierto por `suggestKeyword`). |
| AST | `src/parser/ast.ts` | `ExplicacionBloque { kind: "explicacion", partes: TextoOInterpolacion[], loc }`, exportado en la unión `Bloque` y desde `index.ts`. |
| Parser | `src/parser/blocks.ts` | `parseExplicacionBloque` (string único, inline o multilínea), alta en `isBlockKeyword` y dispatcher `parseBloque`. Sin exclusion mutua. |
| Runtime | `src/runtime/types.ts` | `CompiledPlantilla.explicacion` (partes) y `GenerationResult.explicacion` (string interpolado). |
| Runtime | `src/runtime/compile.ts` | copia `b.partes` → `compiled.explicacion`. |
| Runtime | `src/runtime/generate.ts` | `materializarExplicacion` (espejo de `materializarPistas`): `undefined` si no hay bloque; en caso contrario, interpolar. Llama en `generateAssisted` y en el loop principal. Pasa a `buildAssistedResult` y a las 4 funciones en `generate-special.ts`. |
| Serializer | `src/serializer/serialize.ts` | `case "explicacion"`: `explicacion: "..."` (inline, sin lista). |
| Validator | `src/validator/linter.ts` | Inferencia de tipos por interpolación, warning `explicacion-var-undef`, `random-inline`, y `allBlockExpressions` (cubre el chequeo `var-unused`). |
| Validator dinámico | `src/validator/validator.ts` | Si la interpolación referencia una variable no declarada, falla 100 simulaciones (mismo path que el resto). |
| Adapter | `src/adapters/to-module-quiz-question.ts` | `gen.explicacion` → `result.explanation` con precedencia sobre `buildExplanation(pasos)`. |
| Espejo | `apps/web/src/domain/module/module.types.ts` | Comentario en `explanation` documenta las tres fuentes (F2-03, generadores nativos, fallback `pasos`). |

## 4. Decisión de diseño: ¿cuándo se muestra?

**Pregunta del plan**: ¿siempre tras responder, o solo tras mal?

**Default propuesto: "siempre tras responder"** (mostrar la explicación cada
vez que el alumno envía una respuesta, sea correcta o no). Justificación:

1. **Modelo ya lo asume**: `ModuleQuizQuestion.explanation` es un string
   opcional sin canal condicional. El renderer (fuera del DSL) decide cuándo
   mostrarlo. El DSL solo emite la `explicacion:`.
2. **Convención de la industria**: Khan Academy, Codecademy, Brilliant
   muestran la explicación tras cada envío. Solo Duolingo y similares la
   gating-ean detrás de "wrong" — y por motivos de gamificación, no de
   aprendizaje.
3. **Consistencia con `pasos`**: los `pasos:` ya se muestran siempre que
   existen (en el fallback legacy del adapter). `explicacion:` es la versión
   "más corta / más legible" del mismo feedback; gating-earla rompería la
   simetría.
4. **Revisable sin tocar el DSL**: si la UI decide mostrar la `explanation`
   solo tras respuesta incorrecta, puede hacerlo con un simple
   `if (!correct) mostrar(q.explanation)`. No requiere volver a tocar el
   adapter ni el runtime.
5. **Costo de implementación**: gating implica un nuevo canal en el modelo
   (ej. `explanationOnWrong?: string` separado), más migración, más tests.
   Para una Fase 6 que viene apretada, "siempre" es el camino corto y
   reversible.

**Por qué NO el otro extremo (mostrar antes de responder)**: el alumno que
lee la explicación antes de responder ya no la necesita como feedback.

**Por qué NO gatear "solo al fallar"**: la explicación es útil tanto si
acertó (refuerza el modelo mental) como si falló (corrige el error).
Gatearla a "solo mal" le quita valor al alumno que ya entendió.

## 5. Precedencia en el adapter

El campo `ModuleQuizQuestion.explanation` tiene tres fuentes posibles más el
override del caller. La precedencia final (de mayor a menor) queda:

```
1. options.explanation                       (caller override explícito)
2. gen.explicacion                           (F2-03: bloque `explicacion:`)
3. buildExplanation(gen.pasos)               (F2-02: fallback legacy)
4. `País correcto: <nombre>` (marcar_mapa)   (fallback final)
```

`options.explanation` (1) gana sobre `gen.explicacion` (2) porque permite al
caller overridear la explicación en runtime (por ejemplo, para añadir un
"pista: pagaste con puntos" sin re-compilar la plantilla). `gen.explicacion`
gana sobre `buildExplanation(pasos)` (3) porque la `explicacion:` es
explícita del docente y debe tener precedencia sobre el fallback genérico.
El fallback (3) sobrevive como red de seguridad para plantillas que solo
tienen `pasos:`.

## 6. Archivos tocados (implementación)

Mismo conjunto que F2-02 (más un cambio mínimo en el adapter):

| Capa | Archivo |
|------|---------|
| Lexer | `packages/vblang/src/lexer/tokens.ts` |
| AST | `packages/vblang/src/parser/ast.ts` |
| Parser | `packages/vblang/src/parser/blocks.ts` |
| Runtime types | `packages/vblang/src/runtime/types.ts` |
| Compile | `packages/vblang/src/runtime/compile.ts` |
| Generate (main) | `packages/vblang/src/runtime/generate.ts` |
| Generate (special) | `packages/vblang/src/runtime/generate-special.ts` |
| Serializer | `packages/vblang/src/serializer/serialize.ts` |
| Linter | `packages/vblang/src/validator/linter.ts` |
| Adapter | `packages/vblang/src/adapters/to-module-quiz-question.ts` |
| Index re-export | `packages/vblang/src/index.ts` |
| Espejo | `apps/web/src/domain/module/module.types.ts` |

Lo que **NO** se tocó (consistente con F2-02):
- `schema/question-schemas.ts` (los schemas son la base "tipo genérico", no
  cubren campos opcionales como `pistas:` o `explicacion:`).
- `apps/web/src/vblang/llmPrompt.ts` (no se actualizó para `pistas:` en F2-02
  ni para `explicacion:` en F2-03 — sigue la política de no inflar el prompt
  con bloques nuevos que no son estructurales).

## 7. No-regresión

Verificado:
- Plantillas sin `explicacion:` → `GenerationResult.explicacion` queda
  `undefined`; el adapter cae al fallback `buildExplanation(pasos)` (o
  `undefined` si tampoco hay `pasos:`).
- Misma seed con/sin `explicacion:` → variables y enunciado idénticos (la
  materialización ocurre después de declarar variables, como `pistas`).
- Suite de tests de vblang: **660/660** en verde (F2-02 cerró en 625/625, +35
  tests nuevos de F2-03).
- Suite de tests de apps/web: **440/440** en verde.

## 8. Limitaciones conocidas

- **Multilínea → single-line en round-trip**: el parser acepta `explicacion: |`
  con varias líneas, pero el serializer siempre emite inline. El contenido
  semántico se preserva; el formateo con `\n` se pierde. Mismo trade-off que
  F2-02. Mejora futura: emitir multilínea cuando el texto original tenía
  saltos (espejo de un TODO similar en `enunciado:`).
- **Sin canal "solo tras mal"**: si en el futuro el renderer quiere gating
  por corrección, tiene dos caminos: (a) quedarse con la única `explanation`
  y gating-ear en la UI; (b) pedir un nuevo bloque `explicacion_fallo:` (no
  se anticipa, se posterga hasta que haya demanda concreta).

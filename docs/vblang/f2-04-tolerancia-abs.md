# F2-04 — Tolerancia absoluta (`tolerancia_abs`) — Investigación y diseño

> Estado: implementado. Este documento cumple el paso "documentar antes de
> codear" de la tarea F2-04. Resuelve el bug del plan K3 (debilidad #5):
> la tolerancia relativa exige exactitud cuando la respuesta esperada es 0
> (`|e|·tol = 0`) y falla con valores muy chicos.

## 1. Contexto y motivación

`Tolerancia:` (relativa) es la única holgura que el DSL expone. Criterio:

```
|r - e| ≤ |e| · tol_rel
```

Dos problemas reales:

1. **`e = 0` exige exactitud.** Cuando la respuesta esperada es 0, el
   producto `|e|·tol` es 0, así que cualquier desviación (por más chica que
   sea) marca la respuesta como incorrecta. Común en preguntas de
   matemáticas ("calcula x donde 0 = …") o ciencias ("¿cuánto se desplaza
   el cuerpo si parte del reposo?").

2. **Valores muy chicos fallan igual.** Si `e = 0.001` y `tol = 5%`, el
   margen es `0.00005` — más chico que la precisión de punto flotante
   típica. El alumno nunca puede acertar a menos que ponga exactamente el
   valor.

## 2. Criterio nuevo

`Tolerancia_abs:` es una holgura ABSOLUTA complementaria. El criterio de
corrección combinado:

```
|r - e| ≤ max(|e| · tol_rel, tol_abs)
```

- `tol_abs` ausente (default 0) → colapsa a `|r - e| ≤ |e| · tol_rel`. Cero
  regresión en plantillas existentes.
- `e = 0` + `tol_abs = 0` → exige `r = 0` (exacto). Caso previo.
- `e = 0` + `tol_abs > 0` → `tol_abs` es la única holgura.
- `tol_rel = 0` (sin tolerancia relativa) + `tol_abs > 0` → `tol_abs` es
  la única holgura.
- `|e| · tol_rel > tol_abs` → la relativa gana (caso normal).

El `max` (no `sum` ni `or`) es la elección correcta: el alumno puede ser
"un poco impreciso" (relativa) **o** "un poquito absoluto" (absoluta), lo
que sea mayor. Sumar las dos holguras sería demasiado permisivo.

## 3. Puntos de corrección actualizados (3 lugares)

F2-04 cambia la fórmula en los tres puntos donde se acepta la tolerancia:

| # | Lugar | Antes | Después |
|---|-------|-------|---------|
| 1 | `api/src/routes/quiz-attempts.ts:gradeNumeric` (server, autoritativo desde V2-06) | `|r-e| ≤ |e|·tol_rel` (con `e=0` → exacto) | `|r-e| ≤ max(|e|·tol_rel, tol_abs)`. Caso `e=0` ahora usa `tol_abs` como holgura. |
| 2 | `apps/web/src/components/vblang/PreviewPanel.tsx:isCorrect` (preview client-side del editor) | `|uNum-kNum|/denom ≤ tol` | `diff ≤ max(|k|·tol_rel, tol_abs)`. Caso `k=0` ahora usa `tol_abs`. |
| 3 | `apps/web/src/pages/quizzes/QuizAttempt.tsx:submitGenerated` | Solo propaga `toleranciaRelativa` | También propaga `toleranciaAbsoluta` al server (que es la autoridad). |

Punto 1 es el crítico (server-autoritativo). Puntos 2 y 3 deben coincidir
con 1 — la tabla de "consistencia cliente/servidor" en
`tests/adapters/tolerancia-abs-consistency.test.ts` documenta los casos que
deben coincidir exactamente.

## 4. Forma de superficie: misma que `tolerancia:`

Mismo patrón de bloque (número tras `:`), pero sin `%` (la sintaxis `%` es
exclusiva de `tolerancia:` — la absoluta es siempre absoluta por
definición).

```vblang
enunciado: "Resolvé x donde x = 0"
respuesta: 0
tolerancia: 5%
tolerancia_abs: 0.001
```

`Tolerancia_abs` y `tolerancia` son bloques independientes: pueden convivir
en la misma plantilla, y el orden entre ambos no afecta el resultado.

## 5. Cadena de propagación (mismo patrón que F2-02/F2-03)

| Capa | Archivo | Qué hace con `tolerancia_abs` |
|------|---------|------------------------------|
| Lexer | `src/lexer/tokens.ts` | `TokenKind.KW_TOLERANCIA_ABS` + entrada en `BLOCK_KEYWORDS` (auto-descubierto por `suggestKeyword`). |
| AST | `src/parser/ast.ts` | `ToleranciaAbsBloque { kind: "tolerancia_abs", valor: number, loc }`, exportado en la unión `Bloque` y desde `index.ts`. |
| Parser | `src/parser/blocks.ts` | `parseToleranciaAbsBloque` (número crudo, sin `%`), alta en `isBlockKeyword` y dispatcher. |
| Runtime types | `src/runtime/types.ts` | `CompiledPlantilla.toleranciaAbs?: number` y `GenerationResult.toleranciaAbs?: number`. |
| Runtime | `src/runtime/compile.ts` | copia `b.valor` → `compiled.toleranciaAbs`. |
| Runtime | `src/runtime/generate.ts` | propaga `compiled.toleranciaAbs` en todos los return points (básicos, asistida). |
| Serializer | `src/serializer/serialize.ts` | `case "tolerancia_abs"`: `tolerancia_abs: 0.5` (inline, sin `%`). |
| Validator | `src/validator/validator.ts` | warning `tolerancia-abs-invalida` si `< 0` (en la práctica inalcanzable porque el parser rechaza negativos, pero queda como red de seguridad). |
| Adapter | `src/adapters/to-module-quiz-question.ts` | `gen.toleranciaAbs` → `result.toleranciaAbsoluta` cuando `> 0` (0 colapsa al comportamiento previo). |
| Adapter type | `src/adapters/module-quiz-question.ts` | `toleranciaAbsoluta?: number` en `ModuleQuizQuestion`. |
| Espejo | `apps/web/src/domain/module/module.types.ts` | `toleranciaAbsoluta?: number` con docstring. |
| Espejo type | `api/src/routes/quiz-attempts.ts` | `toleranciaAbsoluta?: number` en `ModuleQuiz["questions"][*]`, en `SubmitPayload.generatedQuestions[*]`, y en `serverQuestionToGradable`. |
| Cliente submit | `apps/web/src/pages/quizzes/QuizAttempt.tsx` | `submitGenerated` propaga `toleranciaAbsoluta` al server. |

## 6. No-regresión: tabla de casos canónicos

Esta tabla es la verdad-fundamento del criterio. Cualquier cambio
(futuro) a `gradeNumeric` o `isCorrect` debe preservar TODAS estas filas:

| `e` | `tol_rel` | `tol_abs` | `r` | Veredicto | Justificación |
|-----|-----------|-----------|-----|-----------|---------------|
| 0    | 0.05 | 0.001 | 0.0005 | ✅ | `0.0005 ≤ max(0, 0.001)` = `0.0005 ≤ 0.001` |
| 0    | 0.05 | 0.001 | 0.01   | ❌ | `0.01 > max(0, 0.001)` = `0.01 > 0.001` |
| 0.002 | 0.05 | 0.001 | 0.0028 | ✅ | `0.0008 ≤ max(0.0001, 0.001)` = `0.0008 ≤ 0.001` (tol_abs gana) |
| 10   | 0.05 | 0.001 | 10.4  | ✅ | `0.4 ≤ max(0.5, 0.001)` = `0.4 ≤ 0.5` (tol_rel gana) |
| 10   | 0.05 | undefined | 10.4 | ✅ | tol_abs ausente → `0.4 ≤ 0.5`. Sin cambio vs F2-03. |
| 10   | 0.05 | undefined | 11.0 | ❌ | `1.0 > 0.5`. Sin cambio. |
| 0    | undefined | undefined | 0.0 | ✅ | tol_rel=0, tol_abs=0 → exige exacto, r=0 OK. |
| 0    | undefined | undefined | 0.0001 | ❌ | tol_rel=0, tol_abs=0 → exige exacto, r≠0 NO. |
| 0    | undefined | 0.001 | 0.0005 | ✅ | tol_rel=0, tol_abs=0.001 → `0.0005 ≤ 0.001`. |

Casos cubiertos por los tests (mismo archivo: `consistency.test.ts`).

## 7. Compatibilidad con el camino del provider asistido

El provider asistido (`generador:`) ya emite `ejercicio.toleranciaRelativa`
(ratio, no porcentaje). El runtime, en `buildAssistedResult`, lo mapea a
`tolerancia: { valor: ratio*100, esPorcentaje: true }` para mantener la
forma unificada del `GenerationResult`.

Con F2-04, el template puede SUMAR `tolerancia_abs:` al provider. El
adapter propaga ambos: el provider aporta la `toleranciaRelativa`, el
template aporta la `toleranciaAbsoluta`. En `ModuleQuizQuestion` quedan
ambos, y el criterio combinado los usa.

## 8. Limitaciones conocidas

- **Sin UI** (deliberado, scope de F4). El editor de cuestionarios
  (`EditorCuestionariosV2.tsx`) hoy solo tiene slider para
  `toleranciaRelativa`. El input numérico para `tolerancia_abs` queda
  pendiente hasta que el frontend lo pida. Mientras tanto, los docentes
  que usen plantillas VBLang-editables pueden declarar `tolerancia_abs:`
  directamente en el DSL.
- **El parser rechaza números negativos.** Igual que `tolerancia:` (que
  también solo acepta `NUMBER`, no `MINUS NUMBER`). El validator tiene
  un warning `tolerancia-abs-invalida` por las dudas, pero es
  inalcanzable por el camino público. Queda como red de seguridad.
- **Sin preview visual** del valor efectivo. El form no muestra al
  docente "con tol_rel=5% y tol_abs=0.001, una respuesta entre X e Y
  puntúa". Mejora futura para F4.
- **Comportamiento del cliente preview (PreviewPanel)** depende del
  mismo criterio. Si en el futuro cambia el criterio del backend (por
  ejemplo, agregar un canal de "tolerancia por encima" o "anillo de
  puntaje parcial"), hay que sincronizar PreviewPanel también.

## 9. Aceptación

- `pnpm --filter ./packages/vblang test`: **695/695** (660 anteriores + 35 nuevos F2-04).
- `pnpm test:api` (incluye el nuevo step 6): **94/94** (91 anteriores + 3 nuevos F2-04).
- `pnpm test:web`: **440/440** (sin regresiones).

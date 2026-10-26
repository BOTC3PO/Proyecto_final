# F4-03 — Puntaje por sección + toggle ocultar puntos

> Estado: implementado. Cubre "el plan dejó claro: el profesor usa su
> propia proporción y la conversión la hacen las escalas existentes"
> (F3-03) más el toggle "ocultar puntos al alumno" (ronda 3 K, ronda 7).

## 1. Contexto y motivación

F3-01/F3-03 ya cerraron el modelo de puntaje por posición: cada
`Posicion.puntaje` es compartido por sus variantes, y la conversión a
nota la hace `gradeFromConfig` (escala del profesor, WO14). Faltaban
dos piezas que la UI docente necesita para armar un cuestionario:

1. **Editar el puntaje por posición/sección** en el lienzo. Pre-F4-03
   `PosicionesCanvas` sólo mostraba el puntaje como texto — el docente
   no podía modificarlo sin tocar el JSON a mano.
2. **Ver el total y el reparto por sección** (cuánto vale cada tema)
   para tomar decisiones de pesos antes de publicar el cuestionario.
3. **Toggle "ocultar puntos al alumno"** per-cuestionario. Decisión
   pedagógica: en cuestionarios de práctica el alumno ve el desglose
   para aprender; en evaluaciones formales el docente prefiere que
   vea sólo la nota (escala 0..10, Aprobado/Desaprobado, etc.) sin
   leak del porcentaje.

## 2. Diseño

### 2.1 Helpers de puntaje por sección/tema (puros, mirror web↔api)

F3-03 dio `puntajePorPosiciones` y `maxScoreCuestionario`. F4-03 suma:

```ts
// apps/web/src/domain/quiz/puntaje.ts (mirror api/src/lib/quiz-puntaje.ts)

export function puntajePorTema(
  cuestionario: { posiciones: readonly PosicionConTema[] },
  acertadas: ReadonlySet<number>
): Record<string, RepartoPorTema>;

export function puntajeTotalCuestionario(
  cuestionario: { posiciones: readonly PosicionPuntuable[] }
): number;

export function resumenPuntaje(cuestionario: {
  posiciones: readonly PosicionConTema[];
  temas: ReadonlyArray<{ id: string; nombre: string }>;
  acertadas?: ReadonlySet<number>;
}): {
  total: number;
  porTema: Record<string, RepartoPorTema & { nombre: string }>;
};
```

**Reglas de reparto** (documentadas en el JSDoc):
- Posiciones con `puntaje 0` no entran al reparto ni al total
  (consistente con `puntajePorPosiciones`).
- Posiciones con `temaSecundario` se reparten 50/50 entre principal y
  secundario. La masa se conserva: la suma de `maxScore` por tema
  = `puntajeTotalCuestionario` (verificado por test "coherencia").
- Temas sin posiciones no aparecen en el resultado.
- Ratio = `score/maxScore` o `null` si `maxScore = 0`.

### 2.2 Edición de puntaje y tipo en `PosicionesCanvas`

Dos props opcionales nuevas, mismo patrón que F4-02:

```ts
onChangePuntaje?: (numero: number, puntaje: number) => void;
onChangeTipo?: (numero: number, tipo: PosicionTipo) => void;
```

Sin callbacks, el componente se comporta como en F4-02 (no-regresión).
Con callbacks:
- El `Pill` del tipo se reemplaza por un `<select>` con los 3 tipos
  (`fijo` / `obligatorio` / `relleno`).
- El texto del puntaje se reemplaza por un `<input type="number">` con
  step=1, min=0. El cambio invoca el callback con `(numero, nuevoPuntaje)`.
- Input vacío NO invoca el callback (commit al perder foco, no en cada
  keystroke). Lo mismo con valores negativos.
- `stopPropagation` en `onClick` del input/select — para que el click
  no toggle la expansión de la posición.

El componente sigue siendo presentacional: dispara callbacks, el host
(que aún no está wireado — eso es F4-04) decide cómo persistir.

### 2.3 Panel "Reparto por sección" — `RepartoPuntos`

Componente presentacional nuevo, exportable, que se monta al lado del
`PosicionesCanvas` (F4-04 lo conectará). Dos variantes:

- **`variant="table"`** (default): tabla con una fila por sección
  (tema con puntos > 0), columnas: nombre, puntos, % del total. Si
  recibe `acertadas`, agrega score y ratio por tema.
- **`variant="compact"`**: una línea con `Total: N puntos en M
  secciones (K posiciones)`. Pensado para mostrar como pie del
  editor.

Ordena las secciones de mayor a menor puntaje (las que no puntúan
se ocultan). Maneja plurales en español ("1 punto" / "2 puntos",
"1 sección" / "2 secciones", "1 posición" / "2 posiciones").

### 2.4 Toggle `ocultarPuntos` — per-cuestionario, defensa en profundidad

Persistencia: `QuizVersion.settings.ocultarPuntos: boolean` (JSON,
sin migration, patrón F3-01/F3-04). Default `false` = mostrar
(comportamiento previo).

Tres lugares de gating (defensa en profundidad):

1. **Backend, response del submit** (`api/src/routes/quiz-attempts.ts`):
   cuando `ocultarPuntos=true`, el `message` se reescribe para no
   incluir el `(NN%)`. Además, el JSON de response incluye el flag
   `ocultarPuntos` para que el cliente sincronice.
2. **Componente `PostSubmitResult`** (nuevo, F4-03): el render del
   `Puntaje: X / Y` se gatea con la prop `ocultarPuntos`. La nota
   SIEMPRE se muestra (es la salida de la escala del profesor, no
   el puntaje crudo).
3. **Wireado del flag al runner**: `QuizAttempt.tsx` lee
   `attempt.ocultarPuntos` (campo nuevo en el tipo de intento) y
   lo pasa a `PostSubmitResult`. Hoy el flag se carga del response
   del submit (campo `ocultarPuntos`); en el futuro el GET del
   intento también lo expondrá (deuda menor, no incluida en F4-03).

El backend también reescribe el `message` porque un alumno con
DevTools abierto vería el JSON del submit. El gate del cliente es
para el caso normal (DOM render); el gate del backend es para el
caso del cliente API.

### 2.5 Componente `PostSubmitResult`

Antes inline en `QuizAttempt.tsx:767-788`. Extraído a un componente
presentacional para poder testear el gating de `ocultarPuntos` sin
renderizar el `QuizAttempt` entero (que requiere un attempt, materialización,
un cuestionario, etc.).

Props:
- `result: PostSubmitResultValue | null` — el response del submit.
- `ocultarPuntos?: boolean` (default false) — si true, NO renderiza
  el `Puntaje: X / Y`. La nota siempre se muestra (es la escala del
  profesor, no el puntaje crudo).

Tiene `data-testid`s en cada bloque (`post-submit-score`,
`post-submit-grade`, `post-submit-message`) para que los tests puedan
aseverar presencia/ausencia de cada uno sin ambigüedad.

## 3. Cadena de propagación

| Capa | Archivo | Qué hace con F4-03 |
|------|---------|--------------------|
| Lib (helper) | `apps/web/src/domain/quiz/puntaje.ts` (+108 líneas) | `puntajePorTema`, `puntajeTotalCuestionario`, `resumenPuntaje`. Mirror en `api/src/lib/quiz-puntaje.ts`. |
| Lib (helper) tests | `apps/web/src/domain/quiz/__tests__/puntaje.spec.ts` (nuevo) | 13 tests: agregación, 50/50 secundario, sin doble conteo, puntaje 0, temas sin posiciones, coherencia con `puntajePorPosiciones`. |
| Componente | `apps/web/src/components/modulos/PosicionesCanvas.tsx` (+56 líneas) | Props `onChangePuntaje` + `onChangeTipo`. Input/select condicionales. |
| Componente | `apps/web/src/components/modulos/RepartoPuntos.tsx` (nuevo, 134 líneas) | Panel presentacional con 2 variants. |
| Componente | `apps/web/src/components/quizzes/PostSubmitResult.tsx` (nuevo, 80 líneas) | Extraído del inline de `QuizAttempt.tsx`. |
| Componente tests | `apps/web/src/components/modulos/__tests__/RepartoPuntos.spec.tsx` (nuevo) | 9 tests: total, reparto, ordenar, con/sin acertadas, empty, compact, singularización. |
| Componente tests | `apps/web/src/components/modulos/__tests__/PosicionesCanvas.spec.tsx` (extendido) | 8 tests nuevos: no-regresión input, cambio de puntaje, validación entrada, selector de tipo. |
| Componente tests | `apps/web/src/components/quizzes/__tests__/PostSubmitResult.spec.tsx` (nuevo) | 6 tests: sin result, con/sin ocultarPuntos, sin canonical10, sin nota. |
| Tipo | `apps/web/src/domain/module/module.types.ts:46-51` | `ocultarPuntos?: boolean` en `ModuleQuiz`. |
| Tipo | `apps/web/src/pages/quizzes/QuizAttempt.tsx:67-72` | `ocultarPuntos?: boolean` en el tipo del attempt. |
| Front runner | `apps/web/src/pages/quizzes/QuizAttempt.tsx:773-775` | Reemplaza el render inline con `<PostSubmitResult ... />` que gate del `Puntaje:` con `attempt.ocultarPuntos`. |
| Backend settings | `api/src/routes/modulos.ts:489,562-568,247` | Persiste `ocultarPuntos` en `settings` (PUT) y lo expone (GET) en cada versión del cuestionario. |
| Backend submit | `api/src/routes/quiz-attempts.ts:1447-1485` | Lee `ocultarPuntos` del settings; reescribe el `message` sin `(NN%)` cuando es true; agrega el flag al response. |

## 4. Tabla de casos canónicos

### 4.1 Helpers de puntaje

| `cuestionario.posiciones` (resumido)              | `acertadas` | `puntajePorTema` resultado                          |
|---|---|---|
| `[{num:1, tema:algebra, p:3}, {num:2, tema:algebra, p:2}, {num:3, tema:geo, p:4}]` | `{1, 3}` | `algebra: {score:3, maxScore:5, ratio:0.6}`, `geo: {score:4, maxScore:4, ratio:1}` |
| `[{num:1, tema:algebra, tema2:geo, p:4}]`         | `{1}`       | `algebra: {score:2, maxScore:2, ratio:1}`, `geo: {score:2, maxScore:2, ratio:1}` (split 50/50) |
| `[{num:1, tema:algebra, p:3}, {num:2, tema:algebra, p:0}, {num:3, tema:geo, p:2}]` | `{1, 2, 3}` | `algebra: {score:3, maxScore:3, ratio:1}` (puntaje 0 excluido), `geo: {score:2, maxScore:2, ratio:1}` |
| `[{num:1, tema:algebra, p:3}, {num:2, tema:geo, p:2}]` | `{}`        | `algebra: {score:0, maxScore:3, ratio:0}`, `geo: {score:0, maxScore:2, ratio:0}` |

### 4.2 Toggle `ocultarPuntos`

| `ocultarPuntos` | Score del result | ¿Render `Puntaje: X/Y`? | ¿Render Nota? | `message` del backend |
|---|---|---|---|---|
| `false` (default) | sí | sí | sí | incluye `(NN%)` |
| `true`            | sí | **no** | sí | sin `(NN%)` |
| `true`            | no (maxScore=0) | no | no (nota = "—") | sin porcentaje, no se filtra |

Casos cubiertos por `PostSubmitResult.spec.tsx` (6 tests).

## 5. Compatibilidad hacia atrás

- **`puntajePorPosiciones` y `maxScoreCuestionario` no cambian.** F4-03
  sólo AGREGA helpers. Los 12 tests de `quiz-puntaje.test.ts` (api) y los
  tests de `quiz-posiciones.test.ts` siguen pasando sin cambios.
- **`PosicionesCanvas` no rompe los 16 tests de F4-01/F4-02.** Las dos
  props nuevas son opcionales; sin callbacks, el render es idéntico a
  F4-02 (verificado por test "no renderiza input sin onChangePuntaje").
- **`PostSubmitResult` es byte-equivalente al render inline previo.**
  `QuizAttempt.tsx:767-788` tenía 4 `<p>` condicionales; el componente
  los tiene igual. El test del runner (existente, no tocado) sigue
  pasando.
- **El toggle `ocultarPuntos` es opt-in**. Default `false` = mostrar
  todo (comportamiento previo). Sólo cambia si el docente lo activa.
- **Sin migration Prisma**. Persistencia en `QuizVersion.settings`
  (JSON, patrón F3-01/F3-04). Cero impacto en el schema.

## 6. Limitaciones conocidas

- **No wireado en `ModuloEditor` todavía**. F4-03 sienta la API y los
  componentes; F4-04 los enchufa al editor del módulo (input de
  puntaje → `setQuizzes`, toggle "ocultar puntos" → `setQuizzes.quiz.ocultarPuntos`).
- **El render del "Puntaje: X / Y" en el ranking del modo competencia**
  (`QuizAttempt.tsx:818`) NO está gateado. El ranking es por-tiempo
  y se muestra siempre. Si el docente quiere que el modo competencia
  también oculte, hay que sumarle el flag allí (deuda, no en F4-03).
- **`ocultarPuntos` en el GET del intento** (`GET /api/quiz-attempts/:id`):
  hoy no se expone en el response. El `PostSubmitResult` se gatea con
  el `ocultarPuntos` que viene en el response del submit (campo nuevo).
  El alumno que refresca la página después de submit no ve el
  `Puntaje:` si el toggle estaba activo (porque el GET del intento
  no devuelve `score`/`maxScore` post-submit — se cachea en el cliente
  via `result`). Pero si en el futuro se agrega el score al GET del
  intento, hay que acordarse de gatearlo.
- **El `message` del backend puede contener texto extra** (ej.
  "Respuestas enviadas. ..."). El gate del backend sólo filtra el
  `(NN%)` literal. No es una regex robusta — si en el futuro el
  formato del `message` cambia, hay que actualizarlo. La versión
  actual del `message` es estable.
- **`puntajePorTema` con `temaSecundario` reparte 50/50** — es una
  convención que el plan no especificó al 100%. Si la UI muestra
  números "raros" (ej. 1.5 puntos en un tema), el docente puede
  reorganizar las posiciones para evitar el split. Tests documentan
  el comportamiento actual.

## 7. Aceptación

- `pnpm test:web`: **492/492** (456 anteriores + 36 nuevos F4-03). 0
  fallidos. 0 regresiones.
- `pnpm test:api`: **157/157** (sin cambios; los helpers de puntaje
  no rompen los tests pre-existentes porque F3-03 ya testeaba
  `puntajePorPosiciones` y `maxScoreCuestionario`, y los nuevos
  son funciones puras adicionales que la API no llama en este commit).
- Tests nuevos:
  - `puntaje.spec.ts` (13): agregación, split 50/50, sin doble conteo,
    puntaje 0, temas sin posiciones, sin acertadas, coherencia.
  - `RepartoPuntos.spec.tsx` (9): vacío, total, reparto, orden,
    con/sin acertadas, todas en 0, compact, singularización.
  - `PosicionesCanvas` (8 nuevos en el tercer `describe`): no-regresión
    input/select, cambio de puntaje, validación de entrada (vacío,
    negativo), cambio de tipo.
  - `PostSubmitResult.spec.tsx` (6): sin result, con/sin ocultarPuntos,
    sin canonical10, sin nota ("—").

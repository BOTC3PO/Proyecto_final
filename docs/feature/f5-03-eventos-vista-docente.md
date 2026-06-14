# F5-03 — Eventos informativos en la vista docente

> Estado: implementado. Plan K5/L2. El docente VE qué pasó durante
> el intento (salidas de pestaña, canario disparado), pero el sistema
> NO penaliza automáticamente. PRIVACIDAD: sólo se registra un
> contador numérico, nunca qué pestaña/app se abrió.

## 1. Contexto y motivación

F5-02 (runtime de evaluación) introdujo los mecanismos de
visibilidad/foco del navegador (visibilitychange, blur, beforeunload)
y el cronómetro con auto-envío. Pero el docente no tenía forma de
saber QUÉ pasó durante la evaluación: ¿el alumno salió de la pestaña
varias veces? ¿se disparó el canario de V2-04?

V2-04 ya guardaba `canaryTriggered` y `canaryQuestions` en el JSON
`grading` del intento. F5-03 reusa ese mismo canal (sin migration) y
suma un counter de salidas de pestaña. El docente ve los flags en
una vista dedicada, y decide si darles peso. El sistema nunca
penaliza automáticamente (decisión explícita del plan: "informar,
no castigar").

## 2. Decisiones de diseño

### 2.1 Privacidad — la garantía se mantiene y se refuerza

`document.visibilityState` es un BOOLEAN: el navegador sólo te dice
si la pestaña está visible o no. **NO expone qué otra pestaña se
abrió ni a qué URL se navegó.** F5-03 mantiene esa garantía:

- El cliente NUNCA envía timestamps individuales.
- El cliente NUNCA envía URLs visitadas.
- El cliente NUNCA envía el nombre de la app que se abrió.
- El cliente sólo envía un contador entero agregado.
- El backend almacena ese contador en el sub-objeto `events` del
  JSON `grading` (mismo canal que V2-04).
- El docente ve un número ("salió 3 veces") y nada más.

La nota de privacidad explícita del panel docente dice textualmente:
"Sólo se registra que la pestaña perdió visibilidad, nunca qué
pestaña o app se abrió."

### 2.2 Solo `visibilitychange→hidden` cuenta (no blur, no beforeunload)

`useFlushCounter` escucha SOLO el evento `visibilitychange` con
`document.hidden === true`. NO cuenta:

- `blur`: el alumno podría haber hecho click en la barra de URL
  sin cambiar de pestaña. Contar eso sería ruido (el docente vería
  números altos sin un evento claro de "miró a otro lado").
- `beforeunload`: el alumno está cerrando la pestaña, ya no tiene
  sentido contar (la siguiente vez que abra, será un nuevo intento).
- `focus`/`pageshow`/`pagehide`/`freeze`/`resume`: ninguno se
  considera "salida de pestaña" en el sentido que le importa al
  docente.

`useFlushOnHidden` (de F5-02) sí escucha blur y beforeunload porque
su objetivo es flush del outbox (sincronizar respuestas). Distinto
objetivo → distintos eventos.

### 2.3 Counter monotónico en el server (idempotencia sin locks)

El endpoint `PATCH /api/quiz-attempts/:id` hace merge MONOTÓNICO:
si llega un counter menor al ya guardado, lo descarta. Esto:

- Elimina la necesidad de locks o versiones.
- Hace que reenvíos fuera de orden sean seguros.
- Permite que el cliente envíe fire-and-forget en cada evento sin
  coordinación con el server.

Idempotencia cliente: el cliente envía el VALOR del counter (no un
delta). Cada PATCH reemplaza con `max(stored, incoming)`.

### 2.4 Preservar events al hacer submit

El submit construye un NUEVO objeto `grading` desde cero (canary,
mismatch, items, score). Sin cuidado, sobrescribiría los events que
el cliente PATCHeó. F5-03 lee el `grading` previo y arrastra la
sub-llave `events` al nuevo:

```ts
const priorGrading = safeJsonParse(attempt.grading ?? "{}", {});
const priorEvents = priorGrading.events ?? null;
// ... build new grading (canary, mismatch, items) ...
if (priorEvents) (grading as any).events = priorEvents;
```

Esto preserva el counter en el JSON final que verá el docente. El
test "submit preserva events" valida este comportamiento.

### 2.5 Endpoint NUEVO, no extensión del existente

`GET /api/quiz-attempts/:id` está filtrado por `userId` (sólo el
alumno dueño). Abrirlo a staff implicaría revisar sanitización de
canarios, exposición de `answerKey`, etc. F5-03 crea
`GET /api/quiz-attempts/:id/staff` con semántica explícita:

- Sólo roles staff (TEACHER/ADMIN).
- Mismo escuela que el alumno.
- Devuelve el `grading` COMPLETO (incluyendo `events` y los flags
  de V2-04).
- No expone `answerKey` ni datos de corrección manual (eso sigue
  en `CorreccionesPendientes` con su endpoint dedicado).

### 2.6 Tabla de flags: contadores vs booleanos

| Flag | Tipo | Fuente | Set en |
|------|------|--------|--------|
| `grading.canaryTriggered` | boolean | V2-04 | submit |
| `grading.canaryQuestions` | string[] | V2-04 | submit |
| `grading.serverAuthoritative` | boolean | I-2 | submit |
| `grading.materializationMismatch` | boolean | I-2 | submit |
| `grading.mismatchQuestions` | string[] | I-2 | submit |
| `grading.items` | Record<id, item> | WO07 | submit/grade |
| `grading.events.tabSwitchCount` | number | F5-03 (este) | PATCH + submit |

F5-03 introduce `events.*` como sub-objeto namespaced para que sea
fácil agregar más eventos en el futuro (e.g. "copió texto",
"imprimió pantalla", "click derecho") sin contaminar el JSON
principal.

### 2.7 No usar navegación a `/profesor/intentos/:id` si el docente no es staff

El endpoint `/staff` valida el rol server-side. El cliente sólo
monta la ruta bajo `ProtectedRoute allow={['TEACHER']}`. Doble
defensa: si un alumno conoce la URL, no puede ver el detalle de un
intento ajeno.

## 3. Implementación

### 3.1 Backend (api/src/)

- `lib/attemptEvents.ts` (NEW, 86 líneas):
  - `AttemptEvents` type con `tabSwitchCount?: number`.
  - `AttemptEventsSummary` type con `tabSwitchCount` (number) +
    `canaryTriggered` (boolean) — el resumen seguro para la UI.
  - `summarizeAttemptEvents(grading)` — extrae el resumen.
  - `mergeAttemptEvents(grading, patch)` — merge monotónico, nunca
    decrementa.
  - `formatTabSwitchLabel(count)` — etiqueta humana.
- `schema/quiz-attempt.ts` (modify): `QuizAttemptEventsPatchSchema`
  con Zod refine para body no vacío.
- `routes/quiz-attempts.ts` (modify):
  - `PATCH /api/quiz-attempts/:id` — merge events en grading.
  - `GET /api/quiz-attempts/:id/staff` — vista docente del intento.
  - El submit arrastra `events` del grading previo (evita
    sobrescritura accidental).

### 3.2 Frontend (apps/web/src/)

- `domain/quiz/attemptEvents.ts` (NEW, 47 líneas): mirror byte-a-byte
  del helper backend. Patrón ya establecido en
  `intentos.ts` ↔ `quiz-intentos.ts`.
- `hooks/useFlushCounter.ts` (NEW, 65 líneas): hook que cuenta
  `visibilitychange→hidden`. Retorna `{ count, reset }`. Es no-op
  cuando `enabled=false`.
- `components/profesor/AttemptEventsPanel.tsx` (NEW, 95 líneas):
  panel presentacional con tres estados:
  - Limpio: ✓ "Sin eventos registrados" (verde).
  - Con switches: ⚠ "Salió de la pestaña N veces" (ámbar).
  - Con canario: 🪤 "Canario disparado" (rojo).
  - Nota de privacidad siempre visible.
- `pages/profesor/IntentoDetalle.tsx` (NEW, 156 líneas): vista
  docente con datos básicos (score, status, fechas) + el panel.
- `pages/quizzes/QuizAttempt.tsx` (modify): wirea `useFlushCounter`
  + PATCH on count change.
- `pages/ProfesorCalificaciones.tsx` (modify): agrega link "Ver
  detalle" por fila.
- `router.tsx` (modify): ruta nueva `profesor/intentos/:attemptId`
  bajo `ProtectedRoute allow={['TEACHER']}`.

## 4. Casos canónicos

| # | Escenario | Resultado |
|---|-----------|-----------|
| 1 | Alumno nunca cambia de pestaña, envía normal | `events.tabSwitchCount = 0`, panel: ✓ |
| 2 | Alumno sale 1 vez | `tabSwitchCount = 1`, panel: ⚠ "Salió 1 vez" |
| 3 | Alumno sale 5 veces | `tabSwitchCount = 5`, panel: ⚠ "Salió 5 veces" |
| 4 | Alumno dispara canario (V2-04) | `canaryTriggered = true`, panel: 🪤 |
| 5 | Alumno sale 3 veces Y dispara canario | Ambos flags, panel muestra ambos |
| 6 | Alumno PATCHea 5, luego 3 (orden de red) | Server guarda 5 (monotónico) |
| 7 | Alumno PATCHea 5, luego 8 | Server guarda 8 (mayor gana) |
| 8 | Submit con `events` previos en grading | Submit arrastra `events`, no los pierde |
| 9 | PATCH sobre intento ya entregado | 409 (no se puede modificar) |
| 10 | PATCH desde alumno ajeno al intento | 404 (ownership check) |
| 11 | GET /staff desde alumno no-staff | 403 |
| 12 | GET /staff desde docente de otra escuela | 403 |
| 13 | Flag `canaryTriggered` pre-existente | Se preserva, panel lo muestra junto con switches |

## 5. Compatibilidad hacia atrás

- **V2-04**: el flag `canaryTriggered` sigue funcionando idéntico.
  F5-03 sólo lo LEE para mostrarlo en el panel; no lo modifica.
- **I-2**: `materializationMismatch` también se preserva (no se toca
  en el submit, sólo se arrastran los `events`).
- **WO07** (corrección manual): sin cambios. La corrección
  manual sigue viviendo en `/grade` y en `CorreccionesPendientes`.
- **F5-01** (entrega incremental): sin cambios. La cola offline de
  respuestas sigue independiente de los events informativos.
- **F5-02** (runtime de evaluación): sin cambios. `useFlushOnHidden`
  sigue para el flush del outbox; `useFlushCounter` es NUEVO y
  independiente.
- **F4-04** (config evaluación): sin cambios. F5-03 no necesita
  config adicional — el counter siempre está activo durante la
  evaluación (no se gatea por `fullscreenOnStart` ni por tipo).
- **Pre-F5-03**: el JSON `grading` se sigue construyendo desde cero
  en el submit. Si tenía `events` previo, F5-03 los preserva. Si NO
  tenía, simplemente no hay `events` (el panel muestra el estado
  limpio).

## 6. Limitaciones y trabajo futuro

- **El counter es global del intento, no por pregunta**. Si el
  docente quiere saber "¿salió de la pestaña justo antes de la
  pregunta 5?", no se puede. Eso requeriría timestamps por
  evento, que F5-03 explícitamente NO implementa por privacidad.
- **El counter no se persiste entre reloads**. Si el alumno hace F5
  y vuelve a la pestaña, el counter local es 0 (el hook resetea
  con `enabled=true`). El último valor PATCHeado al server
  sobrevive. Si el alumno nunca volvió al intent, el último
  counter PATCHeado se mantiene en el grading.
- **No se registran clicks derechos, copy, paste, ni print screen**.
  F5-03 es deliberadamente minimal. Si la escuela necesita esas
  señales, son features explícitas adicionales, no side-effects.
- **No hay endpoint para resetear los events** (e.g. un docente
  que se equivocó). Los events son append-only por diseño.
- **El PATCH no valida la membresía al aula**. F5-03 valida que el
  alumno sea dueño del intento (`where: { id, userId }`). Si el
  docente quiere ver el detalle, usa `/staff` que valida el rol y
  escuela.

## 7. Aceptación

`pnpm --filter api test` → **208/208 passing** (era 187, +21 F5-03:
12 helper + 9 PATCH).

`pnpm --filter web test` → **581/581 passing** (era 566, +15 F5-03:
7 useFlushCounter + 8 AttemptEventsPanel).

Cambios pre-existentes verificados: api 187/187 antes, web 566/566
antes. Sin regresiones.

Typecheck web: sin errores introducidos por F5-03.

Tests nuevos (36 en total):

### Backend (21)
- `attempt-events-helpers.test.ts` (12): null/undefined, lectura del
  contador, clamp de negativos/no-numéricos, detección del canario
  de V2-04, preservación de campos previos, merge monotónico (no
  decrementa, acepta mayor), idempotencia, patch vacío no rompe,
  label humano (0/1/N/negativo).
- `quiz-attempts-events.test.ts` (9): PATCH persiste, monotónico 5→3
  descarta, monotónico 5→8 acepta, preserva canaryTriggered, no
  toca score/status/answers, 404 ajeno, 409 intento entregado, 400
  body vacío, 400 negativo.

### Frontend (15)
- `useFlushCounter.spec.tsx` (7): estado inicial, incrementa en
  visibilitychange hidden, NO incrementa en visible, enabled=false
  no-op, reset, cleanup, cambio enabled resetea.
- `AttemptEventsPanel.spec.tsx` (8): estado limpio, switch > 0,
  singular/plural, canario, ambos a la vez, nota de privacidad,
  colapsar/expandir.

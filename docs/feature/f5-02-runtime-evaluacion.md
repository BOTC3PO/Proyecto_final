# F5-02 — Runtime de evaluación: fullscreen, flush, auto-envío por tiempo

> Estado: implementado. Cierra el plan K5 (fullscreen) que F4-04
> dejó como side-work y agrega el comportamiento del alumno en
> evaluación: fullscreen opt-in, flush al cambiar de pestaña, y
> auto-envío al agotarse el tiempo.

## 1. Contexto y motivación

F4-04 modeló la config per-cuestionario (timer, fullscreen, intentos,
política, ocultarPuntos) y la persistió en `QuizVersion.settings`. Lo
que **NO** hizo fue wirear el runtime del alumno:

- `fullscreenOnStart` estaba declarado en el JSDoc de `QuizAttempt`
  (L86-91) pero ningún botón lo consumía. El alumno no podía entrar
  a fullscreen.
- El timer se iniciaba con un `setInterval` inline (L330-344) que
  corría SÓLO cuando `modoCompetencia` era true, lo cual era un bug
  de F4-04: `modoCompetencia` se setteaba con `timerSeg !== null`
  (incluía `formal` con timer), pero la variable también se usaba
  para el ranking de competencia (que sólo aplica a `competencia`).
  Un `formal` con timer intentaba guardar ranking de competencia.
- Al cambiar de pestaña o cerrar la ventana, las respuestas
  respondidas pero no sincronizadas se perdían (F5-01 las encolaba
  en localStorage, pero faltaba disparadores automáticos que
  drenaran la cola al perder foco).
- Al agotarse el tiempo, el `setInterval` llamaba a `handleSubmit`
  pero los inputs no se bloqueaban: el alumno podía seguir
  respondiendo después del tiempo.

F5-02 cierra los cuatro puntos.

## 2. Decisiones de diseño

### 2.1 Tres hooks + un componente

Toda la lógica nueva vive en cuatro archivos presentacionales /
de hook, no en `QuizAttempt.tsx`:

```
apps/web/src/hooks/
  useCountdown.ts            Cuenta regresiva con onExpire.
  useFlushOnHidden.ts        Listener de visibility/blur/beforeunload.
  useFullscreen.ts           Wrapper de la Fullscreen API con fallback.
apps/web/src/components/quizzes/
  Cronometro.tsx             Chip visual + banner de "tiempo agotado".
```

Razón: cada hook es testeable de forma aislada y reusable. El
`QuizAttempt` queda como capa de wireado, no como contenedor de
toda la lógica.

### 2.2 Fullscreen con fallback (decisión clave)

`document.requestFullscreen()` exige un user-gesture (click o
keydown). No se puede invocar desde un `useEffect` on mount. Tres
opciones:

| Opción | Pro | Contra |
|--------|-----|--------|
| (a) Auto-prompt al cargar la página | Sin fricción | Imposible: la API rechaza |
| (b) Botón "Empezar evaluación" | Un click, user-gesture OK | Fricción |
| (c) Pre-quiz screen con CTA | Educativo, espacio para instructions | Más UI |

**Decisión: (c)**. Cuando `fullscreenOnStart=true`, se renderiza una
pantalla previa con:
- Título del quiz.
- Texto explicativo ("esta evaluación requiere pantalla completa").
- 3 bullets informativos (tiempo, flush, auto-envío).
- Botón "Empezar evaluación" (azul) que llama a `requestFullscreen()`.
- Link "Cancelar" que vuelve a `/modulos`.
- Banner ámbar opcional si el request falla ("No se pudo entrar a
  pantalla completa, la evaluación continúa igual").

Cuando `fullscreenOnStart=false`, NO se muestra esta pantalla: el
quiz renderiza directo (preserva el comportamiento de siempre).

### 2.3 Cierre del gap de fullscreen de F4-04

F4-04 documentó en `f4-04-evaluacion-config.md:230-235`:
> El flag está persistido y expuesto en el tipo Attempt, pero el
> botón "Iniciar evaluación" con requestFullscreen() no se
> implementó (Fullscreen API requiere user-gesture, agrega
> complejidad ortogonal al scope). Documentado como limitación.

F5-02 cierra ese gap.

### 2.4 Privacidad — la garantía es trivial de mantener

`document.visibilityState` y `document.hidden` son **booleanos** que
indican sólo si la pestaña está visible. El navegador **no expone**
qué otra pestaña se abrió ni a qué URL. El código:

```ts
const onVisibilityChange = () => {
  const isHidden =
    document.hidden === true ||
    document.visibilityState === "hidden";
  if (isHidden) flush();
};
```

- NO loggea el evento en consola.
- NO envía un beacon al backend.
- NO rastrea qué hizo el alumno en otra pestaña.
- Sólo dispara el flush local de la cola offline (F5-01).

F5-02 no introduce ninguna capacidad de vigilancia. El flush es
local → usa la cola offline de F5-01 que sincroniza en background.

### 2.5 Bug pre-existente de F4-04 que F5-02 cierra

F4-04 mezcló dos significados en una sola variable:

```ts
// F4-04 (incorrecto):
setModoCompetencia(true);  // cuando timerSeg !== null
// Uso 1: muestra cronómetro
modoCompetencia && tiempoRestante !== null  // ✓ correcto (timer activo)
// Uso 2: muestra ranking
modoCompetencia && ranking.length > 0  // ✗ incorrecto (ranking es de competencia)
// Uso 3: guarda ranking
if (modoCompetencia && tiempoInicio) { apiPost("/competencia", ...) }  // ✗
```

Un `formal` con timer (default 3 intentos, timer null → docente
lo setea) intentaba guardar ranking de competencia, contaminando
datos. F5-02 corrige:

```ts
const esCompetencia = attempt?.quizType === "competencia";
// ...
if (esCompetencia && tiempoInicio) { apiPost("/competencia", ...) }
{esCompetencia && ranking.length > 0 && (<TablaPosiciones />)}
```

`modoCompetencia` se eliminó del estado; en su lugar
`countdown.isExpired` y `timerSegundosValue` (derivado) reemplazan
el uso 1.

### 2.6 Lock de inputs al expirar

Cuando el countdown llega a 0, `countdown.isExpired` pasa a true.
Todos los inputs (textareas, radios, checkboxes, renderers
especiales) reciben `disabled={inputsDisabled}` donde
`inputsDisabled = countdown.isExpired || submitStatus === "submitting" || submitStatus === "submitted"`.

El botón "Enviar respuestas" también se bloquea y su texto cambia
a "Tiempo agotado — enviar" mientras el auto-submit está en curso.

NO se muestra una pantalla en blanco. NO se echa al alumno. El
banner `Cronometro` con role="alert" anuncia "⏰ Tiempo agotado —
enviando respuestas...".

### 2.7 Auto-envío no doble

`useCountdown.onExpire` se llama una sola vez por ciclo. Pero el
`onExpire` también chequea `submitStatus` antes de llamar a
`handleSubmit`:

```ts
onExpire: () => {
  if (submitStatus !== "submitted" && submitStatus !== "submitting") {
    void handleSubmit();
  }
}
```

Si el alumno ya submiteó manualmente justo antes del 0, el guard
previene un segundo submit.

## 3. Implementación

### 3.1 `useCountdown`

```ts
function useCountdown({ initialSeconds, onExpire }): {
  remaining: number | null;
  isExpired: boolean;
}
```

- Si `initialSeconds === null`, no-op: `{ remaining: null, isExpired: false }`.
- Si `initialSeconds` cambia (carga de nuevo intento), reset.
- Decrementa 1/segundo vía `setInterval`. La lógica de "decrementar"
  está en el updater puro de `setRemaining`; la de "expirar" en un
  `useEffect` separado que mira el valor.
- `onExpire` se llama UNA vez por ciclo. Un error del callback NO
  rompe el cronómetro (try/catch interno).

### 3.2 `useFlushOnHidden`

```ts
function useFlushOnHidden(callback: () => void | Promise<void>): void
```

Suscribe a tres eventos:
- `document.visibilitychange` con `document.hidden === true`.
- `window.blur`.
- `window.beforeunload`.

Dispara el callback en cualquiera de los tres. NO se loggea, NO se
envía al backend. Idempotencia delegada al callback
(`flushOutbox` lo es).

### 3.3 `useFullscreen`

```ts
function useFullscreen({ enabled, onFallback }): {
  isFullscreen: boolean;
  request: () => Promise<boolean>;
  exit: () => Promise<void>;
}
```

- `request()`: si la API no está disponible o el usuario la deniega,
  resuelve `false` y llama a `onFallback`. NO tira error.
- Soporta prefijos viejos (`webkit`, `moz`, `ms`) defensivamente.
- Escucha `fullscreenchange` (y prefijos) para mantener
  `isFullscreen` en sync.
- Cleanup de todos los listeners en unmount.

### 3.4 `Cronometro`

Componente presentacional:
- `remaining === null && !expired` → no renderiza nada.
- `expired === true` → banner rojo `role="alert"` con
  "⏰ Tiempo agotado — enviando respuestas...".
- `remaining <= 60` → chip rojo pulsante `data-remaining-seconds`.
- `remaining <= 180` → chip ámbar.
- `remaining > 180` → chip verde.

Exporta también `formatTiempo(seg)` (MM:SS con padding) para
reuso en otros componentes si hace falta.

### 3.5 Wireado en `QuizAttempt.tsx`

Cambios principales:
- Importa `useCountdown`, `useFlushOnHidden`, `useFullscreen`,
  `Cronometro`.
- Elimina `setTiempoRestante`, `setModoCompetencia`. Mantiene
  `setTiempoInicio` (para el ranking de competencia).
- Reemplaza el `useEffect` con `setInterval` (L330-344) por la
  llamada a `useCountdown`. El cronómetro inline se reemplaza por
  `<Cronometro />`.
- Agrega un gate de "Empezar evaluación" antes del render del quiz
  (cuando `fullscreenOnStart=true`).
- Deriva `esCompetencia` de `quizType === "competencia"` y lo usa
  en el save/load del ranking.
- Todos los inputs reciben `disabled={inputsDisabled}` (donde
  `inputsDisabled` incluye `countdown.isExpired`).

## 4. Casos canónicos

| # | Escenario | Resultado |
|---|-----------|-----------|
| 1 | fullscreenOnStart=true, alumno hace click en "Empezar evaluación" | Entra a fullscreen, renderiza el quiz, timer corre |
| 2 | fullscreenOnStart=true, alumno DENIEGA fullscreen | Quiz renderiza igual, banner ámbar de fallback arriba |
| 3 | fullscreenOnStart=true, API no disponible | Quiz renderiza, banner ámbar de fallback |
| 4 | fullscreenOnStart=false | Quiz renderiza directo, sin gate, sin banner |
| 5 | Timer activo, alumno cambia de pestaña | flushOutbox se llama, intento SIGUE abierto |
| 6 | Timer activo, alumno cierra la pestaña | flushOutbox se llama, intento se cierra (intento en outbox) |
| 7 | Timer llega a 0 | Inputs se bloquean, banner rojo aparece, auto-submit, no se echa al alumno |
| 8 | Alumno submitea manualmente antes del 0 | submitStatus="submitted", guard previene auto-submit al llegar a 0 |
| 9 | Alumno contesta y se va a otra pestaña | Respuesta en outbox (F5-01) + flush al volver (F5-02), todo sin alert al backend |
| 10 | formal con timer (no es competencia) | Cronómetro corre, auto-submit al 0, NO se guarda ranking |
| 11 | competencia con timer | Cronómetro corre, auto-submit al 0, SÍ se guarda ranking (F5-02 usa esCompetencia) |

## 5. Compatibilidad hacia atrás

- **F4-04** sigue funcionando idéntico: los 5 campos en
  `QuizVersion.settings` se siguen persistiendo y leyendo igual.
- **F4-03** sin cambios: `ocultarPuntos` y `PostSubmitResult` siguen
  comportándose igual.
- **F5-01** sin cambios en la API: el outbox sigue siendo el mismo,
  F5-02 sólo lo dispara en más eventos. La idempotencia del
  outbox garantiza que no haya envíos duplicados.
- **Pre-F5-02**: el `setInterval` y la variable `modoCompetencia` se
  eliminan. Si algún test externo dependía de esos nombres, hay
  que actualizarlo.

## 6. Limitaciones y trabajo futuro

- **Aislamiento docente-alumno**: la configuración vive en
  `QuizVersion.settings` (JSON). Si el docente cambia la config
  mientras el alumno está respondiendo, el alumno ve la config
  original del intento (F3-04 ya validó este patrón).
- **Persistencia del fullscreen entre reloads**: si el alumno hace
  F5 (recarga), el gate vuelve a aparecer. No se persiste
  `hasStarted=true` en localStorage. Es un comportamiento
  aceptable (no es un examen serio), pero podría ser un work item
  futuro.
- **Tracking de "cuánto tiempo pasó en otra pestaña"**: NO se
  implementa por privacidad. Si la escuela necesita métricas de
  "tiempo fuera de la pestaña", debe ser una feature explícita y
  anunciada, no un side-effect.
- **Bug pre-existente del wireado `modoCompetencia`**: F5-02 lo
  cierra para el ranking y el cronómetro, pero `attempt.instructions`
  sigue sin persistirse en el backend (F4-04 lo documentó como
  side-work). Queda como work item.
- **Bug pre-existente F3-04 `attemptNo`**: hardcoded a 1.
  Documentado en `f3-04-politica-intentos.md §6`. F5-02 NO lo
  arregla.

## 7. Aceptación

`pnpm --filter web test` → **566/566 passing**.

Cambios respecto al estado pre-F5-02:
- Web: 538 → 566 (+28: 6 useCountdown + 6 useFlushOnHidden +
  5 useFullscreen + 8 Cronometro + 3 integración QuizAttempt).
- Api: 187 → 187 (sin cambios, F5-02 es 100% web).
- Typecheck web: sin errores introducidos por F5-02 (los pre-existentes
  en vblang/linter.ts y atomosEnlaces.distractores.spec.ts siguen).

Tests nuevos (28):
- `hooks/__tests__/useCountdown.spec.tsx` (6): inicial, decremento,
  expiración una vez, no-op null, reset, error en onExpire.
- `hooks/__tests__/useFlushOnHidden.spec.tsx` (6): blur, beforeunload,
  visibilitychange hidden, visibilitychange visible, cleanup, error.
- `hooks/__tests__/useFullscreen.spec.tsx` (5): request ok, request
  rechazado, API no disponible, enabled=false, cleanup de listener.
- `components/quizzes/__tests__/Cronometro.spec.tsx` (8): no-op,
  verde/ámbar/rojo, expired banner, formatTiempo con padding/clamp.
- `pages/quizzes/__tests__/QuizAttempt.f5-02.spec.tsx` (3): gate
  fullscreen, timer 0 → lock + submit, visibility hidden → flush
  sin submit.

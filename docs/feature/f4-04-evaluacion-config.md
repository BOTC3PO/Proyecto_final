# F4-04 — Configuración de modo evaluación (timer, intentos, fullscreen)

> Estado: implementado. Es la UI sobre la config que F3-04 modeló (F3-04
> leyó `maxIntentos` y `politicaNota` pero no los escribía; F4-04 cierra
> ese gap y agrega timer + fullscreen). Cierra el plan ronda 7 (config
> per-cuestionario) y los planes K5 (fullscreen) y K6 (timer per-cuestionario
> en evaluación, no en módulos generales), que NO estaban documentados en
> el repo — F4-04 los decide.

## 1. Contexto y motivación

F3-04 introdujo la noción de `maxIntentos`/`politicaNota` en
`QuizVersion.settings` y agregó los endpoints de la API para usarlos. El
helper `parseIntentoPolicy` (api/src/lib/quiz-intentos.ts:89) los leía
del settings. **Pero el wireado del PUT del route de módulos
(`api/src/routes/modulos.ts:564-573`) NO los persistía**: los campos
estaban en el modelo pero el docente no tenía forma de setearlos desde
la UI (los tenía que escribir a mano en el JSON de `settings`).

F4-04 cierra ese gap con un panel presentacional y wirea:
- `maxIntentos` (F3-04) — por cuestionario, gating por tipo.
- `politicaNota` (F3-04) — gating por tipo.
- `timerSegundos` (F4-04) — per-cuestionario, gating por tipo.
- `fullscreenOnStart` (F4-04) — per-cuestionario, gating por tipo.
- `ocultarPuntos` (F4-03) — cualquier tipo (de F4-03, ahora wireado).

## 2. Decisiones de diseño

### 2.1 Plans K5/K6 no documentados

El brief menciona planes "K5" (fullscreen) y "K6" (timer). Ambos NO
están en `docs/`, en commits, ni en CHANGELOG. Las únicas referencias
a un "plan K" son "K3" mencionado en F2-04 y F-I-2.

**Decisiones tomadas en F4-04** (a discutir/discutibles):
- **K6 — Timer**: per-cuestionario (no per-pregunta). El cronómetro
  es del cuestionario entero, no de cada pregunta. Rango: 30s..3h
  (`TIMER_SEGUNDOS_MIN=30`, `TIMER_SEGUNDOS_MAX=3*60*60`). Default
  conservador `null` (sin timer) para `formal`; el docente activa
  explícitamente. Default `600` (10 min) para `competencia` —
  preserva el hardcode pre-F4-04.
- **K5 — Fullscreen**: per-cuestionario, toggle on/off. Default
  `false` para `practica` y `competencia`; `true` para `formal`.
  Se activa con un click en un botón "Empezar evaluación" del runner
  (user-gesture requirement de la Fullscreen API).

### 2.2 Estructura de la config

```ts
type EvaluacionConfig = {
  timerSegundos: number | null;       // null = sin timer
  fullscreenOnStart: boolean;
  maxIntentos: number | null;          // F3-04: null = ilimitado
  politicaNota: "mejor" | "ultima" | "primera" | "promedio";  // F3-04
  ocultarPuntos: boolean;             // F4-03
};
```

**Persistencia**: `QuizVersion.settings` (JSON, sin migration, patrón
F3-01/F3-04/F4-03). Los 5 campos viven top-level del JSON:

```json
{
  "type": "formal",
  "mode": "manual",
  "composition": {...},
  "maxIntentos": 3,
  "politicaNota": "ultima",
  "ocultarPuntos": false,
  "timerSegundos": 1800,
  "fullscreenOnStart": true
}
```

### 2.3 Defaults por tipo (tabla canónica)

| `type`         | `timerSegundos` | `fullscreenOnStart` | `maxIntentos` | `politicaNota` | `ocultarPuntos` |
|----------------|-----------------|---------------------|---------------|----------------|-----------------|
| `practica`     | `null`          | `false`             | `null` (∞)    | `"mejor"`      | `false`         |
| `formal`       | `null`          | `true`              | `3`           | `"ultima"`     | `false`         |
| `competencia`  | `600` (10 min)  | `false`             | `null` (∞)    | `"mejor"`      | `false`         |

Default `timerSegundos = null` para `formal` es conservador: el
docente activa explícitamente. Default `600` para `competencia`
preserva el hardcode pre-F4-04 (`QuizAttempt.tsx:163` era
`const duracionSeg = 10 * 60`).

### 2.4 Gating por tipo en la UI

El componente `EvaluacionConfig` muestra los inputs condicionalmente:

| Sección                  | `practica` | `formal` | `competencia` |
|--------------------------|------------|----------|---------------|
| Timer (`config-timer`)   | oculto     | sí       | sí            |
| Intentos (`config-intentos`) | oculto | sí       | oculto        |
| Política (`config-politica`) | oculto | sí       | oculto        |
| Fullscreen (`config-fullscreen`) | oculto | sí | oculto        |
| Ocultar puntos (`config-ocultar-puntos`) | sí | sí | sí       |

**"Módulo general no expone timer"** se cumple automáticamente:
`timerSegundos` se renderiza sólo para `formal` y `competencia`,
nunca para `practica`.

### 2.5 Resolución de defaults: `0` (ilimitado) vs `undefined` (ausente)

`maxIntentos = 0` y `maxIntentos = undefined` se distinguen en
`parseEvaluacionConfig`:
- `undefined` (ausente) → usa el default del tipo.
- `0` (presente) → ilimitado explícito (alias histórico F3-04).

Esto es importante porque F3-04 documentó: "`maxIntentos = 0` significa
ILIMITADO". Si el docente setea `0` explícitamente (e.g., quiere que el
cuestionario formal sea de práctica con intentos ilimitados), NO se
debe aplicar el default. Tests cubren los dos casos.

### 2.6 Wireado backend: cierre del gap de F3-04

`api/src/routes/modulos.ts`:
- **PUT (rama update)**: las settings se arman con `maxIntentos`,
  `politicaNota`, `timerSegundos`, `fullscreenOnStart`,
  `ocultarPuntos` además de los campos pre-existentes. Antes
  faltaban los 4 de F3-04/F4-04.
- **POST (rama create)**: idem.
- **GET**: expone los 5 campos en el DTO de cada quiz.

Schema Zod `ModuleQuizSchema` (`api/src/schema/modulo.ts:45-89`)
ampliado con los 5 campos (cierra un typecheck pre-existente que
F4-03 también tenía).

### 2.7 Wireado frontend: el editor del módulo

`apps/web/src/pages/modulos/ModuloEditor.tsx`:
- Importa `EvaluacionConfig` y `parseEvaluacionConfig`.
- Sub-componente local `EvaluacionConfigEditor({ quiz, updateQuiz })`
  que sintetiza un "settings" virtual desde los campos del quiz
  (`maxIntentos`, `politicaNota`, `timerSegundos`,
  `fullscreenOnStart`, `ocultarPuntos`), llama a
  `parseEvaluacionConfig` para resolver defaults del tipo, y monta
  `<EvaluacionConfig>` con los callbacks que llaman a `updateQuiz`.
- Se renderiza dentro de la tarjeta del quiz, después de las
  instrucciones, antes del editor (manual o generated). Mismo lugar
  que `QuizComposicionEditor` (relativo al editor de preguntas).

### 2.8 Wireado runner: timer per-cuestionario

`apps/web/src/pages/quizzes/QuizAttempt.tsx`:
- Reemplaza el hardcode `const duracionSeg = 10 * 60;` (línea 163) por
  lectura de `data.timerSegundos`. Si es `null` o no es número, no
  se inicia cronómetro. Si es número positivo, se inicia.
- Cambio crítico: el `modoCompetencia` flag ahora se setea en
  función de `timerSegundos !== null`, no de `data.quizType ===
  "competencia"`. Es decir, un `formal` con `timerSegundos: 1800`
  muestra cronómetro; un `competencia` con `timerSegundos: null` no.
- Tipo `Attempt` (`apps/web/src/pages/quizzes/QuizAttempt.tsx:67-89`)
  ampliado con `timerSegundos?: number | null` y
  `fullscreenOnStart?: boolean`.

## 3. Cadena de propagación

| Capa | Archivo | Qué hace con F4-04 |
|------|---------|--------------------|
| Lib (api) | `api/src/lib/quiz-intentos.ts` (+108 líneas) | `EvaluacionConfig`, `DEFAULT_EVALUACION_CONFIG`, `parseEvaluacionConfig`, `serializeEvaluacionConfig`, `mergeEvaluacionConfigIntoSettings`, `clampTimerSegundos`. |
| Lib (web) | `apps/web/src/domain/quiz/intentos.ts` (nuevo, mirror) | Mismos exports, sin imports. |
| Lib tests (api) | `api/tests/integracion/quiz-evaluacion-config.test.ts` (nuevo, 23 tests) | Defaults por tipo, coerción, round-trip, clamp, constants. |
| Lib tests (web) | `apps/web/src/domain/quiz/__tests__/intentos.spec.ts` (nuevo, 25 tests) | Mirror del api spec. |
| Schema Zod | `api/src/schema/modulo.ts:45-89` | 5 campos nuevos en `ModuleQuizSchema` (maxIntentos, politicaNota, timerSegundos, fullscreenOnStart, ocultarPuntos). |
| Backend settings | `api/src/routes/modulos.ts:491, 562-595, 245-253` | Persiste los 5 campos en PUT/POST y los expone en GET. |
| Tipo | `apps/web/src/domain/module/module.types.ts:53-63` | 4 campos nuevos en `ModuleQuiz` (`maxIntentos`, `politicaNota`, `timerSegundos`, `fullscreenOnStart`). `ocultarPuntos` ya estaba (F4-03). |
| Tipo | `apps/web/src/pages/quizzes/QuizAttempt.tsx:67-89` | `timerSegundos` y `fullscreenOnStart` en el tipo `Attempt`. |
| Componente | `apps/web/src/components/modulos/EvaluacionConfig.tsx` (nuevo, 207 líneas) | Panel presentacional con 5 secciones gated por tipo. |
| Componente tests | `apps/web/src/components/modulos/__tests__/EvaluacionConfig.spec.tsx` (nuevo, 14 tests) | Gating por tipo, defaults, callbacks, read-only. |
| Editor | `apps/web/src/pages/modulos/ModuloEditor.tsx:1715, 2135-2172` | Import + sub-componente `EvaluacionConfigEditor` que conecta con `updateQuiz`. |
| Runner | `apps/web/src/pages/quizzes/QuizAttempt.tsx:160-178` | Reemplaza el `10 * 60` hardcodeado por lectura de `data.timerSegundos`. |

## 4. Tabla de casos canónicos

### 4.1 Defaults por tipo

| `type`         | `parseEvaluacionConfig(null, type)`                                                                                        |
|----------------|----------------------------------------------------------------------------------------------------------------------------|
| `practica`     | `{timer: null, fullscreen: false, maxIntentos: null, politica: "mejor", ocultarPuntos: false}`                              |
| `formal`       | `{timer: null, fullscreen: true, maxIntentos: 3, politica: "ultima", ocultarPuntos: false}`                                |
| `competencia`  | `{timer: 600, fullscreen: false, maxIntentos: null, politica: "mejor", ocultarPuntos: false}`                              |

### 4.2 Gating del componente

| `type`         | `data-testid="config-timer"` | `data-testid="config-intentos"` | `data-testid="config-politica"` | `data-testid="config-fullscreen"` | `data-testid="config-ocultar-puntos"` |
|----------------|------------|------------|------------|------------|------------|
| `practica`     | ausente    | ausente    | ausente    | ausente    | presente   |
| `formal`       | presente   | presente   | presente   | presente   | presente   |
| `competencia`  | presente   | ausente    | ausente    | ausente    | presente   |

### 4.3 Cierre del gap de F3-04 (round-trip)

| Paso | Acción                                                                                              |
|------|-----------------------------------------------------------------------------------------------------|
| 1    | `parseEvaluacionConfig(null, "formal")` → `{maxIntentos: 3, politicaNota: "ultima", ...}`           |
| 2    | `serializeEvaluacionConfig(...)` → `{maxIntentos: 3, politicaNota: "ultima", timerSegundos: null, ...}` |
| 3    | `JSON.stringify(...)`                                                                              |
| 4    | `parseEvaluacionConfig(JSON.stringify(...), "formal")` → mismo objeto del paso 1                    |
| 5    | `mergeEvaluacionConfigIntoSettings(JSON.stringify(existente), ...)` preserva `type`/`mode`/`composition` y agrega los 5 nuevos |

Casos cubiertos por los tests de `intentos.spec.ts` y `quiz-evaluacion-config.test.ts`.

## 5. Compatibilidad hacia atrás

- **`F3-04`**: el modelo ya leía `maxIntentos` y `politicaNota` del
  settings. F4-04 NO los cambia, sólo los wirea al PUT y al editor.
  Los 22 tests pre-existentes de F3-04 (`quiz-attempts-f3-04-intentos.test.ts`)
  siguen pasando sin cambios — el modelo de lectura no cambió.
- **`F4-03`**: `ocultarPuntos` ya estaba wireado (POST/PUT/GET y
  gating del runner/message). F4-04 lo unifica en el panel
  `EvaluacionConfig` para que viva en un solo lugar con los demás
  toggles. Cero cambios de comportamiento.
- **QuizAttempt timer**: el comportamiento pre-F4-04 era
  `competencia` siempre con timer de 10 min. Post-F4-04, el `timer`
  se lee del settings (default `600` para `competencia` =
  preserva el comportamiento). Un `competencia` sin
  `timerSegundos` configurado sigue siendo 10 min.
- **Sin migration Prisma**: los 5 campos viven en `QuizVersion.settings`
  (JSON, patrón F3-01/F3-04/F4-03). Cero impacto en el schema.
- **No-regresión PosicionesCanvas/RepartoPuntos/PostSubmitResult**:
  las 36 tests de F4-03 siguen pasando sin cambios.

## 6. Limitaciones conocidas

- **Wireado del `fullscreenOnStart` en el runner del alumno** (UI):
  F4-04 leyó el flag en el tipo `Attempt` y lo persistió, pero el
  wireado al botón "Iniciar evaluación" del runner queda como
  side-work. La razón: la Fullscreen API exige un user-gesture
  (click), y agregar un nuevo estado "starting" en `QuizAttempt.tsx`
  es trabajo ortogonal al scope de F4-04 (que es el panel de
  config). El flag está persistido y expuesto; cualquier frontend
  que lo quiera usar puede llamar a
  `document.documentElement.requestFullscreen()` en un handler de
  click. Tests del componente `EvaluacionConfig` cubren la UI
  (toggle renderiza con `fullscreenOnStart` del tipo). F4-05+
  debería cerrar este wireado.
- **El campo `instructions` (textarea en el editor) sigue sin
  persistirse en el backend** — bug pre-existente que F4-03 ya
  documentó. F4-04 no lo toca. Es ortogonal.
- **`ModuleQuiz.type` divergence con el Zod schema**: el tipo front
  dice `"formal"`, el Zod dice `"evaluacion"`. El
  `parseEvaluacionConfig` (api) lo recibe como string y cae a
  `practica` si es desconocido, así que no rompe — pero el
  `modulos.ts:565` hace `q.type ?? "practica"`. Es una divergencia
  pre-existente que NO se tocó.
- **No hay tests del wireado `ModuloEditor → setQuizzes`**: el
  sub-componente `EvaluacionConfigEditor` no está testeado en
  aislamiento. Confiamos en los tests del componente
  `EvaluacionConfig` (que cubren los callbacks) y en los tests
  pre-existentes del editor. F4-05 podría sumar un test de
  integración.
- **Defaults F3-04 vs F4-04**: F3-04 ya tenía `DEFAULT_MAX_INTENTOS = 0`
  (ilimitado) y `DEFAULT_POLITICA[formal] = "ultima"`. F4-04 los
  respeta pero agrega la distinción `0` (ilimitado explícito) vs
  `undefined` (default). Cero cambios para cuestionarios ya
  configurados.

## 7. Aceptación

- `pnpm test:web`: **531/531** (492 anteriores + 39 F4-04). 0 fallidos,
  0 regresiones.
- `pnpm test:api`: **180/180** (157 anteriores + 23 F4-04). 0 fallidos,
  0 regresiones.
- Typecheck (api + web): sin errores introducidos por F4-04 (los 3
  errores pre-existentes de `vblang/linter.ts:534-535` siguen y no
  son de F4-04).
- Tests nuevos:
  - `intentos.spec.ts` (web, 25 tests): defaults por tipo, JSON
    inválido, back-compat, override, coerción de 0/negativo/null,
    string coerce, round-trip parse↔serialize, merge preserva
    campos, clamp bordes, NaN/Infinity, constants sanity.
  - `EvaluacionConfig.spec.tsx` (web, 14 tests): gating por tipo
    (3 tests), defaults coherentes (3 tests), callbacks (6
    tests), read-only sin callbacks (2 tests).
  - `quiz-evaluacion-config.test.ts` (api, 23 tests): mirror del
    spec web con `node:test` + `node:assert/strict`.
- Wireado:
  - Backend `modulos.ts` PUT/POST/GET para los 5 campos.
  - Zod schema ampliado (cierra un typecheck pre-existente).
  - Front `ModuleQuiz` con 4 campos nuevos.
  - Front `QuizAttempt` con `timerSegundos`/`fullscreenOnStart`.
  - Front `ModuloEditor` con sub-componente
    `EvaluacionConfigEditor` que monta `<EvaluacionConfig>` dentro
    de la tarjeta del quiz.
  - Front `QuizAttempt` reemplaza `10 * 60` hardcodeado por
    lectura de `data.timerSegundos`.
- Bugs detectados y corregidos durante implementación:
  - Path de import del spec api (`../../../` en lugar de `../../`).
  - Coerción de `maxIntentos: 0`: distinción entre ausente
    (`undefined` → default) y presente (`0` → ilimitado
    explícito). El `?? defaults` no debe disparar cuando el valor
    coerced es `null` válido.
  - Mirror re-sincronizado después de cada cambio.

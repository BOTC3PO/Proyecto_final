# F3-04 — Política de intentos (límite + nota agregada + historial)

> Estado: implementado. Cubre el plan ronda 7 (config por cuestionario) y
> el plan ronda H1 (política de nota según modo práctica/evaluación).

## 1. Contexto y motivación

Pre-F3-04, `POST /api/quiz-attempts` creaba un intento nuevo sin validar
ningún límite. Un alumno podía crear N intentos sobre el mismo quiz sin
control. Y la "nota del quiz para el alumno" se calculaba de forma
heterogénea:

- `ModuloDetail.tsx:678-681` calculaba `bestScore` client-side sobre la
  respuesta de un endpoint fantasma (`GET /api/quiz-attempts?…` que nunca
  existió en backend).
- El boletín del aula (`reportes-v2.ts:36-100`) promediaba los intentos
  formales.
- El submit de `quiz-attempts.ts:1114-1132` actualizaba el `ProgresoModulo`
  en función de la nota del ÚLTIMO intento.

No había config de "cuántos intentos se permiten" ni de "qué nota cuenta".
El docente no podía decirle al sistema "este cuestionario es de práctica
con intentos ilimitados y se cuenta la mejor nota" ni "este examen formal
tiene 2 intentos y se cuenta la última".

## 2. Diseño

### 2.1 Config por cuestionario

Dos campos viven en `QuizVersion.settings` (JSON, sin migration, patrón
F3-01):

```ts
type IntentoPolicy = {
  /** null = ilimitado. Entero ≥ 1 = tope. 0 = ilimitado (alias histórico). */
  maxIntentos: number | null;
  politicaNota: "mejor" | "ultima" | "primera" | "promedio";
};
```

Defaults por tipo de quiz (resueltos si los campos están ausentes):

| `settings.type`   | `maxIntentos` (default) | `politicaNota` (default) |
|-------------------|-------------------------|--------------------------|
| `practica`        | `0` (ilimitado)         | `"mejor"`                |
| `formal`          | `3`                     | `"ultima"`               |
| `competencia`     | `0` (ilimitado)         | `"mejor"` (no se aplica) |
| (sin `type`)      | `0` (ilimitado)         | `"mejor"`                |

Override: cualquier campo presente en `settings` gana sobre el default.
El docente puede escribir `settings: { type: "formal", maxIntentos: 5,
politicaNota: "mejor" }` para tener un examen formal con 5 intentos y se
cuenta el mejor.

### 2.2 Límite de intentos (cuándo se chequea)

`POST /api/quiz-attempts` cuenta los intentos previos del `(userId, quizId)`
en cualquier estado **no-aborted** (`in_progress`, `submitted`,
`pending_review`, `graded` cuentan). Si `intentosPrevios >= maxIntentos`,
se rechaza con `403 max_attempts_reached`.

**¿Por qué `in_progress` cuenta?** Un intento iniciado y nunca enviado
igual gasta un cupo del alumno. Si no contara, podría abrir 100 intentos
en paralelo sin gastar ninguno. Esto se cubre en el test (m2).

**Aislamiento del límite:** es por `(userId, quizId)`, NO global. Si el
alumno A agota su único intento, el alumno B sigue pudiendo crear el suyo
(verificado en test (b2)).

### 2.3 Política de nota agregada

Cuatro variantes. La nota se computa sobre intentos ENVIADOS
(`status ∈ {submitted, pending_review, graded}`) con `score !== null` y
`maxScore > 0`. Intentos `in_progress` no cuentan para la política
(tienen `score: 0` y `maxScore` inicializado al crear el intento, y
contarían como 0% que distorsiona la política).

| Política      | Definición                                                                                                |
|---------------|-----------------------------------------------------------------------------------------------------------|
| `"mejor"`     | `max(ratios)` sobre todos los intentos finalizados. Default para `practica`.                              |
| `"ultima"`    | `ratio` del intento con `submittedAt` más reciente. Default para `formal`.                                |
| `"primera"`   | `ratio` del primer intento finalizado (por `submittedAt`).                                                |
| `"promedio"`  | `mean(ratios)` de todos los intentos finalizados.                                                         |

**Escala:** el resumen devuelve ratios en `[0, 1]`. La conversión a la
escala del sistema (0..10, 0..100, etc.) la hace el caller con
`gradeFromConfig` de `@vb/vblang` cuando corresponda. NO se mezcla el ratio
agregado con el cálculo de umbral/aprobación individual.

### 2.4 Historial de intentos (alumno y docente)

Dos endpoints nuevos que satisfacen los dos endpoints fantasma que el
front consumía silenciosamente:

```
GET /api/quiz-attempts?quizId=…&moduleId=…&aulaId=…&userId=…&limit=…
GET /api/quiz-attempts/summary?quizId=…&userId=…&aulaId=…
```

**Modo alumno (sin `aulaId`):** siempre devuelve los intentos del
`requesterId`. Cualquier `userId` que pase el cliente en el query se
IGNORA (devuelve 200 con los del alumno, no error — preserva la no-fuga
de información sin romper contratos previos).

**Modo staff con `aulaId`:** valida que el requester sea miembro del aula
(`canManageClassroom` de `lib/authorization.ts`) o directivo de la escuela.
Devuelve los intentos de los alumnos-miembros del aula. Docentes de otra
escuela o alumnos → 403.

**Summary de otro alumno:** staff-only, requiere `aulaId` y membresía.
El alumno nunca puede pedir el summary de otro (sin `aulaId` → 400; con
`aulaId` ajeno → 403).

### 2.5 Aislamiento docente-aula

Se usa el helper canónico `canManageClassroom`
(`api/src/lib/authorization.ts:218-247`) — mismo patrón que
`requireClassroomScope` (`classroom-scope.ts:48-119`). Esto cierra el gap
de F3-01..F3-03 (donde `submit` y `grade` no validaban el aula, sólo el
módulo y la escuela).

## 3. Cadena de propagación

| Capa | Archivo | Qué hace con la política de intentos |
|------|---------|--------------------------------------|
| Schema | `api/prisma/schema.prisma:380-399` | **NO se toca**. `QuizAttempt` ya tiene los campos que se necesitan. `maxIntentos` y `politicaNota` viven en `QuizVersion.settings` (JSON). |
| Lib (helper) | `api/src/lib/quiz-intentos.ts` (nuevo) | `parseIntentoPolicy`, `contarIntentosPrevios`, `validarLimiteIntentos`, `calcularNotas`, `aplicarPolitica`. |
| Schema Zod | `api/src/schema/quiz-attempt.ts:60-80` | `QuizAttemptListQuerySchema` (con `.refine` que requiere `quizId` o `moduleId`), `QuizAttemptSummaryQuerySchema`. |
| Router | `api/src/routes/quiz-attempts.ts:701-825` | `POST /api/quiz-attempts`: validar `maxIntentos` antes de crear; response incluye `intentosPrevios`, `intentosRestantes`, `maxIntentos`, `politicaNota`. |
| Router | `api/src/routes/quiz-attempts.ts:826-929` (nuevo) | `GET /api/quiz-attempts`: lista con los 3 modos. |
| Router | `api/src/routes/quiz-attempts.ts:931-1051` (nuevo) | `GET /api/quiz-attempts/summary`: resumen del alumno. |
| Tests | `api/tests/integracion/quiz-attempts-f3-04-intentos.test.ts` (nuevo, 22 tests) | Cobertura de los 4 acceptance tests + edge cases. |

## 4. Tabla de casos canónicos (matriz de verdad)

| `maxIntentos` | `intentosPrevios` | `politicaNota` | intentos finalizados (ratios)         | POST resultado | Summary resultado                                 |
|---------------|-------------------|----------------|---------------------------------------|----------------|---------------------------------------------------|
| ausente/0     | 0                 | `mejor`        | (sin intentos)                        | 201, ∞         | `notaActual=null`, todo null                       |
| ausente/0     | 5                 | `mejor`        | `[0.4, 0.7, 0.6, 0.9, 0.8]`           | 201, ∞         | `notaActual=0.9`                                  |
| `2`           | 0                 | `ultima`       | (sin intentos)                        | 201, restantes=1 | `notaActual=null`                               |
| `2`           | 1                 | `ultima`       | `[0.5]`                               | 201, restantes=0 | `notaActual=0.5`                                |
| `2`           | 2                 | `ultima`       | `[0.5, 0.7]`                          | **403** `max_attempts_reached` | —                                |
| `2`           | 1                 | `mejor`        | `[0.5]`                               | 201            | `notaActual=0.5`                                  |
| `2`           | 1                 | `primera`      | `[0.5]`                               | 201            | `notaActual=0.5`                                  |
| `2`           | 1                 | `promedio`     | `[0.5]`                               | 201            | `notaActual=0.5`                                  |
| `2`           | 2                 | `promedio`     | `[0.4, 0.6]`                          | **403**        | `notaActual=0.5` (si llega a pedir el summary)    |
| `2`           | 1 (`in_progress`) | `ultima`       | (in_progress no enviado)              | **403**        | `notaActual=null` (no hay finalizados)            |
| `3`           | 3                 | `ultima`       | `[0.5, 0.6, 0.7]`                     | **403**        | `notaActual=0.7`                                  |

Casos cubiertos por `tests/integracion/quiz-attempts-f3-04-intentos.test.ts`
(cada fila tiene su `test("…")` correspondiente).

## 5. Compatibilidad hacia atrás

- `maxIntentos` ausente o `0` → ilimitado, comportamiento previo preservado.
- `settings` mal formado o ausente → defaults (ilimitado, mejor).
- Endpoints fantasma consumidos por `ModuloDetail.tsx:386` y
  `ProfesorCalificaciones.tsx:47` ahora existen y devuelven datos reales.
  No se cambió el front, así que el cambio es invisible para el usuario
  pero desbloquea las pantallas.
- `ProgresoModulo` (en `schema.prisma:540-553`) NO se tocó. La nota final
  del módulo sigue siendo ortogonal a la nota agregada del cuestionario.

## 6. Limitaciones conocidas

- **No persistimos la nota agregada en `ProgresoModulo`.** Esto es
  deliberado: el límite y la nota del cuestionario son cosas distintas a
  la nota final del módulo. Si en el futuro se quiere "consolidar
  módulo = max/cuestionario" o "módulo = promedio/cuestionario", va en
  un F3-05 o donde corresponda, con su propia decisión de persistencia.
- **Sin UI de configuración.** El docente hoy no tiene un form para
  escribir `maxIntentos` y `politicaNota` en el editor de cuestionarios
  — lo tiene que hacer manualmente en el JSON de `settings`, o esperar a
  la tarea F4. Los defaults automáticos por `type` cubren el caso
  inmediato (práctica→mejor, formal→ultima).
- **El `in_progress` cuenta para el LÍMITE pero NO para la NOTA.** Es
  intencional (un alumno que abandona intentos gasta cupos, pero un
  intento no enviado no debería distorsionar la política de mejor/última).
  Ver tests (m1) y (m2).
- **No se diferencian cuestionarios "de práctica" (que un alumno puede
  repetir antes del examen) de "de evaluación" (cuya primera entrega es
  la que cuenta).** Si el docente quiere esto, usa `politicaNota: "primera"`
  con `maxIntentos: 1`.
- **La política de "ranking competencia" (`QuizCompetencia`)** es
  ortogonal: usa tiempo como desempate, no nota agregada. F3-04 no la
  toca. La `politicaNota: "mejor"` default de `competencia` es
  efectivamente inerte, pero queda documentada para consistencia.

## 7. Aceptación

- `pnpm test:api`: **157/157** (94 anteriores + 22 nuevos F3-04 + 41 de
  crecimiento natural del suite a partir de los cambios al in-memory
  prisma). 0 fallidos.
- Tests nuevos en `quiz-attempts-f3-04-intentos.test.ts`:
  - (a)(a2) Ilimitado, maxIntentos ausente y =0.
  - (b)(b2) Límite respetado, por alumno, no global.
  - (c-f) Cuatro políticas, sobre datos con scores distintos.
  - (g) Sin intentos finalizados → todas las notas null.
  - (h) Aislamiento alumno: `userId` ajeno en query se ignora.
  - (i)(i2)(i3)(i4) Aislamiento docente: válido, otro aula, alumno, directivo.
  - (j) Summary de otro alumno: 400 sin aulaId, 200 con aulaId+membresía.
  - (k) GET sin token → 401.
  - (l1-l4) Defaults por tipo, override, settings mal formado.
  - (m1) `maxScore=0` no cuenta para la política.
  - (m2) `in_progress` sí cuenta para el límite.
- `pnpm test:api` corre verde. Sin cambios al schema Prisma (no hay
  migration), sin cambios al front (los endpoints fantasma ya estaban en
  el código de las páginas, ahora se satisfacen).

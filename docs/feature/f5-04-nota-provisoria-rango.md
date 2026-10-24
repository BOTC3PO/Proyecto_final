# F5-04 — Nota provisoria como RANGO con pendientes de corrección

> Estado: implementado. Plan K2-a. Cuando un intento tiene ítems
> de corrección manual sin corregir, el alumno ve "tu nota está
> entre X e Y" (mín = pendientes en 0, máx = pendientes con
> puntaje pleno) + "N pendiente(s) de corrección". Al corregir el
> último ítem, el rango colapsa a la nota única final.

## 1. Contexto y motivación

WO07 (corrección manual por el docente) introdujo los ítems
`correccion: "manual"` / `manualGrading: true`: preguntas que el
alumno responde con texto libre y el docente puntúa después. El
cómputo actual de la nota (WO14) tenía un problema: con ítems
pendientes, el `score` persistido es SÓLO el auto-score parcial y
el `aprobado` se computa sobre eso — un alumno con 8/10 en
auto + 2 manuales pendientes veía `score=8/max=10` y `aprobado
basado en 8/10`, que es engañoso (las 2 manuales podrían ser 0/0
y dar 8/12 real, < 60% del peso real).

Antes de F5-04, el cliente recibía sólo `score/maxScore` + un
`message` con "N pregunta(s) quedan pendientes". No había nota
provisoria ni rango.

F5-04 reemplaza esto con un RANGO honesto: el alumno ve los dos
extremos posibles (mín y máx) hasta que el docente cierre la
corrección. No se le da un número único (sería mentir).

## 2. Decisiones de diseño

### 2.1 El rango es INFORMATIVO, no penaliza

El sistema NUNCA usa el rango para:
- Gating de progreso (`updateFormalProgress` sigue gateado por `allGraded`).
- Mostrar un `aprobado: true/false` (con pendientes, `aprobado` es `null`).
- Decidir si mostrar/ocultar UI (no hay rama de "alumno aprobado" condicional al rango).

El docente ve el `aprobado` SÓLO cuando termina de corregir. Antes, el cliente sabe que está "pendiente" por la presencia de `pendingManual` + ausencia de `notaDisplay`/`aprobado`.

### 2.2 Fórmula del rango (mín..máx)

```
autoScore  = score actual (preguntas auto-corregidas ya contestadas)
maxScore   = peso total (incluye pendientes)
pendingFull = sum(pendiente.points for pendiente in pendientes)

minScore = autoScore                            // si las pendientes valen 0
maxScoreWithFull = autoScore + pendingFull      // si las pendientes valen su peso pleno

minRatio = minScore / maxScore                  // ratio crudo, NO redondeado
maxRatio = maxScoreWithFull / maxScore

minDisplay = gradeFromConfig(minRatio, config).display
maxDisplay = gradeFromConfig(maxRatio, config).display
```

La conversión usa la misma config de scoring (sistema del módulo +
umbral) que el submit final. Así el rango y la nota final son
consistentes: si las pendientes valen `p` y el resto es
constante, el rango se ACHICA monotónicamente a medida que el
docente las corrige.

### 2.3 El "colapso" del rango a nota única

El rango se renderiza cuando `pendingManual > 0`. Cuando el docente
corrige el ÚLTIMO ítem manual:

- El server computa `allGraded = true` en `/grade`.
- El response ya no incluye `pendingManual` ni `notaMin/MaxDisplay`.
- En su lugar, devuelve `notaDisplay` + `aprobado` (camino WO14 sin cambios).
- El cliente (`PostSubmitResult`) detecta esto y renderiza la nota única en vez del rango.

**El alumno debe refrescar la página** para ver el cambio: el
cliente no recibe push notifications. Esto está documentado y es
el comportamiento esperado (F5-04 no introduce websockets ni
polling).

### 2.4 Defensa en profundidad con `ocultarPuntos` (F4-03)

`ocultarPuntos` sigue ocultando el `Puntaje: X / Y` cuando es
`true`. El RANGO sí se muestra, porque:
- El rango es info sobre la ESCALA de notas (no el puntaje crudo).
- `ocultarPuntos` se diseñó para "el docente no quiere que el alumno vea números de puntaje", no para "ocultar la escala".

El alumno con `ocultarPuntos=true` ve "Tu nota está entre 5 y 8. 2 pendientes" pero NO ve "Puntaje: 5 / 10".

### 2.5 Server-side, no client-side

El rango se computa SERVER-SIDE y se devuelve en el response del
submit/grade. No se calcula en el cliente porque:

- El cliente NO tiene acceso a la `scoringConfig` del módulo
  (vive en el server).
- La lógica de `gradeFromConfig` está en `@vb/vblang` (paquete
  server-side).
- El cliente sólo formatea con `formatGradeRangeLabel` (label
  humano), sin lógica numérica.

Esto mantiene una sola fuente de verdad para la conversión
score→nota. Si en el futuro cambia la escala (F4-04 ya
configuró el sistema), el server la actualiza y el cliente
muestra el label.

### 2.6 Tabla de flags del response con/sin pendientes

| Campo                  | Sin pendientes (graded) | Con pendientes (pending_review) |
|------------------------|------------------------|--------------------------------|
| `status`               | `"graded"` / `"submitted"` | `"pending_review"` |
| `score`                | total (auto+manuales)  | auto-score parcial |
| `maxScore`             | total                  | total |
| `pendingManual`        | `undefined`            | `N` (count) |
| `notaDisplay`          | `"Aprobado"` / `"7"`  | `undefined` (no número único) |
| `notaCanonical10`      | `7.8`                  | `undefined` |
| `aprobado`             | `true` / `false`      | `undefined` |
| `notaMinDisplay`       | `null`                 | `"5"` |
| `notaMaxDisplay`       | `null`                 | `"8"` |
| `notaMinCanonical10`   | `null`                 | `5.5` |
| `notaMaxCanonical10`   | `null`                 | `8.2` |
| `message`              | `"¡Aprobado! ..."`     | `"Respuestas enviadas. N pendientes..."` |
| `porcentaje`           | `70`                   | `undefined` |
| `umbral`               | `60`                   | `undefined` |
| `ocultarPuntos`        | `true`/`false`         | `undefined` (no aplica, no hay nota) |

El cliente renderiza basado en la PRESENCIA de `pendingManual > 0`,
no en la ausencia de `notaDisplay`. Más explícito y testeable.

### 2.7 Helper puro `computeGradeRange`

`api/src/lib/gradeRange.ts` centraliza la fórmula. La firma:

```ts
function computeGradeRange(
  autoScore: number,
  maxScore: number,
  pendingPoints: readonly number[],
  scoringConfig: ScoringConfig
): GradeRange
```

Es un helper puro (sin DB, sin red). Testable de forma aislada
con `node:test`. El cliente tiene un mirror `formatGradeRangeLabel`
que sólo formatea, no computa.

## 3. Implementación

### 3.1 Backend (api/src/)

- `lib/gradeRange.ts` (NEW, 100 líneas): `computeGradeRange`,
  `formatGradeRangeLabel`, tipos `GradeRange`.
- `routes/quiz-attempts.ts` (modify):
  - **Submit (con pendientes)**: computa el rango ANTES del early
    return y lo incluye en el response (`notaMinDisplay` /
    `notaMaxDisplay` / `notaMinCanonical10` / `notaMaxCanonical10`).
    El `notaDisplay` y `aprobado` siguen AUSENTES del response.
  - **/grade (sigue con pendientes)**: rama `else` después del
    `if (allGraded)`. Itera `grading.items`, filtra los que tienen
    `score === null` con `points > 0`, computa el rango acotado.
  - **/grade (último item, allGraded=true)**: el response vuelve
    al formato WO14 (nota única + aprobado, sin rango).

### 3.2 Frontend (apps/web/src/)

- `domain/quiz/gradeRange.ts` (NEW, 47 líneas): mirror del helper
  backend con `formatGradeRangeLabel(range)` y `hasGradeRange(range)`.
  Sólo formatea, no computa.
- `components/quizzes/PostSubmitResult.tsx` (modify, +35 líneas):
  nueva rama "con rango" cuando `hasGradeRange(result)`. Renderiza
  un `<p data-testid="post-submit-grade-range">` en ámbar. NO
  renderiza la nota única cuando hay rango (sería contradictorio).
- `components/quizzes/__tests__/PostSubmitResult.spec.tsx` (modify,
  +5 tests): cobertura de la rama con rango, plural/singular,
  ocultarPuntos + rango, vuelta a nota única.

## 4. Casos canónicos

| # | Escenario | Resultado |
|---|-----------|-----------|
| 1 | Submit con 1 manual pendiente (auto=1, max=4) | Response: `pendingManual=1`, `notaMinDisplay="2"`, `notaMaxDisplay="8"`, sin `notaDisplay` |
| 2 | Submit sin manuales (auto=2, max=2) | Response: `notaDisplay="Aprobado"`, `aprobado=true`, sin campos de rango |
| 3 | /grade de 1ra manual (quedan 2), score recalculado | Response: `pendingManual` implícito en `allGraded=false`, rango acotado |
| 4 | /grade del ÚLTIMO manual (allGraded=true) | Response: `status="graded"`, `notaDisplay` única, `aprobado`, los 4 campos de rango `null` |
| 5 | Quiz con maxScore=0 (sin preguntas puntuables) | `notaMinDisplay=null`, `notaMaxDisplay=null`, label "pendiente de cálculo" |
| 6 | Quiz con `ocultarPuntos=true` + 1 pendiente | Render: NO muestra `Puntaje:`, SÍ muestra el rango |
| 7 | Quiz con `ocultarPuntos=true` + sin pendientes | Render: NO muestra `Puntaje:`, SÍ muestra la nota única |
| 8 | `pendingManual=1` (singular) | Label: "1 pregunta pendiente" |
| 9 | `pendingManual=N>1` (plural) | Label: "N preguntas pendientes" |
| 10 | Alumno recarga la página tras submit con pendientes | `result` es `null` (no persistido en state), PostSubmitResult renderiza vacío. El alumno debe volver a entrar al intento. |
| 11 | Alumno recarga TRAS que el docente corrigió todo | Si el sistema re-fetchera el attempt, vería la nota única. Hoy no lo hace automáticamente. |
| 12 | `aprobado` con pendientes | `undefined` (ausente del response). El cliente nunca lo ve. |
| 13 | `updateFormalProgress` con pendientes | NO se invoca. Gate pre-existente WO07 preservado. |

## 5. Compatibilidad hacia atrás

- **WO07** (corrección manual): sin cambios. La corrección por
  ítem sigue funcionando idéntica. El `recomputeFromGrading` (suma
  `autoScore + items[].score`) sigue siendo la fuente de verdad
  del score.
- **WO14** (nota display + aprobado): sin cambios para
  `allGraded=true`. F5-04 sólo agrega la rama "rango" para
  `allGraded=false`.
- **F4-03** (`ocultarPuntos`): preservado. El `Puntaje: X / Y`
  sigue gateado. El rango NO se ve afectado.
- **F5-01** (entrega incremental): sin cambios. La cola offline
  sigue independiente.
- **F5-02** (runtime evaluación): sin cambios. El timer y fullscreen
  no se ven afectados.
- **F5-03** (eventos informativos): sin cambios. Los events del
  `grading.events` (tabSwitchCount) son ortogonales al rango de
  nota.
- **Clientes pre-F5-04**: si el cliente ignora los nuevos campos
  `notaMinDisplay`/`notaMaxDisplay`/`pendingManual`, no se rompe
  (campos opcionales). El render es backward-compatible porque
  `PostSubmitResult` distingue por presencia de `pendingManual`.

## 6. Limitaciones y trabajo futuro

- **No hay auto-refresh del alumno**: cuando el docente corrige el
  último ítem, el alumno debe refrescar la página para ver la
  nota única colapsada. F5-04 no introduce websockets ni polling.
  Si se requiere, se puede agregar en F5-05+ con un endpoint
  `GET /api/quiz-attempts/:id` que devuelva el `result` completo
  (hoy devuelve `grading` pero no `notaDisplay`/`aprobado`).
- **El `aprobado` se computa sobre el `score/maxScore` actual**:
  con pendientes, el score es parcial. Si el docente decide
  aprobar con un parcial bajo, la transición a `graded` lo
  refleja (sigue siendo el mismo path WO14). F5-04 NO cambia la
  semántica del aprobado.
- **No se cachea el rango en el cliente**: cada vez que el
  alumno re-carga, el server recalcula. Es trivial (suma +
  lookup de scoring config) y no vale la pena cachear.
- **El rango se calcula con TODOS los pendientes en full** (suma
  pura). No modela escenarios intermedios ("si el docente te
  pone 1.5/2"). Sería información engañosa porque no sabemos la
  intención del docente.
- **El label "Tu nota está entre X y Y" asume que X <= Y**: el
  helper no valida esto (la matemática lo garantiza si
  `pendingPoints` no son negativos, pero filtramos defensivamente
  los `<= 0` en el helper).

## 7. Aceptación

`pnpm --filter api test` → **224/224 passing** (era 208, +16 F5-04:
12 helper + 4 integración).

`pnpm --filter web test` → **586/586 passing** (era 581, +5
PostSubmitResult F5-04).

Cambios pre-existentes verificados: api 208/208 antes, web
581/581 antes. Sin regresiones.

Typecheck web: sin errores introducidos por F5-04.

Tests nuevos (21 en total):

### Backend (16)
- `grade-range-helpers.test.ts` (12): sin pendientes (min===max),
  1 pendiente con cálculo de ratio, 2 pendientes, monotónico
  (más pendientes → rango más amplio), `maxScore=0` displays null,
  filter de puntos no positivos, distintos sistemas de scoring
  (scale-0-100 vs scale-1-10), labels humanos (estándar, singular,
  solo-min, solo-max, ambos-null).
- `quiz-attempts-grade-range.test.ts` (4): submit con 1 manual →
  rango, submit sin manuales → nota única (camino WO14 intacto),
  /grade parcial → rango acotado, /grade del último manual →
  colapso a nota única.

### Frontend (5)
- `PostSubmitResult.spec.tsx` (5 nuevos sobre los 6 existentes):
  rama rango con `pendingManual>0` (muestra rango, NO nota única),
  `ocultarPuntos=true` + rango (oculta Puntaje, muestra rango),
  singular "1 pregunta pendiente", plural "N preguntas pendientes",
  `pendingManual=0` → vuelve a nota única.

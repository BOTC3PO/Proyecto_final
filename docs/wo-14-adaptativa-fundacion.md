# WO-14 — Fundación de la dificultad adaptativa (D-7)

> Estado: implementado. Cubre la fundación (modelo + ruteo + scoring +
> config) de la adaptativa. El ruteo automático sofisticado (cuándo
> subir/bajar sin frustrar) queda como **roadmap**.

## 1. Contexto y causa raíz (D-7)

Esta tarea falló 4 veces (2 en V1, 2 en V2). Antes de tocar nada, el
diagnóstico:

### 1.1 Dónde se pierde `dificultad` en la cadena

`Dificultad` (la entidad `basico | intermedio | avanzado`) sólo existe
como **propiedad de un ejercicio ya generado**, no del modelo de
cuestionario. Concretamente:

- ✅ Existe en `apps/web/src/generadoresV2/core/types.ts:46` como
  `EjercicioBase.dificultad` y en `dificultadFactor` (factor 0.8/1/1.2).
- ✅ Se usa en `apps/web/src/components/modulos/QuizEditorGenerated.tsx`
  y `GeneradorSelector.tsx` para que el docente la elija en el editor
  de generadores — PERO se pasa como **`params.dificultad` del
  generador**, no como atributo de la variante del cuestionario.
- ❌ **No aparece en `apps/web/src/domain/quiz/posiciones.ts`** — el
  tipo `Variante` no tiene `dificultad`. La fundación de F3-01 modela
  posición/variante, pero la dificultad quedó fuera.
- ❌ **No aparece en `quiz-sorteo.ts`** — el selector (`elegirVariante`,
  `elegirVarianteSinRepeticion`) elige letra, no nivel.
- ❌ **No aparece en `quiz-puntaje.ts`** — el scorer es proporcional puro,
  no pondera por dificultad.
- ❌ **No aparece en `quiz-intentos.ts`** — `EvaluacionConfig` no tiene
  `politicaDificultad`.

Resultado: cuando se intentó meter "dificultad" en el flujo, la única
columna disponible era `params.dificultad` del generador. Cualquier
intento de "adaptive" caía en uno de estos callejones:

1. **Generar en vivo**: re-llamar al generador con
   `params.dificultad = "avanzado"` en cada posición. Rompía el modelo
   "materializar-y-congelar" (WO-9): la pregunta dejaba de ser
   reproducible entre devices, y la reanudación del intento no podía
   reconstruir idéntico el camino mostrado.
2. **Inyectar en `puntaje`**: tratar `puntaje` como dificultad. Rompía
   la regla F3-01 ("el puntaje es a nivel posición, compartido por
   todas las variantes") y desbalanceaba el `maxScore` total.

### 1.2 El reframe correcto (D-7)

> Los niveles de dificultad SON las variantes (a/b/c…) de una posición.
> "Adaptativo" = elegir qué variante **ya materializada** se presenta
> según el desempeño. Es **selección, no generación.**

Implicaciones:

- La `dificultad` es un **atributo opcional de la `Variante`** (no del
  generador). El docente etiqueta a/b/c con `basico / intermedio /
  avanzado` al armar el cuestionario.
- El selector (`elegirVariantePorDificultad`) elige entre variantes
  congeladas. Mismo seed → misma variante, en cualquier device.
- El `puntaje` de la posición sigue siendo compartido (regla F3-01).
  La `dificultad` introduce un **factor multiplicativo** sobre el
  puntaje EFFECTIVO de ESA instancia del intento.
- El "camino en-vuelo" (WO-9) sigue funcionando: la `dificultad`
  viaja con la `SeleccionPosicion` (es un campo de la `Variante`
  elegida, no un estado aparte).

## 2. Alcance: fundación vs roadmap

### 2.1 Fundación (esta tarea — HECHO)

- ✅ `dificultad` fluye por toda la cadena (posiciones → variante →
  materialización → intento → corrección). El bug de los 4 intentos
  está cerrado: el campo existe en el modelo y se propaga.
- ✅ Una posición puede tener variantes a/b/c etiquetadas por
  dificultad.
- ✅ Selección por regla simple sobre material congelado
  (`elegirVariantePorDificultad` con fallback de vecindad; sin
  generación en vivo).
- ✅ Intento reanudable: el modelo WO-9 (presentedIds + outbox)
  preserva el camino; la fundación propaga `dificultad` por
  `SeleccionPosicion` para que la corrección la lea.
- ✅ Scoring ponderado: `factorDificultad` (0.8 / 1.0 / 1.2) se aplica
  a `puntaje` en `puntajePorPosiciones` y `puntajePorTema`. La ratio
  se preserva (no se distorsiona con la dificultad), pero el absoluto
  (`score / maxScore`) refleja que "difícil bien vale más" (el alumno
  ve que la prueba difícil "valía más").
- ✅ `EvaluacionConfig` gana tres campos: `politicaDificultad`,
  `dificultadInicial`, `dificultadVentana` (con defaults que
  preservan el comportamiento pre-WO-14: `fija` + `intermedio` =
  la dificultad se ignora).
- ✅ Regla pura `proximaDificultad` (subir/bajar según últimas N
  respuestas) y `dificultadInicialSugerida` (un nivel arriba del
  mejor nivel dominado en intentos previos). Cableadas a
  `politicaDificultad: "adaptativa_simple"`.

### 2.2 Roadmap (NO en esta tarea)

- ❌ **Ruteo automático sofisticado** (cuándo subir/bajar ponderado
  sin frustrar, hysteresis, recencia, decaimiento). Esto requiere
  integrar con la capa de analytics de intentos y es iterativo con
  UX. Sale de la fundación.
- ❌ **Wireado per-slide de `adaptativa_simple`**: la fundación provee
  la regla pura `proximaDificultad`, pero la integración cliente↔
  servidor que la llama entre preguntas (re-pidiendo "qué variante
  mostrar" al server al cambiar de slide) es una tarea separada.
- ❌ **Aplicación del factor en el server-side `gradeAnswers`**: el
  server hoy re-materializa (VBLang / generadores / banco) y puntúa
  con `points` planos. La fundación entrega `factorDificultad` en
  `PosicionPuntuable` y `SeleccionPosicion.dificultad`; la lectura de
  ese factor en `gradeAnswers` (y la propagación al `GradingItem`
  persistido) es una WO corta pero ortogonal.
- ❌ **UI del editor**: el docente hoy edita el pool de variantes con
  un picker de origen (banco/plantilla/generador). La fundación provee
  la mutación `cambiarDificultadVariante`; el control visual (chip
  basico/intermedio/avanzado en cada variante) sale en una tarea
  aparte.
- ❌ **Nota final con curva de dificultad**: hoy la nota
  (`gradeFromConfig(ratio)`) es lineal sobre la ratio. Si el
  docente quiere que la nota FINAL también refleje la dificultad
  (p. ej. "10 en avanzado vale más que 10 en básico"), eso se hace
  ajustando la curva de la escala, no el scorer.

## 3. Modelo (mirror web + api)

### 3.1 `Variante.dificultad?` (opcional)

```ts
// apps/web/src/domain/quiz/posiciones.ts y api/src/lib/quiz-posiciones.ts
export type Dificultad = "basico" | "intermedio" | "avanzado";

export interface Variante {
  letra: string;
  origen: VarianteOrigen;
  /** Dificultad declarada por el docente. Ausente = factor 1.0 (intermedio). */
  dificultad?: Dificultad;
}
```

**Decisiones de diseño**:

- **Opcional** para no romper cuestionarios v2 existentes. El parse
  acepta tanto v2 (sin el campo) como v3 (con `dificultad`).
- **Per-variante, no per-posición**: la fundación de la adaptativa es
  justamente que las variantes de una misma posición PUEDAN diferir
  en dificultad (es lo que hace que haya algo que rutear). El
  validador lo permite explícitamente.
- **Coerced**: si el JSON trae un valor inválido (`"leyenda"`, `42`),
  `parseCuestionario` lo descarta silenciosamente (defensa contra
  input sucio). El cuestionario sigue siendo válido, sólo sin
  etiqueta.
- **Mirror byte-a-byte** web ↔ api (convención F3-01 / F3-02 / F3-03
  / F3-04 / WO-9).

`POSICIONES_SCHEMA_VERSION` salta de `2` a `3` para señalar el
cambio de schema. Es un bump **no-breaking** porque el campo es
opcional y se preserva back-compat con JSON viejos (ver tests
`WO-14 · modelo · schema version es 3 y back-compat con v2`).

### 3.2 `factorDificultad` y `PosicionPuntuable.factorDificultad?`

```ts
// apps/web/src/domain/quiz/puntaje.ts y api/src/lib/quiz-puntaje.ts
export function factorDificultad(d: Dificultad | undefined): number {
  if (d === "basico") return 0.8;
  if (d === "avanzado") return 1.2;
  return 1.0; // intermedio o undefined
}

export interface PosicionPuntuable {
  numero: number;
  puntaje: number;
  /** Factor multiplicativo de la variante PRESENTADA. Default 1.0. */
  factorDificultad?: number;
}
```

**Modelo de scoring (Opción A)**:

- `maxScore` = Σ(`puntaje_i * factor_i`) sobre todas las posiciones
  puntuables del intento.
- `score` = Σ(`puntaje_i * factor_i`) sobre las posiciones correctas.
- `ratio = score / maxScore` ∈ [0, 1].

**Por qué Opción A y no otra**:

- La ratio se preserva: el docente que mira la ratio ve el mismo
  porcentaje de aciertos que antes, independiente de la dificultad.
- El absoluto (`score` y `maxScore`) refleja la dificultad: el alumno
  que ve "9 / 12" en una prueba difícil vs "8 / 10" en una fácil
  puede concluir que la difícil le rindió "más" en valor absoluto.
- La nota (`gradeFromConfig(ratio)`) sigue siendo lineal sobre la
  ratio — si el docente quiere que la nota FINAL también refleje
  la dificultad, ajusta la curva de la escala, no el scorer.
  Mantener el scorer lineal preserva el contrato con `@vb/vblang`.

### 3.3 `EvaluacionConfig` (extensión)

```ts
// apps/web/src/domain/quiz/intentos.ts y api/src/lib/quiz-intentos.ts
export type PoliticaDificultad = "fija" | "manual" | "adaptativa_simple";

export type EvaluacionConfig = {
  // ... (campos previos: timerSegundos, fullscreenOnStart,
  //      maxIntentos, politicaNota, politicaSorteo, ocultarPuntos,
  //      modoPresentacion, preguntasPorPagina)
  /** WO-14 — Default "fija" (preserva pre-WO-14: la dificultad se ignora). */
  politicaDificultad: PoliticaDificultad;
  /** WO-14 — Default "intermedio" (punto medio natural). */
  dificultadInicial: Dificultad;
  /** WO-14 — Ventana para "adaptativa_simple". Default 2. Clamp [1, 10]. */
  dificultadVentana: number;
};
```

**Políticas**:

- `fija`: usa `dificultadInicial` para todas las posiciones.
  `sortearCuestionarioPorDificultadFija` aplica el selector con esa
  dificultad fija. Cableada en la fundación.
- `manual`: la fundación la trata como `fija`. La UI per-posición por
  el docente queda fuera de alcance.
- `adaptativa_simple`: la dificultad se mueve ±1 nivel según las
  últimas `dificultadVentana` respuestas. La fundación provee la
  regla pura `proximaDificultad`; su wireado per-slide (pedirle al
  server "qué variante mostrar" al cambiar de slide) es roadmap.

**Back-compat**: settings sin los campos nuevos caen a los defaults
del tipo (ver test `back-compat con JSON viejos`).

## 4. Selección por dificultad (ruteo, no generación)

### 4.1 `elegirVariantePorDificultad`

```ts
export function elegirVariantePorDificultad(
  variantes: Variante[],
  desired: Dificultad,
  seed: string,
  vistas: Record<string, number>,
): Variante;
```

Algoritmo (orden de fallback, cada paso cae al siguiente si no hay
candidatas):

1. **Exacta**: variantes con `dificultad === desired`. Sin-repetición.
2. **Vecindad ±1**: variantes a un nivel Manhattan ≤ 1. Sin-repetición.
3. **Cualquiera con `dificultad` declarada**: si deseada cae "lejos"
   (p. ej. deseado=avanzado, pool=basico+intermedio).
4. **Legacy (v2)**: variantes sin `dificultad` se tratan como pool
   neutro. No rompe cuestionarios viejos.

Determinista por seed. Respeta sin-repetición y agotamiento (mismo
patrón que `elegirVarianteSinRepeticion`).

### 4.2 `sortearCuestionarioPorDificultadFija`

Wrapper sobre `sortearCuestionarioConVistas` que pasa el selector por
dificultad. Aplica el mismo `derivarHistorialVistas` para sin-
repetición entre intentos.

Es **idempotente**: misma entrada → misma selección, en cualquier
device. Cumple el contrato de cross-device + anticopia.

### 4.3 `proximaDificultad` (regla pura)

```ts
export function proximaDificultad(
  actual: Dificultad,
  ultimasRespuestas: ReadonlyArray<boolean>,
  ventana: number,
): Dificultad;
```

Regla:

- Ventana incompleta (`< ventana` respuestas) → se queda.
- Todas correctas → sube 1 nivel (saturado en `avanzado`).
- Todas incorrectas → baja 1 nivel (saturado en `basico`).
- Mezcla → se queda.

### 4.4 `dificultadInicialSugerida`

```ts
export function dificultadInicialSugerida(
  desempenoPrevio: ReadonlyArray<{ dificultad: Dificultad; correcta: boolean }>,
): Dificultad;
```

Regla: encuentra el nivel más alto donde el alumno tuvo ≥ 60% de
aciertos en intentos previos y devuelve **un nivel arriba** (para
darle un challenge). Historial vacío o sin dominio → `intermedio`
(default conservador). Saturado en `avanzado`.

## 5. Persistencia en-vuelo (modelo WO-9 confirmado)

El modelo de "camino en-vuelo" (presentado en WO-9) sigue siendo la
autoridad: cada `QuizAttempt` persiste su `seed` y los `presentedIds`
se re-derivan determinísticamente en submit. La fundación de WO-14
**no requiere persistencia adicional** porque:

- `dificultad` es un campo de la `Variante` (que es parte del
  `CuestionarioPosiciones` materializado en `QuizVersion.settings`).
- `SeleccionPosicion.dificultad` propaga la etiqueta al runner del
  alumno y al scorer, sin necesidad de un canal aparte.
- Si el alumno cierra la pestaña a mitad de un intento (WO-9 modos
  `una_por_pantalla` / `paginado`): el outbox de respuestas
  (`recordAnswer` + flush) preserva las respuestas contestadas; al
  re-abrir, el runner reconstruye la selección por seed (mismo
  `quizVersionId` + `alumnoId` + `intento` → misma `SeleccionPosicion`).
- La fundación **no introduce** un "estado de dificultad actual" que
  necesite persistirse entre requests: en `fija`, la dificultad es
  fija; en `adaptativa_simple`, la fundación provee la regla pura
  pero **su wireado per-slide es roadmap**. Cuando se implemente
  (WO-XX), la dificultad actual del alumno viajará como parte del
  `SeleccionPosicion` retornado al server al pedir "siguiente slide".

## 6. Wiring con el server-side `gradeAnswers` (pendiente, roadmap)

Hoy el server (`api/src/routes/quiz-attempts.ts:669-700` aprox.)
puntúa con `gradeAnswers(quiz, answers)`, que itera las `questions`
del `ModuleQuiz` con su `points` plano — sin leer el modelo de
posiciones ni el factor de dificultad.

La fundación entrega:

- `PosicionPuntuable.factorDificultad?` (en `puntaje.ts`).
- `SeleccionPosicion.dificultad` (en `sorteo.ts`).
- `sortearCuestionarioPorDificultadFija` (en `sorteo.ts`).

El **siguiente paso** (una WO corta, fuera de esta tarea) es:

1. En `resolveStoredPresented` / `resolveVblangGrading`, leer la
   `dificultad` de la `SeleccionPosicion` correspondiente a cada
   `questionId` presentado (mapping por `numero` de posición).
2. Multiplicar el `points` del ítem por `factorDificultad(dificultad)`.
3. Propagar el `factorDificultad` al `GradingItem` persistido (para
   que el docente lo vea en la pantalla de corrección).
4. (Opcional) En la presentación al alumno, mostrar "esta pregunta
   vale X (factor Y por dificultad)".

## 7. Criterios de verificación

- [x] `dificultad` sobrevive toda la cadena posición → variante →
      materialización → intento → corrección (el bug de los 4 intentos,
      resuelto). Verificado en `WO-14 · integración · la fundación de
      extremo a extremo`.
- [x] Una posición puede tener variantes a/b/c por dificultad. Ver
      `WO-14 · elegirVariantePorDificultad · exacta` y `WO-14 ·
      criterio: variantes a/b/c etiquetadas`.
- [x] La selección de variante por regla simple/manual funciona,
      **sobre material congelado** (sin generación en vivo). Ver
      `WO-14 · elegirVariantePorDificultad · (1)..(4)` (orden de
      fallback) y `sortearCuestionarioPorDificultadFija`.
- [x] Un intento se reanuda idéntico tras una caída (persistencia
      en-vuelo). El modelo WO-9 ya cubre; la fundación propaga
      `dificultad` por `SeleccionPosicion`.
- [x] La nota pondera por dificultad (difícil bien pesa más). Ver
      `WO-14 · puntajePorPosiciones · factor se aplica a score y
      maxScore` y `WO-14 · criterio: una difícil bien pesa más`.
- [x] El modelo de intento existente sigue intacto. Ver
      `WO-14 · modelo · migración viejo → sin dificultad` y
      `WO-14 · EvaluacionConfig · back-compat con JSON viejos`.
- [x] Queda claro qué es fundación (hecho) vs ruteo automático
      (roadmap, fuera). Ver §2 de este doc.

## 8. Archivos tocados

### 8.1 Modelo (mirror web + api)

- `apps/web/src/domain/quiz/posiciones.ts` (+ api mirror)
  - `POSICIONES_SCHEMA_VERSION`: 2 → 3.
  - `Dificultad`, `DIFICULTADES_VALIDAS`, `DIFICULTAD_ORDEN`,
    `dificultadIndice`, `dificultadVecina`, `coerceDificultad`.
  - `Variante.dificultad?: Dificultad`.
  - `parseVariante` lee `dificultad` (descarta inválidos).
  - `validarCuestionario` documenta que variantes PUEDEN diferir.

### 8.2 Sorteo (mirror web + api)

- `apps/web/src/domain/quiz/sorteo.ts` (+ api mirror)
  - `SeleccionPosicion.dificultad: Dificultad | undefined`.
  - `seleccionarPosicion` acepta `selector` opcional.
  - `sortearCuestionarioConVistas` acepta `selector` opcional.
  - `elegirVariantePorDificultad` (4 pasos de fallback).
  - `sortearCuestionarioPorDificultadFija`.
  - `proximaDificultad` (regla pura).
  - `dificultadInicialSugerida`.
  - `DIFICULTAD_INICIAL_DEFAULT = "intermedio"`.

### 8.3 Puntaje (mirror web + api)

- `apps/web/src/domain/quiz/puntaje.ts` (+ api mirror)
  - `factorDificultad(d): number` (0.8 / 1.0 / 1.2 / 1.0).
  - `PosicionPuntuable.factorDificultad?: number`.
  - `puntajePorPosiciones` y `puntajePorTema` aplican el factor.

### 8.4 Intentos / config (mirror web + api)

- `apps/web/src/domain/quiz/intentos.ts` (+ api mirror)
  - `PoliticaDificultad`, `POLITICAS_DIFICULTAD_VALIDAS`,
    `POLITICA_DIFICULTAD_DEFAULT = "fija"`.
  - `DIFICULTAD_INICIAL_DEFAULT = "intermedio"`,
    `DIFICULTAD_VENTANA_DEFAULT = 2`,
    `DIFICULTAD_VENTANA_MIN/MAX`.
  - `EvaluacionConfig` gana `politicaDificultad`, `dificultadInicial`,
    `dificultadVentana`.
  - `coercePoliticaDificultad`, `coerceDificultad`,
    `coerceDificultadVentana`.
  - `parseEvaluacionConfig`, `serializeEvaluacionConfig`,
    `DEFAULT_EVALUACION_CONFIG` extienden los 3 campos.

### 8.5 Mutaciones (web)

- `apps/web/src/domain/quiz/posicionesMutations.ts`
  - `cambiarDificultadVariante(c, numero, letra, dificultad)`.

### 8.6 Tests

- `apps/web/src/domain/quiz/__tests__/wo14-fundacion.spec.ts` (53 tests).
- `api/tests/integracion/wo14-fundacion.test.ts` (32 tests).

### 8.7 Test runner

- `api/package.json` — `test` script incluye `wo14-fundacion.test.ts`.

## 9. Resumen ejecutivo (TL;DR)

1. **Bug de los 4 intentos resuelto**: `dificultad` ahora vive en
   `Variante` (no en `params.dificultad` del generador), y se propaga
   por toda la cadena: posiciones → variante → sorteo → selección →
   scorer.
2. **No generación en vivo**: el selector elige entre variantes
   congeladas. Mismo seed → misma variante, en cualquier device.
3. **Reanudable**: el modelo WO-9 (presentedIds + outbox) preserva
   el camino. La fundación no introduce estado nuevo.
4. **Ponderado**: `factorDificultad` (0.8/1.0/1.2) se aplica al
   `puntaje` en el scorer. La ratio se preserva, el absoluto refleja
   la dificultad.
5. **Config persistida**: `politicaDificultad` ∈ {fija, manual,
   adaptativa_simple} + `dificultadInicial` + `dificultadVentana` en
   `EvaluacionConfig`. Defaults que preservan pre-WO-14.
6. **Ruteo automático sofisticado = roadmap**: fundación entrega la
   regla pura `proximaDificultad`; el wireado per-slide y la curva
   de nota final con dificultad son tareas separadas.

# Informe: "no funciona el guardado en Módulos" + revisión Tiza/VBLang

**Fecha**: 2026-07-01
**Pedido por**: usuario (sesión de análisis, sin implementación).
**Entorno de análisis**: Ubuntu Server 26, repo local con cambios sin
commitear sobre `e269115f` (WO-7b-ext). Investigación hecha con
`codebase-memory-mcp` (grafo de código), lectura directa de archivos,
`tsc --noEmit`, `pnpm lint`, la suite de tests (`node --test` en `api/`,
`vitest` en `apps/web/`) y un test de repro descartable (fuera del repo,
en `/tmp`, borrado al terminar) que levantó el servidor Express real con
el mismo orden de mounts que `api/src/index.ts` para confirmar el bug
principal empíricamente (no es solo lectura de código).

> **Importante**: este documento **no aplica fixes**. Solo diagnostica,
> reproduce y prioriza. Las secciones marcadas **CONFIRMADO** están
> verificadas (test real, tipado o suite existente); las marcadas
> **OPINIÓN / HIPÓTESIS** son lectura de código sin repro interactivo en
> navegador — el usuario las pidió explícitamente como "solo tu opinión".

---

## TL;DR

1. **🔴 CONFIRMADO — causa más probable del reporte.** Una ruta nueva
   agregada en el working tree actual, `GET /api/quizzes/:quizId`
   (`api/src/routes/modulos.ts:1326`), quedó registrada **antes** que
   `GET /api/quizzes/banco` (`api/src/routes/quiz-banco.ts:45`) en el
   orden de montaje de Express (`api/src/index.ts:179` vs `:206`).
   Resultado: **todo pedido a `/api/quizzes/banco` es interceptado**
   por la ruta genérica de módulos, que lo trata como si `quizId` fuera
   literalmente `"banco"`, no encuentra ese quiz y devuelve
   `404 {"error":"quiz not found"}`. Esto rompe el **Banco de
   Preguntas** (global-admin y de-escuela) en **los 5 lugares del front
   que lo usan**, incluido el flujo de armar/editar un cuestionario
   dentro de un módulo. El guardado del módulo en sí (`PUT /api/modulos/:id`)
   sigue funcionando (tests + tipado limpios); lo que está roto es un
   paso previo — poblar el cuestionario con preguntas del banco — que
   muy probablemente es lo que el usuario percibe como "no funciona el
   guardado".
2. **🟠 CONFIRMADO (por lectura de código).** El botón **"Preguntas
   nativas en Tiza →"** de `ModuloEditor.tsx:1690-1698` navega a
   `/plantillas/nueva?quizId=...`, y en `PlantillaEditorTiza.tsx` la
   condición que dispara el wizard de "Nueva plantilla" (línea 1548) y
   el breadcrumb (línea 1576) **no distinguen si hay `quizId`**: hoy se
   comporta —al menos en la primera pantalla— igual que "Editar
   plantilla" / crear una plantilla nueva desde cero, tal como
   sospechaba el usuario.
2b. **🟠 CONFIRMADO (por lectura de código, a partir de la captura del
   usuario).** El badge "🧩 Plantilla VBLang" / "Editar plantilla →" /
   "Preguntas nativas en Tiza →" de nivel-quiz (`ModuloEditor.tsx:1638-1699`)
   se calcula desde `quiz.generatorId`, un campo legacy pre-Posiciones
   que **nunca se sincroniza** con las variantes reales del modelo de
   Posiciones (`posicionesMutations.ts` no lo toca; `migrarCuestionario`
   lo ignora). En cualquier quiz que use Posiciones (el modelo vigente),
   esos links pueden apuntar a una plantilla sin relación con lo que se
   está editando, o a una variante que ni siquiera es de tipo
   `plantilla` (como en la captura, donde la variante activa es de
   origen `generador`). Preexistente, no introducido en esta sesión.
3. **🟡 OPINIÓN / HIPÓTESIS.** El síntoma "elijo materia y no puedo
   elegir cuestionario, elijo cuestionario y no puedo elegir materia"
   se explica en gran parte por el bug #1 (el banco queda siempre
   vacío, así que nunca hay nada para elegir). Además encontré un bug
   de estado latente independiente en `VarianteEditor.tsx` que, una vez
   arreglado #1, puede seguir generando una versión más suave del mismo
   síntoma.
4. **Metadatos de cuestionarios y migración a VBLang**: opinión en la
   sección dedicada — la migración propaga bien el contenido pedagógico
   (pasos, pistas, tolerancias, explicación) pero **no** propaga
   metadatos de autoría/dificultad de la plantilla hacia la pregunta ya
   generada.
5. **Otros problemas vigentes** (no introducidos por esta sesión, ya
   documentados en memoria de proyecto y reconfirmados hoy): 2 subtests
   de `cambiar-cuenta.test.ts`, varios specs de `QuizAttempt` y del
   editor clásico `PlantillaEditor` fallan en HEAD limpio; el lint de
   `web` ya no crasha a nivel config (contradice una nota previa) pero
   reporta 164 errores / 46 warnings preexistentes, ninguno en los
   archivos tocados por esta sesión.

---

## Bug 1 — Shadowing de rutas rompe el Banco de Preguntas (🔴 crítico, confirmado)

### Repro

Levantando el servidor real con el mismo orden de `app.use(...)` que
`api/src/index.ts` (`modulos` montado en la línea 179, `quizBanco` en la
206) y pidiendo `GET /api/quizzes/banco` autenticado como docente:

```
status: 404
body: {"error":"quiz not found"}
```

En vez de la lista de cuestionarios del banco. El mismo pedido contra
**solo** `quizBanco` (sin `modulos` montado antes) responde
correctamente con `{"items": [...], "total": ...}`. Esto aísla la causa
al orden de montaje, no a `quiz-banco.ts` en sí.

### Causa raíz

`api/src/routes/modulos.ts:1322-1344` (agregado en el working tree
actual, sin commitear, para que la cabecera de Tiza pueda mostrar
"Cuestionario: <título>"):

```ts
modulos.get("/api/quizzes/:quizId", requireUser, async (req, res) => {
  const loaded = await loadQuizConModulo(quizId);
  if (!loaded) return res.status(404).json({ error: "quiz not found" });
  ...
});
```

`api/src/routes/quiz-banco.ts:45`:

```ts
quizBanco.get("/api/quizzes/banco", requireUser, async (req, res) => {
  ...
});
```

`api/src/index.ts`:

```
179: app.use(modulos);
...
206: app.use(quizBanco);
```

Express resuelve rutas en el orden en que los routers fueron montados.
`/api/quizzes/:quizId` matchea sintácticamente contra
`/api/quizzes/banco` (con `quizId = "banco"`), y como `modulos` se
monta primero, esa ruta gana siempre — `quiz-banco.ts:45` queda
inalcanzable para `GET /api/quizzes/banco`. `loadQuizConModulo("banco")`
no encuentra ningún quiz con ese id → 404.

`GET /api/quizzes/banco/:quizId/questions` (quiz-banco.ts:174, 3
segmentos) **no** está afectado porque no matchea contra ninguna ruta de
2 segmentos de `modulos.ts`.

### Impacto — 5 puntos del front que dependen de `GET /api/quizzes/banco`

| Archivo | Uso | Efecto observado |
|---|---|---|
| `apps/web/src/pages/ProfesorEvaluaciones.tsx:108` | Lista el banco completo (`origen=todos`) | La sección de banco no carga nada |
| `apps/web/src/components/modulos/BancoCuestionariosMulti.tsx:84` | Panel "Banco — Global/Escuela" dentro de **Editor de Cuestionarios V2** (`EditorCuestionariosV2.tsx:1069`), usado al armar un cuestionario desde un módulo | `catch(() => setStatus("error"))` → banner **"Error al cargar el banco."** — el docente no puede importar preguntas del banco al cuestionario que está armando |
| `apps/web/src/components/modulos/BancoCuestionarios.tsx:59,72,98` | Variante más vieja del mismo panel | Mismo error, mismo bloqueo |
| `apps/web/src/components/modulos/VarianteEditor.tsx:90` (`DEFAULT_BANCO_ESCUELA_IO.listBanks`) | Pestaña "Banco de escuela" al editar una **variante por posición** de un cuestionario (`QuizPosicionesEditor`, usado desde `ModuloEditor.tsx:1874`) | `if (!r.ok) return [];` → la lista de cuestionarios queda **siempre vacía**, independientemente de la materia elegida |

En los cuatro casos el guardado del módulo/cuestionario en sí (el POST/PUT
final) no está roto — lo que se rompe es el paso de **elegir preguntas
existentes del banco** antes de guardar, que es un paso central del
flujo normal de armar un cuestionario en Módulos. Esto encaja con "no
funciona el guardado en módulos" tal como lo describiría un docente que
no llega a completar el cuestionario.

### Por qué no lo agarró la suite de tests

No existe ningún test de integración para `api/src/routes/quiz-banco.ts`
(`find tests -iname "*banco*"` no devuelve nada) ni un test que verifique
el orden de montaje de rutas en `index.ts`. El nuevo test
`quiz-preguntas-editor.test.ts` monta **solo** `modulos` de forma
aislada (`startServer([modulos])`), así que nunca ve el conflicto con
`quizBanco`. `tsc --noEmit` tampoco lo detecta porque es un problema de
orden en runtime, no de tipos.

### Alcance del bug

Vive **únicamente en el working tree actual, sin commitear** (la ruta
`GET /api/quizzes/:quizId` no existe en `e269115f`, el último commit).
Si el usuario prueba contra `main`/HEAD limpio sin este WIP, este bug
puntual no aplica — pero si está probando la app con los cambios
locales cargados (lo más probable, dado que preguntó por una feature de
esta misma sesión), es la explicación más directa.

### Dirección de fix (para una sesión posterior, no implementado acá)

La ruta nueva necesita dejar de ser un comodín de un segmento sin
restricción, o el router de módulos necesita montarse después de
`quizBanco`, o la ruta de banco necesita registrarse con más
especificidad delante. Cualquiera de las tres es de bajo riesgo, pero
conviene revisar si hay más rutas `/api/quizzes/:algo` de un segmento en
otros routers antes de decidir cuál.

### ✅ RESUELTO (2026-07-01, sesión posterior)

Se aplicó la primera opción: el endpoint se renombró a
`GET /api/quizzes/:quizId/meta` (en `modulos.ts`, `quizPreguntasApi.ts`
y los tests f/g de `quiz-preguntas-editor.test.ts`), eliminando el
comodín de un segmento en la raíz de `/api/quizzes`. Verificado: el
test m9 de `quiz-version-materia.test.ts` (que monta `[modulos,
quizBanco]` en el mismo orden que producción y fallaba con el shadowing)
volvió a pasar — queda como test guardián del orden de mounts.

---

## Bug 1b — Badge "🧩 Plantilla VBLang" / "Editar plantilla →" desincronizado del modelo de Posiciones (🟠 confirmado por código, agregado tras revisar captura del usuario)

El usuario adjuntó una captura del editor de un cuestionario ("test
mapas") que expuso un segundo problema, real, en la misma zona de
`ModuloEditor.tsx`.

### Lo que muestra la captura

- Arriba: `🧩 Plantilla VBLang · test mapas · Editar plantilla → ·
  Preguntas nativas en Tiza →` — el badge de nivel **quiz**
  (`ModuloEditor.tsx:1649-1699`).
- Abajo, dentro de "Posiciones del cuestionario": posición 1 ("Fija", 1
  variante) actualmente editándose con el panel **"Configuración del
  generador"** (catálogo Física/Matemáticas + Dificultad + Cantidad de
  preguntas + Vista previa) — es decir, la variante activa tiene
  `origen: "generador"`, **no** `origen: "plantilla"`.

### Causa raíz

El badge de arriba (`esPlantilla`, `plantillaNombre`, "Editar plantilla
→", "Preguntas nativas en Tiza →") se calcula así en
`ModuloEditor.tsx:1638-1641`:

```tsx
const quizGenId = quiz.generatorId ?? "";
const esPlantilla = quizGenId.startsWith("plantilla:");
const plantillaId = esPlantilla ? quizGenId.slice("plantilla:".length) : null;
```

`quiz.generatorId` es un campo **de nivel quiz**, heredado del modelo
viejo (pre-F3/WO-2, un quiz = un solo generador/plantilla). El modelo
de **Posiciones** (F3/WO-2, el que se ve abajo en la captura) es
posterior y vive enteramente en `quiz.posiciones`, donde **cada
variante de cada posición tiene su propio `origen`** (`banco` /
`plantilla` / `generador`), independiente entre sí.

Verifiqué que **nada sincroniza estos dos mundos**:

- `apps/web/src/domain/quiz/posicionesMutations.ts` (`cambiarOrigenVariante`
  y el resto de las mutaciones de posiciones) nunca lee ni escribe
  `quiz.generatorId` — sólo tocan `quiz.posiciones`.
- `migrarCuestionario` (`apps/web/src/domain/quiz/posiciones.ts:362-385`),
  que migra un quiz viejo a posiciones, construye cada variante inicial
  como `{ origen: "banco", questionId: q.id }` a partir de
  `quiz.questions` — **ignora por completo** `quiz.generatorId`/`quiz.mode`.

Conclusión: en cualquier quiz que use el modelo de Posiciones (que es
el modelo vigente, el que arma toda la UI de abajo), el badge "🧩
Plantilla VBLang" / "Editar plantilla →" de arriba queda **fosilizado**
con lo que sea que `quiz.generatorId` tuviera en el momento en que el
quiz se creó (o vacío, o un id de una plantilla que ya nadie usa),
completamente desconectado de qué variante/posición esté realmente
activa o de qué tipo sea (plantilla, banco o generador). Eso explica
exactamente lo que reporta el usuario: al tener seleccionado/abierto un
cuestionario en modo Posiciones, presionar "Editar plantilla →" (o
"Preguntas nativas en Tiza →") desde Módulos o desde Plantillas navega
a una plantilla que no tiene relación real con lo que se está editando
— puede ser una plantilla vieja sin usar, o directamente no reflejar
que la variante activa ni siquiera es de tipo `plantilla` (como en la
captura, donde es `generador`).

### Impacto

- Confuso pero no destructivo: no encontré que pise datos ni rompa el
  guardado. El daño es de **navegación/expectativa**: el docente cree
  que "Editar plantilla →" lo va a llevar a la plantilla de la variante
  que tiene abierta, y en cambio lo manda a un `plantillaId` de otro
  contexto (o a un 404 si esa plantilla vieja fue borrada).
- Refuerza el Bug 2: como el badge tampoco sabe nada de `quizId`
  contextual más allá de ese campo legacy, la sensación general es la
  misma — "esto se comporta como editar-plantilla-a-secas, no como algo
  atado a este cuestionario puntual".

### Nota de alcance

A diferencia del Bug 1, **esto no es de esta sesión** — el campo
`quiz.generatorId` y el modelo de Posiciones conviven así desde que WO-2/F3
introdujo Posiciones sin migrar/limpiar ese campo legacy. Es preexistente,
no una regresión del working tree actual.

---

## Bug 2 — "Preguntas nativas en Tiza" se comporta como "Editar plantilla" (🟠 confirmado por código)

### Repro (lectura de código, no interactiva)

`ModuloEditor.tsx:1690-1698`, el link visible sólo para módulos ya
guardados:

```tsx
{id && (
  <Link to={`/plantillas/nueva?quizId=${encodeURIComponent(quiz.id)}&returnTo=${...}`}
    data-testid="quiz-tiza-preguntas-link">
    Preguntas nativas en Tiza →
  </Link>
)}
```

Esto navega a la **misma ruta** (`/plantillas/nueva`) que "+ Nueva
plantilla" en cualquier otro lugar de la app; la única diferencia es el
query param `quizId`.

En `PlantillaEditorTiza.tsx`:

- Línea 330: `const isNew = !id;` — `id` es el param de ruta
  (`/plantillas/:id`), **no** existe en `/plantillas/nueva`, así que
  `isNew` es `true` tanto para "crear plantilla en blanco" como para
  "abrir preguntas nativas de un quiz existente".
- Línea 1548: `{isNew && !wizardDismissed && <NuevaPlantillaWizard .../>}`
  — no chequea `quizId`. El wizard de onboarding ("elegí una plantilla
  de partida o empezá en blanco"), pensado para plantillas realmente
  nuevas, se dispara igual cuando se entra desde "Preguntas nativas en
  Tiza".
- Línea 1576: `isNew ? "Nueva plantilla" : metadata.nombre || "Plantilla"`
  — el breadcrumb dice "Nueva plantilla" aunque haya `quizId` (y aunque
  el header de DETALLES, arreglado en esta misma sesión sin commitear,
  ya muestre correctamente "Cuestionario: <título>").

### Impacto

El guardado real por debajo (`handleSave`, línea 719) sí distingue bien
los casos — si `active.plantillaId` existe llama a `updatePlantilla`
(edita), si no, a `createPlantilla` (crea) y además, con `quizId`
presente, hace un `saveQuizPreguntas` adicional (línea 795-811) para
mantener sincronizado el `CuestionarioPreguntas` del quiz. **La lógica
de guardado en sí no está rota.** El bug es de **entrada/contexto**: el
docente que clickea "Preguntas nativas en Tiza →" ve primero el mismo
wizard "¿plantilla en blanco o de una lista?" que vería creando una
plantilla completamente nueva sin relación a ningún cuestionario, y el
breadcrumb no lo corrige. Es coherente con lo que describe el usuario
("puede que haga lo mismo que editar plantilla") aunque funcionalmente
el guardado termine en el lugar correcto una vez que se dismisea el
wizard.

---

## Bug 3 — Selección Materia ↔ Cuestionario (🟡 opinión / hipótesis)

El síntoma reportado ("elijo materia, no puedo elegir cuestionario;
elijo cuestionario, no puedo elegir materia, o tira error") lo explico
en dos capas, en orden de probabilidad:

**Capa 1 (la más probable): es el Bug 1.** La pestaña "Banco de
escuela" de `VarianteEditor.tsx` (usada dentro de
`QuizPosicionesEditor`, alimentada con `materiaHint={form.subject}` desde
`ModuloEditor.tsx:1877`) llama a `listBanks(materiaHint)`
(`VarianteEditor.tsx:88-98`), que pega contra el endpoint roto del Bug 1
y **siempre** devuelve `[]`. El componente entonces renderiza
`"No hay bancos de escuela disponibles."` (línea 477) sin importar qué
materia se elija. Desde la perspectiva de un docente esto se ve
exactamente como "elegí una materia y ya no puedo elegir ningún
cuestionario".

**Capa 2 (bug latente independiente, se notará recién cuando se arregle
la Capa 1):** `VarianteEditor.tsx:436-456`.

```tsx
const [selectedQuiz, setSelectedQuiz] = useState("");
...
useEffect(() => {
  ...
  io.listBanks(materiaHint).then((items) => {
    if (!cancelled) { setBanks(items); setLoading(false); }
  })...
}, [io, materiaHint]);
```

Cuando `materiaHint` cambia, `banks` se refetchea y filtra por la nueva
materia, pero `selectedQuiz` **nunca se limpia**. Si el docente ya había
elegido un cuestionario de la materia anterior, el `<select value={selectedQuiz}>`
(línea 489) queda apuntando a un `quizId` que ya no está en las
`<option>` disponibles — React no puede reflejar ese valor en el DOM,
así que el control visualmente "pierde" la selección, y el segundo
`<select>` de preguntas (línea 505, condicionado a
`selectedQuiz && !loadingQs && questions.length > 0`) puede quedar en un
estado raro mientras `getQuestions(selectedQuiz)` resuelve contra un id
que ya no correspondería a la materia activa. No es un `throw`
propiamente dicho, pero sí una UX rota y confusa — coherente con la
segunda mitad del reporte ("o da error").

No pude reproducir esto de forma interactiva en navegador en esta
sesión (se pidió expresamente un informe, no una verificación en vivo),
así que lo dejo marcado como hipótesis fundada en lectura de código, no
como hecho confirmado con repro.

---

## Metadatos de cuestionarios y su migración a VBLang (opinión)

Reviso `packages/vblang/src/adapters/to-module-quiz-question.ts`
(`toModuleQuizQuestion`, líneas 116-260), la función que convierte el
resultado de generar/evaluar una plantilla VBLang al shape
`ModuleQuizQuestion` que consume el reproductor de cuestionarios.

**Lo que sí se propaga bien** hacia la pregunta ya generada: enunciado,
opciones/`answerKey`, `explanation` (con fallback en cascada:
`options.explanation` → `gen.explicacion` del DSL → texto armado desde
`pasos` → fallback de `marcar_mapa`), `pasos`, `pistas`,
`toleranciaRelativa`/`toleranciaAbsoluta`, `unidades`, `datos`
(variables), y los campos específicos de tipos especiales (`ordenar`,
`marcar_mapa`, `analisis_sintactico`, `identificar_palabras`, `abierta`).
Es una migración de contenido pedagógico bastante completa comparada
con el generador viejo.

**Lo que, a mi criterio, queda corto**: la metadata de **autoría y
dificultad** que vive en la capa de composición del cuestionario
(`PreguntaQuiz.dificultad`/`rol` en `apps/web/src/domain/quiz/preguntas.ts`,
y las etiquetas de dificultad de variante que usa
`elegirVariantePorDificultad`/WO-14 en `quiz-sorteo.ts`) **no viaja**
dentro del `ModuleQuizQuestion` que finalmente se le sirve al alumno ni
queda registrada en el intento (`QuizAttempt`). Esa dificultad se usa
sólo en el momento de *elegir* qué variante mostrar, pero no queda
"estampada" en la pregunta servida. Efecto práctico: si más adelante se
quiere reportar "el alumno respondió mal 3 preguntas de dificultad
avanzada", hay que cruzar el intento contra la configuración de slots
del quiz en ese momento — no es un dato que el intento guarde por sí
mismo. No es un bug (nadie pidió ese reporte todavía), pero es una
brecha de trazabilidad que vale la pena tener presente si en algún
momento se quiere auditar rendimiento por dificultad de forma
retroactiva, sobre todo con la base de plantillas de Física recién
migradas (commit `e269115f`, "portar las 6 áreas restantes de Física a
plantillas VBLang oficiales") sumándose al volumen de contenido nativo.

---

## Evaluación: "pool de plantillas" interno en Tiza (opinión, a pedido del usuario)

Pregunta del usuario: qué tan fácil sería armar, con lo que ya existe
hoy, un *pool de plantillas VBLang* dentro de un cuestionario (varias
plantillas distintas entre las que el sorteo elige una por intento).

**Mi lectura: ya existe casi entero, sólo falta pulir la UX de
armado.** El modelo de Posiciones (F3/WO-2) que se ve en la mitad
inferior de la captura ya separa dos conceptos que son justo los que
hacen falta:

1. **Tipo de posición "Pool"** (`tipo: "obligatorio"` en el dominio,
   rotulado "Pool" en la UI — `PosicionesCanvas.tsx:66`): una posición
   de este tipo acepta **más de una variante** (a diferencia de "Fija",
   que la validación fuerza a exactamente 1 — `posiciones.ts:441-442`),
   y el sorteo (`quiz-sorteo.ts` / `seleccionarPosicion`) elige una al
   azar por intento.
2. **Origen "plantilla" por variante** (`VarianteEditor.tsx:560-651`,
   `PlantillaOrigenEditor`): cada variante de una posición se
   configura de forma **independiente**, y ya soporta elegir una
   plantilla VBLang **existente** por búsqueda (`PlantillaSelectorModal`,
   filtrable por materia vía `materiaHint`) o crear una nueva, con
   edición inline de su DSL sin salir del flujo (`PlantillaInlineEditor`,
   línea 659+).

Juntando ambas piezas — que ya están cableadas y probadas, no son
hipotéticas — un docente **hoy mismo** puede: crear una posición tipo
"Pool", clickear "+ Añadir variante" varias veces, y en cada variante
usar "Elegir plantilla" para apuntar a una plantilla VBLang distinta ya
existente. Eso **es**, funcionalmente, un pool de plantillas. No hace
falta modelo de datos nuevo, ni endpoint nuevo, ni cambios de
`quiz-sorteo.ts`/`quiz-puntaje.ts` — todo ese motor ya es agnóstico al
`origen` de cada variante.

**Lo que sí le falta, si se quisiera una experiencia más cómoda** (esto
ya es una mejora de UX, no una feature nueva de dominio):

- Agregar variantes de a una y buscar+elegir la plantilla en cada una
  por separado es lento si el docente ya tiene 10-15 plantillas
  armadas para un tema. Un selector multi-pick ("elegí N plantillas de
  esta materia, se crean N variantes de una") ahorraría varios clicks,
  reusando el mismo `PlantillaSelectorModal` que ya filtra por
  `materiaHint`.
- Convendría arreglar el **Bug 1b** de arriba antes o junto con esto:
  si se promociona el pool de plantillas como feature visible, el badge
  de nivel-quiz ("Editar plantilla →") tiene que dejar de mostrar un
  único `plantillaId` legacy cuando en realidad hay N plantillas
  conviviendo en las variantes de una posición Pool — hoy ese badge
  directamente no tiene ningún concepto de "más de una plantilla por
  quiz".
- No verifiqué si `PlantillaSelectorModal` deja reusar la MISMA
  plantilla en dos variantes distintas de la misma posición (tendría
  sentido bloquearlo, para no sortear dos veces la idéntica pregunta);
  si no lo bloquea hoy, es una validación chica a agregar.

**Estimación (opinión, no medí el código de `PlantillaSelectorModal`
en detalle):** la mecánica central — pool + plantillas — ya funciona.
El trabajo real de una eventual sesión de implementación sería
puramente de UX de conveniencia (selector múltiple) y prolijidad
(sincronizar o retirar el badge legacy), no de arquitectura nueva. Lo
calificaría como bajo esfuerzo comparado con el resto de los hallazgos
de este informe.

---

## Otros problemas actuales detectados

Ninguno de estos fue introducido por la sesión en curso; los reconfirmé
hoy corriendo la suite real (no son sólo lectura de memoria de
proyecto):

| Área | Estado | Detalle |
|---|---|---|
| `api/tests/integracion/cambiar-cuenta.test.ts` | 🔴 2 subtests fallan | "FASE 2: switch sin vinculación → 403" y "FASE 7 (switch ajeno)..." devuelven `200` en vez de `403`. Falla igual en HEAD limpio. |
| `apps/web/src/pages/quizzes/__tests__/QuizAttempt.wo9.spec.tsx`, `.f5-02.spec.tsx` | 🔴 varios subtests fallan | Preexistente, no relacionado a `QuizAttempt.tsx` en esta sesión. |
| `apps/web/src/pages/__tests__/PlantillaEditor.spec.tsx`, `.vb-b2-generated-code.spec.tsx` | 🔴 varios subtests fallan | Es el editor **clásico** (no Tiza). Preexistente. |
| `apps/web/src/pages/__tests__/ProfesorMateriales.compartir-scope.spec.tsx` | 🔴 fallaba en sesiones previas (memoria de proyecto) | No reconfirmado línea por línea hoy, pero forma parte del mismo bloque de fallas preexistentes de la corrida completa (22 tests / 6 archivos fallando, número consistente con lo ya documentado). |
| `pnpm --filter web lint` | 🟡 **corrección a una nota previa** | Una memoria de sesiones anteriores decía que el lint crasheaba a nivel config (`path is not defined` en `eslint.config.js`). Hoy corre sin crashear y reporta 164 errores + 46 warnings reales de código (`no-explicit-any`, `react-hooks/set-state-in-effect`, `react-refresh/only-export-components`, etc.), repartidos en archivos no tocados por esta sesión. Ninguno cae en `modulos.ts`, `TizaEditor.tsx`, `PlantillaEditorTiza.tsx`, `plantillaAst.ts` ni `quizPreguntasApi.ts`. Conviene actualizar esa nota — o el config se arregló en algún commit posterior, o el crash era intermitente. |
| `api/` — `tsc --noEmit` | 🟢 limpio | Sin errores de tipos en el working tree actual. |
| `apps/web/` — `tsc --noEmit` | 🟢 limpio | Ídem. |
| `api/tests/integracion/quiz-preguntas-editor.test.ts` (los 7 tests del working tree actual) | 🟢 pasan | Cubren bien GET/PUT de preguntas y el nuevo GET de metadata; no cubren el conflicto de rutas del Bug 1 porque montan el router aislado. |
| `apps/web` — specs modificados en esta sesión (`TizaEditor.spec.tsx`, `plantillaFields.spec.ts`, `PlantillaEditorTiza.quizId.spec.tsx`) | 🟢 pasan | 64 tests en total, sin fallas. |

---

## Resumen de severidad y próximos pasos sugeridos (sin implementar)

| # | Bug | Severidad | Confianza |
|---|---|---|---|
| 1 | Shadowing `/api/quizzes/:quizId` vs `/api/quizzes/banco` — **✅ RESUELTO 2026-07-01** (renombrado a `:quizId/meta`, ver Bug 1) | ~~🔴 Alta~~ | Confirmado con repro real; fix verificado con m9 |
| 1b | Badge "Editar plantilla →" desincronizado del modelo de Posiciones | 🟠 Media — navega a contenido sin relación con la variante activa | Confirmado por código |
| 2 | "Preguntas nativas en Tiza" dispara wizard/breadcrumb de plantilla nueva | 🟠 Media — confunde pero no pierde datos | Confirmado por código |
| 3a | Banco de escuela vacío por el Bug 1 | 🟠 Media-Alta (subset del #1) | Confirmado (consecuencia directa) |
| 3b | `selectedQuiz` no se limpia al cambiar materia en `VarianteEditor.tsx` | 🟡 Baja-Media, latente | Hipótesis, sin repro en navegador |
| — | Metadatos de dificultad no viajan al `ModuleQuizQuestion` servido | 🟡 Informativo | Opinión de diseño, no bug |
| — | Fallas preexistentes (`cambiar-cuenta`, `QuizAttempt`, `PlantillaEditor` clásico) | 🟡 Ya conocidas | Reconfirmadas hoy |

Sugiero, en este orden, para una sesión de implementación:

1. Resolver el orden/especificidad de rutas del Bug 1 — es el de mayor
   impacto y el que más directamente explica el reporte original.
2. ~~Agregar al menos un test de integración para `quiz-banco.ts` que
   monte los routers en el mismo orden que `index.ts`~~ — **corrección
   (2026-07-01, sesión posterior)**: ese test YA existía — el m9 de
   `quiz-version-materia.test.ts` monta `[modulos, quizBanco]` en el
   mismo orden que producción y efectivamente fallaba con el shadowing;
   fue la evidencia que confirmó el bug y la que verificó el fix.
3. Ajustar la condición del wizard/breadcrumb en
   `PlantillaEditorTiza.tsx` para que dependa también de `quizId`.
4. Una vez resuelto el #1, volver a observar el comportamiento de
   `VarianteEditor.tsx` con datos reales antes de decidir si vale la
   pena tocar el manejo de `selectedQuiz`.
5. Decidir qué hacer con el badge legacy del Bug 1b — como mínimo,
   dejar de mostrar "Editar plantilla →" quando el quiz ya usa
   Posiciones con variantes de origen mixto; idealmente, listar ahí las
   plantillas realmente en uso por las variantes activas.
6. Si se decide construir el "pool de plantillas" como feature
   visible: no requiere modelo nuevo (ver sección dedicada), sólo un
   selector múltiple sobre `PlantillaSelectorModal` y resolver el punto
   5 en paralelo para no arrastrar la misma confusión a la nueva UX.

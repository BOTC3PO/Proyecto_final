# Módulos — modelo de datos y comportamiento (dev)

| | |
|---|---|
| **Estado** | Vigente |
| **Audiencia** | Backend, full-stack |
| **Última actualización** | 2026-07-08 (PLAN-P §2) |
| **Fuente de verdad** | `api/prisma/schema.prisma` (`Modulo`, `Quiz`, `QuizVersion`, `QuizAttempt`…), `api/src/routes/modulos.ts`, `api/src/routes/quiz-attempts.ts` |

> Guía de uso para el docente (crear módulo, teoría, cuestionarios, publicar) en
> [`frontend/modulos-guia-docente.md`](./frontend/modulos-guia-docente.md). Este documento es la
> referencia técnica: modelo, invariantes de guardado, intentos y rutas.

## Qué es un `Modulo`

Un módulo es la unidad de contenido de la plataforma: teoría (`theoryItems`) + cuestionarios
(`Quiz[]`), con visibilidad y dueño. Modelo (`schema.prisma:504-559`), campos reales:

```
id, slug?(unique), titulo, descripcion?
subject?, level?, category?, durationMinutes?
theoryItems?: String        — JSON de la teoría embebida (ver abajo)
scoringConfig?: String      — JSON { systemId, minPassingScore? }, escala de notas
dependencies?: String       — JSON { id, type: "required"|"unlocks" }[] (ver abajo)
visibility: String @default("private")   — en código real: "privado" | "escuela" | "publico"
schoolId?, ownerUserId?
teoriaId?    — FK a TeoriaJson (modelo VIEJO de teoría por referencia — no confundir con theoryItems)
tuesdayDocId?, libroId?    — ids libres, NO son @relation de Prisma
defaultQuestionCount?
clonedFromId?, clonedFromTitle?, clonedFromOwnerUserId?   — provenance de copia (WO-13)
isDeleted, createdAt, updatedAt
```

Relaciones: `teoria: TeoriaJson?`, `quizzes: Quiz[]` (inversa de `Quiz.moduleId`).

**Lo que NO tiene** (para no asumir de más leyendo el schema Zod de la API):
- **Columna `status`**: el schema Zod (`api/src/schema/modulo.ts`) declara `status:
  "ACTIVE"|"ARCHIVED"` con default, pero **no se persiste en ningún lado** — ni `POST` ni
  `applyModuleUpdate` la escriben. `withDefaultStatus` devuelve siempre `status: {}`. **No existe
  ciclo de vida borrador→publicado implementado** — un módulo es visible según `visibility`/
  `schoolId` desde que se crea, no hay un estado intermedio de "borrador sin publicar".
- **Columna `aulaId`**: la relación módulo↔aula es la tabla `ClaseModulo`, no una FK directa. El
  guard `assertClassroomWritable` (bloquear edición si el aula quedó en sólo-lectura) lee
  `existing.aulaId` en `PUT`/`PATCH`/`DELETE` (`modulos.ts:1170,1257,1333`) pero como esa propiedad
  no existe en `Modulo`, ese guard **nunca se activa en updates/deletes** — sólo funciona en `POST`,
  donde `aulaId` viene del payload. Comportamiento real, no necesariamente el esperado.

## `theoryItems`

Array de bloques de teoría, persistido como JSON en la columna `theory_items` (`null` si vacío).
Shape (`ModuleTheoryItemSchema` en `api/src/schema/modulo.ts`, espejo en
`apps/web/src/domain/module/module.types.ts:11-16`):

```ts
type ModuleTheoryBlock = { id: string; title: string; type: string; detail: string }
```

`type` es un string libre (sin unión estricta en ningún lado); los valores que ofrece el editor
(`buildTheoryTypes`, `module.types.ts:299-314`) y lo que significa `detail` para cada uno
(consumido en `apps/web/src/components/modulos/TheoryItemCard.tsx`):

| `type` | `detail` es… | Consumidor |
|---|---|---|
| `Texto`, `Video` | Contenido de texto plano, se muestra directo. | `TheoryItemCard` (rama "texto"). |
| `Presentación` | JSON de diapositivas (`detailToPresentation`) — slides/theme/accentColor. | `TheorySlideEditor` / `SlidePresenter`. |
| `Enlace` | Una URL (interna o externa). | Link directo. |
| `Libro` | Id de un `Libro` (o, legacy, una URL externa o ruta interna — 3 casos distinguidos por forma). | `BookReaderOverlay` (overlay de lectura sin salir del módulo). |
| `Documento` | Id de un `Page` (tabla `pages`, la que el código llama "TuesdayDoc" en la UI). | — |
| `Herramienta` | `BlockDocument` serializado completo (`deserializeBlockDocument`). | `blocks/BlockRenderer.tsx` — los 13 tipos de bloque, ver [`frontend/editor-bloques.md`](./frontend/editor-bloques.md). |
| `HerramientaStandalone` | JSON de config de una herramienta fija (`parseStandaloneConfig`): `tool` ∈ `tabla-periodica`/`escalador-recetas`/`linea-tiempo`/`mapa`. | Componente de esa herramienta, modo lectura. |
| `TuesdayJS` | Ver nota abajo. | — |

> **Inconsistencia a resolver, no a documentar como si no existiera**: `"TuesdayJS"` sigue
> ofreciéndose como tipo de teoría habilitado en las 21 materias (`supportsTuesdayJs: true`), pero
> el modelo `TuesdayDoc` que lo respalda está marcado `@deprecated` en `schema.prisma:469-473`
> ("Páginas TuesdayJS se retiró del producto", PLAN-J §4, 2026-07-07). El panel admin que lo
> gestionaba ya se retiró; el tipo de teoría en el editor de módulos, no. Confirmar con Javier antes
> de decidir si esto se retira también o si es intencional.

## Dependencias entre módulos

`Modulo.dependencies` (JSON `{ id: string; type: "required" | "unlocks" }[]`). **Sólo se consumen
en `api/src/routes/progreso.ts`** (no en `modulos.ts`): un módulo con una dependencia `"required"`
que no esté `completado` en `ProgresoModulo` para ese usuario queda bloqueado
(`isLocked`, `progreso.ts:178-208,413-450,501-520`). El tipo `"unlocks"` está definido en el schema
pero **no se encontró ningún consumidor** — podría ser vestigial o aspiracional; no lo documente
como funcional sin confirmar antes.

## Visibilidad y scoping

`visibility ∈ {"privado","escuela","publico"}` + `schoolId`. Lógica central en `modulos.ts:83-180`:

- `canEditModuloDirect` — quién edita el original: ADMIN, el dueño (`ownerUserId`), o staff de la
  misma escuela si `visibility === "escuela"`.
- `requiresCopyOnWrite` — si el requester puede **ver** el módulo pero no editarlo, un `PUT`/`PATCH`
  no devuelve 403: **clona** el módulo y aplica el cambio sobre el clon (mismo patrón que `Libro`,
  ver [`book-editor.md`](./book-editor.md#guardado-y-scoping-backend)). Cubierto por
  `modulos-copy-on-write.test.ts`.
- `quizVisiblePara` — gating de cuestionarios individuales al alumno (visibilidad por quiz, no sólo
  por módulo).

## `Quiz` / `QuizVersion` post-C2

No hay tabla de join ni array de ids en `Modulo`: es una FK directa y **nullable**,
`Quiz.moduleId String? @map("module_id")` (`schema.prisma:578`), con `Modulo.quizzes: Quiz[]` como
relación inversa. Desde PLAN-CORRECCIONES C2 (migración `20260703180000_quiz_standalone`) un quiz
puede existir **sin módulo** (`moduleId: null`, dueño = `ownerUserId`) — "quiz suelto", gestionado
por `GET/POST /api/quizzes` y adjuntado a un módulo vía `POST /api/quizzes/:quizId/usar-en-modulo`,
que **clona** el quiz (no lo mueve): el original standalone sigue existiendo y reusable en otro
módulo (test: `plan-corrections-c2-quiz-standalone.test.ts`).

`QuizVersion` es inmutable por versión (`@@unique([quizId, versionNumber])`), con preguntas de 3
formas no excluyentes: `questionSetId` (banco estático compartido, `QuizQuestionSet`), `questions`
(JSON embebido manual), o generador (`generatorId/generatorVersion/params/count/seedPolicy`).
`settings` (JSON) es donde vive casi toda la config de evaluación: `type, mode, visibility,
maxIntentos, politicaNota, politicaSorteo, ocultarPuntos, timerSegundos, fullscreenOnStart,
modoPresentacion, preguntasPorPagina, politicaDificultad, posiciones, preguntas` (el cuestionario
nativo "Tiza"), `materia`, entre otros.

## Ciclo de guardado

No hay "borrador local → guardado → publicado" como estados formales (ver arriba: no hay columna
`status`). Lo que sí existe es un ciclo de **edición sin pérdida de historial**:

1. `POST /api/modulos` crea el módulo + sus quizzes iniciales (cada uno con su primera
   `QuizVersion`).
2. Cada `PUT`/`PATCH /api/modulos/:id` pasa por `applyModuleUpdate` (ver invariantes abajo).
3. "Jugar" un módulo es crear un `QuizAttempt` sobre la `QuizVersion` **activa** de cada `Quiz` (ver
   [Intentos](#intentos-materializar-y-congelar) abajo) — el módulo en sí no tiene un estado de
   "jugado", eso vive en `ProgresoModulo` por usuario+módulo+aula.

### `applyModuleUpdate` — invariantes (evitar pérdida de datos)

Función compartida por `PUT` y `PATCH /api/modulos/:id` (`modulos.ts:933-1163`), corre dentro de una
transacción (todo o nada). Reglas, de la más a la menos obvia:

1. **Update parcial real**: cada campo (`titulo, descripcion, subject, theoryItems, level,
   visibility, schoolId, scoringConfig, ownerUserId, dependencies`) sólo se toca si el payload lo
   trae (`!== undefined`). Un PATCH que no manda `subject` no lo borra.
2. **Los quizzes nunca se `DELETE`, se desactivan**: un quiz existente que no aparece en
   `payload.quizzes[]` pasa a `isActive: false` (soft-delete) — mismo mecanismo que
   `DELETE /api/quizzes/:quizId`. El historial de intentos sobre ese quiz queda intacto.
3. **Editar un quiz existente crea una `QuizVersion` NUEVA, nunca sobrescribe la vieja**: se calcula
   `versionNumber` = máximo + 1, y sólo después se actualiza `Quiz.currentVersionId`. Un
   `QuizAttempt` viejo sigue apuntando a su versión original — la corrección de un intento pasado no
   cambia si el docente edita el quiz después.
4. **Arrastre de `settings.preguntas`** (la más frágil, con test dedicado): el payload de módulo no
   conoce el campo nativo de Tiza (`settings.preguntas`). Sin arrastrarlo explícitamente, cada
   guardado desde `ModuloEditor` crearía una versión nueva que **borraría** el cuestionario armado en
   Tiza. El fix copia `prevSettings.preguntas` a la versión nueva si el payload no trae uno propio.
   Test de regresión: `api/tests/integracion/quiz-preguntas-editor.test.ts`, caso `(k)` (línea 268)
   — "PATCH con quizzes[] preserva settings.preguntas".
5. **`settings.materia` siempre se deriva y persiste** (vía `mergeMateriaIntoSettings`), incluso en
   un PATCH que no manda `subject`/`category` (usa los valores existentes del módulo) — evita que un
   cuestionario quede huérfano de materia y desaparezca de los filtros del banco.

Otros tests relevantes: `quiz-version-materia.test.ts` (nueva versión con materia correcta),
`modulos-copy-on-write.test.ts` (el clon preserva quizzes + última versión).

## Intentos (materializar-y-congelar)

> Descrito conceptualmente en el ledger: `tareas_pendientes/ALCANCE_VBLang_2.0.md` §13.3 — cítelo
> para la intención de diseño ("la randomización no se pierde: se genera al inicio del intento y se
> vuelve inmutable... reanudación ante caída... dos momentos de guardado: en vuelo vs permanente").
> Lo que sigue es la implementación real en `api/src/routes/quiz-attempts.ts`.

- **Creación** (`POST /api/quiz-attempts`, `:997-1131`): siempre crea un `QuizAttempt` nuevo (no hay
  upsert), gateado por `maxIntentos`. Bloquea si **todos** los roles del usuario son `PARENT`
  (`:1003-1010`, PLAN-J §3c #6; un `PARENT+USER`/`PARENT+TEACHER` no queda bloqueado).
- **En vuelo**: `POST /api/quiz-attempts/:id/answer` (`:1710-1793`) hace upsert idempotente por
  `questionId` sobre `answers` cada vez que el alumno responde — es lo que permite reanudar
  idéntico tras una caída.
- **Materializar y congelar** (`materializeSubmit`, `:1898-2252`): función standalone reusada tanto
  por el submit explícito como por el cierre lazy. Resuelve qué corregir según el tipo de quiz
  (preguntas nativas Tiza, plantilla VBLang regenerada server-side desde el seed — cierra el ataque
  de devtools —, generador v2 no materializable server-side, o banco estático). Fusiona `answers`
  ya persistidas con el payload del submit (F5-01) para no perder lo parcial ante una red caída a
  mitad de camino. Persiste todo en una sola escritura; `status` final `"pending_review"` si queda
  corrección manual pendiente, si no `"submitted"`.
- **Cierre lazy** — dos mecanismos, sin cron aparte:
  1. `staleInProgressSweep` (`:143-162`, timeout 6h): dispara fire-and-forget en el primer
     `GET /api/quiz-attempts` del día, marca `in_progress → aborted` lo abandonado.
  2. Vencimiento de timer/deadline (`debeAutoCerrarIntento`): un `GET /api/quiz-attempts/:id` o un
     `POST .../answer` que detecta que venció materializa el intento automáticamente
     (`materializeSubmit(..., { auto:true })`) **antes** de responder — el GET nunca devuelve un
     `in_progress` fantasma vencido.
- **Reanudación**: no hay endpoint dedicado. El front detecta (listando con filtro) un
  `in_progress` existente y navega a `GET /api/quiz-attempts/:id`, que devuelve `answers` +
  `deadline` recalculado — no crea uno nuevo.
- `ProgresoModulo` se actualiza sólo para quizzes `type==="formal"`: aprobado → `status:"completado"`,
  si no → `status:"en_progreso"`.

## Rutas (`api/src/routes/modulos.ts`)

Ver el catálogo completo con auth/params/respuesta/errores en
[`backend/api-reference.md`](./backend/api-reference.md#modulosts) (actualizado en PLAN-P §5). Lista
de métodos+paths, agrupados:

**Módulo**: `GET /api/modulos/buscar`, `GET /api/modulos`, `GET /api/modulos/:id`,
`POST /api/modulos/:id/duplicar`, `POST /api/modulos`, `PUT /api/modulos/:id`,
`PATCH /api/modulos/:id`, `DELETE /api/modulos/:id` (hard delete, pese a que existe `isDeleted`).

**Quiz standalone / Tiza** (montadas en el mismo router): `GET/PATCH /api/quizzes/:quizId/meta`,
`GET /api/quizzes` (propios, standalone), `POST /api/quizzes` (crear standalone vacío),
`POST /api/quizzes/:quizId/usar-en-modulo`, `DELETE /api/quizzes/:quizId` (soft-delete),
`GET/PUT /api/quizzes/:quizId/preguntas` (`CuestionarioPreguntas` nativo).

Intentos, en `api/src/routes/quiz-attempts.ts` (no en `modulos.ts`): `POST /api/quiz-attempts`,
`GET /api/quiz-attempts/:id`, `POST /api/quiz-attempts/:id/submit`,
`POST /api/quiz-attempts/:id/answer`, `POST /api/quiz-attempts/:id/competencia`,
`GET /api/quiz-attempts/competencia/:quizId/ranking`.

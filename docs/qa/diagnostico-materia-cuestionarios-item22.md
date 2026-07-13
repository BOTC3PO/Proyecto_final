# DIAG-ITEM-22 — Materias ↔ cuestionarios (PLAN-F §22)

**Fecha**: 2026-07-04 · **Resultado**: raíz encontrada dentro del time-box, filtro NO se eliminó.

## Contexto

PLAN-F §22 pedía un diagnóstico time-boxed del bug "un cuestionario no
aparece al filtrar el banco por su materia", con instrucción de **eliminar
el filtro** si la raíz no aparecía rápido (ya había habido varias rondas
previas: `bff8b6f4` "WO-BUG: persistir settings.materia en todos los paths
+ filtro tolerante", 2026-06-26).

## Qué YA estaba arreglado (WO-BUG, `bff8b6f4`)

- `mergeMateriaIntoSettings`/`deriveMateria` (`api/src/lib/quiz-materia.ts`)
  derivan `materia` de `modulo.subject || modulo.category` y la escriben en
  `QuizVersion.settings.materia`.
- Ya estaba enchufado en: `POST /api/modulos`, `PUT`, `PATCH` y
  `POST /:id/duplicar` (todos en `api/src/routes/modulos.ts`).
- El filtro del banco (`GET /api/quizzes/banco?materia=`) y el front
  (`BancoCuestionariosMulti.tsx`) ya tratan "sin materia" como bucket
  propio (`SIN_MATERIA`) en vez de hacer desaparecer el ítem.
- Cubierto por `api/tests/integracion/quiz-version-materia.test.ts`
  (m1-m11), todos en verde.

## LA raíz que faltaba (encontrada en esta ronda)

`POST /api/quizzes/:quizId/usar-en-modulo` (PLAN-CORRECCIONES C2, "quiz
suelto" → clonar a un módulo real) es una vía de creación de `QuizVersion`
**más nueva que el fix WO-BUG** y nunca recibió el mismo tratamiento:

```ts
// api/src/routes/modulos.ts (ANTES del fix de esta ronda)
await prisma.quizVersion.create({
  data: {
    ...
    settings: loaded.version?.settings ?? null, // copia tal cual
    ...
  },
});
```

Un "quiz suelto" (creado desde `/plantillas/nueva` sin módulo) nunca tiene
`settings.materia` (no hay módulo del que derivarla). Al clonarlo a un
módulo real vía `usar-en-modulo`, el clon heredaba ese `settings` vacío
**sin volver a derivar la materia del módulo destino** — aunque el módulo
destino sí tuviera `subject` seteado. Resultado: el clon quedaba invisible
al filtrar el banco por la materia de SU PROPIO módulo.

Confirmado en la base de datos de desarrollo real (no sólo en teoría):
2 quizzes creados el 2026-07-03 vía esta ruta (`TEST-C2 modulo destino`,
`TEST-PICKER modulo`) tenían `settings` = `{"type":"practica","visibility":"publico"}`
**sin `materia`**, pese a que sus módulos ya tenían `subject: "matemáticas"`.

## Fix

- `api/src/routes/modulos.ts` (`usar-en-modulo`): ahora llama
  `mergeMateriaIntoSettings(loaded.version?.settings, { subject: targetModulo.subject, category: targetModulo.category })`
  antes de persistir — mismo patrón que ya usaba `duplicar`.
- Test de regresión: `api/tests/integracion/plan-corrections-c2-quiz-standalone.test.ts`,
  caso `(i)`.
- Bug lateral encontrado al verificar contra la DB real: `scripts/backfill_quiz_materia.ts`
  no soportaba `Quiz.moduleId = null` (quizzes sueltos, columna nullable
  desde PLAN-CORRECCIONES C2) — `prisma.modulo.findFirst({ where: { id: null } })`
  tira `PrismaClientValidationError` y aborta el backfill completo apenas
  encuentra uno. Se agregó el guard `!quiz.moduleId` (mismo tratamiento que
  "quiz sin módulo destino": se cuenta como `sin_modulo_materia`, no se
  escribe nada).
- Backfill corrido contra la DB de dev real: `revisados=9 actualizados=5
  omitidos=0 sin_modulo_materia=4` (los 2 quizzes reales de arriba quedaron
  con `materia` correcta; reconfirmado idempotente en una segunda corrida:
  `actualizados=0`).

## Por qué no se vio en las rondas anteriores

`bff8b6f4` cubrió TODOS los paths de creación que existían en ese momento
(POST/PUT/PATCH/duplicar). `usar-en-modulo` se agregó recién con
PLAN-CORRECCIONES C2 (posterior), así que ninguna ronda de "arreglar el
filtro de materia" anterior pudo haberlo tocado — es un gap de cobertura
por orden cronológico, no un fix fallido.

## Qué NO se tocó

- No se eliminó el filtro (la raíz apareció dentro del time-box).
- No se tocó `mergeMateriaIntoSettings`/`deriveMateria` ni el filtro del
  banco — ya estaban correctos.

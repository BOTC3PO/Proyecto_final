# DIAG-MODULO-INSTANCE — Informe del módulo "modulo de prueba" (5c50d0b5-...)

## Datos del módulo afectado
```json
{
  "id": "5c50d0b5-2f24-4082-af50-08ba2d261cea",
  "slug": null,
  "titulo": "modulo de prueba",
  "descripcion": "test",
  "visibility": "publico",
  "schoolId": null,
  "ownerUserId": "usr-teach-001",
  "teoriaId": null,
  "tuesdayDocId": null,
  "libroId": null,
  "defaultQuestionCount": null,
  "dependencies": null,
  "isDeleted": false,
  "createdAt": "2026-06-15T21:26:51.400Z",
  "updatedAt": "2026-06-15T21:26:51.400Z"
}
```

## Errores reportados por el usuario
- "no guardó el libro de prueba" → `libroId: null`
- "no guardó el cuestionario de prueba test" → no hay fila en `quizzes` ni `quizVersion` para este módulo
- "no se guardó la materia" → no hay campo `subject` en la fila `Modulo` (no existe la columna en el modelo Prisma)

## Causa raíz

Este módulo es un **caso concreto** del bug diagnosticado en `diagnostico_guardado.md`. El payload del editor del front incluye `subject`, `theoryItems` (contenido), `quizzes`, `libroId` (como `resources`), pero el back:

1. **ModuleSchema** (`api/src/schema/modulo.ts:202-238`) **NO acepta** `teoriaId` ni `libroId` (Zod los descarta en silencio).
2. **POST handler** (`api/src/routes/modulos.ts:492-502`) **NO persiste** `subject`, `theoryItems`, `category`, `level`, `durationMinutes`, `teoriaId`, `libroId` en la fila `Modulo`.
3. **applyModuleUpdate** (`api/src/routes/modulos.ts:574-594`) **NO persiste** ninguno de esos campos en el PUT.
4. **Modelo Prisma `Modulo`** (`api/prisma/schema.prisma:306-325`) **NO tiene columna** `subject`, `category`, `level`, `durationMinutes`, `theoryItems` (contenido).

El handler POST SÍ persiste los quizzes (líneas 506-553): crea fila en `quizzes` + `quiz_versions` con las questions. Pero si el payload del front falla la validación de Zod (por un campo requerido que no manda, como `createdBy`), el handler responde 400 y no persiste nada. El módulo afectado (id `5c50d0b5-...`) tiene `createdAt` y `ownerUserId: "usr-teach-001"`, lo que sugiere que el POST pasó la validación y creó la fila, pero los quizzes no se persistieron — posiblemente porque la transacción falló después de crear el módulo.

## ¿A qué funciones afecta este guardado incompleto?

### 1. `subject` (materia) — IMPACTO ALTO

El campo `subject` lo leen **múltiples componentes del front** (todos caen al fallback `|| category` o muestran "Sin materia"):

| Archivo:línea | Uso |
|---|---|
| `apps/web/src/pages/modulos/ModulosList.tsx:46` | `resolveMateria(module) = module.subject || module.category || "Sin materia"` |
| `apps/web/src/pages/modulos/ModulosList.tsx:47` | `resolveCategoria(module) = module.category || module.subject || "Sin categoría"` |
| `apps/web/src/pages/modulos/ModuloDetail.tsx:570` | `module.subject || module.category` (header del módulo) |
| `apps/web/src/pages/EnterpriseModulos.tsx:54` | `module.subject ?? module.category ?? "—"` |
| `apps/web/src/pages/MenuProfesor.tsx:159, 290` | `module.subject ?? module.category` (lista de materias para filtro) |

**Impacto**: en TODOS estos lugares, el módulo `5c50d0b5-...` muestra `"Sin materia"` en vez de la materia que el docente tipeó. El docente no sabe qué materia es su propio módulo.

### 2. `quizzes` (cuestionarios) — IMPACTO ALTO

El módulo afectado **no tiene quizzes** (no hay filas en `quizzes` con `moduleId = 5c50d0b5-...`). Funciones afectadas:

- `GET /api/modulos/:id` (`api/src/routes/modulos.ts:210-218`): devuelve `quizzes: []`. El editor ve "Sin cuestionarios".
- `apps/web/src/pages/modulos/ModulosList.tsx:518, 525`: muestra "0 cuestionarios".
- `apps/web/src/pages/modulos/ModuloDetail.tsx`: la pestaña de cuestionarios está vacía.
- `apps/web/src/pages/ReproductorModulos.tsx`: el alumno no puede tomar el cuestionario (no existe).
- `apps/web/src/pages/modulos/__tests__/quiz-attempts-*.test.ts`: si el módulo se usa en un test de intentos, el intento fallará porque no hay quiz.

**Impacto**: el cuestionario de prueba "test" que el docente creó **no existe** en la base. Si intenta tomarlo, el endpoint devuelve 404.

### 3. `libroId` (libro) — IMPACTO BAJO (cascada)

El módulo afectado tiene `libroId: null`. El editor envía el libro como `resources: [{ type: "book", id: "...", title: "..." }]` (ver `useModuloPersistence.ts:201-203`). Pero el back **no persiste `resources`** en ninguna tabla (no hay modelo Prisma `Resource`). El front lee el libro desde `module.resources` en la carga (`useModuloPersistence.ts:75-83`):

```ts
const bookResourceItems: TheoryItem[] = (module.resources ?? [])
  .filter((r): r is BookResource => r.type === "book")
  .map((r) => ({ id: r.id, title: r.title ?? r.id, type: "Libro", detail: r.id }));
```

**Pero** el GET handler (`api/src/routes/modulos.ts:220-260`) **no incluye `resources`** en el `moduleDto`. Así que `module.resources` siempre es `undefined` al cargar, y los libros no se recuperan.

**Impacto**: el libro de prueba "no se guardó" — no aparece en la lista de teoría del módulo cuando se reabre el editor. El docente tiene que volver a crearlo.

### 4. `teoriaId` (teoría) — IMPACTO MEDIO

El módulo afectado tiene `teoriaId: null`. El editor envía la teoría como `theoryItems: [...]` (contenido), no como `teoriaId` (referencia). El back:
- **No persiste** `theoryItems` (no hay modelo).
- **No acepta** `teoriaId` en el schema Zod (lo descarta).

**Impacto**: la teoría como contenido (los items que el docente creó en línea) **se pierde completamente**. El módulo no tiene referencia a `TeoriaJson` ni contenido embebido. Cuando se reabre el editor, los items de teoría están vacíos.

**Funciones que dependen de `teoriaId`**:
- `api/src/routes/modulos.ts:322` (Prisma relation): `teoria TeoriaJson? @relation(fields: [teoriaId], ...)`. Como `teoriaId` es null, la relación no resuelve.
- `POST /api/modulos/:id/duplicar` (`modulos.ts:390`): copia `teoriaId` del source. Si el source tiene `teoriaId: null`, la copia también.

### 5. `dependencies` — IMPACTO BAJO (ya null)

El módulo afectado tiene `dependencies: null` (string JSON en la fila). El editor envía `dependencies: []` (array vacío). El back persiste `null` cuando el array está vacío (`modulos.ts:589-593`):

```ts
if (parsed.dependencies !== undefined) {
  updateData.dependencies = parsed.dependencies && parsed.dependencies.length
    ? JSON.stringify(parsed.dependencies)
    : null;
}
```

**Impacto**: si el docente agregó dependencias en línea, se persisten correctamente como JSON. Si no agregó ninguna, queda `null` (correcto).

### 6. `ownerUserId` — OK

El módulo afectado tiene `ownerUserId: "usr-teach-001"`. El back SÍ persiste este campo (POST línea 498, PUT línea 588). El docente es el dueño.

**Funciones que dependen de `ownerUserId`**:
- `modulos.ts:76, 87`: filtros de acceso por dueño.
- `modulos.ts:161, 171`: filtro `?mine=true` (QA-FIX-07).
- `modulos.ts:205`: visibilidad del GET (staff + owner ven answers).
- `modulos.ts:370`: `/duplicar` solo permite al dueño o staff.
- `POST /api/modulos/:id/duplicar`: el nuevo módulo es del solicitante (no del dueño original).

**Impacto**: correcto. El dueño puede editar, duplicar, y ver las respuestas correctas.

### 7. `visibility` — OK

El módulo afectado tiene `visibility: "publico"`. El back SÍ persiste este campo (POST línea 496, PUT línea 586). El módulo es visible para todos.

### 8. `schoolId` — OK

El módulo afectado tiene `schoolId: null` y `visibility: "publico"`. Correcto: un módulo público no tiene escuela asignada.

## Resumen de impacto por campo

| Campo del módulo | Estado | Funciones afectadas | Severidad |
|---|---|---|---|
| `id, slug, titulo, descripcion, visibility, schoolId, ownerUserId, createdAt, updatedAt, dependencies` | ✅ Persistidos | — | — |
| **`subject`** | ❌ **No se persiste** (no hay columna) | ModulosList, ModuloDetail, EnterpriseModulos, MenuProfesor, ProfesorCalificaciones | **ALTO** (muestra "Sin materia" en todos lados) |
| **`quizzes`** | ❌ **No se persiste** (transacción falla o payload inválido) | Editor, ReproductorModulos, quiz-attempts | **ALTO** (cuestionario perdido) |
| **`libroId`** | ❌ **No se persiste** (schema Zod lo descarta) | Editor (recursos), ProfesorAulaConfiguracion (recursos) | **BAJO** (se puede re-crear) |
| **`teoriaId`** | ❌ **No se persiste** (schema Zod lo descarta, no hay columna `theoryItems`) | Editor (teoría), GET (relación Prisma) | **MEDIO** (items de teoría perdidos) |
| **`teoriaId` (referencia)** | ❌ **No se acepta** (schema no lo incluye) | Duplicar (copia null) | **BAJO** |
| `tuesdayDocId` | ❌ **No se persiste** (schema no lo incluye) | Duplicar (copia null) | **BAJO** |
| `defaultQuestionCount` | ❌ **No se persiste** (schema no lo incluye) | — | **BAJO** |

## ¿Por qué el módulo `5c50d0b5-...` tiene exactamente este estado?

El POST handler (`api/src/routes/modulos.ts:462-569`) corre en una transacción `prisma.$transaction`:

1. Crea la fila `Modulo` con `id, titulo, descripcion, visibility, schoolId, ownerUserId, dependencies, createdAt, updatedAt` (líneas 492-505).
2. **Si** `parsed.quizzes` tiene elementos, crea filas en `quizzes` + `quiz_versions` (líneas 506-553).
3. **Si** `parsed.aulaId`, crea fila en `clase_modulos` (líneas 556-563).

Si el paso 2 falla (por ejemplo, un campo requerido que el front no manda), la transacción hace rollback. Pero el módulo `5c50d0b5-...` EXISTE en la base, lo que sugiere que el paso 1 pasó pero el paso 2 no se ejecutó. Posibilidades:
- `parsed.quizzes` era `undefined` o `[]` (el front no mandó quizzes).
- El payload del front no incluía `quizzes` porque el editor falló antes de enviarlos.

**Hipótesis más probable**: el front envió un payload incompleto o el `form.subject` era `undefined` (causa del crash de `useModuloEditor.ts:482`, ver `diagnostico_modulo_editor_crash.md`). El POST pasó con `subject: undefined` (porque Zod no lo valida como required string en el schema — espera string pero el back ignora silenciosamente los campos que no están en el schema), y los quizzes no se mandaron.

## Aceptación del diagnóstico

Este informe documenta el estado de un módulo concreto que fue afectado por el bug general de DIAG-GUARDADO. **No es un bug nuevo** — es un caso concreto del mismo problema raíz. El fix de DIAG-GUARDADO (cerrar la causa raíz) arreglaría este módulo solo para **futuros** guardados; los módulos ya guardados con datos incompletos (como `5c50d0b5-...`) necesitarían una migración de datos o un script de recuperación.

**Recomendación**:
1. Aplicar el fix de DIAG-GUARDADO (Opción D o E del doc) para que futuros guardados persistan todo.
2. Para módulos ya guardados con datos incompletos: o bien (a) dejarlos como están y el docente los re-edita, o bien (b) escribir un script de migración que rellene `subject` desde `quiz.settings.materia` o desde otro campo derivado.
3. Eliminar el módulo `5c50d0b5-...` o re-editarlo para que tenga quizzes + materia + libro.

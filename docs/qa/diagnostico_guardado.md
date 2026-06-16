# DIAG-GUARDADO — El módulo no persiste teoría/quiz/materia

## Síntoma
El módulo de prueba se guardó con `teoriaId: null`, sin quizzes, sin materia. El GET arma quizzes/teoría correctamente — el problema es que no hay nada que devolver porque no se persistió.

## Causa raíz (archivo:línea)

### 1. El schema del BACK descarta `teoriaId` y `libroId` en silencio

`api/src/schema/modulo.ts:202-238` — `ModuleSchema`:
```ts
export const ModuleSchema = z.object({
  id: z.string().min(1),
  aulaId: z.string().min(1).optional(),
  schoolId: z.string().min(1).optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  subject: z.string().min(1),       // ← materia
  category: z.string().min(1),
  level: z.string().min(1),
  durationMinutes: z.number().int().positive(),
  recommendedCourse: z.string().min(1).optional(),
  visibility: ModuleVisibilitySchema,
  status: ModuleStatusSchema.default("ACTIVE"),
  visibilityConfig: ModuleVisibilityConfigSchema.nullable().optional(),
  dependencies: z.array(ModuleDependencySchema),
  scoringConfig: ModuleScoringConfigSchema.optional(),
  rewardsConfig: ModuleRewardsConfigSchema.optional(),
  generatorRef: z.object({...}).nullable().optional(),
  theoryItems: z.array(ModuleTheoryItemSchema).optional(),  // ← contenido
  quizzes: z.array(ModuleQuizSchema).optional(),             // ← contenido
  resources: z.array(ModuleResourceSchema).optional(),
  levels: z.array(ModuleLevelSchema).optional(),
  levelOrder: z.array(z.string().min(1)).optional(),
  bloqueId: z.string().min(1).optional(),
  createdBy: z.string().min(1),
  createdByRole: z.enum(["admin", "docente"]).optional(),
  authorName: z.string().min(1).optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
  // NO tiene teoriaId, NO tiene libroId
});
```

El modelo Prisma `Modulo` (`api/prisma/schema.prisma:306-325`) SÍ tiene:
- `teoriaId String? @map("teoria_id")` — referencia a `TeoriaJson`
- `libroId String? @map("libro_id")` — referencia a un libro

Pero el schema Zod los descarta. Si el front manda `teoriaId` o `libroId`, Zod los ignora silenciosamente (por default, Zod solo parsea los campos del schema, ignora los demás).

### 2. El POST handler NUNCA persiste `teoriaId` ni `libroId`

`api/src/routes/modulos.ts:462-569` — handler de POST:
```ts
const moduloData = {
  id: parsed.id,
  titulo: parsed.title,
  descripcion: parsed.description,
  visibility: parsed.visibility,
  schoolId: parsed.schoolId ?? null,
  ownerUserId: parsed.createdBy,
  dependencies: parsed.dependencies.length ? JSON.stringify(parsed.dependencies) : null,
  createdAt: parsed.createdAt,
  updatedAt: parsed.updatedAt,
  // NO incluye teoriaId, NO incluye libroId
};
let result: { id: string };
await prisma.$transaction(async (tx) => {
  result = await tx.modulo.create({ data: moduloData });
  // ...
});
```

### 3. El PUT/PATCH handler NUNCA persiste `teoriaId` ni `libroId`

`api/src/routes/modulos.ts:574-594` — `applyModuleUpdate`:
```ts
const updateData: Record<string, unknown> = { updatedAt: now };
if (parsed.title !== undefined) updateData.titulo = parsed.title;
if (parsed.description !== undefined) updateData.descripcion = parsed.description;
if (parsed.slug !== undefined) updateData.slug = parsed.slug;
if (parsed.visibility !== undefined) updateData.visibility = parsed.visibility;
if (parsed.schoolId !== undefined) updateData.schoolId = parsed.schoolId ?? null;
if (parsed.createdBy !== undefined) updateData.ownerUserId = parsed.createdBy;
if (parsed.dependencies !== undefined) {
  updateData.dependencies = parsed.dependencies && parsed.dependencies.length
    ? JSON.stringify(parsed.dependencies)
    : null;
}
// NO incluye teoriaId, NO incluye libroId
await tx.modulo.update({ where: { id: moduleId }, data: updateData });
```

### 4. La materia (`subject`) SÍ está en el schema, pero NUNCA se persiste en la fila `Modulo`

`api/src/routes/modulos.ts:492-502` — POST:
```ts
const moduloData = {
  id: parsed.id,
  titulo: parsed.title,
  descripcion: parsed.description,
  visibility: parsed.visibility,
  schoolId: parsed.schoolId ?? null,
  ownerUserId: parsed.createdBy,
  dependencies: parsed.dependencies.length ? JSON.stringify(parsed.dependencies) : null,
  createdAt: parsed.createdAt,
  updatedAt: parsed.updatedAt,
  // NO incluye parsed.subject
};
```

`applyModuleUpdate` (líneas 582-594) tampoco persiste `subject`.

La materia SÍ se persiste en `quiz.settings.materia` (línea 533), pero eso es por-quiz, no a nivel módulo. Si el módulo no tiene quizzes, la materia se pierde.

### 5. La teoría (`theoryItems`) SÍ está en el schema, pero NUNCA se persiste

El schema acepta `theoryItems: z.array(ModuleTheoryItemSchema).optional()` (línea 227), pero:
- POST no incluye `theoryItems` en `moduloData` (líneas 492-502).
- PUT no incluye `theoryItems` en `updateData` (líneas 582-594).

El modelo Prisma NO tiene un campo `theoryItems` (es una columna JSON o tabla aparte que no existe). La teoría se persiste como referencia (`teoriaId` → tabla `TeoriaJson`), NO como contenido embebido.

### 6. El modelo de "teoría como contenido" vs "teoría como referencia"

El FRONT (`apps/web/src/pages/modulos/useModuloPersistence.ts:216-221`) envía la teoría como **contenido**:
```ts
theoryItems: theoryItems.map((item) => ({
  id: item.id,
  title: item.title,
  type: item.type,
  detail: item.detail,
})),
```

El BACK espera la teoría como **referencia** (`teoriaId` → tabla `TeoriaJson`). El modelo Prisma `Modulo` tiene `teoriaId String?` que apunta a `TeoriaJson.id`.

El editor del front (líneas 1059-1085 de `ModuloEditor.tsx`) permite al usuario crear items de teoría EN LÍNEA (con título, tipo, detail). Estos items NO se guardan en ningún modelo del back — el back solo soporta `teoriaId` (referencia a un item pre-existente de `TeoriaJson`).

## Payload real del editor (lo que envía)

`apps/web/src/pages/modulos/useModuloPersistence.ts:205-246`:
```ts
const basePayload = {
  title: form.title,
  description: form.description,
  subject: form.subject,                    // ← materia (en schema, no en moduloData)
  category: form.category,
  level: form.level,
  durationMinutes: Number(form.durationMinutes) || 1,
  visibility: form.visibility,
  schoolId: form.visibility === "escuela" ? form.visibilitySchoolId || undefined : undefined,
  dependencies: form.dependencies,
  theoryItems: theoryItems.map((item) => ({ // ← contenido (en schema, no en moduloData)
    id: item.id, title: item.title, type: item.type, detail: item.detail,
  })),
  resources: bookResources,                 // ← libros como resources (no libroId)
  quizzes: quizzes.map((quiz) => ({...})), // ← quizzes (SÍ se persisten)
  updatedAt: new Date().toISOString(),
};
```

## Diff contra ModuleSchema

| Campo del payload | En ModuleSchema | En moduloData/updateData | Resultado |
|---|---|---|---|
| `title` | ✓ | ✓ (titulo) | ✅ Persistido |
| `description` | ✓ | ✓ (descripcion) | ✅ Persistido |
| `subject` | ✓ | ✗ | ❌ **Perdido** (materia no se persiste en Modulo) |
| `category` | ✓ | ✗ | ❌ Perdido (el modelo no tiene columna) |
| `level` | ✓ | ✗ | ❌ Perdido (el modelo no tiene columna) |
| `durationMinutes` | ✓ | ✗ | ❌ Perdido (el modelo no tiene columna) |
| `visibility` | ✓ | ✓ | ✅ Persistido |
| `schoolId` | ✓ | ✓ | ✅ Persistido |
| `dependencies` | ✓ | ✓ | ✅ Persistido |
| `theoryItems` | ✓ | ✗ | ❌ **Perdido** (teoría como contenido, no como referencia) |
| `quizzes` | ✓ | ✓ (vía tx.quiz.create) | ✅ Persistido (vía tabla Quiz) |
| `resources` | ✓ | ✗ | ❌ Perdido (no hay modelo Resource en Prisma) |
| `teoriaId` | ✗ | ✗ | ❌ **Descartado por Zod** (no está en schema) |
| `libroId` | ✗ | ✗ | ❌ **Descartado por Zod** (no está en schema) |

## Por qué "se guardó con teoriaId: null, sin quizzes, sin materia"

1. **Materia**: el payload SÍ incluye `subject`, Zod lo acepta, pero `applyModuleUpdate` NO lo escribe en `tx.modulo.update`. La materia solo se persiste en `quiz.settings.materia` (por-quiz). Si el módulo no tiene quizzes, la materia se pierde.

2. **Quizzes**: el payload SÍ incluye `quizzes`, Zod los acepta, y el handler SÍ los persiste (vía `tx.quiz.create` + `tx.quizVersion.create` con questions). **PERO** solo se persisten si el handler se ejecuta correctamente. Si falla la validación de Zod (por un campo requerido que el front no manda, como `createdBy`), el handler responde 400 y no persiste nada. **El síntoma "sin quizzes" sugiere que el POST falló silenciosamente** (o que la respuesta 400 se ignoró en el front).

3. **Teoría**: el payload SÍ incluye `theoryItems`, Zod los acepta, pero NUNCA se persisten (ni en POST ni en PUT). La teoría como contenido no tiene modelo en Prisma. La teoría como referencia (`teoriaId`) sí tiene modelo, pero el schema Zod la descarta.

4. **`teoriaId: null` en el GET**: `api/src/routes/modulos.ts:233` devuelve `teoriaId: item.teoriaId ?? undefined`. Como nunca se persistió `teoriaId` (porque el schema lo descarta y el handler no lo escribe), siempre es `null`/`undefined`.

## ¿Por qué el GET "arma quizzes/teoría correctamente"?

El GET (`api/src/routes/modulos.ts:182-260`) hace esto:
- Devuelve `quizzes` con sus `quizVersion` (líneas 210-218, 234-260) — SI se persistieron.
- Devuelve `teoriaId: item.teoriaId ?? undefined` (línea 233) — siempre null porque no se persiste.
- Devuelve `module.subject ?? ""` (línea 225) — el back devuelve `descripcion` como `description`, no `subject`. **La materia NUNCA está en el GET**.

Entonces el GET no "arma" nada — devuelve lo que se persistió. Si no se persistió nada, devuelve vacío.

## Propuesta de fix (SIN aplicar)

### Opción A: el back acepta `teoriaId` y `libroId` (alinear con el modelo Prisma)

1. Agregar `teoriaId: z.string().min(1).optional()` y `libroId: z.string().min(1).optional()` a `ModuleSchema` (después de la línea 232, junto con `bloqueId`).
2. En `moduloData` del POST (línea 492), agregar:
   ```ts
   teoriaId: parsed.teoriaId ?? null,
   libroId: parsed.libroId ?? null,
   ```
3. En `updateData` de `applyModuleUpdate` (línea 582), agregar:
   ```ts
   if (parsed.teoriaId !== undefined) updateData.teoriaId = parsed.teoriaId ?? null;
   if (parsed.libroId !== undefined) updateData.libroId = parsed.libroId ?? null;
   ```
4. **Pero el front no envía `teoriaId`/`libroId`** — envía `theoryItems` (contenido). Esta opción no cierra el gap sin cambios adicionales en el front.

### Opción B: el front envía `teoriaId`/`libroId` (referencias) en vez de `theoryItems` (contenido)

1. Cambiar `useModuloPersistence.ts:216-221` para que el payload use `teoriaId: theoryItems[0]?.id` (asumiendo que cada item de teoría es un `TeoriaJson` pre-existente).
2. Cambiar el editor (`ModuloEditor.tsx:1059-1085`) para que NO permita crear items de teoría en línea, sino seleccionar de una lista de `TeoriaJson` pre-existentes.
3. Esta opción requiere un cambio grande en el editor y asume que `TeoriaJson` ya tiene los items.

### Opción C: el back persiste `theoryItems` como contenido (nuevo modelo)

1. Crear un nuevo modelo Prisma `TheoryItem` con FK a `Modulo`.
2. Agregar `theoryItems: z.array(...)` a `ModuleSchema` (ya está, pero no se persiste).
3. En POST/PUT, después de crear/actualizar el módulo, crear/actualizar los `TheoryItem` relacionados.
4. **Es la opción más invasiva** — requiere migración de Prisma y cambios en GET.

### Opción D (mínima): el back persiste `subject` (materia) en la fila `Modulo` + aceptar `theoryItems` como JSON en una columna nueva

1. Agregar columna `subject String?` al modelo Prisma `Modulo`.
2. En `applyModuleUpdate`, persistir `subject`.
3. Agregar columna `theory_items String?` (JSON serializado) al modelo Prisma `Modulo`.
4. En `applyModuleUpdate`, persistir `theoryItems` como JSON.
5. En GET, devolver `subject` y deserializar `theory_items`.
6. **Es la opción más pragmática** — cierra el gap sin cambiar el modelo de datos fundamental (teoría sigue siendo contenido embebido, no referencia).

### Opción E (recomendada para cerrar el gap inmediato): aceptar el payload tal como está y persistir todo

1. Agregar `subject`, `category`, `level`, `durationMinutes` a `moduloData` del POST y `updateData` de `applyModuleUpdate`. Si el modelo Prisma no tiene esas columnas, agregarlas (migración).
2. Agregar `theoryItems` como JSON serializado a `moduloData`/`updateData`. Si el modelo no tiene la columna, agregarla.
3. NO cambiar el front — el payload actual es válido.
4. **Es la opción que cierra el gap con el menor cambio funcional**, pero requiere migración de Prisma.

## Tests que se necesitarían (después del fix)

- POST con `subject: "Matemáticas"` → la fila `Modulo` tiene `subject: "Matemáticas"`.
- POST con `theoryItems: [{...}]` → los items se persisten (en JSON o tabla aparte).
- POST con `teoriaId: "abc"` → la fila `Modulo` tiene `teoriaId: "abc"`.
- POST con `libroId: "xyz"` → la fila `Modulo` tiene `libroId: "xyz"`.
- GET devuelve `subject`, `theoryItems` (o `teoriaId`), `quizzes`, `libroId`.

## Aceptación del diagnóstico

Este diagnóstico permite escribir el fix sin volver a reproducir. La causa está identificada (schema Zod descarta `teoriaId`/`libroId`, handlers no persisten `subject`/`theoryItems`/`category`/`level`/`durationMinutes`).

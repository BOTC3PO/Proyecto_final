# QA-FIX-07 — `GET /api/modulos?mine=true` filtra por ownerUserId (Q4)

## Síntoma (Q4)

`MenuProfesor` (apps/web/src/pages/MenuProfesor.tsx:150) llama:

```
GET /api/modulos?mine=true
```

esperando "mis módulos" para mostrar el panel **"Módulos activos"**
(línea 599-630 de ese mismo archivo). Pero el handler en
`api/src/routes/modulos.ts:114-151` **ignoraba el param `mine`**
(leía solo `limit`, `offset`, `aulaId`) y devolvía TODOS los módulos
del sistema. Resultado: el panel mostraba módulos de otros profesores.

## Investigación

### Rutas afectadas

| Ruta | Lee `mine`? | Otros params | Línea |
|---|---|---|---|
| `GET /api/modulos` | ❌ (antes del fix) | `limit, offset, aulaId` | modulos.ts:114 |
| `GET /api/modulos/buscar` | ✅ | `limit, offset, query, createdBy, schoolId, visibility` | modulos.ts:53 |

### Consumidores de `/api/modulos` (sin `/buscar`)

```
apps/web/src/pages/MenuProfesor.tsx:150          ?mine=true  ← bug
apps/web/src/pages/aula.tsx:199                  ?aulaId=…
apps/web/src/pages/ProfesorEstadisticas.tsx:66  ?aulaId=…
apps/web/src/pages/modulos/useModuloEditor.ts:429 ?q=…&pageSize=8
docs/frontend/overview.md:352                    ?visibility=escuela…
```

Solo `MenuProfesor` pasa `mine`. Los otros 4 no se ven afectados.

### Shape de respuesta

Ambos endpoints (`/api/modulos` y `/buscar`) devuelven **el mismo shape**:

```json
{ "items": [ { /* modulo crudo de Prisma: id, titulo, descripcion,
  visibility, schoolId, ownerUserId, dependencies, createdAt,
  updatedAt, ... */, "status": {} } ], "limit": 20, "offset": 0 }
```

Ambos hacen `findMany` crudo (sin `quizzes` anidados) y aplican
`withDefaultStatus`. Idénticos. **No hay diferencia de shape que
justifique cambiar al front.**

## Decisión: Opción B (back-end respeta `mine`)

### Por qué B, no A

- **Semánticamente correcto:** `/api/modulos?mine=true` es el path REST
  canónico (filtro sobre el recurso listado).
- **Cero superficie:** los otros 4 consumidores no pasan `mine`. No
  se rompen.
- **Consistencia interna:** ya hay un filtro `aulaId` en este mismo
  handler (línea 117). Agregar `mine` es la misma operación.
- **`/buscar` es "búsqueda con query"**, no "listado". El panel
  "Módulos activos" no es una búsqueda, es un listado de mis
  módulos. Usar `/buscar` acá sería semanticamente forzado.
- **Mismo shape de respuesta** → no hay que cambiar el mapeo del
  front.
- **No abrimos un endpoint nuevo** ni movemos consumidores.

### Por qué NO extraer un helper compartido con `/buscar`

`/buscar` tiene su propia lógica de filtros: combina `query`
(búsqueda full-text en `titulo`), `createdBy` (modo `mine` o
explícito), y un sistema de `visibility` (CSV `publico/escuela/
privado`) con `OR` conditions y `AND`-clause raíz.

`/api/modulos` solo filtra por `aulaId` y `mine`. La intersección
entre ambos es **mínima** (un `where.ownerUserId = X`).

Extraer un helper para 1 línea de filtrado agregaría acoplamiento
entre dos endpoints con responsabilidades distintas. **Es preferible
duplicar 1 línea** (literalmente `where: { ownerUserId: requesterId }`)
que abstraer.

## Fix

`api/src/routes/modulos.ts:114-151` → ahora:

1. Lee `mine = req.query.mine === "true"`.
2. Si `mine`, exige `requireUser` (mismo patrón que `/buscar`
   línea 53-60: `await new Promise<void>((resolve) => {
   requireUser(req, res, () => resolve()); });` con check
   `res.headersSent` para abortar si el middleware ya respondió
   401/403).
3. Extrae `requesterId` de `req.user._id` (string, vía
   `toObjectId` en `user-auth.ts:67`).
4. Aplica `where: { ownerUserId: requesterId }` (AND) tanto en la
   rama `aulaId` como en la rama "listado general".

```ts
const mine = req.query.mine === "true";

if (mine) {
  await new Promise<void>((resolve) => {
    requireUser(req, res, () => resolve());
  });
  if (res.headersSent) return;
}

const requesterId =
  mine && req.user
    ? (typeof req.user._id === "string"
        ? req.user._id
        : (req.user._id as { toString?: () => string })?.toString?.() ?? null)
    : null;

// rama aulaId:
where: {
  id: { in: moduloIds },
  ...(mine && requesterId ? { ownerUserId: requesterId } : {}),
}

// rama sin aulaId:
where: mine && requesterId ? { ownerUserId: requesterId } : {},
```

## Tests

Archivo nuevo: `api/tests/integracion/modulos-mine-filter.test.ts`
(6 tests, agregado a `pnpm test:api`):

1. **TEACHER con `?mine=true` solo ve sus módulos** (no los ajenos,
   no los públicos sin owner). Candado Q4.
2. **TEACHER_B con `?mine=true` ve los suyos** (saniiza: el test
   no asume el id, sólo verifica que la respuesta NO contiene los
   ajenos).
3. **`?mine=true` sin token → 401.** Candado: si alguien rompe el
   `requireUser` condicional, el filtro deja de ser seguro.
4. **`?mine=true&aulaId=X` → intersección** (míos ∩ del aula).
   TEACHER_A tiene MOD_A1 y MOD_A2; AULA_X tiene MOD_A1 y MOD_B1.
   Resultado esperado: {MOD_A1} (MOD_A2 no está en el aula, MOD_B1
   no es mío).
5. **Regresión:** `?aulaId=X` sin mine sigue devolviendo TODOS los
   del aula (sin auth, sin filtro de owner). Modo lectura.
6. **Regresión:** sin query params sigue siendo público y devuelve
   TODOS los módulos del sistema. Modo lectura. Confirma que el
   fix no rompe el comportamiento preexistente.

## Aceptación

- `pnpm test:api`: 280/280 (de 264 → +6).
- `pnpm test:web`: 761/761 (sin cambios en el front).
- 0 regresiones en los 4 consumidores que no pasan `mine`.

## Bug colateral observado (NO incluido en este fix)

El mapeo de `MenuProfesor.tsx:153-167` lee del back campos en
camelCase (`module.title, module.description, module.level,
module.durationMinutes, module.subject, module.category,
module.createdBy, module.createdByRole, module.authorName`) que
**el back NO devuelve**: el back devuelve `titulo, descripcion,
ownerUserId` (snake_case de Prisma). Por eso el panel mostraba
`título: undefined` incluso con `mine=true` funcionando.

Esto explica por qué el usuario veía "módulos ajenos con títulos
vacíos" en el panel: el filtro era el problema, pero el mapeo de
forma preexistente es otro bug. **Q4 se cierra con este fix**;
el mapeo de shape es una issue aparte (un DTO propio para el
handler `/api/modulos` análogo al de `/api/modulos/:id` líneas
191-261). No se aborda acá para mantener la superficie mínima.

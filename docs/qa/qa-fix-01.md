# QA-FIX-01 — Datasets públicos no visibles para no-dueños (Q5)

**Tarea**: QA-FIX-01
**Fecha**: 2026-06-15
**Resultado**: NO hay bug que arreglar. El código actual ya cumple el contrato "público = global". Se cierra con tests de regresión que lockean el comportamiento.

## TL;DR

- **Intención de diseño confirmada**: `visibility: "publica"` significa **global** (visible para cualquier staff, no sólo de tu escuela).
- **`canReadDataset` y todas las ramas del listado** son consistentes con esta intención: ninguna filtra público por `schoolId`.
- **El test de regresión** (12 casos) prueba todos los caminos y valida que la implementación actual es correcta.
- **No se toca código de producción.** Sólo se agrega `api/tests/integracion/vblang-datasets-listing-q5.test.ts`.

## Intención confirmada: público = global

El modelo en `api/src/routes/vblang-datasets.ts` es internamente consistente: `publica` se trata como global en los **3** caminos que dan acceso de lectura:

| Camino | Línea | Comportamiento |
|---|---|---|
| `canReadDataset` (GET /:id) | `vblang-datasets.ts:54-68` | `if (row.visibility === "publica") return true;` (sin chequear `schoolId`) |
| GET /api/vblang/datasets (listado) | `vblang-datasets.ts:90-104` | Branch 3: `{ visibility: "publica", NOT: { ownerUserId: userId } }` (sin chequear `schoolId`) |
| GET /api/vblang/datasets/by-name/:nombre (runtime) | `vblang-datasets.ts:189-198` | `{ visibility: "publica" }` (sin chequear `schoolId`) |

Esta intención ya estaba plasmada además en el test pre-existente `vblang-datasets-by-name.test.ts:88-108` ("GET by-name público es visible para cualquier user logueado").

El reporte de Javier "falta probar si es solo público en esa escuela" queda resuelto: NO. **Público = global, sin scope de escuela.**

## Análisis del armado de `visibilityBranches`

`api/src/routes/vblang-datasets.ts:90-104`:

```ts
const visibilityBranches: Array<Record<string, unknown>> = [];
if (owner !== "otros") visibilityBranches.push({ ownerUserId: userId });
if (owner !== "mias") {
  if (userSchoolId) {
    visibilityBranches.push({
      schoolId: userSchoolId,                                 // ← rama "tu escuela"
      visibility: { in: ["escuela", "publica"] as const },
      NOT: { ownerUserId: userId },
    });
  }
  visibilityBranches.push({
    visibility: "publica",                                    // ← rama "público global"
    NOT: { ownerUserId: userId },
  });
}
```

Para un dataset `(visibility=publica, schoolId=esc-X, ownerUserId=Y)` visto por usuario `A` con `schoolId=esc-A`:

| Branch | Match? | Por qué |
|---|---|---|
| `{ ownerUserId: A }` | ✗ | El owner no es A |
| `{ schoolId: esc-A, visibility: in [escuela,publica], NOT: ownerUserId=A }` | ✗ | `schoolId=esc-X ≠ esc-A` |
| `{ visibility: "publica", NOT: ownerUserId=A }` | **✓** | `visibility=publica`, owner es Y ≠ A |

→ **El dataset público ajeno cae en branch 3**, sin importar la escuela. Lo MISMO aplica cuando el requester NO tiene `schoolId` (la rama 2 se omite por el `if (userSchoolId)`, pero la rama 3 sigue activa).

El "bug probable" mencionado en el spec **no existe** en el código actual. La rama "público global" fue añadida precisamente para este caso.

## Tests de regresión (12 casos)

`api/tests/integracion/vblang-datasets-listing-q5.test.ts`:

### `canReadDataset` (GET /:id) — 3 tests

1. `Q5: GET /:id de un PUBLICO ajeno (otra escuela) → 200`
2. `Q5: GET /:id de un PRIVADO ajeno (otra escuela) → 403`
3. `Q5: GET /:id de un PUBLICO ajeno sin schoolId propio → 200`

### GET /api/vblang/datasets (listado) — 6 tests

4. `Q5: dataset PUBLICO de OTRA escuela aparece en el listado del teacher de otra escuela`
5. `Q5: dataset PUBLICO de escuela con schoolId=null aparece en el listado de teacher de otra escuela`
6. `Q5: dataset PUBLICO ajeno también aparece cuando el requester NO tiene schoolId`
7. `Q5: dataset PRIVADO ajeno NO aparece en el listado de otro teacher`
8. `Q5: dataset ESCUELA de OTRA escuela NO aparece en el listado`
9. `Q5: dataset ESCUELA de la PROPIA escuela SÍ aparece en el listado`

### Filtros `owner` / `visibility` — 3 tests

10. `Q5: filtro visibility=publicas incluye públicos ajenos y propios`
11. `Q5: filtro owner=otros incluye públicos ajenos Y escuelas de la propia escuela`
12. `Q5: filtro owner=mias incluye TODAS mis visibilidades`

## Aceptación

- ✅ `pnpm test:api` → 246/246 (era 234, +12 nuevos).
- ✅ Un dataset público es accesible por cualquier staff, en listado y en GET /:id.
- ✅ Privadas siguen invisibles para terceros.
- ✅ Filtros `owner=mias/otros` y `visibility=publicas/privadas` siguen funcionando.

## Archivos tocados

- `api/tests/integracion/vblang-datasets-listing-q5.test.ts` (nuevo, 12 tests).
- `api/package.json` (registra el test en el script `test`).

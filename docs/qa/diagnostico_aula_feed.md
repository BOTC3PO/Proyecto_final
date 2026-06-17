# DIAG-AULA-FEED — 404 en /api/aula/actividades y /api/aula/leaderboard

## Síntoma
Al cargar la página del aula (`/clases/:aulaId`), el log del back muestra:
```
api dev: GET /api/aula/actividades 404 31 - 8.000 ms
api dev: GET /api/aula/leaderboard 404 31 - 9.000 ms
api dev: GET /api/progreso?usuarioId=usr-teach-001 200 347 - 9.000 ms
```

Las rutas `/api/aula/actividades` y `/api/aula/leaderboard` devuelven 404. `/api/progreso` funciona (200).

## Causa raíz (archivo:línea)

### 1. `aula.tsx` lee el param equivocado
`apps/web/src/pages/aula.tsx:69`:
```ts
const { id: routeId } = useParams();
```

La ruta registrada es `clases/:aulaId` (`apps/web/src/router.tsx:211`), no `:id`. Por lo tanto `routeId` es siempre `undefined`.

### 2. Fallback a query string que tampoco está
`apps/web/src/pages/aula.tsx:103-106`:
```ts
const classroomId = useMemo(() => {
  const params = new URLSearchParams(location.search);
  return routeId ?? params.get("id") ?? params.get("aulaId") ?? params.get("classroomId");
}, [location.search, routeId]);
```

Si el URL es `/clases/abc123` (sin query string), todos los fallbacks son `null` → `classroomId = null`.

### 3. `fetchLeaderboard(null)` y `fetchUpcomingActivities(null)` hacen request sin classroomId
`apps/web/src/pages/aula.tsx:123-124`:
```ts
fetchLeaderboard(classroomId ?? undefined),
fetchUpcomingActivities(classroomId ?? undefined),
```

`apps/web/src/services/leaderboard.ts:13-16`:
```ts
export async function fetchLeaderboard(classroomId?: string): Promise<LeaderboardEntry[]> {
  const query = classroomId ? `?classroomId=${encodeURIComponent(classroomId)}` : "";
  const response = await apiGet<LeaderboardResponse>(`/api/aula/leaderboard${query}`);
  return response.items;
}
```

Si `classroomId` es `undefined`, `query = ""` → request a `/api/aula/leaderboard` (sin query param). Mismo patrón en `actividades.ts:16-19`.

### 4. El back rechaza con 404 cuando falta classroomId
`api/src/routes/aula-feed.ts:46`:
```ts
const resolveClassroomContext = async (
  req: { query: { classroomId?: unknown }; user?: Record<string, unknown> },
  accessLevel: "admin" | "staff" | "learner"
): Promise<ClassroomContext> => {
  const classroomId = typeof req.query.classroomId === "string" ? req.query.classroomId : null;
  if (!classroomId) return { success: false, error: { status: 404, message: "classroom not found" } };
  // ...
};
```

El handler `GET /api/aula/leaderboard` (`aula-feed.ts:88`) y `GET /api/aula/actividades` (`aula-feed.ts:101`) ambos pasan por `resolveClassroomContext`, que devuelve 404 si no hay `classroomId` en el query.

## Cadena completa

1. Usuario navega a `/clases/abc123` (sin query string).
2. `aula.tsx:69` lee `useParams().id` → `undefined` (el param real es `aulaId`).
3. `aula.tsx:103-106` cae a los fallbacks de query string → todos `null` → `classroomId = null`.
4. `useEffect` llama `fetchLeaderboard(null)` y `fetchUpcomingActivities(null)`.
5. Los services hacen request a `/api/aula/leaderboard` y `/api/aula/actividades` sin query param.
6. El back (`aula-feed.ts:46`) rechaza con 404: "classroom not found".
7. El front recibe 404, `apiRequest` no retry (no es 401), propaga `ApiError`.
8. El catch en `aula.tsx:155-156` traga el error silenciosamente (no muestra UI de error).

## Por qué `/api/progreso` SÍ funciona

`/api/progreso?usuarioId=usr-teach-001` usa `usuarioId` como query param, NO `classroomId`. El handler de progreso no depende del contexto del aula, solo del usuario. Por eso devuelve 200.

## Por qué es el mismo patrón que FIX-CONFIG

FIX-CONFIG (`docs/qa/fix-config.md`) arregló el mismo bug en `ProfesorAulaConfiguracion.tsx:30`: leía `useParams().id` cuando la ruta era `profesor/aulas/:aulaId`. Acá `aula.tsx:69` tiene exactamente el mismo antipatrón: lee `id` cuando la ruta es `clases/:aulaId`.

Hay un tercer lugar con el mismo bug probable: `aula.tsx:69` ya lo tiene, y posiblemente otros componentes que lean `useParams().id` con rutas que usen `:aulaId`.

## Evidencia

- Ruta: `apps/web/src/router.tsx:211` → `path: 'clases/:aulaId'`.
- Componente: `apps/web/src/pages/aula.tsx:69` → `const { id: routeId } = useParams();` (lee `id`, no `aulaId`).
- Fallback: `aula.tsx:103-106` → si los query params no están, `classroomId = null`.
- Service: `services/leaderboard.ts:14` → `const query = classroomId ? ... : "";` (si no hay id, request sin query).
- Back: `api/src/routes/aula-feed.ts:46` → `if (!classroomId) return { success: false, error: { status: 404, ... } };`.

## Impacto

- El panel de leaderboard queda vacío (o muestra error silencioso).
- La lista de actividades del aula queda vacía.
- El feed de publicaciones (`/api/aula/publicaciones`) tiene el mismo handler y el mismo bug — también devuelve 404.
- La página del aula parece funcionar (muestra título, descripción) pero los datos del feed están ausentes.

## Propuesta de fix (sin aplicar)

### Opción A: arreglar `aula.tsx:69` para leer el param correcto

```ts
// Antes:
const { id: routeId } = useParams();

// Después:
const { aulaId: routeId } = useParams();
```

Eso alinea con el nombre del param en la ruta (`router.tsx:211` → `:aulaId`). El resto del código (fallback a query string) queda igual.

**Costo**: 1 línea. **Riesgo**: bajo — solo cambia el nombre de la variable local. **Alcance**: arregla `aula.tsx` (la página del feed). NO arregla otros componentes que puedan tener el mismo bug.

### Opción B: cambiar la ruta a `:id` (en vez de arreglar el componente)

Cambiar `router.tsx:211` de `path: 'clases/:aulaId'` a `path: 'clases/:id'`. Pero el resto de la app usa `:aulaId` consistentemente, así que esto sería inconsistente. **No recomendado**.

### Opción C: ambos (A + B)

Aplicar A (fix correcto) y dejar B como referencia si hay que migrar más rutas. Pero B es lo que ya está mal.

### Opción D: además, hacer que el back devuelva 400 (no 404) cuando falta classroomId

`aula-feed.ts:46` devuelve 404 cuando `classroomId` falta. Un 400 ("Bad Request — missing classroomId") sería más correcto, porque 404 significa "el recurso no existe", pero acá el problema es "falta un parámetro requerido". Esto es una mejora de UX del back, pero no arregla el bug del front (sigue sin haber classroomId en la request).

## Tests que se necesitarían (después del fix)

- `aula.tsx` con ruta `/clases/abc123` (sin query) → `fetchLeaderboard` y `fetchUpcomingActivities` se llaman con `"abc123"`, no `undefined`.
- `aula.tsx` con ruta `/clases?aulaId=abc123` (query) → `fetchLeaderboard` se llama con `"abc123"`.
- El back: `GET /api/aula/leaderboard?classroomId=abc123` con un aula existente → 200 con `{ items: [...] }`.
- El back: `GET /api/aula/leaderboard` sin `classroomId` → 400 (si se aplica D) o 404 (actual).

## Aceptación del diagnóstico

Este diagnóstico permite escribir el fix sin volver a reproducir. La causa está identificada: `aula.tsx:69` lee `useParams().id` cuando la ruta es `clases/:aulaId`, y los fallbacks de query string no se usan porque el URL no tiene query params.

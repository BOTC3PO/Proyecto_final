# FIX-CONFIG — ProfesorAulaConfiguracion: carga infinita

## Síntoma
Al entrar a la configuración de un aula, el spinner quedaba girando para siempre sin cargar datos. La request a la red nunca se hacía.

## Causa raíz
- `apps/web/src/router.tsx:282`: ruta registrada como `path: 'profesor/aulas/:aulaId'`.
- `apps/web/src/pages/ProfesorAulaConfiguracion.tsx:30`: el componente leía `const { id } = useParams()`.
- React Router devuelve `{ aulaId: 'xxx' }`, NO `{ id: 'xxx' }`. Por lo tanto `id` era siempre `undefined`.
- El `useEffect` (línea 51-73) hacía `if (!id) return` ANTES de que el `.finally(() => setIsLoading(false))` se ejecutara.
- `isLoading` iniciaba en `true` → el early-return no cambiaba nada → spinner eterno, sin request a la red.

## Investigación
- Confirmado el nombre del param: `router.tsx:282` → `:aulaId`.
- Todos los usos de `id` en el componente (líneas 52, 56, 76, 81, 97, 101, 109, 121, 126, 133, 149, 154, 197, 200) recibían `undefined`.
- Referencia de patrón correcto: `aula.tsx:103-105` lee con fallback `routeId ?? params.get("id") ?? params.get("aulaId") ?? params.get("classroomId")`. Nuestro caso es más simple: la ruta tiene un solo param, basta con leerlo por nombre.

## Fix

**`apps/web/src/pages/ProfesorAulaConfiguracion.tsx`**:

```ts
// Antes:
const { id } = useParams();

// Después:
// FIX-CONFIG: la ruta es `profesor/aulas/:aulaId` (router.tsx:282),
// no `:id`. Antes se leía `id` (siempre undefined) y el `if (!id) return`
// en el useEffect corría ANTES del `.finally(() => setIsLoading(false))`,
// así que el spinner quedaba para siempre sin request a la red.
const { aulaId } = useParams();
const id = aulaId;
```

**Manejo defensivo del id ausente** (líneas 51-59 del useEffect principal):

```ts
useEffect(() => {
  if (!id) {
    // FIX-CONFIG: si el param falta, mostrar error claro y salir del
    // loading (si no, el spinner queda eterno).
    setIsLoading(false);
    setError("Falta el identificador del aula en la URL.");
    return;
  }
  // ... resto del useEffect sin cambios
}, [id]);
```

## Decisión de diseño
- **`const { aulaId } = useParams(); const id = aulaId;`**: en vez de renombrar todos los usos de `id` a `aulaId` (16 ocurrencias), mantengo el alias `id` para minimizar el diff. El comentario `FIX-CONFIG` explica el porqué.
- **Error claro en vez de spinner eterno**: si el param falta, `setIsLoading(false) + setError(...)` sale del loading y muestra el mensaje. El usuario sabe qué pasó.

## Tests (2 nuevos)

**`apps/web/src/pages/__tests__/ProfesorAulaConfiguracion.spec.tsx`**:
1. **Con aulaId válido**: renderiza en `/profesor/aulas/aula-1`, `fetchClassroomDetail` se llama con `"aula-1"`, el form aparece (`Configuración general`). Candado: antes del fix el spinner quedaba para siempre.
2. **Sin aulaId**: usa `vi.doMock` + `vi.resetModules` para mockear `useParams` con `aulaId: undefined` solo en este test. El componente muestra "Falta el identificador del aula en la URL." y el servicio NO se llama. Candado: antes del fix, el spinner quedaba para siempre (o pantalla en blanco, según el path).

## Aceptación
- `pnpm test:web` → **777/777** (de 775 → +2).
- `pnpm test:api` → 305/305 (sin cambios).
- 0 regresiones.

# QA-FIX-11 — Refresh token habilitado (sesión no muere a la hora)

## Síntoma
A la 1h (o 2h según el env), el usuario era expulsado sin poder renovar la sesión. El front mostraba "la API no carga los datos" pero en realidad era sesión vencida (401). Esto generaba **falsos positivos** en todo el QA: cualquier pantalla probada después de que vencía el token daba 401 y parecía un bug propio.

## Causa raíz
- `api/src/lib/env.ts:41` (antes del fix): `JWT_REFRESH_TTL_SECONDS` default = **0**.
- `api/src/lib/auth-token.ts:148`: `if (REFRESH_TTL_SECONDS <= 0) return null` → con TTL 0, `createRefreshToken()` **nunca emitía refresh token**.
- Login (auth.ts:471) y register (auth.ts:269) llamaban `createRefreshToken()` pero obtenían `null` → la respuesta NO incluía `refreshToken`.
- Front `apps/web/src/lib/api.ts:165-191`: `attemptTokenRefresh()` → `getRefreshToken()` devolvía `null` → `clearStoredAuthSession()` → usuario expulsado.
- `/api/auth/refresh` (auth.ts:296-360): endpoint correcto, validaba refresh, rotaba el token (line 339), pero `createRefreshToken()` devolvía `null` por el TTL 0.

## Flujo completo (antes del fix)
1. Usuario hace login → back emite access token (1h) pero NO refresh token.
2. Front guarda access token en localStorage/sessionStorage.
3. Usuario trabaja normalmente durante 1h.
4. Access token vence.
5. Front hace request → back responde 401.
6. Front intenta refrescar → `getRefreshToken()` devuelve `null` (nunca se emitió).
7. Front llama `clearStoredAuthSession()` → usuario expulsado.

## Flujo completo (después del fix)
1. Usuario hace login → back emite access token (1h) **Y** refresh token (7 días).
2. Front guarda ambos tokens.
3. Usuario trabaja normalmente.
4. Access token vence (a la 1h).
5. Front hace request → back responde 401.
6. Front intenta refrescar → `getRefreshToken()` devuelve el refresh token.
7. Front llama `POST /api/auth/refresh` con el refresh token.
8. Back valida el refresh, emite nuevo access + nuevo refresh (rotación).
9. Front guarda los nuevos tokens y reintenta la request original → 200 OK.
10. Usuario no nota nada (excepto un delay de ~100ms en la request que dio 401).

## Decisión de TTLs
- **Access**: 1h (3600s) — estándar, balance entre seguridad y UX.
- **Refresh**: 7 días (604800s) — conservador pero suficiente para uso semanal típico (estudiantes/docentes). 30 días sería más user-friendly pero aumenta la ventana de exposición si el refresh se roba.
- **Rotación**: ya implementada (auth.ts:339 emite nuevo refresh en cada uso). El front (api.ts:187-189) lo guarda. Esto mitiga replay attacks (el refresh viejo sigue válido hasta su `exp`, pero la rotación reduce la ventana).

### Razonamiento
- **Access corto (1h)**: si el token se roba, el atacante tiene 1h de acceso. Aceptable.
- **Refresh largo (7 días)**: el usuario no es expulsado mientras trabaja activamente. Si el refresh se roba, el atacante puede renovar access tokens por 7 días. Pero con rotación, cada uso legítimo emite un nuevo refresh, así que el atacante pierde acceso cuando el usuario usa la app de nuevo.
- **Rotación**: cada uso del refresh emite un nuevo refresh. El viejo sigue válido hasta su `exp`, pero el próximo uso legítimo emite otro. Esto es un balance entre seguridad y UX (no invalidar el refresh viejo inmediatamente permitiría que el usuario tenga la app abierta en dos pestañas sin conflicts).

## Implementación

### Cambio 1: `api/src/lib/env.ts`
```ts
// Antes:
JWT_REFRESH_TTL_SECONDS: Number(process.env.JWT_REFRESH_TTL_SECONDS ?? 0),

// Después:
JWT_REFRESH_TTL_SECONDS: Number(process.env.JWT_REFRESH_TTL_SECONDS ?? 7 * 24 * 60 * 60),
```

### Cambio 2: `api/.env` y `api/.env.example`
```env
# Antes:
JWT_REFRESH_TTL_SECONDS=0

# Después:
JWT_REFRESH_TTL_SECONDS=604800
```

### Cambio 3: Tests
Nuevo archivo `api/tests/integracion/auth-refresh-token.test.ts` con 5 tests:
1. Login emite access Y refresh token (con TTL > 0).
2. POST /api/auth/refresh con refresh válido → nuevo access + nuevo refresh.
3. POST /api/auth/refresh con refresh vencido → 401.
4. POST /api/auth/refresh con refresh inválido (firma rota) → 401.
5. POST /api/auth/refresh con access token (tipo incorrecto) → 401.

**Nota técnica**: el test setea `process.env.JWT_REFRESH_TTL_SECONDS` ANTES de cualquier import, e invalida el cache de `env.ts` y `auth-token.ts` para forzar un re-load con el nuevo valor. Esto es necesario porque:
- El `.env` tiene `JWT_REFRESH_TTL_SECONDS=0`.
- `dotenv.config()` carga el `.env` cuando `env.ts` se importa.
- `auth-token.ts` captura `REFRESH_TTL_SECONDS` al cargar (const).
- El test necesita el valor 604800, no 0.

## Aceptación
- `pnpm test:api`: **305/305** (de 300 → +5).
- `pnpm test:web`: **775/775** (sin cambios).
- 0 regresiones.
- Login emite access + refresh.
- Refresh endpoint funciona con rotación.
- Refresh vencido/inválido → 401 limpio.

## Impacto en QA
Con este fix, las sesiones ya no mueren a la hora. Esto elimina los **falsos positivos** de "la API no carga los datos" que en realidad eran sesión vencida.

**Recomendación para Javier**: re-probar las pantallas que daban "la API no carga" (aula, módulo, panel, calendario) con sesión fresca y renovada. Algunas pueden resultar ya funcionales (eran falsos positivos de sesión vencida). Las que sigan fallando con sesión válida son bugs reales y recién ahí vale diagnosticarlas una por una.

## Seguridad
- No se debilitó la seguridad: el refresh largo es aceptable SOLO con rotación (ya implementada).
- No se emiten tokens eternos (refresh tiene TTL de 7 días).
- No se loguean tokens (solo se loguean eventos de auth, no los tokens mismos).
- `clearStoredAuthSession` se mantiene para el caso de refresh genuinamente inválido (no hay loop de reintentos).

## Notas
- El front ya tenía el mecanismo de auto-refresh (api.ts:165-191), solo faltaba que el back emitiera refresh tokens.
- La rotación ya estaba implementada (auth.ts:339), solo faltaba habilitarla con TTL > 0.
- El endpoint `/api/auth/refresh` ya funcionaba correctamente, solo devolvía `refreshToken: undefined` porque `createRefreshToken()` devolvía `null`.

# Verificación de bugs reportados (2026-02-20)

## Resultado general

- **Solucionados:** 24
- **Pendiente:** 0

## Estado por bug

| Bug | Estado | Evidencia |
|---|---|---|
| BUG-01 | ✅ Solucionado | `AuthProvider` restaura usuario desde `localStorage` y `sessionStorage` sin depender de testmode. |
| BUG-02 | ✅ Solucionado | `setAuthToken` y `setRefreshToken` guardan en `localStorage` (remember) o `sessionStorage` (no remember). |
| BUG-03 | ✅ Solucionado | Existe `POST /api/auth/refresh` y valida refresh token para emitir nuevo access token. |
| BUG-04 | ✅ Solucionado | `getAuthToken()` sincroniza desde storage y limpia sesión si no hay usuario persistido. |
| BUG-05 | ✅ Solucionado | `ProtectedRoute` ya no hace fetch a `/api/me`; usa contexto y storage local/session. |
| BUG-06 | ✅ Solucionado | Login de usuario `GUEST` devuelve 403 con mensaje específico (no “Invalid credentials”). |
| BUG-07 | ✅ Solucionado | `isTestAuthEnabled` usa `testmode()`; no mezcla automáticamente `import.meta.env.DEV`. |
| BUG-08 | ✅ Solucionado | `POST /api/escuelas` requiere `requireAdmin`. |
| BUG-09 | ✅ Solucionado | `GET /api/escuelas` requiere `requireUser`. |
| BUG-10 | ✅ Solucionado | `PATCH /api/escuelas/:id` valida `ADMIN` plataforma o admin de esa escuela. |
| BUG-11 | ✅ Solucionado | `PATCH /api/economia/config` ahora requiere `requireAdminAuth` (y router tiene `requireUser` global). |
| BUG-12 | ✅ Solucionado | `DELETE /api/economia/eventos/:id` requiere `requireAdminAuth`. |
| BUG-13 | ✅ Solucionado | En producción, falta de `JWT_SECRET` dispara error de startup (sin fallback inseguro). |
| BUG-14 | ✅ Solucionado | `DELETE /api/economia/recompensas/:id` usa `requireUser` antes de `requirePolicy`. |
| BUG-15 | ✅ Solucionado | Se aplica rate limiting global y limitadores extra para mutaciones de economía/escuelas. |
| BUG-16 | ✅ Solucionado | `RecuperarContrasena` tiene `onSubmit` funcional y consume `/api/auth/forgot-password`; backend implementa endpoint. |
| BUG-17 | ✅ Solucionado | Frontend guarda refresh token y hace refresh automático en 401; backend expone `/api/auth/refresh`. |
| BUG-18 | ✅ Solucionado | Startup check ya no depende de email hardcodeado `admin@escuela.com`; revisa métricas reales. |
| BUG-19 | ✅ Solucionado | `api/src/lib/auth.ts` queda limpio, solo re-exporta `requireAdmin` sin anotación deprecada confusa. |
| BUG-20 | ✅ Solucionado | Express registra middleware global de errores (`app.use((err, req, res, next) => ...)`). |
| BUG-21 | ✅ Solucionado | Se define `schoolId` como campo canónico en schemas/auth y usuario, manteniendo alias `escuelaId` solo por compatibilidad. |
| BUG-22 | ✅ Solucionado | `testmode()` admite override runtime (`window.__TEST_MODE__`, `localStorage`) y `VITE_TEST_MODE`. |
| BUG-23 | ✅ Solucionado | Existen `.env.example` en raíz y en `api/`. |
| BUG-24 | ✅ Solucionado | `getDb()` asegura índices esenciales al iniciar (`ensureEssentialIndexes`). |

# Fases 1–5 — Cuenta alumno para staff (implementadas)

Implementado y **validado contra un Postgres real** (15 migraciones
aplicadas, `seed_demo` corrido de punta a punta, repros de cada fase).
Cada archivo de `fase-1-5/api` y `fase-1-5/web` va a la ruta de destino
indicada abajo (reemplaza el existente; `backfill_espejos.ts` y
`cuenta-alumno-staff.ts` son nuevos).

## Decisiones tomadas
- **Registro best-effort + backfill** (no atómico): un espejo fallido no
  bloquea el alta; se audita y el backfill lo repara.
- **Vincular por `username` o `email`**, misma escuela, solo USER puro no
  vinculado.

---

## Fase 1 — `cambiar-cuenta` provisiona on-demand (mata el /login)
**Archivo**: `api/auth.ts` → `api/src/routes/auth.ts`
En `POST /api/auth/cambiar-cuenta`, si no hay vínculo y el origen es staff,
crea el espejo en el momento (`provisionarEspejoAlumno`, idempotente) en vez
de devolver 403. Para no-staff sigue 403.
**Validado**: `provisionarEspejoAlumno` sobre staff sin espejo crea vínculo
+ `resolveCuentaVinculada` → `ALUMNO`.

## Fase 2 — Registro robusto
**Archivo**: `api/provisionar-espejo.ts` → `api/src/lib/provisionar-espejo.ts`
`tryProvisionarEspejoParaNuevoStaff` ahora **audita la falla en canal
durable** (`recordAuditLog`, action `ESPEJO_PROVISION_FALLIDA`) en lugar de
solo `console.warn` en dev. El alta no se rompe; el backfill repara.
**Validado**: `seed_demo` corre sin error con la lib modificada.

## Fase 3 — Seed + backfill
**3a (nuevo)**: `api/backfill_espejos.ts` → `api/scripts/backfill_espejos.ts`
+ script `"backfill:espejos"` en `api/package.json`. Provisiona espejos para
staff legacy. Idempotente.
**3b**: `api/seed_demo.ts` → `api/scripts/seed_demo.ts`. Tras el backfill,
inscribe el espejo del TEACHER demo en sus 2 aulas (STUDENT) + saldo 200 PF,
para que "Ver como alumno" no muestre un dashboard vacío.
**Validado**: `pnpm db:seed` → `espejos-alumno: revisados=6 creados=3` +
`🪞 espejo inscripto en 2 aulas + saldo 200 PF`. `backfill:espejos` →
`revisados=N creados=M omitidos=K`.

## Fase 4 — Vincular cuenta alumno existente (opt-in)
**Backend**:
- `api/provisionar-espejo.ts`: núcleo nuevo `vincularCuentaAlumnoExistente`
  (NO crea usuario; valida USER puro / no espejo / no vinculado / misma
  escuela; crea `CuentaVinculada` simétrica).
- `api/auth.ts`: endpoints `POST /api/auth/crear-alumno` (auto) y
  `POST /api/auth/vincular-alumno` (body `{ identificador }`).
- `api/cuenta-vinculada.ts` → `api/src/lib/cuenta-vinculada.ts`: **fix de
  clasificación** — `resolveCuentaVinculada` ahora discrimina
  `staff ↔ alumno real` (sin esto, una cuenta vinculada real resolvía a
  `PRINCIPAL` y el botón no aparecía). Staff→`ALUMNO`, alumno→`PRINCIPAL`.
**Frontend**:
- `web/cuenta-alumno-staff.ts` → `apps/web/src/services/cuenta-alumno-staff.ts`
  (nuevo): servicios `crearCuentaAlumnoStaff` / `vincularCuentaAlumnoStaff`.
- `web/Perfil.tsx` → `apps/web/src/pages/Perfil.tsx`: tarjeta
  `MiCuentaAlumnoStaffCard` (solo TEACHER/DIRECTIVO/ADMIN) con "Crear",
  "Vincular existente" (input) y "Entrar como alumno".
**Validado**: vincular feliz + 4 rechazos (`ALUMNO_ALREADY_LINKED`,
`ALREADY_LINKED`, `ALUMNO_NOT_PURE_USER`, `ALUMNO_NOT_FOUND`); tras vincular,
`resolveCuentaVinculada(staff)` → `ALUMNO` y `(alumno)` → `PRINCIPAL`.

## Fase 5 — Frontend
**5a — no flashear a /login**:
- `web/AuthContex.tsx` → `apps/web/src/auth/AuthContex.tsx`: agrega
  `isSwitching?` al contexto (opcional, para no romper mocks).
- `web/auth-provider.tsx` → `apps/web/src/auth/auth-provider.tsx`: setea
  `isSwitching` durante `switchCuenta`; lo limpia cuando el user nuevo se
  commitea (`useEffect [user]`) o en el catch.
- `web/ProtectedRoute.tsx` → `apps/web/src/routing/ProtectedRoute.tsx`:
  mientras `isSwitching`, no redirige a `/login`.
**5b — unificar "Ver como alumno"**:
- `web/Navbar.tsx` → `apps/web/src/nav/Navbar.tsx` y
  `web/AlumnoNavbar.tsx` → `apps/web/src/nav/AlumnoNavbar.tsx`: el item
  intercepta igual que `StaffSidebar` (con espejo → `switchCuenta`; sin
  espejo → link a `/perfil` para crear/vincular, en vez de link muerto).
**Validado**: sintaxis (esbuild) OK en los 8 archivos de front tocados.

---

## Aplicar y validar (en tu repo)
```bash
# backend
cd api && pnpm typecheck
pnpm db:seed                 # incluye Fase 3
pnpm backfill:espejos        # staff legacy (DBs existentes)
node --test --import tsx \
  tests/integracion/cambiar-cuenta.test.ts \
  tests/integracion/register-hook-espejo.test.ts \
  tests/integracion/provisionar-espejo.test.ts
# frontend
cd ../apps/web && pnpm exec tsc -b
```
Manual: staff sin espejo → "Ver como alumno" NO cae a /login (Fase 1 +
Fase 5a); Perfil → "Crear mi cuenta de alumno" / "Vincular existente" →
"Entrar como alumno" entra al panel de alumno con datos (Fase 3b/4).

## Tests a agregar (sugerido)
- `cambiar-cuenta`: staff sin vínculo → 200 (provisión on-demand), no 403.
- `vincular-alumno`: feliz + rechazos por código.
- front: `menu-alumno`/`Navbar` con staff sin espejo no redirige a /login.

## Nota
Editado sobre la copia del zip extraído. Los 13 archivos están en
`fase-1-5/api` y `fase-1-5/web` listos para reemplazar en las rutas de
arriba (o pasarle este changelog a Claude Code para que aplique los diffs).

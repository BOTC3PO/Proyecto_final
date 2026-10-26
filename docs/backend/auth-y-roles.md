# Autenticación y roles — Backend

| | |
|---|---|
| **Versión** | 1.1 |
| **Estado** | Vigente |
| **Audiencia** | Backend, full-stack, seguridad |
| **Última actualización** | 2026-07-18 — fusión con `documentacion V2/docs/`: multirol (§2.1), cuenta espejo (§3.1), co-titulares de aula (§3.2), refresh token ahora emitido por default (§1), gobernanza retirada (§4). El resto de la versión 2026-05-30 sigue vigente. |

> Este documento reconcilia y reemplaza a [`docs/roles.md`](../roles.md) (que queda como
> referencia conceptual de roles). Se deriva del código real de autenticación y autorización.

## Conceptos

La autenticación es **JWT propio** (HMAC-SHA256, sin librería externa) emitido por la API. La
autorización combina tres capas:

1. **Autenticación global** (`requireUser`): exige un access token válido en casi todas las rutas.
2. **Rol global** del usuario (`Usuario.role`): ADMIN, DIRECTIVO, TEACHER, USER, PARENT, GUEST.
3. **Membresía por escuela** (`Membresia.rol`) y **rol en aula** (`ClaseMiembro.rolEnClase`):
   permisos contextuales por institución/aula.

Sobre esto se aplican **políticas** (`requirePolicy`), **gating por plan enterprise**
(`requireEnterpriseFeature`) y **acceso por estado de suscripción** (`enforceSubscriptionAccess`).

### Archivos fuente

- `api/src/lib/auth-token.ts` — emisión/verificación de tokens JWT.
- `api/src/lib/user-auth.ts` — middleware `requireUser` (autenticación de cualquier usuario).
- `api/src/lib/admin-auth.ts` — middleware `requireAdmin` (solo ADMIN).
- `api/src/lib/authorization.ts` — políticas (`requirePolicy`) y helpers de rol.
- `api/src/lib/membership-roles.ts` — mapeo rol global → rol de membresía.
- `api/src/lib/entitlements.ts` — planes enterprise, features y acceso por suscripción.
- `api/src/routes/auth.ts` — endpoints de login/registro/guest/refresh/bootstrap.

---

## 1. Flujo JWT

### Tokens

Definidos en `api/src/lib/auth-token.ts`:

- **Algoritmo:** HS256 (`crypto.createHmac("sha256", secret)`), formato `header.payload.signature`
  en base64url. La firma se compara con `crypto.timingSafeEqual` (resistente a timing attacks).
- **Access token:** firmado con `JWT_SECRET`, TTL `JWT_ACCESS_TTL_SECONDS` (default 3600s).
  Claims: `sub` (userId), `email`, `username`, `role`, `guestOnboardingStatus`, `schoolId`,
  `fullName`, `iat`, `exp`, `typ: "access"` (+ `iss`/`aud` si están configurados).
- **Refresh token:** firmado con `JWT_REFRESH_SECRET` (cae a `JWT_SECRET` si está vacío), TTL
  `JWT_REFRESH_TTL_SECONDS`. Si el TTL es `<= 0` no se emite refresh token — pero 🆕 **el default ya
  no es `0`**: `env.ts` fija `JWT_REFRESH_TTL_SECONDS` en `7 * 24 * 60 * 60` (**7 días**) por
  defecto, así que hoy el refresh token se emite siempre salvo que se lo desactive explícitamente
  por variable de entorno. Cubierto por `tests/integracion/auth-refresh-token.test.ts`.
- **Validaciones en `verifyToken`:** algoritmo HS256, firma, tipo de token, `exp`, y opcionalmente
  `iss` (`JWT_ISSUER`) y `aud` (`JWT_AUDIENCE`) si están seteados.

El token se envía en el header `Authorization: Bearer <token>` (`extractTokenFromRequest`).

### Middleware `requireUser`

`api/src/lib/user-auth.ts` se monta globalmente en `api/src/index.ts:152`, **después** de las
rutas públicas (`health`, `consignas`, `generators`, `pages`, `auth`, `registro`, `maps`,
`visualizadores`, `herramientas`, `assets`) y **antes** del resto. Su lógica:

1. Permite `OPTIONS` (CORS preflight) sin token.
2. Exime explícitamente: `/api/auth/login`, `/api/auth/register`, `/api/auth/guest`,
   `/api/auth/refresh`, `/api/auth/forgot-password`, `/api/auth/bootstrap-admin`, `/health`.
3. Extrae y verifica el access token → `401 "Missing authentication"` /
   `401 <error de verificación>` si falta o es inválido.
4. Carga el usuario (`prisma.usuario.findFirst`, no borrado) → `403 "User not found"` si no existe.
5. Construye `req.user` con `{ id, _id, role, guestOnboardingStatus, schoolId, email, username, fullName }`
   y cachea el documento completo en `res.locals.userDoc`.
6. **Gate GUEST:** si `role === "GUEST"` y `guestOnboardingStatus !== "aceptado"`, solo permite
   `/api/auth/me` y `/api/me`; el resto responde `403 "Guest onboarding pending approval"`.
7. Aplica `enforceSubscriptionAccess` (ver §5).

### Middleware `requireAdmin`

`api/src/lib/admin-auth.ts`: verifica el token, exige `claims.role === "ADMIN"` y revalida contra
la DB (`role: "ADMIN"`, no borrado). Errores: `401 "Missing admin authentication"`,
`403 "Admin role required"`. Se usa en routers administrativos (moderación, comisiones admin,
suscripciones admin, generadores admin, tienda admin, etc.).

### Endpoints de autenticación (`api/src/routes/auth.ts`)

| Endpoint | Público | Descripción |
|---|---|---|
| `POST /api/auth/login` | sí (+ rate limit 10/15min) | Login con `identifier` + `password`. Devuelve tokens. Las cuentas GUEST no pueden loguear con password. |
| `POST /api/auth/register` | sí (+ rate limit 5/60min) | Alta de usuario (`email`, `password`, `username`, `fullName`, `role?`, `schoolId?`/`schoolCode?`, `consents?`). |
| `POST /api/auth/guest` | sí | Crea sesión GUEST (`fullName?`), deja `guestOnboardingStatus: "pendiente"`. |
| `POST /api/auth/refresh` | sí | Intercambia `refreshToken` por un nuevo access token. |
| `POST /api/auth/forgot-password` | sí (+ rate limit 5/60min) | Siempre responde `200 { ok, message }` (no filtra existencia). |
| `POST /api/auth/bootstrap-admin` | sí (+ `x-bootstrap-key`) | Crea el primer ADMIN. Ver §4. |
| `GET /api/auth/me` / `GET /api/me` | no (autenticado) | Devuelve el contexto del usuario actual. |

---

## 2. Roles globales

`Usuario.role` toma uno de estos valores (ver `api/src/lib/membership-roles.ts`):

| Rol global | Descripción | Rol de membresía equivalente |
|---|---|---|
| **ADMIN** | Administrador global; acceso completo. Estrictamente global (no debe usarse como rol de escuela). | — (`null`) |
| **DIRECTIVO** | Cuenta institucional con funciones corporativas. | `DIRECTIVO` |
| **TEACHER** | Docente. | `TEACHER` |
| **USER** | Usuario base / estudiante. | `STUDENT` |
| **PARENT** | Familiar vinculado a estudiantes. | `PARENT` |
| **GUEST** | Visitante temporal; acceso controlado por onboarding. | — (`null`) |

`getCanonicalMembershipRole(role)` mapea el rol global al rol de membresía canónico (ADMIN y GUEST
no mapean a ninguna membresía).

### Onboarding de GUEST

El estado vive en `Usuario.guestOnboardingStatus`:

- `pendiente`: alta iniciada (estado inicial tras `POST /api/auth/guest`).
- `aceptado`: habilita el acceso a rutas protegidas.
- `rechazado` / cualquier otro valor ≠ `aceptado`: acceso bloqueado (solo `/api/auth/me`, `/api/me`).

> El gate se aplica en `requireUser` (`user-auth.ts:70-78`).

### 2.1 Multirol 🆕 (`api/src/lib/roles.ts`, MULTIROL-01)

Desde julio 2026, `Usuario.roles: String[]` es la **fuente de verdad** de los roles — un usuario
puede ser, por ejemplo, `["TEACHER", "PARENT"]` a la vez. `Usuario.role` (singular) se mantiene
como columna espejo **deprecada pero viva** durante la transición: código legacy que lee
`user.role` sigue funcionando (Fase 1). Backfill: cada fila existente recibió `roles = [role]` en
la migración `20260617050000_multirol_usuario_roles`.

| Helper | Qué hace |
|---|---|
| `resolveRoles(user)` | Array efectivo: `roles` si no está vacío; si no, `[role]` (compat); si no, `[]`. |
| `resolvePrimaryRole(user)` | Rol de mayor jerarquía (`ADMIN > DIRECTIVO > TEACHER > PARENT > USER > GUEST`) para código que espera un rol singular. Nunca inventa un rol: `null` si el array está vacío. |
| `hasRole(user, target)` | ¿`target` ∈ roles del usuario? Acepta `user` como string suelto (compat). |
| `STAFF_ROLES` / `isStaffInRoles(roles)` | `{ADMIN, DIRECTIVO, TEACHER}` — ¿algún rol del array es staff? |
| `isParentInRoles(roles)` | ¿Incluye `PARENT`? Usado por la provisión opt-in de la cuenta espejo del padre (PARENT no es staff, pero puede pedir su propia cuenta de alumno). |

**Reglas de oro de la Fase 1** (documentadas en el propio archivo): no degradar permisos
(`isStaffRole({role:"TEACHER"})` sigue dando `true` igual que antes de multirol) ni elevar por
error (`roles` nunca incluye algo que el usuario no tenía). El JWT lleva **ambos** — `role` y
`roles` — en sus claims. Fase 2 (completada): el front centraliza sus ~47 checks de rol usando
`hasRole`/`isStaffRole` re-exportados desde `authorization`. Fase 3 (pendiente): retirar `role`
cuando nada lo use.

---

## 3. Roles por escuela y por aula; helpers de autorización

### Rol global vs membresías

- Un usuario tiene un **rol global** (`Usuario.role`) y puede tener **membresías** por escuela
  (`Membresia`, PK `usuarioId+escuelaId`) con un **rol escolar** propio (`Membresia.rol`).
- Dentro de un aula, el rol efectivo es `ClaseMiembro.rolEnClase`.
- Esto permite, por ejemplo, que un usuario sea TEACHER en una escuela y DIRECTIVO en otra.

### Helpers de rol (`api/src/lib/authorization.ts`)

Conjunto `STAFF_ROLES = {ADMIN, DIRECTIVO, TEACHER}`. Funciones clave:

| Helper | Permite | Quién |
|---|---|---|
| `canCreateClass` / `canPostInClass` / `canModerateContent` / `canMintCurrency` / `canManageParents` | Crear aulas, postear, moderar, emitir moneda, gestionar familias | STAFF (ADMIN/DIRECTIVO/TEACHER) |
| `isStaffRole` | Operaciones de staff | ADMIN, o membresía DIRECTIVO/TEACHER |
| `canReadAsLearner` | Lectura como estudiante | membresía STUDENT o PARENT |
| `canPostAsStudent` | Comentar en feed | membresía STUDENT |
| `canViewAllUsers` | Ver todos los usuarios | ADMIN |
| `canVoteContent` | Votar contenido | ADMIN, DIRECTIVO, TEACHER, STUDENT |
| `canProposeGovernanceChange` / `canVoteGovernance` | Gobernanza | STAFF |
| `canManageClassroom` | Gestionar un aula concreta | DIRECTIVO de la misma escuela, o miembro con `rolEnClase` ADMIN/TEACHER/DIRECTIVO |

### 3.1 Cuenta espejo 🆕 (`api/src/lib/cuenta-vinculada.ts`)

Staff (ADMIN/DIRECTIVO/TEACHER) recibe en el registro una **cuenta espejo de alumno**
(`Usuario.tipoCuenta = "ESPEJO_ALUMNO"` + fila `CuentaVinculada`, ver
[`modelo-de-datos.md#11-cuentas-vinculadas-cuenta-espejo`](./modelo-de-datos.md#11-cuentas-vinculadas-cuenta-espejo));
un padre puede pedirla opt-in. El **cambio de cuenta** (`roles.ts` route) emite tokens de la otra
cuenta sin re-login. `resolveEspejoId(userId)` discrimina el espejo genuino (misma persona) de
vínculos padre-hijo (personas distintas) — usarlo siempre en vez de asumir que "la otra punta" de
un vínculo es un espejo. El espejo queda **excluido de rosters y analíticas** de alumnos
(filtrado por `tipoCuenta`). Excepción documentada: el espejo de staff **sí** recibe saldo de
bienvenida y sus compras de tienda se mergean en `GET /api/tienda/mis-items` — a propósito, para
que un docente pueda probar la economía sin una cuenta de alumno real.

### 3.2 Co-titulares de aula 🆕

`isClassroomTeacher` (`classroom-scope.ts`) acepta **más de un** docente por aula vía
`ClaseMiembro` — sin migración nueva, reusa el modelo existente. `DIRECTIVO` se sumó a
`isTeacherOfClass` (antes un directivo entrando a un aula ajena veía "Invitado"). El `PATCH` de
aulas ya daba acceso escuela-ancha a staff; el co-titular importa específicamente en
`viewerRoleInClass` y en las rutas pedagógicas (`pedagogico.ts`).

### Políticas (`requirePolicy`)

`requirePolicy(policy, buildContext?)` evalúa una de las políticas declaradas en `authorization.ts`
y responde `403 { error }` si no se cumple. Políticas disponibles:

```
aula-feed/read · aula-feed/write · aulas/create · aulas/list · aulas/manage ·
aulas/manage-classroom · aulas/read · economia/compras · economia/mint ·
economia/moderate-intercambios · estadisticas/export · estadisticas/read ·
publicaciones/comment · publicaciones/create · publicaciones/read · progreso/read ·
progreso/write · reportes/export · reportes/read · resource-links/read ·
resource-links/write · usuarios/create · usuarios/list · usuarios/read
```

Cada política resuelve un `accessLevel` (`admin`/`staff`/`learner`/`member`/`school`) que el handler
usa para acotar resultados. Las políticas `progreso/*` y `economia/compras` además permiten al
propio usuario operar sobre sus datos (comparando `usuarioId`).

> El detalle por endpoint de qué política/guard aplica está en [`api-reference.md`](./api-reference.md).

---

## 4. Bootstrap del administrador inicial

`POST /api/auth/bootstrap-admin` crea el primer ADMIN cuando **no existe ningún usuario con rol
ADMIN**. Requiere el header `x-bootstrap-key` igual a `BOOTSTRAP_ADMIN_KEY`.

```http
POST /api/auth/bootstrap-admin
x-bootstrap-key: <BOOTSTRAP_ADMIN_KEY>
Content-Type: application/json

{ "username": "admin", "email": "admin@example.com",
  "fullName": "Administrador Principal", "password": "una-clave-larga" }
```

Respuestas: `201 { id }` en éxito; `401 "Invalid bootstrap key"` si la clave es inválida/falta;
`409 "Admin already exists"` si ya hay un ADMIN; `503 "Bootstrap admin disabled"` si la feature
está deshabilitada. Guía operativa en [`../bootstrap-admin.md`](../bootstrap-admin.md).

> Promoción de roles posterior: `PATCH /api/admin/usuarios/:id/rol` (solo el admin principal — el
> creado por bootstrap, sin `createdBy`— puede promover). ⚠️ **Gobernanza retirada por completo**
> (2026-07-14): ya no existe la alternativa de votación entre administradores que el flag
> `requiresGovernance: true` ofrecía en versiones previas de este documento — la restricción hoy es
> incondicional al admin principal, sin ruta de escape por votación.

---

## 5. Acceso por suscripción y plan enterprise

`api/src/lib/entitlements.ts` controla el acceso según el plan y el estado de suscripción de la
escuela del usuario (`Escuela.plan`, `Escuela.subscriptionStatus`).

### Planes y features

Planes: `ENTERPRISE_BASIC`, `ENTERPRISE_STD`, `ENTERPRISE_PLUS` (default `ENTERPRISE_PLUS`). Cada
plan habilita un conjunto de features (`dashboard`, `classrooms`, `members`, `modules`, `messages`,
`contracts`, `reports`, `parents`, `institutional_benefits`, `audit`, `advanced_moderation`,
`admin_tools`, `economy`, `quizzes`). `requireEnterpriseFeature(feature)` responde
`403 "feature not enabled for current plan"` si la feature no está en el plan.

### Estado de suscripción → nivel de acceso

`SUBSCRIPTION_STATUSES = ACTIVE | PAST_DUE | SUSPENDED | INACTIVE`. `resolveAccessLevel`:

| Estado | Nivel de acceso | Efecto |
|---|---|---|
| `ACTIVE` | `active` | Sin restricciones. |
| `PAST_DUE` | `read_only` | Solo lectura (GET/HEAD); escrituras `403 "subscription past due: read-only access"`. |
| `SUSPENDED` / `INACTIVE` | `disabled` | Bloqueo total de features enterprise; escrituras `403 "subscription inactive"`. |

`enforceSubscriptionAccess` (aplicado en `requireUser`) permite siempre los métodos de lectura y un
bypass para `POST /api/payments/initiate` (regularizar la cuenta). Si el usuario no tiene escuela
(`schoolId` nulo), no se aplican restricciones.

> El job de mora que actualiza `subscriptionStatus` y la política completa están en
> [`../politica-mora.md`](../politica-mora.md) y `api/src/lib/billing/delinquency.ts`. Nota: a la
> fecha el barrido de mora no tiene modelo de facturas en Prisma (devuelve lista vacía); ver
> [`migraciones.md`](./migraciones.md) y los TODO en `api/src/lib/payments/index.ts`.

---

## Resumen de errores de auth comunes

| Status | Mensaje | Origen |
|---|---|---|
| 401 | `Missing authentication` | Falta el header `Authorization` |
| 401 | `Invalid authentication token` / `Authentication token expired` | Token inválido o expirado |
| 403 | `User not found` | Token válido pero el usuario no existe / está borrado |
| 403 | `Guest onboarding pending approval` | GUEST sin `guestOnboardingStatus: "aceptado"` |
| 403 | `Admin role required` | Ruta `requireAdmin` sin rol ADMIN |
| 403 | `forbidden` | Falla una política `requirePolicy` |
| 403 | `feature not enabled for current plan` | `requireEnterpriseFeature` con plan insuficiente |
| 403 | `subscription past due: read-only access` / `subscription inactive` | Acceso por estado de suscripción |

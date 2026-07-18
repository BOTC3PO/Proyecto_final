# Referencia de la API — Backend

| | |
|---|---|
| **Versión** | 1.1 |
| **Estado** | Vigente |
| **Audiencia** | Backend, full-stack, integradores |
| **Última actualización** | 2026-07-18 — fusión con `documentacion V2/docs/`: 7 routers nuevos catalogados (`asistencia`, `boletin`, `cobros`, `escuela-pasarelas`, `push-tokens`, `formulas`; `governance.ts` retirado — sección eliminada). PLAN-P §5 (2026-07-08: `modulos.ts`, `libros.ts`, `materiales.ts`) y el resto del catálogo (2026-05-30) siguen vigentes sin cambios. |
| **Fuente de verdad** | `api/src/routes/*.ts` (**63 routers**) + `api/src/index.ts` |

> Catálogo derivado del código real. Cada endpoint indica método, path completo, guarda de
> auth/rol, params/body con **nombres reales de campos**, forma de respuesta y errores observados.
> Donde el comportamiento no quedó claro en el código se marca `POR CONFIRMAR (archivo:línea)`.

## Conceptos

- **Base URL (dev):** `http://localhost:5050`. Todas las rutas de negocio cuelgan de `/api/*`
  (excepto `GET /health`).
- **Autenticación:** `Authorization: Bearer <accessToken>`. El middleware global `requireUser`
  protege casi todo; ver [`auth-y-roles.md`](./auth-y-roles.md) para el detalle de tokens, roles,
  políticas (`requirePolicy`), gating enterprise (`requireEnterpriseFeature`) y acceso por
  suscripción.
- **Rutas públicas** (montadas antes de `requireUser` en `api/src/index.ts`): `GET /health`,
  `consignas`, `generators`, `pages`, `auth` (login/registro/guest/refresh/forgot/bootstrap),
  `registro`, y los prefijos `/api/maps`, `/api/visualizadores`, `/api/herramientas`, `/api/assets`.
- **Middlewares globales** (`api/src/index.ts`): `compression`, cabeceras de cache, `helmet`,
  `cors` (`CORS_ORIGIN`, `credentials`), `morgan`, `express.json` (con captura de raw body solo
  para `/api/payments/webhook`), rate-limiters específicos (`login` 10/15min, `register` 5/60min,
  `sync/push` 30/15min, `forgot-password` 5/60min) y un rate-limiter global de 500/15min.
- **Convención de errores:** los handlers devuelven `{ "error": "<mensaje>" }`. El error handler
  global responde `500 { error: "internal server error" }` ante excepciones no capturadas.

### Lectura de cada ítem

`MÉTODO /path` — **roles/guard** — **params/query** — **body** (campos reales) — **respuesta** —
**errores** — `archivo:línea`.

### Índice de dominios

1. [Auth, usuarios y escuelas](#dominio-auth-usuarios-y-escuelas)
2. [Aulas, feed y comunicación](#dominio-aulas-feed-y-comunicación)
3. [Contenido: libros, módulos, pages, progreso](#dominio-contenido-libros-módulos-pages-progreso)
4. [Quiz, banco, generadores y consignas](#dominio-quiz-banco-generadores-y-consignas)
5. [VBLang: plantillas, fórmulas y datasets](#dominio-vblang-plantillas-fórmulas-y-datasets)
6. [Economía, tienda e instrumentos](#dominio-economía-tienda-e-instrumentos)
7. [Encuestas, estadísticas y reportes](#dominio-encuestas-estadísticas-y-reportes)
8. [Pagos, suscripciones, comisiones y enterprise](#dominio-pagos-suscripciones-comisiones-y-enterprise)
8.1. 🆕 [Cobros escuela→familias y pasarelas](#dominio-cobros-escuelafamilias-y-pasarelas-🆕-plan-b)
9. [Sincronización offline y push](#dominio-sincronización-offline-y-push)
10. [Mapas, diccionarios y contenido público](#dominio-mapas-diccionarios-y-contenido-público)

---

## Dominio: Auth, usuarios y escuelas

Routers: `auth.ts`, `registro.ts`, `usuarios.ts`, `escuelas.ts`, `membresias.ts`, `padres.ts`,
`profesor.ts`, `admin.ts`.

### auth.ts

- `POST /api/auth/bootstrap-admin` — **público + header `x-bootstrap-key`** — — — **body**: `username`, `email`, `fullName`, `password` — `201 { id }` — `400 "Missing request body"`, `503 "Bootstrap admin disabled"`, `401 "Invalid bootstrap key"`, `409 "Admin already exists"` — `auth.ts:59`
- `POST /api/admins` — **ADMIN** (`requireAdmin`) — — **body**: `username`, `email`, `fullName`, `password` — `201 { id }` — `400 invalid payload` — `auth.ts:100`
- `POST /api/auth/register` — **público + rate limit** — — **body**: `email`, `password`, `username`, `fullName`, `role?`, `schoolId?`, `schoolCode?`, `birthdate?`, `consents?{privacyConsent,termsAccepted,consentedAt}` — `201 { id }` — `400 "Missing email or password"`, `409 "Email already exists"`, `400 "Invalid school code"`, `400 "Invalid school id"`, `400 "Role requires no school membership"` — `auth.ts:123`
- `POST /api/auth/guest` — **público + rate limit** — — **body**: `fullName?` — `201 { id, username, email, fullName, role:"GUEST", guestOnboardingStatus:"pendiente", schoolId:null, accessToken, expiresAt, expiresIn, refreshToken?, ... }` — `400 invalid payload` — `auth.ts:238`
- `POST /api/auth/refresh` — **público + rate limit** — — **body**: `refreshToken` — `200 { accessToken, expiresAt, expiresIn, refreshToken?, ... }` — `401 <verificación>`, `403 "User not found"` — `auth.ts:296`
- `POST /api/auth/forgot-password` — **público + rate limit** — — **body**: `email` — `200 { ok:true, message }` (no filtra existencia) — `400 "Missing email"` — `auth.ts:362`
- `POST /api/auth/login` — **público + rate limit** — — **body**: `identifier`, `password` — `200 { id, username, email, fullName, role, guestOnboardingStatus, schoolId, accessToken, ... }` — `400 "Missing identifier or password"`, `403 "Guest accounts cannot log in with password..."`, `401 "Invalid credentials"` — `auth.ts:404`
- `GET /api/auth/me` · `GET /api/me` — **autenticado** — — — `{ id, role, guestOnboardingStatus, schoolId, username, email, fullName }` — — `auth.ts:522` / `auth.ts:526`
- `GET /api/perfil/:username` — **autenticado** — param `username` — — `{ username, fullName, role, createdAt, avatarUrl, bio, tema, modulosCompletados:[{id,titulo,materia}], totalCompletados }` — `400 "username requerido"`, `404 "usuario no encontrado"` — `auth.ts:531`

### registro.ts

- `GET /api/registro/opciones` — **autenticado** — — — `{ grados, meses, tiposProfesor }` (constantes) — — `registro.ts:37`

### usuarios.ts

- `POST /api/usuarios` — **`requirePolicy("usuarios/create")`** (admin o school) — — **body**: `username`, `email`, `fullName`, `role`, `escuelaId?`, `birthdate?`, `password`, `consents?`, `passwordResetRequired?` — `201 { id }` — `403 "forbidden"`, `400 invalid payload` — `usuarios.ts:23`
- `GET /api/usuarios` — **`requirePolicy("usuarios/list")`** — query `limit` (1..100, def 20), `offset` — — `{ items:[{id,username,role,escuelaId}], limit, offset }` — `403 "forbidden"` — `usuarios.ts:104`
- `GET /api/usuarios/:id` — **`requirePolicy("usuarios/read")`** — param `id`, query `escuelaId?` — — `serializeUsuario(item, {access})` (access `admin`/`public`/`member`) — `400 "missing id"`, `400 "invalid id"`, `403 "forbidden"`, `404 "not found"` — `usuarios.ts:134`
- `GET /api/perfil` — **autenticado** — — — `{ id, username, email, fullName, role, escuelaId, createdAt, isBanned, warningCount, modulosCompletados:{publicos,privados,total}, hijos:[...] }` — `401 "not authenticated"`, `404 "not found"` — `usuarios.ts:205`

### escuelas.ts

- `POST /api/escuelas` — **ADMIN** (`requireAdmin`) — — **body**: `name`, `code`, `address`, `subscriptionStatus`, `plan` — `201 { id }` — `400 invalid payload` — `escuelas.ts:27`
- `GET /api/escuelas` — **autenticado** — query `limit` (1..100, def 20), `offset` — — `{ items, limit, offset }` — — `escuelas.ts:50`
- `GET /api/escuelas/code/:code` — **autenticado** — param `code` — — `{ id, name }` — `404 "not found"` — `escuelas.ts:63`
- `GET /api/escuelas/:id` — **autenticado** — param `id` — — objeto escuela — `400 "invalid id"`, `404 "not found"` — `escuelas.ts:72`
- `PATCH /api/escuelas/:id` — **autenticado; exige ADMIN** — param `id` — **body**: `plan?`, `subscriptionStatus?` — `{ ok:true }` — `400 "invalid id"`, `404 "not found"`, `403 "forbidden"` — `escuelas.ts:82`

### membresias.ts

- `GET /api/membresias/mis-escuelas` — **autenticado** — — — `{ items:[{escuelaId, nombre}] }` (estado "activa") — `401 "no autenticado"` — `membresias.ts:10`

### padres.ts

- `POST /api/hijos` — **autenticado** — — **body**: `nombre`, `usuario`, `cumple`, `grado`, `escuela?`, `notas?`, `permisosTareas`, `permisosMensajes` — `201/200 { ok:true, estado }` (`aprobado`/`pendiente`) — `401`, `404 "child not found"`, `409 "child already linked"`, `409 "child already has max parents"` — `padres.ts:73`
- `GET /api/padres/hijos/:id/limites` — **autenticado + `ensureParentAccess`** — param `id` — — `{ permisosTareas, permisosMensajes, notas }` — `400 "invalid child id"`, `404 "child not found"`, `403 "no link"`, `403 "approval required"` — `padres.ts:150`
- `PATCH /api/padres/hijos/:id/limites` — **autenticado + `ensureParentAccess`** — param `id` — **body**: `permisosTareas?`, `permisosMensajes?`, `notas?` — `{ ok:true, permisosTareas, permisosMensajes, notas }` — `400/404/403` (acceso) — `padres.ts:171`
- `GET /api/padres/hijos/:id/actividades` — **autenticado + `ensureParentAccess`** — param `id` — — `{ items:[{id, aulaId, aulaNombre, tipo, titulo, descripcion?, fecha, when}] }` — `400/404/403` — `padres.ts:212`
- `GET /api/padres/hijos/:id/boletin` — **autenticado + `ensureParentAccess`** — param `id` — — `{ materias:[{materia, promedio, evaluaciones:[...]}], total }` — `400/404/403` — `padres.ts:289`

### profesor.ts

> Router-level `requireUser`; cada handler exige `teacherId` derivado del usuario (`403 "forbidden"` si falta).

- `GET /api/profesor/menu` — **autenticado + teacherId** — — — `{ profile, nextClass, activeStudents, progressNextClass, kpiCards, weeklyPlan, quickLinks }` — `403 "forbidden"` — `profesor.ts:110`
- `GET /api/profesor/asistencia` — **autenticado + teacherId** — — — `[]` (sin modelo Prisma) — `403` — `profesor.ts:286`
- `GET /api/profesor/cursos` — **autenticado + teacherId** — — — `[]` — `403` — `profesor.ts:306`
- `GET /api/profesor/calificaciones` — **autenticado + teacherId** — — — `[]` — `403` — `profesor.ts:326`

### admin.ts

- `GET /api/admin/usuarios` — **ADMIN** — query `limit` (max 200, def 50), `offset`, `q?`, `role?` — — `[{id, nombre, username, email, rol, estado, isBanned, warningCount, createdAt}]` — `500` — `admin.ts:9`
- `GET /api/admin/usuarios/:id/modulos-completados` — **ADMIN** — param `id` — — `{ publicos, privados, total }` — `500` — `admin.ts:50`
- `PATCH /api/admin/usuarios/:id/rol` — **ADMIN; solo admin principal** — param `id` — **body**: `role` (ADMIN/USER/TEACHER/PARENT/DIRECTIVO/GUEST) — `{ ok:true, role }` — `400 "role inválido"`, `403 {error, requiresGovernance:true}`, `404 "usuario no encontrado"` — `admin.ts:82`
- `GET /api/admin/stats` — **ADMIN** — — — `{ totalUsuarios, escuelasActivas, modulosPublicos, eventosModeracion }` — `500` — `admin.ts:124`
- `GET /api/admin/reportes-global` — **ADMIN** — query `dias` (def 30) — — `{ registro, usuarios, topModulos, eventosModeracion }` — `500` — `admin.ts:139`
- `GET /api/admin/cursos` — **ADMIN** — — — `[]` (sin modelo Prisma) — — `admin.ts:213`
- `GET /api/materias` — **autenticado** — — — `{ items }` — `500` — `admin.ts:218`
- `GET /api/admin/materias` — **ADMIN** — — — `[{id, nombre, descripcion, nivel, activa}]` — `500` — `admin.ts:238`
- `POST /api/admin/materias` — **ADMIN** — — **body**: `nombre`, `descripcion?`, `nivel?` — `201 {id, nombre, descripcion, nivel, activa, ...}` — `400 "nombre is required"` — `admin.ts:262`
- `PATCH /api/admin/materias/:id` — **ADMIN** — param `id` — **body**: `nombre?`, `descripcion?`, `nivel?`, `activa?` — `{ ok:true }` — `400 "invalid id"`, `404 "not found"` — `admin.ts:285`

---

## Dominio: Aulas, feed y comunicación

Routers: `aulas.ts`, `aula-feed.ts`, `publicaciones.ts`, `moderacion.ts`, `calendario.ts`,
`mensajeria.ts`, `materiales.ts`, `resource-links.ts`, **`asistencia.ts`** 🆕, **`boletin.ts`** 🆕.

### aulas.ts

- `GET /api/aulas` — **`requirePolicy("aulas/list")`** — query `limit`, `offset`, `status` (CSV) — — `{ items, limit, offset }` — `400 "invalid status filter"`, `403 "forbidden"` — `aulas.ts:83`
- `GET /api/aulas/:id/historial` — **`requirePolicy("aulas/read")` + scope** — param `id`; query `limit`, `offset`, `startDate`, `endDate`, `changeType` (status|deletion) — — `{ items, limit, offset }` (auditoría) — `400 "invalid startDate/endDate/changeType"` — `aulas.ts:153`
- `GET /api/aulas/:id` — **`requirePolicy("aulas/read")` + scope** — param `id` — — objeto clase — `404 "not found"` — `aulas.ts:210`
- `POST /api/aulas` — **`requirePolicy("aulas/create")`** — — **body**: `id`, `name`, `status` (def ACTIVE), `classCode`, `category`/`subject`, `institutionId`/`schoolId` — `201 { id, classroomId }` — `400 "invalid classroom status"`, `400 "classCode only available for ACTIVE classrooms"`, `403 "limite de clases activas excedido"` — `aulas.ts:224`
- `PUT /api/aulas/:id` — **`requirePolicy("aulas/manage")` + scope (ADMIN/TEACHER)** — param `id` — **body**: `name`, `status`, `classCode`, `isDeleted`, `members`, `teacherId`, `teacherOfRecord` — `{ ok:true }` — `403 "classroom is read-only"`, `409 "invalid classroom status transition"`, `404 "not found"` — `aulas.ts:281`
- `PATCH /api/aulas/:id` — **`requirePolicy("aulas/manage")` + scope** — param `id` — **body**: igual a PUT — `{ ok:true }` — `409 "invalid classroom status[ transition]"`, `403 "classroom is read-only"`, `404` — `aulas.ts:366`
- `POST /api/aulas/:id/reasignar-profesor` — **scope + `requirePolicy("aulas/manage-classroom")`** — param `id` — **body**: `teacherId`/`newTeacherId`, `removeTeacherId` — `{ ok:true }` — `403 "teacher school mismatch"`, `400 "teacherId is required"/"teacher not found"/"teacher role invalid"/"classroom must keep at least one ADMIN and one TEACHER"`, `404` — `aulas.ts:452`
- `DELETE /api/aulas/:id` — **`requirePolicy("aulas/manage")` + scope** — param `id` — — `204` (soft delete) — `409 "delete blocked"` (`reasons[]`), `404` — `aulas.ts:558`
- `GET /api/admin/aulas` — **ADMIN** — query `limit`, `offset`, `includeDeleted`, `onlyDeleted` — — `{ items, limit, offset }` — — `aulas.ts:587`
- `DELETE /api/admin/aulas/:id` — **ADMIN** — param `id` — — `204` (soft delete + auditoría) — `404`, `409 "delete blocked"` — `aulas.ts:609`
- `GET /api/aulas/:id/modulos` — **autenticado** — param `id` — — `{ items:[{moduloId, assignedAt, required}] }` — `500` — `aulas.ts:648`
- `POST /api/aulas/:id/modulos` — **autenticado** — param `id` — **body**: `moduloId`, `required?` — `201 { ok:true }` — `400 "moduloId requerido"` — `aulas.ts:668`
- `POST /api/aulas/unirse` — **autenticado** — — **body**: `codigo` — `201 { ok:true, aulaId, nombre }` — `400 "código requerido"`, `404 "Aula no encontrada"`, `409 "Ya sos miembro de esta aula"` — `aulas.ts:692`
- `DELETE /api/aulas/:id/modulos/:moduloId` — **autenticado** — params `id`, `moduloId` — — `{ ok:true }` — `500` — `aulas.ts:726`

### aula-feed.ts

- `GET /api/aula/publicaciones` — **`requirePolicy("aula-feed/read")`** — query `classroomId` — — `{ items }` — `403`, `404 "classroom not found"`, `410 "classroom feed not available"` — `aula-feed.ts:71`
- `GET /api/aula/leaderboard` — **`requirePolicy("aula-feed/read")`** — query `classroomId` — — `{ items:[] }` (stub) — `403/404/410` — `aula-feed.ts:88`
- `GET /api/aula/actividades` — **`requirePolicy("aula-feed/read")`** — query `classroomId` — — `{ items:[{id, label, when, tipo, descripcion, fecha}] }` — `403/404/410` — `aula-feed.ts:101`
- `POST /api/aula/actividades` — **`requirePolicy("aula-feed/write")`** — — **body**: `classroomId`, `tipo` (clase|evaluacion|evento), `titulo`, `descripcion`, `fecha` — `201 { id, tipo, titulo, descripcion, fecha }` — `400 "...requeridos"`, `400 "tipo inválido"` — `aula-feed.ts:140`
- `DELETE /api/aula/actividades/:id` — **`requirePolicy("aula-feed/write")`** — param `id` — — `{ ok:true }` (soft delete) — — `aula-feed.ts:172`

### publicaciones.ts

- `GET /api/aulas/:id/publicaciones` — **`requirePolicy("publicaciones/read")` + scope** — param `id` — — `{ items }` — `403` — `publicaciones.ts:55`
- `POST /api/aulas/:id/publicaciones` — **rate limit + `requirePolicy("publicaciones/create")` + scope (ADMIN/TEACHER)** — param `id` — **body**: `contenido`, `title?`, `archivos[]?{name,size,type}`, `authorInitials?` — `201` objeto publicación — `400 "contenido requerido"`, `403 "classroom is read-only"`, `409 "invalid classroom status"` — `publicaciones.ts:79`
- `GET /api/aulas/:id/publicaciones/:pubId/comentarios` — **`requirePolicy("publicaciones/read")` + scope** — params `id`, `pubId` — — `{ items }` — `403`, `404 "publicacion not found"` — `publicaciones.ts:142`
- `POST /api/aulas/:id/publicaciones/:pubId/comentarios` — **rate limit + `requirePolicy("publicaciones/comment")` + scope (STUDENT)** — params `id`, `pubId` — **body**: `contenido` — `201` objeto comentario — `400 "contenido requerido"`, `403 "classroom is read-only"`, `404 "publicacion not found"` — `publicaciones.ts:179`

### moderacion.ts

> Router protegido por `requireAdmin` (`/api/moderacion/*`). Todos requieren ADMIN.

- `GET /api/moderacion/clases-publicas` — **ADMIN** — query `limit`, `offset` — — `{ items, limit, offset }` — — `moderacion.ts:16`
- `GET /api/moderacion/mensajes-reportados` — **ADMIN** — query `limit`, `offset` — — `{ items, limit, offset }` — — `moderacion.ts:31`
- `POST /api/moderacion/usuarios/:id/ban` — **ADMIN** — param `id` — **body**: `motivo`, `duracionDias` — `201 { ok:true, bannedUntil }` — `400 "invalid user id"` — `moderacion.ts:43`
- `POST /api/moderacion/usuarios/:id/advertencias` — **ADMIN** — param `id` — **body**: `motivo`, `severidad` — `201 { ok:true }` — `400 "invalid user id"` — `moderacion.ts:73`

### calendario.ts

- `GET /api/calendario/unificado` — **autenticado** — query `desde`, `hasta` (def mes actual) — — `{ eventos:[{id, tipo, titulo, descripcion, fechaInicio, fechaFin, origen, aulaId?, aulaNombre?, escuelaId?}], desde, hasta }` — `401` — `calendario.ts:21`
- `GET /api/calendario/escuela` — **autenticado** — query `desde`, `hasta` — — `{ items }` — — `calendario.ts:134`
- `POST /api/calendario/escuela` — **autenticado; DIRECTIVO/ADMIN/TEACHER** — — **body**: `tipo`, `titulo`, `descripcion`, `fechaInicio`, `fechaFin` — `201 { id, ok:true }` — `403 "forbidden"`, `400 "escuela requerida"`, `400 "...requeridos"` — `calendario.ts:156`
- `DELETE /api/calendario/escuela/:id` — **autenticado; DIRECTIVO/ADMIN** — param `id` — — `{ ok:true }` (soft delete) — `403 "sin permiso[ sobre este evento]"`, `404 "evento no encontrado"` — `calendario.ts:194`
- `POST /api/calendario/aula` — **autenticado; TEACHER/DIRECTIVO/ADMIN** — — **body**: `aulaId`, `tipo`, `titulo`, `descripcion`, `fechaInicio`, `fechaFin` — `201 { id, ok:true }` — `403`, `400 "...requeridos"` — `calendario.ts:225`
- `DELETE /api/calendario/aula/:id` — **autenticado; TEACHER/DIRECTIVO/ADMIN (creador)** — param `id` — — `{ ok:true }` (soft delete) — `403`, `404 "actividad no encontrada"` — `calendario.ts:261`

### mensajeria.ts

- `GET /api/mensajeria/hilos` — **autenticado** — — — `{ items:[{id, otroId, otroNombre, otroUsername, otroRol, ultimoMsg, ultimoAt, noLeidos}] }` — `401` — `mensajeria.ts:42`
- `GET /api/mensajeria/hilos/:hiloId` — **autenticado; miembro del hilo** — param `hiloId` — — `{ hilo, mensajes:[...] }` (marca leídos) — `401`, `404 "hilo no encontrado"`, `403 "sin acceso"` — `mensajeria.ts:100`
- `POST /api/mensajeria/hilos` — **autenticado; misma escuela** — — **body**: `destinatarioId`, `body` — `201 { hiloId, msgId, ok:true }` — `401`, `400 "...requeridos"`, `403 "Solo podés enviar mensajes a miembros de tu escuela."` — `mensajeria.ts:140`
- `GET /api/mensajeria/no-leidos` — **autenticado** — — — `{ mensajes, avisos, total }` — — `mensajeria.ts:209`
- `GET /api/mensajeria/avisos` — **autenticado; filtrado por rol** — — — `{ items:[...] }` — — `mensajeria.ts:245`
- `POST /api/mensajeria/avisos` — **autenticado; DIRECTIVO/TEACHER/ADMIN** — — **body**: `titulo`, `cuerpo`, `destino` (todos|padres|alumnos|profesores), `aulaId?` — `201 { id, ok:true }` — `401`, `403`, `400 "...requeridos"` — `mensajeria.ts:287`
- `POST /api/mensajeria/avisos/:id/leer` — **autenticado** — param `id` — — `{ ok:true }` — `401` — `mensajeria.ts:327`
- `GET /api/mensajeria/usuarios` — **autenticado** — query `q` — — `{ items:[{id, nombre, username, role}] }` — — `mensajeria.ts:340`

### materiales.ts

> **PLAN-P §5**: sección corregida/ampliada — la versión previa sólo cubría 2 de las 6 rutas reales
> y no distinguía que `compartir`/`download` operan sobre `Modulo`, no sobre el modelo `Material`.

- `GET /api/materiales` — **autenticado** — — — listado combinado: `Modulo` (tipo `"cuestionario"`) +
  `Material` (`materiales_guardados`) + `Libro` (tipo `"libro"`) propios o compartidos con la
  escuela — `403 "forbidden"` — `materiales.ts:51`
- `POST /api/materiales/:id/compartir` — **autenticado; solo owner** — param `id` — **body**:
  `scope` (`privado`/`escuela`/`publico`), `targetIds?` — `{ ok:true }` — cambia visibilidad de un
  **`Modulo`** (`prisma.modulo.updateMany`), no de un `Material` — `403 "forbidden"` — `materiales.ts:193`
- `GET /api/materiales/:id/download` — **autenticado; owner/admin/mismo-escuela-compartido** —
  param `id` — — descarga un **`Modulo`** como adjunto JSON — `403`, `404` — `materiales.ts:244`
- `POST /api/materiales/guardados` — **autenticado** — — **body**: `tipo` (∈ `MATERIAL_TIPOS`),
  `titulo`, `contenido` — `201 { id }` — crea `Material` + primera `MaterialVersion` (versión 1) —
  `400` tipo inválido — `materiales.ts:285`
- `POST /api/materiales/guardados/:id/versiones` — **autenticado; owner/admin** — param `id` —
  **body**: `contenido` — `{ ok:true, versionNumber }` — agrega versión nueva, nunca sobrescribe —
  `403`, `404` — `materiales.ts:336`
- `GET /api/materiales/guardados/:id` — **autenticado** — param `id` — — `{ id, tipo, titulo,
  contenido }` (de la versión actual, `currentVersionId`) — para reabrir en el editor de origen —
  `404` — `materiales.ts:380`

### asistencia.ts 🆕 (PLAN-A §3)

> Planilla de un aula: los miembros STUDENT (**excluyendo espejos-alumno** — no son "alumnos
> facturables"/reales del aula, `whereExcluirEspejos()`) con su registro de `Asistencia` de la
> fecha pedida, si existe.

- `GET /api/aulas/:id/asistencia` — **autenticado + `requireClassroomScope({allowMemberRoles:["ADMIN","TEACHER"], allowSchoolMatch:true})`** — param `id` — — planilla del aula con estado por alumno — `404 "aula no encontrada"` — `asistencia.ts:27`
- `PUT /api/aulas/:id/asistencia/:fecha` — **igual scope** — params `id`, `fecha` (`YYYY-MM-DD`) — **body**: `PlanillaAsistenciaUpsertSchema` (por alumno: `estado` presente\|ausente\|tarde\|justificado, `notas?`) — `{ ok:true }` — upsert **idempotente** por clave `(claseId, alumnoId, fecha)` — reenviar la misma planilla no duplica filas — `400 "fecha inválida (formato YYYY-MM-DD)"`, `404` — `asistencia.ts:84`

### boletin.ts 🆕 (PLAN-V §3)

- `GET /api/aulas/:id/boletin` — **autenticado + `requireClassroomScope({allowMemberRoles:"any", allowSchoolMatch:true})`** (staff del aula, o el propio alumno, o su padre vinculado) — param `id` — — boletín calculado (`computeBoletin`, función pura testeada): notas por materia a partir de `QuizAttempt` + resumen de `Asistencia`, agrupado por `ClasePeriodo` del aula — `404 "not found"` — `boletin.ts:30`

### resource-links.ts

- `GET /api/aulas/:aulaId/resource-links` — **`requirePolicy("resource-links/read")` + scope** — param `aulaId` — — `{ items }` (no-staff: solo visibility "publico") — `403 "forbidden"` — `resource-links.ts:33`
- `POST /api/aulas/:aulaId/resource-links` — **`requirePolicy("resource-links/write")` + scope (ADMIN/TEACHER)** — param `aulaId` — **body**: `ResourceLinkSchema` (server fija createdBy/schoolId/aulaId/createdAt/updatedAt) — `201 { id, resourceLinkId }` — `409 "invalid classroom status"`, `403 "classroom is read-only"/"forbidden"`, `400 invalid payload` — `resource-links.ts:66`
- `PUT /api/aulas/:aulaId/resource-links/:id` — **igual al POST** — params `aulaId`, `id` — **body**: `ResourceLinkUpdateSchema` (partial sin id/createdBy/schoolId/aulaId/createdAt) — `{ ok:true }` — `409/403/400`, `404 "not found"` — `resource-links.ts:124`
- `PATCH /api/aulas/:aulaId/resource-links/:id` — **igual** — params `aulaId`, `id` — **body**: partial — `{ ok:true }` — `409/403/400/404` — `resource-links.ts:173`
- `DELETE /api/aulas/:aulaId/resource-links/:id` — **igual** — params `aulaId`, `id` — — `204` — `409/403/400/404` — `resource-links.ts:222`

---

## Dominio: Contenido (libros, módulos, pages, progreso)

Routers: `libros.ts`, `modulos.ts`, `pages.ts`, `block-documents.ts`, `progreso.ts`, `tareas.ts`,
`pedagogico.ts`.

### libros.ts

> **PLAN-P §5**: agregadas `duplicar` y `visibility` (no existían en la pasada previa) y los
> query params reales de `GET /api/libros`; líneas corregidas contra el archivo actual (807 líneas).

- `POST /api/libros` — **autenticado** — — **body**: `book` (`book.metadata.id`,
  `book.metadata.title`), `createdAt?`, `updatedAt?` — `201 { id }` — crea si el `id` no existe
  (403 si no-staff); si existe y no es editable pero sí visible+compartido, dispara **copy-on-write**
  (clona en vez de bloquear) en lugar de sobrescribir — `visibility` del body sólo se aplica al crear
  — `400`, `403` — `libros.ts:265`
- `POST /api/libros/:id/duplicar` — **autenticado; requiere lectura** — param `id` — — `{ id }` —
  clona el libro, agrega " (copia)" al título, setea provenance — `403`, `404` — `libros.ts:436`
- `GET /api/libros` — **autenticado** — query `q`, `id`, `page`, `pageSize` (def 12, máx 50),
  `owner` (`mias`/`otros`/`todas`), `visibility` (`privado`/`escuela`/`publica`/`todas`) — —
  `{ items:[{id,title,createdAt,updatedAt}], page, pageSize, total, totalPages }` — `500` —
  `libros.ts:484`
- `GET /api/libros/:id` — **autenticado** — param `id` — — `{ ...doc, id, ownerUserId, visibility,
  schoolId, clonedFrom? }` — `404 "not found"` — `libros.ts:650`
- `PATCH /api/libros/:id/visibility` — **autenticado; sólo owner/admin** — param `id` — **body**:
  `visibility` (`privado`/`escuela`) — `{ ok:true }` — pasar a `"escuela"` exige que el requester
  tenga `schoolId` — `403`, `404` — `libros.ts:728`

### modulos.ts

> **PLAN-P §5**: líneas corregidas (el archivo pasó de módulo-solo a 1789 líneas tras C2) y
> agregadas las 8 rutas de "quiz standalone"/Tiza que faltaban por completo. Ver
> [`../modulos.md`](../modulos.md) para el modelo `Modulo`, invariantes de `applyModuleUpdate` e
> intentos.

- `GET /api/modulos/buscar` — **autenticado** (requireUser inline si `?mine=true`) — query `mine`, `limit`, `offset`, `query`, `createdBy`, `schoolId`, `visibility` (CSV publico/escuela/privado) — — `{ items, limit, offset }` — — `modulos.ts:209`
- `GET /api/modulos` — **autenticado** — query `limit`, `offset`, `aulaId` — — `{ items, limit, offset }` — — `modulos.ts:270`
- `GET /api/modulos/:id` — **autenticado** — param `id` — — `{ id, slug, title, description, visibility, schoolId, dependencies, createdBy, createdAt, updatedAt, teoriaId, quizzes:[...] }` (preguntas sanitizadas si el requester no es dueño/staff; **sin campo `status`** — no hay ciclo publicado/borrador implementado) — `404 "not found"` — `modulos.ts:338`
- `POST /api/modulos/:id/duplicar` — **autenticado; dueño o staff** — param `id` — — `{ id }` — clona el módulo completo (deep clone, incl. quizzes) — `403`, `404` — `modulos.ts:703`
- `POST /api/modulos` — **autenticado** — — **body**: `ModuleSchema` (`title`, `description`, `visibility`, `schoolId`, `createdBy`, `dependencies`, `aulaId`, `subject`, `quizzes:[...]`) — `201 { id, moduleId }` — `400 invalid payload` + guard de aula escribible — `modulos.ts:766`
- `PUT /api/modulos/:id` — **autenticado** — param `id` — **body**: `ModuleUpdateSchema` (partial) — `{ ok:true }` — vía `applyModuleUpdate` (invariantes en [`../modulos.md`](../modulos.md#applymoduleupdate)), con copy-on-write si no puede editar el original — `404`, `400 {error:"validation", issues}` — `modulos.ts:1165`
- `PATCH /api/modulos/:id` — **autenticado** — param `id` — **body**: partial — `{ ok:true }` — mismo `applyModuleUpdate` que PUT — `404`, `400 validation` — `modulos.ts:1252`
- `DELETE /api/modulos/:id` — **autenticado** — param `id` — — `204` — **hard delete** (`deleteMany`) pese a que `Modulo.isDeleted` existe como columna — `404 "not found"` — `modulos.ts:1330`
- `GET /api/quizzes/:quizId/meta` — **autenticado** — param `quizId` — — `{ title, type, visibility, ...config de evaluación }` — metadata liviana para el editor "Tiza" — `404` — `modulos.ts:1438`
- `PATCH /api/quizzes/:quizId/meta` — **autenticado** — param `quizId` — **body**: partial — `{ ok:true }` — update read-modify-write, **no** crea `QuizVersion` nueva (a diferencia de PUT/PATCH módulo) — `404` — `modulos.ts:1463`
- `GET /api/quizzes` — **autenticado; staff** — — — `{ items:[...] }` — quizzes standalone (`moduleId: null`) del propio docente — `modulos.ts:1528`
- `POST /api/quizzes` — **autenticado; staff** — — **body**: `title?` — `201 { id }` — crea un quiz standalone vacío — `modulos.ts:1558`
- `POST /api/quizzes/:quizId/usar-en-modulo` — **autenticado** — param `quizId` — **body**: `moduleId` — `201 { id }` — **clona** el quiz (suelto o de otro módulo) dentro del módulo destino; el original standalone queda intacto y reusable — `404` — `modulos.ts:1619`
- `DELETE /api/quizzes/:quizId` — **autenticado** — param `quizId` — — `{ ok:true }` — soft-delete (`isActive:false`), nunca borra la fila — `404` — `modulos.ts:1696`
- `GET /api/quizzes/:quizId/preguntas` — **autenticado** — param `quizId` — — `CuestionarioPreguntas` (formato nativo Tiza, leído de `settings.preguntas`) — `404` — `modulos.ts:1720`
- `PUT /api/quizzes/:quizId/preguntas` — **autenticado** — param `quizId` — **body**: `CuestionarioPreguntas` — `{ ok:true }` — valida pero no bloquea el guardado ante warnings — `400`, `404` — `modulos.ts:1744`

### pages.ts

> **Público** (montado antes de `requireUser`).

- `POST /api/pages` — **público** — — **body**: `TuesdayProjectSchema` (`id?`, `title?`) — `201 { id }` — `400 invalid payload` — `pages.ts:10`
- `GET /api/pages` — **público** — query `q`, `page`, `pageSize` — — `{ items:[{id,title,createdAt}], page, pageSize, total, totalPages }` — `500` — `pages.ts:28`
- `GET /api/pages/:id` — **público** — param `id` — — registro page — `404 "not found"` — `pages.ts:56`

### block-documents.ts

- `GET /api/block-documents/:id` — **autenticado** — param `id` — — `{ id, schema_version, document, created_at, updated_at }` — `404 "not found"` — `block-documents.ts:15`
- `POST /api/block-documents` — **autenticado** — — **body**: `document` — `201 { id }` — `400 "document is required"` — `block-documents.ts:36`
- `PATCH /api/block-documents/:id` — **autenticado** — param `id` — **body**: `document?` — `{ id, updated_at }` — `404 "not found"` — `block-documents.ts:63`

### progreso.ts

- `POST /api/progreso` — **`requirePolicy("progreso/write")`** (propio o staff) — — **body**: `usuarioId`, `moduloId`, `status?`, `aulaId?` — `201/200 { ok:true }` — `401`, `403 "forbidden"`, `400 invalid payload` — `progreso.ts:100`
- `GET /api/progreso` — **`requirePolicy("progreso/read")`** (propio o staff) — query `usuarioId`, `aulaId?` — — `{ items, unlocks:[{moduloId, isLocked, missingDependencies}] }` — `400 "usuarioId is required"`, `401`, `403` — `progreso.ts:152`
- `GET /api/progreso/estudiante` — **autenticado** — — — `{ avances:[{id, modulo, progreso}], sugerencia:{titulo, mensaje} }` — `401` — `progreso.ts:210`
- `GET /api/progreso/hijos` — **autenticado (PARENT)** — — — `[{id, nombre, usuario, grado, progresoGeneral, modulos:[...]}]` — `401 "parent not authenticated"` — `progreso.ts:259`
- `GET /api/progreso/hijos/:id` — **autenticado (PARENT + vínculo)** — param `id` — — `{id, nombre, usuario, grado, progresoGeneral, modulos:[...]}` — `400 "invalid child id"`, `404 "child not found"`, `403 "no link"/"approval required"` — `progreso.ts:350`
- `PATCH /api/progreso/:moduloId` — **`requirePolicy("progreso/write")`** (solo propio) — param `moduloId`, query `aulaId` — **body**: `ProgressUpdateSchema` (rechaza `usuarioId` ajeno) — `{ ok:true }` — `401`, `403`, `404` — `progreso.ts:420`

### tareas.ts

- `GET /api/tareas` — **autenticado** — — — `[{id, titulo, curso, vence}]` — `401 "not authenticated"` — `tareas.ts:7`

### pedagogico.ts

> Staff = TEACHER/DIRECTIVO/ADMIN.

- `GET /api/pedagogico/umbral/:quizId` — **autenticado** — param `quizId` — — `{ umbral }` (def 60) — — `pedagogico.ts:20`
- `POST /api/pedagogico/umbral` — **autenticado + staff** — — **body**: `quizId`, `moduloId`, `umbral` (0-100) — `{ ok:true, umbral }` — `403 "solo profesores"`, `400 "...requeridos"`, `400 "umbral debe ser entre 0 y 100"` — `pedagogico.ts:29`
- `GET /api/pedagogico/riesgo/:aulaId` — **autenticado + staff** — param `aulaId` — — `{ items:[{alumnoId, nombre, porcentajeProgreso, intentosFallidos, enRiesgo, modulosCompletados, modulosTotal}], aulaId }` — `403`, `404 "aula no encontrada"` — `pedagogico.ts:61`
- `POST /api/pedagogico/desbloquear` — **autenticado + staff** — — **body**: `moduloId`, `alumnoId`, `aulaId`, `motivo?` — `201 { id, ok:true }` — `403 "solo profesores"/"sin permiso sobre esta aula"/"el alumno no pertenece a esta aula"`, `400 "...requeridos"`, `404` — `pedagogico.ts:136`
- `GET /api/pedagogico/modo-aula/:aulaId` — **autenticado** — param `aulaId` — — `{ activo, restricciones[], aulaId, activadoAt? }` — — `pedagogico.ts:225`
- `POST /api/pedagogico/modo-aula` — **autenticado + staff** — — **body**: `aulaId`, `activo?`, `restricciones?` (def "tienda,economia") — `{ ok:true, activo, restricciones[] }` — `403`, `400 "aulaId requerido"` — `pedagogico.ts:243`

---

## Dominio: Quiz, banco, generadores y consignas

Routers: `quiz-attempts.ts`, `quiz-banco.ts`, `generators.ts`, `generadores-admin.ts`,
`admin-generators.ts`, `consignas.ts`, `suggestions.ts`.

### quiz-attempts.ts

- `POST /api/quiz-attempts` — **autenticado + `requireEnterpriseFeature(QUIZZES)` + `requireActiveInstitutionBenefit`** — — **body**: `quizId`, `moduleId?`, `params?` — `201 { id, attemptId }` — `404 "quiz not found"`, `401 "user not found"`, `400 "Este quiz no tiene una versión válida..."` — `quiz-attempts.ts:325`
- `GET /api/quiz-attempts/:id` — **autenticado + QUIZZES + benefit** — param `id` — — `{ id, attemptId, moduleId, quizId, quizTitle, status, questions, answers, feedback, quiz, generatorId, seed, count, instructions, displayCount, quizType }` — `400 "invalid attempt id"`, `401`, `404 "attempt not found"` — `quiz-attempts.ts:400`
- `POST /api/quiz-attempts/:id/submit` — **autenticado + QUIZZES + benefit** — param `id` — **body**: `answers` — `{ status, score, maxScore, porcentaje, aprobado, umbral, message }` — `400 "invalid attempt id"`, `401`, `404 "attempt/quiz not found"` — `quiz-attempts.ts:447`
- `POST /api/quiz-attempts/:id/competencia` — **autenticado** — param `id` — **body**: `score`, `tiempoSeg`, `maxScore?`, `quizId?`, `moduloId?`, `aulaId?` — `201 { id, ok:true }` — `401 "not authenticated"`, `400 "score y tiempoSeg requeridos"` — `quiz-attempts.ts:564`
- `GET /api/quiz-attempts/competencia/:quizId/ranking` — **autenticado** — param `quizId`, query `aulaId` — — `{ quizId, aulaId, ranking:[{posicion, usuarioId, nombre, score, maxScore, tiempoSeg, completadoAt}] }` — — `quiz-attempts.ts:606`

### quiz-banco.ts

- `GET /api/quizzes/banco` — **autenticado** — query `origen` (admin/escuela/todos), `materia`, `q`, `limit`, `offset` — — `{ items:[{quizId, title, materia, tipo, origen, questionCount, generatorId, previewQuestions:[...]}], total }` — `500` — `quiz-banco.ts:43`
- `GET /api/quizzes/banco/:quizId/questions` — **autenticado** (admin público o escuela del usuario) — param `quizId` — — `{ quizId, title, questions, generatorId?, generatorVersion?, params?, count? }` — `404 "Quiz not found"/"No version found"`, `403 "Access denied"` — `quiz-banco.ts:157`

### generators.ts

> **Público** (montado antes de `requireUser`).

- `GET /api/generators` — **público** (solo status ACTIVE) — — — `{ items:[{id, materia, label, description, subtipos:[{id, label, tieneGrafico, variablesDisponibles}], enunciadosPersonalizados?}] }` — `500` — `generators.ts:42`
- `GET /api/generators/:category/:name/docs` — **público** — params `category`, `name` — — doc del generador — `404 "not found"` — `generators.ts:88`
- `GET /api/generators/:category/:name` — **público** — params `category`, `name` — — `{id, materia, label, description, version, subtipos, enunciados, limits, variables_schema, status}` — `404 "not found"` — `generators.ts:104`

### generadores-admin.ts

> Todas con `requireAdmin`.

- `GET /api/admin/generadores` — **ADMIN** — — — `{ subjects }` — — `generadores-admin.ts:18`
- `GET /api/admin/generadores/:subject` — **ADMIN** — param `subject` — — `{ subject, items:[{topic, subject, source, status, hasOverride, updatedAt}] }` — `400 "subject inválido"` — `generadores-admin.ts:26`
- `GET /api/admin/generadores/:subject/:tema` — **ADMIN** — params `subject`, `tema` — — `{ topic, subject, override, status }` — `400 "subject inválido"` — `generadores-admin.ts:67`
- `PATCH /api/admin/generadores/:subject/:tema/status` — **ADMIN** — params `subject`, `tema` — **body**: `status` (ACTIVE|INACTIVE) — `{ ok:true, topic, subject, status }` — `400 "subject inválido"/"status debe ser ACTIVE o INACTIVE"` — `generadores-admin.ts:92`
- `PUT /api/admin/generadores/:subject/:tema` — **ADMIN** — params `subject`, `tema` — **body**: `enunciado?`, `limits?`, `status?` (al menos uno) — `{ ok:true, topic, subject }` — `400 "subject inválido"/"se requiere al menos uno de: enunciado, limits, status"` — `generadores-admin.ts:124`
- `DELETE /api/admin/generadores/:subject/:tema` — **ADMIN** — params `subject`, `tema` — — `{ ok:true }` — `400 "subject inválido"` — `generadores-admin.ts:171`

### admin-generators.ts

> Todas con `requireAdmin`.

- `GET /api/admin/generators` — **ADMIN** (incluye INACTIVE) — — — `{ items:[{id, materia, label, description, version, subtipos, enunciados, status}] }` — `500` — `admin-generators.ts:12`
- `PATCH /api/admin/generators/:id` — **ADMIN** — param `id` — **body**: `label?`, `description?`, `status?` (ACTIVE/INACTIVE), `subtipos?`, `enunciados?` ({subtipo:template}) — generador actualizado — `404 "not found"`, `400 "enunciados debe ser un objeto..."/"cada template... debe ser un string"/"nada que actualizar"` — `admin-generators.ts:32`
- `GET /api/admin/generators/:id/changelog` — **ADMIN** — param `id` — — `{ items }` (últimos 20) — `500` — `admin-generators.ts:79`
- `POST /api/admin/generators/:id/changelog` — **ADMIN** — param `id` — **body**: `note`, `admin_id?` — `201` entry — `400 "note requerido"` — `admin-generators.ts:94`

### consignas.ts

> **Público**. Subjects registrados: `economia, quimica, matematicas, fisica, geografia, historia, lengua_espanola, lengua_inglesa`.

- `GET /api/consignas/:subject` — **público** — — — `string[]` (temas) — `500 "no se pudo listar consignas de <subject>"` — `consignas.ts:203`
- `GET /api/consignas/:subject/:tema` — **público** — param `tema` (`^\d{2}_[A-Za-z0-9_]+$`) — — quimica → array; otros → `{ limits, enunciado, consigna }` — `400 "tema invalido"`, `404 "enunciados no encontrados"` — `consignas.ts:212`
- `GET /api/consignas/:subject/:tema/v2` — **público** — param `tema` — — `{ topic, subject, limits, enunciado, meta }` — `400 "tema invalido"`, `404 "enunciados no encontrados"` — `consignas.ts:230`

### suggestions.ts

- `POST /api/suggestions` — **autenticado** — — **body**: `suggestion_type` (ERRATA/MEJORA/CONTENIDO), `target_type?` (generator/module), `target_id?`, `title`, `body` — `201 { id }` — `400 "suggestion_type inválido..."/"title es requerido"/"body es requerido"/"target_type inválido..."`, `401 "user not found"` — `suggestions.ts:21`
- `GET /api/suggestions` — **ADMIN** — query `status`, `target_type`, `limit`, `offset` — — `{ items, total }` — `500` — `suggestions.ts:70`
- `PATCH /api/suggestions/:id` — **ADMIN** — param `id` — **body**: `status` (REVIEWED/DISCARDED/PINNED), `admin_note?` — `{ ok:true }` — `400 "status inválido..."`, `401 "admin not found"`, `404 "not found"` — `suggestions.ts:97`

---

## Dominio: VBLang (plantillas, fórmulas y datasets)

Routers: `plantillas.ts`, `vblang-datasets.ts`, **`formulas.ts`** 🆕.

### plantillas.ts

- `POST /api/plantillas/batch` — **autenticado** (filtra por canRead) — — **body**: `ids: string[]` (máx 200) — `{ items:[{id, nombre, materia, version}] }` — `400 "Body debe ser { ids: string[] }"` — `plantillas.ts:92`
- `GET /api/plantillas` — **autenticado** (vacío si no staff) — query `q`, `materia`, `visibility` (todas/privadas/publicas/escuela), `owner` (todas/mias/otros), `limit`, `offset` — — `{ items, total }` — `500` — `plantillas.ts:128`
- `GET /api/plantillas/:id` — **autenticado + canRead** — param `id` — — detail (`...listItem, codigoDsl`) — `404 "Plantilla no encontrada"`, `403 "Sin permisos para ver esta plantilla"` — `plantillas.ts:241`
- `POST /api/plantillas` — **autenticado + staff** — — **body**: `nombre`, `descripcion?`, `materia?`, `tags?`, `codigoDsl`, `visibility` — `201` detail — `403 "Solo creadores de contenido..."`, `400 {error:"Datos inválidos", issues}`, `400 {error:"Código DSL inválido", dslError:{message,line,col}}` — `plantillas.ts:267`
- `PUT /api/plantillas/:id` — **autenticado + owner o ADMIN** — param `id` — **body**: `nombre?`, `descripcion?`, `materia?`, `tags?`, `codigoDsl?`, `visibility?`, `changelog?` — detail — `404`, `403 "Solo el owner o ADMIN..."`, `400 {error:"Datos inválidos"/"Código DSL inválido"}` — `plantillas.ts:337`
- `DELETE /api/plantillas/:id` — **autenticado + owner o ADMIN** — param `id` — — `{ ok:true }` (soft delete) — `404`, `403` — `plantillas.ts:417`
- `POST /api/plantillas/:id/fork` — **autenticado + staff + canRead** — param `id` — **body**: `nombre?`, `visibility?` — `201` detail — `403`, `404`, `400 {error:"Datos inválidos"}` — `plantillas.ts:444`
- `GET /api/admin/plantillas/pendientes` — **ADMIN** — query `limit`, `offset` — — `{ items, total }` — `403 "Solo ADMIN"` — `plantillas.ts:516`
- `POST /api/admin/plantillas/:id/aprobar` — **ADMIN** — param `id` — — detail — `403`, `404`, `400 "solo se pueden aprobar plantillas públicas"/"ya está aprobada"` — `plantillas.ts:569`
- `POST /api/admin/plantillas/:id/rechazar` — **ADMIN** — param `id` — — detail (baja a visibility="escuela") — `403`, `404`, `400 "solo se pueden rechazar plantillas públicas"` — `plantillas.ts:614`
- `GET /api/plantillas/:id/versions` — **autenticado + canRead** — param `id` — — `[{id, version, changelog, codigoDsl, createdAt, createdBy}]` — `404`, `403` — `plantillas.ts:654`

### vblang-datasets.ts

- `GET /api/vblang/datasets` — **autenticado** (vacío si no staff) — query `q`, `visibility`, `owner`, `limit`, `offset` — — `{ items:[{id, nombre, descripcion, visibility, ownerUserId, schoolId, columnas, filasCount, createdAt, updatedAt}], total }` — `500` — `vblang-datasets.ts:71`
- `GET /api/vblang/datasets/by-name/:nombre` — **autenticado** (scope propio + escuela + pública) — param `nombre` — — `{ filas:[{datos}] }` — `404 'Dataset "<nombre>" no encontrado'` — `vblang-datasets.ts:179`
- `GET /api/vblang/datasets/:id` — **autenticado + canReadDataset** — param `id` — — `{id, nombre, descripcion, visibility, ownerUserId, schoolId, columnas, filas:[{id, datos}], createdAt, updatedAt}` — `404 "Dataset no encontrado"`, `403 "Sin permisos para ver este dataset"` — `vblang-datasets.ts:227`
- `POST /api/vblang/datasets` — **autenticado + staff** — — **body**: `nombre`, `descripcion?`, `visibility`, `columnas`, `filas?` — `201` dataset — `403 "Solo creadores de contenido..."`, `400 {error:"Datos inválidos", issues}`, `400 {error:"Filas inválidas", filaIndex, message}`, `400 "Ya existe un dataset con ese nombre"` — `vblang-datasets.ts:267`
- `PUT /api/vblang/datasets/:id` — **autenticado + owner o ADMIN** — param `id` — **body**: `nombre?`, `descripcion?`, `visibility?`, `columnas?` — dataset — `404`, `403`, `400 {error:"Datos inválidos"}` — `vblang-datasets.ts:358`
- `POST /api/vblang/datasets/:id/filas` — **autenticado + owner o ADMIN** — param `id` — **body**: `filas` — `201 { ok:true, added }` — `404`, `403`, `400 {error:"Datos inválidos"/"Filas inválidas"}` — `vblang-datasets.ts:407`
- `PUT /api/vblang/datasets/:id/filas/:filaId` — **autenticado + owner o ADMIN** — params `id`, `filaId` — **body**: `datos` — `{id, orden, datos}` — `404 "Dataset/Fila no encontrad(a)"`, `403`, `400 {error:"Datos inválidos"/"Fila inválida"}` — `vblang-datasets.ts:467`
- `DELETE /api/vblang/datasets/:id/filas/:filaId` — **autenticado + owner o ADMIN** — params `id`, `filaId` — — `{ ok:true }` — `404`, `403` — `vblang-datasets.ts:524`
- `DELETE /api/vblang/datasets/:id` — **autenticado + owner o ADMIN** — param `id` — — `{ ok:true }` (soft delete) — `404`, `403` — `vblang-datasets.ts:563`

### formulas.ts 🆕 (PLAN-E §19)

> CRUD mínimo espejo de `vblang-datasets.ts` pero sin filas ni versiones: una fórmula es
> nombre + LaTeX + materia. Mismo scoping que datasets (mías + escuela + públicas); las globales
> se siembran con `ownerUserId: "system"` y `visibility: "publica"` (`seed_demo.ts`).

- `GET /api/formulas` — **autenticado** (vacío si no staff, `isStaffRole`) — query `q?`, `materia?` — — `{ items:[...formula] }` — — `formulas.ts:67`
- `POST /api/formulas` — **autenticado + staff** — — **body**: `nombre`, `materia?`, `latex`, `descripcion?`, `visibility` (privada\|escuela\|publica) — `201` fórmula — `400 invalid payload` — `formulas.ts:124`
- `PUT /api/formulas/:id` — **autenticado + owner o ADMIN** — param `id` — **body**: `FormulaUpdateSchema` (partial) — fórmula actualizada — `404`, `403`, `400` — `formulas.ts:167`
- `DELETE /api/formulas/:id` — **autenticado + owner o ADMIN** — param `id` — — `{ ok:true }` (soft delete) — `404`, `403` — `formulas.ts:212`

---

## Dominio: Economía, tienda e instrumentos

Routers: `economia.ts`, `tienda.ts`, `instrumentos.ts`, `beneficios.ts`. Las mutaciones de economía
tienen rate-limiters específicos; varias acciones de alto riesgo (intercambios, exámenes) usan un
limitador adicional.

### economia.ts

- `GET /api/economia/config` — **autenticado** — — — config (`id, moneda, tasas, limites, inflacion, hiperinflacion, deflacion, rankingFactors, updatedAt`) — — `economia.ts:432`
- `PATCH /api/economia/config` — **ADMIN** — — **body**: `ConfigUpdateSchema` (partial de moneda/tasas/limites/inflacion/hiperinflacion/deflacion/rankingFactors) — config validada — `400 invalid payload` — `economia.ts:437`
- `GET /api/economia/recompensas` — **autenticado** — query `tipo` (modulo|tarea|bonus) — — `{ items:[...recompensa, montoAjustado], ajuste:{...} }` — — `economia.ts:465`
- `POST /api/economia/recompensas` — **`requirePolicy("economia/mint")`** — — **body**: `RecompensaSchema` (incl. `tipo`, `monto`, ...) — `201 { id }` — `400 invalid payload` — `economia.ts:492`
- `PUT /api/economia/recompensas/:id` · `PATCH .../:id` — **`requirePolicy("economia/mint")`** — param `id` — **body**: `RecompensaUpdateSchema` (partial) — `{ ok:true }` — `404 "not found"`, `400` — `economia.ts:519` / `:538`
- `DELETE /api/economia/recompensas/:id` — **`requirePolicy("economia/mint")`** — param `id` — — `204` — `404 "not found"` — `economia.ts:557`
- `GET /api/economia/saldos` — **autenticado + checkModoAula("economia")** — query `usuarioId` — — `{...saldo, usuarioId, ajuste:{...}}` o default — `400 "usuarioId is required"` — `economia.ts:578`
- `PATCH /api/economia/saldos/:usuarioId` — **ADMIN + `requirePolicy("economia/mint")`** — param `usuarioId` — **body**: `SaldoManualUpdateSchema` {saldo≥0, moneda?, motivo, referenciaId, aulaId, schoolId} — `200/201 { ok:true }` — `400 "usuarioId is required"/"motivo debe indicar modulo, quiz o tarea"/"referencia educativa invalida..."`, `404 "aula not found"`, `403 "schoolId mismatch"/"usuario no pertenece al aula"` — `economia.ts:605`
- `GET /api/economia/transacciones` — **autenticado** — query `usuarioId`, `limit` (1-100, def 20), `offset` — — `{ items, limit, offset }` — `400 "usuarioId is required"` — `economia.ts:729`
- `POST /api/economia/transacciones` — **`requirePolicy("economia/mint")`** — — **body**: `TransaccionSchema` {usuarioId, aulaId, schoolId, tipo (credito|debito), monto, moneda?, motivo, referenciaId?} — `201 { id, saldo }` — `400 "moneda invalida"/"referenciaId is required for creditos"/"limite de recompensa[ diaria] excedido"/"limite de emision diaria excedido"/"saldo insuficiente"`, aula checks `404/400/403` — `economia.ts:745`
- `POST /api/economia/intercambios` — **autenticado (alto riesgo)** — — **body**: `IntercambioCreateSchema` {aulaId, schoolId, creadorId, receptorId, monto>0, moneda?} — `201 { id, moderacion:{estado, updatedAt} }` — `403 "creadorId no coincide..."`, `400 "receptorId debe ser distinto..."/"saldo insuficiente"`, `429 "limite diario de intercambios excedido"/"cooldown activo..."` — `economia.ts:877`
- `POST /api/economia/intercambios/:id/aceptar` — **`requirePolicy("economia/mint")` (alto riesgo)** — param `id` — — `{ ok:true }` — `404 "intercambio not found"`, `400 "intercambio no disponible"/"saldo insuficiente en creador"`, `403 "intercambio pendiente de moderacion"/"solo el receptor puede aceptar"` — `economia.ts:989`
- `POST /api/economia/intercambios/:id/cancelar` — **autenticado (alto riesgo)** — param `id` — — `{ ok:true }` — `404`, `400 "intercambio no disponible"`, `403 "no autorizado a cancelar"` — `economia.ts:1091`
- `POST /api/economia/intercambios/:id/moderar` — **`requirePolicy("economia/moderate-intercambios")` (alto riesgo)** — param `id` — **body**: `estado` (aprobado|bloqueado), `motivo?` — `{ ok:true }` — `404`, `403 "forbidden"` — `economia.ts:1119`
- `POST /api/economia/compras` — **`requirePolicy("economia/compras")`** — — **body**: `CompraCreateSchema` {usuarioId, aulaId, schoolId, concepto, monto>0, moneda?} — `201 { id, saldo }` — `400 "usuarioId is required"/"saldo insuficiente"`, aula checks — `economia.ts:1173`
- `GET /api/economia/modulos` — **autenticado** — query `moduloId` — — `{ items }` — — `economia.ts:1247`
- `PUT /api/economia/modulos/:moduloId` — **autenticado** — param `moduloId` — **body**: `ModuloEconomiaUpdateSchema` (`activo`) — `{ ok:true }` — `400` — `economia.ts:1254`
- `GET /api/economia/examenes` — **autenticado** — query `estado` — — `{ items:[...examen, precioPromedioAjustado], ajuste:{...} }` — — `economia.ts:1274`
- `POST /api/economia/examenes` — **autenticado (alto riesgo)** — — **body**: `ExamenEconomiaSchema` (aulaId, maxCompra def 2, impuestoTasa def 0.1, ...) — `201 { id }` — `400 invalid payload` — `economia.ts:1301`
- `PATCH /api/economia/examenes/:id` — **autenticado (alto riesgo)** — param `id` — **body**: partial — `{ ok:true }` — `404 "not found"` — `economia.ts:1329`
- `GET /api/economia/examenes/:id/pujas` — **autenticado** — param `id`, query `usuarioId` — — `{ items }` — — `economia.ts:1352`
- `POST /api/economia/examenes/:id/pujas` — **autenticado (alto riesgo)** — param `id` — **body**: `PujaExamenCreateSchema` (usuarioId, puntos, montoPorPunto, aulaId?) — `201 { id }` — `404 "examen not found"`, `400 "subasta inactiva"/"examen vencido"/"limite de compra excedido"/"saldo insuficiente"` — `economia.ts:1364`
- `GET /api/economia/examenes/puntos` — **autenticado** — query `usuarioId` — — puntos o default — `400 "usuarioId is required"` — `economia.ts:1420`
- `POST /api/economia/examenes/:id/cerrar` — **`requirePolicy("economia/mint")`** — param `id` — — `{ ok:true }` — `404`, `400 "aulaId is required"/"classroom schoolId missing"` — `economia.ts:1438`
- `GET /api/economia/eventos` — **autenticado** — — — `{ items }` — — `economia.ts:1620`
- `POST /api/economia/eventos` — **autenticado** — — **body**: `EventoEconomicoSchema` — `201 { id }` — `400` — `economia.ts:1628`
- `PATCH /api/economia/eventos/:id` — **autenticado** — param `id` — **body**: partial — `{ ok:true }` — `404` — `economia.ts:1650`
- `DELETE /api/economia/eventos/:id` — **ADMIN** — param `id` — — `204` — `404` — `economia.ts:1664`
- `GET /api/admin/economia/recompensas` — **ADMIN** — query `tipo`, `includeDeleted`, `onlyDeleted` — — `{ items }` — — `economia.ts:1680`
- `DELETE /api/admin/economia/recompensas/:id` — **ADMIN** — param `id` — — `204` — `404` — `economia.ts:1700`
- `GET /api/admin/economia/eventos` — **ADMIN** — query `includeDeleted`, `onlyDeleted` — — `{ items }` — — `economia.ts:1716`
- `DELETE /api/admin/economia/eventos/:id` — **ADMIN** — param `id` — — `204` — `404` — `economia.ts:1732`
- `GET /api/admin/economia/validacion` — **ADMIN** — query `applyDefaults` — — `{ generadoEn, applyDefaults, resumen, defaultsApplied, totalInconsistencias, inconsistencias }` — — `economia.ts:1748`
- `GET /api/economia/riesgo` — **autenticado** — query `aulaId` — — riesgo o default — `400 "aulaId is required"` — `economia.ts:1886`
- `PUT /api/economia/riesgo/:aulaId` · `PATCH .../:aulaId` — **autenticado** — param `aulaId` — **body**: `EconomiaRiesgoCursoSchema` {riesgoBase, riesgoMercado, riesgoCredito} (PATCH: partial) — `{ ok:true }` — `400` — `economia.ts:1902` / `:1925`
- `GET /api/economia/metricas` — **autenticado** — query `aulaId`, `desde`, `hasta` — — `{ periodo, aulaId, inflacion:{...}, volumenSubastas, dineroQuemado }` — — `economia.ts:1965`
- `GET /api/economia/ciclo-activo` — **autenticado** — — — `{ ciclo, ajuste }` — `500` — `economia.ts:2011`
- `GET /api/economia/proximos-ciclos` — **autenticado** — — — `{ ciclos }` — `500` — `economia.ts:2024`

### tienda.ts

- `GET /api/tienda` — **autenticado** — query `tipo` — — `{ items }` — — `tienda.ts:13`
- `GET /api/tienda/mis-items` — **autenticado** — — — `{ items:[{item_id, comprado_at, origen, tipo, nombre, asset_id}] }` — `401 "no autenticado"` — `tienda.ts:24`
- `POST /api/tienda/comprar` — **autenticado + checkModoAula("tienda")** — — **body**: `itemId` — `201 { ok:true, gratis? | saldoRestante }` — `401`, `400 "itemId requerido"`, `404 "item no encontrado"`, `409 "ya tenés este item"`, `400 {error:"saldo_insuficiente", saldo, precio, mensaje}` — `tienda.ts:49`
- `POST /api/tienda/items` — **ADMIN** — — **body**: `tipo`, `nombre`, `descripcion?`, `precio?`, `assetId?`, `previewCss?`, `orden?` — `201 { id, ok:true }` — `400 "tipo y nombre requeridos"` — `tienda.ts:121`
- `PATCH /api/tienda/items/:id` — **ADMIN** — param `id` — **body**: `nombre?`, `descripcion?`, `precio?`, `activo?`, `orden?` — `{ ok:true }` — `400 "nada que actualizar"` — `tienda.ts:151`

### instrumentos.ts

- `GET /api/instrumentos/plazo-fijo` — **autenticado** — — — `{ items }` (últimos 20) — `401` — `instrumentos.ts:27`
- `POST /api/instrumentos/plazo-fijo` — **autenticado** — — **body**: `monto`, `tasaAnual`, `dias`, `aulaId?` — `201 { id, monto, tasaAnual, dias, interes, total, venceAt, saldoRestante }` — `401`, `400 "monto inválido"/"tasa inválida"/"días inválidos (1-365)"/{error:"saldo_insuficiente",saldo,mensaje}` — `instrumentos.ts:40`
- `POST /api/instrumentos/plazo-fijo/:id/rescatar` — **autenticado** — param `id` — — `{ ok:true, montoRescatado, vencido, saldoNuevo, mensaje }` — `401`, `404 "no encontrado"`, `400 "ya fue rescatado o vencido"` — `instrumentos.ts:118`
- `GET /api/instrumentos/fci` — **autenticado** — — — `{ items, ajusteActual }` — `401` — `instrumentos.ts:181`
- `POST /api/instrumentos/fci` — **autenticado** — — **body**: `monto`, `dias`, `aulaId?` — `201 { id, monto, tasaMensual, dias, interes, total, venceAt, saldoRestante, cicloActual }` — `401`, `400 "monto inválido"/"días inválidos (1-90)"/saldo_insuficiente` — `instrumentos.ts:196`
- `POST /api/instrumentos/fci/:id/rescatar` — **autenticado** — param `id` — — `{ ok:true, diasEfectivos, interesEfectivo, montoRescatado, saldoNuevo, mensaje }` — `401`, `404 "no encontrado"`, `400 "ya rescatado"` — `instrumentos.ts:280`

### beneficios.ts

- `GET /api/beneficios/estado` — **autenticado** — — — `getActiveInstitutionBenefitStatus(req)` → `{ active }` (`api/src/lib/entitlements.ts`) — — `beneficios.ts:7`

---

## Dominio: Encuestas, estadísticas y reportes

Routers: `encuestas.ts`, `estadisticas.ts`, `reportes.ts`, `reportes-v2.ts`, `configuracion.ts`.

> ⚠️ **`governance.ts` retirado por completo** (commit `be9873ae`, 2026-07-14): el router, sus
> endpoints (`/api/prompts`, `/api/proposals*`) y las tablas `Proposal`/`Vote` ya no existen —
> decisión del usuario, no una deriva de la documentación. Ver
> [`modelo-de-datos.md`](./modelo-de-datos.md#6-moderación-y-auditoría) y
> [`auth-y-roles.md`](./auth-y-roles.md#4-bootstrap-del-administrador-inicial).

### encuestas.ts

- `GET /api/encuestas` — **autenticado** — query `aulaId` (req), `limit` (def 20, max 100), `offset` — — `{ items, limit, offset }` — `400 "aulaId is required"` — `encuestas.ts:43`
- `GET /api/encuestas/:id` — **autenticado** — param `id`, query `aulaId` (req) — — Encuesta — `400 "aulaId is required"`, `404 "not found"` — `encuestas.ts:57`
- `POST /api/encuestas` — **autenticado** — — **body**: `SurveySchema` {id, title, description, classroomId, classroomName?, type (normal|puntuacion|segunda_vuelta), options[]{id,label} (min 2), maxOptions?, startAt, endAt, showResultsBeforeClose?, showResultsRealtime?, status (def "activa"), responsesCount?, createdBy, createdAt, updatedAt, archivedAt?} — `201 { id, surveyId }` — `400 "classroom not found"/invalid payload ("options exceed maxOptions"/"endAt must be after startAt")` — `encuestas.ts:65`
- `PUT /api/encuestas/:id` · `PATCH .../:id` — **autenticado** — param `id` — **body**: `SurveyUpdateSchema` (partial sin id/createdAt/createdBy) — `{ ok:true }` — `404 "not found"/"classroom not found"`, `400` — `encuestas.ts:92` / `:118`
- `DELETE /api/encuestas/:id` — **autenticado** — param `id` — — `204` — `404 "not found"/"classroom not found"` — `encuestas.ts:144`
- `POST /api/encuestas/:id/votos` — **autenticado; header `x-usuario-id`** — param `id` — **body**: `aulaId` (req) + por tipo: normal→`optionId`; puntuacion→`scores[]{optionId,score 1-5}`; segunda_vuelta→`ranking[]` (ids, min 2, únicos) — `201 { ok:true }` — `400 "aulaId is required"/"x-usuario-id header is required"`, `404 "classroom not found"/"not found"`, `400 "survey closed"/"survey inactive"`, `409 "already voted"` (+ validaciones por tipo) — `encuestas.ts:160`
- `GET /api/encuestas/:id/resultados` — **autenticado** — param `id`, query `aulaId` (req) — — por tipo: normal `{surveyId, totalVotes, options:[{id,label,count,percentage}]}`; puntuacion (+`scoreTotal,averageScore`); segunda_vuelta (+`rounds, winner`) — `400 "aulaId is required"`, `404`, `403 "results not available"` — `encuestas.ts:287`

### estadisticas.ts

- `GET /api/estadisticas/profesor` — **`requireEnterpriseFeature(REPORTS)` + `requirePolicy("estadisticas/read")`** — query `fechaInicio?`, `fechaFin?`, `moduloId?`, `categoria?`, `cohorte?` — — `{ general:{...}, rendimiento:{...}, participacion:{...} }` — — `estadisticas.ts:286`
- `GET /api/estadisticas/profesor/export` — **`requireEnterpriseFeature(REPORTS)` + `requirePolicy("estadisticas/export")`** — query `format` (def excel; pdf), filtros — — PDF o CSV (`estadisticas-profesor.<ext>`); audita `estadisticas.export` — — `estadisticas.ts:305`
- `GET /api/estadisticas/quizzes/aula/:aulaId` — **`requireEnterpriseFeature(QUIZZES)` + `requirePolicy("estadisticas/read")`** — param `aulaId`, query `fechaInicio?`, `fechaFin?` — — `{ resumen:{...}, quizzes:[{quizId, intentos, scorePromedio, maxScorePromedio, precisionPromedio}] }` — `400 "aulaId requerido"` — `estadisticas.ts:345`
- `GET /api/estadisticas/quizzes/docente/:docenteId` — **idem QUIZZES** — param `docenteId` — — igual — `400 "docenteId requerido"` — `estadisticas.ts:362`
- `GET /api/estadisticas/quizzes/institucion/:institucionId` — **idem QUIZZES** — param `institucionId` — — igual — `400 "institucionId requerida"` — `estadisticas.ts:379`

### reportes.ts

- `POST /api/vinculos/solicitar` — **autenticado** — — **body**: `childId` (24-hex) — stub — `400 "invalid parent or child id"`, `403 "institutional invite required"`, `501 "vinculos not yet migrated to Prisma"` — `reportes.ts:109`
- `POST /api/vinculos/aprobar` — **autenticado** — — **body**: `parentId` (24-hex) — stub — `400`, `403`, `501 "vinculos not yet migrated to Prisma"` — `reportes.ts:127`
- `GET /api/vinculos/validar` — **autenticado** — query `childId` — — `{ ok:true, acceso }` — `400 "parentId and childId are required"`, `404 "child not found"`, `403 "no link"` — `reportes.ts:145`
- `GET /api/estadisticas/hijos/:hijoId` — **autenticado + `validarAccesoPadre`** — param `hijoId` — — `{ items, resumen:{completados, total, progreso} }` — `400 "invalid hijoId"`, `404 "child not found"`, `403 "no link"` — `reportes.ts:154`
- `GET /api/informes/hijos/:hijoId` — **autenticado + `validarAccesoPadre`** — param `hijoId` — — `{ generatedAt, items }` — `400/404/403` — `reportes.ts:169`
- `GET /api/reportes/profesor` — **`requireEnterpriseFeature(REPORTS)` + `requirePolicy("reportes/read")`; export requiere staff** — query `aula`, `grupo`, `institucion`, `periodo`, `roles`, `tipoActividad`, `formato` (pdf|excel|csv|json), `limit`, `offset`, `lote`, `loteIds` — — JSON `ReporteResponse` o archivo `reporte-profesor.<ext>` — `403 "report export requires staff role"` — `reportes.ts:559`
- `GET /api/reportes/admin` — **idem REPORTS** — query igual — — `ReporteResponse` (rol admin) o `reporte-admin.<ext>` — `403` — `reportes.ts:566`
- `GET /api/reportes/economia` — **`requireEnterpriseFeature(ECONOMY)` + `requirePolicy("reportes/read")`** — query `aula`, `grupo`, `institucion`, `periodo`, `roles`, `tipoActividad`, `limit`, `offset` — — `{ filtros, periodo, aulas, paginacion, totales:{creditos, debitos, neto, transacciones}, detallePorTipo, topMotivos, generadoEn }` — — `reportes.ts:574`

### reportes-v2.ts

- `GET /api/v2/reportes/boletin/:aulaId` — **autenticado** — param `aulaId` — — `{ aulaId, aulaNombre, generadoEn, alumnos:[{alumnoId, nombre, username, promedioGeneral, materias:[...], totalEvaluaciones}] }` — `400 "aulaId requerido"`, `404 "aula no encontrada"` — `reportes-v2.ts:19`
- `GET /api/v2/reportes/asistencia/:aulaId` — **autenticado** — param `aulaId` — — `{ aulaId, generadoEn, resumen:{...}, actividades:[...] }` — `400 "aulaId requerido"` — `reportes-v2.ts:139`
- `GET /api/v2/reportes/progreso/:aulaId` — **autenticado** — param `aulaId` — — `{ aulaId, generadoEn, modulos:[{moduloId, titulo, materia, completados, enProgreso, sinIniciar, total, porcentaje}] }` — `400 "aulaId requerido"` — `reportes-v2.ts:181`
- `GET /api/v2/reportes/escuela` — **autenticado** (ADMIN sin schoolId permitido) — — — `{ generadoEn, escuela, indicadores:{totalAulas, totalUsuarios, totalActividades, progresoTotal, progresoCompletado, porcentajeCompletado} }` — `400 "schoolId requerido"` — `reportes-v2.ts:249`

### configuracion.ts

- `GET /api/config/materias` · `GET /api/config/categorias` — **autenticado** — — — `{ items, updatedAt }` — — `configuracion.ts:94` / `:99`
- `PATCH /api/config/materias` · `PATCH /api/config/categorias` — **autenticado** — — **body**: `items` (string[]) — `{ items, updatedAt }` — `400 invalid payload` — `configuracion.ts:104` / `:114`

---

## Dominio: Pagos, suscripciones, comisiones y enterprise

Routers: `payments.ts`, `suscripciones.ts`, `comisiones.ts`, `enterprise.ts`.

### payments.ts

> **Estado actual:** la persistencia de facturas/recibos aún no tiene modelo Prisma; las funciones
> de `api/src/lib/payments/index.ts` construyen objetos sin persistir. `POST /api/payments/initiate`
> está gateado por `ENV.ENABLE_ENTERPRISE_PAYMENTS` (default false). **No confundir con** el
> webhook `POST /api/pasarelas/webhook/:provider` de `cobros.ts` 🆕 (dominio de cobros
> escuela→familias, con modelo `Pago` real en Prisma) — son dos sistemas de pago paralelos:
> `payments.ts` es el contrato ENTERPRISE legacy (facturación por asiento/plan), `cobros.ts` es el
> pivot de negocio 2026 (comisión sobre cuotas). Ambos montan `express.raw` en rutas distintas.

- `POST /api/payments/initiate` — **autenticado + `requireEnterpriseFeature(CONTRACTS)` + flag `ENABLE_ENTERPRISE_PAYMENTS`** — — **body**: `billingCycleId`, `amount`, `currency` (def "USD"), `provider` (def "manual"), `externalReference`, `metadata` — `201` Invoice — `501 {error:"enterprise_payments_no_disponible", mensaje}`, `403 "School not assigned"`, `404 "billing cycle not found"`, `400 "amount is required"` — `payments.ts:34`
- `POST /api/payments/webhook` — **webhook (firma `x-payments-signature` + `PAYMENTS_WEBHOOK_SECRET`)** — — **body**: raw JSON `{invoiceId, status, provider, externalReference, metadata, amount, currency}` — `{ ok:true }` (crea recibo si `status==="PAID"`) — `400 "invalid payload"`, `401 "invalid signature"`, `400 "invoiceId required"/"invalid status"`, `404 "invoice not found"` — `payments.ts:88`
- `GET /api/enterprise/payments` — **autenticado + `requireEnterpriseFeature(CONTRACTS)`** — query `limit` (def 20, max 100), `offset`, `status?` — — `{ invoices, receipts, limit, offset }`; audita `enterprise.payments.view` — `403 "School not assigned"` — `payments.ts:154`

### suscripciones.ts

- `GET /api/suscripciones/limites` — **autenticado** — — — `{ limites, esAdmin }` — — `suscripciones.ts:37`
- `GET /api/suscripciones/estado` — **autenticado** — — — `{ personal, escuela, multiplicador, paymentsEnabled }` — `401 "no autenticado"` — `suscripciones.ts:46`
- `GET /api/suscripciones/historial` — **autenticado** — — — `{ items }` (take 24) — `401` — `suscripciones.ts:72`
- `POST /api/suscripciones/cancelar` — **autenticado; owner o ADMIN** — — **body**: `suscripcionId` — `{ ok:true, mensaje, periodoFin }` — `401`, `400 "suscripcionId requerido"`, `404 "suscripción no encontrada"`, `400 "la suscripción no está activa"`, `403 "sin permiso"` — `suscripciones.ts:100`
- `POST /api/suscripciones/reembolso` — **autenticado** — — **body**: `suscripcionId` — `{ ok:true, mensaje }` — `401`, `400 "suscripcionId requerido"`, `404 "no encontrada"`, `400 "no hay pagos registrados"/"Fuera de la ventana de reembolso..."/"reembolso ya solicitado"` — `suscripciones.ts:142`
- `GET /api/admin/suscripciones` — **ADMIN** — query `estado?`, `tipo?` — — `{ items }` (take 100) — — `suscripciones.ts:184`
- `POST /api/admin/suscripciones/activar` — **ADMIN** — — **body**: `entidadTipo`, `entidadId`, `plan`, `monto`, `expansiones`, `meses` — `201 { id, ok:true }` — `400 "entidadTipo y entidadId requeridos"` — `suscripciones.ts:201`
- `GET /api/admin/suscripciones/reembolsos` — **ADMIN** — — — `{ items }` (reembolsoSolicitado=1) — — `suscripciones.ts:258`
- `POST /api/suscripciones/iniciar` — **autenticado + flag `PAYMENTS_ENABLED`** — — **body**: `tipo`, `expansiones`, `payerEmail`, `backUrl` — `201 { suscripcionId, initPoint, preapprovalId }` — `403 "pagos_deshabilitados"`, `401`, `400 "tipo y payerEmail requeridos"/"monto inválido"` — `suscripciones.ts:267`
- `POST /api/suscripciones/webhook` — **webhook (firma `x-signature` + `x-request-id` + query `data.id`)** — query `data.id` — **body**: `type`, `action`, `data.id` — `200 { ok:true }` — `401 "firma inválida"` — `suscripciones.ts:349`

### comisiones.ts

- `GET /api/comisiones/escuela/:escuelaId/resumen` — **autenticado; ADMIN o DIRECTIVO/owner de esa escuela** — param `escuelaId` — — `{ escuela:{id, name, modoGestion, comisionPct}, resumen:{periodo, cobrosMes, comisionRetenidaMes, saldoALiquidar, cantTransaccPendientes}, transacciones, liquidaciones }` — `403 "Sin acceso a esta escuela"`, `404 "Escuela no encontrada"` — `comisiones.ts:29`
- `POST /api/comisiones/escuela/:escuelaId/modo` — **autenticado; ADMIN o DIRECTIVO** — param `escuelaId` — **body**: `modoGestion` (autogestionado|centralizado), `comisionPct` (0-100) — `{ ok:true, modoGestion, comisionPct }` — `403 "Sin permiso"`, `404 "Escuela no encontrada"` — `comisiones.ts:79`
- `GET /api/comisiones/admin` — **ADMIN** — — — `{ items:[{escuelaId, name, modoGestion, comisionPct, cobrosTotal, comisionTotal, saldoALiquidar, cantTransacc, cantLiquidaciones}] }` — — `comisiones.ts:115`
- `POST /api/comisiones/admin/liquidar` — **ADMIN** — — **body**: `escuelaId`, `periodo` (def `YYYY-MM`), `metodo` (def "transferencia") — `{ ok:true, liquidacion }` — `400 "escuelaId requerido"`, `409 "No hay transacciones pendientes en el período"` — `comisiones.ts:147`
- `GET /api/comisiones/admin/export.csv` — **ADMIN** — — — CSV `comisiones.csv` (columnas `id,escuela_id,escuela,fecha,monto_total,comision_vb,monto_neto,estado,mp_payment_id`) — — `comisiones.ts:187`

### enterprise.ts

- `GET /api/enterprise/entitlements` — **autenticado** — — — entitlements (`getSchoolEntitlements`) — `403 "School not assigned"` — `enterprise.ts:39`
- `GET /api/enterprise/miembros` — **autenticado + `requireEnterpriseFeature(MEMBERS)`** — — — `{ staff:[{id, name, role, schoolId}] }` — `403` — `enterprise.ts:46`
- `GET /api/enterprise/dashboard` — **autenticado + `requireEnterpriseFeature(DASHBOARD)`** — — — `{ indicadores, acciones, entitlements }` — `403` — `enterprise.ts:71`
- `GET /api/enterprise/modulos` — **autenticado + `requireEnterpriseFeature(MODULES)`** — query `limit` (def 20, max 100), `offset` — — `{ items, limit, offset }` — `403` — `enterprise.ts:115`
- `GET /api/enterprise/aulas` — **autenticado + `requireEnterpriseFeature(CLASSROOMS)`** — query `limit`, `offset` — — `{ items, limit, offset }` — `403` — `enterprise.ts:134`
- `POST /api/enterprise/aulas` — **autenticado + `requireEnterpriseFeature(CLASSROOMS)`** — — **body**: `schoolId?`, `teacherIds[]`/`teacherId`, `adminId`/`createdBy`, `status`, `createdAt`, `updatedAt`, `classCode`, + campos ClassroomSchema — `201 { id, classroomId }` — `403 "School not assigned"/"schoolId mismatch"/"admin school mismatch"/"teacher school mismatch"`, `400 "invalid schoolId"/"teacherId is required"/"adminId is required"/"admin not found"/"admin role invalid"/"teacher not found"/"teacher role invalid"/"invalid classroom status"/"classCode only available for ACTIVE classrooms"` — `enterprise.ts:153`
- `GET /api/enterprise/mensajes` — **autenticado + `requireEnterpriseFeature(MESSAGES)`** — query `limit`, `offset` — — `{ items, limit, offset }` — `403` — `enterprise.ts:268`
- `GET /api/enterprise/contratos` — **autenticado + `requireEnterpriseFeature(CONTRACTS)`** — — — `[{...json, id}]` — `403` — `enterprise.ts:287`
- `GET /api/enterprise/billing` — **autenticado + `requireEnterpriseFeature(CONTRACTS)`** — — — `{ schoolId, pricePerStudent, activeStudentCount, total, breakdown:[{userId, classroomIds, classroomCount, amount}], generatedAt }` (persiste el ciclo) — `403` — `enterprise.ts:300`
- `GET /api/enterprise/reportes` — **autenticado + `requireEnterpriseFeature(REPORTS)`** — — — `[{...json, id}]` — `403` — `enterprise.ts:350`

---

## Dominio: Cobros escuela→familias y pasarelas 🆕 (PLAN-B)

Routers: `cobros.ts`, `escuela-pasarelas.ts`. Modelo de negocio **autogestionado**: la plataforma no
retiene fondos de terceros — cada escuela conecta su propia cuenta en el provider; VB sólo
registra/concilia. Ver [`modelo-de-datos.md#71-cobros-escuelafamilias-y-pasarelas`](./modelo-de-datos.md#71-cobros-escuelafamilias-y-pasarelas-🆕-plan-b-julio-2026).

### cobros.ts

> Quién gestiona cobros de una escuela: `ADMIN` (cualquier escuela) o `DIRECTIVO` de **esa misma**
> escuela (`puedeGestionarEscuela`). `TEACHER` no gestiona cobros — es un tema
> administrativo/directivo, no docente.

- `POST /api/cobros` — **autenticado; ADMIN o DIRECTIVO de la escuela** — — **body**: `CobroCreateSchema` (`concepto`, `descripcion?`, `montoUnitario`, `moneda?`, `vencimiento?`) + `escuelaId` (requerido sólo para ADMIN; un DIRECTIVO siempre crea para la suya, ignora `escuelaId` del body) — `201` cobro (`estado:"borrador"`) — `401`, `403 "forbidden"` (rol sin autoridad, chequeado **antes** de resolver `escuelaId`), `400 "escuelaId requerido..."`, `400 payload inválido` — `cobros.ts:44`
- `GET /api/cobros` — **igual guard** — query `escuelaId?` (sólo ADMIN; un DIRECTIVO ve siempre la suya) — — `{ items }` — `403`, `400 "escuelaId requerido"` — `cobros.ts:89`
- `GET /api/cobros/:id/cuotas` — **igual guard, sobre la escuela del cobro** — param `id` — — `{ cobro, cuotas:[{...cuota, alumnoNombre}] }` (roster de seguimiento) — `404 "cobro no encontrado"`, `403` — `cobros.ts:111`
- `POST /api/cobros/:id/publicar` — **igual guard** — param `id` — **body**: `CobroPublicarSchema` (`aulaId?` y/o `alumnoIds?`, `montosPersonalizados?: {alumnoId: monto}` para becas/descuentos) — `{ ok:true, cobroId, cuotasCreadas }` — genera una `CuotaAlumno` por destinatario (alumnos STUDENT del aula, excluyendo espejos, y/o la lista explícita); auto-resuelve `pagadorId` desde el vínculo padre-hijo **aprobado**; sólo desde `estado:"borrador"` (no re-publicable) — `404`, `409 "el cobro ya está en estado <estado>"`, `400 "no se resolvió ningún alumno destinatario"` — `cobros.ts:138`
- `GET /api/cuotas/mias` — **autenticado** — — — `{ items:[{...cuota, cobro}] }` — cuotas propias (alumno), de hijos vinculados (padre/madre aprobado) o donde el requester figura como `pagadorId` explícito — `401` — `cobros.ts:204`
- `POST /api/cuotas/:id/checkout` — **autenticado; alumno, pagador o padre vinculado aprobado** — param `id` — **body**: `provider?` (preferencia), `backUrl?` — `201 { pago, url }` — si la escuela tiene una `EscuelaPasarela` activa usa `createCheckout` real (MP/Stripe/Cryptomus) y devuelve `url`; si no, o si el provider falla, cae a `provider:"manual"` (`url:null`, se confirma a mano vía `confirmar-pago`) — **idempotente**: si ya hay un `Pago` pendiente/en_proceso vigente, lo devuelve en vez de crear otro — `401`, `404 "cuota no encontrada"`, `403 "forbidden"`, `409 "la cuota ya está <estado>"` — `cobros.ts:245`
- `POST /api/cuotas/:id/confirmar-pago` — **autenticado; igual guard que gestión de cobros** — param `id` — — `{ ok:true, ...resultado }` — reemplazo **manual (staff-only)** del webhook del provider mientras la escuela no tiene pasarela conectada — `404`, `403`, `409 "la cuota no tiene un pago iniciado..."` — `cobros.ts:337`
- `POST /api/pasarelas/webhook/:provider` — **webhook (firma verificada por `adapter.verifyWebhook`, body crudo — `express.raw` montado en `index.ts` antes de `express.json()` para este prefijo)** — param `provider` — **body**: raw del provider — `{ ok:true }` — resuelve el `Pago` por `[provider, providerRef]` (idempotente) y llama `confirmarPago` si `estado:"pagada"` — `404 "provider desconocido"/"pago no encontrado para ese providerRef"`, `400 "invalid payload"`, `401 "invalid signature"` — `cobros.ts:360`

### escuela-pasarelas.ts (PLAN-B Fase 5)

> `credencialesCifradas` se cifra server-side (`lib/pasarelas-crypto.ts`) antes de persistir y
> **nunca** se devuelve al cliente (ni en claro ni cifrada) — la respuesta pública sólo expone
> `configurada: boolean`.

- `GET /api/escuelas/:escuelaId/pasarelas` — **autenticado; ADMIN o DIRECTIVO de esa escuela** — param `escuelaId` — — `{ items:[{provider, cuentaConectadaId, activa, configurada, updatedAt}] }` — `403 "Sin permiso"` — `escuela-pasarelas.ts:49`
- `POST /api/escuelas/:escuelaId/pasarelas` — **igual guard** — param `escuelaId` — **body**: `EscuelaPasarelaConectarSchema` (`provider`, `cuentaConectadaId?`, `credenciales?`, `activa?`) — `200/201` pasarela pública — upsert manual por `(escuelaId, provider)` — `403`, `400 "datos inválidos"` — `escuela-pasarelas.ts:63`
- `PATCH /api/escuelas/:escuelaId/pasarelas/:provider` — **igual guard** — params `escuelaId`, `provider` — **body**: `EscuelaPasarelaActualizarSchema` (`activa`) — pasarela pública — activar/desactivar sin reenviar credenciales — `403`, `400`, `404 "pasarela no conectada"` — `escuela-pasarelas.ts:109`

---

## Dominio: Sincronización offline y push

Routers: `sync.ts`, **`push-tokens.ts`** 🆕. `sync.ts` está diseñado para clientes offline-first
(cola de cambios, snapshots, conflictos); `push-tokens.ts` es infraestructura de notificaciones
push para la app móvil (PLAN-R Parte 5).

- `GET /api/sync/estado` — **autenticado** — — — `{ pendientes:[{tipo, total}], snapshots:[{tipo, aulaId, version, descargadoAt}], totalPendiente }` — `401 "no autenticado"` — `sync.ts:14`
- `POST /api/sync/push` — **autenticado (rate limit 30/15min)** — — **body**: `items: [{id, tipo, payload, createdAt}]` (máx 100; `tipo` ∈ progreso|quiz_attempt|economia|competencia|mensajes_leidos; payload por tipo: progreso→`{moduloId, status, aulaId}`, economia→`{delta, motivo, moneda}`, quiz_attempt→`{quizId, moduleId, answers}`, competencia→`{quizId, score, maxScore, tiempoSeg, aulaId}`, mensajes_leidos→`{avisoId}`) — `{ ok, failed, results:[{id, ok, error?}] }` — `401`, `400 "items requeridos"/"Máximo 100 items por push"` (+ errores por ítem: `"tipo no permitido"`, `"delta requerido"`, `"delta fuera de rango permitido"`, `"débitos no permitidos via sync"`, `"quizId requerido"`, `"avisoId requerido"`) — `sync.ts:43`
- `GET /api/sync/pull/:aulaId` — **autenticado** — param `aulaId`, query `since` — — `{ version, modulos:[{id, titulo, descripcion, visibility, updatedAt}], progreso:[{moduloId, status, updatedAt}], saldo, avisos, descargadoAt }` — `401`, `500` — `sync.ts:240`
- `GET /api/sync/conflictos` — **autenticado** — — — `{ items }` (máx 20) — `401` — `sync.ts:326`

### push-tokens.ts 🆕

> Sólo guarda **dónde** mandar el push; el envío real (expo-server-sdk, disparado desde
> mensajería/tareas/cobros) queda para otra sesión.

- `POST /api/push-tokens` — **autenticado** — — **body**: `token` (1-500 chars), `platform?` (ios\|android) — `200 { ok:true }` — **upsert por token, no por `userId`**: reinstalar la app o loguearse con otra cuenta en el mismo teléfono actualiza el dueño de *ese* token en vez de acumular filas huérfanas — `401 "user not found"`, `400` — `push-tokens.ts:33`
- `DELETE /api/push-tokens/:token` — **autenticado** — param `token` — — `204` — borra sólo si el token pertenece al requester (`deleteMany({token, userId})`) — `401` — `push-tokens.ts:61`

---

## Dominio: Mapas, diccionarios y contenido público

Routers: `health.ts`, `readonly.ts`, `maps.ts`, `diccionarios.ts`, `dictionary.ts`,
`visualizadores.ts`, `herramientas.ts`, `assets.ts`. Estos dominios se apoyan en SQLite de solo
lectura y archivos del filesystem (no en modelos Prisma).

### health.ts

- `GET /health` — **público** — — — `{ ok:true }` — `500 { ok:false, error }` (si falla la DB) — `health.ts:5`

### readonly.ts

> Folding de [`docs/api-readonly-catalogo.md`](../api-readonly-catalogo.md).

- `GET /api/readonly/catalogo` — **autenticado** — — — `{ modulosActivos:[{id, title, category, updatedAt}], generadores:[{materia, temas}], mapasYDiccionarios:{visualizadores:[{id, title, description, kind}], idiomasDiccionario} }` — `500 "no se pudo construir el catalogo"` — `readonly.ts:82`

Notas de estabilidad: `modulosActivos`, `generadores`, `visualizadores` e `idiomasDiccionario`
siempre se retornan como arreglos (posiblemente vacíos). Cada generador incluye su arreglo `temas`.

### maps.ts (prefijo `/api/maps`, público)

- `GET /api/maps/manifest` — **público** — header `if-none-match` — — manifest (ETag, `Cache-Control: max-age=300`) — `304` (ETag match) — `maps.ts:40`
- `GET /api/maps/manifest.meta` — **público** — header `if-none-match` — — `{ ...manifest, _meta }` — `304` — `maps.ts:60`
- `GET /api/maps/*file` — **público** — wildcard `file` (debe terminar en `.topo.json`) — — TopoJSON (ETag, `max-age=86400`); si no matchea, cae a estático — `304` — `maps.ts:83`
- `GET /api/maps/*` (estático) — **público** — path — — archivo estático (`maxAge 30d`) — `404` si no existe — `maps.ts:119`

### diccionarios.ts (sin prefijo, autenticado)

- `GET /api/diccionarios` — **autenticado** — — — `{ langs: string[] }` — `500 "no se pudieron listar diccionarios"` — `diccionarios.ts:58`
- `GET /api/diccionarios/:lang/lookup` — **autenticado** — param `lang`, query `w` — — `{ w, d, t, r }` — `404 "idioma no disponible"`, `400 "parametro w requerido"/"archivo no permitido"/"ruta invalida"`, `404 "archivo no encontrado"/"palabra no encontrada"` — `diccionarios.ts:68`
- `GET /api/diccionarios/:lang/*requestedPath` — **autenticado** — param `lang`, wildcard `requestedPath` (debe terminar `.jsonl.zst`) — — stream (`application/zstd`) — `404 "idioma no disponible"`, `400 "archivo no permitido"/"ruta invalida"`, `404 "archivo no encontrado"` — `diccionarios.ts:172`

### dictionary.ts (sin prefijo, autenticado)

- `GET /api/dictionary/health` — **autenticado** — — — `service.getHealth()` (`POR CONFIRMAR` forma exacta, `dictionary.ts:52`) — `503 "dictionary disabled"`, `500` — `dictionary.ts:48`
- `GET /api/dictionary/lookup` — **autenticado** — query `lang` (2-10), `word` (1-128) — — `{ found:false }` o `{ found:true, entry }` — `503`, `400 "invalid lang..."/"invalid word..."` — `dictionary.ts:55`
- `GET /api/dictionary/prefix` — **autenticado** — query `lang` (2-10), `q` (1-64), `limit` (def 50, 1-2000) — — `{ count, entries }` — `503`, `400 "invalid lang..."/"invalid q..."` — `dictionary.ts:79`

### visualizadores.ts (prefijo `/api/visualizadores`, público)

- `GET /api/visualizadores/` — **público** — — — `[{id, title, description, kind}]` — `500 "invalid spec json"/"internal error"` — `visualizadores.ts:43`
- `GET /api/visualizadores/:id` — **público** — param `id` (`^[a-z0-9\-]+$/i`) — — `{ id, title, description, spec }` — `404 "not found"`, `500` — `visualizadores.ts:77`

### herramientas.ts (prefijo `/api/herramientas`, público)

- `GET /api/herramientas/tabla-periodica` — **público** — — — JSON de tabla periódica (`max-age=86400`) — `500 "internal error"` — `herramientas.ts:9`

### assets.ts (prefijo `/api/assets`, público)

- `GET /api/assets/:categoria/:archivo` — **público** — params `categoria`, `archivo` (validados; ext ∈ .svg/.png/.jpg/.webp) — — bytes del archivo (`Content-Type` por ext, `max-age=86400`) — `400 "invalid path"/"unsupported file type"`, `404 "not found"` — `assets.ts:23`

---

## Archivos fuente documentados

- `api/src/index.ts` — montaje de routers, middlewares y orden de auth.
- `api/src/routes/*.ts` — los 63 routers catalogados arriba (`governance.ts` retirado; 🆕
  `asistencia.ts`, `boletin.ts`, `cobros.ts`, `escuela-pasarelas.ts`, `push-tokens.ts`, `formulas.ts`).
- `api/src/lib/authorization.ts`, `admin-auth.ts`, `user-auth.ts`, `entitlements.ts`, `roles.ts` 🆕,
  `classroom-scope.ts`, `cuenta-vinculada.ts` 🆕 — guardas y multirol.
- `api/src/lib/payments/index.ts`, `api/src/lib/billing/delinquency.ts` — pagos/facturación legacy.
- `api/src/lib/cobros-confirmacion.ts`, `pasarelas.ts`, `pasarelas-crypto.ts`, `boletin.ts` 🆕 —
  cobros escuela→familias y boletín.
- Docs reconciliados: [`auth-y-roles.md`](./auth-y-roles.md), [`../api-readonly-catalogo.md`](../api-readonly-catalogo.md),
  [`../pagos/`](../pagos/), [`../politica-mora.md`](../politica-mora.md), [`../bootstrap-admin.md`](../bootstrap-admin.md).

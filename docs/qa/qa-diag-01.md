# QA-DIAG-01 — Diagnóstico reproducible de 4 síntomas QA

**Tarea**: QA-DIAG-01
**Naturaleza**: diagnóstico. NO es fix.
**Fecha**: 2026-06-15
**Método**: lectura estática de código. No se reprodujo en runtime (sin devtools).

Cada síntoma incluye:
- Pasos de reproducción (lo que un QA haría con devtools → Network).
- Request fallido (método + URL + status esperado + cuerpo de error esperado).
- Causa raíz a nivel `archivo:línea`.

Cuando hay varios requests que disparan el síntoma, se listan todos. Los archivos y líneas citados son los reales del repo.

---

## Índice

- [Q1 — Aula no accesible (`/profesor/aulas/:aulaId`)](#q1--aula-no-accesible-profesoraulasaulaid)
- [Q2 — Ver/editar módulo da 403](#q2--vereditar-módulo-da-403)
- [Q4 — Módulos activos no cargan en el panel](#q4--módulos-activos-no-cargan-en-el-panel)
- [Q8 — Calendario no guarda evento (400)](#q8--calendario-no-guarda-evento-400)
- [Tabla resumen de bugs detectados](#tabla-resumen-de-bugs)

---

## Q1 — Aula no accesible (`/profesor/aulas/:aulaId`)

### Pasos de reproducción
1. Loguear como TEACHER dueño de un aula (es `createdBy`/`teacherId`/`teacherOfRecord` de la clase).
2. Navegar a `/profesor/aulas/<id>`.
3. Devtools → Network. Cargar la página sin tocar nada.
4. Repetir haciendo click en "Guardar cambios" del formulario de configuración.

### Requests que dispara el front al cargar

| # | Método + URL | Archivo front | Handler back |
|---|---|---|---|
| 1 | `GET /api/aulas/${id}` | `apps/web/src/pages/ProfesorAulaConfiguracion.tsx:56` → `services/aulas.ts:28` (`fetchClassroomDetail`) | `api/src/routes/aulas.ts:210-222` |
| 2 | `GET /api/aula/actividades?classroomId=${id}` | `ProfesorAulaConfiguracion.tsx:77` → `services/actividades.ts:16` (`fetchUpcomingActivities`) | `api/src/routes/aula-feed.ts:101-138` |
| 3 | `GET /api/aulas/${id}/modulos` | `ProfesorAulaConfiguracion.tsx:82` → `services/clase-modulos.ts:9` (`fetchClaseModulos`) | `api/src/routes/aulas.ts:648-665` |
| 4 | `GET /api/modulos` | `ProfesorAulaConfiguracion.tsx:83` (llamada `apiGet` directa) | `api/src/routes/modulos.ts:114-151` (sin auth) |

### Requests al hacer click en "Guardar cambios"

| # | Método + URL | Archivo front | Handler back |
|---|---|---|---|
| 5 | `PUT /api/aulas/${id}` | `ProfesorAulaConfiguracion.tsx:154` → `services/aulas.ts:39` (`updateClassroom`) | `api/src/routes/aulas.ts:281-364` |

### ¿Cuál falla y por qué?

**Caso A — el dueño del aula NO está en `clase_miembros` (típico de aulas creadas antes del feature de auto-membresía, o aulas importadas)**, y la clase no comparte `escuelaId` con el requester:

- **Request #1** (`GET /api/aulas/:id`, `aulas.ts:210-222`):
  - Usa `requireClassroomScope({ allowMemberRoles: "any", allowSchoolMatch: true })` (`aulas.ts:214-218`).
  - El middleware (`classroom-scope.ts:82-104`) busca al requester en `clase_miembros` Y verifica `userSchoolId === classroomSchoolId`. Si ninguna se cumple, responde `403 forbidden` (línea 107).
  - **Falla con 403** si la clase no tiene `escuelaId` (línea 99-104: `!!classroomSchoolId` debe ser truthy) y el requester no es miembro.

- **Request #5** (`PUT /api/aulas/:id`, `aulas.ts:281-289`):
  - Usa `requireClassroomScope({ allowMemberRoles: ["ADMIN", "TEACHER"], allowSchoolMatch: true })`.
  - Misma lógica: 403 si el requester no es miembro y no hay match de escuela. **Cae en el mismo agujero que #1**.

**Caso B — el dueño del aula SÍ está en `clase_miembros` con rol TEACHER/ADMIN**: las requests #1 y #5 pasan. Pero:

- **Request #3** (`GET /api/aulas/:id/modulos`, `aulas.ts:648-665`): **NO tiene `requireClassroomScope`** ni `requirePolicy`. Devuelve los módulos asignados a la clase sin chequear permisos. No rompe, pero es un agujero de seguridad (cualquier usuario autenticado puede enumerar los módulos de cualquier aula).
- **Request #4** (`GET /api/modulos`, `modulos.ts:114-151`): sin auth, sin filtro, devuelve TODOS los módulos. **No es 403, pero el dropdown "Asignar módulo" del profesor puede mostrar módulos ajenos** (consistente con Q4).

### Causa raíz (Q1)

**Archivo**: `api/src/lib/classroom-scope.ts:82-93` y `api/src/lib/classroom-scope.ts:95-104`.

El middleware `requireClassroomScope` sólo conoce dos criterios de autorización sobre un aula:
1. Ser `clase_miembro` con un `rolEnClase` permitido (`allowMemberRoles`).
2. Compartir `escuelaId` con el aula (`allowSchoolMatch`, que requiere además que la clase **tenga** `escuelaId`).

**No conoce al `createdBy`/`teacherId`/`teacherOfRecord` de la clase** como autoridad. Un TEACHER que creó un aula, es su dueño lógico, pero al cual el sistema nunca agregó a `clase_miembros` con rol TEACHER, queda fuera de ambos criterios.

Compárese con `api/src/routes/aulas.ts:83-117` (`GET /api/aulas`) que sí filtra por `createdBy/teacherId/teacherOfRecord` para staff en el handler (línea 102-117) — pero esa lógica vive ad-hoc, no en el middleware reusable.

### Líneas concretas

- `api/src/lib/classroom-scope.ts:82-93` — la verificación de membresía no incluye `createdBy`/`teacherId`.
- `api/src/lib/classroom-scope.ts:95-104` — `allowSchoolMatch` exige `!!classroomSchoolId`, falla en aulas legacy.
- `api/src/routes/aulas.ts:281-289` (PUT) — aplica el middleware a la operación de escritura.
- `api/src/routes/aulas.ts:648-665` — `/api/aulas/:id/modulos` sin `requireClassroomScope` (seguridad).
- `api/src/routes/aulas.ts:366-374` (PATCH) y `:558-566` (DELETE) — mismo middleware, mismo agujero.

### Verificación

```bash
# Para reproducir en runtime: loguear como TEACHER, abrir un aula donde sea
# `createdBy` pero no esté en `clase_miembros`, abrir devtools.
# Expected: 403 en GET /api/aulas/:id Y en PUT /api/aulas/:id si hace cambios.
# Body: {"error": "forbidden"} (calendario.ts usa "sin permiso", aulas usa "forbidden")
```

---

## Q2 — Ver/editar módulo da 403

### Pasos de reproducción
1. Loguear como TEACHER dueño de un módulo.
2. Navegar a la vista de detalle de un módulo (cliente) que contenga un quiz (`ModuloDetail`).
3. Devtools → Network. Observar la pestaña Network mientras carga la página.

### Requests que dispara `ModuloDetail.tsx`

| # | Método + URL | Archivo front | Handler back |
|---|---|---|---|
| 1 | `GET /api/modulos/${id}` | `apps/web/src/pages/modulos/ModuloDetail.tsx:376` (vía `useModuloPersistence`) | `api/src/routes/modulos.ts:153-268` (sólo `requireUser`) |
| 2 | `GET /api/quiz-attempts?moduleId=${id}&userId=${userId}` | `apps/web/src/pages/modulos/ModuloDetail.tsx:399-401` | `api/src/routes/quiz-attempts.ts:848-951` |
| 3 | `POST /api/quiz-attempts` (al hacer click en "Empezar") | `apps/web/src/pages/modulos/ModuloDetail.tsx:273-276` | `api/src/routes/quiz-attempts.ts:719-832` |

### Request confirmado que NO falla
- Request #1: `modulos.ts:153` → `requireUser` solo, sin checks de enterprise/benefit. **Funciona** ✓.

### Request confirmado que FALLA con 403

**Request #2** — `GET /api/quiz-attempts?moduleId=${id}&userId=${userId}`:

```ts
// api/src/routes/quiz-attempts.ts:848-852
quizAttempts.get(
  "/api/quiz-attempts",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.QUIZZES),  // ← 403 si no tiene feature
  requireActiveInstitutionBenefit,                         // ← 403 si la institución no tiene el benefit activo
  async (req, res) => { ... }
);
```

**Status esperado**: `403 Forbidden`.
**Body esperado**: `{"error": "feature not available"}` (o `"institution benefit required"`), según el guard que corte primero.

### Causa raíz (Q2)

**Asimetría de guards**: el TEACHER dueño del módulo **puede**:
- ✅ `GET /api/modulos/:id` (modulos.ts:153 — solo `requireUser`).
- ✅ `PATCH /api/modulos/:id` (modulos.ts:711 — solo `requireUser`).

Pero apenas `ModuloDetail.tsx:399-401` carga la lista de intentos de quiz del usuario sobre ese módulo, el back exige:
- `requireEnterpriseFeature(ENTERPRISE_FEATURES.QUIZZES)` — flag de feature de la edición enterprise.
- `requireActiveInstitutionBenefit` — que la escuela tenga el "benefit" activo.

Si la escuela del profesor no compró la edición enterprise con `QUIZZES` habilitado, o el benefit está vencido/sin activar, el guard corta con 403. El módulo es del profesor, pero la lista de intentos no es accesible.

**El problema es que el `ModuloDetail` carga la lista SIEMPRE, sin saber si la institución del requester es enterprise**. No hay fallback visual; el error se propaga y rompe la vista.

### Líneas concretas

- `api/src/routes/quiz-attempts.ts:848-852` — los guards en `GET /api/quiz-attempts`.
- `api/src/routes/quiz-attempts.ts:722-724` — los guards en `POST /api/quiz-attempts` (afecta "Empezar" un quiz).
- `api/src/routes/quiz-attempts.ts:1167-1169` (GET /:id) y `:1247-1249` (GET /:id/staff) y `:1306-1308` (POST /:id/answer) — mismo patrón, mismo riesgo.
- `apps/web/src/pages/modulos/ModuloDetail.tsx:399-401` — el front llama al endpoint sin saber de la asimetría.

### Verificación

```bash
# Para reproducir: abrir ModuloDetail de un módulo con quiz, como TEACHER
# cuya escuela NO tiene QUIZZES enterprise. Devtools muestra 403 en
# GET /api/quiz-attempts?moduleId=...&userId=...
```

---

## Q4 — Módulos activos no cargan en el panel

### Pasos de reproducción
1. Loguear como TEACHER.
2. Navegar al panel del profesor (`MenuProfesor`).
3. Devtools → Network. Observar la pestaña Network.

### Requests que dispara el panel

| # | Método + URL | Archivo front | Handler back |
|---|---|---|---|
| 1 | `GET /api/modulos?mine=true` | `apps/web/src/pages/MenuProfesor.tsx:150` | `api/src/routes/modulos.ts:114-151` ⚠️ **`mine` se IGNORA** |
| 2 | `GET /api/profesor/menu` | `MenuProfesor.tsx:186` (vía `services/profesor.ts:121`) | `api/src/routes/profesor.ts:110-284` |
| 3 | `GET /api/aulas` | `MenuProfesor.tsx:207` | `api/src/routes/aulas.ts:83-151` |

### Análisis del request #1

**Front** (`MenuProfesor.tsx:148-181`):
```ts
apiGet<{ items: Module[] }>("/api/modulos?mine=true")
  .then((data) => {
    const mapped = data.items.map((module) => ({ ... }));
    setModules(mapped);     // ← "Módulos activos" del side panel usa esto
    setModulesStatus("ready");
  })
```

**Back** (`api/src/routes/modulos.ts:114-151`):
```ts
modulos.get("/api/modulos", async (req, res) => {
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const aulaId = typeof req.query.aulaId === "string" ? req.query.aulaId : undefined;
  // ⚠️ NO lee `req.query.mine` en ninguna parte
  let items;
  if (aulaId) { /* ... */ }
  else {
    items = (await prisma.modulo.findMany({
      skip: safeOffset, take: limit, orderBy: { updatedAt: "desc" },
    })).map(withDefaultStatus);  // ← TODOS los módulos
  }
  return res.json({ items, limit, offset });
});
```

**Status**: 200 (no hay error, sólo datos incorrectos).
**Body**: `{ "items": [...TODOS los módulos del sistema, paginados...], "limit": 20, "offset": 0 }`.

El parámetro `mine=true` se ignora completamente. El handler que SÍ maneja `mine` está en `/api/modulos/buscar` (`api/src/routes/modulos.ts:53-112`, línea 54-64 lee `req.query.mine` y línea 64 aplica el filtro `createdBy`/`ownerUserId`).

### Análisis del request #2

`/api/profesor/menu` (`profesor.ts:110-284`) SÍ filtra correctamente por `ownerUserId === teacherId OR id IN (asignados)` (línea 160-186). Pero la respuesta de ese endpoint es un dashboard (`kpiCards`, `weeklyPlan`, `nextClass`) y **NO incluye el array `modules` que el front espera**. El front (`MenuProfesor.tsx:599-630`) muestra el panel "Módulos activos" usando `modules` del estado local — que es la respuesta de `/api/modulos?mine=true`.

### Causa raíz (Q4)

**Archivo**: `apps/web/src/pages/MenuProfesor.tsx:150` y `api/src/routes/modulos.ts:114-151`.

El front llama a un endpoint que:
1. Existe (`/api/modulos`).
2. Responde 200.
3. **Pero ignora el query param que el front cree que está usando** (`mine=true`).

El handler correcto existe en `/api/modulos/buscar?mine=true` (`modulos.ts:53-112`), pero `/api/modulos` no se reusa ese filtro. Es un desacople front↔back: la URL tiene el param semánticamente correcto, pero el handler que recibe el request no lo entiende.

### Líneas concretas

- `apps/web/src/pages/MenuProfesor.tsx:150` — `apiGet("/api/modulos?mine=true")`.
- `api/src/routes/modulos.ts:114-151` — handler que ignora `mine`.
- `api/src/routes/modulos.ts:53-112` — handler SÍ filtra por `mine` (es el que debería usarse, o el código de éste debería moverse al de arriba).

### Inconsistencia adicional detectada (no es Q4, pero es del mismo flujo)

Para TEACHER, `GET /api/aulas` (`aulas.ts:102-120`) filtra por `escuelaId OR id IN memberClaseIds`. Pero `GET /api/profesor/menu` (`profesor.ts:127-134`) filtra por `createdBy OR teacherId OR teacherOfRecord OR id IN memberClaseIds`. Si un TEACHER es dueño de un aula sin `escuelaId` y sin membresía en `clase_miembros`:
- Aparece en `nextClass` del menú (vía `/api/profesor/menu`).
- **No** aparece en la lista "Mis aulas" (vía `GET /api/aulas`).

### Verificación

```bash
# Para reproducir: como TEACHER con 2-3 módulos propios, abrir MenuProfesor.
# Devtools → Network: GET /api/modulos?mine=true → 200 con {items: [...muchos...]}
# El panel "Módulos activos" muestra módulos de OTROS profesores también.
# Comparar con /api/modulos/buscar?mine=true → ese sí filtra correctamente.
```

---

## Q8 — Calendario no guarda evento (400)

### Pasos de reproducción
1. Loguear como TEACHER (NO `createdBy` de las aulas — sino miembro de `clase_miembros`).
2. Navegar a `ProfesorCalendario`.
3. Llenar el formulario de "Crear evento": título + fecha + seleccionar aula.
4. Click en "Guardar evento".
5. Devtools → Network. Capturar el POST.

### Requests que dispara el front

| # | Método + URL | Archivo front | Handler back |
|---|---|---|---|
| 1 | `GET /api/aulas` | `apps/web/src/pages/ProfesorCalendario.tsx:107-121` | `api/src/routes/aulas.ts:83-151` |
| 2 | `GET /api/calendario/unificado?desde=...&hasta=...` | `ProfesorCalendario.tsx:127` → `services/calendarioUnificado.ts:28` | `api/src/routes/calendario.ts:21-131` |
| 3 | `POST /api/calendario/aula` | `ProfesorCalendario.tsx:184-191` → `services/calendarioUnificado.ts:52` (`crearEventoAula`) | `api/src/routes/calendario.ts:225-258` |

### Payload que envía el front

`apps/web/src/services/calendarioUnificado.ts:52-61`:
```ts
{
  aulaId: form.aulaId,                  // string (inicial "")
  tipo: form.tipo,                      // "clase" | "evaluacion" | "evento" | "feriado" | "sin_clases"
  titulo: form.titulo.trim(),           // string (botón disabled si vacío)
  descripcion: form.descripcion.trim() || undefined,  // string | undefined
  fechaInicio: form.fechaInicio,        // "YYYY-MM-DD"
  fechaFin: form.fechaFin || undefined, // "YYYY-MM-DD" | undefined
}
```

### Schema que valida el back

`api/src/routes/calendario.ts:225-238`:
```ts
calendario.post("/api/calendario/aula", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const role = getRole(req as never);

  if (!["TEACHER", "DIRECTIVO", "ADMIN"].includes(role ?? "")) {
    return res.status(403).json({ error: "sin permiso" });
  }

  const { aulaId, tipo, titulo, descripcion, fechaInicio, fechaFin } =
    req.body as Record<string, unknown>;

  if (!aulaId || !tipo || !titulo || !fechaInicio) {
    return res.status(400).json({ error: "aulaId, tipo, titulo y fechaInicio requeridos" });
  }
  // ... create
});
```

### Diff campo-por-campo

| Campo | Front (envía) | Back (espera) | OK? |
|---|---|---|---|
| `aulaId` | `form.aulaId` (inicial `""`, se setea sólo si `misAulas[0]` existe) | required non-empty | ⚠️ **FALLA cuando `aulaId === ""`** |
| `tipo` | "clase" / "evaluacion" / "evento" / "feriado" / "sin_clases" | required non-empty, sin enum-check | OK (no valida enum) |
| `titulo` | `form.titulo.trim()` (botón disabled si vacío) | required non-empty | OK |
| `descripcion` | `form.descripcion.trim() \|\| undefined` | `typeof descripcion === "string" ? descripcion : null` | OK |
| `fechaInicio` | "YYYY-MM-DD" | required, `String(fechaInicio)` (sin parse a Date) | OK (no valida formato) |
| `fechaFin` | "YYYY-MM-DD" \| undefined | `typeof fechaFin === "string" ? fechaFin : null` | OK |

### Causa raíz (Q8)

**Archivo**: `apps/web/src/pages/ProfesorCalendario.tsx:110-115`.

```ts
const misAulas = role === "TEACHER"
  ? items.filter((a) =>
      a.createdBy === user.id ||
      a.teacherIds?.includes(user.id)   // ← teacherIds SIEMPRE es undefined
    )
  : items;
setAulas(misAulas);
if (misAulas[0]) {
  setForm((f) => ({ ...f, aulaId: misAulas[0].id }));
}
```

El problema:
- El modelo Prisma `Clase` tiene `createdBy`, `teacherId`, `teacherOfRecord` (singular). **NO tiene `teacherIds` (plural)**.
- `apps/web/src/domain/classroom/classroom.types.ts:34` declara `teacherIds?: string[]` — el front lo espera, pero **el back nunca lo popula**.
- El back `aulas.get("/api/aulas", ...)` (`aulas.ts:143-150`) devuelve el `clase` raw con spread, así que `teacherIds` no aparece (no existe en el row).
- El filtro del front evalúa `a.teacherIds?.includes(user.id)` → siempre `false` (undefined).
- El único camino que pasa es `a.createdBy === user.id`. Para un TEACHER que es dueño del aula vía `clase_miembros` (miembro TEACHER, no `createdBy`), el filtro descarta la aula.
- `misAulas` queda `[]`. `form.aulaId` queda `""`.
- El usuario llena título y fecha, click "Guardar".
- POST con `aulaId: ""` → back responde `400 { "error": "aulaId, tipo, titulo y fechaInicio requeridos" }`.

### Líneas concretas

- `apps/web/src/pages/ProfesorCalendario.tsx:107-122` — el filtro del front que descarta aulas.
- `apps/web/src/domain/classroom/classroom.types.ts:34` — `teacherIds?: string[]` declarado pero nunca poblado.
- `api/src/routes/aulas.ts:143-150` — el back devuelve `clase` raw sin `teacherIds`.
- `api/src/routes/calendario.ts:236-238` — el 400 del back por `aulaId` vacío.

### Verificación

```bash
# Para reproducir: como TEACHER que es miembro (no creador) de un aula,
# abrir ProfesorCalendario, llenar título + fecha, click "Guardar".
# Devtools → Network: POST /api/calendario/aula → 400.
# Body: { "error": "aulaId, tipo, titulo y fechaInicio requeridos" }.
# La consola del front muestra el error (y posiblemente un toast).
# El dropdown "Aula" del form aparece vacío.
```

---

## Tabla resumen de bugs

| # | Flujo | Síntoma | Request problemático | Causa raíz | Líneas |
|---|---|---|---|---|---|
| **Q1** | Aula | 403 al hacer PUT en `ProfesorAulaConfiguracion` (y posiblemente al hacer GET si la clase no tiene `escuelaId` y el owner no es `clase_miembro`) | `PUT /api/aulas/:id` (también `GET /api/aulas/:id` en algunos casos) | `requireClassroomScope` no considera al `createdBy`/`teacherId`/`teacherOfRecord` de la clase como autoridad; sólo `clase_miembros` + `escuelaId` match | `api/src/lib/classroom-scope.ts:82-93` + `:95-104` + `api/src/routes/aulas.ts:281-289` |
| **Q2** | Módulo | 403 al cargar intentos de quiz en `ModuloDetail` | `GET /api/quiz-attempts?moduleId=...&userId=...` | `requireActiveInstitutionBenefit` + `requireEnterpriseFeature(QUIZZES)` cortan con 403 aunque el módulo sea del profesor | `api/src/routes/quiz-attempts.ts:848-852` + `apps/web/src/pages/modulos/ModuloDetail.tsx:399-401` |
| **Q4** | Panel | "Módulos activos" muestra módulos de otros profesores | `GET /api/modulos?mine=true` | El handler `/api/modulos` ignora el query `mine`; el handler correcto es `/api/modulos/buscar` | `apps/web/src/pages/MenuProfesor.tsx:150` + `api/src/routes/modulos.ts:114-151` |
| **Q8** | Calendario | 400 al guardar evento de aula como TEACHER que no es `createdBy` del aula | `POST /api/calendario/aula` | El filtro del front `a.teacherIds?.includes(user.id)` siempre es `false` porque el back nunca devuelve `teacherIds`; `form.aulaId` queda `""` y el back 400 | `apps/web/src/pages/ProfesorCalendario.tsx:110-115` + `apps/web/src/domain/classroom/classroom.types.ts:34` + `api/src/routes/calendario.ts:236-238` |

---

## Out-of-scope (detectados pero no diagnosticados a fondo)

- **Q1 adicional** — `GET /api/aulas/:id/modulos` (`aulas.ts:648-665`) no tiene `requireClassroomScope`. Cualquier usuario autenticado puede enumerar módulos de cualquier aula si conoce el id. No causa el síntoma reportado, pero es un agujero de seguridad.
- **Q2 adicional** — Mismas guards en `POST /api/quiz-attempts` (línea 722-724), `GET /api/quiz-attempts/:id` (línea 1167-1169), `GET /api/quiz-attempts/:id/staff` (línea 1247-1249), `POST /api/quiz-attempts/:id/answer` (línea 1306-1308). Si la asimetría es un bug, afecta a todos estos endpoints.
- **Q4 adicional** — `GET /api/aulas` (TEACHER) filtra distinto que `GET /api/profesor/menu`. Si el TEACHER es dueño de un aula sin `escuelaId` y sin membresía `clase_miembros`, el aula aparece en el menú pero no en la lista lateral de aulas.
- **Q8 adicional** — `fechaInicio` y `fechaFin` se persisten como string crudo (no se validan como Date). Si el front mandase un string malformado, se guardaría igual y sólo reventaría al renderizar.

---

## Listo para fix

Este diagnóstico entrega los blancos para las próximas tareas de fix. Cada bug está acotado a archivos y líneas específicas, lo que permite escribir el fix sin volver a reproducir.

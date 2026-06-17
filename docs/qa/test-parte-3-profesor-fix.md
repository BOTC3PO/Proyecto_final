# Fix parte 3 — Profesor (críticos)

**Fecha**: 2026-06-17
**Origen**: `docs/qa/test-parte-3-profesor.md` (4 bugs críticos pendientes).
**Alcance**: este documento describe los fixes aplicados a los 4 bugs 🔴 del
informe de QA, con causa raíz, evidencia, archivos tocados y tests añadidos.

---

## Resumen ejecutivo

| # | Bug | Estado | Fix |
|---|---|---|---|
| 2.3 | Tablón del aula → 403 (leaderboard + actividades) | ✅ resuelto | `requireClassroomScope` (policy canónica) en lugar del access check ad‑hoc |
| 2.8 | Acciones del aula no funcionaban para docentes no-miembro | ✅ resuelto | `isTeacherOfClass` ahora valida membresía / `viewerIsTeacher` / owner |
| 7.9 | Quizzes del V2 no se cargaban en un módulo | ✅ resuelto | `useEffect` ahora depende de `location.state.importedQuiz` |
| 9.1 | Asistencia daba error (cascada del 2.3) | ✅ resuelto | Resuelto transitivamente por el fix 2.3 — `/api/aula/actividades` es la misma ruta |

**Resultado de tests**: API 30/30 ✅ (5 nuevos), Web 35/35 ✅ (5 nuevos sobre los
archivos tocados). TypeScript sin nuevos errores (36 preexistentes sin relación).

---

## 2.3 — Tablón del aula → 403 (leaderboard y próximas actividades)

### Síntoma
- `GET /api/aula/leaderboard?classroomId=X` → `403 forbidden`.
- `GET /api/aula/actividades?classroomId=X` → `403 forbidden`.
- El widget "Top Estudiantes" y "Próximas actividades" del tablón del
  aula quedaban vacíos para cualquier TEACHER-miembro.

### Causa raíz
El access check de `api/src/routes/aula-feed.ts` reimplementaba la
autorización leyendo **campos legacy del Zod schema de Mongo**
(`classroom.schoolId ?? classroom.institutionId`) cuando el modelo
Prisma expone `escuelaId`. Para colmo, el `prisma.clase.findFirst` no
incluía `miembros: true`, así que `classroomMembers` siempre caía a
`[]`. Resultado: `canAccessClassroom` recibía
`{ classroomSchoolId: undefined, classroomMembers: [] }` para un
TEACHER-miembro legítimo y devolvía `false` → 403.

El propio test anterior
`api/tests/integracion/aula-feed-missing-classroom-id.test.ts:110-115`
ya lo documentaba con candado: usaba `ADMIN` solo para evitar el access
check ad-hoc, porque sabía que un TEACHER-miembro no iba a pasar.

### Fix
- Reemplazar el access check ad‑hoc por
  `requireClassroomScope` (`api/src/lib/classroom-scope.ts`), que es
  la **policy canónica** ya implementada y probada para `aulas.ts`.
- Extender `requireClassroomScope` con dos opciones nuevas:
  - `paramSource: "query"` — para rutas que reciben el id por
    query string (no por path param).
  - `badRequestMessage` — para que cada handler conserve su mensaje
    400 original (FIX-AULA-PARAM exigía "classroomId requerido").
- Las 3 rutas GET de `aula-feed` ahora usan el middleware canónico
  con `paramName: "classroomId"`, `paramSource: "query"` y
  `badRequestMessage: "classroomId requerido"`.

### Archivos tocados
- `api/src/routes/aula-feed.ts:1-100` — reemplazo del access check.
- `api/src/lib/classroom-scope.ts:69-115` — opciones nuevas
  `paramSource` y `badRequestMessage`.
- `api/tests/integracion/aula-feed-tablon-403.test.ts` — **nuevo**,
  4 tests (líder, actividades, school-match, STUDENT outsider en 403).

### Cómo se prueba
```bash
cd api && node --test --import tsx \
  tests/integracion/aula-feed-tablon-403.test.ts \
  tests/integracion/aula-feed-missing-classroom-id.test.ts \
  tests/integracion/classroom-scope-owner.test.ts \
  tests/integracion/aulas-viewer-is-teacher.test.ts \
  tests/integracion/calendario-teacher-aula-feed.test.ts
# → 30/30 pass
```

### Compatibilidad
- FIX-AULA-PARAM (`aula-feed-missing-classroom-id.test.ts`) sigue
  verde: el mensaje 400 y el 404 por id inexistente se conservan.
- Las rutas POST y DELETE (`/api/aula/actividades` escritura y
  borrado) **no** se tocaron; siguen con `requirePolicy("aula-feed/write")`.

---

## 2.8 — Acciones del aula se mostraban para docentes no‑miembro

### Síntoma
- La barra "Acciones del aula" (`<AulaActionsBar>`) aparecía para
  CUALQUIER usuario con `role === "TEACHER"`, aunque no fuera
  miembro de esa aula.
- El botón "Asignar módulo" abría un modal que listaba los módulos
  del docente y al confirmar hacía POST/DELETE sobre aulas donde
  no tenía autoridad.

### Causa raíz
En `apps/web/src/pages/aula.tsx:258-261` (pre-fix):

```tsx
const isTeacherOfClass = useMemo(() => {
  if (!user || !classroom || user.role !== "TEACHER") return false;
  return true;
}, [classroom, user]);
```

El check era solo de **rol global**, sin mirar si el docente era
miembro del aula. Esto es **privilegio inflado** (el back tiene la
policy `isClassroomTeacher` en `classroom-scope.ts:57` pero el front
no la replicaba).

### Fix
- `isTeacherOfClass` ahora replica el criterio canónico del back:
  1. `ADMIN` global → sí.
  2. `viewerIsTeacher === true` (campo que ya devuelve el back en el
     listado de aulas) → sí.
  3. `viewerIsTeacher === false` → no (forzar la decisión del back).
  4. Miembro con `roleInClass === "TEACHER"` o `"ADMIN"` → sí.
  5. Owner del aula (`createdBy` o `teacherId` o `teacherOfRecord`) → sí.
  6. Resto → no.
- Mock del test actualizado al shape canónico (`{userId, roleInClass}[]`)
  para que la validación no se rompa.

### Archivos tocados
- `apps/web/src/pages/aula.tsx:258-296` — `isTeacherOfClass` ahora usa
  la policy canónica.
- `apps/web/src/pages/__tests__/aula.actions-bar.spec.tsx` — mock
  corregido al shape canónico y **2 tests nuevos**:
  - TEACHER que **no** es miembro del aula no ve la barra.
  - `viewerIsTeacher=true` fuerza la barra aunque el mock no traiga
    `members`.

### Cómo se prueba
```bash
cd apps/web && npx vitest run pages/__tests__/aula.actions-bar.spec.tsx
# → 11/11 pass (9 previos + 2 nuevos)
```

---

## 7.9 — Quizzes del V2 no se cargaban en un módulo

### Síntoma
- El docente abre el editor de un módulo existente.
- Click en "Editor V2" (o "Editor V1" / "Generados (legacy)").
- Crea el cuestionario en el V2.
- Click en "Agregar al módulo" — el V2 navega con
  `navigate(returnTo, { state: { importedQuiz } })`.
- **El cuestionario NO aparecía** en la lista de cuestionarios del
  módulo.

### Causa raíz
En `apps/web/src/pages/modulos/ModuloEditor.tsx:216-222` (pre-fix):

```tsx
useEffect(() => {
  const state = location.state as { importedQuiz?: ... } | null;
  if (!state?.importedQuiz) return;
  window.history.replaceState({}, "");
  handleImportQuizzes([state.importedQuiz as ModuleQuiz]);
}, []);
```

El `useEffect` tenía `deps = []`, así que solo corría en mount. Si el
docente ya estaba en el editor de módulo, el componente NO se
remontaba al volver del V2, el effect no se re-disparaba y el
`importedQuiz` quedaba en `location.state` sin procesarse.

### Fix
- El effect ahora depende de `importedQuizState`, derivado de
  `location.state` arriba del effect.
- Cuando llega un nuevo `importedQuiz`, el effect lo consume llamando
  a `handleImportQuizzes` y reemplaza el state de la URL (vía
  `window.history.replaceState`) para que navegaciones sucesivas
  sigan disparando el effect (no se "atasca" en el primer quiz).

### Archivos tocados
- `apps/web/src/pages/modulos/ModuloEditor.tsx:216-244` — deps del
  effect cambiadas a `[importedQuizState]`.
- `apps/web/src/pages/modulos/__tests__/ModuloEditor.importedQuiz.spec.tsx`
  — **nuevo**, 3 tests:
  - (a) Consumir `importedQuiz` en mount añade el quiz al pool.
  - (b) Sin `importedQuiz`, `handleImportQuizzes` no se llama.
  - (c) Dos `importedQuiz` consecutivos importan ambos.

### Cómo se prueba
```bash
cd apps/web && npx vitest run pages/modulos/__tests__/
# → 24/24 pass (21 previos + 3 nuevos)
```

---

## 9.1 — Asistencia daba error al usarse

### Síntoma
- `/profesor/asistencia?aulaId=X` fallaba al cargar las actividades
  de la clase.

### Causa raíz
La pantalla `ProfesorAsistencia` carga aulas con
`GET /api/aulas` (200, sin bug) y luego por cada aula pide
`GET /api/aula/actividades?classroomId=X` — la **misma ruta** del
bug 2.3, así que heredaba el 403.

### Fix
- Resuelto **transitivamente** por el fix 2.3. La pantalla no
  necesitó cambios.

### Acción complementaria
- Si en el futuro se quiere un mensaje de error más legible (en
  vez del genérico "No pudimos cargar la información del aula"),
  el front podría diferenciar 403 (sin acceso) de 404 (aula
  inexistente) en `apps/web/src/pages/ProfesorAsistencia.tsx:62-66`.

---

## Archivos modificados (resumen)

```
api/src/lib/classroom-scope.ts                 |  +18  (paramSource + badRequestMessage)
api/src/routes/aula-feed.ts                    |  +52 / -22  (FIX-TABLON-403)
api/tests/integracion/aula-feed-tablon-403.test.ts |  +130 (nuevo, 4 tests)
apps/web/src/pages/aula.tsx                    |  +34 / -2  (FIX-ACCIONES-AULA)
apps/web/src/pages/__tests__/aula.actions-bar.spec.tsx | +48 / -4  (mock + 2 tests)
apps/web/src/pages/modulos/ModuloEditor.tsx    |  +19 / -2  (FIX-MODULO-QUIZ-IMPORT)
apps/web/src/pages/modulos/__tests__/ModuloEditor.importedQuiz.spec.tsx | +180 (nuevo, 3 tests)
```

## Pendientes (no críticos, no cerrados acá)

- 3.1 Compartir material expone a toda la escuela (🟠 alto).
- 7.1 Leer en voz alta solo lee título/subtítulo (🟠 alto).
- 7.7 "Formas" inutilizable (🟠 alto).
- 1.2 Evaluaciones del panel usan modelo antiguo (🟠 alto).
- 11.1 — **ya resuelto** por FIX-PLANTILLA-DUP previo (`3a99992f`).
- Resto 🟡 y 🟢 del informe original, sin cambios.

## Cómo correr todos los tests de la tanda

```bash
# API
cd api && node --test --import tsx \
  tests/integracion/aula-feed-tablon-403.test.ts \
  tests/integracion/aula-feed-missing-classroom-id.test.ts \
  tests/integracion/classroom-scope-owner.test.ts \
  tests/integracion/aulas-viewer-is-teacher.test.ts \
  tests/integracion/calendario-teacher-aula-feed.test.ts

# Web (lo tocado por los 3 fixes de front)
cd apps/web && npx vitest run \
  pages/__tests__/aula.actions-bar.spec.tsx \
  pages/modulos/__tests__/

# Typecheck (los errores preexistentes NO son de los archivos tocados)
cd api && npx tsc -p tsconfig.json --noEmit
```

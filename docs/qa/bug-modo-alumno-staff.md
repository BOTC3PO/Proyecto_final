# Bug: "Ver como alumno" muestra datos del staff, no de un alumno

**Fecha**: 2026-06-17
**Reportado por**: análisis estático durante la ronda 3 de fixes del
QA del profesor (no vino del tester).
**Severidad**: 🟠 alto (UX rota + data leak visual).
**Origen**: `docs/qa/test-parte-3-profesor.md` (implícito — la
funcionalidad "Ver como alumno" está listada en el sidebar de
TEACHER/DIRECTIVO/ADMIN en `apps/web/src/nav/navConfig.ts:85, 91,
97`).

> **Importante**: este documento **NO aplica fixes**. Solo levanta
> el bug, documenta el repro y propone una solución. La decisión
> de implementación queda para una ronda posterior.

---

## TL;DR

El botón "Ver como alumno" en el sidebar de TEACHER, DIRECTIVO y
ADMIN (`apps/web/src/nav/navConfig.ts:85, 91, 97`) navega a
`/alumno`, que es la **misma página** que ven los alumnos USER. La
página `MenuAlumno` (en `apps/web/src/pages/menu-alumno.tsx`)
asume implícitamente que el viewer es un USER y:

1. Muestra `role: "Alumno"` hardcoded (línea 358).
2. Pide `GET /api/progreso?usuarioId=<id-del-staff>` y muestra
   el progreso **del staff** como si fuera de un alumno.
3. Pide `GET /api/economia/saldos?usuarioId=<id-del-staff>` y
   muestra el saldo de monedas del staff.
4. Hardcodea `nextClass: { title: "—", time: "—" }` (línea 359).

El docente que clickea "Ver como alumno" esperando previsualizar
la vista de un estudiante termina viendo su propio dashboard
mal etiquetado como "Alumno".

---

## Repro

### Pasos

1. Loguear como TEACHER.
2. En el sidebar, click en el avatar → dropdown → "Ver como alumno".
3. La URL navega a `/alumno`.

### Resultado actual (incorrecto)

- El header dice **"Bienvenido, [nombre del docente]"** con el
  badge **"Alumno"** hardcoded.
- Las stat cards muestran datos del docente (progreso, tareas,
  monedas) interpretados como "vista de alumno".
- "Próxima clase" muestra `—` (placeholder).
- El dropdown del avatar sigue mostrando "Ver como alumno"
  (porque `DROPDOWN_BY_ROLE[user.role]` se evalúa contra el
  rol del usuario actual, no contra el "modo" en que está
  navegando).

### Resultado esperado

- Si la intención es **previsualizar la vista de un alumno
  cualquiera** (la más común para QA y revisión), el docente
  debería ver datos de **un alumno real de un aula suya** (con
  su progreso, próximas clases, monedas) — no los suyos propios.
- Si la intención es **probar la vista alumno con datos demo**,
  debería haber un mensaje claro: "Estás viendo la vista alumno
  con datos demo. Para ver datos reales de un alumno, abrí esta
  página desde su perfil."

---

## Causa raíz

Hay **dos problemas compuestos**:

### A. La página no diferencia entre "alumno real" y "preview de staff"

`apps/web/src/pages/menu-alumno.tsx:346-362` (componente `Page`):

```tsx
export default function Page() {
  const { user } = useAuth();
  if (!user) return null;
  const initials = ...;
  return (
    <StudentDashboard
      student={{ name: user.name, initials, role: "Alumno" }}  // ← hardcoded
      nextClass={{ title: "—", time: "—" }}                   // ← placeholder
    />
  );
}
```

El `StudentDashboard` (línea 137) hace `apiGet(/api/progreso?usuarioId=${user.id})`
y `apiGet(/api/economia/saldos?usuarioId=${user.id})` con el id del
viewer. **No hay chequeo de rol**.

### B. Las rutas no restringen por rol

`apps/web/src/router.tsx:194-200`:

```tsx
// ── Layout Alumno (USER + vista alumno para staff) ────────────
{
  element: (
    <ProtectedRoute allow={['USER', 'TEACHER', 'DIRECTIVO', 'ADMIN', 'PARENT']}>
      <AlumnoLayout />
    </ProtectedRoute>
  ),
  ...
}
```

El comentario dice "USER + vista alumno para staff" pero la
implementación deja pasar TEACHER/DIRECTIVO/ADMIN/PARENT con
`user.id` propio. No hay distinción entre "soy USER" y "soy
staff mirando la vista USER".

### C. El back acepta el id

`api/src/routes/progreso.ts:152-208` (`GET /api/progreso`):

```ts
if (usuarioId !== authenticatedUserId && !isStaffRole(req.user?.role ?? null)) {
  return res.status(403).json({ error: "forbidden" });
}
```

Un staff puede pedir el progreso de cualquier `usuarioId`,
incluido el suyo propio. Lo mismo con
`api/src/routes/economia.ts` para saldos (no lo auditamos, pero
sigue el mismo patrón: el id viaja por query y se devuelve la
data).

---

## Impacto

| Dimensión | Detalle |
|---|---|
| UX | El docente que quiere previsualizar la vista alumno se confunde: ve "Bienvenido, [su nombre]" con badge "Alumno" y datos que no son de un alumno. |
| Data leak visual | Los datos del staff se imprimen en una página que el resto de la app trata como "alumno". Si el staff comparte screen o graba un demo, expone sus propias métricas (progreso, tareas, monedas). |
| QA / testing | Imposible hacer QA visual de la vista alumno con datos reales desde el rol staff sin construir un seed de alumnos específico. |
| Accesibilidad | El badge "Alumno" es engañoso para usuarios con screen reader. |

**Severidad**: 🟠 alto. No rompe nada crítico, pero confunde
sistemáticamente a cualquier staff que clickee el link.

---

## Por qué no lo detectamos antes

- La ruta existe desde hace varias iteraciones (sidebar con
  "Ver como alumno" para TEACHER/DIRECTIVO/ADMIN es histórica).
- No hay tests de la página `MenuAlumno` que verifiquen el
  comportamiento para roles no-USER (búsqueda: 0 tests referencian
  `MenuAlumno`, `menu-alumno` o `StudentDashboard`).
- El comportamiento es **silencioso**: la página no tira error,
  solo muestra datos incorrectos. Si el docente no se da cuenta
  de que el badge dice "Alumno" cuando él es TEACHER, no hay
  forma de detectarlo.

---

## Posible solución (a discutir antes de implementar)

Hay **dos alternativas**, mutuamente excluyentes. Ninguna es trivial;
ambas requieren al menos 1 sprint.

### Opción A — "Vista previa con datos demo" (recomendada para MVP)

**Idea**: cuando un staff entra a `/alumno`, la página entra en
"modo demo" y muestra datos sintéticos + un banner persistente
explicando que está viendo la vista alumno. NO consulta la API con
su propio id.

**Cambios necesarios**:

1. **Back** (`api/src/routes/progreso.ts:152-208`): agregar un
   parámetro `?asRole=USER` (o un header `X-View-As: USER`) y, si
   está presente, devolver siempre un payload demo (un `usuarioId`
   ficticio hardcoded por ambiente). Solo accesible a roles
   staff.

2. **Back** (`api/src/routes/economia.ts`): misma lógica — el
   staff en modo preview ve el saldo demo, no el suyo.

3. **Front** (`menu-alumno.tsx`): leer el rol del viewer; si no
   es USER, agregar `asRole=USER` a las requests y mostrar un
   `<DemoBanner>` en la parte superior con:
   ```
   👀 Estás viendo la vista de Alumno con datos demo.
   Para ver datos reales de un alumno, abrí esta página desde
   su perfil.
   ```
   El badge del header sigue diciendo "Alumno" pero queda
   contextualizado por el banner.

4. **Tests** (nuevo): agregar `MenuAlumno.demo.spec.tsx` que
   verifique que un TEACHER ve el banner demo y NO consulta su
   propio id.

**Pros**:
- Cero cambio en el back-end de queries existentes.
- UX clara: el docente SIEMPRE sabe que está en preview.
- No expone data real del staff bajo etiqueta "alumno".

**Contras**:
- No permite previsualizar el dashboard de un alumno real sin
  otro flujo (ver opción B).
- Si el docente quiere ver los datos reales de un alumno
  específico (ej. porque un alumno reportó un bug), tiene que
  abrir otra herramienta.

**Estimación**: 1 sprint corto (3-5 días). El componente del
banner + las dos modificaciones de fetch son las piezas clave.

---

### Opción B — "Selector de alumno real" (más ambiciosa)

**Idea**: cuando un staff entra a `/alumno`, ve un selector
dropdown de los alumnos de sus aulas (o de toda la escuela si es
DIRECTIVO/ADMIN) y consulta la API con el `usuarioId` de ese
alumno. La página se renderiza con los datos reales de ese
alumno, con un banner indicando "Viendo datos de [alumno]".

**Cambios necesarios**:

1. **Back** — endpoint nuevo: `GET /api/profesor/mis-alumnos`
   (o `/api/aulas/:id/miembros` con `rolEnClase=STUDENT`) que
   devuelva la lista de alumnos visibles al staff. El endpoint
   ya existe parcialmente en `aulas.ts:683+`
   (`GET /api/aulas/:id/modulos` ya carga ClaseModulo); falta el
   endpoint dedicado a "mis alumnos" con paginación.

2. **Front** (`menu-alumno.tsx`): agregar un `<select>` arriba
   del header (debajo del banner demo) que cambie el `viewerId`
   en el state. Las requests a `/api/progreso?usuarioId=` y
   `/api/economia/saldos?usuarioId=` usan el id seleccionado.

3. **Permisos**: el back valida que el staff pueda ver los datos
   del alumno (miembro del aula o admin global). Si no, 403.

4. **Tests**: spec que verifique que un TEACHER ve solo alumnos
   de sus aulas; DIRECTIVO ve todos; ADMIN ve todos; USER no
   accede a este flujo.

**Pros**:
- Previsualización fiel: el docente ve exactamente lo que ve
  el alumno.
- Útil para soporte ("estudiante X reporta que no le carga el
  módulo, déjame ver su dashboard").
- Una sola página sirve para preview demo y real.

**Contras**:
- Requiere agregar un endpoint nuevo + lista paginada.
- Más superficie a mantener (autorización adicional, filtros,
  paginación).
- Riesgo de "yo-como-staff-veo-todo": si no se valida bien
  quién puede ver a quién, un TEACHER podría ver datos de
  alumnos de aulas donde no es miembro. Hay que validar con
  el criterio canónico de `isClassroomTeacher` (ya existe en
  `classroom-scope.ts`).

**Estimación**: 1 sprint completo (1-2 semanas). El back
nuevo + el componente selector + las pruebas de autorización
son las piezas críticas.

---

### Opción C — "No permitir" (la más simple, pero rompe UX)

**Idea**: sacar el botón "Ver como alumno" del sidebar. Los
staffs que quieran ver la vista alumno pueden loguearse como
un usuario de prueba (que la escuela ya suele tener).

**Pros**: cero código. La ruta `/alumno` sigue existiendo para
USER.

**Contras**:
- Pierde la previsualización rápida. El QA visual se vuelve
  costoso.
- El dropdown del sidebar queda inconsistente entre roles
  (USER ve el dropdown completo, TEACHER no ve "Ver como
  alumno" pero sí ve otras opciones de staff).
- No resuelve nada para soporte: si un alumno reporta un bug,
  el docente sigue sin poder ver su dashboard.

**Estimación**: 1 hora (cambio cosmético).

---

## Recomendación

**Opción A** para esta quincena (rápido, claro, sin nuevos
endpoints) + planificar **Opción B** para el siguiente sprint
más largo (cuando se justifique el trabajo de previsualización
con datos reales por necesidad de soporte o QA).

La **Opción C** se descarta salvo que el producto decida que
"Ver como alumno" no aporta valor.

---

## Archivos referenciados (sin cambios)

Solo a modo de inventario para quien implemente:

- `apps/web/src/router.tsx:194-200` — la ruta `/alumno` con
  `ProtectedRoute allow={['USER', 'TEACHER', 'DIRECTIVO', 'ADMIN', 'PARENT']}`.
- `apps/web/src/pages/menu-alumno.tsx:137-208, 346-362` — la
  página que hardcodea `role: "Alumno"` y consulta APIs con el
  id del viewer.
- `apps/web/src/nav/navConfig.ts:85, 91, 97` — el botón "Ver
  como alumno" en el dropdown de TEACHER/DIRECTIVO/ADMIN.
- `apps/web/src/nav/AlumnoNavbar.tsx:1-105` — la navbar del
  layout alumno, que ya tiene "Volver a mi panel" para roles
  staff (líneas 26-29, 57-64).
- `api/src/routes/progreso.ts:152-208` — endpoint que permite
  al staff pedir el progreso de cualquier `usuarioId` (incluido
  el propio).
- `api/src/routes/economia.ts` — endpoint de saldos (asume
  mismo patrón que progreso; no auditado en este informe).

## Tests ausentes (sirven para validar la solución)

- `apps/web/src/pages/menu-alumno.spec.tsx` (no existe): debería
  cubrir que un TEACHER ve el banner demo, no consulta su propio
  id en `/api/progreso`, etc.
- `apps/web/src/pages/menu-alumno.demo-banner.spec.tsx` (sugerido
  para la Opción A): valida que el banner aparece y se cierra
  con un botón "OK, entendí" o similar.
- `api/tests/integracion/progreso-view-as-user.test.ts` (sugerido
  para Opción A o B): valida que el back acepta el parámetro
  `asRole=USER` y devuelve el payload demo, con auth check
  (solo staff puede pedirlo).

## Pendiente de decisión

Antes de implementar, falta alinear con producto:

1. ¿Se mantiene "Ver como alumno" en el sidebar de los 3 roles
   staff? (asumimos que sí, por la opción A/B).
2. ¿La previsualización debe incluir los datos del alumno O
   solo el chrome/layout? (afecta el scope de la fix).
3. ¿Los datos demo se hardcodean en el back o se cargan de un
   seed específico? (afecta la implementación).
4. ¿Hay consideraciones legales/privacidad para que un TEACHER
   vea los datos completos de un alumno? (europea GDPR o
   equivalente local puede restringir).

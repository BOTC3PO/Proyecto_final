# QA-FIX-08 — Calendario: el dropdown de aulas se puebla para docentes-miembro (Q8)

## Síntoma (Q8)

`ProfesorCalendario` (apps/web/src/pages/ProfesorCalendario.tsx) usaba
el filtro:

```ts
const misAulas = role === "TEACHER"
  ? items.filter((a) =>
      a.createdBy === user.id ||
      a.teacherIds?.includes(user.id)
    )
  : items;
```

Para un TEACHER que es docente del aula por **membresía** (no creador)
este filtro descartaba todas las aulas:

  - `a.createdBy === user.id` → false (no es creador).
  - `a.teacherIds?.includes(user.id)` → `a.teacherIds` es **undefined**
    siempre (phantom field del `Classroom` type — ver
    `classroom.types.ts:34`).

Resultado: `misAulas = []` → `form.aulaId = ""` → `crearEventoAula` con
`aulaId: ""` → **400** del back.

## Causa raíz

1. El back **nunca** poblaba `teacherIds` (el modelo Prisma `Clase`
   tiene `teacherId`/`teacherOfRecord` singulares, ver
   `schema.prisma:99-120`).
2. El back **nunca** poblaba `members` (el `findMany` en
   `aulas.ts:135-141` no hace `include: { miembros: true }`).
3. El front reimplementaba el criterio "es docente del aula"
   ad-hoc, en vez de usar una fuente canónica.

## Investigación

### Modelo real

`Clase` Prisma (`api/prisma/schema.prisma:99-120`):
  - `id, escuelaId, name, grade, code, classCode, status, isDeleted`
  - `createdBy, teacherId, teacherOfRecord` ← singulares
  - `ClaseMiembro` ← `claseId, usuarioId, rolEnClase` (membresía)
  - `createdAt, updatedAt, deletedAt, deletedBy`

### Shape de respuesta actual

`GET /api/aulas` (`aulas.ts:135-150`):
```ts
const items = await prisma.clase.findMany({
  where: where as any,
  skip, take, orderBy: { updatedAt: "desc" }
  // SIN include.
});
res.json({
  items: items.map((item) => ({ ...item, id: item.id ?? "" })),
  limit, offset
});
```

Devuelve **solo el shape crudo de Clase**. `teacherIds`, `members`,
`viewerIsTeacher` → todos ausentes en el response.

### Criterio canónico ya existente

`isClassroomTeacher` en `api/src/lib/classroom-scope.ts:57-67`
(introducido en QA-FIX-05) ya encapsula la lógica completa de
"es docente del aula":

```ts
export const isClassroomTeacher = (
  classroom: Pick<AulaDoc, "createdBy" | "teacherId" | "teacherOfRecord" | "members">,
  userId: string | null,
  userRole?: string | null
): boolean => {
  if (userRole === "ADMIN") return true;
  if (isClassroomOwner(classroom, userId)) return true;  // createdBy / teacherId / teacherOfRecord
  if (!userId) return false;
  const members = Array.isArray(classroom.members) ? classroom.members : [];
  return members.some((entry) => entry.userId === userId && entry.roleInClass === "TEACHER");
};
```

Es **la única definición válida de "es docente del aula"** en el
back, y cubre los 3 caminos que el filtro viejo del front NO
capturaba.

## Opciones consideradas

| Opción | Resuelve el bug? | Acoplamiento | Notas |
|---|---|---|---|
| **A. Back expone `viewerIsTeacher` derivado vía `isClassroomTeacher`** | ✅ todos los caminos | Bajo (1 campo aditivo) | **Elegida.** Reusa criterio canónico; flag se actualiza solo si el back cambia. |
| B. Front reimplementa filtro con campos reales | ❌ no captura miembros | — | — |
| C. Back popula `teacherIds` desde `teacherId`/`teacherOfRecord` | ❌ no captura miembros | — | — |
| D. Front usa `createdBy`+`teacherId`+`teacherOfRecord` | ❌ no captura miembros | — | — |
| E. Back incluye `miembros`, front los filtra | ✅ | Medio (expone datos de membresía) | Más payload, dos definiciones de "es docente". |

## Decisión: Opción A

1. **Una sola fuente de verdad** para "es docente del aula" — el
   back, vía `isClassroomTeacher`. Si el back evoluciona (p.ej.
   agrega `coTeacherIds`), el flag se actualiza solo.
2. **Aditivo, no destructivo**: agregar `viewerIsTeacher: boolean`
   no rompe consumidores que no esperan ese campo.
3. **No expone la lista de miembros** (a diferencia de E).
4. **Cero re-implementación del criterio en el front**.

## Fix

### Back (`api/src/routes/aulas.ts:135-160`)

```ts
const items = await prisma.clase.findMany({
  where: where as any,
  include: { miembros: true },        // <-- nuevo
  skip: safeOffset,
  take: limit,
  orderBy: { updatedAt: "desc" }
});

const requesterRole =
  (req as { user?: { role?: string | null } }).user?.role ?? null;

res.json({
  items: items.map((item) => {
    const { miembros, ...rest } = item;       // separa el include
    const doc = {
      id: rest.id ?? "",
      createdBy: rest.createdBy ?? null,
      teacherId: rest.teacherId ?? null,
      teacherOfRecord: rest.teacherOfRecord ?? null,
      members: (miembros ?? []).map((m) => ({
        userId: m.usuarioId,
        roleInClass: m.rolEnClase
      }))
    };
    return {
      ...rest,
      id: doc.id,
      viewerIsTeacher: isClassroomTeacher(doc, requesterId, requesterRole)
    };
  }),
  limit,
  offset
});
```

- `include: { miembros: true }` → trae la membresía (no expuesto
  crudo en el response; se mapea y descarta).
- `isClassroomTeacher` consume el `AulaDoc` con `members` mapeado.
- El spread `...rest` no incluye `miembros` (lo separamos
  explícitamente).
- Aditivo: cualquier consumidor existente del response sigue
  recibiendo los mismos campos más `viewerIsTeacher`.

### Type front (`apps/web/src/domain/classroom/classroom.types.ts:34-44`)

```ts
/**
 * QA-FIX-08 — flag derivado en el back (isClassroomTeacher,
 * criterio canónico de QA-FIX-05). true cuando el viewer es
 * admin, owner por createdBy/teacherId/teacherOfRecord, o
 * miembro con rolEnClase === "TEACHER". El front usa esto para
 * el dropdown de aulas en ProfesorCalendario (en lugar de los
 * phantom teacherIds/members que el back nunca poblaba).
 */
viewerIsTeacher?: boolean;
```

### Front (`apps/web/src/pages/ProfesorCalendario.tsx:110-114`)

```ts
const misAulas = items.filter((a) => a.viewerIsTeacher === true);
setAulas(misAulas);
if (misAulas[0]) {
  setForm((f) => ({ ...f, aulaId: misAulas[0].id }));
}
```

Una línea. Ya no reimplementa el criterio; confía en el back.

### Defensa extra: submit deshabilitado

`apps/web/src/pages/ProfesorCalendario.tsx:544-555`:
```tsx
<button type="submit"
  disabled={
    guardando ||
    !form.titulo.trim() ||
    !form.fechaInicio ||
    (tab === "aula" && !form.aulaId)   // <-- nuevo
  }
  className="... disabled:opacity-50 disabled:cursor-not-allowed ..."
>
```

Si el form está en tab "aula" y no hay `aulaId`, el botón "Guardar
evento" queda deshabilitado. El bug nunca llega al 400.

(Nota: la dropdown ya tenía un guard parcial — no se renderiza si
`aulas.length === 0` — pero eso no impedía que la consola u otro
flujo mandara `aulaId: ""`. El `disabled` en el submit cierra la
puerta completa.)

## Tests

### Back — `api/tests/integracion/aulas-viewer-is-teacher.test.ts` (8 tests)

1. **TEACHER owner por `createdBy` → `viewerIsTeacher: true`**.
2. **TEACHER owner por `teacherId` → `viewerIsTeacher: true`**.
3. **TEACHER owner por `teacherOfRecord` → `viewerIsTeacher: true`**.
4. **TEACHER member (`rolEnClase === "TEACHER"` en `clase_miembros`,
   no owner) → `viewerIsTeacher: true`**. ← camino que el bug
   original NO capturaba.
5. **TEACHER ajeno al aula → `viewerIsTeacher: false`** (sigue
   apareciendo en la lista porque el filtro staff de
   `GET /api/aulas` lo trae por escuela, pero el flag lo deja
   fuera del dropdown).
6. **ADMIN → `viewerIsTeacher: true` en todas**.
7. **STUDENT ajeno no aparece en la lista** (filtrado por
   `accessLevel: learner`).
8. **El response NO incluye el array `miembros` crudo de Prisma**
   (defensivo: el `include: { miembros: true }` no debe filtrarse
   al front).

### Front — `apps/web/src/pages/__tests__/ProfesorCalendario.viewer-is-teacher.spec.tsx` (4 tests)

1. **TEACHER con aulas donde `viewerIsTeacher=true` → dropdown
   se puebla** (candado Q8: AULA_MIA aparece, AULA_AJENA no).
2. **TEACHER owner (createdBy) → sigue funcionando** (regresión).
3. **TEACHER con todas las aulas ajenas (`viewerIsTeacher=false`)
   → dropdown no se renderiza, submit disabled**.
4. **TEACHER sin aulas (lista vacía del back) → submit disabled,
   no se puede mandar `aulaId` vacío**.

## Aceptación

- `pnpm test:api`: 288/288 (de 280 → +8).
- `pnpm test:web`: 765/765 (de 761 → +4).
- 0 regresiones.

## Notas

- El role "canónico" de alumno en el back es `"USER"`, no
  `"STUDENT"` (mapeo en `membership-roles.ts:9`: `USER → STUDENT`).
  En los tests se usa `role: "USER"` para los alumnos; de lo
  contrario `resolveAccessLevel` retorna `null` y la ruta
  responde 403. Anotado en el test.
- El `include: { miembros: true }` es 1 query extra (N+1 evitable
  con un join, pero `findMany` Prisma ya lo aplana a una sola
  query en el adapter Postgres). Para aulas (típicamente <100 por
  escuela) es despreciable.
- El `viewerIsTeacher` es opcional en el type del front para no
  romper consumidores que aún no reciben este campo.

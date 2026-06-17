# DIAG-CALENDARIO — Eventos guardados no se muestran; directivo no puede asociar un aula al crear evento escuela

## Resumen
Cuatro bugs en el calendario más una mejora de producto: (1) un TEACHER-miembro ve aulas en el dropdown pero los eventos de esas aulas no aparecen en el feed unificado; (2) el back permite a TEACHER postear eventos escuela pero el front no se los expone; (3) el form escuela no tiene dropdown de aula y el back/modelo no contemplan `aulaId` en `CalendarioEscuela`; (4) un `try/catch` silencioso en el feed unificado puede tragar errores de Prisma. La mejora: workflow de "sugerencia de evento escuela" que el directivo acepta.

## Síntoma (texto del usuario)
> "calendario no da error al guardar pero no muestra los eventos guardados ni tampoco permite hacer eventos globales."
> "segundo test se entro desde directivo y los eventos si se pueden ver se creo un evento global y se puede ver solo que directivo no permite elegir un aula de el evento."
> "se podría crear una sugerencia de evento global el cual el directivo tiene que aceptar además de arreglar los bugs actuales de ese evento."

## Causa raíz (archivo:línea)

### Bug 1: TEACHER-miembro ve aulas en el dropdown pero el feed unificado NO las usa

El criterio "docente del aula" en el calendario es **más estrecho** que el criterio canónico. El back popla `viewerIsTeacher: true` (de `aulas.ts:135-160`, fix de QA-FIX-08) usando `isClassroomTeacher` (admin, owner, o miembro con `rolEnClase === "TEACHER"`), así que el dropdown de aulas en `ProfesorCalendario` ya muestra todas las aulas donde el TEACHER es docente. Pero el feed unificado filtra por un criterio más pobre:

`api/src/routes/calendario.ts:83-90`:
```ts
} else if (role === "TEACHER") {
  aulaWhere = {
    ...aulaWhere,
    OR: [
      { createdBy: userId! },
      { teacherId: userId! },
    ],
  };
}
```

Comparado con el criterio canónico `api/src/lib/classroom-scope.ts:57-67`:
```ts
export const isClassroomTeacher = (
  classroom: Pick<AulaDoc, "createdBy" | "teacherId" | "teacherOfRecord" | "members">,
  userId: string | null,
  userRole?: string | null
): boolean => {
  if (userRole === "ADMIN") return true;
  if (isClassroomOwner(classroom, userId)) return true;  // createdBy/teacherId/teacherOfRecord
  if (!userId) return false;
  const members = Array.isArray(classroom.members) ? classroom.members : [];
  return members.some((entry) => entry.userId === userId && entry.roleInClass === "TEACHER");
};
```

Diferencias concretas que descartan aulas válidas:
- El feed usa `OR: [createdBy, teacherId]` (singular), pero NO incluye `teacherOfRecord` (singular, distinto de `teacherId`).
- NO incluye la membresía `clase_miembros.rolEnClase === "TEACHER"`.

Resultado: un TEACHER que es solo miembro de un aula (no es `createdBy` ni `teacherId` ni `teacherOfRecord`) ve el aula en el dropdown de `ProfesorCalendario` (porque `a.viewerIsTeacher === true`) pero el feed unificado devuelve **cero** `ActividadAula` para esa aula, porque el `aulaWhere` la excluye. La actividad fue guardada (200 OK del POST) pero no aparece. Esto es exactamente la misma clase de bug que QA-FIX-08 documentó para el dropdown, pero el feed unificado nunca se migró al criterio canónico.

### Bug 2: el front bloquea la creación de eventos escuela para TEACHER, pero el back la permite

`apps/web/src/pages/ProfesorCalendario.tsx:77-78`:
```ts
const canEditEscuela = ["DIRECTIVO","ADMIN"].includes(role);
const canEditAula = ["TEACHER","DIRECTIVO","ADMIN"].includes(role);
```

`apps/web/src/pages/ProfesorCalendario.tsx:438-458`:
```ts
{canEditEscuela && canEditAula && (
  <div className="flex gap-1 mb-3 border-b border-[var(--c-border)]">
    {(["escuela","aula"] as const).map((t) => (
      <button key={t} ...>
        {t === "escuela" ? "🏫 Escuela" : "📚 Aula"}
      </button>
    ))}
  </div>
)}
```

Un TEACHER nunca ve el tab "🏫 Escuela", nunca ve el form escuela, y `tabEfectivo` se fuerza a "aula" en `ProfesorCalendario.tsx:176`:
```ts
const tabEfectivo = canEditEscuela ? tab : "aula";
```

Pero el back SÍ lo permite: `api/src/routes/calendario.ts:161`:
```ts
if (!["DIRECTIVO", "ADMIN", "TEACHER"].includes(role ?? "")) {
  return res.status(403).json({ error: "forbidden" });
}
```

Inconsistencia: la API acepta `POST /api/calendario/escuela` de un TEACHER, pero la UI no le da el botón. Si un TEACHER dispara el POST con `curl`, graba el evento escuela. Esto es el típico síntoma que la sugerencia de "evento escuela por TEACHER" ya está parcialmente contemplada en el back pero nunca se cerró en el front — el bug de hoy se manifiesta como "no me deja hacer eventos globales".

### Bug 3: el form escuela no tiene dropdown de aula y el modelo `CalendarioEscuela` no permite aulaId

El form solo expone el aula en el tab "aula": `apps/web/src/pages/ProfesorCalendario.tsx:478-495`:
```tsx
{tab === "aula" && aulas.length > 0 && (
  <label ...>
    Aula
    <select value={form.aulaId} onChange={...}>
      {aulas.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
    </select>
  </label>
)}
```

El POST escuela no acepta aulaId: `api/src/routes/calendario.ts:166-167`:
```ts
const { tipo, titulo, descripcion, fechaInicio, fechaFin } =
  req.body as Record<string, unknown>;
```

El modelo Prisma `CalendarioEscuela` no tiene `aulaId` ni relación con `Clase`: `api/prisma/schema.prisma:415-427`:
```prisma
model CalendarioEscuela {
  id           String  @id
  escuelaId    String  @map("escuela_id")
  tipo         String
  titulo       String
  descripcion  String?
  fechaInicio  String  @map("fecha_inicio")
  fechaFin     String  @map("fecha_fin")
  createdBy    String  @map("created_by")
  createdAt    String  @map("created_at")
  isDeleted    Boolean @default(false) @map("is_deleted")
  @@map("calendario_escuela")
}
```

Un directivo que quiere crear "Acto escolar para 5A" no puede modelarlo: el evento es global por definición, no se puede acotar a un aula. El dropdown no se renderiza en el tab escuela, el back descarta el campo si lo manda, y aunque se persistiera no hay columna. Esta es la mitad del pedido de la mejora (sugerencia de evento global): necesitamos que el directivo pueda decidir **el alcance** del evento escuela.

### Bug 4: try/catch silencioso en el feed unificado

`api/src/routes/calendario.ts:75-127`:
```ts
try {
  let aulaWhere: Prisma.ClaseWhereInput = { isDeleted: false, status: "ACTIVE" };
  // ... filtros por rol
  const aulas = await prisma.clase.findMany({ where: aulaWhere, select: { id: true, name: true } });
  // ...
  if (aulaIds.length > 0) {
    const actividadesAula = await prisma.actividadAula.findMany({ ... });
    for (const a of actividadesAula) { eventos.push({ ... }); }
  }
} catch { /* si Prisma falla devolver solo escuela */ }
```

Si Prisma lanza (drift de schema, columna inexistente, timeout), la respuesta vuelve como 200 con **solo** los eventos escuela, sin error. El cliente no se entera. Esto puede ser el motivo por el cual "no muestra los eventos guardados" sin dar error en consola: si la query del bloque aula explota silenciosamente, el usuario solo ve los eventos escuela (que son los que él mismo ve como directivo). En el log de Node sí queda el error, pero el `front` no lo muestra (`fetchCalendarioUnificado` en `calendarioUnificado.ts:28-36` solo loguea el reject del promise en `cargarEventos` línea 132, también con `.catch(() => {})`).

## Por qué no es un bug nuevo sino una constelación

QA-FIX-08 (`docs/qa/qa-fix-08.md`) ya arregló el dropdown de aulas en `ProfesorCalendario` para que respete el criterio canónico, pero **el feed unificado de calendario no se actualizó en ese commit**. Por eso un TEACHER-miembro que ganó aulas en el dropdown (post-fix) ahora ve "veo mis aulas pero no veo los eventos que tienen". Es la misma raíz que `diagnostico_modulo_editor_crash.md` y `diagnostico_modulo_instancia.md`: el back tiene una versión de la verdad (es docente por tres vías), el front tiene otra, y nadie propagó el cambio a la consulta siguiente.

## Evidencia
- `api/src/routes/calendario.ts:83-90` → `aulaWhere` para TEACHER con `OR: [createdBy, teacherId]`, sin `teacherOfRecord` ni membresía.
- `api/src/lib/classroom-scope.ts:57-67` → `isClassroomTeacher` canónico (admin / owner / miembro TEACHER).
- `api/src/routes/aulas.ts:135-160` → `viewerIsTeacher` derivado con el criterio canónico (QA-FIX-08).
- `apps/web/src/pages/ProfesorCalendario.tsx:118` → `items.filter((a) => a.viewerIsTeacher === true)` (dropdown).
- `apps/web/src/pages/ProfesorCalendario.tsx:77` → `canEditEscuela = ["DIRECTIVO","ADMIN"]` (UI bloquea TEACHER).
- `apps/web/src/pages/ProfesorCalendario.tsx:176` → `tabEfectivo = canEditEscuela ? tab : "aula"`.
- `apps/web/src/pages/ProfesorCalendario.tsx:438-458` → tab switcher solo si `canEditEscuela && canEditAula`.
- `apps/web/src/pages/ProfesorCalendario.tsx:478-495` → dropdown aula solo en `tab === "aula"`.
- `api/src/routes/calendario.ts:161` → back SÍ permite TEACHER POST escuela.
- `api/src/routes/calendario.ts:166-167` → POST escuela no extrae `aulaId`.
- `api/prisma/schema.prisma:415-427` → `CalendarioEscuela` sin `aulaId` ni relación con `Clase`.
- `api/src/routes/calendario.ts:75-127` → try/catch silencioso en el bloque aula del feed unificado.
- `apps/web/src/services/calendarioUnificado.ts:28-36` → service sin manejo de error específico (devuelve array vacío si Prisma falla).
- `api/src/routes/calendario.ts:134-153` → `GET /api/calendario/escuela` definido pero **no llamado por el front** (código muerto).

## Impacto
- TEACHER-miembro: ve el dropdown de aulas, puede seleccionar una, postea un evento, recibe 200, pero el evento no aparece en el feed unificado (Bug 1). El POST de aula (200 OK) miente: dice que guardó, el feed lo oculta.
- TEACHER: no puede proponer eventos escuela desde la UI (Bug 2), aunque la API lo aceptaría.
- DIRECTIVO: puede postear eventos escuela pero no puede acotarlos a un aula específica (Bug 3). Si quiere "acto escolar solo para 5A", no puede modelarlo.
- Si Prisma explota en el feed (drift, columna faltante, timeout), el usuario ve el calendario como si estuviera vacío sin error en la UI (Bug 4). Difícil de diagnosticar.

## Mejora de producto: sugerencia de evento escuela (pendiente de alcance)

Un TEACHER crea un **borrador** de evento escuela. Aparece en una bandeja del directivo. El directivo acepta (se materializa como `CalendarioEscuela`) o rechaza (queda como histórico con `isDeleted = true` y un flag de rechazo). Esto da al TEACHER una vía para pedir un evento global sin tener permisos para crearlo, y mantiene al directivo en control.

Diseño tentativo:
- Modelo: nueva tabla `calendario_escuela_sugerencias` con FK a `CalendarioEscuela` definitivo (nullable) + estado (`pendiente | aprobada | rechazada`) + `aulaIds: string[]` (JSON) + campos opcionales del evento (`tipo`, `titulo`, `descripcion`, `fechaInicio`, `fechaFin`) + `sugeridoPor`, `sugeridoAt`, `resueltoPor`, `resueltoAt`, `motivoRechazo`.
- Back:
  - `POST /api/calendario/escuela/sugerencias` → TEACHER/DIRECTIVO/ADMIN crean sugerencia.
  - `GET /api/calendario/escuela/sugerencias?estado=pendiente` → DIRECTIVO/ADMIN listan.
  - `POST /api/calendario/escuela/sugerencias/:id/aprobar` → DIRECTIVO/ADMIN promueven a `CalendarioEscuela`. Si el `aulaIds` viene poblado, replica N filas en `ActividadAula` con `escuelaId_origen` (o un nuevo `evento_escuela_aulas`).
  - `POST /api/calendario/escuela/sugerencias/:id/rechazar` → DIRECTIVO/ADMIN con `motivoRechazo`.
- Front: nueva tab "Sugerencias" en `ProfesorCalendario` (solo DIRECTIVO/ADMIN). Para TEACHER, en el form escuela aparece un botón "Sugerir evento global" en vez de "Guardar evento".
- Decisión abierta: ¿el evento escuela aprobado puede mantener un `aulaId` (Bug 3 fix)? Si sí, hay que migrar `CalendarioEscuela` para soportar `aulaId` opcional o una tabla puente `calendario_escuela_aulas` (M:N). Si no, se pierde la mitad del pedido de la mejora.

## Propuesta de fix (sin aplicar)

### Opción A — Bug 1: usar `isClassroomTeacher` en el feed unificado (mínimo invasivo)

En `api/src/routes/calendario.ts:95-98`, reemplazar el `findMany` de aulas por una consulta equivalente al criterio canónico. Concretamente:
```ts
// Antes:
const aulas = await prisma.clase.findMany({
  where: aulaWhere,            // ← incompleto para TEACHER
  select: { id: true, name: true }
});
```
```ts
// Después (TEACHER):
const aulas = await prisma.clase.findMany({
  where: {
    isDeleted: false, status: "ACTIVE",
    OR: [
      { createdBy: userId! },
      { teacherId: userId! },
      { teacherOfRecord: userId! },
      { miembros: { some: { usuarioId: userId!, rolEnClase: "TEACHER" } } },
    ],
  },
  select: { id: true, name: true }
});
```

O más limpio: importar `isClassroomTeacher` y aplicarlo post-query en memoria (las aulas suelen ser docenas, no miles).

**Costo**: ~10 líneas, ningún cambio de schema. **Riesgo**: bajo — es exactamente la lógica que `aulas.ts:135-160` ya usa (post-QA-FIX-08). **Alcance**: arregla el feed unificado para TEACHER-miembro.

### Opción B — Bug 3: permitir `aulaId` opcional en `CalendarioEscuela`

Dos sub-opciones:
- B1: agregar columna `aulaId String?` a `CalendarioEscuela` (FK lógica a `Clase.id`, no enforced por Prisma para no tocar la migración), y aceptar `aulaId` en el POST escuela (`calendario.ts:166-167`). Front: agregar dropdown de aula en el tab escuela (toggle "global / solo para un aula"). Si `aulaId` viene, el evento aparece como "🏫 5A" en vez de "🏫 global". El feed unificado necesita ramificar: si `calendarioEscuela.aulaId` está, mostrarlo como `origen: "escuela"` pero con `aulaId` poblado para que el front lo renderice como "solo aula X".
- B2: tabla puente `calendario_escuela_aulas` (M:N) para soportar "acto escolar → 5A y 5B". Más flexible pero requiere migración nueva.

**Costo**: B1 ≈ +1 migración + 1 campo en Prisma + 4-5 líneas back + UI. B2 ≈ +1 migración + tabla + endpoint. **Riesgo**: bajo-medio. **Alcance**: habilita "acto escolar acotado" que es la mitad de la mejora pedida.

### Opción C — Bug 2: alinear front y back

Eliminar la inconsistencia. Dos opciones:
- C1: si los TEACHER no deberían poder crear eventos escuela, **quitar TEACHER del allowlist** en `calendario.ts:161`. Front y back coinciden en "solo DIRECTIVO/ADMIN".
- C2: si sí deberían (que es la base de la mejora "sugerencia de evento"), **exponer el tab escuela para TEACHER** pero deshabilitar el botón "Guardar" y reemplazarlo por "Sugerir evento global" (que crea la sugerencia en vez de un `CalendarioEscuela` directo). El back exige rol DIRECTIVO/ADMIN para `POST /api/calendario/escuela` y agrega `POST /api/calendario/escuela/sugerencias` con allowlist TEACHER/DIRECTIVO/ADMIN.

**Costo**: C1 = 1 línea. C2 = nueva ruta + UI + tests. **Riesgo**: bajo.

### Opción D — Bug 4: log + 500 explícito

Envolver el `try/catch` silencioso (`calendario.ts:75-127`) en algo que:
1. Loguee el error con `console.error("[calendario.unificado] aula block failed", err)`.
2. Devuelva `500` con `{ error: "feed parcial" }` o, si se decide mantener la degradación a "solo escuela", al menos set `eventos` con un flag `degraded: true` para que el front lo muestre en un toast.

**Costo**: 3-5 líneas. **Riesgo**: bajo. **Alcance**: mejora diagnóstico.

### Opción E (integral) — A + B1 + C2 + D + workflow de sugerencia

Aplica los cuatro fixes funcionales y agrega el workflow de sugerencia como pide la mejora. Costo: 1 migración Prisma, ~150-200 líneas de back nuevo, 1 tab nueva en el front, 4-6 tests nuevos. Riesgo: medio. Es lo que recomendaría si la mejora es priorizada.

### Opción F (mínima) — A + C1 + D

Solo los tres bugs sin la mejora. El "no permite hacer eventos globales" se arregla para TEACHER retirando la opción (consistente con front). El directivo sigue sin poder asociar un aula al evento escuela (Bug 3 queda pendiente hasta que se priorice la mejora de sugerencia). El try/catch silencioso se loguea.

**Costo**: ~20 líneas. **Riesgo**: muy bajo.

## Tests que se necesitarían (después del fix)

Para A:
- back: TEACHER-miembro (no owner, no `teacherId` ni `teacherOfRecord`) → `GET /api/calendario/unificado` con un mes donde su aula tiene 1 `ActividadAula` → 200, `eventos[].origen === "aula"`, `eventos[].aulaId === <id de su aula>`.
- back: TEACHER que no es docente de un aula → `GET /api/calendario/unificado` → no aparece ningún `ActividadAula` de esa aula.
- front: `ProfesorCalendario` con aulas en el dropdown y `ActividadAula` creada en back → feed unificado contiene la actividad y la celda del calendario muestra el badge.

Para C1:
- back: TEACHER → `POST /api/calendario/escuela` → 403.
- back: DIRECTIVO → `POST /api/calendario/escuela` → 201.

Para C2 / workflow de sugerencia:
- back: TEACHER → `POST /api/calendario/escuela/sugerencias` → 201 con `estado: "pendiente"`.
- back: DIRECTIVO → `GET /api/calendario/escuela/sugerencias?estado=pendiente` → 200 con la sugerencia.
- back: DIRECTIVO → `POST /api/calendario/escuela/sugerencias/:id/aprobar` → 201, existe nueva fila en `calendario_escuela` con los mismos datos.
- back: DIRECTIVO → `POST /api/calendario/escuela/sugerencias/:id/rechazar` con `motivoRechazo` → 200, sugerencia queda `estado: "rechazada"`.
- front: tab "Sugerencias" en `ProfesorCalendario` para DIRECTIVO muestra la cola, tiene botones "Aprobar" / "Rechazar" con modal de motivo.

Para B1:
- back: DIRECTIVO → `POST /api/calendario/escuela` con `aulaId` → 201, fila en `calendario_escuela` con `aulaId` poblado.
- back: feed unificado devuelve ese evento con `origen: "escuela"`, `aulaId` poblado y `aulaNombre` resuelto.
- front: tab escuela muestra el dropdown "Aplicar a" con opción "Toda la escuela" + cada aula; si elige aula, el form la persiste.

Para D:
- back: forzar un error de Prisma en el bloque aula (mock o query inválida) → 500 con `{ error: ... }` y el log del servidor muestra `[calendario.unificado] aula block failed`.

## Aceptación del diagnóstico

Los cuatro bugs están identificados con archivo:línea y cada uno tiene un fix acotado. La mejora de producto (sugerencia de evento escuela) tiene un diseño tentativo pero depende de una decisión de producto: ¿el evento escuela aprobado puede tener un aulaId (Opción B) o queda siempre global? Recomiendo empezar por la Opción F (A + C1 + D) si solo se quieren arreglar los bugs visibles, o la Opción E si se prioriza la mejora completa.

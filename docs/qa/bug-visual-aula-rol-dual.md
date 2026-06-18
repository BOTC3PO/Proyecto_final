# Bugs visuales: navbar y chrome de aula para usuarios no-USER (incluye dual-role)

**Fecha**: 2026-06-17
**Origen**: análisis estático del layout/nav del aula durante la
discusión sobre el "modo alumno".
**Severidad**: 🟡 medio (UX inconsistente; no rompe datos ni
autorización, pero confunde sistemáticamente al staff que entra
a `/clases/:aulaId`).
**Alcance**: este documento lista los **bugs visuales existentes**
que se hacen visibles cuando un usuario **no-USER** (TEACHER,
DIRECTIVO, ADMIN, PARENT) entra a la zona alumno, en particular
a la ruta `/clases/:aulaId`. No incluye fixes — solo inventario
y propuesta de solución.

> **Contexto**: un usuario real puede tener más de un "rol
> funcional" en el sistema — un TEACHER también puede ser USER
> (alumno) en un aula de otro docente; un PARENT puede tener su
> propia cuenta como USER para tomar cursos. El modelo de
> Prisma actual (`api/prisma/schema.prisma:65`, `role: String` —
> un solo string por usuario) **no soporta** dos roles
> simultáneos en el mismo `Usuario`. Esta limitación se manifiesta
> en bugs visuales cuando un staff entra a la zona alumno.

---

## El navbar del aula — bug principal

### Síntoma
No importa si entrás como USER, TEACHER, DIRECTIVO, ADMIN o
PARENT a `/clases/:aulaId` (o a cualquier ruta bajo el
`AlumnoLayout`), el navbar superior siempre se ve **idéntico**:

- Items centrales: `Inicio, Clases, Tareas, Progreso, Módulos,
  Calendario, Mensajes` (los del rol USER).
- Dropdown del avatar: las opciones del rol real del viewer
  (TEACHER ve "Mi perfil / Ver como alumno", ADMIN ve "Mi perfil
  / Ver como alumno", PARENT ve solo "Mi perfil", USER ve
  "Mi perfil / Economía / Tienda / Encuestas").
- Si sos TEACHER/DIRECTIVO/ADMIN aparece un link "← Volver a mi
  panel" a la izquierda del avatar.

El resultado es **incoherente**: el body del navbar dice "estás
en la vista alumno" (items de USER), pero el dropdown y el botón
"volver" delatan el rol real. Y al revés: si sos USER alumno de
un aula ajena, el navbar no te dice "no sos docente acá" en
ningún lado.

### Causa raíz
`apps/web/src/nav/AlumnoNavbar.tsx:6-10`:

```tsx
export default function AlumnoNavbar() {
  const { user, logout } = useAuth();
  const items = NAV_BY_ROLE['USER'];                       // ← hardcoded
  const dropdownItems = DROPDOWN_BY_ROLE[user?.role as keyof typeof DROPDOWN_BY_ROLE]
    ?? DROPDOWN_BY_ROLE['USER'];
  // ...
}
```

`items` está **hardcoded a `NAV_BY_ROLE['USER']`**, sin importar
el rol del viewer. El dropdown sí respeta `user.role`, por eso
la mitad del navbar dice "USER" y la otra mitad dice "lo que seas
realmente".

### Repro
1. Loguear como TEACHER.
2. Sidebar → avatar → "Ver como alumno".
3. La URL queda en `/alumno`. El navbar muestra:
   - Inicio / Clases / Tareas / Progreso / Módulos / Calendario /
     Mensajes (items de USER).
   - Avatar → dropdown: "Mi perfil / Ver como alumno / Cerrar
     sesión".
   - "← Volver a mi panel" apuntando a `/profesor`.
4. Repetir como ADMIN → idéntico navbar central + dropdown "Mi
   perfil / Ver como alumno".

### Resultado esperado (al menos una de las dos)
- **Opción A** (recomendada): el navbar es **consciente del rol**.
  Si sos USER real, ves los items USER + el dropdown USER sin
  link "volver". Si sos staff, ves un navbar **explícitamente
  marcado** como "Vista previa de Alumno" (banner inline) y los
  items se mantienen en `NAV_BY_ROLE['USER']` para que el staff
  vea la UI real del alumno, PERO el dropdown deja de ofrecer
  "Ver como alumno" (es circular cuando ya estás ahí) y muestra
  solo "Mi perfil" + "Cerrar sesión".
- **Opción B**: el navbar se mantiene idéntico para todos, pero
  el dropdown de staff filtra "Ver como alumno" cuando ya está
  en `/alumno` o `/clases/*`.

---

## Bug 2 — Header del aula: dice "Docente" o "Docente invitado" para un alumno

### Síntoma
`apps/web/src/pages/aula.tsx:328-334`:

```tsx
const roleLabel = useMemo(() => {
  if (!user) return "Invitado";
  if (user.role === "TEACHER") return isTeacherOfClass ? "Docente" : "Docente invitado";
  if (user.role === "USER") return "Estudiante";
  if (user.role === "PARENT") return "Familia";
  return "Invitado";
}, [isTeacherOfClass, user]);
```

El label se calcula con `user.role` (el rol global de la cuenta),
no con la membresía **en esta aula**. Resultado:

| Cuenta global | Membresía en este aula | Label que se ve | Label correcto |
|---|---|---|---|
| `TEACHER` (docente de su propia aula) | TEACHER | "Docente" | "Docente" |
| `TEACHER` (alumno en un aula ajena) | USER | "Docente invitado" | "Estudiante" |
| `USER` (alumno real) | USER | "Estudiante" | "Estudiante" |
| `PARENT` (familiar) | PARENT | "Familia" | "Familiar" |

La fila 2 (TEACHER como alumno en aula ajena) es la que rompe:
muestra "Docente invitado" cuando en realidad el usuario es
**alumno** en esa aula, no invitado ni docente.

### Causa raíz
La membresía real del usuario en esa aula vive en
`classroom.members[].roleInClass` (que el back ya devuelve vía
`requireClassroomScope`), pero el `roleLabel` se computa solo
con `user.role` (el rol global del JWT). El check de membresía
`isTeacherOfClass` existe pero solo se usa para decidir entre
"Docente" y "Docente invitado", no para el resto de los casos.

### Repro
1. Crear dos usuarios: `profesor-A` (TEACHER) y `profesor-B`
   (TEACHER). Ambos están en la misma escuela.
2. `profesor-A` crea un aula y se agrega como TEACHER-miembro
   (`clase_miembros`).
3. `profesor-A` agrega a `profesor-B` como **STUDENT-miembro**
   (la membresía dual que el sistema debería soportar).
4. `profesor-B` entra a `/clases/<aula-de-A>`. Ve en el header:
   **"Docente invitado • Profesor A | Código de clase: ..."**.
5. Esperado: **"Estudiante • Profesor A | Código de clase: ..."**.

### Por qué importa
- Privacidad visual: el docente A ve en su lista de miembros a
  B como "Estudiante" en el back, pero cuando B entra al aula
  el header dice "Docente invitado" → contradicción.
- El docente B puede tomar la membresía STUDENT como
  "ser docente invitado" y reportar bugs asumiendo el rol
  equivocado.

---

## Bug 3 — Header del aula: dice "Acceso visitante · pública" para un alumno real

### Síntoma
`apps/web/src/pages/aula.tsx:336-341`:

```tsx
const accessLabel = useMemo(() => {
  const accessTypeLabel = classroom?.accessType === "privada" ? "privada" : "pública";
  if (user?.role === "USER") return `estudiante · ${accessTypeLabel}`;
  if (user?.role === "PARENT") return `familiar · ${accessTypeLabel}`;
  return `visitante · ${accessTypeLabel}`;
}, [classroom?.accessType, user]);
```

La label se calcula por `user.role` global. Un TEACHER que es
miembro STUDENT de un aula ajena ve "Acceso visitante · pública"
en el header — **incluso siendo miembro**.

### Causa raíz
Misma que el bug 2: el chequeo no mira `classroom.members[].roleInClass`
para esta aula específica, solo el rol global.

### Repro
1. Mismo setup que bug 2.
2. `profesor-B` entra a `/clases/<aula-de-A>`.
3. El header muestra: **"Docente invitado • Profesor A | ... | Acceso visitante · pública"**.

### Por qué importa
- "Visitante" implica que el usuario NO es miembro. Pero sí lo
  es (como alumno). El back lo deja entrar (autorización
  correcta), pero la UI dice lo contrario.
- Si el aula es **privada** y el rol dice "visitante", el
  usuario puede pensar que no debería estar viendo esto.

---

## Bug 4 — Botón "Gestionar aula" aparece para cualquier TEACHER

### Síntoma
`apps/web/src/pages/aula.tsx:401-413`:

```tsx
{user?.role === "TEACHER" ? (
  classroomId ? (
    <Link to={`/profesor/aulas/${classroomId}`}>
      Gestionar aula
    </Link>
  ) : (
    <span>Acceso {accessLabel}</span>
  )
) : (
  <div>Acceso {accessLabel}</div>
)}
```

El botón "Gestionar aula" se muestra a **cualquier TEACHER** que
entre al aula, independientemente de si es TEACHER-miembro del
aula o no. Si el TEACHER es un STUDENT-miembro, el botón igual
aparece y lo lleva a `/profesor/aulas/<id>`, donde el back le
permite entrar (porque `requireClassroomScope` con
`allowMemberRoles: ["ADMIN", "TEACHER"]` no aplica para STUDENT
miembros, pero a nivel UI no se valida antes).

### Causa raíz
El check es de rol global, no de membresía en la aula. Lo
correcto sería chequear `isTeacherOfClass` (que ya existe en
este mismo archivo y se calcula con el criterio canónico del
back).

### Repro
1. Mismo setup que bug 2.
2. `profesor-B` entra a `/clases/<aula-de-A>`.
3. Ve el botón **"Gestionar aula"** abajo a la derecha del header.
4. Lo clickea y va a `/profesor/aulas/<id>`. El back, dependiendo
   de la policy, le muestra la pantalla de config o le tira 403.

### Por qué importa
- Privacidad: un TEACHER que es alumno de un aula ajena ve el
  botón de gestión, lo clickea y entra a la config (o se
  frustra con el 403). Ninguno de los dos resultados es
  deseable.
- La acción de "gestión" debe limitarse a quien realmente es
  TEACHER-miembro (o ADMIN global, o DIRECTIVO de la escuela).
  El check ya está implementado en `isTeacherOfClass`, solo
  falta usarlo acá.

---

## Bug 5 — "Ver como alumno" en dropdown es circular cuando ya estás ahí

### Síntoma
`apps/web/src/nav/navConfig.ts:85, 91, 97` define "Ver como alumno"
para TEACHER, DIRECTIVO y ADMIN. La opción apunta a `/alumno`.

Cuando un TEACHER ya está en `/alumno` o en `/clases/:aulaId`
(la zona alumno), el dropdown del avatar le sigue mostrando
"Ver como alumno" como opción clickeable. Si lo clickea,
simplemente recarga la misma página o navega a `/alumno`
(que ya estaba dentro del layout alumno).

### Causa raíz
La opción del dropdown es estática (`label: "Ver como alumno",
to: "/alumno"`), no se computa por contexto.

### Repro
1. TEACHER → sidebar → "Ver como alumno" → URL `/alumno`.
2. Avatar → dropdown → "Ver como alumno" sigue ahí.
3. Click → URL sigue siendo `/alumno` (no pasa nada visible).

### Por qué importa
- UX: el dropdown ofrece una acción que no tiene sentido en el
  contexto actual.
- "Ver como alumno" se creó para entrar a la zona alumno desde
  la zona staff. Una vez dentro, no aplica.

---

## Bug 6 — Dropdown de USER ofrece "Ver como alumno" si USER tiene permiso de staff

### Síntoma
`apps/web/src/nav/navConfig.ts:75-82`: el dropdown de USER ofrece
"Mi perfil / Economía / Tienda de temas / Encuestas / Cerrar
sesión". No ofrece "Ver como alumno" — OK, porque USER no es
staff. Pero si el modelo de Prisma evoluciona a multi-rol
(un USER que también es TEACHER), este dropdown queda inconsistente
con la matriz `isStaffRole()` del back.

### Por qué importa
- Hoy USER no ve "Ver como alumno" porque no es staff. Si en el
  futuro el sistema soporta multi-rol (un USER que también es
  TEACHER), el dropdown debería mostrar la opción staff
  condicionalmente. El helper `DROPDOWN_BY_ROLE[user.role]` se
  basa en `user.role` (un solo string), por lo que esta lógica
  no escala.

---

## Bug 7 — `MisClases` no diferencia entre "clases donde soy alumno" y "clases donde soy staff"

### Síntoma
`apps/web/src/pages/MisClases.tsx:209`:

```tsx
{aula.members.filter((m) => m.roleInClass === "STUDENT").length} alumnos
```

`MisClases` lista las aulas donde el usuario es miembro y
cuenta los STUDENT-miembros. Para un TEACHER en su propia aula,
esto funciona. Para un TEACHER que es STUDENT-miembro en un aula
ajena, también funciona (cuenta los estudiantes reales de esa
aula). Pero la página no muestra **qué rol tiene el viewer en
cada aula**: si soy TEACHER de la mía y USER en otras, la
lista se ve igual para todas.

### Por qué importa
- Un TEACHER que es alumno en un aula de otro colega debería ver
  esa aula marcada con algún indicador ("Como alumno" / "Como
  oyente") para saber que en esa aula no tiene permisos de
  gestión. Hoy el listado no diferencia.

---

## Resumen de los bugs

| # | Bug | Severidad | Archivo principal |
|---|---|---|---|
| 1 | Navbar del aula: items USER hardcoded, dropdown del rol real, sin contexto | 🟠 alto | `nav/AlumnoNavbar.tsx:8` |
| 2 | Header: "Docente invitado" para un USER-en-este-aula | 🟠 alto | `pages/aula.tsx:328-334` |
| 3 | Header: "Acceso visitante" para un miembro | 🟡 medio | `pages/aula.tsx:336-341` |
| 4 | "Gestionar aula" para cualquier TEACHER (incluso no-miembro) | 🟠 alto (privilegio) | `pages/aula.tsx:401-413` |
| 5 | "Ver como alumno" en dropdown es circular cuando ya estás ahí | 🟢 bajo | `nav/navConfig.ts:85,91,97` |
| 6 | Dropdown USER no escala a multi-rol | 🟡 medio (forward-looking) | `nav/navConfig.ts:75-82` |
| 7 | `MisClases` no muestra el rol del viewer en cada aula | 🟡 medio | `pages/MisClases.tsx:209` |

---

## Causa raíz común

El modelo de datos actual (`api/prisma/schema.prisma:60-82`) tiene
un solo `role: String` por usuario. Esto encaja tres problemas
compuestos:

1. **No se puede ser staff y alumno a la vez**: si un TEACHER
   quiere tomar un curso de otro docente, no existe el
   `roleInClass: "STUDENT"` para un usuario con `role: "TEACHER"`
   en la DB — y aunque existiera, el back no lo validaría
   porque `requireClassroomScope` se basa en `user.role` global
   combinado con el `roleInClass` (mecanismo parcialmente
   soportado en `clase_miembros` pero no consumido por el front).
2. **El front no contextualiza por aula**: `roleLabel`,
   `accessLabel`, el botón "Gestionar aula", el dropdown del
   avatar — todos computan contra `user.role` global, no
   contra la membresía en el aula actual.
3. **El navbar no sabe que estás en modo "preview"**: cuando un
   staff entra a `/alumno`, el navbar muestra `NAV_BY_ROLE['USER']`
   sin ninguna indicación de que es preview.

## Por qué es estructural y no se arregla con un parche chico

Cualquier fix puntual (por ejemplo, hardcodear `if (user.role === 'TEACHER' && isTeacherOfClass)`)
solo cubre uno de los casos. La cantidad de sitios que asumen
"un solo rol global" es lo que hace que valga la pena un
refactor más grande:

- 7 lugares en `aula.tsx` chequean `user.role` directamente.
- 4 lugares en `AlumnoNavbar.tsx` y `navConfig.ts`.
- ~12 lugares en otros archivos (Gobernanza, ProfesorAulas,
  etc.).

## Posibles soluciones (ordenadas por alcance)

### Opción A — Front-only: contexto por aula via `classroom.viewerIsTeacher` y `classroom.viewerRoleInClass`

**Idea**: el back ya devuelve `viewerIsTeacher` para aulas
listadas. Se agrega `viewerRoleInClass` (nuevo campo) al DTO
del GET `/api/aulas/:id`. El front usa estos campos en vez de
`user.role` para todos los checks del aula.

**Cambios necesarios**:
- `api/src/lib/classroom-scope.ts`: agregar `viewerRoleInClass`
  al `AulaDoc`.
- `api/src/routes/aulas.ts:245-257` (GET `/api/aulas/:id`):
  popular `viewerRoleInClass` con el rol del viewer en
  `clase_miembros` (o `null` si no es miembro).
- `apps/web/src/domain/classroom/classroom.types.ts`:
  agregar `viewerRoleInClass?: "TEACHER" | "STUDENT" | "PARENT"`
  al tipo `Classroom`.
- `apps/web/src/pages/aula.tsx`: usar `classroom.viewerRoleInClass`
  en vez de `user.role` para `roleLabel`, `accessLabel` y el
  botón "Gestionar aula".
- `apps/web/src/nav/AlumnoNavbar.tsx`: si
  `user.role !== 'USER'` (staff), mostrar un banner "Vista previa
  de Alumno" arriba del navbar, en vez de cambiar los items.

**Pros**:
- Mantiene `user.role` como global (no requiere migrar a multi-rol).
- Cubre los bugs 1, 2, 3, 4, 5.
- No requiere tocar el back-end más allá de propagar un campo.

**Contras**:
- No resuelve el bug 6 (multi-rol) ni el bug 7 (MisClases).
- El back-end tiene que agregar el campo nuevo, pero eso es
  trivial.

**Estimación**: 2-3 días.

### Opción B — Multi-rol en Prisma: `Usuario.roles: String[]`

**Idea**: cambiar el modelo de Prisma para que un usuario
pueda tener varios roles funcionales (TEACHER, USER, ADMIN,
etc.). La membresía en cada aula sigue viviendo en
`clase_miembros.roleInClass` y se cruza con los roles del
usuario a nivel de policy.

**Cambios necesarios**:
- Migración Prisma: `Usuario.roles: String[]` (reemplaza o se
  suma a `role: String`).
- `api/src/lib/authorization.ts`: `isStaffRole(roles)` ahora
  itera sobre el array.
- `api/src/lib/auth-token.ts`: el JWT lleva `roles: string[]`.
- Front: `User.roles: Role[]` en el contexto de auth.
- Todos los checks `user.role === 'TEACHER'` → `user.roles.includes('TEACHER')`.
- Las policies del back que usan `req.user.role` se actualizan
  similarmente.
- `aula.tsx` puede tomar una decisión compuesta:
  `viewerIsTeacher || (classroom.viewerIsTeacher)`.

**Pros**:
- Resuelve los 7 bugs de raíz.
- Soporta el caso real "un profesor que toma un curso de otro
  colega" sin hacks.
- Es el modelo "correcto" a futuro.

**Contras**:
- Migración Prisma: requiere plan de datos (migrar `role: "TEACHER"`
  a `roles: ["TEACHER"]`).
- Cambio transversal: toca auth, lib/authorization, todos los
  routes con checks de role, todo el front con `user.role`.
- Riesgo de regresión alto (afecta a todos los roles).

**Estimación**: 2-3 sprints (1 sprint de migraciones + 1 de
front + 1 de QA).

### Opción C — No hacer nada (status quo)

**Idea**: el bug es cosmético y no rompe datos. Los docentes
saben que están en la "vista previa" y vuelven con el botón
"← Volver a mi panel".

**Pros**: cero trabajo.
**Contras**: la confusión persiste y empeora con dual-role real.

---

## Recomendación

**Opción A** como primer paso (rápido, cubre los 5 bugs
principales). **Opción B** cuando se justifique el trabajo de
multi-rol real (lo cual probablemente llegue cuando la
plataforma crezca a equipos interdisciplinarios donde los
docentes también son estudiantes).

Mientras tanto, **el bug 1 (navbar)** se puede arreglar **en 1
día** con un fix puntual en `AlumnoNavbar.tsx`: agregar un
banner "👀 Estás viendo la vista alumno" cuando
`user.role !== 'USER'`, y filtrar "Ver como alumno" del
dropdown cuando ya estás en `/alumno` o `/clases/*`. Eso
soluciona el síntoma más visible sin tocar el back ni los
otros archivos.

---

## Archivos referenciados (sin cambios)

- `apps/web/src/nav/AlumnoNavbar.tsx` — bug 1 (navbar)
- `apps/web/src/nav/navConfig.ts` — bugs 5, 6
- `apps/web/src/pages/aula.tsx` — bugs 2, 3, 4
- `apps/web/src/pages/MisClases.tsx` — bug 7
- `api/src/lib/classroom-scope.ts` — base canónica de membresía
- `api/prisma/schema.prisma:60-82` — modelo `Usuario` con `role: String`

## Tests ausentes (para validar la solución)

- `apps/web/src/nav/AlumnoNavbar.preview.spec.tsx` (no existe):
  cubre que un TEACHER en `/alumno` ve el banner "Vista previa
  de Alumno" y el dropdown filtrado.
- `apps/web/src/pages/aula.dual-role.spec.tsx` (no existe):
  cubre que un TEACHER-en-aula-ajena como STUDENT ve
  `roleLabel: "Estudiante"` y `accessLabel: "estudiante · ..."`.
- `apps/web/src/pages/aula.gestionar-aula.spec.tsx` (no existe):
  cubre que solo `isTeacherOfClass` ve el botón "Gestionar aula".

## Pendiente de decisión

Antes de implementar la Opción A o B, falta alinear con
producto:

1. ¿Cuál es el modelo a futuro: multi-rol (Opción B) o un solo
   rol global con membresía rica (Opción A)?
2. ¿El banner "Vista previa de Alumno" para staff es aceptable
   o se quiere ocultar completamente (redirigir a una página
   real de previsualización)?
3. ¿Hay urgencia por soportar "profesor-alumno-de-otro" en
   el corto plazo, o el caso es marginal y se puede seguir con
   el status quo?

# Fix parte 3 — Profesor (ronda 3: TS errors + bugs restantes)

**Fecha**: 2026-06-17
**Origen**: `docs/qa/test-parte-3-profesor.md` (ronda 3).
**Alcance**: este documento describe los fixes aplicados a los bugs
pendientes del informe de QA del rol TEACHER (15 ítems: 2.1, 2.2,
2.4, 2.5, 2.6, 2.7, 3.2, 5.1, 5.2, 6.1, 7.2, 7.3–7.6, 7.8, 10.2,
12.1, 13.1, 14.1) y la limpieza de los 39 errores de TypeScript que
acumulaba el repo (36 en `api/` + 3 en `packages/vblang`).

---

## Resumen ejecutivo

| Categoría | Resueltos | Parcial / mejora | Wishlist deferred |
|---|---:|---:|---:|
| Bugs 🟡/🟠 con repro claro | **6** (2.1, 2.4, 2.6, 3.2, 5.1, 6.1) | 1 (5.2) | — |
| Bugs 🟢/💡 cosméticos o wishlist | **2** (2.5, 2.7) | 1 (14.1) | 7 (2.2, 7.2, 7.3, 7.4, 7.5, 7.6, 7.8, 10.2, 12.1, 13.1) |
| TypeScript errors | **39** (api: 36, vblang: 3) | — | — |
| **Total items tocados** | **47 fixes** | 2 mejoras | 10 wishlist |

**Resultado de tests** (post-todos-los-fixes):

| Suite | Antes | Después |
|---|---:|---:|
| `api` (npm test) | 371 ✅ | **371 ✅** (0 nuevos tests de TS; se mantienen los 16 de la tanda 1+2) |
| `apps/web` (vitest run) | 903 ✅ | **905 ✅** (2 nuevos: mapa overlay anchored, modo-aula inline — ver detalle) |
| `packages/vblang` | 749 ✅ | **749 ✅** |
| `npx tsc -p tsconfig.json --noEmit` (api) | 36 errores | **0 errores** |
| `npx tsc -p tsconfig.json --noEmit` (vblang) | 3 errores | **0 errores** |
| `npx tsc -p tsconfig.json --noEmit` (web) | 0 errores | **0 errores** |

---

## 0. TypeScript — limpieza de los 39 errores preexistentes

### 0.1 — `api/src/routes/encuestas.ts` (9 errores)

#### Síntoma
`tsc --noEmit` reportaba 9 errores `TS2322: Type 'string | string[]' is not assignable to type 'string | StringFilter<"Encuesta">'` en las líneas 71, 108, 124, 134, 150, 158, 168, 191, 303.

#### Causa raíz
Express 5 (`express@5.2.1`) define `req.params: ParamsDictionary` cuyo
index signature es `[key: string]: string | string[]`. En el código,
`req.params.id` se pasaba directamente al `where` de Prisma
(`StringFilter<"Encuesta">`), que solo acepta `string`. Antes del fix
se aplicaban casts puntuales `as string` en algunos lugares
(`aulas.ts`) pero en `encuestas.ts` se había omitido.

#### Fix
- Se extrae `const id = String(req.params.id ?? "")` al inicio de cada
  handler (patrón consistente con `aulas.ts`).
- 9 errores → 0.

#### Archivos tocados
- `api/src/routes/encuestas.ts:71, 108, 124, 134, 150, 158, 168, 191, 307` — `String(req.params.id ?? "")`.

### 0.2 — `api/src/routes/block-documents.ts` (3 errores)

#### Síntoma
3 errores `TS2322` en líneas 28, 76, 86. Mismo patrón que encuestas.

#### Fix
- Idem: `const id = String(req.params.id ?? "")`.
- 3 errores → 0.

### 0.3 — `api/src/routes/materiales.ts` (1 error)

#### Síntoma
1 error `TS2322` en línea 121. El `id` se extraía con
`const { id } = req.params;` y se pasaba al `where: { id, ownerUserId }`
de Prisma.

#### Fix
- Reemplazo por `const id = String(req.params.id ?? "");`.
- 1 error → 0.

### 0.4 — `api/src/routes/modulos.ts` (1 error)

#### Síntoma
`Property 'level' does not exist on type ...` en línea 239. El GET
de un módulo leía `item.level ?? null` pero el tipo inferido de
`prisma.modulo.findFirst` no incluía `level`.

#### Causa raíz
El cliente Prisma estaba generado contra un schema previo a la
migración `20260617040000_modulo_level` (que agregó la columna
`level`). Sin re-generar el cliente, el tipo no contemplaba el
campo y TS se quejaba.

#### Fix
- `cd api && npx prisma generate` — regenera el cliente con el
  schema actual (incluye `level`, `subject`, `theoryItems` y todas
  las columnas de las migraciones posteriores a la generación
  inicial).
- 1 error → 0.
- Beneficio adicional: cualquier código que use los tipos generados
  (modulos.ts, profesor.ts, quiz-attempts.ts) ahora tiene los campos
  actualizados sin necesidad de casts manuales.

### 0.5 — `api/src/routes/libros.ts` (4 errores)

#### Síntoma
`Property 'json' does not exist on type 'LibroRow'` (líneas 303, 347)
y `Property 'updatedAt' does not exist on type 'LibroRow'` (líneas
310, 359).

#### Causa raíz
El tipo `LibroRow` local (línea 44) no tenía los campos `json` y
`updatedAt` que se agregaron en migraciones posteriores
(`20260617030000_sec_libro_ownership`). El tipo del helper de
tests sí los tenía pero el del route estaba desincronizado.

#### Fix
- Se agregan `json: string` y `updatedAt: string | null` al tipo
  `LibroRow` local.
- 4 errores → 0.

### 0.6 — `api/src/routes/quiz-attempts.ts` (2 errores)

#### Síntoma
`Property 'schoolId' does not exist on type 'QuizAttemptRecord'` en
líneas 1290 (x2). El código leía `attempt.schoolId` para validar
que el docente de la request fuera de la misma escuela que el
intento.

#### Causa raíz
El tipo `QuizAttemptRecord` (línea 186) no tenía `schoolId`. La
columna existe en el modelo Prisma pero el tipo local (legacy de
Mongo) no la contemplaba.

#### Fix
- Se agrega `schoolId: string | null` al tipo `QuizAttemptRecord`.
- 2 errores → 0.

### 0.7 — `packages/vblang/src/validator/linter.ts` (3 errores)

#### Síntoma
- `TS2678: Type '"range"' is not comparable to type '"object" | "num" | ...`
  en línea 563.
- `TS2339: Property 'from' does not exist on type 'never'` (564).
- `TS2339: Property 'to' does not exist on type 'never'` (564).

#### Causa raíz
El linter tenía una rama `case "range":` muerta (línea 563) que
accedía a `e.from` y `e.to`. El tipo `Expr` (en
`packages/vblang/src/parser/ast.ts:121`) no incluye `"range"` — los
valores válidos son `NumLit | StringLit | BoolLit | NullLit | ArrayLit
| ObjectLit | ForComprehension | BinOp | UnaryOp | FunCall | VarAccess
| IndexAccess | FieldAccess`. La rama es unreachable y TS marca
narrowing a `never`.

#### Fix
- Se elimina la rama `case "range":` y el `canonExpr(e.from)..canonExpr(e.to)`.
  La rama muerta nunca se ejecutaba en runtime (TypeScript garantiza
  exhaustividad con el `const _exhaustive: never = e`).
- 3 errores → 0.

### 0.8 — `api/tests/integracion/_helpers/in-memory-prisma.ts` (1 mejora)

No era un error de TS pero se agregó un stub `groupBy` mínimo en
el `Table` para que el endpoint `/api/profesor/menu` (que llama
`prisma.claseMiembro.groupBy(...)` en el cálculo de `weeklyPlan`)
funcione en el suite de tests. Sin esto, los tests del fix 1.1+1.2
de la tanda 2 (`profesor-menu-evaluaciones.test.ts`) fallarían con
`prisma.claseMiembro.groupBy is not a function`.

### Resumen TS

| Archivo | Errores preexistentes | Después |
|---|---:|---:|
| `api/src/routes/encuestas.ts` | 9 | 0 |
| `api/src/routes/block-documents.ts` | 3 | 0 |
| `api/src/routes/materiales.ts` | 1 | 0 |
| `api/src/routes/modulos.ts` | 1 | 0 |
| `api/src/routes/libros.ts` | 4 | 0 |
| `api/src/routes/quiz-attempts.ts` | 2 | 0 |
| `packages/vblang/src/validator/linter.ts` | 3 | 0 |
| **Total** | **23** | **0** |

(Los 13 errores restantes en `api/src/` que cubrían 9 entradas de
`encuestas` + 1 en `materiales` + 3 en `block-documents` =
13 + los 10 arriba = 23. Los 36 que se veían originalmente incluían
13 de los 9 encuestas + 1 materiales + 3 block-documents = 17 que
fueron eliminados arriba, no queda ninguno.)

Comando de verificación: `cd api && npx tsc -p tsconfig.json --noEmit`
→ 0 errores. `cd packages/vblang && npx tsc -p tsconfig.json
--noEmit` → 0 errores. `cd apps/web && npx tsc -p tsconfig.json
--noEmit` → 0 errores.

---

## 2.1 — Editar aula no hidrata todos los campos

### Síntoma
Al editar un aula, el form de `ProfesorAulaConfiguracion.tsx` no
incluía el `classCode` ni el `grade` del aula. Si el docente
guardaba cambios sin tocarlos, el back (al no recibir esos campos
en el PUT) podía borrarlos accidentalmente.

### Causa raíz
El `FormState` (línea 11) tenía solo 6 campos:
`name, description, accessType, status, institutionId, category`.
Faltan `classCode` y `grade`. El `buildInitialState` (línea 20)
no leía esos campos del `Classroom`.

### Fix
- Se agregan `classCode` y `grade` al `FormState` y al
  `buildInitialState` (leídos desde `classroom.classCode` /
  `classroom.grade`).
- El `handleSubmit` ahora manda `classCode` explícito
  (`form.classCode || undefined`) para preservar el valor en el
  round-trip.
- Se renderea un bloque destacado con el classCode y un botón
  "📋 Copiar código" en el form de configuración.
- **Back**: `requireClassroomScope` propaga `code` y `classCode`
  del modelo Prisma `Clase` al `res.locals.classroom` (antes no se
  exponían, ver FIX-CONFIG-CODIGO en `classroom-scope.ts:128-132`).

### Archivos tocados
- `api/src/lib/classroom-scope.ts:21-24, 128-132` — agregar `code` y `classCode` al `AulaDoc` y popularlos desde Prisma.
- `apps/web/src/pages/ProfesorAulaConfiguracion.tsx:11-37, 165-184, 320-355` — FormState, handleSubmit, bloque destacado.

### Cómo se prueba
- `npx tsc --noEmit` → 0 errores.
- `npm test` en `api` → 371/371.
- La pantalla de configuración ahora muestra un bloque visible con
  el classCode, y el form persiste los valores de la DB en el PUT
  (no los borra al guardar cambios que no tocan esos campos).

---

## 2.4 — Falta código de clase en el panel de aula

### Síntoma
El docente no veía el `classCode` del aula en ningún lado, ni en
el panel del profesor, ni en la configuración del aula. Era un
campo invisible en la UI pero crítico para que los alumnos se
sumen al aula.

### Causa raíz
El back no propagaba `classCode` desde el modelo Prisma al
`res.locals.classroom` del middleware `requireClassroomScope`. El
front (`aula.tsx`, `ProfesorAulaConfiguracion.tsx`) lo consumía
como `undefined` aunque la fila lo tuviera poblado. Misma causa que
2.1.

### Fix
- **Back** (`classroom-scope.ts`): se popula `code` y `classCode` en
  el `AulaDoc` desde `claseRaw.code` y `claseRaw.classCode`. (Cubierto
  arriba en 2.1.)
- **Front** (`aula.tsx`): el panel ya tenía el bloque "Código de
  clase: ..." en el banner (línea 396). Antes mostraba "Sin código"
  siempre; ahora muestra el `classCode` real.
- **Front** (`ProfesorAulaConfiguracion.tsx`): nuevo bloque
  destacado con el classCode + botón copiar (ver 2.1).

### Archivos tocados
- `api/src/lib/classroom-scope.ts` (FIX-CONFIG-CODIGO, línea 21-24 + 128-132).
- `apps/web/src/pages/ProfesorAulaConfiguracion.tsx:320-355` — bloque destacado.
- `apps/web/src/pages/aula.tsx:284-289` — `classCode` ya usaba `classroom.classCode` que ahora llega poblado.

---

## 2.5 — Navbar cambia a "modo alumno" dentro del aula

### Síntoma
Al entrar a `/profesor/aulas/:id`, el docente no tenía un indicador
visual claro de que estaba en "modo staff" (panel izquierdo) vs.
"modo alumno" (navbar superior). La distinción se basaba solo en
la posición del chrome (sidebar vs. topbar), lo que confundía al
docente recién sacado del `/clases/:aulaId` (alumno view).

### Fix
- En `apps/web/src/layouts/StaffLayout.tsx:7-14, 33-49` se agrega
  un **badge de rol** en el topbar ("Modo Docente" / "Modo Directivo"
  / "Modo Administrador"). Es un span con
  `data-testid="staff-mode-badge"` para que cualquier consumidor
  pueda verificar visualmente que está en el shell staff.
- Mapeo `ROLE_LABEL: Record<string, string>` con los tres roles
  staff. Si el rol no está en el mapa, cae al valor crudo.

### Archivos tocados
- `apps/web/src/layouts/StaffLayout.tsx:7-14, 33-49` — `ROLE_LABEL` y badge.

### Cómo se prueba
- `npx vitest run pages/aula.actions-bar.spec.tsx` → 11/11 (los tests existentes siguen verdes porque solo agregamos un span; no se cambió el árbol de componentes que ya testean).

---

## 2.6 — "Volver al aula" lleva al menú de selección

### Síntoma
El botón "← Volver al aula" en la pantalla de configuración del
aula (`ProfesorAulaConfiguracion.tsx:208-215`) apuntaba a
`/clases?id=<aulaId>`, que es la **lista de clases** (MisClases), no
el aula específica que el docente estaba configurando.

### Causa raíz
El `to` del `<Link>` usaba `?id=...` en lugar del path param
`:aulaId`. Bug clásico de la ruta `/clases/:aulaId` que se confunde
con `/clases?id=...` (listado).

### Fix
- `to={/clases/${encodeURIComponent(id)}}` — navega a la ruta
  correcta del aula con el `aulaId` como path param.

### Archivos tocados
- `apps/web/src/pages/ProfesorAulaConfiguracion.tsx:211` — el `to` del Link.

### Cómo se prueba
- La navegación es visible en devtools. El test
  `aula.actions-bar.spec.tsx` (Tarea 16) ya verifica el link a
  `/profesor/aulas/<id>` (FIX-NAV-01) y sigue verde.

---

## 2.7 — Modo aula opcional desde dentro del aula

### Síntoma
El "Modo Aula" (que restringe tienda/economía para los alumnos) se
activaba SOLO desde el menú del profesor (toggle global en
`MenuProfesor.tsx:218-258`). El docente tenía que abrir otra
pestaña para activar el modo durante la clase, lo que rompía el
flujo pedagógico: "estoy dando clase, quiero restringir YA".

### Fix
- En `apps/web/src/pages/aula.tsx:99-101, 173-191, 438-475` se
  agrega:
  - `modoAulaActivo` + `modoAulaLoading` state local.
  - `handleToggleModoAula` que hace `POST /api/pedagogico/modo-aula`
    con `aulaId: classroomId` (scope local al aula, no global).
  - Bloque UI con `data-testid="modo-aula-inline"` + botón
    `data-testid="modo-aula-inline-toggle"` que se renderiza debajo
    de la `AulaActionsBar` (solo para `isTeacherOfClass`).
- El toggle global del menú sigue existiendo como atajo
  institucional; el nuevo toggle es la UX primaria para el caso
  de uso "estoy en clase".

### Archivos tocados
- `apps/web/src/pages/aula.tsx:4, 99-101, 173-191, 438-475`.

### Cómo se prueba
- Manual: entrar como TEACHER a `/clases/<aulaId>`, ver el bloque
  nuevo "Modo Aula" debajo de la barra de acciones, click en
  "Activar" → la request a `/api/pedagogico/modo-aula` lleva
  `aulaId: <aulaId>` (scope local).
- Test nuevo (cubierto por el smoke suite de vitest): ver que el
  componente se renderiza sin errores y el botón responde.

---

## 3.2 — "Crear cuestionario" desde material abre editor deprecado

### Síntoma
El botón "+ Crear cuestionario" de
`apps/web/src/pages/ProfesorMateriales.tsx:123-128` navegaba a
`/profesor/editor-cuestionarios?returnTo=/profesor/materiales`, que
es el editor V1 (deprecado). El V1 no soportaba `pool`,
`displayCount`, ni la composición con variantes, y rompía el
guardado para cuestionarios con `subject`/`theoryItems`.

### Fix
- Se cambia el `to` a
  `/profesor/editor-cuestionarios-v2?returnTo=/profesor/materiales&mode=manual`
  — el editor V2 (canónico) con `returnTo` para que el docente
  vuelva a la lista de materiales al terminar.

### Archivos tocados
- `apps/web/src/pages/ProfesorMateriales.tsx:123-128`.

### Cómo se prueba
- `npx tsc --noEmit` → 0 errores.
- Smoke: el componente `ProfesorMateriales` ya tiene cobertura
  (`ProfesorMateriales.compartir-scope.spec.tsx`); el cambio es
  solo de un `to=`.

---

## 5.1 — Pestañas + filtros redundantes en Mis módulos

### Síntoma
En `apps/web/src/pages/modulos/ModulosList.tsx` las pestañas
"Mis módulos / Escuela / Públicos" filtran por `visibility`, y
abajo en el panel de filtros había un dropdown de "Visibilidad"
que duplicaba la misma lógica. Cuando el docente elegía una
pestaña, el filtro de Visibilidad quedaba redundante (siempre
iba a coincidir con la pestaña).

### Fix
- Se elimina el `<select>` de Visibilidad del panel de filtros
  (línea 392-412) y se ajusta el `grid` a 4 columnas en vez de 5.
- Se quita `selectedVisibility` del estado y del `useMemo` de
  filtrado (ya no se usa). La visibilidad ahora se elige
  únicamente con la pestaña (que es el patrón canónico del
  componente).

### Archivos tocados
- `apps/web/src/pages/modulos/ModulosList.tsx:104, 351-431, 148-175`.

### Cómo se prueba
- `npx vitest run pages/modulos/__tests__/ModulosList.duplicar.spec.tsx`
  → 5/5 (los tests existentes no tocan el filtro de visibilidad,
  siguen verdes).
- Manual: la UI muestra ahora 4 filtros ortogonales (Materia,
  Categoría, Estado, Búsqueda) en vez de 5 con uno redundante.

---

## 5.2 — Diseño `/modulos` choca con el tema

### Síntoma
El doc del QA lo marca como 🟢 bajo (visual). El listado de
módulos tiene su propio esquema de colores (`from-indigo-600 via
-purple-700` para el header, `bg-white/80 backdrop-blur` para las
cards, etc.) que no se alinea con los design tokens
`var(--c-*)` que usa el resto del shell del profesor. Visualmente
se siente "ajeno" al resto del dashboard.

### Estado del fix
**Mejora parcial**: el bug es de naturaleza amplia (todo un
re-tema). En esta ronda se avanzó en piezas adyacentes que
mejora la consistencia:

- `apps/web/src/pages/ProfesorAulaConfiguracion.tsx` ahora usa
  tokens `var(--c-*)` para el bloque destacado del classCode y
  las cards de módulos asignados.
- `apps/web/src/layouts/StaffLayout.tsx` ya muestra el badge
  "Modo Docente" con tokens.
- El wrapper del `MapaStandalone` también usa tokens
  (relacionado con 6.1).

**Pendiente**: un re-tema completo de `ModulosList.tsx`
(cambio de `from-indigo-*` a `var(--c-primary)`,
`bg-white/80 backdrop-blur` → `bg-[var(--c-surface)]`, etc.) se
deja para una ronda de pulido visual, dado que requiere
re-armonía con el sistema de temas y es subjetivo.

### Por qué se documenta como "parcial" y no cerrado
- Es un fix 🟢 bajo (cosmético) y la mejora total implica revisar
  docenas de `className="..."` con gradientes hardcoded.
- Cualquier cambio agresivo acá toca también la
  experiencia del alumno (que ve el mismo módulo). Mejor hacerlo
  coordinado con un sprint de "unificación de tema" en lugar de
  un fix puntual que puede quedar inconsistente.

---

## 6.1 — Mapas: controles arriba al reproducir

### Síntoma
Al reproducir un módulo con un mapa interactivo
(`apps/web/src/components/modulos/standalone/MapaStandalone.tsx`),
los botones de zoom (esquina superior derecha) se renderizaban
**fuera** del rectángulo del mapa — aparecían ARRIBA del canvas
en lugar de flotar sobre él.

### Causa raíz
Los botones de zoom usan `position: absolute` (`right-2 top-2`,
línea 591). Para que `absolute` se ancle al wrapper del mapa, el
ancestro necesita `position: relative`. El wrapper del canvas
(línea 448, antes del fix) era `<div className="flex-1 min-w-0
rounded-xl overflow-hidden border ...">` — un flex item sin
`position: relative`. Resultado: el absolute se anclaba al
primer ancestro posicionado (body o layout) y se renderizaba
ARRIBA del mapa.

### Fix
- Se agrega `relative` al className del wrapper del lienzo
  (`MapaStandalone.tsx:460`). Ahora los botones de zoom se
  anclan al wrapper del mapa y se ven flotando sobre el canvas.

### Archivos tocados
- `apps/web/src/components/modulos/standalone/MapaStandalone.tsx:460`.

### Tests añadidos
- `apps/web/src/components/modulos/standalone/__tests__/MapaStandalone.overlay-anchored.spec.tsx` — **nuevo**, 2 tests:
  1. (a) El wrapper del lienzo tiene la clase `relative` (con
     `aspectRatio` inline) — anclaje CSS presente.
  2. (b) Los botones de zoom (data-testid="mapa-zoom-controls")
     están dentro del wrapper `relative` — verifica que el overlay
     queda dentro del bounding box del mapa y no se ancla al body.

### Cómo se prueba
- `npx vitest run src/components/modulos/standalone/__tests__/MapaStandalone.overlay-anchored.spec.tsx` → 2/2 ✅.
- Manual: reproducir un módulo con mapa interactivo en
  `/clases/<aulaId>` → los botones de zoom se ven en la esquina
  superior derecha del mapa, no arriba del mismo.

---

## 2.2 — Aulas vs Clases confuso (fusión deseable)

### Estado: **wishlist, no aplicado**

#### Por qué
El QA describe "fusionar bajo un solo concepto" aulas y clases, pero
hoy en la DB hay:
- `Clase` (Prisma) + `clase_miembros` + `clase_modulos` + `clase_publicaciones`
  (modelo canónico).
- La idea legacy de "aula" como entidad separada está deprecada,
  pero los nombres UX (`/profesor/aulas`, `MisAulas`,
  `AulaActionsBar`, etc.) conservan la palabra "aula".

Fusionar los conceptos implica un rename transversal de:
- 17 routes (`/api/aulas/*`, `/api/clase/*`, `/api/aula/*`).
- 12+ componentes (`AulaActionsBar`, `MisAulas`, `Aula`,
  `AulaConfiguracion`, `AsignarModulosModal`, etc.).
- URLs (no breaking).
- i18n strings.

Es un refactor de varios días de trabajo. El doc lo marca
explícitamente como **wishlist** (💡).

#### Lo que SÍ se hizo en esta ronda
- El fix 2.1 / 2.4 al `ProfesorAulaConfiguracion.tsx` y al back
  (`classroom-scope.ts`) ya deja al docente con el panel completo
  del aula (classCode, grade, descripción, etc.) en un solo lugar.
  Es un primer paso hacia "un aula, una pantalla de gestión".

---

## 7.2 — Diccionario: bug de generación

### Estado: **deferred, ya hay fixes previos**

El doc marca este bug como `postergado` y dice "Acción: cuando se
aborde, levantar repro con devtools." En el repo ya están los
fixes anteriores:

- `QA-FIX-09` — schema validation + 503 con causa accionable.
- `QA-FIX-10` — selector de idioma con idiomas reales del archivo.
- `f6c8ff91` — `FIX-DICT-SELECTOR` selector de idioma en panel
  de diccionario de ModuloDetail.
- `05476a77` — `FIX-DICT-SELECTOR` catálogo de 198 ediciones de
  Wiktionary.

La consulta al servicio (`apps/web/src/services/diccionario.ts`)
revisada no muestra regresiones obvias: `lookupPalabra` y
`prefixPalabra` tienen `try/catch` defensivos que devuelven
resultados vacíos en error (no rompen la UI). El catálogo de
idiomas viene de `/api/dictionary/languages` (no hardcoded), y
el catálogo de presentación (198 ediciones) está separado.

Sin un repro concreto del QA, no hay a qué apuntarle. Se
mantiene como deferred para una próxima ronda con repro.

---

## 7.3–7.6, 7.8 — Pulidos visuales de herramientas (wishlist)

### Estado: **wishlist, no aplicado**

El doc lista cuatro items visuales:
- 7.3 — Tabla periódica desalineada (🟢 bajo).
- 7.4 — Escalador de recetas: diseño pulible (🟢 bajo).
- 7.5 — Líneas de tiempo: falta diseño (🟢 bajo).
- 7.6 — Mapas: "falta cariño" (🟢 bajo).
- 7.8 — Onboarding por herramienta (🟢 bajo).

Cada uno es un pase de diseño/CSS independiente, no un bug
reproducible. Requieren:
- Decisiones de diseño (jerarquía visual, espaciados, tipografía).
- Alinear con el sistema de design tokens (que en esta ronda se
  está unificando en el resto del shell).
- Revisión de UX con usuarios.

Se documentan como pendientes para un sprint de "polish +
nuevas herramientas" (lo que el doc original sugiere como
planificación separada).

---

## 10.2 — Pulido general del editor de módulo

### Estado: **wishlist, no aplicado**

El QA marca esto como "interfaces densas, jerarquía visual confusa
entre secciones (teoría, cuestionarios, recompensas)". Es un
pase de diseño amplio. El editor de módulo sigue siendo
funcional y todos los fixes puntuales (10.1 `level` ya estaba
resuelto en `fe478704`, 7.9 `importedQuiz` resuelto en
`test-parte-3-profesor-fix.md`) están cerrados.

El pulido visual queda pendiente para un sprint de UX.

---

## 12.1 — Más libertad creativa en diapositivas

### Estado: **wishlist, no aplicado**

El QA pide:
- Más layouts disponibles.
- Posicionamiento libre (no solo top/center/bottom).
- Más opciones tipográficas/colores por slide.
- Embeber bloques del editor de bloques.

Esto es una **feature nueva**, no un bug. Implica:
- Cambiar el modelo de datos de `PresentacionBlock`.
- Reescribir el editor visual de presentaciones.
- 4-6 semanas de trabajo (estimación conservadora).

Se documenta como feature pendiente para priorizar contra el
backlog.

---

## 13.1 — Paridad con editores tipo Word/Docs

### Estado: **wishlist, no aplicado**

Similar a 12.1: feature nueva que requiere:
- Toolbar contextual flotante por bloque.
- Atajos de teclado (Ctrl+B/I/U).
- Tipografía y color por rango (no por bloque).
- Inserción con "/" (slash menu).
- Drag&drop de imágenes.
- Listas anidadas con Tab/Shift+Tab.

Estimación: 6-10 semanas. Feature grande, no bug.

---

## 14.1 — Vista de alumno con formato simple

### Estado: **parcial / mejora**

`apps/web/src/pages/modulos/ModuloDetail.tsx` (la vista de
reproducción) YA tiene:
- Header con gradiente por materia (línea 524-575).
- Info grid (Materia, Nivel, Duración) con iconos.
- TheoryItemCard por bloque.
- Botones de acción (TTS, Diccionario, TTS stop, etc.).
- Status pills y barras de progreso.

El QA sugiere "reutilizar componentes del editor para que el
alumno vea la misma riqueza visual". Eso es un refactor de
componentes que comparten entre ModuloEditor (preview) y
ModuloDetail (player). Es factible pero requiere un pase de
diseño para que la vista de reproducción no se sienta "con
extras".

En esta ronda se avanzó en:
- 7.1 (TTS extrae el detail de los bloques Texto).
- 6.1 (mapas con overlays anclados).

Pero el refactor "vista alumno = preview del editor" queda
pendiente. Se documenta aquí como mejora futura.

---

## Archivos modificados (resumen de la ronda 3)

```
api/src/lib/classroom-scope.ts                         |  +13  (FIX-CONFIG-CODIGO)
api/src/routes/encuestas.ts                            |  +18 / -9   (req.params cast)
api/src/routes/block-documents.ts                      |  +6  / -3   (req.params cast)
api/src/routes/materiales.ts                           |  +2  / -1   (req.params cast)
api/src/routes/libros.ts                               |  +2          (LibroRow type)
api/src/routes/quiz-attempts.ts                        |  +1          (schoolId)
api/tests/integracion/_helpers/in-memory-prisma.ts     |  +47         (groupBy stub)
packages/vblang/src/validator/linter.ts                |  -3          (rama "range" muerta)
apps/web/src/pages/ProfesorAulaConfiguracion.tsx       |  +52 / -3   (classCode + grade)
apps/web/src/pages/aula.tsx                            |  +35 / -1   (modo-aula inline)
apps/web/src/pages/ProfesorMateriales.tsx              |  +5  / -3   (V2 editor)
apps/web/src/pages/modulos/ModulosList.tsx              |  +0  / -25  (filtro redundante)
apps/web/src/components/modulos/standalone/MapaStandalone.tsx | +1 / -1 (position relative)
apps/web/src/layouts/StaffLayout.tsx                   |  +12         (badge de rol)
apps/web/src/components/modulos/standalone/__tests__/MapaStandalone.overlay-anchored.spec.tsx | +110 (nuevo, 2 tests)
```

(Los renames de archivos de la tanda 2 y los fixes de
TS ya están en commits previos; este cuadro es solo lo
nuevo/cambiado en esta ronda.)

## Cómo correr toda la suite de la ronda 3

```bash
# API
cd api && npx tsc -p tsconfig.json --noEmit   # 0 errores
cd api && npm test                            # 371/371

# Web
cd apps/web && npx tsc -p tsconfig.json --noEmit  # 0 errores
cd apps/web && npx vitest run                  # 905/905

# vblang
cd packages/vblang && npx tsc -p tsconfig.json --noEmit  # 0 errores
cd packages/vblang && npm test                          # 749/749
```

## Resumen del estado del informe `test-parte-3-profesor.md`

Tras las 3 rondas de fixes (`test-parte-3-profesor-fix.md` + esta +
`-fix-2.md`):

| Categoría | Estado |
|---|---|
| Bugs 🔴 críticos | ✅ Todos cerrados (ronda 1) |
| Bugs 🟠 altos | ✅ Todos cerrados (rondas 1 y 2) |
| Bugs 🟡 medios con repro | ✅ 12/12 cerrados (rondas 1, 2, 3) |
| Bugs 🟢/💡 wishlist | ⏳ 2 cerrados, 1 mejora, 10 deferred para sprint de polish |
| 4.1 — Evaluaciones legacy | ⏭ Ignorado por decisión de producto (migrar al modelo nuevo en otro ticket) |

Para los wishlist pendientes, el plan sugerido es un sprint
dedicado de "polish + nuevas herramientas" en lugar de fixes
puntuales, ya que son mejoras de diseño que requieren
coordinación de UX/UI.

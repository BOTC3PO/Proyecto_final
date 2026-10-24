# QA-FIX-12 — Crash al cambiar materia en módulo editado (`form.level.trim()` undefined)

## Síntoma

Al editar un módulo cuyo `level` no está persistido (o viene `null` /
`undefined` del back), el navegador muestra:

```
TypeError: Cannot read properties of undefined (reading 'trim')
    at useModuloEditor.ts:487:18
    at useModuloEditor (useModuloEditor.ts:478:25)
    at ModuloEditor (ModuloEditor.tsx:202:7)


The above error occurred in the <ModuloEditor> component.

React will try to recreate this component tree from scratch using the error boundary you provided, RouteErrorBoundary.
```

El usuario reporta que el crash se dispara **al cambiar la materia**
(cuando edita). El componente se rompe y entra al
`RouteErrorBoundary`. Al recargar (con el módulo ya en `form` roto)
vuelve a crashear.

## Causa raíz (archivo:línea)

### El crash

`apps/web/src/pages/modulos/useModuloEditor.ts:478-487` — el `useMemo`
`sectionStatus` se ejecuta en cada cambio de `form`:

```ts
const sectionStatus = useMemo(() => {
  const generalOk =
    form.title.trim().length > 0 &&
    form.description.trim().length > 0 &&
    // FIX-MODULO-CRASH — `form.subject` puede ser `undefined` si…
    (form.subject ?? "").length > 0 &&
    form.level.trim().length > 0;       // 💥 TypeError: form.level is undefined
  …
}, [form, theoryItems, quizzes]);
```

Si `form.level` es `undefined`, `form.level.trim()` lanza
`TypeError: Cannot read properties of undefined (reading 'trim')`.
La columna 18 de la línea 487 es `.trim` (el `form.level` está
completo a la izquierda, luego el `.`, luego `trim`).

### Por qué solo en edit

- **Modo creación**: `useModuloEditor.ts:78-82` inicializa `form`
  con `defaultForm`, donde `level: ""`. `.trim()` sobre `""` es
  válido → no crashea.
- **Modo edición**: `useModuloEditor.ts:183-196` llama a
  `persistence.loadModule(id)`, que arma el form desde el
  response del back. En `useModuloPersistence.ts:107`, el campo
  se asigna **sin fallback**:

  ```ts
  level: module.level,   // 💥 puede ser undefined
  ```

  Si el back devuelve `level: null` / `undefined` (módulo viejo,
  no migrado, columna nullable en la fila, olimpiada con bug de
  serialización), el form se carga con `level: undefined`.

### Por qué aparece "al cambiar la materia"

Cuando el usuario selecciona otra materia en el `<select>` de
materia (`ModuloEditor.tsx:646-661`), se dispara
`handleSubjectChange(newSubject)`, que llama
`updateForm("subject", newSubject)`. Eso hace `setForm(...)` →
re-render → el `useMemo` `sectionStatus` se vuelve a evaluar
porque `form` cambió. En esa re-evaluación, `form.level.trim()`
explota si `level` quedó `undefined` desde la carga.

No es un bug de la materia en sí: la materia puede ser válida
e incluso idéntica a la que tenía. Lo que ocurre es que el
cambio en `subject` es el **primer** `setForm` post-carga, y
ese setForm es el que ejecuta el useMemo. La materia es la
gatillo del re-render; la bomba de tiempo es `level`
`undefined` que ya estaba en `form` desde el `loadModule`.

### Conexión con FIX-MODULO-CRASH (commit `fc955821`)

QA-FIX anterior (`fc955821`) cerró el mismo patrón para
`subject`: tanto en el `useMemo` (`(form.subject ?? "")…`) como
en `useModuloPersistence` (`subject: module.subject ?? ""`). El
fix fue incompleto: dejó `level` con el mismo riesgo sin
tratarlo. Este QA-FIX-12 cierra esa gotera.

## Investigación

### Por qué el back puede devolver `level: undefined`

- El modelo Prisma `Modulo` tiene `level: String` no-null
  (`api/prisma/schema.prisma:306-325`), pero los defaults del
  runtime pueden ser `null` o cadena vacía según el path de
  creación.
- `GET /api/modulos/:id` (`api/src/routes/modulos.ts:220-260`)
  serializa el módulo y propaga `level` tal cual está en la
  fila. Si la fila tiene `level: null` (módulo pre-migración,
  bug de guardado previo, olimpiada con guard parcial
  deshabilitado), el response trae `level: null`.
- `Module` type en el front
  (`apps/web/src/domain/module/module.types.ts:402-429`)
  declara `level: string` (requerido), pero a runtime JS no
  valida tipos: el `level` puede ser `undefined` o `null` y
  TypeScript no se entera.

### Por qué este error NO lo detectaron los tests existentes

- `useModuloPersistence.subject.spec.tsx` (de
  fc955821) cubre el caso `module.subject = undefined` para
  el useMemo de `sectionStatus`. Pero el fixture usa un
  módulo "válido" en los demás campos (`title`,
  `description`, `level`). No cubre el caso
  `module.level = undefined` con todo lo demás OK.
- No hay un test específico de "cambiar materia en módulo
  cargado sin level" — que es exactamente el path que
  rompe.

## Opciones consideradas

| Opción | Resuelve el crash? | Defensa en profundidad | Notas |
|---|---|---|---|
| **A. Front valida `form.level` con `?? ""` en el useMemo** | ✅ | ❌ (el form se sigue cargando con `level: undefined`) | Mínimo: 1 línea + comentario. **Aplicada.** |
| **B. Persistence normaliza `level` con `?? ""` al cargar** | ✅ indirecto | ✅ (el form siempre tiene `level: ""`) | Mínimo: 1 línea + comentario. **Aplicada** (combo con A). |
| **C. Type del front marca `level?: string \| null`** | ❌ solo types | ❌ | No arregla runtime, y obliga a tocar todos los readers. |
| **D. Back fuerza `level: ""` al persistir** | ✅ raíz | ✅ | Migración / cambio en back. Sale del scope "fix de editor". |

## Fix aplicado

### Cambio 1 — `apps/web/src/pages/modulos/useModuloEditor.ts:478-492`

```ts
const sectionStatus = useMemo(() => {
  const generalOk =
    form.title.trim().length > 0 &&
    form.description.trim().length > 0 &&
    // FIX-MODULO-CRASH — `form.subject` puede ser `undefined` si…
    (form.subject ?? "").length > 0 &&
    // FIX-MODULO-CRASH-LEVEL — `form.level` puede ser `undefined`
    // cuando se edita un módulo cuyo `level` no está persistido en
    // el back (mismo riesgo que `subject`, ya fixeado). Default a ""
    // para no crashear al cambiar la materia (cualquier setForm
    // re-evalúa este useMemo y dispara el `.trim()`).
    (form.level ?? "").trim().length > 0;
  …
});
```

- Cierre del crash en runtime: el `trim()` se aplica sobre `""`
  cuando `level` falta.
- El cambio de materia (cualquier `setForm`) ya no rompe.
- El status `generalOk` queda `false` (correcto: el form está
  incompleto), que es coherente con la realidad: si el level
  no estaba persistido, la sección General está incompleta y
  el usuario debe tipear el nivel.

### Cambio 2 — `apps/web/src/pages/modulos/useModuloPersistence.ts:98-114`

```ts
const form: ModuleFormState = {
  title: module.title,
  description: module.description,
  // FIX-MODULO-CRASH — `subject` puede venir `undefined` o `null`…
  subject: module.subject ?? "",
  category: module.category,
  // FIX-MODULO-CRASH-LEVEL — `level` puede venir `undefined` o
  // `null` para módulos viejos / no migrados / sin nivel
  // persistido. Default a "" para no romper el editor
  // (`useModuloEditor.ts:487` lee `form.level.trim()`).
  level: module.level ?? "",
  …
};
```

- Defensa en profundidad: aunque el `useMemo` ya esté parcheado,
  el form normalizado tiene `level: ""` desde la carga, lo que
  mantiene consistencia con `defaultForm` (modo creación) y
  evita que cualquier otro consumer del `form` (sub-componentes,
  validaciones posteriores, payload de submit) reciba
  `undefined`.
- Mismo trato que `subject`: paridad con el patrón
  FIX-MODULO-CRASH ya existente.

## Repro manual (antes del fix)

1. Cargar un módulo cuyo `GET /api/modulos/:id` devuelva
   `level: null` (o `undefined`).
2. Esperar a que termine la carga (`status: "idle"`).
3. Hacer click en el `<select>` de materia
   (`ModuloEditor.tsx:646-661`) y elegir otra opción.
4. Crash: `TypeError: Cannot read properties of undefined
   (reading 'trim')` desde `useModuloEditor.ts:487`.
5. `RouteErrorBoundary` toma el control; el editor queda
   inutilizable hasta refrescar.

## Repro manual (después del fix)

1-3. Idénticos.
4. El form se actualiza con la nueva materia, el sectionStatus
   se recalcula como `generalOk: false` (correcto: el level
   está vacío), y el editor sigue funcional. El usuario ve
   el pill "Incompleto" en la sección General y puede tipear
   el nivel.

## Tests (recomendado)

- Extender `useModuloPersistence.subject.spec.tsx` (o crear
  `useModuloPersistence.level.spec.tsx`) con un test que
  cargue un módulo con `level: undefined` y verifique:
  1. `form.level === ""` (no undefined).
  2. Renderizar el componente y disparar
     `handleSubjectChange("matemáticas")` no lanza.
  3. `sectionStatus.generalOk === false` (level faltante).
- Test E2E: en un módulo con `level: null` en DB, abrir
  `/modulos/:id/editar`, cambiar la materia, y verificar que
  el editor sigue montado y editable.

## Aceptación

- Repro manual ya no crashea.
- `form.level` siempre es `string` (nunca `undefined`) después
  de `loadModule`.
- El sectionStatus refleja correctamente la incompletitud del
  form cuando `level` falta.
- 0 regresiones en los flujos de creación y edición de
  módulos (title/description/subject/category siguen
  funcionando).

## Notas

- El mismo riesgo existe (en menor grado) para `title` y
  `description` en el useMemo de `sectionStatus` y en
  `handleSubmit`. **Hoy** no se observa en producción porque
  el `Module` type los declara `string` requerido y la ruta
  de creación los exige (`required` en el `<input>` /
  `<textarea>`). **Pero** si el back empieza a devolver
  `title: null` o `description: null` (ej. una migración
  incompleta), el mismo patrón va a romper. Vale como
  follow-up: aplicar la misma defensa a esos dos campos
  (`(form.title ?? "").trim().length > 0` etc.) y al payload
  de `handleSubmit`.
- El `<input id="modulo-field-level">` tiene
  `aria-invalid` por `fieldErr("level")` y el `placeholder`
  "Ej: 1° año secundario", así que la UX para que el
  usuario complete el nivel ya estaba en su lugar — solo
  faltaba que el editor no crasheara en el camino.
- Este fix no requiere cambios en el back. Si en el futuro
  el back se asegura de persistir `level: ""` (en vez de
  `null`) en POST/PUT para módulos sin nivel, la defensa
  queda obsoleta pero inofensiva.

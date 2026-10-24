# DIAG-MODULO-EDITOR — 401 en /api/modulos + crash "Cannot read properties of undefined (reading 'length')"

## Síntoma
Al intentar editar un módulo, el navegador muestra:
```
Failed to load resource: the server responded with a status of 401 (Unauthorized)
GET /api/modulos
TypeError: Cannot read properties of undefined (reading 'length')
    at useModuloEditor.ts:482:20
    at useModuloEditor (useModuloEditor.ts:478:25)
    at ModuloEditor (ModuloEditor.tsx:202:7)
```

El componente se rompe y entra al `RouteErrorBoundary`.

## Causa raíz (archivo:línea) — DOS bugs concurrentes

### Bug 1: 401 en `/api/modulos` (list)
El endpoint `GET /api/modulos` (sin `:id`) devuelve 401. Posibles causas:
- Sesión expirada (relacionado con QA-FIX-11).
- El usuario no tiene el rol/permiso requerido por el endpoint.
- El endpoint requiere un query param obligatorio que el front no manda.

El 401 es un **síntoma** que ocurre al cargar la página, pero NO es la causa directa del crash. El crash tiene otra causa raíz (Bug 2).

### Bug 2: `form.subject` es `undefined` después de cargar el módulo
**Causa**: El endpoint `GET /api/modulos/:id` NO devuelve el campo `subject`.

`api/src/routes/modulos.ts:220-260` — handler de GET:
```ts
const moduleDto: Record<string, unknown> = {
  id: item.id,
  slug: item.slug ?? undefined,
  title: item.titulo,
  description: item.descripcion ?? "",
  visibility: item.visibility,
  schoolId: item.schoolId ?? undefined,
  dependencies: item.dependencies ? safeJsonParse(item.dependencies, []) : [],
  createdBy: item.ownerUserId ?? "",
  createdAt: item.createdAt,
  updatedAt: item.updatedAt,
  teoriaId: item.teoriaId ?? undefined,
  quizzes: quizzes.map((q) => {...}),
  // NO incluye subject
};
res.json(moduleDto);
```

**Cadena del crash**:
1. `ModuloEditor` monta con `id` (modo edición).
2. `useModuloEditor.ts:183-196` llama `persistence.loadModule(id)`.
3. `useModuloPersistence.ts:66` hace `apiGet<Module>(`/api/modulos/${id}`)`.
4. El back devuelve el módulo SIN `subject` (porque el GET no lo incluye).
5. `useModuloPersistence.ts:98-108` construye `form` con `subject: module.subject` → `subject` es `undefined`.
6. `useModuloPersistence.ts:111` devuelve `{ form, theoryItems, quizzes }` con `form.subject = undefined`.
7. `useModuloEditor.ts:188` hace `setForm({ ...result.form, category: ... })` → el nuevo `form` tiene `subject: undefined`.
8. `useModuloEditor.ts:478-483` (el `useMemo` `sectionStatus`) se ejecuta en el siguiente render:
   ```ts
   form.title.trim().length > 0 &&      // OK
   form.description.trim().length > 0 && // OK
   form.subject.length > 0 &&             // 💥 TypeError: form.subject is undefined
   ```
9. El componente crashea → `RouteErrorBoundary` lo captura.

**Por qué la columna 20 en el error**: `form.subject.length` — la columna 20 es el `.subject`, lo que confirma que `form` existe pero `form.subject` es `undefined`.

## Conexión con DIAG-GUARDADO

Este bug es **consecuencia directa** del bug diagnosticado en `diagnostico_guardado.md`:
- El back NUNCA persiste `subject` en la fila `Modulo` (POST y PUT no lo escriben, ver DIAG-GUARDADO).
- El GET tampoco lo devuelve (este documento).
- El editor del front espera `subject` en la respuesta y crashea si no está.

## Relación entre los dos bugs

| Bug | Endpoint | Síntoma | Causa |
|---|---|---|---|
| **1** | `GET /api/modulos` (list) | 401 Unauthorized | Sesión/permisos (no diagnosticado acá, ver QA-FIX-11) |
| **2** | `GET /api/modulos/:id` (detail) | Crash `form.subject` undefined | El GET no devuelve `subject` |

Son **independientes** pero **concurrentes**:
- El 401 en `/api/modulos` (list) ocurre al cargar la página (probablemente desde `searchModules` o desde un `useEffect` que carga la lista de módulos para el selector de dependencias).
- El crash en `/api/modulos/:id` (detail) ocurre después, cuando el editor intenta cargar el módulo específico para editar.

El usuario ve el 401 en la consola Y el crash en la UI. Ambos son síntomas del mismo problema raíz: **el back no persiste ni devuelve `subject`**.

## Evidencia

- **Bug 1 (401)**: `apps/web/src/pages/modulos/useModuloEditor.ts:428-429`:
  ```ts
  const result = await apiGet<{ items?: Array<{ id: string; title: string }> }>(
    `/api/modulos?q=${encodeURIComponent(q)}&pageSize=8`,
  );
  ```
  Esta llamada es a `/api/modulos` (list). Si el usuario no tiene permisos o la sesión expiró, devuelve 401. El catch (línea 432-433) setea `setDepResults([])`, así que el 401 no crashea — solo muestra un dropdown vacío.

  **Pero** el 401 también puede venir de cualquier otro componente que llame `/api/modulos` al montar la página (ej. `ModulosList`, `ReproductorModulos`, `aula.tsx`, etc.). El log no dice desde qué componente.

- **Bug 2 (crash)**: `api/src/routes/modulos.ts:220-260` — el `moduleDto` no incluye `subject`. `apps/web/src/pages/modulos/useModuloEditor.ts:482` — lee `form.subject.length` sin null check.

## Por qué el editor "se rompe" pero la lista de módulos no

La lista de módulos (`ModulosList.tsx`, `ReproductorModulos.tsx`) usa el campo `subject` del response de `/api/modulos` (list), que es un endpoint diferente. El bug 2 afecta solo al editor (que usa `/api/modulos/:id`).

El editor es el único componente que hace `setForm({ ...result.form, ... })` con el resultado de un GET que no tiene `subject`. La lista solo lee `module.subject` para mostrar (no para un state que se evalúa con `.length`).

## Impacto

- **El editor de módulos está completamente roto** para cualquier usuario que intente editar un módulo existente.
- El `RouteErrorBoundary` muestra un error genérico; el usuario no sabe qué pasó.
- La única forma de editar un módulo es arreglar Bug 2 (que el GET devuelva `subject`).

## Propuesta de fix (sin aplicar)

### Opción A: el back devuelve `subject` en el GET (cierra Bug 2)

En `api/src/routes/modulos.ts:220-260`, agregar al `moduleDto`:
```ts
subject: item.subject ?? null,  // si la columna subject existe
// o
materia: item.subject ?? null,  // si se llama "materia" en la fila
```

**Pero** el modelo Prisma `Modulo` (`api/prisma/schema.prisma:306-325`) **NO tiene columna `subject`**. Así que esta opción requiere primero agregar la columna (migración), y luego el back la persiste y la devuelve.

### Opción B: el front valida `form.subject` antes de leer `.length` (defensivo)

En `apps/web/src/pages/modulos/useModuloEditor.ts:482`:
```ts
// Antes:
form.subject.length > 0 &&

// Después:
(form.subject ?? "").length > 0 &&
```

**Costo**: 1 línea. **Alcance**: arregla el crash, pero el campo `subject` queda vacío en el form (el usuario tiene que volver a tipearlo). **No arregla** la causa raíz.

### Opción C: el front normaliza `form` después de cargar (defensivo)

En `apps/web/src/pages/modulos/useModuloEditor.ts:188`:
```ts
// Antes:
setForm({ ...result.form, category: result.form.category || "sin-categoria" });

// Después:
setForm({
  ...defaultForm,  // ← garantiza todos los campos
  ...result.form,
  subject: result.form.subject ?? "",
  category: result.form.category || "sin-categoria",
});
```

**Costo**: 3 líneas. **Alcance**: arregla el crash Y normaliza el form. **Sigue sin arreglar** la causa raíz (el back no devuelve `subject`), pero el editor funciona.

### Opción D: combinar A + C (cierra raíz + defensivo)

1. Agregar columna `subject` al modelo Prisma `Modulo` (migración).
2. Back persiste `subject` en POST y PUT (cierra DIAG-GUARDADO).
3. Back devuelve `subject` en GET (cierra Bug 2).
4. Front normaliza el form después de cargar (defensivo, por si el back no tiene la columna en alguna versión).

**Costo**: alto (migración + cambios en back). **Alcance**: cierra la causa raíz completamente.

### Opción E (recomendada para fix inmediato): Opción C solo

Aplicar C para arreglar el crash. El editor funciona, pero el campo `subject` queda vacío. El usuario tiene que tipearlo de nuevo. La causa raíz (back no persiste `subject`) queda para un fix posterior (DIAG-GUARDADO opciones D/E).

## Bug 1 (401) — a investigar por separado

El 401 en `/api/modulos` (list) es un **síntoma** que puede tener varias causas:
- Sesión expirada (QA-FIX-11 debería haberlo arreglado).
- Permisos del usuario.
- El endpoint requiere un query param obligatorio.

**No es la causa del crash** (Bug 2). El crash ocurre independientemente del 401.

Para diagnosticar el 401, se necesita:
1. Ver qué componente hace la llamada a `/api/modulos` que devuelve 401.
2. Ver el log del back para ver si rechaza por `requirePolicy`, por `requireUser`, o por otro middleware.
3. Verificar que la sesión sea válida (después de QA-FIX-11, debería renovarse sola).

## Tests que se necesitarían (después del fix)

- `ModuloEditor` con un módulo que tiene `subject: "Matemáticas"` → el form se carga con `subject: "Matemáticas"`.
- `ModuloEditor` con un módulo sin `subject` (response del GET) → el form se carga con `subject: ""` (no crashea).
- `GET /api/modulos/:id` devuelve `subject` en la respuesta.
- `GET /api/modulos` (list) devuelve 200 con la lista (no 401).

## Aceptación del diagnóstico

Este diagnóstico identifica **dos bugs independientes** que ocurren al editar un módulo:
1. **401 en `/api/modulos` (list)**: síntoma de sesión/permisos, no causa el crash.
2. **Crash `form.subject` undefined**: el GET de detalle no devuelve `subject`, y el editor no valida null.

El crash es el bug bloqueante. El 401 es un síntoma separado que requiere investigación adicional.

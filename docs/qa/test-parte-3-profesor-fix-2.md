# Fix parte 3 — Profesor (5 bugs 🟡/🟠)

**Fecha**: 2026-06-17
**Origen**: `docs/qa/test-parte-3-profesor.md` (bugs 1.1, 1.2, 3.1, 7.1, 7.7).
**Alcance**: este documento describe los fixes aplicados a los 5 bugs
pendientes del informe de QA del rol TEACHER (no críticos pero
bloquean flujos pedagógicos clave), con causa raíz, evidencia,
archivos tocados y tests añadidos.

---

## Resumen ejecutivo

| # | Bug | Estado | Fix |
|---|---|---|---|
| 1.1 | Evaluaciones del panel sin título visible | ✅ resuelto | `recentEvaluations` real (QuizAttempt) en `/api/profesor/menu` con `title` poblado |
| 1.2 | Evaluaciones usan el modelo antiguo sin categoría | ✅ resuelto | Mismo endpoint trae `category` derivada de `Modulo.subject` |
| 3.1 | "Compartir" expone a toda la escuela | ✅ resuelto | Back acepta `scope ∈ {privado, escuela, publico}`; front abre modal con 3 opciones |
| 7.1 | "Leer en voz alta" solo lee título/subtítulo | ✅ resuelto | `extractTextForTts` matchea `"Texto"` (canónico) + fallback `"text"` |
| 7.7 | "Formas" inutilizable | ✅ resuelto | `ShapeBlockRenderer` busca en TODAS las colecciones, no solo en `block.collection` |

**Resultado de tests**: API 375/375 ✅ (11 nuevos), Web 912/912 ✅ (12 nuevos
sobre los archivos tocados). TypeScript sin nuevos errores (36
preexistentes sin relación).

---

## 1.1 + 1.2 — Evaluaciones del panel sin título / modelo antiguo

### Síntoma
- La sección "Evaluaciones recientes" del panel del profesor
  (`apps/web/src/pages/MenuProfesor.tsx:649-698`) en realidad listaba
  `modules` (módulos), no evaluaciones.
- El `title` mostrado era el del módulo (`m.title`), no el del
  cuestionario, así que el docente no veía el nombre de la
  evaluación concreta.
- La `category` mostrada era `m.category` (categoría de módulo), no
  la materia (`m.subject`). Sin materia asociada, no se podía
  filtrar ni agrupar por disciplina.
- El back del menú (`/api/profesor/menu`) no incluía
  `recentEvaluations` — la ruta nunca consultaba el modelo
  `QuizAttempt`.

### Causa raíz
La sección "Evaluaciones recientes" del panel heredó un listado de
módulos sin reemplazo. El back `/api/profesor/menu`
(`api/src/routes/profesor.ts:110`) devolvía `kpiCards`, `weeklyPlan`
y `quickLinks` pero ningún `recentEvaluations`. La sospecha del QA
("el panel consulta el endpoint viejo de ejercicios") era
correcta: la UI consumía `modules` del front (de `/api/modulos`),
que es el modelo de **módulo**, no el de **evaluación**.

### Fix
- **Back** (`api/src/routes/profesor.ts`): el menú ahora compone
  `recentEvaluations` desde los `QuizAttempt` reales del modelo
  nuevo (no la colección legacy "ejercicios" que ya no existe). Para
  cada módulo del docente (dueño o asignado a un aula suya):
  1. Trae los `Quiz` (`prisma.quiz.findMany`).
  2. Trae los `subject` de los módulos dueños en batch.
  3. Trae los `QuizAttempt` y los ordena por `startedAt desc`.
  4. Devuelve hasta 4 con shape:
     ```ts
     { id, title, category, moduleId, quizId, status, startedAt }
     ```
     donde `category = modulo.subject ?? modulo.titulo ?? "Sin materia"`.
  5. Los intentos huérfanos (sin quiz dueño) se omiten para no
     romper con `title: undefined`.
- **Front** (`apps/web/src/services/profesor.ts`): se agrega el
  tipo `ProfesorRecentEvaluation` y se normaliza la respuesta del
  servicio para tolerar deployments donde el back aún no incluya
  el campo (`recentEvaluations: data.recentEvaluations ?? []`).
- **Front** (`apps/web/src/pages/MenuProfesor.tsx`): la sección
  "Evaluaciones recientes" ahora consume `dashboard.recentEvaluations`
  y muestra `evaluation.title` y `evaluation.category` (siempre
  visibles — bug 1.1). El link va al detalle del intento
  (`/profesor/intentos/:id`), que es la ruta canónica que ya
  existía. El CTA del footer pasa a "Ver calificaciones" (ruta
  `/profesor/calificaciones`).

### Archivos tocados
- `api/src/routes/profesor.ts:181-244` — `recentEvaluations` con
  `prisma.quiz` + `prisma.quizAttempt` + `prisma.modulo`.
- `api/src/routes/profesor.ts:289` — `recentEvaluations` en la
  respuesta del menú.
- `apps/web/src/services/profesor.ts:36-45, 122-127` — tipo y
  normalización.
- `apps/web/src/pages/MenuProfesor.tsx:649-697` — sección
  "Evaluaciones recientes" reescrita.
- `api/tests/integracion/profesor-menu-evaluaciones.test.ts` —
  **nuevo**, 4 tests.
- `api/tests/integracion/_helpers/in-memory-prisma.ts:267-313` —
  stub `groupBy` para que el endpoint del menú corra en tests
  (la rama `weeklyPlan` lo usa).

### Cómo se prueba
```bash
cd api && node --test --import tsx \
  tests/integracion/profesor-menu-evaluaciones.test.ts
# → 4/4 pass
```

### Compatibilidad
- Respuesta es aditiva (`recentEvaluations` es un campo nuevo). El
  front tolera la ausencia con `?? []`. Cero riesgo de regresión.

---

## 3.1 — "Compartir" expone a toda la escuela

### Síntoma
- El botón "Compartir" de `apps/web/src/pages/ProfesorMateriales.tsx`
  hacía un POST directo a `/api/materiales/:id/compartir` y eso
  siempre cambiaba el `visibility` del material a `'escuela'`,
  sin pedirle nada al docente. Resultado: cualquier material se
  exponía a **toda** la escuela con un solo click — riesgo de
  privacidad alto (un material pensado para un aula o un grupo
  puntual quedaba visible para toda la institución).

### Causa raíz
`api/src/routes/materiales.ts:74-88` (pre-fix):
```ts
materiales.post('/api/materiales/:id/compartir', requireUser, async (req, res) => {
  // ... sin leer req.body ...
  await prisma.modulo.updateMany({
    where: { id, ownerUserId: userId },
    data: { visibility: 'escuela' },
  });
  return res.json({ ok: true });
});
```

Hardcodeado a `'escuela'`. El back no aceptaba `scope` ni ningún
selector; el front no tenía UI para elegir.

### Fix
- **Back** (`api/src/routes/materiales.ts:74-126`): el endpoint
  ahora acepta `body.scope ∈ {'privado', 'escuela', 'publico'}` y
  opcionalmente `body.targetIds` (array de aulas/docentes/alumnos).
  - `scope = 'escuela'` → `visibility: 'escuela'` + `schoolId = user.schoolId`.
  - `scope = 'publico'` → `visibility: 'publico'`.
  - `scope = 'privado'` → `visibility: 'privado'` + `schoolId = null`
    (limpia la herencia de la visibilidad anterior).
  - `targetIds` se persiste en `compartirCon` (JSON) para mantener
    el contrato y dejar la puerta abierta a share granular.
  - **Backward compat**: si el body está vacío o `scope` no viene,
    se mantiene `'escuela'` (comportamiento legacy) para no romper
    integraciones existentes.
  - Devuelve `{ ok: true, scope }` para que el front sepa qué se aplicó.
- **Front** (`apps/web/src/pages/ProfesorMateriales.tsx`): el botón
  "Compartir" ahora abre un modal con 3 opciones:
  - **Solo yo** (scope=`privado`).
  - **Mi escuela** (scope=`escuela`, default).
  - **Público** (scope=`publico`).
  - El label del botón cambia a **"Cambiar alcance"** si el material
    ya está compartido.
  - Cancelar no dispara POST.

### Archivos tocados
- `api/src/routes/materiales.ts:74-126` — endpoint con `scope`.
- `apps/web/src/pages/ProfesorMateriales.tsx:18-25, 56-86, 188-196, 208-285` —
  tipo `ShareScope`, modal de selección, integración con el POST.
- `api/tests/integracion/materiales-compartir-scope.test.ts` —
  **nuevo**, 7 tests.
- `apps/web/src/pages/__tests__/ProfesorMateriales.compartir-scope.spec.tsx` —
  **nuevo**, 5 tests.

### Cómo se prueba
```bash
# API
cd api && node --test --import tsx \
  tests/integracion/materiales-compartir-scope.test.ts
# → 7/7 pass

# Front
cd apps/web && npx vitest run \
  src/pages/__tests__/ProfesorMateriales.compartir-scope.spec.tsx
# → 5/5 pass
```

### Compatibilidad
- Backward compat: el endpoint sigue aceptando body `{}` y devuelve
  `{ ok: true, scope: 'escuela' }` (mismo efecto que antes).
- Cambio de `visibility: 'private'` → `'privado'`: el front ya usaba
  el vocabulario español (`ModuleVisibility = "publico" | "privado" | "escuela"`,
  ver `domain/module/module.types.ts:1`). El back ahora persiste el
  scope tal cual llega del front, así que la nueva escritura es
  `privado` (no `private` legacy). La lectura (`modulo.visibility ===
  'escuela' || 'publico'`) sigue funcionando.

---

## 7.1 — "Leer en voz alta" solo lee título/subtítulo

### Síntoma
- El botón "Leer en voz alta" de `apps/web/src/pages/modulos/ModuloDetail.tsx`
  (`leerModulo`) leía en voz alta solo el `title` y `description`
  del módulo. La teoría (los bloques `Texto` con su `detail`) se
  saltaba entera.

### Causa raíz
`ModuloDetail.tsx:160` (pre-fix):
```ts
if (bloque.type === "text" && bloque.detail) { ... }
```

El editor de módulo (`domain/module/module.types.ts:202-217`) emite
el tipo canónico **`"Texto"`** (con mayúscula), no `"text"`. El check
nunca matcheaba → el bucle recorría los bloques pero nunca empujaba
el `detail` a `textos`. El TTS leía solo los dos textos que
siempre se agregan (título + descripción) y se detenía.

### Fix
- La lógica se extrae a un helper puro `extractTextForTts`
  (`ModuloDetail.tsx:96-130`), exportado para tests.
- El match es case-sensitive contra `"Texto"` (canónico) **y** un
  fallback tolerante a `"text"` (minúsculas, `toLowerCase()`) por
  compat con data legacy o builds viejos que no estén normalizados.
- Si el bloque tiene `title`, se lee antes que el `detail` para que
  la navegación por voz dé contexto al oyente (cada bloque tiene
  su propio micro-título).
- El handler `leerModulo` ahora invoca `extractTextForTts(module ?? {})`
  en lugar de inline.

### Archivos tocados
- `apps/web/src/pages/modulos/ModuloDetail.tsx:96-130` — helper
  `extractTextForTts` exportado.
- `apps/web/src/pages/modulos/ModuloDetail.tsx:185-188` — `leerModulo`
  consume el helper.
- `apps/web/src/pages/modulos/__tests__/ModuloDetail.tts.spec.ts` —
  **nuevo**, 5 tests (canónico, legacy, imagen, video excluido,
  módulo sin bloques).

### Cómo se prueba
```bash
cd apps/web && npx vitest run \
  pages/modulos/__tests__/ModuloDetail.tts.spec.ts
# → 5/5 pass
```

---

## 7.7 — "Formas" inutilizable

### Síntoma
- La herramienta "Formas" del editor de bloques permitía agregar
  formas al canvas, pero al renderizar el bloque (vista previa o
  modo alumno) muchas formas desaparecían — la herramienta daba la
  sensación de "no responder" o de "haber roto" el canvas.

### Causa raíz
`apps/web/src/blocks/renderers/ShapeBlockRenderer.tsx:103` (pre-fix):
```ts
const shape = collection.shapes.find((s) => s.id === item.shapeId)
```

Solo buscaba el shape dentro de `collection` (la colección "activa"
del bloque, leída de `block.collection`). El editor usa otra lógica:
cambia la `activeCollection` de la paleta sin tocar
`block.collection`, así que si el docente agregaba una forma desde
la pestaña "Física" (`activeCollection = 'fisica'`) y luego
cambiaba a "Básica" (`activeCollection = 'basica'`,
`block.collection` se quedaba en 'basica' o se actualizaba
independientemente), el `find` del renderer fallaba y la forma no
se pintaba.

Peor: si el bloque se guardaba con `collection = 'basica'` pero la
forma tenía `shapeId` de la colección 'fisica', el renderer siempre
devolvía `undefined` y la forma desaparecía en cualquier render
fuera del editor.

### Fix
- `ShapeBlockRenderer.tsx:102-119` — la búsqueda ahora usa
  `Object.values(COLLECTIONS).flatMap((col) => col.shapes).find(...)`,
  igual que ya hacía el editor (`ShapeBlockEditor.tsx:415-417`).
  Esto garantiza que cualquier forma agregada se renderice sin
  importar la colección activa del bloque.

### Archivos tocados
- `apps/web/src/blocks/renderers/ShapeBlockRenderer.tsx:11-12, 102-119` —
  `collection` se elimina de la destructuración local; el `find`
  pasa a buscar cross-colección.
- `apps/web/src/blocks/renderers/__tests__/ShapeBlockRenderer.fix.spec.tsx` —
  **nuevo**, 4 tests (cross-colección, mezcla, huérfano, bloque vacío).

### Cómo se prueba
```bash
cd apps/web && npx vitest run \
  src/blocks/renderers/__tests__/ShapeBlockRenderer.fix.spec.tsx
# → 4/4 pass
```

---

## Archivos modificados (resumen)

```
api/src/routes/materiales.ts                            |  +52 / -4  (FIX-COMPARTIR-SCOPE)
api/src/routes/profesor.ts                              |  +65 / -1  (FIX-PANEL-EVALUACIONES)
api/src/lib/… (in-memory-prisma.ts)                     |  +47      (groupBy stub)
api/tests/integracion/profesor-menu-evaluaciones.test.ts | +130      (nuevo, 4 tests)
api/tests/integracion/materiales-compartir-scope.test.ts | +130      (nuevo, 7 tests)
apps/web/src/pages/MenuProfesor.tsx                     |  +33 / -22  (FIX-PANEL-EVALUACIONES)
apps/web/src/pages/ProfesorMateriales.tsx               |  +115 / -8  (FIX-COMPARTIR-SCOPE)
apps/web/src/services/profesor.ts                       |  +12 / -1  (FIX-PANEL-EVALUACIONES)
apps/web/src/pages/modulos/ModuloDetail.tsx             |  +35 / -22  (FIX-LEER-VOZ-ALTA)
apps/web/src/blocks/renderers/ShapeBlockRenderer.tsx    |  +13 / -5  (FIX-FORMAS-RENDERER)
apps/web/src/blocks/renderers/__tests__/ShapeBlockRenderer.fix.spec.tsx | +115 (nuevo, 4 tests)
apps/web/src/pages/modulos/__tests__/ModuloDetail.tts.spec.ts | +65 (nuevo, 5 tests)
apps/web/src/pages/__tests__/ProfesorMateriales.compartir-scope.spec.tsx | +160 (nuevo, 5 tests)
```

## Cómo correr todos los tests de la tanda

```bash
# API
cd api && npm test

# Web (lo tocado por los 5 fixes)
cd apps/web && npx vitest run

# Typecheck
cd api && npx tsc -p tsconfig.json --noEmit
```

## Pendientes (no críticos, no cerrados acá)

- 2.5 / 2.6: Navbar cambia a "modo alumno" dentro del aula (cosmético).
- 3.2: "Crear cuestionario" desde material abre editor deprecado.
- 5.1 / 5.2: Pestañas + filtros redundantes en Mis módulos + tema.
- 6.1: Mapas: controles flotantes mal posicionados.
- 7.2: Diccionario: bug de generación (postergado).
- 7.3–7.6: Tabla periódica, escalador de recetas, líneas de tiempo, mapas (pases de diseño).
- 7.8: Onboarding por herramienta.
- 10.1 / 10.2: Editor de módulo — Nivel hidratado + pulido general.
  (10.1 ya resuelto por FIX-MODULO-CRASH-LEVEL previo, ver `fe478704`).
- 12.1 / 13.1: Más libertad en presentaciones + editor de libros tipo Word/Docs.
- 14.1: Vista de alumno con formato pobre.
- 16.1: Falta editor de "cuestionarios escritos" para investigaciones.

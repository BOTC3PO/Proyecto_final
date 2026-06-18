# Test 4 — Auditoría general de bugs (2026-06-18)

**Fecha**: 2026-06-18
**Origen**: ronda manual de QA funcional sobre el estado actual de la
plataforma, realizada por Javier. Esta auditoría no reemplaza la
`bug-checklist-2026-02-20.md` (que ya está cerrada con 24 fixes), ni los
diagnósticos en `docs/qa/` (que siguen vigentes). Lo que documenta este
archivo es el **listado completo de bugs que el tester encontró a simple
vista + lo que un análisis estático posterior descubrió** sobre el mismo
estado del código.

> **Alcance**: este documento es **inventario**, no propuesta de fix.
> Para cada bug se incluye: archivo(s) y línea(s), severidad, repro y
> referencia al bug original del tester. Los fixes se abordarán en
> rondas posteriores.

---

## Resumen ejecutivo

| Severidad | Cantidad | Notas |
|---|---:|---|
| 🔴 crítico (rompe funcionalidad principal) | 5 | 404 de publicaciones, avisos no visibles, modulos vacíos sin migrar, calendario no editable, ediciones no persisten |
| 🟠 alto (UX rota, data leak visual, regresión) | 9 | panel inflación vs JSON hardcodeado, doble sistema cursos/aulas, mensajes/avisos sin edit, navbar dual-role, código del aula, login no se persiste |
| 🟡 medio (cosmético, feature incompleta) | 11 | textos sin adaptar a tema, tienda/economía inaccesibles en modo alumno, mock data en ProfesorEvaluaciones, age-promotion, etc. |
| 🟢 bajo (forward-looking) | 4 | rol "padre" no en Register, etc. |
| **Total** | **29** | |

> Más una lista de **5 issues colaterales** encontrados durante el
> análisis estático que el tester no notó a simple vista (sección final).

---

## 1. Bugs del panel administrativo (ADMIN)

### BUG-ADMIN-01 — El panel controla inflación pero `calendario_economico.json` la sobreescribe hasta 2100
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4)
**Archivos**:
- `apps/web/src/pages/Admin.tsx:53-99` (form de inflación/deflación)
- `api/src/routes/economia.ts:312-351` (`getMacroAjuste`, lee de DB)
- `api/src/routes/economia.ts:588, 2012, 2024-2034` (`getAjusteEconomico`, lee de JSON)
- `api/src/lib/calendario-economico.ts:28-45` (carga el JSON)
- `api/src/base/calendario_economico.json:1-6` (rango 2024-01-01 → 2100-12-31)

**Causa raíz**: hay **dos sistemas paralelos de inflación** que se
contradicen:

1. **Config-driven** (lo que el panel controla): el admin setea
   `inflacion.tasa`, `inflacion.activa`, `deflacion.tasa`,
   `hiperinflacion.tasa` en `economia_config` (DB). El panel
   `Admin.tsx:53-99` lo lee y lo escribe. La función `getMacroAjuste`
   (`economia.ts:312-351`) lo usa para `recompensas` (línea 471) y
   `metricas` (línea 2012).

2. **Calendario hardcodeado**: `calendario_economico.json` define
   1481 ciclos fijos entre 2024 y 2100. La función `getAjusteEconomico`
   (`calendario-economico.ts:57-112`) lo lee para `saldos`
   (`economia.ts:588`) y la ruta `GET /api/economia/ciclo-activo`
   (`economia.ts:2024-2034`).

**Síntoma**: el admin marca "Inflación activa = 10%" y ve el cambio en
el panel y en `/api/economia/metricas`, pero el alumno que consulta
`/api/economia/saldos` sigue recibiendo `precioFactor: 1` (o el valor
del JSON del día). Los dos sistemas no se sincronizan nunca.

**Repro**:
1. Login ADMIN → `/admin` → tildar "Inflación activa", tasa 0.10, guardar.
2. En otra pestaña, login USER → `/economia` → ver saldo.
3. `GET /api/economia/saldos?usuarioId=…` devuelve `ajuste.tipo: "normal"`
   cuando el JSON del día dice "normal" — independiente de lo que el
   panel haya configurado.
4. En la fecha en que el JSON dice "inflacion" (hay varios en 2026),
   el `ajuste.tipo` va a ser "inflacion" del JSON, ignorando la DB.

**Fix sugerido** (no implementado acá): decidir un único sistema
fuente de verdad. Opciones:
- (A) Eliminar `calendario_economico.json` y usar solo el config de DB.
- (B) Tratar el JSON como default y permitir overrides manuales desde
  el panel.
- (C) Combinar: si hay override manual activo, gana; si no, JSON.

---

### BUG-ADMIN-02 — Materias del admin no están conectadas al resto del sistema
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4)
**Archivos**:
- `apps/web/src/pages/AdminMaterias.tsx` (lista y CRUD de materias)
- `apps/web/src/services/admin.ts` (servicio)
- `api/src/routes/admin.ts:285` (`PATCH /api/admin/materias/:id`)
- `api/src/routes/configuracion.ts:105` (`PATCH /api/config/materias`)
- `api/src/routes/diccionarios.ts` (generadores + materias hardcodeadas)
- `apps/web/src/pages/modulos/useModuloEditor.ts:117-131` (`FALLBACK_SUBJECTS` hardcodeado)

**Causa raíz**: existen **tres fuentes distintas de "materias"**:

1. **`AdminMaterias`** (panel): lee/escribe vía `fetchAdminMaterias` /
   `createAdminMateria` / `updateAdminMateria`. Apunta a
   `Materia` (tabla `materias`, `api/prisma/schema.prisma:909-913`),
   que es un **JSON blob** sin schema. Se usa solo en el admin.

2. **`Configuracion.materias`**: la ruta `PATCH /api/config/materias`
   (`configuracion.ts:105`) escribe en otro lado, no queda claro
   dónde.

3. **`FALLBACK_SUBJECTS` en `useModuloEditor.ts:117-131`**: lista
   hardcodeada en el front que se usa si la API falla. **No consulta
   la DB del admin**.

4. **Diccionarios de generadores** (`api/src/diccionarios`): la lógica
   de bancos por materia está cableada a strings (`"biologia"`,
   `"quimica"`, etc.) en `api/src/routes/diccionarios.ts` y los
   `import` dinámicos en `EditorCuestionarios.tsx:46-55` y
   `EditorCuestionariosV2.tsx:80-86`. El admin no puede agregar
   `"Programación"` como materia nueva y que aparezca en el editor de
   cuestionarios — porque el editor hace `switch (materia)` sobre un
   set fijo.

**Síntoma**: el admin crea "Programación" en `/admin/materias`, pero
cuando un docente abre el editor de cuestionarios no la ve. Cuando el
editor de módulos muestra el dropdown de materia (línea 683), tampoco
la ve — porque el dropdown se llena con `FALLBACK_SUBJECTS` cuando
`/api/materias` no devuelve esa materia (que es lo que pasa porque la
tabla `materias` no es lo que se consulta).

**Repro**:
1. ADMIN → `/admin/materias` → "+ Nueva materia" → nombre "Programación" → guardar.
2. Volver a la lista: la materia aparece en `AdminMaterias`.
3. TEACHER → `/modulos/crear` → dropdown de materia: sigue mostrando
   `Matemáticas, Lengua, Historia, …` (los 12 del fallback). No está
   "Programación".
4. TEACHER → editor de cuestionarios → dropdown de materia: idem.

**Fix sugerido**: una sola fuente de verdad (la tabla `materias` del
admin), y todos los demás sistemas consumen esa tabla. Eliminar
`FALLBACK_SUBJECTS` y cablear los generadores V2 por `id` (no por
nombre hardcodeado).

---

## 2. Bugs transversales del modelo de Módulos

### BUG-MOD-01 — Módulos de la beta 0.0.4 quedaron vacíos en la DB
**Severidad**: 🔴 crítico
**Reportado por**: tester (test 4)
**Archivos**:
- `api/prisma/migrations/20260523184108_vblang_models` (DROP de columnas)
- `api/prisma/migrations/20260617010000_modulo_subject` (re-agrega `subject`)
- `api/prisma/migrations/20260617020000_modulo_theory_items` (re-agrega `theory_items`)
- `api/prisma/migrations/20260617040000_modulo_level` (re-agrega `level`)
- `api/prisma/schema.prisma:313-348` (modelo `Modulo`)
- `docs/qa/diagnostico_migraciones_pendientes.md` (diagnóstico previo, ya documentado)

**Causa raíz**: la migración `20260523184108_vblang_models` dropeó las
columnas `category`, `duration_minutes`, `level`, `subject` de
`modulos`. Las 3 migraciones de junio (`17_sub`, `17_thy`, `17_lvl`)
re-agregaron `subject`, `theory_items` y `level` — pero **nadie
re-agregó `category` ni `duration_minutes`**. Y el `init` original
nunca las creó tampoco. El Zod schema las exige
(`api/src/schema/modulo.ts:209-211`) y el front las usa, pero la fila
no las tiene → Zod las acepta, `modulos.ts` no las persiste, GET no
las devuelve.

**Síntoma** (tester): "en la base de datos hay módulos vacíos de la
beta 0.0.4". El listado de módulos los trae, pero al abrirlos en el
editor, todos los campos están en blanco (subject, level, category,
duration). Los módulos viejos de la beta 0.0.4 (cuando existían las
columnas) tenían datos que se perdieron al dropear.

**Repro**:
1. `SELECT id, subject, level, category, duration_minutes FROM modulos`
   en la DB real.
2. Los rows viejos (anteriores a la migración de junio) tienen
   `subject = NULL`, `level = NULL`, `category = NULL`,
   `duration_minutes = NULL`.

**Fix sugerido** (no implementado acá): correr las 5 migraciones
pendientes con `npx prisma migrate deploy`, **agregar la migración
que falta** para `category` y `duration_minutes`, y un **backfill**
que use los datos viejos de `libro_id` o del JSON original para
inferir al menos `category` y `subject` cuando estén vacíos.

**Referencia**: el bug ya está documentado en
`docs/qa/diagnostico_migraciones_pendientes.md:1-250` (Fase 1 del
QA). Este documento lo incorpora al test 4 porque el tester lo
reprodujo manualmente.

---

### BUG-MOD-02 — Módulo editor: problemas con temas existentes al abrir para editar
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "modulos solo tiene un problema
con los temas existentes"

**Archivos**:
- `apps/web/src/pages/modulos/useModuloEditor.ts:94-115` (inicializa
  `theoryItems` y `quizzes` desde draft o vacío)
- `apps/web/src/pages/modulos/useModuloEditor.ts:183-196` (carga el
  módulo vía `persistence.loadModule(id)`)
- `apps/web/src/pages/modulos/useModuloPersistence.ts:63-125` (`loadModule`)
- `apps/web/src/components/modulos/TheoryItemCard.tsx:18-23` (tipo
  `TheoryItem`)
- `apps/web/src/components/modulos/TheoryItemCard.tsx:31-52`
  (`getTypeLabel`, soporte para español + inglés legacy)

**Síntoma**: al abrir un módulo existente para editarlo, los "temas"
(`theoryItems`) se renderizan pero varios detalles UX se rompen:

1. **El primer render muestra el form como "nuevo"** (campos vacíos)
   durante 1-2 frames, y después se hidrata con los datos del servidor
   → el usuario ve un "flash" del form vacío.
2. **Si un `theoryItem.type` no está en el mapa `getTypeLabel`**, se
   renderiza el `type` crudo (ej. `"book"` en vez de "Libro"). El
   front debería normalizar a español.
3. **El campo `category` no se preserva en el round-trip**: la
   `useModuloPersistence` (línea 106) hace `module.category ?? "sin-categoria"`
   pero la columna no existe en la DB (BUG-MOD-01) → siempre vuelve
   como `null` después de un PUT.
4. **La `quizVersion.id` puede no existir en módulos viejos**: el
   check `if (!version?.id)` en `quiz-attempts.ts:782` rechaza
   cuestionarios viejos al intentar un intento. El tester lo ve como
   "no se puede hacer un cuestionario de un módulo viejo".

**Repro**:
1. Crear módulo nuevo con un `theoryItem` de tipo "Libro" (id=libro-x).
2. Guardar.
3. Abrir el mismo módulo para editar.
4. Observar: el form parpadea a vacío antes de llenarse, el `type`
   del item aparece como "book" en vez de "Libro", y si se vuelve a
   guardar sin tocar nada, el `category` se pierde.

**Fix sugerido**:
- Hidratar `form` desde el primer render (no en useEffect
  post-mount), usando `loader` o un cache server-side.
- Mapear `type` legacy → español en `useModuloPersistence.loadModule`
  antes de devolver el array.
- Mover el guardado de `category`/`duration_minutes` al back una vez
  resuelta la migración de la DB.
- Para módulos viejos sin `quizVersionId`, regenerar automáticamente
  o exponer una acción "Regenerar versiones" en el editor.

---

### BUG-MOD-03 — Temas no se cargan: render en blanco + carga súbita al hacer cualquier acción
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "hay un bug con los temas al usar
algunas funciones, se por lo que parece que no se carga correctamente y
al hacer alguna accion se carga de golpe"

**Archivos**:
- `apps/web/src/pages/modulos/ModuloDetail.tsx` (vista del módulo)
- `apps/web/src/components/modulos/TheoryItemCard.tsx`
- `apps/web/src/pages/modulos/useModuloEditor.ts:165-167`
  (`depPickerOpen`)

**Causa raíz probable** (análisis estático, no confirmado en runtime):
los `theoryItems` viven en `sessionStorage` mientras el módulo es
nuevo (draft), pero al editar uno existente se cargan vía
`persistence.loadModule` en un useEffect. Si la red está lenta, el
usuario ve el módulo renderizado sin temas por unos segundos. Apenas
hace cualquier otra acción (cambiar de tab, abrir el picker de
dependencias, etc.), el useEffect termina y los temas aparecen de
golpe.

**Síntoma**: el alumno abre `/modulos/<id>`, ve el header + teoría
vacía. Click en "Ver dependencias" o cualquier otra acción, y de golpe
aparecen los `theoryItems`.

**Repro**:
1. Abrir un módulo con `theoryItems` poblados pero con latencia
   simulada de 1-2s en la red.
2. La sección de temas queda en blanco hasta que la red responde.

**Fix sugerido**: usar `Suspense` o un esqueleto explícito en lugar
de renderizar el módulo sin sus temas. O cargar los `theoryItems`
inline en el GET del módulo para que lleguen en un solo round-trip.

---

## 3. Bugs de la vista del alumno

### BUG-ALU-01 — La vista del alumno no sigue la ruta esperada
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "la vista del alumno no sigue la
ruta esperada"

**Archivos**:
- `apps/web/src/router.tsx:208-244` (rutas bajo `AlumnoLayout`:
  `/alumno`, `/clases`, `/clases/:aulaId`, `/tareas`, `/encuestas`,
  `/progreso`, `/economia`, `/tienda-temas`, `/calendario`)
- `apps/web/src/nav/navConfig.ts:13-21` (`NAV_BY_ROLE['USER']` =
  Inicio, Clases, Tareas, Progreso, Módulos, Calendario, Mensajes)
- `apps/web/src/router.tsx:200-206` (`ProtectedRoute allow` con TODOS
  los roles, no solo `USER`)

**Síntoma**: el tester esperaba que un USER sin aulas asignadas viera
"todavía no estás en ninguna clase" o similar, y al hacer click en
"Clases" del navbar fuera a `/clases` y mostrara el listado vacío.
Pero la ruta `/clases` (router.tsx:213) carga `MisClases` que pide
`/api/aulas` (autenticado) y muestra el aula si existe. Si el USER no
tiene aulas, ve "Sin clases disponibles" sin CTA para unirse a una
por código.

**Repro**:
1. Login como USER nuevo (sin aulas, sin membresías).
2. Navbar → "Clases" → `/clases` → pantalla vacía sin acción
   posible.
3. Esperado: pantalla con "Unite a una clase con un código" y un
   input para tipear el `classCode`. **Hoy ese input está pero sin
   handler claro** (ver `MisClases.tsx`, que se reusa para
   `/aulas/unirse` en otra ruta).

**Fix sugerido**: el botón "Unirse por código" debería ser visible
en `/clases` cuando el usuario no tiene aulas. Hoy
`/api/aulas/unirse` existe pero no hay UI directa.

---

### BUG-ALU-02 — "Ver como alumno" muestra datos del staff, no de un alumno
**Severidad**: 🟠 alto (ya documentado)
**Reportado por**: tester (test 4) — "el modo alumno todavía presenta
bugs y tendria que comportarse como un alumno"
**Estado**: ya documentado en `docs/qa/bug-modo-alumno-staff.md`
(2026-06-17). Se incluye acá para inventario.

**Resumen**: el botón "Ver como alumno" en el sidebar de TEACHER,
DIRECTIVO y ADMIN navega a `/alumno` (misma URL que los USER reales).
La página `MenuAlumno` (`apps/web/src/pages/menu-alumno.tsx`) hardcodea
`role: "Alumno"` (línea 358) y consume `/api/progreso?usuarioId=<staff>`
y `/api/economia/saldos?usuarioId=<staff>`, mostrando el progreso y el
saldo del staff como si fuera de un alumno.

**Repro**: ver `bug-modo-alumno-staff.md:39-90`.

---

### BUG-ALU-03 — Bugs visuales en navbar/header del aula cuando el viewer es staff
**Severidad**: 🟠 alto (ya documentado)
**Reportado por**: tester (test 4) — refuerzo del bug ya documentado
**Estado**: ya documentado en `docs/qa/bug-visual-aula-rol-dual.md`
(2026-06-17, 7 bugs agrupados).

**Resumen**:
1. Navbar del aula: items de USER hardcoded, dropdown del rol real
   (`AlumnoNavbar.tsx:8`).
2. Header del aula: "Docente invitado" para un USER-en-este-aula
   (`pages/aula.tsx:328-334`).
3. Header: "Acceso visitante" para un miembro
   (`pages/aula.tsx:336-341`).
4. Botón "Gestionar aula" para cualquier TEACHER (incluso no-miembro)
   (`pages/aula.tsx:401-413`).
5. "Ver como alumno" en dropdown es circular cuando ya estás ahí
   (`nav/navConfig.ts:85,91,97`).
6. Dropdown USER no escala a multi-rol
   (`nav/navConfig.ts:75-82`).
7. `MisClases` no muestra el rol del viewer en cada aula
   (`pages/MisClases.tsx:209`).

**Repro completo**: `bug-visual-aula-rol-dual.md:36-260`.

---

### BUG-ALU-04 — Entrar y salir de un cuestionario cuenta como "hecho"
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "entrar y salir de un cuestionario
cuenta como hecho cuando tendria que crear un intento y hacerlo
accesible"

**Archivos**:
- `apps/web/src/pages/quizzes/QuizAttempt.tsx` (vista del intento)
- `api/src/routes/quiz-attempts.ts:741-834` (`POST /api/quiz-attempts`,
  crea el attempt con `status: "in_progress"`)
- `api/src/routes/quiz-attempts.ts:854-984` (`GET /api/quiz-attempts`,
  incluye attempts con `status: "in_progress"`)

**Causa raíz probable** (análisis estático, no confirmado en runtime):
el front de `QuizAttempt.tsx` llama a `apiPost('/api/quiz-attempts', …)`
en el `useEffect` de mount (línea 358-465 según el flujo), creando
un attempt con `status: "in_progress"`. Si el usuario cierra la pestaña
sin responder, el attempt queda `in_progress` y aparece en la lista
de "completados" del profesor (`ProfesorCalificaciones.tsx:120`) porque
el filtro es `status === "completed" || status === "submitted"` — pero
otros lugares listan "todos los attempts" y el `in_progress` aparece
como "abandonado" sin nota de que nunca se respondió.

**Síntoma**: el profesor ve en `/profesor/calificaciones` que el
alumno X "entregó" el cuestionario Y, pero al hacer click en "Ver
detalle" ve que no tiene respuestas (`score: 0`, `answers: {}`).
El alumno lo abrió y cerró sin responder.

**Repro**:
1. Alumno entra a `/modulos/<id>/quiz/<quizId>`.
2. Aparece la pantalla del cuestionario.
3. Cierra la pestaña sin responder.
4. Profesor entra a `/profesor/calificaciones` → ve el attempt con
   puntaje 0 listado como "1 entrega".

**Fix sugerido**:
- En el back, agregar un job que marque `in_progress` con más de N
  horas como `aborted`.
- En el front de calificaciones, no contar `in_progress` ni `aborted`
  en el promedio, y filtrarlos del "entrega(s)" count.
- En `QuizAttempt.tsx`, avisar al usuario antes de cerrar la pestaña
  con un `beforeunload` o guardar un "abandoned" explícito.

---

## 4. Bugs del profesor

### BUG-PROF-01 — Aulas y Cursos son lo mismo, hay que fusionarlos
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "en el profesor hay un problema
aulas y cursos son lo mismo por lo que habria que fusionarlos"

**Archivos**:
- `apps/web/src/pages/ProfesorAulas.tsx` (lista, crear, editar aulas)
- `apps/web/src/pages/ProfesorCursos.tsx` (lista "Mis cursos" — usa el
  mismo endpoint `/api/aulas`)
- `apps/web/src/pages/ProfesorCursoNuevo.tsx` (crear curso, en
  desuso — solo reusa el form de aulas)
- `apps/web/src/router.tsx:264-294` (rutas: `profesor/cursos`,
  `profesor/cursos/nuevo`, `profesor/aulas`, `profesor/aulas/:aulaId`)
- `apps/web/src/nav/navConfig.ts:42-52` (nav TEACHER con ambos: Aulas
  y el botón "+ Gestionar aulas" lleva a `/profesor/aulas`)

**Causa raíz**: `ProfesorCursos.tsx` lee el mismo endpoint
`/api/aulas` que `ProfesorAulas.tsx` y muestra el mismo set de
`classroom.id`. Las dos páginas son visualmente distintas pero los
datos son los mismos. "Curso" y "Aula" son la misma entidad en la DB
(`Clase` en el modelo Prisma, `api/prisma/schema.prisma:106-127`).

**Síntoma**:
- En el navbar TEACHER hay "Aulas" que lleva a `/profesor/aulas`.
- En `ProfesorCursos.tsx:54` hay un botón "+ Gestionar aulas" que
  lleva a `/profesor/aulas` (mismo lugar).
- Las dos páginas coexisten y los items se duplican.

**Repro**:
1. Login TEACHER.
2. Click en "Aulas" del navbar → `/profesor/aulas` → lista A.
3. Navegar manualmente a `/profesor/cursos` → otra lista con los
   mismos items pero distinto layout.

**Fix sugerido**:
- Decidir el término canónico: **Aula** (recomendado, porque es lo
  que el dominio real usa).
- Eliminar `ProfesorCursos.tsx`, `ProfesorCursoNuevo.tsx` y la ruta
  `/profesor/cursos`.
- Mover el contenido de `ProfesorCursos` (vista de tarjetas, filtros)
  a `ProfesorAulas.tsx` o crear un solo `AulasCursos.tsx` con tabs
  internas.

---

### BUG-PROF-02 — Falta acceso a sistemas de notas según el módulo
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "hay que agregar el acceso a los
sistemas de notas segun el modulo"

**Archivos**:
- `apps/web/src/pages/ProfesorCalificaciones.tsx:42-66` (filtra por
  `aulaId`, no por `moduleId`)
- `apps/web/src/pages/ProfesorCalificaciones.tsx:48-53` (FIX-CALIFICACIONES
  comment, `moduleId` removido a propósito)
- `api/src/routes/quiz-attempts.ts:854-984` (`GET /api/quiz-attempts`,
  soporta `?moduleId=` y `?aulaId=`)
- `apps/web/src/components/profesor/CorreccionesPendientes.tsx`
  (filtra solo por aula)

**Causa raíz**: `ProfesorCalificaciones` carga **todos** los attempts
del aula sin filtrar por módulo. El back sí acepta `moduleId` (lo
testean FIX-CALIFICACIONES y el filtro de `quiz-attempts.ts:854`),
pero el front lo omitió a propósito para mostrar "todas las
calificaciones del aula".

**Síntoma**: el docente no puede ver "las notas del módulo X dentro
del aula Y" sin descargar un CSV. Tiene que mirar todos los attempts
mezclados.

**Repro**:
1. Login TEACHER.
2. `/profesor/calificaciones` → ver "Evaluaciones formales" del aula.
3. No hay selector de módulo para filtrar.

**Fix sugerido**: agregar un dropdown de módulos en
`ProfesorCalificaciones.tsx` que llame a `/api/quiz-attempts?aulaId=…&moduleId=…`
y muestre las notas de ese módulo. Mantener la vista "todas" como
opción por defecto.

---

### BUG-PROF-03 — Evaluaciones debería estar reservado a módulos de tipo "evaluación"
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "Evaluaciones tendria que estar
reservado a los modulos de tipo evaluacion"

**Archivos**:
- `apps/web/src/pages/ProfesorEvaluaciones.tsx:21-94` (mock data con
  tipos `practica`, `evaluacion`, `competencia` mezclados)
- `apps/web/src/pages/ProfesorEvaluaciones.tsx:96-100`
  (`fetchQuizzes` retorna `mockQuizzes` con `setTimeout` — nunca pega
  a la API real)
- `api/src/routes/quiz-attempts.ts:854-984` (endpoint real, no usado)

**Causa raíz**: `ProfesorEvaluaciones.tsx` es una página de UI pura
con **datos mockeados**. No consume ningún endpoint real y muestra los
3 tipos de cuestionarios juntos. El tester no puede filtrar para ver
solo los `evaluacion`.

**Síntoma**:
1. Login TEACHER.
2. `/profesor/evaluaciones` → ve tarjetas de mockQuizzes
   hardcodeadas (quiz-001, quiz-002, etc.).
3. El filtro "Tipo" permite `practica`, `evaluacion`, `competencia`
   — pero el tester esperaba que la página se restringiera a
   `evaluacion` por defecto.

**Repro**: ver arriba.

**Fix sugerido**:
- Cablear `ProfesorEvaluaciones.tsx` al endpoint real
  (`/api/quiz-attempts?aulaId=…&type=evaluacion` o un endpoint nuevo
  `/api/quizzes?type=evaluacion`).
- Filtrar por `quizType === "evaluacion"` por defecto (los
  `practica` y `competencia` van a `/profesor/calificaciones` o un
  panel distinto).

---

### BUG-PROF-04 — Material didáctico no rediseñado para compartir con docentes
**Severidad**: 🟡 medio
**Reportado por**: tester (test 4) — "Material didáctico tiene que
rediseñarse para compartir marerial con docentes de la institucion al
igual que los datasets y cuestionarios"

**Archivos**:
- `apps/web/src/pages/ProfesorMateriales.tsx` (lista + compartir)
- `apps/web/src/pages/ProfesorMateriales.tsx:20-24` (`SHARE_SCOPE_OPTIONS`
  = `privado`, `escuela`, `publico`)
- `api/src/routes/materiales.ts` (endpoint real)
- `apps/web/src/services/vblang-datasets.ts` (comparación:
  VBLang datasets ya tienen `visibility: privada/escuela/publica`
  con permisos por escuela — el tester sugiere replicar el patrón)

**Estado parcial**: el fix `FIX-COMPARTIR-SCOPE` (comment en
`ProfesorMateriales.tsx:46-55`) ya implementó los 3 scopes
(`privado`, `escuela`, `publico`) y un modal de confirmación. Pero:

1. **El patrón de datasets es más rico**: incluye `ownerUserId`,
   `schoolId` en la fila, y el back valida que el viewer sea de la
   misma escuela para ver los de `escuela`. El de materiales es más
   simple (solo cambia un campo `compartido: boolean`).
2. **No hay búsqueda/filtrado** por materia o autor en la pestaña
   "De la escuela".
3. **No hay preview** del cuestionario/material antes de decidir
   compartirlo.
4. **El back de `/api/materiales` no aplica permisos por escuela**:
   un docente de escuela A puede ver materiales de escuela B si se
   los pasan por URL directa.

**Repro**:
1. Login TEACHER de escuela A.
2. Crear cuestionario.
3. Login TEACHER de escuela B (otra escuela, mismo dominio).
4. Visitar `/profesor/materiales` → no ve los de la otra escuela
   (bien), pero no hay forma de saber **por qué** un material está
   en "De la escuela" ni qué docentes lo aportaron.

**Fix sugerido**:
- Replicar el modelo de `VblangDataset` en `Materiales`: agregar
  `ownerUserId`, `schoolId`, `visibility` (privada/escuela/pública)
  a la fila de materiales.
- En el back, validar que `visibility === 'escuela'` solo sea
  visible para usuarios de la misma escuela.
- En el front, agregar filtros por autor/materia y un preview
  embebido.

---

### BUG-PROF-05 — Calendario no permite editar un evento
**Severidad**: 🔴 crítico
**Reportado por**: tester (test 4) — "calendario tendria que permitir
editar un evento creado por su usuario o en caso del directivo y que
el evento sea publico permitir que los eventos se pregunten"

**Archivos**:
- `api/src/routes/calendario.ts:9` (declaración del router)
- `api/src/routes/calendario.ts:34-247` (`GET /api/calendario/unificado`)
- `api/src/routes/calendario.ts:249-269` (`GET /api/calendario/escuela`)
- `api/src/routes/calendario.ts:271-329` (`POST /api/calendario/escuela`)
- `api/src/routes/calendario.ts:330-359` (`DELETE /api/calendario/escuela/:id`)
- `api/src/routes/calendario.ts:360-394` (`POST /api/calendario/aula`)
- `api/src/routes/calendario.ts:395-421` (`DELETE /api/calendario/aula/:id`)

**Causa raíz**: **no existe endpoint `PATCH` ni `PUT` para editar un
evento**. El router `calendario` solo tiene GET/POST/DELETE. El
tester no puede editar un evento después de crearlo; tiene que
borrarlo y volver a crearlo.

**Síntoma**:
1. Docente crea un evento en el calendario.
2. Necesita cambiarle la hora o el título.
3. No hay botón "Editar" en la UI. Si lo busca en el código, no
   existe la ruta.

**Repro**:
1. Login TEACHER.
2. `/profesor/calendario` → "+ Nuevo evento" → crear.
3. Click en el evento → ver detalle → no hay opción "Editar".
4. `PATCH /api/calendario/escuela/<id>` desde consola → 404 / ruta
   no existe.

**Fix sugerido**:
- Agregar `PATCH /api/calendario/escuela/:id` y `PATCH /api/calendario/aula/:id`
  con body parcial (solo campos a cambiar) y validación de ownership
  (solo el `createdBy` o un ADMIN de la escuela pueden editar).
- En el front (`ProfesorCalendario.tsx`), agregar el botón "Editar"
  en el detalle del evento con un modal que reuse el form de
  creación.
- Adicional: el tester sugiere que un evento público pueda ser
  "preguntado" (¿consulta? ¿reservar?) — eso es un feature nuevo,
  no un fix.

---

### BUG-PROF-06 — Avisos: el autor no puede ver ni editar el aviso que creó
**Severidad**: 🔴 crítico
**Reportado por**: tester (test 4) — "hay un bug los avisos creados
no los puede ver la persona que lo crea ni tampoco puede editarlo"

**Archivos**:
- `api/src/routes/mensajeria.ts:247-287` (`GET /api/mensajeria/avisos`,
  filtra por `destino` con `IN destinosValidos`)
- `api/src/routes/mensajeria.ts:289-328` (`POST /api/mensajeria/avisos`,
  crea el aviso)
- `apps/web/src/services/mensajeria.ts:67-79` (frontend: `fetchAvisos`
  y `crearAviso`, no existe `editarAviso` ni `eliminarAviso`)
- `apps/web/src/pages/Mensajeria.tsx:501-530` (UI: muestra avisos
  pero sin botón editar/borrar)

**Causa raíz**:

1. **El autor no ve el aviso que creó**: el GET filtra por
   `destino: { in: destinosValidos }` (línea 262). Un TEACHER tiene
   `destinosValidos = ['todos', 'profesores']`. Si crea un aviso con
   `destino: 'alumnos'`, queda fuera de su propio filtro y no lo ve
   en la pestaña "Avisos".

2. **No existe endpoint de edición ni borrado**: solo POST + GET +
   POST `/leer`. No hay `PUT/PATCH/DELETE /api/mensajeria/avisos/:id`.

**Síntoma**:
1. DIRECTIVO crea un aviso con `destino: "alumnos"`.
2. Vuelve a la pestaña "Avisos" → **no aparece** (porque su filtro
   es `['todos', 'profesores', 'padres']`, no incluye 'alumnos').
3. Click en el aviso de otro autor → no hay botón "Editar" ni
   "Eliminar".

**Repro**: ver arriba.

**Fix sugerido**:
- En el back, agregar `OR: [{ autorId: userId }]` al filtro de GET
  para que el autor siempre vea sus propios avisos independiente del
  destino.
- Agregar `PUT /api/mensajeria/avisos/:id` (edición) y
  `DELETE /api/mensajeria/avisos/:id` (borrado), con validación
  de ownership (solo el autor o ADMIN).
- En el front, agregar botones "Editar" y "Eliminar" en la tarjeta
  del aviso cuando el viewer es el autor.

---

### BUG-PROF-07 — No se pueden publicar cosas en el aula
**Severidad**: 🔴 crítico
**Reportado por**: tester (test 4) — "no se pueden publicar cosas en
el aula `POST http://localhost:5050/api/aula/publicaciones?classroomId=cls-demo-mat-3a 404 (Not Found)`"

**Archivos**:
- `apps/web/src/services/publicaciones.ts:23-38` (`fetchPublications`
  y `createPublication` apuntan a `/api/aula/publicaciones`)
- `api/src/routes/aula-feed.ts:54-76` (router `aulaFeed` SOLO tiene
  `GET /api/aula/publicaciones`, no POST)
- `api/src/routes/publicaciones.ts:79-104` (el POST existe pero en
  `/api/aulas/:id/publicaciones`, con `s`)

**Causa raíz**: el front hace `POST /api/aula/publicaciones?classroomId=…`
(`publicaciones.ts:37`) pero el back solo registra esa ruta como GET
(`aula-feed.ts:54-76`). El POST de crear publicación está en
`/api/aulas/:id/publicaciones` (`publicaciones.ts:79-104`) — ruta
distinta, con `:id` en el path y sin query string.

**Síntoma**:
- `POST http://localhost:5050/api/aula/publicaciones?classroomId=cls-demo-mat-3a` → **404**.
- La UI del aula intenta crear una publicación y falla silenciosamente.

**Repro**: ver arriba.

**Fix sugerido**: una de las dos:
- (A) Front: cambiar `createPublication` para usar
  `POST /api/aulas/${classroomId}/publicaciones` con el `id` en el
  path.
- (B) Back: agregar `POST /api/aula/publicaciones` (recibiendo
  `classroomId` en query) y mantener consistencia con el GET de
  `aula-feed.ts`.

Recomendado (A), porque ya existe el endpoint canónico y es donde
están los hooks de moderación/auditoría.

---

## 5. Bugs transversales varios

### BUG-X-01 — Tienda de temas no funciona
**Severidad**: 🔴 crítico
**Reportado por**: tester (test 4) — "tienda de temas esta rota"

**Archivos**:
- `apps/web/src/pages/TiendaTemas.tsx:138-265` (UI: carga catálogo,
  lista, compra)
- `apps/web/src/pages/TiendaTemas.tsx:184-209` (`useEffect` carga
  `fetchCatalogo()` y `fetchMisItems()`)
- `apps/web/src/services/tienda.ts:33-54` (servicios)
- `api/src/routes/tienda.ts:12-21` (`GET /api/tienda`, filtra por
  `activo: 1`)
- `api/src/scripts/seed_tienda.ts` (seed — verificado que el archivo
  existe y los items están definidos)

**Causa raíz probable** (análisis estático, no confirmado en runtime):
el seed `seed_tienda.ts` crea los items con `activo: 1`, pero
`GET /api/tienda` (`tienda.ts:16-21`) lee
`prisma.tiendaItem.findMany({ where: { activo: 1, ... } })`. Si el
seed no se corrió en la DB actual del tester, `catalogo` queda
vacío y la tienda muestra "sin items". La compra tampoco funciona si
no hay items.

**Síntoma**:
1. Login USER (cualquier rol con acceso a tienda).
2. `/tienda-temas` → ve solo los temas gratuitos hardcodeados
   (`vb2`, `clasico`, `nocturno`).
3. No ve los items de pago (`aurora`, `galaxy`, etc.).
4. Si el tester quiere comprar uno, no aparece el botón "Comprar".

**Repro**:
1. Verificar DB: `SELECT * FROM tienda_items WHERE activo = 1;`.
2. Si la tabla está vacía, el seed nunca se corrió.

**Fix sugerido**:
- Correr el seed: `cd api && npx ts-node scripts/seed_tienda.ts`.
- En el front, mostrar un mensaje claro si `catalogo` está vacío:
  "Todavía no hay items en la tienda. Pedile al admin que cargue el
  catálogo."
- En el back, registrar el seed en un script `npm run seed:tienda`
  o similar.

---

### BUG-X-02 — Tienda y Economía inaccesibles para profesores en modo alumno
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "la tienda de temas y la economia
es inaccesible para los profesores en modo alumno"

**Archivos**:
- `apps/web/src/nav/navConfig.ts:74-82` (dropdown USER tiene
  "Economía" y "Tienda de temas", pero el dropdown TEACHER no)
- `apps/web/src/router.tsx:233-239` (rutas `/economia` y
  `/tienda-temas` están bajo `AlumnoLayout` con
  `allow={['USER', 'TEACHER', 'DIRECTIVO', 'ADMIN', 'PARENT']}`)
- `apps/web/src/layouts/AlumnoLayout.tsx` (cambia el navbar a la
  versión alumno)
- `apps/web/src/nav/AlumnoNavbar.tsx` (navbar del alumno, no muestra
  el dropdown del usuario real)

**Causa raíz**: cuando un TEACHER entra a `/alumno` (vista de alumno),
el `AlumnoLayout` (que es el que renderiza) usa el `AlumnoNavbar`
hardcodeado con `NAV_BY_ROLE['USER']` (Bug 1 de
`bug-visual-aula-rol-dual.md`). El dropdown del avatar **sí** respeta
el rol real del usuario y muestra "Mi perfil" + "Ver como alumno".
Pero el dropdown de USER (con "Economía" y "Tienda de temas") solo
aparece cuando el usuario principal es USER.

**Síntoma**:
1. TEACHER hace click en "Ver como alumno" → `/alumno`.
2. El navbar muestra los items de USER.
3. El dropdown del avatar muestra las opciones de TEACHER (no de
   USER), así que no hay links a "Economía" ni "Tienda de temas".
4. Si el TEACHER escribe `/economia` o `/tienda-temas` en la URL,
   la ruta está permitida (`allow` lo incluye), pero no hay link
   visible para llegar.

**Repro**: ver arriba.

**Fix sugerido**:
- En `AlumnoNavbar.tsx`, agregar un botón "Modo alumno: oculto.
  Acceder a Economía/Tienda" que muestre un banner o un link directo
  a esas rutas cuando el viewer es staff.
- O: en el dropdown del avatar (en modo alumno), agregar las opciones
  de USER si el usuario tiene el rol `USER` además del staff
  (multi-rol).

---

### BUG-X-03 — Temas visuales no adaptados (ej. "Plantillas VBLang" en heading)
**Severidad**: 🟡 medio
**Reportado por**: tester (test 4) — "algunos textos como Plantillas
VBLang no estan adaptado a los temas"

**Archivos**:
- `apps/web/src/pages/admin/PlantillasModeracion.tsx:58-62` (header
  "Moderación de plantillas VBLang" con clases de color explícitas
  en lugar de tokens del tema)
- `apps/web/src/index.css` (definición de tokens del tema)
- Búsqueda global: varios archivos usan `text-[var(--c-text)]` y
  `bg-[var(--c-surface)]` correctamente; otros tienen `text-slate-…`
  hardcodeado (Tailwind palette fijo) que **no cambia con el tema**.

**Síntoma**: en modo oscuro, algunos textos siguen oscuros o algunos
fondos claros. El header de "Plantillas VBLang" mantiene
`text-slate-…` que en modo nocturno se ve mal.

**Repro**:
1. Cambiar tema a `nocturno-vb` o `galaxy`.
2. Ir a `/admin/plantillas-moderacion` → el header no cambia de
   color con el tema.

**Fix sugerido**: hacer una pasada global de
`grep -r "text-slate-\|bg-slate-\|text-gray-\|bg-gray-" apps/web/src/pages admin/`
y reemplazar por tokens `var(--c-*)`.

---

### BUG-X-04 — Modo aula en el panel tiene un diseño poco visible
**Severidad**: 🟡 medio
**Reportado por**: tester (test 4) — "el modo aula en el panel tiene
un diseño que no es muy visible"

**Archivos**:
- `apps/web/src/pages/MenuProfesor.tsx:523-563` (tarjeta "Modo Aula"
  dentro del panel del profesor)

**Causa raíz**: la tarjeta de Modo Aula en el panel del profesor usa
colores fijos (`bg-[var(--c-primary)]` o `bg-[var(--c-text)]`) y
texto blanco. Cuando el tema activo es claro, el contraste puede
ser pobre. Además, está **anidada** dentro de "Mis aulas" (no es un
componente independiente), lo que la hace fácil de pasar por alto.

**Síntoma**:
1. Login TEACHER.
2. `/profesor` → scroll → "Modo Aula" enterrado en la columna
   izquierda de "Mis aulas".
3. El toggle es difícil de encontrar, especialmente en tema claro.

**Repro**: ver arriba.

**Fix sugerido**:
- Mover "Modo Aula" a su propia tarjeta arriba del panel (antes de
  "Mis aulas" / "Mis evaluaciones").
- Agregar un indicador visual de estado (verde = activo, gris =
  inactivo) y un tooltip explicativo.
- Si está activo, mostrar el countdown del timer.

---

### BUG-X-05 — Aulas: nombres de docentes faltantes y código no funciona
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "el codigo del aula no funciona"
y "AulaDocente invitado • Docente asignado no tienen el nombre del
docente que creo el aula o el que esta a cargo y el supervisor o
docente invitado a esa clase ademas el codigo del aula no funciona"

**Archivos**:
- `apps/web/src/pages/ProfesorAulas.tsx:502` (muestra
  "Creada por {classroom.createdBy}" — solo el ID, no el nombre)
- `apps/web/src/pages/aula.tsx:328-334` (header "Docente invitado •
  Docente asignado" — IDs sin nombre)
- `api/src/routes/aulas.ts:87-180` (`GET /api/aulas`, devuelve
  `createdBy`, `teacherId`, `teacherOfRecord` como strings, no
  resuelve nombres)
- `api/src/routes/aulas.ts:849-881` (`POST /api/aulas/unirse`,
  acepta `codigo` o `classCode`)

**Causa raíz**:

1. **Nombres no resueltos**: el back devuelve IDs de usuarios
   (`createdBy`, `teacherId`, `teacherOfRecord`) pero no el
   `fullName`. El front los muestra como IDs crudos.

2. **Código del aula no funciona para unirse**: la ruta
   `POST /api/aulas/unirse` (`aulas.ts:849-881`) acepta `codigo` o
   `classCode`, pero el `POST /api/aulas` (crear aula, línea 297)
   **no genera `classCode` automáticamente**. La página
   `ProfesorAulaConfiguracion.tsx:333-334` muestra "Sin código
   asignado" en consecuencia.

**Síntoma**:
- "Creada por user-abc123" en vez de "Creada por María López".
- "Docente invitado • user-abc123" en el header del aula.
- El alumno intenta unirse con un código y la API devuelve 404 (o
  éxito silencioso sin agregarse, según el flujo).

**Repro**:
1. TEACHER crea un aula → no se genera `classCode`.
2. TEACHER entra a `/profesor/aulas/<id>` → ve "Sin código asignado".
3. ALUMNO en `/clases` → tipea un código cualquiera → 404.

**Fix sugerido**:
- En el back (`aulas.ts:297-352`), generar `classCode` automáticamente
  al crear el aula (6-8 chars alfanuméricos, único, índice único en
  la DB).
- En el GET, hacer `include` de los usuarios referenciados y devolver
  `createdByName`, `teacherName`, `teacherOfRecordName`.
- En el front, mostrar los nombres en vez de los IDs.

---

### BUG-X-06 — Mensajería: falta la fecha completa (solo muestra hora)
**Severidad**: 🟡 medio
**Reportado por**: tester (test 4) — "no encontre problemas en mensajes
pero agregaria la fecha de cuando se creo el mensaje no solo la hora"

**Archivos**:
- `apps/web/src/pages/Mensajeria.tsx:387` (muestra
  `toLocaleTimeString({ hour: "2-digit", minute: "2-digit" })`)
- `apps/web/src/pages/Mensajeria.tsx:517` (avisos: muestra
  `toLocaleDateString("es-AR")`, sin hora)

**Síntoma**:
- En el chat, los mensajes solo muestran "14:32", no "14:32 · 18/06"
  ni "14:32 · ayer". Para un mensaje de hace 3 días no se sabe qué
  día es.
- En los avisos, se muestra solo la fecha, sin hora. Si hay varios
  avisos el mismo día, no se sabe el orden.

**Repro**:
1. Login USER.
2. `/mensajes` → enviar un mensaje a otro usuario.
3. Mirar la hora: "14:32".
4. Esperado: "18/06 · 14:32" o "Hoy · 14:32" según corresponda.

**Fix sugerido**:
- Cambiar `toLocaleTimeString` por un formateador que incluya fecha
  si no es del día actual. Algo como:
  ```ts
  const d = parseDate(m.created_at) ?? new Date();
  const isToday = d.toDateString() === new Date().toDateString();
  return isToday
    ? d.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })
    : d.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit" })
      + " · " + d.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
  ```
- En avisos, agregar la hora: `toLocaleString("es-AR", { dateStyle: "short", timeStyle: "short" })`.

---

## 6. Bugs del modelo de cuentas / roles

### BUG-ROLE-01 — Falta revisar si existe un padre en la DB y si las páginas registradas funcionan
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "falta revisar si en la base de
datos hay un padre y ver si las paginas registradas funcionan"

**Archivos**:
- `api/prisma/schema.prisma:60-89` (modelo `Usuario` con `role: String`)
- `api/src/routes/padres.ts:1-100` (rutas `/api/hijos`,
  `/api/hijos/:id/limites`)
- `api/src/routes/padres.ts:38-44` (`isMinor` helper)
- `api/src/routes/registro.ts` (registro público, ver
  `api/src/routes/registro.ts` si existe)
- `apps/web/src/pages/HijosAgregar.tsx` (UI para que un padre agregue
  un hijo)
- `apps/web/src/pages/Register.tsx:277-280` (`roleMap` solo incluye
  `student → USER` y `teacher → TEACHER`)

**Causa raíz**:
- El registro público (`Register.tsx:277-280`) **no ofrece el rol
  PARENT**. Un padre solo puede existir si un directivo lo crea
  manualmente desde el panel admin.
- No hay un script de seed que cree un `padre-demo` para testing.
- La página `/pages` (TuesdayJS) existe como endpoint en
  `api/src/routes/pages.ts` pero **no hay UI en el front** que la
  liste ni la muestre. Solo `useModuloEditor.ts:254` la consume
  como picker de "Tuesday docs".

**Síntoma**:
1. Buscar un `padre-demo` en la DB → no existe.
2. Intentar registrar un usuario como PARENT desde `/register` → no
   hay opción.
3. Visitar `/pages` o `/admin/pages` → no existe la ruta en el front.

**Repro**: ver arriba.

**Fix sugerido**:
- Agregar un seed `seed_padre_demo.ts` que cree un usuario con
  `role: PARENT` para testing.
- Agregar UI de listado/gestión de páginas (Tuesday docs) en
  `/admin/pages` o un panel similar.
- Decidir si el rol PARENT debe estar en el registro público o
  seguir siendo solo creado por admin/directivo (decisión de
  producto).

---

### BUG-ROLE-02 — Un alumno adulto debería poder ser padre / profesor / directivo
**Severidad**: 🟠 alto
**Reportado por**: tester (test 4) — "falta revisar que un alumno de
edad avanzada puede ser padre o profesor o directivo si lo solicita"

**Archivos**:
- `apps/web/src/pages/Register.tsx:277-280` (form con roles fijos)
- `api/src/routes/registro.ts` (registro público, ver)
- `api/src/routes/padres.ts:38-44` (helper `isMinor` que sí existe
  pero no se usa en el flujo de "solicitar rol")
- `api/src/routes/usuarios.ts` (gestión de usuarios)

**Causa raíz**: el sistema **no permite que un usuario ya registrado
solicite un cambio de rol** (USER → TEACHER, USER → PARENT, etc.).
El admin/directivo puede cambiarlo desde el panel, pero el usuario
no tiene un flujo self-service.

**Síntoma**:
1. Usuario con cuenta USER (ex-alumno) quiere hacerse cargo de un
   hijo. No puede auto-solicitar PARENT.
2. Usuario con cuenta USER quiere dar clases. No puede auto-solicitar
   TEACHER.

**Repro**: ver arriba.

**Fix sugerido**:
- Agregar un endpoint `POST /api/usuarios/:id/solicitar-rol` con
  body `{ rol: "TEACHER" | "PARENT" | "DIRECTIVO" }`.
- En el back, validar con `isMinor` (ya existe en `padres.ts:38-44`)
  que el solicitante es mayor de edad.
- Crear un pedido (`SolicitudRol` en la DB) que el admin/directivo
  aprueba desde el panel.
- Mientras tanto, mostrar un banner en `/perfil` tipo "¿Querés
  cambiar tu rol? Solicitá acá".

---

### BUG-ROLE-03 — La cuenta padre es un "apéndice" de alumno
**Severidad**: 🟡 medio
**Reportado por**: tester (test 4) — "la cuenta padre es una parte
agregada de alumno pero puede solicitarse su creación por un directivo"

**Archivos**:
- `apps/web/src/pages/Register.tsx` (no permite crear PARENT)
- `apps/web/src/router.tsx:559-572` (rutas `/hijos` y
  `/hijos/agregar` con `allow={['PARENT']}`)
- `api/src/routes/admin.ts` (admin puede crear usuarios, ver
  `crear-usuario`)

**Causa raíz**: hoy la única forma de tener un PARENT es que un
directivo lo cree desde el panel admin. El tester sugiere que esto
debería ser un **flujo explícito de solicitud** (no un apéndice).

**Síntoma**: no hay forma de solicitar ser padre desde la UI. El
directivo debe ir a `/admin/usuarios`, crear el usuario y asignarle
el rol PARENT.

**Repro**:
1. Login DIRECTIVO.
2. Ir a `/admin/usuarios`.
3. Crear usuario con `role: PARENT`.
4. El usuario creado recibe un email (¿o no?) y puede empezar a
   usar `/hijos/agregar`.

**Fix sugerido**:
- Implementar el flujo de "solicitar ser padre" como un caso
  particular de BUG-ROLE-02.
- Agregar un check en el back: un PARENT no puede tener
  `membresia` como STUDENT en aulas (es un rol independiente, no
  un apéndice).

---

## 7. Issues colaterales (no reportados por el tester)

Estos son bugs que **encontré con análisis estático** durante la
auditoría y que el tester no notó a simple vista. Vale la pena
anotarlos acá para que no se pierdan.

### BUG-EXTRA-01 — `ProfesorEvaluaciones` usa mock data, no consume la API real
**Severidad**: 🟠 alto
**Detectado por**: análisis estático
**Archivos**: `apps/web/src/pages/ProfesorEvaluaciones.tsx:96-100`
(`fetchQuizzes` con `setTimeout` que retorna `mockQuizzes`).

**Síntoma**: la página muestra cuestionarios inventados
(`quiz-001` a `quiz-006`) que no existen en la DB. Los filtros
funcionan, pero aplican sobre datos falsos.

**Fix sugerido**: cablear al endpoint real
(`/api/quiz-attempts?quizType=evaluacion&aulaId=…` o un endpoint
nuevo `/api/quizzes`).

---

### BUG-EXTRA-02 — `ciclo-activo` y `proximos-ciclos` no respetan el override del panel
**Severidad**: 🟡 medio
**Detectado por**: análisis estático (relacionado con BUG-ADMIN-01)
**Archivos**:
- `api/src/routes/economia.ts:2023-2046` (`GET /api/economia/ciclo-activo`
  y `GET /api/economia/proximos-ciclos`)
- `api/src/lib/calendario-economico.ts:39-54` (leen solo del JSON)

**Síntoma**: el panel admin configura inflación manualmente, pero
estas dos rutas siempre devuelven los datos del JSON hardcodeado.

---

### BUG-EXTRA-03 — `Materia` en Prisma es un JSON blob sin schema
**Severidad**: 🟡 medio
**Detectado por**: análisis estático
**Archivos**:
- `api/prisma/schema.prisma:909-913` (`Materia { id, json }`)
- `api/src/routes/admin.ts:285` (`PATCH /api/admin/materias/:id`)

**Síntoma**: el modelo `Materia` no tiene `nombre`, `nivel`,
`descripcion` como columnas. Todo va en `json`. El Zod schema no se
aplica a nivel DB → cualquier JSON mal formado entra.

**Fix sugerido**: promover los campos a columnas reales o, al menos,
agregar un Zod parse en el POST/PATCH.

---

### BUG-EXTRA-04 — `classroom.createdBy` se muestra como ID en la lista de aulas
**Severidad**: 🟡 medio
**Detectado por**: análisis estático
**Archivos**:
- `apps/web/src/pages/ProfesorAulas.tsx:502`
- `api/src/routes/aulas.ts:87-180` (GET sin `include` de usuarios)

**Síntoma**: la UI dice "Creada por user-xyz123" en vez del nombre
del docente. Es el mismo síntoma que BUG-X-05 pero en otro lugar.

---

### BUG-EXTRA-05 — Inconsistencias en el manejo de roles en checks de UI
**Severidad**: 🟡 medio
**Detectado por**: análisis estático
**Archivos**:
- `apps/web/src/pages/aula.tsx:328-413` (7 checks de `user.role`
  global, debería ser por membresía en el aula)
- `apps/web/src/nav/AlumnoNavbar.tsx:8` (`NAV_BY_ROLE['USER']`
  hardcoded)
- `apps/web/src/nav/navConfig.ts:75-82` (dropdown USER no escala a
  multi-rol)

**Síntoma**: doble lectura del rol (global vs membresía por aula) →
los bugs del `bug-visual-aula-rol-dual.md` siguen vigentes y este
test 4 los refuerza.

---

## Pendiente de decisión

Antes de implementar fixes, el equipo tiene que decidir:

1. **Sistema de inflación único**: ¿eliminar el JSON hardcodeado o
   tratarlo como default? (BUG-ADMIN-01)
2. **Materias**: ¿cuál es la fuente de verdad? ¿la tabla `materias`
   del admin, `configuracion`, o un nuevo modelo? (BUG-ADMIN-02)
3. **Aulas vs Cursos**: ¿fusión total o mantener dos vistas de la
   misma entidad? (BUG-PROF-01)
4. **Flujo de cambio de rol**: ¿self-service con aprobación de
   admin/directivo, o solo admin puede cambiar roles?
   (BUG-ROLE-02)
5. **Página `/pages` (TuesdayJS)**: ¿hay que construirle UI o dejarla
   solo como picker interno? (BUG-ROLE-01)
6. **Migraciones pendientes de Prisma**: ¿se aplica
   `npx prisma migrate deploy` ahora o se espera a un fix mayor?
   (BUG-MOD-01, también en `docs/qa/diagnostico_migraciones_pendientes.md`)
7. **Multi-rol real (Opción B de `bug-visual-aula-rol-dual.md`)**:
   ¿se avanza con el refactor o se mantiene el status quo?

## Archivos referenciados (sin cambios)

- `api/src/routes/economia.ts` — BUG-ADMIN-01
- `api/src/base/calendario_economico.json` — BUG-ADMIN-01
- `api/src/lib/calendario-economico.ts` — BUG-ADMIN-01
- `api/src/routes/admin.ts` — BUG-ADMIN-02
- `api/src/routes/configuracion.ts` — BUG-ADMIN-02
- `apps/web/src/pages/Admin.tsx` — BUG-ADMIN-01
- `apps/web/src/pages/AdminMaterias.tsx` — BUG-ADMIN-02
- `apps/web/src/services/admin.ts` — BUG-ADMIN-02
- `api/prisma/migrations/20260523184108_vblang_models/` — BUG-MOD-01
- `api/prisma/schema.prisma:313-348` — BUG-MOD-01
- `api/prisma/schema.prisma:909-913` — BUG-EXTRA-03
- `apps/web/src/pages/modulos/useModuloEditor.ts` — BUG-MOD-02, BUG-MOD-03
- `apps/web/src/pages/modulos/useModuloPersistence.ts` — BUG-MOD-02
- `apps/web/src/components/modulos/TheoryItemCard.tsx` — BUG-MOD-02
- `apps/web/src/router.tsx` — BUG-ALU-01, BUG-PROF-01, BUG-X-02
- `apps/web/src/nav/navConfig.ts` — BUG-ALU-01, BUG-X-02, BUG-EXTRA-05
- `apps/web/src/nav/AlumnoNavbar.tsx` — BUG-EXTRA-05
- `apps/web/src/pages/menu-alumno.tsx` — BUG-ALU-02
- `apps/web/src/pages/aula.tsx` — BUG-EXTRA-05
- `apps/web/src/pages/MisClases.tsx` — BUG-EXTRA-05
- `apps/web/src/pages/quizzes/QuizAttempt.tsx` — BUG-ALU-04
- `api/src/routes/quiz-attempts.ts` — BUG-ALU-04, BUG-PROF-02
- `apps/web/src/pages/ProfesorAulas.tsx` — BUG-PROF-01, BUG-X-05
- `apps/web/src/pages/ProfesorCursos.tsx` — BUG-PROF-01
- `apps/web/src/pages/ProfesorCursoNuevo.tsx` — BUG-PROF-01
- `apps/web/src/pages/ProfesorCalificaciones.tsx` — BUG-PROF-02
- `apps/web/src/pages/ProfesorEvaluaciones.tsx` — BUG-PROF-03, BUG-EXTRA-01
- `apps/web/src/pages/ProfesorMateriales.tsx` — BUG-PROF-04
- `api/src/routes/materiales.ts` — BUG-PROF-04
- `api/src/routes/calendario.ts` — BUG-PROF-05
- `apps/web/src/pages/ProfesorCalendario.tsx` — BUG-PROF-05
- `api/src/routes/mensajeria.ts` — BUG-PROF-06, BUG-X-06
- `apps/web/src/services/mensajeria.ts` — BUG-PROF-06
- `apps/web/src/pages/Mensajeria.tsx` — BUG-PROF-06, BUG-X-06
- `api/src/routes/publicaciones.ts` — BUG-PROF-07
- `api/src/routes/aula-feed.ts` — BUG-PROF-07
- `apps/web/src/services/publicaciones.ts` — BUG-PROF-07
- `apps/web/src/pages/TiendaTemas.tsx` — BUG-X-01
- `api/src/routes/tienda.ts` — BUG-X-01
- `api/src/scripts/seed_tienda.ts` — BUG-X-01
- `apps/web/src/pages/admin/PlantillasModeracion.tsx` — BUG-X-03
- `apps/web/src/pages/MenuProfesor.tsx` — BUG-X-04
- `apps/web/src/pages/Register.tsx` — BUG-ROLE-01, BUG-ROLE-02
- `api/src/routes/padres.ts` — BUG-ROLE-01
- `api/src/routes/aulas.ts` — BUG-X-05, BUG-EXTRA-04
- `apps/web/src/auth/roleHelpers.ts` — BUG-EXTRA-05

## Documentos relacionados

- `audits/bug-checklist-2026-02-20.md` (24 bugs cerrados)
- `docs/qa/diagnostico_migraciones_pendientes.md` (BUG-MOD-01)
- `docs/qa/bug-modo-alumno-staff.md` (BUG-ALU-02)
- `docs/qa/bug-visual-aula-rol-dual.md` (BUG-ALU-03, BUG-EXTRA-05)
- `docs/qa/test-parte-3-profesor.md` y `fix-{1,2,3}.md` (rondas previas del profesor)
- `auditoria_02.md` (columna central del editor)

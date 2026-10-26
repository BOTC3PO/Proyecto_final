# Test parte 3 — Profesor

**Fecha**: 2026-06-17
**Naturaleza**: relevamiento de QA manual (testing exploratorio).
**Alcance**: vistas del rol TEACHER (`/profesor/*`, `/modulos/*`, `/editor/*`,
`/plantillas/*`, herramientas, libros, presentaciones).
**Importante**: este documento es **diagnóstico**. No incluye fixes. Cada
bug lista síntomas, evidencia (cuando se pudo rastrear el archivo) y, donde
aplica, severidad y prioridad.

---

## Índice

1. [Panel del profesor](#1-panel-del-profesor)
2. [Aulas / clases](#2-aulas--clases)
3. [Material didáctico](#3-material-didáctico)
4. [Evaluaciones (legacy)](#4-evaluaciones-legacy)
5. [Mis módulos — listado](#5-mis-módulos--listado)
6. [Vista de módulo (`/modulos/:id`)](#6-vista-de-módulo-modulosid)
7. [Herramientas interactivas](#7-herramientas-interactivas)
8. [Clasificaciones / Calificaciones (403 y 400)](#8-clasificaciones--calificaciones-403-y-400)
9. [Asistencia](#9-asistencia)
10. [Editor de módulo (bugs)](#10-editor-de-módulo-bugs)
11. [Plantillas — duplicación al guardar](#11-plantillas--duplicación-al-guardar)
12. [Editor de presentaciones](#12-editor-de-presentaciones)
13. [Editor de libros (tosco)](#13-editor-de-libros-tosco)
14. [Vista de alumno (formato)](#14-vista-de-alumno-formato)
15. [QuizAttempt — `questions.map is not a function`](#15-quizattempt--questionsmap-is-not-a-function)
16. [Sugerencias / features faltantes](#16-sugerencias--features-faltantes)
17. [Tabla resumen](#tabla-resumen)

---

## Convenciones

- **Severidad**:
  - 🔴 **crítico**: rompe el flujo principal del rol o expone datos.
  - 🟠 **alto**: impide usar la pantalla pero hay workaround.
  - 🟡 **medio**: el flujo funciona pero con fricción / error de UX.
  - 🟢 **bajo / visual**: cosmético, no bloquea.
  - 💡 **wishlist**: feature faltante o mejora deseada.
- **Estado**: `nuevo` por defecto; `parcial` si tiene un fix tocando solo
  parte; `ignorado` si se decidió no abordarlo en este sprint.

---

## 1. Panel del profesor

### 1.1 — Evaluaciones del panel no tienen título visible
- **Severidad**: 🟡 medio (visual + UX).
- **Síntoma**: en el panel principal, la sección de evaluaciones lista
  ítems sin título (aparecen vacíos o con un placeholder).
- **Causa probable**: la lista de evaluaciones está consumiendo el modelo
  antiguo (sin `quizTitle` poblado). Ver hipótesis en 1.2.

### 1.2 — Evaluaciones usan el modelo antiguo de ejercicios (sin categoría)
- **Severidad**: 🟠 alto (UX confusa, no se puede filtrar por materia).
- **Síntoma**: las evaluaciones que aparecen en el panel pertenecen al
  modelo viejo de "ejercicios" — no tienen `subject`/`categoria`, por lo
  tanto no se pueden filtrar igual que los nuevos. Ver también el bug 4
  ("Evaluaciones legacy").
- **Hipótesis**: el panel consulta el endpoint viejo de ejercicios y no
  el nuevo (`/api/quiz-attempts` con composición). Revisar
  `MenuProfesor.tsx` y `services/profesor.ts`.

---

## 2. Aulas / clases

### 2.1 — Edición de aula no carga todos los valores
- **Severidad**: 🟡 medio.
- **Síntoma**: al editar un aula, algunos campos aparecen vacíos aunque
  en la DB tienen valor (no se hidrata el form).
- **Pista**: ver `ProfesorAulaConfiguracion.tsx` y el GET inicial; ver
  diagnóstico previo en `docs/qa/qa-diag-01.md` (Q1) por hidratación
  parcial.

### 2.2 — Aulas vs Clases: confusión entre conceptos (fusión deseable)
- **Severidad**: 💡 wishlist + 🟡 medio (UX).
- **Síntoma**: aulas y clases coexisten con responsabilidades solapadas,
  generando dudas en el flujo del profesor.
- **Sugerencia**: fusionar bajo un solo concepto y usar atributos para
  diferenciar tipo (aula presencial / clase virtual / etc.).

### 2.3 — Tablón del aula: error 403 en top de estudiantes y próximas actividades
- **Severidad**: 🔴 crítico.
- **Síntoma**: dentro de una clase, los widgets de "top de estudiantes" y
  "próximas actividades" devuelven:
  ```
  Failed to load resource: the server responded with a status of 403 (Forbidden)
  ```
- **Causa probable**: política de autorización mal aplicada al docente
  miembro del aula. Revisar:
  - `routes/aula-feed.ts` (próximas actividades).
  - `routes/aulas.ts` o `services/leaderboard.ts` (top estudiantes).
- **Repro**: TEACHER logueado, entrar a una clase activa, abrir devtools
  → Network → cargar el tablón.

### 2.4 — Falta código de clase en el panel de aula
- **Severidad**: 🟡 medio.
- **Síntoma**: el código que el alumno usa para sumarse al aula no se
  muestra al docente desde el panel; obliga a buscarlo en otro lado.
- **Sugerencia**: mostrar `aula.classCode` arriba del tablón con botón
  "copiar".

### 2.5 — Navbar cambia a "modo alumno" dentro del aula (cosmético)
- **Severidad**: 🟢 bajo (visual, sin pérdida de funcionalidad).
- **Síntoma**: al entrar a `/profesor/aulas/:id`, el navbar pasa a la
  versión del alumno aunque el usuario sea profesor.
- **Repro**: TEACHER → entrar a una clase → comparar navbar con el de
  `/profesor`.
- **Diagnóstico inicial**: NO es por "modo aula" (se inspeccionó y no
  hay evidencia de activación automática); es el ruteo del navbar dentro
  del shell del aula. Revisar `layouts/` o el wrapper de aulas.

### 2.6 — "Volver al aula" lleva al menú de selección con navbar de alumno
- **Severidad**: 🟢 bajo (relacionado con 2.5).
- **Síntoma**: el botón "Volver" desde dentro de una clase no vuelve a
  la clase sino al menú de selección, y mantiene el navbar de alumno.
- **Hipótesis**: `navigate(-1)` o link estático rota al listado en vez
  de hacer pop al shell del aula.

### 2.7 — Sugerencia: modo aula opcional, accesible desde dentro del aula
- **Severidad**: 💡 wishlist.
- **Detalle**: hoy el modo aula es global y obligatorio cuando se
  activa. Más cómodo sería:
  - Optar por aula desde dentro del aula misma (no global).
  - Mantenerlo opcional para que el profe lo use en clase y no
    interfiera fuera.
  - Excepción: la escuela puede requerirlo (config institucional).

### 2.8 — Acciones del aula no funcionan
- **Severidad**: 🔴 crítico.
- **Síntoma**: los botones de la barra de acciones del aula no responden
  o no producen efecto.
- **Faltante**: el ticket no aclara cuáles. Hay que listarlos uno a uno
  en el siguiente test (asistencia, calificaciones, compartir, etc.).
- **Acción pendiente**: levantar repro por botón con devtools → Network.

---

## 3. Material didáctico

### 3.1 — "Compartir" comparte con la escuela entera (sin selector)
- **Severidad**: 🟠 alto (privacidad).
- **Síntoma**: el botón "Compartir" de un material lo expone a toda la
  escuela sin permitir elegir aula/docente/alumno.
- **Evidencia**: `apps/web/src/pages/ProfesorMateriales.tsx:37`
  llama a `POST /api/materiales/:id/compartir`, que en el back
  (`api/src/routes/materiales.ts:74-75`) **cambia `visibility` a
  `'escuela'`** sin parámetros.
- **Cambio sugerido**:
  - Front: modal con selector de alcance (aula concreta / lista de
    docentes / lista de alumnos / escuela).
  - Back: extender `POST /api/materiales/:id/compartir` a aceptar
    `{ scope: 'aula'|'escuela'|'usuarios', targetIds: string[] }`.

### 3.2 — "Crear cuestionario" desde material es versión deprecada
- **Severidad**: 🟡 medio.
- **Síntoma**: el botón abre el editor viejo, no la versión nueva
  (composición + variantes).
- **Acción**: redirigir al editor v2 (`/profesor/editor-cuestionarios-v2`)
  y eliminar el link al viejo.

---

## 4. Evaluaciones (legacy)

### 4.1 — Solo se ve que existen en `/profesor/evaluaciones`
- **Severidad**: 🟠 alto (funcionalidad inalcanzable).
- **Estado**: `ignorado para esta tanda` (decisión: vamos a migrar al
  modelo nuevo en otro ticket).
- **Síntoma**: `/profesor/evaluaciones` lista evaluaciones del modelo
  antiguo y es prácticamente imposible interactuar con ellas (UI rota o
  acciones rotas). Detalle por acción no se pudo recolectar.

---

## 5. Mis módulos — listado

### 5.1 — Las pestañas de visibilidad cortan los filtros (redundancia)
- **Severidad**: 🟡 medio (UX confusa).
- **Síntoma**: las pestañas/segments "privados/escuela/públicos" ya
  filtran por visibilidad, por lo que el resto de filtros abajo (materia,
  categoría) quedan **casi inútiles** cuando la pestaña ya recortó el
  set.
- **Sugerencia**: o quitar la pestaña y volver visibility un filtro más,
  o quitar los filtros redundantes en cada pestaña.

### 5.2 — Diseño de `/modulos` y `/modulos/:id` choca con el resto del tema
- **Severidad**: 🟢 bajo (visual).
- **Síntoma**: el theming (colores, tipografía, paddings) no acompaña al
  resto del shell del profesor. Se siente "ajeno".
- **Acción**: revisar tokens CSS (`var(--c-...)`) y alinear con
  `ProfesorAulas.tsx`, `ProfesorMateriales.tsx`, etc.

---

## 6. Vista de módulo (`/modulos/:id`)

### 6.1 — Mapas: controles flotantes mal posicionados (arriba)
- **Severidad**: 🟡 medio (visual + ergonómico).
- **Síntoma**: al reproducir un módulo que contiene un mapa interactivo,
  los botones de control se renderizan **arriba** del mapa en lugar de
  flotando dentro/sobre el canvas.
- **Pista**: revisar `apps/web/src/pages/herramientas/MapaEditorFull.tsx`
  vs su modo de reproducción inline en `ModuloDetail.tsx`. Probablemente
  un `position: absolute` se rompe cuando el contenedor padre no tiene
  `position: relative`.

### 6.2 — Diseño general de la vista de módulo
- Ver 5.2 (mismo problema de tokens visuales).

---

## 7. Herramientas interactivas

### 7.1 — Leer en voz alta: solo lee título y subtítulo del módulo
- **Severidad**: 🟠 alto (accesibilidad rota).
- **Síntoma**: la función "leer en voz alta" no lee el contenido del
  ítem de teoría; recorta al título + subtítulo del módulo entero.
- **Pista**: revisar el componente lector (`SpeechSynthesis` o equiv.)
  y qué selector usa para juntar el texto.

### 7.2 — Diccionario: bug de generación (postergado)
- **Severidad**: 🟡 medio.
- **Estado**: `postergado` (se aborda en otro fix).
- **Síntoma**: el diccionario genera entradas inesperadas en algún flujo
  no documentado acá.
- **Acción**: cuando se aborde, levantar repro con devtools.

### 7.3 — Tabla periódica: centrado leve fuera
- **Severidad**: 🟢 bajo (visual).
- **Síntoma**: el grid funciona pero hay un desalineado menor en algunos
  elementos.
- **Acción**: ajustar grid-template del wrapper.

### 7.4 — Escalador de recetas: funciona, diseño puede pulirse
- **Severidad**: 🟢 bajo (visual).
- **Acción**: pasada de diseño (tipografía, espaciado, jerarquía).

### 7.5 — Líneas de tiempo: funcionan pero le falta diseño
- **Severidad**: 🟢 bajo (visual + UX).
- **Acción**: rediseñar layout, considerar zoom horizontal, hitos con
  iconos, agrupación por períodos.

### 7.6 — Mapas: funcionan pero "les falta cariño"
- **Severidad**: 🟢 bajo (UX).
- Relacionado con 6.1 (controles).

### 7.7 — "Formas" es inutilizable
- **Severidad**: 🟠 alto (feature broken).
- **Síntoma**: la herramienta "formas" no responde / no se puede
  configurar.
- **Acción**: levantar repro detallado en próximo test.

### 7.8 — Resto de herramientas: curva de aprendizaje alta
- **Severidad**: 🟢 bajo (UX).
- **Sugerencia**: agregar onboarding o ejemplos en cada herramienta.

### 7.9 — Quizzes no se pueden cargar en un módulo
- **Severidad**: 🔴 crítico.
- **Síntoma**: el flujo de "agregar quiz al módulo" desde el editor de
  módulo no completa.
- **Acción**: ver editor de módulo (`useModuloEditor.ts`,
  `ModuloEditor.tsx`) y revisar el panel de "Cuestionarios" del módulo.

---

## 8. Clasificaciones / Calificaciones (403 y 400)

### 8.1 — `/profesor/calificaciones` da 400 con error Zod
- **Severidad**: 🔴 crítico.
- **Síntoma**:
  ```
  [
    { "origin": "string", "code": "too_small", "minimum": 1,
      "inclusive": true, "path": ["moduleId"],
      "message": "Too small: expected string to have >=1 characters" },
    { "code": "custom", "path": [],
      "message": "Se requiere al menos `quizId` o `moduleId`." }
  ]
  ```
- **Causa raíz identificada**:
  - Front: `apps/web/src/pages/ProfesorCalificaciones.tsx:48` arma la
    URL `/api/quiz-attempts?moduleId=&aulaId=...&quizType=formal&limit=50`
    con `moduleId=` **vacío**.
  - Back: `api/src/schema/quiz-attempt.ts:74-82`
    (`QuizAttemptListQuerySchema`) exige `moduleId.min(1)` y al menos uno
    de `quizId`/`moduleId`. Un `moduleId=""` cae en el `.min(1)` y rompe
    el refine.
- **Fix sugerido (no aplicado en este doc)**:
  - O bien el front omite `moduleId` cuando está vacío (recomendado).
  - O bien el schema acepta `moduleId` vacío como "no provisto".
  - El front igual debe mandar `quizId` o `moduleId` con valor — sino
    el endpoint no sabe qué intentos listar.

---

## 9. Asistencia

### 9.1 — Asistencia da error al intentar usarlo
- **Severidad**: 🔴 crítico.
- **Síntoma**: la pantalla `/profesor/asistencia` (o el flujo desde el
  aula) falla al cargar/actuar.
- **Pista**: `apps/web/src/pages/ProfesorAsistencia.tsx`. Falta capturar
  el error exacto (status code, mensaje del back) en el próximo test.

---

## 10. Editor de módulo (bugs)

### 10.1 — "Nivel" no se carga al editar un módulo
- **Severidad**: 🟡 medio.
- **Síntoma**: al abrir un módulo existente para editar, el select de
  **Nivel** queda vacío y hay que tipearlo de nuevo manualmente; si no
  se pone, el guardado lo pierde.
- **Pista**: hidratación del form en `useModuloPersistence.ts` o el
  setter del estado en `useModuloEditor.ts`. Buscar dónde se mapea
  `module.level` a `form.level`.
- **Relacionado**: `97e85a3e` (crash `form.level.trim()` undefined) ya
  cubrió el lado defensivo del crash; falta arreglar la **hidratación
  inicial**.

### 10.2 — Falta pulido general del editor
- **Severidad**: 🟢 bajo.
- **Detalle**: interfaces densas, jerarquía visual confusa entre
  secciones (teoría, cuestionarios, recompensas).

---

## 11. Plantillas — duplicación al guardar

### 11.1 — Doble (o múltiple) creación al hacer click rápido en "Guardar"
- **Severidad**: 🟠 alto (datos duplicados).
- **Síntoma**: al guardar muchas veces seguidas en el editor de
  plantillas se crean N copias del cuestionario.
- **Causa probable**: el botón "Guardar" no se deshabilita mientras la
  petición está en vuelo, y/o el front no genera un id idempotente.
- **Fix sugerido**:
  - Front: deshabilitar el botón mientras `saveStatus === 'saving'`.
  - Back (opcional): aceptar un `Idempotency-Key` y dedupliar dentro de
    una ventana corta.

---

## 12. Editor de presentaciones

### 12.1 — Falta libertad creativa en diapositivas
- **Severidad**: 💡 wishlist + 🟡 medio (UX).
- **Síntomas/peticiones**:
  - Más layouts disponibles.
  - Posicionamiento libre (no solo top/center/bottom).
  - Más opciones tipográficas/colores por slide.
  - Posibilidad de embeber bloques del editor de bloques.

---

## 13. Editor de libros (tosco)

### 13.1 — Falta paridad con editores tipo Word / Google Docs
- **Severidad**: 💡 wishlist + 🟡 medio (UX clave).
- **Detalle**: hoy el editor es funcional pero con UX rudimentaria.
  Faltan:
  - Toolbar contextual flotante por bloque (no solo botones a la
    derecha).
  - Atajos de teclado para formato (Ctrl+B/I/U).
  - Tipografía y color seleccionables por rango (no por bloque entero).
  - Inserción rápida con "/" (slash menu).
  - Manejo de imágenes con drag&drop directo al canvas.
  - Indentación / listas anidadas con Tab/Shift+Tab.

---

## 14. Vista de alumno (formato)

### 14.1 — La vista de alumno tiene un formato muy simple, lejos del editor
- **Severidad**: 🟡 medio (consistencia).
- **Síntoma**: el módulo se ve "pelado" para el alumno comparado con la
  riqueza del editor. Pierde tema, espaciado y jerarquía.
- **Sugerencia**: alinear la vista de reproducción (`ModuloDetail` en
  modo `jugar`) con el preview del editor; reutilizar componentes.

---

## 15. QuizAttempt — `questions.map is not a function`

### 15.1 — Crash al abrir un quiz para responder
- **Severidad**: 🔴 crítico.
- **Stack trace** (provisto por el QA):
  ```
  [RouteErrorBoundary] TypeError: questions.map is not a function
      at QuizAttempt (QuizAttempt.tsx:812:26)
      ...
  ```
- **Causa raíz hipotética**:
  - `apps/web/src/pages/quizzes/QuizAttempt.tsx:431` arma
    `questions` desde `presentedQuestions` (línea 384), que a su vez
    parte de `attempt.questions ?? attempt.quiz?.questions ?? []`.
  - Si el back devolvió `questions` como **string** (JSON sin parsear) o
    como objeto, `pool.length` no existe pero `pool` se asigna y termina
    pasándose tal cual como `presented`, llegando a `questions.map(...)`
    en la línea 812 → boom.
- **Fix sugerido**:
  - Front: en el `presentedQuestions` useMemo, forzar
    `Array.isArray(server) ? server : []`.
  - Back: revisar el endpoint que devuelve el intento y asegurar que
    `questions` siempre sea array parseado (puede ser un JSON string en
    DB que no se parsea al serializar).
- **Repro**: TEACHER (o STUDENT) → módulo con quizzes → abrir el quiz
  encontrado → crash en mount.

---

## 16. Sugerencias / features faltantes

### 16.1 — Falta una herramienta de "cuestionarios escritos" tipo libro
- **Severidad**: 💡 wishlist (pedido directo).
- **Detalle**: una herramienta similar al editor de libros, pero
  pensada para que el alumno escriba **sus propias investigaciones**:
  - La consigna la pone el docente arriba.
  - El alumno tiene un editor abajo donde tipea su respuesta larga.
  - El docente lo evalúa después como entrega.
- **Estado**: no existe hoy. Es un componente nuevo (un "TextEditor del
  alumno" embebido en el flujo de módulo).

### 16.2 — Sistema de modo aula opcional
- Ver 2.7.

### 16.3 — Fusión "aulas + clases"
- Ver 2.2.

### 16.4 — Mejor onboarding por herramienta
- Ver 7.8.

---

## Tabla resumen

| # | Bug | Pantalla / módulo | Severidad | Estado |
|---|---|---|---|---|
| 1.1 | Evaluaciones sin título visible | Panel profesor | 🟡 medio | nuevo |
| 1.2 | Evaluaciones modelo antiguo sin categoría | Panel profesor | 🟠 alto | nuevo |
| 2.1 | Editar aula no hidrata todos los campos | Profesor/Aula | 🟡 medio | nuevo |
| 2.2 | Aulas vs Clases confuso (fusión) | Aulas + Clases | 🟡 medio + 💡 | nuevo |
| 2.3 | Tablón del aula → 403 (top + actividades) | Clase | 🔴 crítico | nuevo |
| 2.4 | Falta código de clase en el panel | Clase | 🟡 medio | nuevo |
| 2.5 | Navbar cambia a alumno en `/profesor/aulas/:id` | Aula | 🟢 bajo | nuevo |
| 2.6 | "Volver" lleva al menú + navbar de alumno | Aula | 🟢 bajo | nuevo |
| 2.7 | Modo aula opcional desde dentro del aula | Aula | 💡 | nuevo |
| 2.8 | Acciones del aula no funcionan | Aula | 🔴 crítico | nuevo (faltan repros) |
| 3.1 | "Compartir" expone a toda la escuela | Material didáctico | 🟠 alto | nuevo |
| 3.2 | "Crear cuestionario" abre editor deprecado | Material didáctico | 🟡 medio | nuevo |
| 4.1 | Evaluaciones legacy inaccesibles | /profesor/evaluaciones | 🟠 alto | ignorado |
| 5.1 | Pestañas + filtros redundantes en Mis módulos | /modulos | 🟡 medio | nuevo |
| 5.2 | Diseño choca con el tema | /modulos, /modulos/:id | 🟢 bajo | nuevo |
| 6.1 | Mapas: controles arriba al reproducir | /modulos/:id | 🟡 medio | nuevo |
| 7.1 | "Leer en voz alta" solo lee título/subtítulo | Herramientas | 🟠 alto | nuevo |
| 7.2 | Diccionario: bug de generación | Herramientas | 🟡 medio | postergado |
| 7.3 | Tabla periódica desalineada (leve) | Herramientas | 🟢 bajo | nuevo |
| 7.4 | Escalador de recetas: diseño pulible | Herramientas | 🟢 bajo | nuevo |
| 7.5 | Líneas de tiempo: falta diseño | Herramientas | 🟢 bajo | nuevo |
| 7.6 | Mapas: "falta cariño" | Herramientas | 🟢 bajo | nuevo |
| 7.7 | "Formas" inutilizable | Herramientas | 🟠 alto | nuevo |
| 7.8 | Resto de herramientas: curva alta | Herramientas | 🟢 bajo | nuevo |
| 7.9 | Quizzes no se cargan en el módulo | Editor de módulo | 🔴 crítico | nuevo |
| 8.1 | Calificaciones → 400 Zod (`moduleId` vacío) | /profesor/calificaciones | 🔴 crítico | causa raíz identificada |
| 9.1 | Asistencia da error al usarse | /profesor/asistencia | 🔴 crítico | nuevo (falta detalle) |
| 10.1 | "Nivel" no se hidrata al editar módulo | Editor de módulo | 🟡 medio | nuevo |
| 10.2 | Pulido general del editor | Editor de módulo | 🟢 bajo | nuevo |
| 11.1 | Plantillas: duplicación al guardar varias veces | /plantillas | 🟠 alto | nuevo |
| 12.1 | Más libertad en presentaciones | Presentaciones | 💡 + 🟡 | nuevo |
| 13.1 | Editor de libros tosco vs Word/Docs | /editor | 💡 + 🟡 | nuevo |
| 14.1 | Vista de alumno con formato pobre | /modulos/:id (alumno) | 🟡 medio | nuevo |
| 15.1 | QuizAttempt → `questions.map is not a function` | /quizzes/attempt/:id | 🔴 crítico | hipótesis lista |
| 16.1 | Falta editor de investigaciones para alumno | (no existe) | 💡 | nuevo |

---

## Próximos pasos sugeridos

1. **Atacar los 🔴 críticos primero** (en este orden, por bloqueo de
   flujo del profesor):
   - 8.1 calificaciones (causa raíz lista → fix corto).
   - 2.3 tablón del aula 403 (audit de policies en aulas/aula-feed).
   - 15.1 QuizAttempt crash (parche defensivo + revisión back).
   - 9.1 asistencia (necesita más repro).
   - 7.9 quiz en módulo (necesita más repro).
   - 2.8 acciones del aula (necesita lista exacta de botones).
2. **Después los 🟠 altos**: 1.2, 3.1, 7.1, 7.7, 11.1.
3. **🟡 medios**: agrupar por pantalla para hacer pases coherentes.
4. **🟢 visuales y 💡 wishlist**: planificar un sprint de "pulido +
   nuevas herramientas".

---

## Anexo — datos de QA original

> Volcado bruto del reporte del tester (parafraseado para legibilidad).
> Útil para verificar que ningún ítem se perdió al estructurar el doc.

- Evaluaciones del panel sin título / modelo antiguo sin categoría.
- Aulas editables pero faltan cargar valores.
- Tablón → 403 (top + próximas actividades) y falta código de clase.
- Navbar pasa a alumno al entrar al aula (solo bug visual del navbar).
- "Volver al aula" lleva al menú con navbar de alumno.
- Modo aula: sugerencia de hacerlo opcional desde el aula.
- Acciones del aula no funcionan.
- "Compartir" de material expone a toda la escuela.
- Evaluaciones modelo viejo en `/profesor/evaluaciones` (ignoradas).
- Material didáctico: "crear cuestionario" es versión deprecada.
- Mis módulos: filtros casi inútiles cuando la pestaña ya filtra.
- `/modulos` y `/modulos/:id` chocan con el diseño general.
- Mapas: controles arriba al reproducir.
- Leer en voz alta lee solo título/subtítulo.
- Diccionario: bug postergado.
- Tabla periódica: centrado menor.
- Escalador de recetas: pulir diseño.
- Líneas de tiempo: funcionan, falta diseño.
- Mapas: falta cariño.
- Quizzes no cargan en módulo.
- Clasificaciones: 400 con error Zod (moduleId/quizId).
- Asistencia: error al usar.
- Pulir interfaces y editores.
- "Nivel" no carga al editar módulo.
- Plantillas: duplicación al hacer click muchas veces en guardar.
- Presentación: más libertad para crear.
- Editor de libros: tosco, deseado tipo Docs/Word.
- "Formas" inutilizable; resto raras hasta acostumbrarse.
- Falta herramienta de cuestionarios estilo libro para investigaciones.
- Vista de alumno con formato muy simple.
- QuizAttempt → `questions.map is not a function` (stack incluido).

# Auditoría UX — Editor de libros, Presentaciones, Herramienta interactiva

**PLAN-G §3, ítem 42.** Fecha: 2026-07-04. Auditoría exploratoria (research,
sin implementación) hecha con 3 agentes en paralelo, uno por editor, sin
feedback previo del usuario sobre esos tres editores específicamente (a
pedido explícito: "auditoría tuya primero").

**Advertencia de confiabilidad**: los reportes de los 3 agentes son
extensos pero **no verificados ítem por ítem**. En una verificación rápida
de 3 hallazgos "quick win, alto impacto" de la auditoría de Herramienta
Interactiva, **2 de 3 resultaron falsos** al leer el código directamente
(ver sección "Correcciones" abajo). Tratar el resto de esta lista como
**candidatos a confirmar antes de implementar**, no como hechos.

## Bug confirmado (severidad alta, no es sólo UX)

**Las diapositivas con "Bloque" (`blockSpec`) pierden su contenido al
presentarse a los alumnos.**

- `apps/web/src/components/modulos/SlidePresenter.tsx` es el ÚNICO
  renderer que ven los alumnos (usado por
  `TheoryItemCard.tsx:130-136` para el tipo "Presentación").
- Ese archivo maneja `slide.toolSpec` explícitamente (línea 98) pero
  **nunca hace referencia a `slide.blockSpec`** (confirmado: `grep
  blockSpec SlidePresenter.tsx` → 0 resultados).
- El editor (`TheorySlideEditor.tsx`, líneas 1044-1067) SÍ renderiza
  `blockSpec` correctamente mientras se edita — por eso el docente no
  nota el problema hasta que un alumno mira la presentación real.
- Consecuencia: cualquier gráfico, tabla, diagrama de flujo, forma, etc.
  agregado a una diapositiva vía "Bloque" desaparece completamente
  (junto con `heading`/`subtitle` de esa diapositiva, que tampoco se
  muestran) en la vista del alumno.
- Fix: agregar un caso `if (slide.blockSpec)` en `SlideContent()`
  (`SlidePresenter.tsx`), replicando el patrón ya usado para `toolSpec`
  (líneas 97-112) pero usando `BlockRenderer`/`deserializeBlockDocument`
  como hace `TheoryItemCard.tsx:7-8` para el tipo "Herramienta". Fix
  chico, no implementado todavía — usuario pidió documentar y pasar a
  planeación antes de tocar código.

## Correcciones a los reportes de los agentes (verificadas en código)

1. **"Tabla vacía, 6+ clicks para poder escribir datos" — FALSO.**
   `createDefaultBlock("table")`
   (`apps/web/src/blocks/v2/state/blockEditor.reducer.ts:35-42`) ya
   inicializa con 2 columnas ("Columna 1"/"Columna 2") y 1 fila. No hay
   estado vacío 0×0.
2. **"Modo conectar en Formas sin botón/toggle visible" — FALSO.**
   `ShapeBlockEditor.tsx:286-304` tiene un botón con `aria-pressed`,
   `onClick` que togglea `connectMode`, y label dinámico ("Conectar" /
   variante activa).
3. El resto de los ~25 candidatos abajo **no se verificó individualmente**
   — sólo se muestrearon estos 3, con 2 de 3 fallando la verificación.

### Segunda ronda de verificación (2026-07-04, fase de planeación)

4. **"El layout Dos columnas no se ve como columnas en el editor" —
   FALSO.** `SlideStage` (`TheorySlideEditor.tsx:1048-1054`) renderiza
   `.vb-s-cols` con dos `EditableText` cuando `layout === "split"`, y el
   CSS (`index.css:2345`) es una grilla real `1fr 1fr`. El canvas SÍ
   muestra columnas editables.
5. **"Cambiar entre Manual y Tabla borra los datos manuales del
   gráfico" — FALSO.** `ChartBlockEditor.tsx:140` sólo togglea
   `sourceTableId`; `block.data` (los datos manuales) no se toca nunca
   y se restaura al volver a "Manual". El renderer resuelve la tabla
   sólo si `sourceTableId` está seteado.
6. **Matiz al bug confirmado del `blockSpec`**: heading/subtitle SÍ se
   muestran en el presenter (rama default, `SlidePresenter.tsx:166-175`)
   — lo único que se pierde es el contenido del bloque. La frase "junto
   con heading/subtitle" del reporte original era incorrecta.
7. **Hallazgo nuevo confirmado (pérdida de datos real)**: en el editor
   de diapositivas, los botones de tipo de contenido
   (`TheorySlideEditor.tsx:1842-1844`) hacen `blockSpec: undefined` al
   pasar a Texto/Código, y elegir un bloque (línea 1871) hace
   `body: undefined` — **sin confirmación y sin undo** (cero
   `undo`/`history` en el archivo). Un docente que toca "Texto" por
   error pierde el bloque configurado de forma irreversible.
8. **Confirmados del editor de libros**: no hay ningún link a `/editor`
   en `ProfesorMateriales.tsx` (sólo se llega tipeando la URL); hay 6
   `alert()` en `BookEditorPage.tsx` (incl. el de "Guardado en
   servidor"); y el editor de libros quedó **fuera** de
   `GuardarComoMaterial` (grep: sólo lo usan los 4 editores de
   PLAN-G §1) — guardar un libro no lo hace aparecer en Materiales.

**Tasa acumulada: 4 de 6 candidatos de alta prioridad muestreados
resultaron falsos.** Regla para la implementación: ningún ítem de la
lista cruda se implementa sin verificación previa en código.

## Verificación COMPLETA de la lista cruda (2026-07-04, Fase 4 de PLAN-G3)

Todos los candidatos restantes verificados en código. Veredictos:
**CONFIRMADO** (problema real), **PARCIAL** (algo hay, pero menor o
distinto a lo reportado), **FALSO** (no existe el problema),
**AUSENCIA** (feature que no existe — pedido, no bug).

### Presentaciones (`TheorySlideEditor.tsx`)

| Candidato | Veredicto | Evidencia |
|---|---|---|
| Reordenar diapositivas sólo visible en hover | **CONFIRMADO** | Línea 2074: `hidden group-hover:flex` — además los botones no existen en el DOM hasta el hover ⇒ **inaccesibles por teclado** (peor que lo reportado) |
| Sin preview en vivo de gráficos al editarlos | **FALSO** | El canvas renderiza `slide.blockSpec` en vivo (1044-1045) y los editores de bloque embeben su propio renderer como preview (`ChartBlockEditor.tsx:257-259`, `MathBlockEditor.tsx:175-177`) |
| Sin preview de imagen de fondo en el editor | **FALSO** | El canvas muestra la imagen (1090-1092); el inspector además ofrece la capa de color sólo cuando hay imagen (1823) |
| Temas/acentos con Tailwind hardcodeado | **CONFIRMADO** (baja, dev-facing) | `THEMES` (82+) y `ACCENT_COLORS` (185) son strings Tailwind literales; extensibilidad, no bug de usuario |
| Layout nuevo toca ~5 lugares | **CONFIRMADO** (~7) | Tipo (25), `LAYOUT_META` (27), `layoutContainerClass` (35), `legacyLayoutToPreset` (677), `LayoutIcon` (776), ramas de `SlideThumbnail` (869-910), ramas de `SlideStage` (1031+) y de `SlidePresenter` (114/142) |
| Sin drag-and-drop de diapositivas | AUSENCIA | Cero `draggable`/`onDrop` en el archivo |
| Notas del orador sin TTS | AUSENCIA | Tab "Notas" existe (1883-1886); TTS no |
| Sin validación de título vacío | PARCIAL | No hay validación, pero el thumbnail marca "Sin título" en cursiva (2065) — mitigado |
| Sin agrupación/secciones | AUSENCIA | Sin concepto de sección en el modelo |
| **NUEVO — sin undo/redo** | **CONFIRMADO** | Cero `undo`/`history` en 2161 líneas, mientras `BlockEditorPage` (1078-1081) y `BookEditorPage` (1918-1925) SÍ tienen — inconsistencia entre editores que agrava la pérdida de datos del cambio de tipo de contenido |

### Herramienta interactiva (`blocks/v2/` + `blocks/editors/`)

| Candidato | Veredicto | Evidencia |
|---|---|---|
| Inspector Chart/Math sin agrupación (20+ campos) | **FALSO/EXAGERADO** | Chart: ~6-8 campos con series en tarjetas bordeadas; Math: ~9 campos con rangos en grid 2×2 y funciones en sección propia; ambos con preview embebido al pie |
| Barra de fórmulas de descubrimiento implícito | PARCIAL | Hay texto de ayuda explícito en el inspector: "La barra de fórmulas (fx) aparece al seleccionar una celda" (`TableBlockEditor.tsx:76`) |
| Previews de sidebar sin contexto | PARCIAL (cosmético) | `blockPreview()` (156-167) muestra título o `Gráfico ${chartType}`; no muestra cantidad de datos — mejora menor |
| Toolbar ▲▼⊕✕ sin labels visibles | **MAYORMENTE FALSO** | Todos los botones tienen `title` + `aria-label` (1259-1280, 547-605): hay tooltips y accesibilidad; sólo faltan labels de texto permanente (patrón estándar de icon-button) |
| Sin modo simple/plantillas | AUSENCIA (confirmada) | Ya estaba confirmado por grep; va a Fase 5 de PLAN-G3 |

### Editor de libros (`bookEditor/BookEditorPage.tsx`)

| Candidato | Veredicto | Evidencia |
|---|---|---|
| Badge de validación no clickeable | **CONFIRMADO Y AGRAVADO** | El badge "NE/NW" (1992-2004) es un `<span>` sin onClick — y peor: `state.issues` sólo se usa para CONTAR (1840-1842); los `message`/`path` de los issues **no se muestran en ningún lugar de la UI**. El docente ve "2E" sin forma alguna de saber qué está mal |
| Mensaje "Página vacía → panel inferior" | **CONFIRMADO** | El mensaje (1526) dice "panel inferior" pero `AddBlockBar` está ARRIBA del canvas (2352-2356, con `border-b`) |
| LibraryModal sólo carga, naming confuso | **CONFIRMADO** | El botón "Biblioteca" (1982) abre un modal titulado "Mis documentos" (1173) que sólo lista/carga; sin "crear nuevo". Colisión extra: existe otro modal "Biblioteca de imágenes" (1098) — dos "Bibliotecas" distintas |
| Anchors `pageId:anchorId` opaco | **CONFIRMADO** | Inputs de texto libre con placeholder literal `pageId:anchorId` (958, 1003) — el docente tiene que tipear IDs internos a mano |
| Overlay "Cambiar imagen en Inspector" | **CONFIRMADO** (leve) | Al seleccionar una imagen, un overlay `absolute inset-0` la tapa por completo con la instrucción (1435-1440) |
| Guardar vs Local sin diferencia clara | PARCIAL | Hay jerarquía visual (primary vs ghost), tooltips y feedback de estado (Sin guardar/Guardando/✓, 1896-1907). Lo real que queda: nombres poco descriptivos y el `alert("Guardado en servidor. ID: …")` redundante con el chip "✓ Guardado" |
| Atajos de teclado no documentados | **PARCIALMENTE FALSO** | Ctrl+Z/Y/S existen (1775-1789) y están documentados en los tooltips de sus botones (1918, 1922, 1936) |
| Toggle PC/Móvil poco claro | PARCIAL | Tiene tooltip "Alternar vista móvil/escritorio" (1961); el label muestra el estado ACTUAL, ambigüedad clásica de toggle |
| Inspector w-72 comprimido | PARCIAL | El ancho fijo existe (`w-72` = 288px, línea 2377); si resulta "muy comprimido" es subjetivo — requiere sesión en vivo |
| Botones mover deshabilitados sin explicación | NO VERIFICADO A FONDO | Patrón esperado (disabled en extremos, igual que diapositivas); baja prioridad |
| Concepto "Anclas" sin documentar | PARCIAL | Hay UI de anclas por página (428-477) pero nada explica para qué sirven ni cómo se conectan con el índice |
| Sin entry point / sin integración Material / alerts | **CONFIRMADO** | Ya verificado en la segunda ronda (ver arriba); cubierto por Fase 3 de PLAN-G3 |

### Balance final

- Lista cruda original: ~25 candidatos. **Falsos o mayormente falsos: 8**
  (tabla vacía, modo conectar, chart borra datos, split sin columnas,
  preview de gráficos, preview de fondo, inspector 20+ campos, toolbar
  sin labels — más "atajos sin documentar" parcialmente falso).
- **Confirmados accionables nuevos** que la auditoría no tenía o
  subestimaba: issues de validación invisibles (el peor del editor de
  libros), reordenar inaccesible por teclado, sin undo en el editor de
  diapositivas (inconsistente con los otros dos editores), doble
  "Biblioteca".
- Los AUSENCIA son features (drag-and-drop, TTS de notas, secciones,
  modo simple) — van a Fase 5 de PLAN-G3, no son bugs.

## Lista cruda por editor (SIN verificar, tal como la reportaron los agentes)

### Editor de libros (`apps/web/src/bookEditor/`)

Alta prioridad (según el agente):
1. Acceso al editor opaco — no hay botón "Crear libro" visible en
   `ProfesorMateriales.tsx`; sólo se llega adivinando `/editor`.
2. Guardado confuso: botones "Guardar" (servidor) y "Local" (File System
   Access) sin diferencia de UX clara; `alert()` interrumpe el flujo.
3. `LibraryModal` ("Biblioteca") sólo carga documentos existentes, no
   permite crear uno nuevo; naming confuso.

Media prioridad: botones deshabilitados sin explicación (mover
página/bloque arriba/abajo), atajos de teclado no documentados en la UI,
inspector derecho muy comprimido (w-72, mucho scroll), toggle "PC/Móvil"
con nombre poco claro, overlay "Cambiar imagen en Inspector" interrumpe
el flujo, formato de anchors para el índice (`pageId:anchorId`) opaco,
errores de validación mostrados como badge no-clickeable.

Baja prioridad: concepto de "Anclas" sin documentar, libros no
integrados al flujo de "Material" de PLAN-G §1 (guardar libro no lo hace
aparecer en Materiales), mensaje "Página vacía" refiere un "panel
inferior" que en realidad está arriba.

### Presentaciones (`apps/web/src/components/modulos/TheorySlideEditor.tsx`)

Alta prioridad:
1. (Confirmado arriba, no candidato — bug real) heading/subtitle/bloque
   no aparecen en el presenter cuando la diapositiva tiene `blockSpec`.
2. Una diapositiva sólo admite UN bloque o tool a la vez (`if/else`
   excluyente) — no se puede combinar ej. tabla + gráfico en la misma
   diapositiva.
3. El layout "Dos columnas" no se ve como columnas reales en el lienzo
   de edición (WYSIWYG roto) — sólo se ve bien en el presenter.
4. Agregar un layout nuevo requiere tocar ~5 lugares del código (tipo,
   `LAYOUT_META`, `layoutContainerClass`, ícono, thumbnail, presenter) —
   no es tan simple como "agregar una entrada a un objeto".

Media prioridad: botones de reordenar diapositivas sólo visibles al
hover (no descubribles), sin preview en vivo de gráficos mientras se
editan, temas/acentos con clases Tailwind hardcodeadas (poco
extensible), sin preview de imagen de fondo en el editor.

Baja prioridad: sin drag-and-drop de diapositivas, notas del orador sin
TTS, sin validación de diapositiva con título vacío, sin
agrupación/secciones para presentaciones largas.

### Herramienta interactiva (`apps/web/src/blocks/v2/BlockEditorPage.tsx`)

Alta prioridad (2 de las 3 muestreadas resultaron falsas, ver arriba):
1. ~~Tabla vacía~~ (falso, ver correcciones).
2. ~~Modo conectar sin toggle~~ (falso, ver correcciones).
3. Gráfico: cambiar entre origen "Manual" y "Tabla" borra los datos
   manuales sin confirmación (`ChartBlockEditor.tsx:140`,
   `onUpdate({ sourceTableId: undefined })` sin aviso). **No verificado
   independientemente.**
4. Inspector sin agrupación visual en Chart/Math (20+ campos sin
   secciones). **No verificado.**

Media/baja prioridad (no verificadas): descubrimiento implícito de la
barra de fórmulas en tablas, previews de bloque en el sidebar sin
contexto ("Gráfico bar" sin decir cuántos datos), no existe ningún "modo
simple vs avanzado" ni plantillas prearmadas hoy (confirmado por
ausencia — grep sin resultados para "template"/"plantilla"/"modo
simple" en `apps/web/src/blocks/`), iconografía de la toolbar flotante
(▲▼⊕✕) sin labels visibles.

## Próximo paso

~~Usuario pidió pasar a fase de planeación.~~ **Plan escrito 2026-07-04**:
`tareas_pendientes/PLAN-G3-ux-editores-item42.md` — fases ordenadas por
certeza (confirmados primero, candidatos con verificación previa
obligatoria después, estructurales con decisión del usuario al final).

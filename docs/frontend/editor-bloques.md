# Frontend — Editor de bloques

| | |
|---|---|
| **Estado** | Vigente |
| **Audiencia** | Frontend, contenido |
| **Última actualización** | 2026-07-08 (PLAN-P §4) |
| **Fuente de verdad** | `apps/web/src/blocks/`, `apps/web/src/bookEditor/`, `apps/web/src/domain/book/` |

> **Extiende** [`../book-editor.md`](../book-editor.md), que documenta el modelo `Book`
> (`book.pages@1.0/@1.1`), el contrato `POST/GET /api/libros` y los bloques de **página**
> (`heading`, `paragraph`, `image`, `divider`, `pageBreak`). Este documento **no duplica** ese
> modelo: cubre el **editor de bloques de contenido** (`blocks/`) — texto, LaTeX, tabla, chart, flow,
> math, shape, image — y completa la arquitectura del `bookEditor` (estado, servicios y migraciones)
> que `book-editor.md` no detalla.

## Conceptos

Coexisten **dos sistemas** que usan la palabra "bloque":

1. **`blocks/`** — editor de **documentos de contenido enriquecido**. El editor activo es la versión
   **v2** (`blocks/v2/BlockEditorPage.tsx`, rutas `/bloques/editor[/:id]`); `blocks/BlockEditor.tsx`
   es una versión legacy más simple. Modelo: `BlockDocument = { version: 1; blocks: Block[] }`
   (`blocks/types.ts`). Persistencia: `/api/block-documents`.
2. **`bookEditor/`** — editor de **libros paginados** (rutas `/editor[/:id]`). Modelo `Book` en
   `domain/book/book.types.ts`, persistencia `/api/libros`. Sus bloques de página son independientes
   de los de `blocks/` (no comparten `types.ts`).

---

## Editor de bloques de contenido (`blocks/`)

### Tipos de bloque (`blocks/types.ts`)

`BlockDocument = { version: 1; blocks: Block[] }`. Cada `Block` tiene `id: string` + `type`. Campos
por tipo (nombres reales del código):

Son **13 tipos** (`Block` = unión discriminada por `type`, `blocks/types.ts:6-19`):

| `type` | Campos | Ejemplo |
|---|---|---|
| `text` | `content: string` (markdown). | `{ type:"text", content:"## Título\n\nUn párrafo con **negrita**." }` |
| `latex` | `content: string`; `displayMode: boolean` (true = bloque centrado; false = inline). | `{ type:"latex", content:"E = mc^2", displayMode:true }` |
| `table` | `title?`; `headers: string[]`; `rows: (string\|number)[][]`; `formulas?: Record<string,string>` (clave celda `"A1"` → `"=SUMA(A1:A5)"`); `script?: string` (DSL del docente); `showScriptProcess?: boolean`. | `{ headers:["Mes","Ventas"], rows:[["Ene",120],["Feb",150]], formulas:{"B3":"=SUMA(B1:B2)"} }` |
| `chart` | `title?`; `chartType` (16 valores, ver abajo); `sourceTableId?`; `xColumn?: number`; `yColumns?: number[]`; `data?: { labels: string[]; datasets: { label; values: number[]; xValues?; color? }[] }`; `dateFormat?`; `hierarchy?`; `showStats?`; `showProcess?`; `statFunction?`; **PLAN-O** `xAxisLabel?`, `yAxisLabel?`, `showGrid?` (def true), `showLegend?` (def true) — sólo tipos cartesianos, ver abajo. | `{ chartType:"bar", data:{ labels:["A","B"], datasets:[{label:"Serie 1", values:[3,7]}] }, xAxisLabel:"Categoría" }` |
| `flow` | `title?`; `nodes: { id; label; x; y; shape?: "rect"\|"diamond"\|"circle"; color? }[]`; `edges: { id; fromId; toId; label? }[]`. | `{ nodes:[{id:"n1",label:"Inicio",x:0,y:0,shape:"circle"}], edges:[] }` |
| `math` | `title?`; `functions: { id; expression; label?; color? }[]`; `xMin`; `xMax`; `yMin?`; `yMax?`; `samples?` (def 400); `showGrid?`; `showLegend?`. | `{ functions:[{id:"f1",expression:"sin(x)"}], xMin:-6, xMax:6 }` |
| `shape` | `title?`; `collection: "basica"\|"fisica"\|"electrica"\|"logica"\|"matematica"`; `canvasWidth?` (def 800); `canvasHeight?` (def 500); `items: ShapeItem[]`; `connectors?: ShapeConnector[]`. | `{ collection:"electrica", items:[{id:"i1",shapeId:"resistencia",x:100,y:100}] }` |
| `image` | `url: string`; `alt: string` (TTS/accesibilidad); `caption?: string`; `width?: "small"\|"medium"\|"full"`. | `{ url:"https://.../fig1.png", alt:"Diagrama del ciclo del agua", width:"medium" }` |
| `audio` | `url: string`; `alt: string`; `caption?: string`; `mimeType?: string` (detectado en la subida). | `{ url:"/api/media/abc123.mp3", alt:"Dictado en francés — nivel A1", mimeType:"audio/mpeg" }` |
| `video` | `url: string`; `alt: string`; `caption?: string`; `provider?: "file"\|"youtube"\|"vimeo"` (detectado en editor si vacío). | `{ url:"https://youtube.com/watch?v=...", alt:"Explicación de mitosis", provider:"youtube" }` |
| `pdf` | `url: string`; `title: string` (texto del link de descarga); `caption?: string`. | `{ url:"/api/media/apunte.pdf", title:"Apunte de cátedra — Unidad 3" }` |
| `link` | `url: string`; `title: string` (texto del ancla); `description?: string`. | `{ url:"https://es.wikipedia.org/wiki/...", title:"Wikipedia: Revolución de Mayo" }` |
| `formula` | `content: string` (fuente LaTeX); `displayMode: boolean`; `title?: string`; `alt: string` (requerida, TTS). Es la "vista adjunto" de una fórmula — la fuente de verdad sigue siendo LaTeX, reusa el renderer de KaTeX; ver `blocks/types.ts:210-223`. | `{ content:"a^2+b^2=c^2", displayMode:true, title:"Teorema de Pitágoras", alt:"a al cuadrado más b al cuadrado igual a c al cuadrado" }` |

Todos los campos arriba omiten `id: string` (obligatorio en los 13). Subtipos: `ShapeItem = { id;
shapeId; x; y; label?; rotation?; color? }`; `ShapeConnector = { id; fromId; toId; label?; style?:
"solid"\|"dashed"\|"arrow" }`.

`chartType` ∈ `bar, line, pie, scatter, area, bar-stacked, bar-grouped, area-stacked, histogram,
radar, polar, boxplot, timeseries, treemap, sankey, pyramid`. Los 7 **cartesianos** (los que
`ChartBlockRenderer` dibuja con `CartesianGrid`/`XAxis`/`YAxis` y por eso soportan Ejes+Estilo):
`bar, bar-stacked, bar-grouped, line, area, area-stacked, timeseries`.

`blocks/utils.ts`: `serializeBlockDocument`, `deserializeBlockDocument` (valida `version===1` y
`blocks` array), `createEmptyBlockDocument`. Subida de archivo para audio/video/pdf: componente
compartido `editors/MediaUploader.tsx` → `POST /api/media/upload` (autenticado, ver
`api/src/routes/media.ts`).

### Editores (`blocks/editors/`)

Cada editor recibe `{ block, onUpdate }` (excepto `ShapeBlockEditor` → `{ block, onChange }`, y
`ChartBlockEditor` que además recibe `doc`). Exportados desde `editors/index.ts`. Varios traen una
variante **Inline** que se renderiza dentro del canvas v2.

| Editor | Edita | Controles clave |
|---|---|---|
| `TextBlockEditor` | `text` | Placeholder: la edición real es un `<textarea>` en el canvas v2 (`CanvasBlockContent`). |
| `LatexBlockEditor` | `latex` | Checkbox `displayMode`. `InlineLatexEditor`: input de fórmula + preview KaTeX (error en rojo si falla). |
| `TableBlockEditor` | `table` | `title` + "+ Fila"/"+ Columna". `InlineTableEditor`: tabla editable + **barra de fórmulas (fx)**: si el valor empieza con `=` lo guarda en `block.formulas[clave]`, si no en `rows`. Clave de celda = letra de columna + fila (A1, B3…). |
| `ChartBlockEditor` | `chart` | `title`; fuente Manual/Tabla; si Tabla: `sourceTableId` + `xColumn`; si Manual: `labels` (CSV) y por dataset `label`/`values`/`color`. `isMultiSeries` para bar/line/area/stacked/grouped. **PLAN-O**: si `hasAxes` (tipo cartesiano), sección "Estilo" (checkboxes Cuadrícula/Leyenda) + "Ejes" (inputs de etiqueta X/Y). Exporta `CHART_TYPE_OPTIONS` e `InlineChartTypeToolbar`. |
| `FlowBlockEditor` | `flow` | `title`; lista de **Nodos** (`label` + `shape` ■/◆/●) y **Conexiones** (`fromId`→`toId`); "+ Conexión" deshabilitado con < 2 nodos. |
| `MathBlockEditor` | `math` | `title`; `xMin`/`xMax`/`yMin`/`yMax` (yMin/yMax "auto"); `samples` (10–2000); `showGrid`/`showLegend`; lista de **Funciones** (`expression` + color). |
| `ShapeBlockEditor` | `shape` | Canvas drag-and-drop: paleta por colección, arrastre desde paleta/ítems, modo "Conectar" (clic origen→destino crea `ShapeConnector`), inspector de forma (etiqueta, color, rotar ±90°, eliminar) o de conector (etiqueta, estilo, eliminar). |
| — (inline en canvas v2) | `image` | Sin editor dedicado en `editors/`: URL, alt, caption y tamaño se editan inline en `CanvasBlockContent` (`v2/BlockEditorPage.tsx`). |
| `AudioBlockEditor` | `audio` | `MediaUploader` (kind `audio`) o URL manual; `alt` (transcripción opcional); `caption`. |
| `VideoBlockEditor` | `video` | `MediaUploader` (kind `video`) o URL/embed; detecta `provider` por patrón de URL; `alt`; `caption`. |
| `PdfBlockEditor` | `pdf` | `MediaUploader` (kind `pdf`) o URL manual; `title` (texto del link); `caption`. |
| `LinkBlockEditor` | `link` | `url`, `title`, `description`; valida que `href` no esté vacío (WCAG). |
| `FormulaBlockEditor` | `formula` | Igual que `LatexBlockEditor` (input + preview KaTeX + `displayMode`) más `title` y `alt` (obligatoria). |

### Renderers (`blocks/renderers/`)

Despachados por `BlockRenderer.tsx` (switch sobre `block.type`).

| Renderer | Librería / técnica |
|---|---|
| `TextBlockRenderer` | `marked` (markdown→HTML) + `dompurify`, `dangerouslySetInnerHTML`. |
| `LatexBlockRenderer` | `katex` (`renderToString`, `throwOnError`) + `dompurify`; `displayMode` centra. |
| `TableBlockRenderer` | Sin lib de render; ejecuta `runDSL` (de `tableDSL`) si hay `script` y `evaluate` (de `tableFormulas`) por celda con fórmula; panel "Proceso del script". |
| `ChartBlockRenderer` | `recharts` (Bar/Line/Pie/Area/Scatter/Radar/Composed/Treemap…). Boxplot, sankey y pyramid son **SVG manual**. Usa `statsEngine` para paneles de estadística. **PLAN-O**: `showGrid`/`showLegend` condicionan `<CartesianGrid>`/`<Legend>`; `xAxisLabel`/`yAxisLabel` pasan a la prop `label` de `<XAxis>`/`<YAxis>` — sólo en los 7 tipos cartesianos. |
| `FlowBlockRenderer` | **SVG plano manual** (no usa `@xyflow/react`). Dibuja nodos (rect/diamond/circle) y edges con flecha. |
| `MathBlockRenderer` | `mathjs` (`evaluate(expr, { x })`) para muestrear + `recharts` LineChart. Filtra discontinuidades (\|y\|>1000→null), dominio Y por percentil 5–95. |
| `ShapeBlockRenderer` | SVG manual + SVG embebido de cada forma (`shape.svg`); capa SVG para conectores. |
| `AudioBlockRenderer` | `<audio controls>` nativo sobre `url`; `alt` como transcripción visible debajo. |
| `VideoBlockRenderer` | `provider==="file"` → `<video controls>` nativo; `youtube`/`vimeo` → `<iframe>` embebido. |
| `PdfBlockRenderer` | `<iframe>` con el visor nativo del navegador + link de descarga (`title`). |
| `LinkBlockRenderer` | `<a>` con `title`/`description`, sin librería. |
| `FormulaBlockRenderer` | Mismo motor que `LatexBlockRenderer` (KaTeX + dompurify) con `title` como etiqueta encima. |

> Nota: `@xyflow/react@^12` está en `package.json` pero **ningún archivo de `src/` lo importa**; el
> FlowBlock se dibuja con SVG propio.

### DSL e intérprete de tablas (`blocks/stats/`)

Dos motores sobre `TableBlock` + el motor estadístico:

**`tableFormulas.ts` — fórmulas de celda (barra `fx`).** `evaluate(expr, block)`; la expresión empieza
con `=`. Soporta:
- Funciones de rango: `SUMA`, `PROMEDIO`, `MAX`, `MIN`, `PRODUCTO` (sobre `A1:B3`); `CONTAR(rango)`
  (celdas no vacías); `REDONDEAR(celda, decimales)`.
- Referencia simple (`=A1`) y aritmética entre dos celdas (`=A1+B1`, `-`, `*`, `/`; división por
  cero → `#ERROR`).
- Resolución recursiva con **detección de ciclos** → `#CICLO`; otros errores → `#ERROR`.

**`tableDSL.ts` — DSL imperativa del docente (campo `script`).** Tokenizer + parser + evaluador;
`runDSL(script, block) → { success, updatedCells, errors, executionSteps }`. Sintaxis (una sentencia
por línea, `#` = comentario):
- **Asignación:** `A1 = <expr>` o con plantilla `C{i} = …`.
- **Bucle:** `PARA i EN 1..10: <asignación>` (rango con `..`; variable usable en refs `C{i}`).
- **Operadores:** `+ - * /` (`/` por cero lanza error), comparación `> < >= <= = <>` (→ 1/0), unario
  `-`, concatenación de strings con `+`.
- **Funciones:** `SUMA, PROMEDIO, MAX, MIN, CONTAR, PRODUCTO` (rango), `REDONDEAR(v,d)`, `ABS(v)`,
  `RAIZ(v)` (no negativos), `POTENCIA(b,e)`, `SI(cond,a,b)`, `CONCATENAR(...)`.
- **Límites de seguridad:** máx 50 sentencias, timeout 100 ms, máx 100 iteraciones/bucle. Genera
  `executionSteps` legibles. Las celdas del DSL tienen prioridad sobre `formulas` en el render.

**`statsEngine.ts` — estadística pura con pasos** (`StepResult = { result, steps }`): `mean`,
`median`, `mode`, `range`, `variance`/`stdDev` (param `population`), `frequencyTable`,
`histogram(data, bins=10)`, `percentile`, `quartiles` (q1/q2/q3/iqr), `zScore`, `covariance`,
`correlation` (Pearson), `linearRegression` (slope/intercept/r2), `summaryStats`. Consumido por
`ChartBlockRenderer` (paneles de estadística y proceso, vía `statFunction`).

### Canvas de ShapeBlock (`blocks/shapes/collections.ts`)

`COLLECTIONS: Record<collection, CollectionDef>`; cada forma es `ShapeDef = { id, label, svg }` (SVG
`viewBox="0 0 60 60"`). Cinco colecciones (el `shapeId` de cada `ShapeItem` referencia un `id`):

| Colección | Formas (`id`) |
|---|---|
| **basica** | rectangulo, elipse, rombo, triangulo, flecha_derecha, flecha_abajo |
| **fisica** | masa, resorte, polea, pendulo, plano_inclinado, flecha_fuerza, vector, carga_positiva, carga_negativa, pared, termometro, lupa |
| **electrica** | resistencia, capacitor, inductor, fuente_dc, led, switch, tierra, voltimetro, amperimetro, fusible, motor, transformador |
| **logica** | and_gate, or_gate, not_gate, nand_gate, nor_gate, xor_gate, buffer, xnor_gate, flip_flop, multiplexor, demultiplexor, registro |
| **matematica** | eje_cartesiano, vector_2d, angulo, triangulo_rectangulo, circunferencia, integral |

### Block editor v2 (`blocks/v2/`)

**Página** (`v2/BlockEditorPage.tsx`): layout de 3 columnas — sidebar de bloques, canvas central
(bloques apilados, botones "+" entre bloques, toolbar por bloque: subir/bajar/duplicar/eliminar,
reordenable con `@dnd-kit`: `DndContext`/`SortableContext`/`useSortable`) e inspector derecho. Soporta
el bloque `image` con editor inline (URL, alt, caption, tamaño). Carga el documento por prioridad: prop
`initialDocument` → `sessionStorage` (`block-doc:${sskey}`, p. ej. desde `ModuloEditor`) → `:id` de
ruta (API) → vacío. **File System Access API** (abrir/guardar local) + importar/exportar JSON +
guardar API o `GuardarComoMaterial` (tipo `"interactivo"`, ver [`../backend/modelo-de-datos.md`](../backend/modelo-de-datos.md#material)).

**Barra superior (PLAN-O, 2026-07-08)**: ícono (Shapes) + eyebrow "MOTOR GRÁFICO" + título editable
inline; Pill "Guardado · hace Ns" (reemplaza al "Sin guardar" fijo — se activa vía `useEffect` que
detecta la transición `dirty: true → false`, cualquiera sea la vía de guardado); toggle segmentado
Escritorio/Móvil que fija el `max-width` del lienzo (768px/384px, mismo patrón que
`BookEditorPage`). Los 5 botones sueltos de archivo (Abrir/Guardar local/Cargar/Importar/Exportar) se
colapsaron en un único menú "⋯". La paleta de bloques es un grid permanente de 2 columnas (ícono +
nombre + sub-descripción), no un dropdown. Atajos de una letra con el foco fuera de un input:
`B`/`F`/`G`/`L`/`T` agregan Texto/Función(`math`)/Gráfico/LaTeX/Tabla. Barra de estado inferior:
bloque seleccionado + conteo de bloques, hints de atajos a la derecha. Deliberadamente sin modo
"Vista previa" separado: el lienzo ya es WYSIWYG en vivo (reusa los mismos renderers de sólo-lectura
de `blocks/renderers/*`).

**Estado** (`v2/state/`):
- `blockEditor.reducer.ts`: `BlockEditorState = { document, title, selectedBlockId, dirty }`. Acciones:
  `LOAD_DOCUMENT, ADD_BLOCK, DELETE_BLOCK, DUPLICATE_BLOCK, MOVE_BLOCK (up/down), MOVE_BLOCK_INDEX
  (from/to, usa `arrayMove`), UPDATE_BLOCK (patch), SELECT_BLOCK, UPDATE_TITLE, MARK_DIRTY,
  RESTORE_DOCUMENT`. `createDefaultBlock` define el bloque inicial por tipo (p. ej. shape default
  `collection: "fisica"`). IDs `block-{type}-{suffix}`.
- `useBlockEditor.ts`: envuelve el reducer con **undo/redo** (`MAX_HISTORY=50`; trackea ADD/DELETE/
  DUPLICATE/MOVE/UPDATE_BLOCK/UPDATE_TITLE). Expone `state, dispatch, undo, redo, canUndo, canRedo,
  selectedBlock`.

**API** (`v2/services/blocksApi.ts`, usa `apiGet`/`apiPost` de `lib/api.ts`):
- `GET /api/block-documents/:id` → `BlockDocumentRecord { id, title, document, createdAt?, updatedAt? }`.
- `POST /api/block-documents` (payload `{ document, title, updatedAt }`) → `{ id }`.

> El editor legacy `blocks/BlockEditor.tsx` solo soporta text/latex/table/chart/flow/math (no shape ni
> image) y no usa el reducer/undo. El editor activo es v2.

### Destinos de render de un `BlockDocument`/`Block`

Un documento o un bloque suelto termina renderizado en cuatro lugares distintos, con **cobertura
desigual** de los 13 tipos:

| Destino | Componente | Cobertura de tipos |
|---|---|---|
| Standalone (`/bloques/editor[/:id]`) | `v2/BlockEditorPage.tsx` (edición) + `blocks/BlockRenderer.tsx` (switch, canvas WYSIWYG) | Los 13. |
| Embebido en diapositivas de teoría | `TheorySlideEditor.tsx` — el slide guarda un `Block` suelto en `slide.blockSpec`; se renderiza con `BlockSpecRenderer` (definido en el mismo archivo, `TheorySlideEditor.tsx:1164-1173`) | **Sólo 5**: `text, latex, table, chart, flow`. `math/shape/image/audio/video/pdf/link/formula` **no tienen case** en ese switch — si un slide llegara a tener uno de esos tipos en `blockSpec` no se dibuja nada. Gap real, no documentado en ningún PLAN previo; ver también §2 de [`../modulos.md`](../modulos.md) si el módulo referencia teoría con diapositivas. |
| Teoría de un módulo, ítem tipo "Herramienta" | `TheoryItemCard.tsx` (`isHerramientaType`, línea ~114): deserializa `item.detail` completo como `BlockDocument` con `deserializeBlockDocument` y lo pasa a `blocks/BlockRenderer.tsx` | Los 13 (usa el mismo `BlockRenderer` que standalone). |
| Guardado como Material | `GuardarComoMaterial` con `tipo="interactivo"` → `MaterialVersion.contenido` guarda el `BlockDocument` serializado (`POST /api/materiales/guardados`, ver [`../backend/modelo-de-datos.md`](../backend/modelo-de-datos.md#material)) | Los 13 al guardar/reabrir (mismo documento, sin conversión). |

### Frontera con el visualizador (`VisualizerRenderer`, 6 kinds vivos)

`components/modulos/VisualizerRenderer.tsx` es un sistema **separado y no relacionado** con
`blocks/`, con su propio tipo (`VisualSpec` de `generadoresV2/core/types.ts`) y sus propios 6 `kind`:
`static-image, latex, line-chart, vector-diagram, timeline, circuit`. Se usa para el bloque
`visual:` de una plantilla VBLang (el generador produce el `VisualSpec` junto con el ejercicio) y se
renderiza dentro de `TheorySlideEditor` en el slot `slide.toolSpec` (paralelo, no el mismo slot que
`blockSpec`).

**Cuándo usar cada uno**: un **bloque** (`Block`) es contenido de autor — el docente arma tablas,
gráficos, texto, multimedia a mano en el editor de bloques. Un **toolSpec/`VisualSpec`** es la salida
de un generador VBLang — se genera en el momento a partir de las variables del ejercicio, el docente
no lo edita directamente. No hay conversión entre ambos sistemas hoy: no existe un adapter que
convierta un `VisualSpec` en `ChartBlock` ni viceversa. `archive/visualizadores/` tiene un tercer
`VisualSpec` propio (57 kinds) completamente separado de este, con colisiones de nombre+forma en
`circuit`/`timeline` contra el vivo — ver hallazgo de PLAN-N §1/2 (no repatriable por copy-paste).

---

## Editor de libros (`bookEditor/`) — arquitectura

> El modelo `Book` (`book.pages@1.0/@1.1`), los bloques de página y el contrato `/api/libros` están en
> [`../book-editor.md`](../book-editor.md). Acá se completa el **estado, los servicios y las
> migraciones** del editor.

Modelo en `domain/book/book.types.ts`: `Book { schema; metadata; structure?; assets?; pages: Page[];
notes?; glossary?; references? }`; `Page { id, number, title?, anchors?, content: Block[], … }`;
`Block = heading | paragraph | image | divider | pageBreak` (con `BlockStyle`, `TextStyle`, `TextRun`).

**Estado** (`bookEditor/state/`):
- `bookEditor.reducer.ts`: `EditorState = { book, selectedPageId, selectedBlockId, issues, dirty }`.
  ~40 acciones: `LOAD_BOOK, SELECT_PAGE/BLOCK, SET_ISSUES, MARK_DIRTY, ADD_PAGE, ADD_BLOCK,
  UPDATE_PAGE_TITLE, UPDATE_PARAGRAPH_RUN, UPDATE_PARAGRAPH_BLOCKSTYLE, UPDATE_RUN_STYLE,
  UPDATE_HEADING, UPDATE_IMAGE, MOVE_PAGE/MOVE_BLOCK, DELETE_PAGE/DELETE_BLOCK (no borra la última
  página), DUPLICATE_PAGE/DUPLICATE_BLOCK, RESTORE_BOOK, UPDATE_METADATA, UPDATE_THEME,
  ADD/REMOVE_ASSET, TOC (ADD/UPDATE/REMOVE/MOVE_TOC_ENTRY), anclas (ADD/UPDATE/REMOVE_PAGE_ANCHOR),
  notas/glosario (ADD/UPDATE/REMOVE_NOTE), UPDATE_DIVIDER`. IDs vía `makeBlockId`.
- `useBookEditor.ts`: undo/redo (`MAX_HISTORY=30`, snapshots del `Book` completo) + memos
  `selectedPage`/`selectedBlock` + `runValidation` (llama `validateBook`).

**API** (`bookEditor/services/booksApi.ts`):
- `GET /api/libros/:id` → `record.book`.
- `GET /api/libros?q&page&pageSize` → `BookListResponse { items, page, pageSize, total, totalPages }`.
- `POST /api/libros` (payload `{ book, updatedAt }`) → `{ id }`.

**Servicios auxiliares** (`bookEditor/services/`):
- `validate.ts` — `validateBook(book): Issue[]` (`level: "error"|"warn"`): IDs de página únicos, IDs
  de bloque únicos por página, bloques con `id`, y que las anclas del TOC (`pageId:anchorId`) existan.
  No bloquea el guardado, solo reporta.
- `ids.ts` — `makePageIdFromNumber` (`p001`…), `makeBlockId(pageId, type, ordinal)` (`p001_h_001`,
  `_par_`, `_img_`, `_div_`, `_pb_`), `ensureUniqueIds(book)` (regenera IDs repetidos/faltantes →
  `{ book, changed, report }`).
- `migrate.ts` — `migrateToV11ForEditor(book)`: `migrateSchema` (1.0→1.1), `ensureTheme` (consolida
  `paper_color`/`text_color` legacy + defaults: serif, 18px, lineHeight 1.6),
  `normalizeParagraphsToRuns` (convierte `paragraph.text` a `runs: [{text}]`).
- `importExport.ts` — `importBookFromFile(file)` (parse JSON + `migrateToV11ForEditor` +
  `ensureUniqueIds`) y `exportBookToDownload(book, filename)`.

**Vistas:** `BookEditorPage.tsx` (editor completo con FSA, fuentes, sidebar/inspector) y
`BookReader.tsx` (solo lectura: renderiza heading/paragraph/divider/pageBreak/image; numera con
`structure.pageNumbering.startAt`).

> `POR CONFIRMAR (backend)`: tanto `saveBlockDocument` como `saveBook` usan `apiPost` con `updatedAt`;
> desde el frontend no se distingue create vs update (el backend expone `POST /api/block-documents` y
> `POST /api/libros`; la actualización de block-documents es `PATCH /api/block-documents/:id` según
> [`../backend/api-reference.md`](../backend/api-reference.md), pero el cliente no lo invoca).

## Archivos fuente documentados

- `apps/web/src/blocks/types.ts`, `utils.ts`, `BlockEditor.tsx`, `BlockRenderer.tsx`
- `apps/web/src/blocks/editors/*`, `renderers/*`, `stats/*`, `shapes/collections.ts`
- `apps/web/src/blocks/v2/*` (página, estado, `services/blocksApi.ts`)
- `apps/web/src/bookEditor/*` (página, reader, `state/*`, `services/*`)
- `apps/web/src/domain/book/*`
- Extiende: `docs/book-editor.md`

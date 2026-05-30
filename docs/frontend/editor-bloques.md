# Frontend — Editor de bloques

| | |
|---|---|
| **Estado** | Vigente |
| **Audiencia** | Frontend, contenido |
| **Última actualización** | 2026-05-30 |
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

| `type` | Campos |
|---|---|
| `text` | `content: string` (markdown). |
| `latex` | `content: string`; `displayMode: boolean` (true = bloque centrado; false = inline). |
| `table` | `title?`; `headers: string[]`; `rows: (string\|number)[][]`; `formulas?: Record<string,string>` (clave celda `"A1"` → `"=SUMA(A1:A5)"`); `script?: string` (DSL del docente); `showScriptProcess?: boolean`. |
| `chart` | `title?`; `chartType` (16 valores, ver abajo); `sourceTableId?`; `xColumn?: number`; `yColumns?: number[]`; `data?: { labels: string[]; datasets: { label; values: number[]; xValues?; color? }[] }`; `dateFormat?`; `hierarchy?`; `showStats?`; `showProcess?`; `statFunction?`. |
| `flow` | `title?`; `nodes: { id; label; x; y; shape?: "rect"\|"diamond"\|"circle"; color? }[]`; `edges: { id; fromId; toId; label? }[]`. |
| `math` | `title?`; `functions: { id; expression; label?; color? }[]`; `xMin`; `xMax`; `yMin?`; `yMax?`; `samples?` (def 400); `showGrid?`; `showLegend?`. |
| `shape` | `title?`; `collection: "basica"\|"fisica"\|"electrica"\|"logica"\|"matematica"`; `canvasWidth?` (def 800); `canvasHeight?` (def 500); `items: ShapeItem[]`; `connectors?: ShapeConnector[]`. |
| `image` | `url: string`; `alt: string` (TTS/accesibilidad); `caption?: string`; `width?: "small"\|"medium"\|"full"`. |

Subtipos: `ShapeItem = { id; shapeId; x; y; label?; rotation?; color? }`;
`ShapeConnector = { id; fromId; toId; label?; style?: "solid"\|"dashed"\|"arrow" }`.

`chartType` ∈ `bar, line, pie, scatter, area, bar-stacked, bar-grouped, area-stacked, histogram,
radar, polar, boxplot, timeseries, treemap, sankey, pyramid`.

`blocks/utils.ts`: `serializeBlockDocument`, `deserializeBlockDocument` (valida `version===1` y
`blocks` array), `createEmptyBlockDocument`.

### Editores (`blocks/editors/`)

Cada editor recibe `{ block, onUpdate }` (excepto `ShapeBlockEditor` → `{ block, onChange }`, y
`ChartBlockEditor` que además recibe `doc`). Exportados desde `editors/index.ts`. Varios traen una
variante **Inline** que se renderiza dentro del canvas v2.

| Editor | Edita | Controles clave |
|---|---|---|
| `TextBlockEditor` | `text` | Placeholder: la edición real es un `<textarea>` en el canvas v2 (`CanvasBlockContent`). |
| `LatexBlockEditor` | `latex` | Checkbox `displayMode`. `InlineLatexEditor`: input de fórmula + preview KaTeX (error en rojo si falla). |
| `TableBlockEditor` | `table` | `title` + "+ Fila"/"+ Columna". `InlineTableEditor`: tabla editable + **barra de fórmulas (fx)**: si el valor empieza con `=` lo guarda en `block.formulas[clave]`, si no en `rows`. Clave de celda = letra de columna + fila (A1, B3…). |
| `ChartBlockEditor` | `chart` | `title`; fuente Manual/Tabla; si Tabla: `sourceTableId` + `xColumn`; si Manual: `labels` (CSV) y por dataset `label`/`values`/`color`. `isMultiSeries` para bar/line/area/stacked/grouped. Exporta `CHART_TYPE_OPTIONS` e `InlineChartTypeToolbar`. |
| `FlowBlockEditor` | `flow` | `title`; lista de **Nodos** (`label` + `shape` ■/◆/●) y **Conexiones** (`fromId`→`toId`); "+ Conexión" deshabilitado con < 2 nodos. |
| `MathBlockEditor` | `math` | `title`; `xMin`/`xMax`/`yMin`/`yMax` (yMin/yMax "auto"); `samples` (10–2000); `showGrid`/`showLegend`; lista de **Funciones** (`expression` + color). |
| `ShapeBlockEditor` | `shape` | Canvas drag-and-drop: paleta por colección, arrastre desde paleta/ítems, modo "Conectar" (clic origen→destino crea `ShapeConnector`), inspector de forma (etiqueta, color, rotar ±90°, eliminar) o de conector (etiqueta, estilo, eliminar). |

### Renderers (`blocks/renderers/`)

Despachados por `BlockRenderer.tsx` (switch sobre `block.type`).

| Renderer | Librería / técnica |
|---|---|
| `TextBlockRenderer` | `marked` (markdown→HTML) + `dompurify`, `dangerouslySetInnerHTML`. |
| `LatexBlockRenderer` | `katex` (`renderToString`, `throwOnError`) + `dompurify`; `displayMode` centra. |
| `TableBlockRenderer` | Sin lib de render; ejecuta `runDSL` (de `tableDSL`) si hay `script` y `evaluate` (de `tableFormulas`) por celda con fórmula; panel "Proceso del script". |
| `ChartBlockRenderer` | `recharts` (Bar/Line/Pie/Area/Scatter/Radar/Composed/Treemap…). Boxplot, sankey y pyramid son **SVG manual**. Usa `statsEngine` para paneles de estadística. |
| `FlowBlockRenderer` | **SVG plano manual** (no usa `@xyflow/react`). Dibuja nodos (rect/diamond/circle) y edges con flecha. |
| `MathBlockRenderer` | `mathjs` (`evaluate(expr, { x })`) para muestrear + `recharts` LineChart. Filtra discontinuidades (\|y\|>1000→null), dominio Y por percentil 5–95. |
| `ShapeBlockRenderer` | SVG manual + SVG embebido de cada forma (`shape.svg`); capa SVG para conectores. |

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

**Página** (`v2/BlockEditorPage.tsx`): layout de 3 columnas — sidebar de bloques (reordenable con
`@dnd-kit`: `DndContext`/`SortableContext`/`useSortable`), canvas central (bloques apilados, botones
"+" entre bloques, toolbar por bloque: subir/bajar/duplicar/eliminar) e inspector derecho. Soporta el
bloque `image` con editor inline (URL, alt, caption, tamaño). Carga el documento por prioridad: prop
`initialDocument` → `sessionStorage` (`block-doc:${sskey}`, p. ej. desde `ModuloEditor`) → `:id` de
ruta (API) → vacío. **File System Access API** (abrir/guardar local) + importar/exportar JSON +
guardar API. Atajos: Ctrl+Z/Y/S, Escape, Delete, flechas.

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

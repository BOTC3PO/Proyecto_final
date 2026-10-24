# Editor de libros

| | |
|---|---|
| **Estado** | Vigente |
| **Audiencia** | Devs + docentes |
| **Última actualización** | 2026-07-08 (PLAN-P §3) |
| **Fuente de verdad** | `apps/web/src/bookEditor/`, `apps/web/src/domain/book/`, `api/src/routes/libros.ts` |

> Editor de bloques de contenido (texto, LaTeX, tabla, chart…), su arquitectura interna (reducer,
> servicios, migraciones) y la frontera con `VisualizerRenderer` están en
> [`frontend/editor-bloques.md`](./frontend/editor-bloques.md), que **extiende** este documento. Acá
> vive el modelo `Book`, el contrato `/api/libros`, el uso del editor y el lector.

## Uso rápido

- Ruta: `/editor[/:id]` (router principal). Crear, editar y previsualizar un libro desde el navegador.
- El editor guarda un borrador en `localStorage` bajo la clave `bookEditor:draft` además del guardado
  explícito.
- Alternás entre **Editar** y **Vista previa**, validás el JSON actual (ver [Validación](#validación))
  y abrís el modal de edición JSON ("Ver JSON").

## Modelo de datos (`domain/book/book.types.ts`)

Un `Book` sigue el esquema `book.pages@1.0` o `book.pages@1.1` (v1.1 agrega `theme` a `metadata`,
migrado automáticamente — ver [Migración](#migración-schema-10--11)):

```ts
type Book = {
  schema: "book.pages@1.0" | "book.pages@1.1";
  metadata: {
    id: string; title: string; subtitle?: string; language?: string; difficulty?: number;
    paper_color?: string; text_color?: string; // legacy, ver migración
    theme?: { paperColor?; textColor?; fontFamily?; baseFontSizePx?; lineHeight? }; // v1.1+
  };
  structure?: {
    pageNumbering?: { startAt?: number };
    index?: Array<{ id: string; title: string; pageStart: number; anchor: string }>; // TOC
  };
  assets?: BookAsset[];       // { id, name, mimeType, dataUrl, width?, height? }
  pages: Page[];
  notes?: BookNote[];         // { id, term, content, pages?: string[] } — glosario/aclaraciones
  glossary?: any[];
  references?: any[];
};

type Page = {
  id: string; number: number; title?: string;
  anchors?: Array<{ id: string; label?: string }>;   // anclas internas de la página
  content: Block[];
  notesLinked?: string[];
  meta?: { chapterId?: string; estimatedReadingSeconds?: number };
};
```

### Bloques de página

Los bloques de **página** de un libro son un tipo distinto (y más chico) que los "bloques de
contenido" de `blocks/` (ver [`frontend/editor-bloques.md`](./frontend/editor-bloques.md#tipos-de-bloque-blockstypets) — no comparten `types.ts`):

- `heading`: `level` (1-6), `text`, `blockStyle?`, `textStyle?`.
- `paragraph`: `text?` o `runs?: TextRun[]` (texto con estilo por tramo: `bold/italic/underline/
  superscript/subscript/color/fontFamily/fontSizePx`), `blockStyle?`.
- `image`: `assetId` (referencia a `Book.assets`, no una URL directa), `caption?`.
- `divider`: separador horizontal, `color?` opcional.
- `pageBreak`: salto de página.

### TOC y anclas — cómo se relacionan

El índice (`structure.index`) referencia una posición exacta con `anchor: "pageId:anchorId"`. Esa
ancla debe existir en `pages[].anchors[].id` de la página `pageId`. `validateBook` (ver
[Validación](#validación)) chequea las tres condiciones: formato `pageId:anchorId` válido, la página
existe, y el ancla existe dentro de esa página — un TOC roto no bloquea el guardado, sólo se reporta.

### Migración schema 1.0 → 1.1

`migrateToV11ForEditor` (`bookEditor/services/migrate.ts:53-59`), corre en cascada al importar/abrir
un libro (`importExport.ts:10`, `BookEditorPage.tsx:1165,1639`, `BookReaderOverlay.tsx:47`):

1. `migrateSchema` — bump `"book.pages@1.0"` → `"book.pages@1.1"` (no-op si ya es 1.1).
2. `ensureTheme` — consolida `metadata.theme`, con fallback a los campos legacy planos
   `paper_color`/`text_color`, y defaults (`serif`, 18px, `lineHeight` 1.6) para lo que falte.
3. `normalizeParagraphsToRuns` — todo `paragraph` sin `runs` pasa su `text` plano a
   `runs: [{ text }]`; los bloques ya migrados quedan intactos.

### Ejemplo mínimo

```json
{
  "schema": "book.pages@1.1",
  "metadata": {
    "id": "book-draft",
    "title": "Nuevo libro",
    "language": "es",
    "theme": { "paperColor": "#E0C9A6", "textColor": "#2B2B2B", "fontFamily": "serif", "baseFontSizePx": 18, "lineHeight": 1.6 }
  },
  "pages": [
    {
      "id": "p001",
      "number": 1,
      "title": "Página 1",
      "anchors": [{ "id": "intro", "label": "Introducción" }],
      "content": [
        { "type": "heading", "id": "p001_h1_001", "level": 1, "text": "Título" },
        { "type": "paragraph", "id": "p001_par_001", "runs": [{ "text": "Escribí acá…" }] }
      ]
    }
  ],
  "structure": { "index": [{ "id": "toc1", "title": "Introducción", "pageStart": 1, "anchor": "p001:intro" }] }
}
```

## El editor (`BookEditorPage.tsx`)

Toolbar (izquierda→derecha): **Deshacer/Rehacer** · **Guardar** (servidor, `POST /api/libros`) ·
**Local** (archivo local, Ctrl+S, vía File System Access API) · **Abrir** (archivo local) ·
**Importar** (JSON, con migración+`ensureUniqueIds` automáticos) · **↓ JSON** (exportar/descargar) ·
**PC/Móvil** (toggle de ancho del lienzo) · **Índice** (editor de TOC) · **Imágenes** (gestor de
`assets`) · **Mis documentos** (biblioteca, ver abajo) · **{ }** ("Ver JSON", modal de inspección).
"Guardar" y "Local" son **dos guardados distintos y no sincronizados**: "Guardar" persiste en la API
(`Libro` en DB), "Local" escribe un archivo en disco — no confundir uno con el otro al recuperar
trabajo.

### Biblioteca ("Mis documentos")

El modal "Mis documentos" lista libros vía `GET /api/libros?q&page&pageSize&owner&visibility`
(paginado, filtro por texto, por dueño `mias`/`otros`/`todas`, por visibilidad
`privado`/`escuela`/`publica`/`todas`) — ver [Guardado y scoping](#guardado-y-scoping-backend).

### Imágenes

El gestor de `assets` sube imágenes como **`dataUrl` embebido en el propio JSON del libro** (`BookAsset
{ id, name, mimeType, dataUrl, width?, height? }`) — no hay upload a `/api/media` acá (a diferencia de
audio/video/pdf de `blocks/`, que sí suben a `/api/media/upload`). Un bloque `image` de página
referencia el asset por `assetId`, nunca por URL directa.

### Validación

`validateBook(book): Issue[]` (`bookEditor/services/validate.ts`), `level: "error"|"warn"`, **no
bloquea el guardado, sólo reporta** (`ValidationReport`, consumido vía `runValidation` en
`useBookEditor`). Chequea exactamente:

1. IDs de página únicos.
2. IDs de bloque únicos (dentro de toda la misma página).
3. Todo bloque tiene `id`.
4. Cada entrada de `structure.index` tiene un `anchor` con formato `pageId:anchorId` válido, la
   página existe, y el ancla existe en esa página (ver [TOC y anclas](#toc-y-anclas--cómo-se-relacionan)).

### Atajos y PC/Móvil

Ctrl+Z/Ctrl+Y (undo/redo, `MAX_HISTORY=30`, snapshots del `Book` completo), Ctrl+S (guardar archivo
local). El toggle **PC/Móvil** cambia el `max-width` del lienzo de edición (no es un preview real de
dispositivo, sólo acota el ancho para simular el layout angosto).

## El lector (`BookReader.tsx` / `BookReaderOverlay.tsx`)

`BookReader` renderiza sólo lectura: `heading`/`paragraph`/`divider`/`pageBreak`/`image`, numerando
páginas desde `structure.pageNumbering.startAt`. `BookReaderOverlay` lo monta como overlay encima de
otra pantalla (por id, sin navegar) — es lo que usa `TheoryItemCard.tsx` cuando un ítem de teoría del
módulo es de tipo **"Libro"** (`item.detail` = id del libro; si en cambio es una URL externa o una ruta
interna, `TheoryItemCard` linkea directo en vez de abrir el overlay — comportamiento legacy que se
conserva, ver [`modulos.md`](./modulos.md#theoryitems)).

## Guardado y scoping (backend)

- **Modelo**: `Libro` (`schema.prisma`, tabla `libros`) — `id`, `json` (el `Book` serializado como
  string), `updatedAt`, `ownerUserId?`, `visibility` (default `"privado"`, o `"escuela"`), `schoolId?`,
  y provenance de clonado (`clonedFromId/clonedFromTitle/clonedFromOwnerUserId`). Índices
  `[ownerUserId]` y `[schoolId, visibility]`.
- Existe un modelo **`LibroJson`** (tabla `libros_json`) separado, más viejo — **ningún código de
  `api/src` ni `apps/web/src` lo lee o escribe hoy** (confirmado por grep de `prisma.libroJson`); es
  esquema muerto de un diseño de persistencia anterior, no lo use como referencia.
- **Sin versionado real**: no hay una tabla `LibroVersion`. "Versionar" un libro es re-`POST` al mismo
  `id` (sobrescribe `Libro.json` + `updatedAt`), salvo que dispare copy-on-write (ver abajo). A
  diferencia de `Material`/`Quiz`, que sí tienen historial de versiones — si se integra `Libro` a
  `Material` en el futuro (lo que PLAN-G3 §3.3 dejó abierto), ahí sí ganaría versionado real.
- **Copy-on-write al compartir**: si el `POST /api/libros` intenta sobrescribir un libro que el
  usuario puede leer pero no editar (compartido, no propio), en vez de devolver 403 el servidor
  **clona** el libro (nuevo `id`, provenance seteada) y aplica el cambio sobre el clon — el original
  no se toca. `visibility` del body sólo se respeta al crear; en un overwrite se ignora (usar
  `PATCH /api/libros/:id/visibility` para cambiarla explícitamente).
- **Rutas** (`api/src/routes/libros.ts`): `POST /api/libros` (crear o sobrescribir con
  copy-on-write), `POST /api/libros/:id/duplicar` (duplicar explícito, agrega " (copia)" al título),
  `GET /api/libros` (listado paginado/buscable — "Mis documentos"), `GET /api/libros/:id` (uno,
  incluye `ownerUserId`/`visibility`/`schoolId`/`clonedFrom`), `PATCH /api/libros/:id/visibility`
  (sólo dueño/admin; pasar a `"escuela"` requiere que el usuario tenga `schoolId`).
- **Dónde se consume un libro**: teoría de un módulo (ítem tipo "Libro", overlay de lectura — ver
  arriba), listado combinado de `GET /api/materiales` (aparece como `tipo: "libro"` junto a módulos y
  materiales guardados).

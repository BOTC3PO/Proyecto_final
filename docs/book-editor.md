# Editor de libros

## Uso rápido

- Ruta: `/editor` (en el router principal).  
  Permite crear, editar y previsualizar un libro desde el navegador.
- El editor guarda un borrador en `localStorage` bajo la clave `bookEditor:draft`.
- Podés alternar entre **Editar** y **Vista previa**, validar el JSON actual y abrir el modal de edición JSON.

## Estructura de datos

El editor trabaja con un objeto `Book` que sigue los esquemas `book.pages@1.0` y `book.pages@1.1`. La versión 1.1 agrega el bloque `theme` dentro de `metadata`.

### Book

- `schema`: versión del esquema (`book.pages@1.0` o `book.pages@1.1`).
- `metadata`: metadatos del libro (id, título, idioma, dificultad y tema).
- `structure`: configuración opcional (numeración y tabla de contenido).
- `assets`: lista de recursos (imágenes u otros).
- `pages`: arreglo de páginas del libro.
- `notes`, `glossary`, `references`: colecciones auxiliares opcionales.

### Page

- `id`: identificador único.
- `number`: número de página visible.
- `title`: título opcional.
- `anchors`: anclas internas para navegación.
- `content`: lista de bloques (`Block`).
- `notesLinked` / `meta`: campos opcionales para notas y metadatos de lectura.

### Block

Los bloques representan el contenido de cada página y pueden ser:

- `heading`: encabezado con `level`, texto y estilos.
- `paragraph`: texto con `text` o `runs` de estilo.
- `image`: referencia a un `assetId` con `caption` opcional.
- `divider`: separador horizontal.
- `pageBreak`: salto de página.

### Ejemplo mínimo

```json
{
  "schema": "book.pages@1.1",
  "metadata": {
    "id": "book-draft",
    "title": "Nuevo libro",
    "language": "es",
    "theme": {
      "paperColor": "#E0C9A6",
      "textColor": "#2B2B2B",
      "fontFamily": "serif",
      "baseFontSizePx": 18,
      "lineHeight": 1.6
    }
  },
  "pages": [
    {
      "id": "p001",
      "number": 1,
      "title": "Página 1",
      "content": [
        {
          "type": "heading",
          "id": "p001_h1_001",
          "level": 1,
          "text": "Título"
        },
        {
          "type": "paragraph",
          "id": "p001_par_001",
          "text": "Escribí acá…"
        }
      ]
    }
  ]
}
```

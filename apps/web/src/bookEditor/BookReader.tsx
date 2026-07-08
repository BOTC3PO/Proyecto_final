import type { Block, Book, Page } from "../domain/book/book.types";

// SEC-LIBRO — lector read-only que se usa cuando el viewer no
// puede editar el libro (alumno, profe ajeno, o user que no es
// staff de la escuela dueña). Defensa en profundidad: el back ya
// bloquea la edición no autorizada (403 en POST /api/libros), pero
// la UX correcta es no mostrar el editor.
//
// Diseño:
//  - Respeta el ORDEN de páginas (iterando `book.pages` tal como
//    el editor las almacena) y de bloques (iterando `page.content`
//    en orden de array, mismo orden que el editor).
//  - Aplica el tema visual del libro (paperColor, textColor,
//    fontFamily, baseFontSizePx, lineHeight) y los estilos por
//    bloque (textStyle, blockStyle) — el alumno ve el libro tal
//    como lo dejó el autor.
//  - Renderiza los mismos tipos de bloque que el editor: heading,
//    paragraph, image, divider, pageBreak. Sin interacción.
//
// Nota sobre "menos la consigna": en este proyecto la consigna del
// alumno (lo que responde) no vive dentro del Libro — vive en el
// quiz asociado al módulo (modelo Quiz/QuizAttempt, separado). El
// libro solo contiene teoría (heading/paragraph/image/divider/
// pageBreak), así que para el lector "todo el libro es solo
// lectura". Cuando aparezca un tipo de bloque interactivo dentro
// del libro habría que distinguirlo acá.

function renderBlock(block: Block, book: Book) {
  const theme = book.metadata.theme ?? {};
  const textColor = theme.textColor ?? "#000000";
  const baseFontSize = theme.baseFontSizePx ?? 18;
  const fontFamily = theme.fontFamily ?? "serif";
  const lineHeight = theme.lineHeight ?? 1.6;

  switch (block.type) {
    case "heading": {
      const sizeFactor: Record<number, number> = {
        1: 2.0, 2: 1.6, 3: 1.3, 4: 1.1, 5: 1.0, 6: 0.9,
      };
      const factor = sizeFactor[block.level] ?? 1;
      const align = block.blockStyle?.align ?? "left";
      const style: React.CSSProperties = {
        fontFamily: block.textStyle?.fontFamily ?? fontFamily,
        fontSize: baseFontSize * factor,
        color: block.textStyle?.color ?? textColor,
        textAlign: align,
        fontWeight: block.textStyle?.bold !== false ? "bold" : "normal",
        fontStyle: block.textStyle?.italic ? "italic" : "normal",
        lineHeight: 1.2,
      };
      // Tag semántico según el nivel del heading (h1-h6) para
      // que los lectores de pantalla naveguen bien el documento.
      const Tag = (`h${block.level}` as unknown) as keyof React.JSX.IntrinsicElements;
      return <Tag style={style}>{block.text}</Tag>;
    }

    case "paragraph": {
      const text =
        block.text ?? (block.runs ?? []).map((r) => r.text).join("");
      const run0 = block.runs?.[0];
      const align = block.blockStyle?.align ?? "left";
      const indentPx = block.blockStyle?.indentFirstLinePx ?? 0;
      const style: React.CSSProperties = {
        fontFamily: run0?.style?.fontFamily ?? fontFamily,
        fontSize: run0?.style?.fontSizePx ?? baseFontSize,
        color: run0?.style?.color ?? textColor,
        textAlign: align,
        textIndent: indentPx ? `${indentPx}px` : undefined,
        lineHeight,
        fontWeight: run0?.style?.bold ? "bold" : "normal",
        fontStyle: run0?.style?.italic ? "italic" : "normal",
        whiteSpace: "pre-wrap",
      };
      return <p style={style}>{text}</p>;
    }

    case "image": {
      const asset = (book.assets ?? []).find((a) => a.id === block.assetId);
      const align = block.blockStyle?.align ?? "center";
      const justify: Record<string, React.CSSProperties["alignItems"]> = {
        left: "flex-start",
        center: "center",
        right: "flex-end",
        justify: "center",
      };
      const imageLabel = block.caption
        ? `Imagen: ${block.caption}`
        : asset?.name
          ? `Imagen: ${asset.name}`
          : `Imagen con recurso ${block.assetId}`;
      return (
        <figure
          className="flex flex-col gap-2"
          style={{ alignItems: justify[align] ?? "center" }}
        >
          {asset?.dataUrl ? (
            <img
              src={asset.dataUrl}
              alt={imageLabel}
              className="max-w-full max-h-96 rounded shadow"
            />
          ) : (
            <div
              className="rounded-md border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-xs text-gray-500"
              role="img"
              aria-label={imageLabel}
            >
              Imagen: {block.assetId}
            </div>
          )}
          {block.caption ? (
            <figcaption
              className="text-xs"
              style={{ color: textColor, opacity: 0.7, fontFamily }}
            >
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    }

    case "divider":
      return <hr style={{ borderColor: block.color ?? "#94a3b8", borderTopWidth: 1 }} />;

    case "pageBreak":
      // En el lector el page break ya está representado por el
      // contenedor de cada página; igual mostramos un separador
      // sutil por si el autor lo usó como recurso visual dentro
      // de una página.
      return <div className="h-px bg-gray-200 my-2" />;

    default:
      return null;
  }
}

function PageView({ page, book }: { page: Page; book: Book }) {
  const theme = book.metadata.theme ?? {};
  const paperColor = theme.paperColor ?? "#FFFFFF";
  const textColor = theme.textColor ?? "#000000";
  const fontFamily = theme.fontFamily ?? "serif";
  const startAt = book.structure?.pageNumbering?.startAt ?? 1;
  const pageNumber = startAt - 1 + page.number;

  return (
    <section
      // PLAN-Q §3.3 — el padding fijo (48px 96px) dejaba ~198px de
      // contenido en un teléfono de 390px (192px se iban en márgenes).
      // Responsive: cómodo en el pulgar en mobile, el aspecto de página
      // "de libro" con márgenes anchos vuelve recién en desktop (lg).
      className="rounded-xl border border-gray-200 mx-auto my-6 flex flex-col px-4 py-6 sm:px-10 sm:py-8 lg:px-24 lg:py-12"
      style={{
        background: paperColor,
        color: textColor,
        fontFamily,
        maxWidth: 1100,
        width: "100%",
        minHeight: 600,
      }}
      aria-label={page.title ?? `Página ${page.number}`}
    >
      <div className="flex-1 space-y-3">
        {page.content.length === 0 ? (
          <p className="text-center italic text-sm opacity-60">
            (Página vacía)
          </p>
        ) : (
          page.content.map((block) => (
            <div key={block.id}>{renderBlock(block, book)}</div>
          ))
        )}
      </div>
      <div
        className="mt-8 pt-3 text-center text-xs select-none"
        style={{ borderTop: `1px solid ${textColor}22`, color: `${textColor}99` }}
      >
        {pageNumber}
      </div>
    </section>
  );
}

export default function BookReader({ book }: { book: Book }) {
  // SEC-LIBRO — render del libro respetando el orden de páginas
  // (`book.pages` ya viene ordenado por el editor; mantiene la
  // semántica del autor). Cabecera con el título del libro arriba.
  return (
    <div
      className="min-h-screen p-4"
      style={{ background: "var(--c-bg)" }}
      data-testid="book-reader"
    >
      <header className="max-w-[1100px] mx-auto mb-4 px-2">
        <p className="text-xs uppercase tracking-wide text-[var(--c-muted)]">
          Libro · solo lectura
        </p>
        <h1 className="text-2xl font-bold text-[var(--c-text)]">
          {book.metadata.title}
        </h1>
        {book.metadata.subtitle ? (
          <p className="text-sm text-[var(--c-muted)] mt-1">
            {book.metadata.subtitle}
          </p>
        ) : null}
      </header>
      <div className="space-y-6">
        {book.pages.map((page) => (
          <PageView key={page.id} page={page} book={book} />
        ))}
      </div>
    </div>
  );
}

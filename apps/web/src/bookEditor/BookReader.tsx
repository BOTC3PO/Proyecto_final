import type { Block, Book } from "../domain/book/book.types";

const renderBlock = (block: Block) => {
  switch (block.type) {
    case "heading":
      return (
        <h3
          className={`font-semibold ${
            block.level === 1 ? "text-2xl" : block.level === 2 ? "text-xl" : "text-lg"
          }`}
          style={{ color: block.textStyle?.color }}
        >
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-sm text-gray-700">
          {block.text ?? block.runs?.map((run) => run.text).join("")}
        </p>
      );
    case "divider":
      return <hr style={{ borderColor: block.color ?? "#e5e7eb" }} />;
    case "pageBreak":
      return <div className="h-px bg-gray-200 my-4" />;
    case "image": {
      const imageLabel = block.caption
        ? `Imagen: ${block.caption}`
        : `Imagen con recurso ${block.assetId}`;
      return (
        <figure className="space-y-2">
          <div
            className="rounded-md border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-xs text-gray-500"
            role="img"
            aria-label={imageLabel}
          >
            Imagen: {block.assetId}
          </div>
          {block.caption ? <figcaption className="text-xs text-gray-500">{block.caption}</figcaption> : null}
        </figure>
      );
    }
    default:
      return null;
  }
};

export default function BookReader({ book }: { book: Book }) {
  const startAt = book.structure?.pageNumbering?.startAt ?? 1;
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="text-xs uppercase text-gray-500">Libro</p>
        <h2 className="text-lg font-semibold">{book.metadata.title}</h2>
      </header>
      <div className="space-y-6">
        {book.pages.map((page) => {
          const pageNum = (startAt - 1) + page.number;
          return (
            <section key={page.id} className="rounded-lg border border-gray-200 bg-white p-4 space-y-3 flex flex-col">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{page.title ?? `Página ${page.number}`}</span>
              </div>
              <div className="flex-1 space-y-3">
                {page.content.map((block) => (
                  <div key={block.id}>{renderBlock(block)}</div>
                ))}
              </div>
              <div className="mt-4 pt-2 text-center text-xs text-gray-400 border-t border-gray-100">
                {pageNum}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

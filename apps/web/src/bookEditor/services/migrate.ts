import type { Book } from "../../domain/book/book.types";

function ensureTheme(book: Book): Book {
  const paper = book.metadata.theme?.paperColor ?? book.metadata.paper_color ?? "#F5F1E6";
  const text  = book.metadata.theme?.textColor  ?? book.metadata.text_color  ?? "#1B1B1B";

  return {
    ...book,
    metadata: {
      ...book.metadata,
      theme: {
        paperColor: paper,
        textColor: text,
        fontFamily: book.metadata.theme?.fontFamily ?? "serif",
        baseFontSizePx: book.metadata.theme?.baseFontSizePx ?? 18,
        lineHeight: book.metadata.theme?.lineHeight ?? 1.6,
      },
    },
  };
}

function migrateSchema(book: Book): Book {
  if (book.schema === "book.pages@1.1") return book;
  if (book.schema !== "book.pages@1.0") return book; // por si aparece otra cosa

  return {
    ...book,
    schema: "book.pages@1.1",
  };
}

function normalizeParagraphsToRuns(book: Book): Book {
  return {
    ...book,
    pages: book.pages.map((p) => ({
      ...p,
      content: p.content.map((b: any) => {
        if (b.type !== "paragraph") return b;
        // si ya tiene runs, no tocar
        if (Array.isArray(b.runs)) return b;

        const text = typeof b.text === "string" ? b.text : "";
        return {
          ...b,
          // conservar b.text por compatibilidad si querés, pero para el editor conviene runs
          runs: [{ text }],
        };
      }),
    })),
  };
}

export function migrateToV11ForEditor(input: Book): Book {
  // Orden intencional
  let b = migrateSchema(input);
  b = ensureTheme(b);
  b = normalizeParagraphsToRuns(b);
  return b;
}

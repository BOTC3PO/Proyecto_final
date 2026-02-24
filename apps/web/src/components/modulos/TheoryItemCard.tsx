import { Link } from "react-router-dom";
import { detailToSlides } from "./TheorySlideEditor";

// All supported theory item types (old English + new Spanish + catch-all string)
export type TheoryItemType = string;

export type TheoryItem = {
  id: string;
  title: string;
  type: TheoryItemType;
  detail: string;
};

type TheoryItemCardProps = {
  item: TheoryItem;
  actionLabel?: string;
};

// Maps type values → display label (supports old English and new Spanish)
function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    // Spanish (new)
    Libro: "Libro",
    Enlace: "Enlace",
    Texto: "Texto",
    Presentación: "Presentación",
    Video: "Video",
    Documento: "Documento",
    TuesdayJS: "TuesdayJS",
    Nota: "Nota",
    Artículo: "Artículo",
    // English (backwards compat)
    book: "Libro",
    link: "Enlace",
    note: "Nota",
    article: "Artículo",
  };
  return labels[type] ?? type;
}

const isBookType = (t: string) => t === "book" || t === "Libro";
const isLinkType = (t: string) => t === "link" || t === "Enlace";
const isNoteType = (t: string) =>
  t === "note" || t === "Nota" || t === "Texto" || t === "article" || t === "Artículo" || t === "Documento";
const isPresentationType = (t: string) => t === "Presentación";
const isTuesdayType = (t: string) => t === "TuesdayJS";

const isExternalUrl = (v: string) => v.startsWith("http://") || v.startsWith("https://");
const isInternalLink = (v: string) => v.startsWith("/");

export default function TheoryItemCard({ item, actionLabel }: TheoryItemCardProps) {
  const typeLabel = getTypeLabel(item.type);

  // --- Presentation type ---
  if (isPresentationType(item.type)) {
    const slides = detailToSlides(item.detail);
    return (
      <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-wide text-gray-400">{typeLabel}</p>
        <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
        <p className="mt-1 text-xs text-gray-500">
          {slides.length === 0
            ? "Sin diapositivas"
            : `${slides.length} diapositiva${slides.length !== 1 ? "s" : ""}`}
        </p>
        {slides.length > 0 && slides[0].body ? (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{slides[0].body}</p>
        ) : null}
      </article>
    );
  }

  // --- Book type ---
  if (isBookType(item.type)) {
    // detail is a book ID → internal link to /editor/:id
    const bookId = item.detail;
    const hasBookId = Boolean(bookId && !isExternalUrl(bookId) && !isInternalLink(bookId));
    const href = hasBookId ? `/editor/${bookId}` : isInternalLink(bookId) ? bookId : undefined;
    const externalHref = isExternalUrl(bookId) ? bookId : undefined;
    const label = actionLabel ?? "Abrir libro";

    return (
      <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">{typeLabel}</p>
            <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
          </div>
          {href ? (
            <Link className="text-xs font-medium text-blue-600 hover:underline" to={href}>
              {label}
            </Link>
          ) : externalHref ? (
            <a
              className="text-xs font-medium text-blue-600 hover:underline"
              href={externalHref}
              target="_blank"
              rel="noreferrer"
            >
              {label}
            </a>
          ) : null}
        </div>
        {bookId ? (
          <p className="mt-2 text-xs text-gray-400 break-all">{bookId}</p>
        ) : null}
      </article>
    );
  }

  // --- TuesdayJS type ---
  if (isTuesdayType(item.type)) {
    const docId = item.detail;
    return (
      <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">{typeLabel}</p>
            <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
          </div>
        </div>
        {docId ? (
          <p className="mt-2 text-xs text-gray-400 break-all">ID: {docId}</p>
        ) : null}
      </article>
    );
  }

  // --- Link / Enlace type ---
  if (isLinkType(item.type)) {
    const label = actionLabel ?? "Abrir enlace";
    return (
      <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">{typeLabel}</p>
            <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
          </div>
          {item.detail ? (
            isInternalLink(item.detail) ? (
              <Link className="text-xs font-medium text-blue-600 hover:underline" to={item.detail}>
                {label}
              </Link>
            ) : (
              <a
                className="text-xs font-medium text-blue-600 hover:underline"
                href={item.detail}
                target="_blank"
                rel="noreferrer"
              >
                {label}
              </a>
            )
          ) : null}
        </div>
        {item.detail ? (
          <p className="mt-2 text-xs text-gray-500 break-all">{item.detail}</p>
        ) : null}
      </article>
    );
  }

  // --- Note / Text / Article / Video / fallback ---
  const isTextContent = isNoteType(item.type) || item.type === "Video";
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-gray-400">{typeLabel}</p>
      <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
      {isTextContent && item.detail ? (
        <p className="mt-2 text-sm text-gray-600 whitespace-pre-wrap">{item.detail}</p>
      ) : null}
    </article>
  );
}

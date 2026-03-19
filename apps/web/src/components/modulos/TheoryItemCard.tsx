import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Wrench } from "lucide-react";
import { detailToPresentation } from "./TheorySlideEditor";
import SlidePresenter from "./SlidePresenter";
import { BlockRenderer } from "../../blocks/BlockRenderer";
import { deserializeBlockDocument } from "../../blocks/utils";

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
    Herramienta: "Herramienta interactiva",
    HerramientaStandalone: "Herramienta standalone",
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
const isHerramientaType = (t: string) => t === "Herramienta";
const isHerramientaStandaloneType = (t: string) => t === "HerramientaStandalone";

const isExternalUrl = (v: string) => v.startsWith("http://") || v.startsWith("https://");
const isInternalLink = (v: string) => v.startsWith("/");

export default function TheoryItemCard({ item, actionLabel }: TheoryItemCardProps) {
  const typeLabel = getTypeLabel(item.type);
  const [presenterOpen, setPresenterOpen] = useState(false);

  // --- Herramienta standalone (placeholder) ---
  if (isHerramientaStandaloneType(item.type)) {
    return (
      <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-xs uppercase tracking-wide text-slate-400">{typeLabel}</p>
          <h4 className="ml-auto text-sm font-semibold text-slate-800">{item.title}</h4>
        </div>
        <div className="flex flex-col items-center gap-2 py-4 text-slate-400">
          <Wrench size={24} className="opacity-40" />
          <span className="text-sm">Herramienta no disponible aún</span>
        </div>
      </article>
    );
  }

  // --- Herramienta interactiva ---
  if (isHerramientaType(item.type)) {
    const doc = deserializeBlockDocument(item.detail);
    return (
      <article className="rounded-lg border border-blue-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 border-b border-blue-200">
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            {typeLabel}
          </span>
          <h4 className="ml-auto text-sm font-semibold text-slate-800">{item.title}</h4>
        </div>
        <div className="p-4">
          <BlockRenderer doc={doc} />
        </div>
      </article>
    );
  }

  // --- Presentation type ---
  if (isPresentationType(item.type)) {
    const { slides, theme, accentColor } = detailToPresentation(item.detail);
    const firstSlide = slides[0];
    return (
      <>
        {presenterOpen && slides.length > 0 ? (
          <SlidePresenter
            slides={slides}
            theme={theme}
            accentColor={accentColor}
            title={item.title}
            onClose={() => setPresenterOpen(false)}
          />
        ) : null}
        <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-gray-400">{typeLabel}</p>
              <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
              <p className="mt-1 text-xs text-gray-500">
                {slides.length === 0
                  ? "Sin diapositivas"
                  : `${slides.length} diapositiva${slides.length !== 1 ? "s" : ""}`}
              </p>
              {firstSlide?.body ? (
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{firstSlide.body}</p>
              ) : null}
            </div>
            {slides.length > 0 ? (
              <button
                type="button"
                className="flex-shrink-0 flex items-center gap-1.5 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700"
                onClick={() => setPresenterOpen(true)}
              >
                <Play size={12} />
                Presentar
              </button>
            ) : null}
          </div>
        </article>
      </>
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


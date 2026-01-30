import { Link } from "react-router-dom";

export type TheoryItemType = "book" | "link" | "note" | "article";

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

const typeLabels: Record<TheoryItemType, string> = {
  book: "Libro",
  link: "Enlace",
  note: "Nota",
  article: "Artículo",
};

const isInternalLink = (value: string) => value.startsWith("/");

export default function TheoryItemCard({ item, actionLabel }: TheoryItemCardProps) {
  const actionText = actionLabel ?? (item.type === "book" ? "Abrir libro" : "Abrir enlace");

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">{typeLabels[item.type]}</p>
          <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
        </div>
        {(item.type === "book" || item.type === "link") && item.detail ? (
          isInternalLink(item.detail) ? (
            <Link className="text-xs font-medium text-blue-600 hover:underline" to={item.detail}>
              {actionText}
            </Link>
          ) : (
            <a
              className="text-xs font-medium text-blue-600 hover:underline"
              href={item.detail}
              target="_blank"
              rel="noreferrer"
            >
              {actionText}
            </a>
          )
        ) : null}
      </div>
      {item.detail && (item.type === "note" || item.type === "article") ? (
        <p className="mt-2 text-sm text-gray-600 whitespace-pre-wrap">{item.detail}</p>
      ) : null}
      {item.detail && (item.type === "book" || item.type === "link") ? (
        <p className="mt-2 text-xs text-gray-500 break-all">{item.detail}</p>
      ) : null}
    </article>
  );
}

import type { PdfBlock } from "../types"

interface Props {
  block: PdfBlock
}

export function PdfBlockRenderer({ block }: Props) {
  if (!block.url) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-dashed border-[var(--c-border)] bg-[var(--c-bg)] p-3 text-xs text-[var(--c-muted)]">
        <span aria-hidden="true">📄</span>
        <span>Sin PDF cargado</span>
      </div>
    )
  }
  return (
    <figure className="space-y-1">
      <div className="rounded-lg border border-[var(--c-border)] overflow-hidden bg-[var(--c-surface)]">
        <div className="flex items-center justify-between gap-2 border-b border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2 text-xs">
          <span className="font-medium text-[var(--c-text)] truncate">
            📄 {block.title || "Documento PDF"}
          </span>
          <a
            href={block.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--c-primary)] underline whitespace-nowrap"
          >
            Abrir / descargar
          </a>
        </div>
        <iframe
          src={block.url}
          title={block.title || "Documento PDF"}
          className="w-full"
          style={{ height: "min(70vh, 600px)", border: 0 }}
        />
      </div>
      {block.caption && (
        <figcaption className="text-xs text-[var(--c-muted)] italic">
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}

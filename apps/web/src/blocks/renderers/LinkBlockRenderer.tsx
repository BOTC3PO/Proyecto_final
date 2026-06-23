import type { LinkBlock } from "../types"

interface Props {
  block: LinkBlock
}

export function LinkBlockRenderer({ block }: Props) {
  if (!block.url || !block.title) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-dashed border-[var(--c-border)] bg-[var(--c-bg)] p-3 text-xs text-[var(--c-muted)]">
        <span aria-hidden="true">🔗</span>
        <span>Enlace incompleto (falta URL o título)</span>
      </div>
    )
  }
  return (
    <a
      href={block.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-3 hover:bg-[var(--c-bg)] transition-colors group"
    >
      <div className="flex items-start gap-2">
        <span aria-hidden="true" className="text-lg">🔗</span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[var(--c-primary)] group-hover:underline break-words">
            {block.title}
          </p>
          {block.description && (
            <p className="text-xs text-[var(--c-muted)] mt-0.5 break-words">
              {block.description}
            </p>
          )}
          <p className="text-[10px] text-[var(--c-muted)] mt-1 break-all opacity-70">
            {block.url}
          </p>
        </div>
        <span aria-hidden="true" className="text-xs text-[var(--c-muted)]">↗</span>
      </div>
    </a>
  )
}

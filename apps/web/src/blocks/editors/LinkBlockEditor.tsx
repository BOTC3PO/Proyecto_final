import type { LinkBlock } from "../types"

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-1.5 py-1 focus:outline-none focus:border-[var(--c-primary)]"

export function LinkBlockEditor({
  block,
  onUpdate,
}: {
  block: LinkBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  return (
    <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
        URL *
        <input
          type="url"
          className={inputCls}
          placeholder="https://…"
          value={block.url}
          onChange={(e) => onUpdate({ url: e.target.value })}
          required
        />
      </label>
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
        Título del enlace *
        <input
          type="text"
          className={inputCls}
          placeholder="Texto que verá el alumno"
          value={block.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
          required
        />
      </label>
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
        Descripción
        <input
          type="text"
          className={inputCls}
          placeholder="Opcional"
          value={block.description ?? ""}
          onChange={(e) => onUpdate({ description: e.target.value })}
        />
      </label>
    </div>
  )
}

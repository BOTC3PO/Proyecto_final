import type { PdfBlock } from "../types"
import { MediaUploader } from "./MediaUploader"

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-1.5 py-1 focus:outline-none focus:border-[var(--c-primary)]"

export function PdfBlockEditor({
  block,
  onUpdate,
}: {
  block: PdfBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  return (
    <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
      <MediaUploader
        kind="pdf"
        currentUrl={block.url}
        onUploaded={(url) => onUpdate({ url })}
        showPreview={false}
      />
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
        Título del PDF *
        <input
          type="text"
          className={inputCls}
          placeholder="Ej: Capítulo 3 — Fracciones"
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
          value={block.caption ?? ""}
          onChange={(e) => onUpdate({ caption: e.target.value })}
        />
      </label>
    </div>
  )
}

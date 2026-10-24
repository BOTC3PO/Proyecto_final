import type { AudioBlock } from "../types"
import { MediaUploader } from "./MediaUploader"

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-1.5 py-1 focus:outline-none focus:border-[var(--c-primary)]"

export function AudioBlockEditor({
  block,
  onUpdate,
}: {
  block: AudioBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  return (
    <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
      <MediaUploader
        kind="audio"
        currentUrl={block.url}
        onUploaded={(url, mimeType) => onUpdate({ url, mimeType })}
      />
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
        Descripción (alt) *
        <input
          type="text"
          className={inputCls}
          placeholder="Ej: Audio de pronunciación en inglés"
          value={block.alt}
          onChange={(e) => onUpdate({ alt: e.target.value })}
          required
        />
      </label>
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
        Pie / leyenda
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

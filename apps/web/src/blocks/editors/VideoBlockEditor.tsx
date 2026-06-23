import type { VideoBlock } from "../types"
import { MediaUploader } from "./MediaUploader"

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-1.5 py-1 focus:outline-none focus:border-[var(--c-primary)]"

const YT_RE = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|shorts\/)|youtu\.be\/)/
const VIMEO_RE = /^(https?:\/\/)?(www\.|player\.)?vimeo\.com\//

export function detectVideoProvider(url: string): VideoBlock["provider"] {
  if (!url) return "file"
  if (YT_RE.test(url)) return "youtube"
  if (VIMEO_RE.test(url)) return "vimeo"
  return "file"
}

export function VideoBlockEditor({
  block,
  onUpdate,
}: {
  block: VideoBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  const provider = block.provider ?? detectVideoProvider(block.url)

  const handleUrlChange = (url: string) => {
    onUpdate({ url, provider: detectVideoProvider(url) })
  }

  return (
    <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
      {provider === "file" ? (
        <MediaUploader
          kind="video"
          currentUrl={block.url}
          onUploaded={(url) => onUpdate({ url, provider: "file" })}
        />
      ) : (
        <p className="text-[11px] text-[var(--c-muted)]">
          Proveedor detectado: <strong>{provider}</strong>. Pegá la URL del embed.
        </p>
      )}
      <input
        type="text"
        aria-label="URL del video"
        className={inputCls}
        value={block.url}
        onChange={(e) => handleUrlChange(e.target.value)}
        placeholder={
          provider === "file"
            ? "o pegá una URL directa al archivo de video"
            : provider === "youtube"
            ? "https://www.youtube.com/watch?v=…"
            : "https://vimeo.com/…"
        }
      />
      <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
        Descripción (alt) *
        <input
          type="text"
          className={inputCls}
          placeholder="Describí el video para accesibilidad"
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

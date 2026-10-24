import type { AudioBlock } from "../types"

interface Props {
  block: AudioBlock
}

export function AudioBlockRenderer({ block }: Props) {
  if (!block.url) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-dashed border-[var(--c-border)] bg-[var(--c-bg)] p-3 text-xs text-[var(--c-muted)]">
        <span aria-hidden="true">🎵</span>
        <span>Sin audio cargado</span>
      </div>
    )
  }
  return (
    <figure className="space-y-1">
      <audio
        controls
        preload="none"
        className="w-full"
        aria-label={block.alt || "Audio"}
      >
        <source src={block.url} type={block.mimeType ?? undefined} />
        Tu navegador no soporta el elemento de audio.{" "}
        <a href={block.url} className="underline">
          Descargar audio
        </a>
        .
      </audio>
      {block.caption && (
        <figcaption className="text-xs text-[var(--c-muted)] italic">
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}

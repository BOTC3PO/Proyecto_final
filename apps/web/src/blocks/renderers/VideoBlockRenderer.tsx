import type { VideoBlock } from "../types"

interface Props {
  block: VideoBlock
}

const YT_ID_RE =
  /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/

function toYouTubeEmbed(url: string): string | null {
  const m = url.match(YT_ID_RE)
  if (!m) return null
  return `https://www.youtube.com/embed/${m[1]}`
}

function toVimeoEmbed(url: string): string | null {
  const m = url.match(/vimeo\.com\/(\d+)/)
  if (!m) return null
  return `https://player.vimeo.com/video/${m[1]}`
}

export function VideoBlockRenderer({ block }: Props) {
  if (!block.url) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-dashed border-[var(--c-border)] bg-[var(--c-bg)] p-3 text-xs text-[var(--c-muted)]">
        <span aria-hidden="true">🎬</span>
        <span>Sin video cargado</span>
      </div>
    )
  }

  if (block.provider === "youtube") {
    const embed = toYouTubeEmbed(block.url)
    if (embed) {
      return (
        <figure className="space-y-1">
          <div className="relative w-full overflow-hidden rounded-lg border border-[var(--c-border)]" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={embed}
              title={block.alt || "Video de YouTube"}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
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
  }

  if (block.provider === "vimeo") {
    const embed = toVimeoEmbed(block.url)
    if (embed) {
      return (
        <figure className="space-y-1">
          <div className="relative w-full overflow-hidden rounded-lg border border-[var(--c-border)]" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={embed}
              title={block.alt || "Video de Vimeo"}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
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
  }

  // file (default) — native player
  return (
    <figure className="space-y-1">
      <video
        controls
        preload="none"
        className="w-full rounded-lg border border-[var(--c-border)] bg-black"
        aria-label={block.alt || "Video"}
      >
        <source src={block.url} />
        Tu navegador no soporta el elemento de video.{" "}
        <a href={block.url} className="underline">
          Descargar video
        </a>
        .
      </video>
      {block.caption && (
        <figcaption className="text-xs text-[var(--c-muted)] italic">
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}

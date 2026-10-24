import { useState } from "react"
import type { ImageBlock } from "../types"

interface Props {
  block: ImageBlock
}

const ANCHOS: Record<NonNullable<ImageBlock["width"]>, string> = { small: "16rem", medium: "28rem", full: "100%" }

/** Imagen enlazada por URL (p. ej. del CDN de Wikimedia Commons), con texto alternativo y pie con la atribución. */
export function ImageBlockRenderer({ block }: Props) {
  const [fallo, setFallo] = useState(false)
  const ancho = ANCHOS[block.width ?? "full"]
  return (
    <figure style={{ margin: 0 }}>
      {fallo ? (
        <p className="rounded border border-[var(--c-border)] p-3 text-sm text-[var(--c-muted)]">
          No se pudo cargar la imagen: {block.alt}
        </p>
      ) : (
        <img
          src={block.url}
          alt={block.alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFallo(true)}
          style={{ display: "block", maxWidth: ancho, width: "100%", height: "auto", margin: "0 auto" }}
          className="rounded border border-[var(--c-border)] bg-white"
        />
      )}
      {block.caption && (
        <figcaption className="mt-1 text-center text-xs text-[var(--c-muted)]">{block.caption}</figcaption>
      )}
    </figure>
  )
}

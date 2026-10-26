/**
 * Componente compartido para subir archivos multimedia a `/api/media/upload`.
 * Reusado por los editores de bloques de audio/video/PDF.
 */
import { useRef, useState } from "react"
import { uploadMedia } from "../../lib/mediaApi"

type MediaUploaderKind = "audio" | "video" | "pdf"

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-1.5 py-1 focus:outline-none focus:border-[var(--c-primary)]"

const ACCEPT_BY_KIND: Record<MediaUploaderKind, string> = {
  audio: "audio/*",
  video: "video/*",
  pdf: "application/pdf",
}

const LABEL_BY_KIND: Record<MediaUploaderKind, string> = {
  audio: "audio",
  video: "video",
  pdf: "PDF",
}

interface Props {
  kind: MediaUploaderKind
  currentUrl: string
  onUploaded: (url: string, mimeType?: string) => void
  /** Si true, se muestra un preview simple (audio/video/PDF). */
  showPreview?: boolean
}

export function MediaUploader({ kind, currentUrl, onUploaded, showPreview = true }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onFile = async (file: File | undefined) => {
    if (!file) return
    setError(null)
    setUploading(true)
    try {
      const { url, mimeType } = await uploadMedia(file, kind)
      onUploaded(url, mimeType)
    } catch (e) {
      setError(e instanceof Error ? e.message : `No se pudo subir el ${LABEL_BY_KIND[kind]}`)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-2">
      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPT_BY_KIND[kind]}
        className="hidden"
        onChange={(e) => onFile(e.target.files?.[0])}
      />
      <button
        type="button"
        className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] px-2.5 py-1 text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)] disabled:opacity-50"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        aria-busy={uploading}
      >
        {uploading ? `Subiendo ${LABEL_BY_KIND[kind]}…` : `Subir ${LABEL_BY_KIND[kind]}`}
      </button>
      {error && (
        <p className="text-[11px] text-[var(--c-danger)]" role="alert">
          {error}
        </p>
      )}
      {currentUrl && (
        <input
          type="text"
          aria-label="URL del archivo"
          className={inputCls}
          value={currentUrl}
          onChange={(e) => onUploaded(e.target.value)}
          placeholder="o pegá una URL"
        />
      )}
      {showPreview && currentUrl && (
        <MediaPreview kind={kind} url={currentUrl} />
      )}
    </div>
  )
}

function MediaPreview({ kind, url }: { kind: MediaUploaderKind; url: string }) {
  if (kind === "audio") {
    return (
      <audio controls className="w-full" preload="none">
        <source src={url} />
      </audio>
    )
  }
  if (kind === "video") {
    return (
      <video controls className="w-full max-h-48 rounded" preload="none">
        <source src={url} />
      </video>
    )
  }
  // pdf
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-[var(--c-primary)] underline"
    >
      Abrir PDF en pestaña nueva
    </a>
  )
}

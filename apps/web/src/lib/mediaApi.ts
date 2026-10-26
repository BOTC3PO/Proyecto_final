/**
 * Cliente de subida de archivos multimedia (audio, video, PDF) para
 * los bloques de contenido. Sube los bytes crudos a
 * `POST /api/media/upload` con el `Content-Type` correcto y la
 * cabecera `X-Media-Kind` para que el backend enrute la validación.
 */
import { API_BASE_URL, getAuthToken } from "./api"

export type UploadKind = "audio" | "video" | "pdf" | "image"

const MIME_BY_KIND: Record<UploadKind, string[]> = {
  audio: ["audio/mpeg", "audio/mp3", "audio/ogg", "audio/wav", "audio/x-wav", "audio/webm", "audio/aac", "audio/x-m4a", "audio/mp4"],
  video: ["video/mp4", "video/webm", "video/ogg", "video/quicktime"],
  pdf: ["application/pdf"],
  image: ["image/png", "image/jpeg", "image/webp", "image/gif", "image/svg+xml"],
}

export function isMimeAccepted(kind: UploadKind, mimeType: string): boolean {
  const accepted = MIME_BY_KIND[kind]
  if (accepted.includes(mimeType)) return true
  // Algunos navegadores reportan mime vacío; lo dejamos pasar (el backend
  // vuelve a validar por magic bytes / firma).
  if (!mimeType) return true
  return false
}

export interface UploadResult {
  url: string
  mimeType?: string
}

/**
 * Sube un Blob a `/api/media/upload` con el `kind` indicado. Devuelve
 * la URL servible. El backend valida tipo y tamaño según el kind.
 */
export async function uploadMedia(file: Blob, kind: UploadKind): Promise<UploadResult> {
  if (!isMimeAccepted(kind, file.type)) {
    throw new Error(
      `Tipo de archivo no soportado (${file.type || "desconocido"}). Subí un ${kind} válido.`,
    )
  }
  const token = getAuthToken()
  const res = await fetch(`${API_BASE_URL}/api/media/upload`, {
    method: "POST",
    headers: {
      "Content-Type": file.type || MIME_BY_KIND[kind][0],
      "X-Media-Kind": kind,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: file,
    credentials: "include",
  })
  if (!res.ok) {
    let msg = "No se pudo subir el archivo"
    try {
      const body = (await res.json()) as { error?: string }
      if (body?.error) msg = body.error
    } catch {
      /* deja el mensaje por defecto */
    }
    throw new Error(msg)
  }
  const data = (await res.json()) as { url: string; mimeType?: string }
  return { url: data.url, mimeType: data.mimeType }
}

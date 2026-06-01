/**
 * Cliente de subida de imágenes PNG para el add-on visual del editor VBLang
 * (WO06). Sube los bytes crudos a `POST /api/media/upload` y devuelve la URL
 * que llena `StaticImageSpec.src`.
 */
import { API_BASE_URL, getAuthToken } from "../../lib/api";

export async function uploadPng(file: Blob): Promise<string> {
  const token = getAuthToken();
  const res = await fetch(`${API_BASE_URL}/api/media/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "image/png",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: file,
    credentials: "include",
  });
  if (!res.ok) {
    let msg = "No se pudo subir la imagen";
    try {
      const body = (await res.json()) as { error?: string };
      if (body?.error) msg = body.error;
    } catch {
      /* deja el mensaje por defecto */
    }
    throw new Error(msg);
  }
  const data = (await res.json()) as { url: string };
  return data.url;
}

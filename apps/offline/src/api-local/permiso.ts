/**
 * Permiso sin conexión de una cuenta de la plataforma (ver `api/src/lib/permiso-offline.ts`): el servidor firma con
 * Ed25519 el JSON en base64url; la app comprueba la firma con la clave pública que trae compilada.
 */
import { verifyAsync } from "@noble/ed25519";

export type DatosPermiso = {
  v: number;
  sub: string;
  username: string | null;
  nombre: string | null;
  email: string | null;
  roles: string[];
  schoolId: string | null;
  menor: boolean;
  dispositivo: string;
  emitido: string;
  vence: string;
};

function deBase64url(s: string): Uint8Array {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(s.length / 4) * 4, "=");
  return Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
}

/** Los datos del permiso si la firma es válida; si no, null. No mira el vencimiento. */
export async function verificarPermiso(clavePublica: string | null, permiso: string, firma: string): Promise<DatosPermiso | null> {
  if (!clavePublica || !permiso || !firma) return null;
  try {
    const ok = await verifyAsync(deBase64url(firma), new TextEncoder().encode(permiso), deBase64url(clavePublica));
    if (!ok) return null;
    const datos = JSON.parse(new TextDecoder().decode(deBase64url(permiso))) as DatosPermiso;
    return datos.v === 1 && typeof datos.sub === "string" && Array.isArray(datos.roles) ? datos : null;
  } catch {
    return null;
  }
}

// Mismo orden que el servidor (lib/roles.ts) entre los roles que usa la app.
export const rolPrincipal = (roles: string[]): "TEACHER" | "PARENT" | "USER" =>
  roles.includes("TEACHER") ? "TEACHER" : roles.includes("PARENT") ? "PARENT" : "USER";

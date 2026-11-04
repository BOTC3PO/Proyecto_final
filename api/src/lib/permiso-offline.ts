/**
 * L8 — permiso de la app sin conexión.
 *
 * Al activar la app, el servidor firma con Ed25519 quién es la persona, qué roles usa en la app y hasta cuándo.
 * La app trae la clave pública y comprueba la firma sin red; la privada queda solo en el servidor
 * (`OFFLINE_PERMISO_CLAVE_ARCHIVO`).
 *
 * Formato: `permiso` es el JSON en base64url y `firma` es la firma de esos mismos caracteres, también en base64url.
 * Se firma el texto ya codificado para que la app no tenga que reproducir el JSON byte a byte.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import { ENV } from "./env";

export const VERSION_PERMISO = 1;
// La app usa estos roles; directivo y administrador quedan afuera (ver docs/plan/app-sin-conexion-tauri.md).
export const ROLES_DE_LA_APP = ["USER", "TEACHER", "PARENT"] as const;

export type Permiso = {
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

let cache: { archivo: string; clave: crypto.KeyObject } | null = null;

/** La clave privada, o null si no está configurada. La lee una vez por archivo. */
export function clavePrivada(archivo = ENV.OFFLINE_PERMISO_CLAVE_ARCHIVO): crypto.KeyObject | null {
  if (!archivo) return null;
  if (cache?.archivo === archivo) return cache.clave;
  const clave = crypto.createPrivateKey(fs.readFileSync(archivo));
  if (clave.asymmetricKeyType !== "ed25519") throw new Error("OFFLINE_PERMISO_CLAVE_ARCHIVO no es una clave Ed25519");
  cache = { archivo, clave };
  return clave;
}

/** Clave pública en crudo (32 bytes, base64url), la que se compila en la app. */
export function clavePublicaCruda(privada: crypto.KeyObject): string {
  const der = crypto.createPublicKey(privada).export({ type: "spki", format: "der" });
  return der.subarray(der.length - 32).toString("base64url");
}

export function rolesParaLaApp(roles: readonly string[]): string[] {
  return ROLES_DE_LA_APP.filter((r) => roles.includes(r));
}

export function firmarPermiso(datos: Permiso, clave: crypto.KeyObject): { permiso: string; firma: string } {
  const permiso = Buffer.from(JSON.stringify(datos)).toString("base64url");
  const firma = crypto.sign(null, Buffer.from(permiso), clave).toString("base64url");
  return { permiso, firma };
}

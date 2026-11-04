/**
 * Contraseñas de los perfiles del dispositivo. Se guarda solo una huella (PBKDF2-SHA256 con sal propia), igual que
 * el servidor: la contraseña no queda escrita en ningún lado.
 */
export const ITERACIONES = 600_000;

const hex = (b: ArrayBuffer | Uint8Array) => Array.from(new Uint8Array(b), (x) => x.toString(16).padStart(2, "0")).join("");
const deHex = (s: string) => new Uint8Array(s.match(/../g)?.map((x) => parseInt(x, 16)) ?? []);

export const aleatorio = (bytes = 32) => hex(crypto.getRandomValues(new Uint8Array(bytes)));

export async function huella(contrasena: string, sal: string, iteraciones: number): Promise<string> {
  const clave = await crypto.subtle.importKey("raw", new TextEncoder().encode(contrasena), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: deHex(sal), iterations: iteraciones }, clave, 256);
  return hex(bits);
}

/** Comparación en tiempo constante (no corta en la primera diferencia). */
export function iguales(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

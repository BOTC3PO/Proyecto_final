/**
 * B13 — verificación en dos pasos con códigos TOTP (RFC 6238: 6 dígitos, pasos de 30 s, HMAC-SHA1), los que
 * generan Google Authenticator, Microsoft Authenticator, Aegis y similares. Sin dependencias externas.
 *
 * El secreto se guarda cifrado (AES-256-GCM) con TOTP_ENCRYPTION_KEY o, si no está, con una clave derivada de
 * JWT_SECRET (cambiar JWT_SECRET obliga a volver a configurar la verificación).
 */
import { createCipheriv, createDecipheriv, createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { ENV } from "./env";

const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
export const PASO_SEGUNDOS = 30;

export function base32(buf: Buffer): string {
  let bits = 0;
  let valor = 0;
  let out = "";
  for (const byte of buf) {
    valor = (valor << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      out += ALFABETO[(valor >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += ALFABETO[(valor << (5 - bits)) & 31];
  return out;
}

export function desdeBase32(texto: string): Buffer {
  const limpio = texto.replace(/[\s=-]/g, "").toUpperCase();
  let bits = 0;
  let valor = 0;
  const out: number[] = [];
  for (const c of limpio) {
    const i = ALFABETO.indexOf(c);
    if (i < 0) throw new Error("secreto base32 inválido");
    valor = (valor << 5) | i;
    bits += 5;
    if (bits >= 8) {
      out.push((valor >>> (bits - 8)) & 255);
      bits -= 8;
    }
  }
  return Buffer.from(out);
}

export const generarSecreto = () => base32(randomBytes(20));

export function codigoEnPaso(secreto: string, paso: number): string {
  const contador = Buffer.alloc(8);
  contador.writeBigUInt64BE(BigInt(paso));
  const hmac = createHmac("sha1", desdeBase32(secreto)).update(contador).digest();
  const desplazamiento = hmac[hmac.length - 1] & 0x0f;
  const numero = (hmac.readUInt32BE(desplazamiento) & 0x7fffffff) % 1_000_000;
  return numero.toString().padStart(6, "0");
}

export const pasoActual = (ahoraMs = Date.now()) => Math.floor(ahoraMs / 1000 / PASO_SEGUNDOS);

/**
 * Verifica el código aceptando un paso de diferencia (±30 s de reloj desfasado). Devuelve el paso que
 * coincidió para guardarlo y rechazar que el mismo código se use dos veces; null si no coincide.
 */
export function verificarCodigo(secreto: string, codigo: string, ultimoPasoUsado: number | null, ahoraMs = Date.now()): number | null {
  const limpio = codigo.replace(/\s/g, "");
  if (!/^\d{6}$/.test(limpio)) return null;
  const actual = pasoActual(ahoraMs);
  for (const paso of [actual - 1, actual, actual + 1]) {
    if (ultimoPasoUsado !== null && paso <= ultimoPasoUsado) continue;
    const esperado = Buffer.from(codigoEnPaso(secreto, paso));
    if (timingSafeEqual(esperado, Buffer.from(limpio))) return paso;
  }
  return null;
}

export const urlOtpauth = (cuenta: string, secreto: string) =>
  `otpauth://totp/${encodeURIComponent(`Virtual Book:${cuenta}`)}?secret=${secreto}&issuer=${encodeURIComponent("Virtual Book")}&digits=6&period=${PASO_SEGUNDOS}`;

// ── Cifrado del secreto ──────────────────────────────────────

const clave = () => {
  const raw = process.env.TOTP_ENCRYPTION_KEY ?? "";
  if (/^[0-9a-fA-F]{64}$/.test(raw)) return Buffer.from(raw, "hex");
  if (raw) return createHash("sha256").update(raw).digest();
  return createHash("sha256").update(`vb-totp:${ENV.JWT_SECRET}`).digest();
};

export function cifrarSecreto(secreto: string): string {
  const iv = randomBytes(12);
  const c = createCipheriv("aes-256-gcm", clave(), iv);
  const datos = Buffer.concat([c.update(secreto, "utf8"), c.final()]);
  return `${iv.toString("hex")}:${c.getAuthTag().toString("hex")}:${datos.toString("hex")}`;
}

export function descifrarSecreto(guardado: string): string {
  const [iv, tag, datos] = guardado.split(":");
  const d = createDecipheriv("aes-256-gcm", clave(), Buffer.from(iv, "hex"));
  d.setAuthTag(Buffer.from(tag, "hex"));
  return Buffer.concat([d.update(Buffer.from(datos, "hex")), d.final()]).toString("utf8");
}

// ── Códigos de recuperación (por si se pierde el teléfono) ───

export const hashRecuperacion = (codigo: string) =>
  createHash("sha256").update(codigo.replace(/[\s-]/g, "").toUpperCase()).digest("hex");

export function generarCodigosRecuperacion(cantidad = 8): string[] {
  return Array.from({ length: cantidad }, () => {
    const t = base32(randomBytes(5)).slice(0, 8);
    return `${t.slice(0, 4)}-${t.slice(4)}`;
  });
}

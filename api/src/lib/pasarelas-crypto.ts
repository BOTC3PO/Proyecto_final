/**
 * PLAN-B Fase 3 — cifrado simétrico para `EscuelaPasarela.credencialesCifradas`
 * (tokens OAuth / API keys de la escuela en cada provider). AES-256-GCM:
 * nunca se guardan credenciales en texto plano ni se loguean.
 *
 * La clave sale de `ENV.PASARELAS_ENCRYPTION_KEY` (32 bytes, hex o base64).
 * En dev, si no está seteada, se usa una fija SOLO para no romper el
 * flujo local — en producción es obligatoria (mismo criterio que
 * JWT_SECRET en lib/env.ts).
 */
import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { ENV } from "./env";

const ALGO = "aes-256-gcm";
const DEV_FALLBACK_KEY = "0".repeat(64); // 32 bytes en hex — SOLO dev.

const resolveKey = (): Buffer => {
  const raw = ENV.PASARELAS_ENCRYPTION_KEY;
  if (!raw) {
    if (ENV.NODE_ENV === "production") {
      throw new Error("PASARELAS_ENCRYPTION_KEY must be defined when NODE_ENV is production");
    }
    return Buffer.from(DEV_FALLBACK_KEY, "hex");
  }
  // Acepta hex (64 chars) o base64.
  const buf = /^[0-9a-fA-F]{64}$/.test(raw) ? Buffer.from(raw, "hex") : Buffer.from(raw, "base64");
  if (buf.length !== 32) {
    throw new Error("PASARELAS_ENCRYPTION_KEY must decode to exactly 32 bytes");
  }
  return buf;
};

// Formato: <iv-hex>:<authTag-hex>:<ciphertext-hex>
export const cifrarCredencial = (plaintext: string): string => {
  const key = resolveKey();
  const iv = randomBytes(12);
  const cipher = createCipheriv(ALGO, key, iv);
  const ciphertext = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return `${iv.toString("hex")}:${authTag.toString("hex")}:${ciphertext.toString("hex")}`;
};

export const descifrarCredencial = (payload: string): string => {
  const [ivHex, authTagHex, ciphertextHex] = payload.split(":");
  if (!ivHex || !authTagHex || !ciphertextHex) {
    throw new Error("invalid encrypted credential payload");
  }
  const key = resolveKey();
  const decipher = createDecipheriv(ALGO, key, Buffer.from(ivHex, "hex"));
  decipher.setAuthTag(Buffer.from(authTagHex, "hex"));
  const plaintext = Buffer.concat([
    decipher.update(Buffer.from(ciphertextHex, "hex")),
    decipher.final()
  ]);
  return plaintext.toString("utf8");
};

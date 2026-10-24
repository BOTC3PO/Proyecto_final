import crypto from "crypto";
import { promisify } from "node:util";

const pbkdf2 = promisify(crypto.pbkdf2);

const HASH_PREFIX = "pbkdf2";
/**
 * Iteraciones de PBKDF2-HMAC-SHA256 para hashes NUEVOS. OWASP recomienda 600.000 o más para esa
 * combinación. Los hashes viejos (100.000) se siguen verificando con las iteraciones con que
 * se guardaron y se re-hashean solos al iniciar sesión (ver `passwordNeedsRehash`).
 * `PASSWORD_HASH_ITERATIONS` existe para acelerar las pruebas; en producción no se acepta menos
 * de 100.000.
 */
const MIN_ITERATIONS = process.env.NODE_ENV === "test" ? 1_000 : 100_000;
const HASH_ITERATIONS = Math.max(Number(process.env.PASSWORD_HASH_ITERATIONS) || 600_000, MIN_ITERATIONS);
const HASH_KEY_LENGTH = 64;
const HASH_DIGEST = "sha256";

/** Hash asíncrono: no bloquea el servidor mientras se calcula (antes era `pbkdf2Sync`). */
export const hashPassword = async (password: string) => {
  const saltBuffer = crypto.randomBytes(16);
  const salt = saltBuffer.toString("hex");
  const derived = (
    await pbkdf2(password, saltBuffer, HASH_ITERATIONS, HASH_KEY_LENGTH, HASH_DIGEST)
  ).toString("hex");
  return `${HASH_PREFIX}$${HASH_ITERATIONS}$${salt}$${derived}`;
};

export const isPasswordHashUsable = (storedHash: unknown) => {
  if (typeof storedHash !== "string") return false;
  const normalized = storedHash.startsWith("$") ? storedHash.slice(1) : storedHash;
  const [prefix, iterationsRaw, saltRaw, hashRaw] = normalized.split("$");
  if (!prefix || !iterationsRaw || !saltRaw || !hashRaw) return false;
  const iterations = Number(iterationsRaw);
  if (!Number.isFinite(iterations) || iterations <= 0) return false;
  if (prefix === HASH_PREFIX) {
    if (!/^[a-fA-F0-9]+$/.test(saltRaw) || !/^[a-fA-F0-9]+$/.test(hashRaw)) return false;
    if (saltRaw.length % 2 !== 0 || hashRaw.length % 2 !== 0) return false;
    return true;
  }
  if (prefix === "pbkdf2-sha256") {
    const salt = Buffer.from(saltRaw, "base64");
    const hash = Buffer.from(hashRaw, "base64");
    return salt.length > 0 && hash.length > 0;
  }
  return false;
};

/** `true` si el hash guardado usa menos iteraciones que las actuales (o un formato viejo). */
export const passwordNeedsRehash = (storedHash: unknown) => {
  if (!isPasswordHashUsable(storedHash)) return false;
  const normalized = (storedHash as string).startsWith("$") ? (storedHash as string).slice(1) : (storedHash as string);
  const [prefix, iterationsRaw] = normalized.split("$");
  return prefix !== HASH_PREFIX || Number(iterationsRaw) < HASH_ITERATIONS;
};

export const verifyPassword = async (password: string, storedHash: string) => {
  if (!isPasswordHashUsable(storedHash)) return false;
  const normalized = storedHash.startsWith("$") ? storedHash.slice(1) : storedHash;
  const [prefix, iterationsRaw, saltRaw, hashRaw] = normalized.split("$");
  if (!prefix || !iterationsRaw || !saltRaw || !hashRaw) return false;
  const iterations = Number(iterationsRaw);
  if (!Number.isFinite(iterations) || iterations <= 0) return false;
  let salt: Buffer;
  let storedBuffer: Buffer;
  if (prefix === HASH_PREFIX) {
    salt = Buffer.from(saltRaw, "hex");
    storedBuffer = Buffer.from(hashRaw, "hex");
  } else if (prefix === "pbkdf2-sha256") {
    salt = Buffer.from(saltRaw, "base64");
    storedBuffer = Buffer.from(hashRaw, "base64");
  } else {
    return false;
  }
  const derivedBuffer = await pbkdf2(password, salt, iterations, HASH_KEY_LENGTH, HASH_DIGEST);
  if (derivedBuffer.length !== storedBuffer.length) return false;
  return crypto.timingSafeEqual(derivedBuffer, storedBuffer);
};

let hashFalso: Promise<string> | null = null;

/**
 * Gasta el mismo tiempo que una verificación real. Se usa cuando el usuario no existe, para que
 * por la demora de la respuesta no se pueda deducir si un correo está registrado (H16).
 */
export const verificarContraFalso = async (password: string) => {
  hashFalso ??= hashPassword(crypto.randomBytes(16).toString("hex"));
  await verifyPassword(password, await hashFalso);
};

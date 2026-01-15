import crypto from "crypto";

const HASH_PREFIX = "pbkdf2";
const HASH_ITERATIONS = 100_000;
const HASH_KEY_LENGTH = 64;
const HASH_DIGEST = "sha256";

export const hashPassword = (password: string) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const derived = crypto
    .pbkdf2Sync(password, salt, HASH_ITERATIONS, HASH_KEY_LENGTH, HASH_DIGEST)
    .toString("hex");
  return `${HASH_PREFIX}$${HASH_ITERATIONS}$${salt}$${derived}`;
};

export const verifyPassword = (password: string, storedHash: string) => {
  const normalized = storedHash.startsWith("$") ? storedHash.slice(1) : storedHash;
  const [prefix, iterationsRaw, saltRaw, hashRaw] = normalized.split("$");
  if (!prefix || !iterationsRaw || !saltRaw || !hashRaw) return false;
  const iterations = Number(iterationsRaw);
  if (!Number.isFinite(iterations) || iterations <= 0) return false;
  let salt: Buffer;
  let storedBuffer: Buffer;
  if (prefix === HASH_PREFIX) {
    if (!/^[a-fA-F0-9]+$/.test(saltRaw) || !/^[a-fA-F0-9]+$/.test(hashRaw)) return false;
    if (saltRaw.length % 2 !== 0 || hashRaw.length % 2 !== 0) return false;
    salt = Buffer.from(saltRaw, "hex");
    storedBuffer = Buffer.from(hashRaw, "hex");
  } else if (prefix === "pbkdf2-sha256") {
    salt = Buffer.from(saltRaw, "base64");
    storedBuffer = Buffer.from(hashRaw, "base64");
  } else {
    return false;
  }
  const derivedBuffer = crypto.pbkdf2Sync(
    password,
    salt,
    iterations,
    HASH_KEY_LENGTH,
    HASH_DIGEST
  );
  if (derivedBuffer.length !== storedBuffer.length) return false;
  return crypto.timingSafeEqual(derivedBuffer, storedBuffer);
};

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
  const [prefix, iterationsRaw, salt, hash] = storedHash.split("$");
  if (!prefix || !iterationsRaw || !salt || !hash) return false;
  if (prefix !== HASH_PREFIX) return false;
  const iterations = Number(iterationsRaw);
  if (!Number.isFinite(iterations) || iterations <= 0) return false;
  const derived = crypto
    .pbkdf2Sync(password, salt, iterations, HASH_KEY_LENGTH, HASH_DIGEST)
    .toString("hex");
  const derivedBuffer = Buffer.from(derived, "hex");
  const storedBuffer = Buffer.from(hash, "hex");
  if (derivedBuffer.length !== storedBuffer.length) return false;
  return crypto.timingSafeEqual(derivedBuffer, storedBuffer);
};

import { createHash, timingSafeEqual } from "node:crypto";

/**
 * Compara dos secretos (clave de arranque, firma de webhook) en tiempo constante.
 *
 * `!==` sobre strings corta en el primer carácter distinto, y esa diferencia de tiempo puede medirse
 * desde afuera para ir recuperando el secreto de a un byte. Se compara el SHA-256 de cada lado: así
 * `timingSafeEqual` recibe siempre buffers del mismo largo y tampoco se filtra el largo del secreto.
 */
export const secretosIguales = (a: unknown, b: unknown): boolean => {
  if (typeof a !== "string" || typeof b !== "string") return false;
  const ha = createHash("sha256").update(a, "utf8").digest();
  const hb = createHash("sha256").update(b, "utf8").digest();
  return timingSafeEqual(ha, hb);
};

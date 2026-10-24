/**
 * Advisory lock de sesión de Postgres — evita que 2 instancias del API
 * corran el mismo job en paralelo (ver tareas_pendientes/
 * PLAN-escalabilidad-api.md, Fase 2). No bloquea: si otra instancia ya
 * tiene el lock, `fn` simplemente no corre esta vez (skip, no error).
 */
import { prisma } from "./prisma";

/** Hashea `key` a un int32 estable — pg_try_advisory_lock acepta bigint. */
export const lockKeyFor = (key: string): number => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (Math.imul(31, hash) + key.charCodeAt(i)) | 0;
  }
  return hash;
};

export const withAdvisoryLock = async (key: string, fn: () => Promise<unknown>): Promise<void> => {
  const lockKey = lockKeyFor(key);
  const rows = await prisma.$queryRaw<[{ pg_try_advisory_lock: boolean }]>`
    SELECT pg_try_advisory_lock(${lockKey})
  `;
  if (!rows[0]?.pg_try_advisory_lock) return;
  try {
    await fn();
  } finally {
    await prisma.$queryRaw`SELECT pg_advisory_unlock(${lockKey})`;
  }
};

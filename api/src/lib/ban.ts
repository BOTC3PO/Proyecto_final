/**
 * H4 — un usuario baneado no puede usar la plataforma.
 *
 * `bannedUntil` nulo con `isBanned` activo es un ban sin vencimiento. Un ban con
 * fecha vence solo: pasada la fecha el usuario deja de estar baneado aunque
 * `isBanned` siga en true (no hace falta un trabajo que lo limpie).
 */
export type UsuarioBan = {
  isBanned?: boolean | null;
  bannedUntil?: string | Date | null;
};

export function estaBaneado(user: UsuarioBan | null | undefined, now: Date = new Date()): boolean {
  if (!user || user.isBanned !== true) return false;
  if (user.bannedUntil == null) return true;
  const hasta = new Date(user.bannedUntil).getTime();
  if (Number.isNaN(hasta)) return true; // fecha ilegible: ante la duda, sigue baneado
  return hasta > now.getTime();
}

export function respuestaBaneado(user: UsuarioBan) {
  return {
    error: "Account suspended",
    code: "BANNED",
    bannedUntil: user.bannedUntil ? new Date(user.bannedUntil).toISOString() : null,
  };
}

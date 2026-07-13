/**
 * PLAN-R Parte 1 — copiado (no paquete compartido, decisión #5 del
 * plan: no hay workspaces npm entre api/apps/web/apps/mobile hoy;
 * extraer un paquete común queda para cuando duela de verdad).
 * Origen: `apps/web/src/auth/roles.ts` + `apps/web/src/auth/AuthContex.tsx`.
 */
export type Role = "ADMIN" | "USER" | "PARENT" | "TEACHER" | "DIRECTIVO" | "GUEST";

export type CuentaVinculada = {
  destinoUsuarioId: string;
  tipoDestino: "ALUMNO" | "PRINCIPAL" | "PADRE" | "ALUMNO_HIJO";
};

export type User = {
  id: string;
  name: string;
  role: Role;
  roles?: ReadonlyArray<Role>;
  schoolId?: string | null;
  cuentaVinculada?: CuentaVinculada | null;
};

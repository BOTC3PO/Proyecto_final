import { apiPost } from "../lib/api";

type CuentaVinculadaInfo = {
  destinoUsuarioId: string;
  tipoDestino: "ALUMNO" | "PRINCIPAL" | "PADRE" | "ALUMNO_HIJO";
} | null;

export type CrearCuentaAlumnoStaffResponse = {
  ok: boolean;
  created: boolean;
  espejo: { id: string; username: string; fullName: string };
  cuentaVinculada: CuentaVinculadaInfo;
};

// FASE 4 — crea (o devuelve) la cuenta espejo-alumno del staff autenticado.
export async function crearCuentaAlumnoStaff(): Promise<CrearCuentaAlumnoStaffResponse> {
  return apiPost<CrearCuentaAlumnoStaffResponse>("/api/auth/crear-alumno", {});
}

export type VincularCuentaAlumnoResponse = {
  ok: boolean;
  alumnoId: string;
  cuentaVinculada: CuentaVinculadaInfo;
};

// FASE 4 — vincula una cuenta USER existente (por username o email) como
// cuenta alumno del staff. No crea usuario nuevo.
export async function vincularCuentaAlumnoStaff(
  identificador: string
): Promise<VincularCuentaAlumnoResponse> {
  return apiPost<VincularCuentaAlumnoResponse>("/api/auth/vincular-alumno", {
    identificador,
  });
}

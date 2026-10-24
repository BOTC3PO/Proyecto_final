import { apiPost } from "../lib/api";

export type RoleSolicitud = "TEACHER" | "PARENT" | "DIRECTIVO" | "ADMIN";

export type SolicitarRolResponse = {
  id: string;
  alreadyPending?: boolean;
  message: string;
};

export async function solicitarCambioRol(params: {
  targetRole: RoleSolicitud;
  motivo?: string;
}): Promise<SolicitarRolResponse> {
  return apiPost<SolicitarRolResponse>("/api/solicitar-rol", {
    target_role: params.targetRole,
    motivo: params.motivo ?? "",
  });
}

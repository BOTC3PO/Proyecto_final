import { apiFetch } from "./api";

export type EnterpriseIndicator = {
  id: string;
  label: string;
  value: string;
};

export type EnterpriseStaffMember = {
  id: string;
  name: string;
  role: "ADMIN" | "TEACHER";
  schoolId: string;
};

export type EnterpriseDashboardData = {
  indicadores: EnterpriseIndicator[];
  acciones: string[];
};

export type EnterpriseContrato = {
  id: string;
  nombre: string;
  estado: string;
  renovacion: string;
};

export type EnterpriseReporte = {
  id: string;
  titulo: string;
  descripcion: string;
};

export async function fetchEnterpriseStaff(schoolId: string): Promise<EnterpriseStaffMember[]> {
  return apiFetch<EnterpriseStaffMember[]>(`/api/escuelas/${schoolId}/miembros`);
}

export async function fetchEnterpriseDashboard(schoolId: string): Promise<EnterpriseDashboardData> {
  return apiFetch<EnterpriseDashboardData>(`/api/escuelas/${schoolId}/dashboard`);
}

export async function fetchEnterpriseContratos(schoolId: string): Promise<EnterpriseContrato[]> {
  return apiFetch<EnterpriseContrato[]>(`/api/escuelas/${schoolId}/contratos`);
}

export async function fetchEnterpriseReportes(schoolId: string): Promise<EnterpriseReporte[]> {
  return apiFetch<EnterpriseReporte[]>(`/api/escuelas/${schoolId}/reportes`);
}

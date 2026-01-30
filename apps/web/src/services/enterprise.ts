import { apiGet } from "../lib/api";

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
  return apiGet<EnterpriseStaffMember[]>(`/api/escuelas/${schoolId}/miembros`);
}

export async function fetchEnterpriseDashboard(schoolId: string): Promise<EnterpriseDashboardData> {
  return apiGet<EnterpriseDashboardData>(`/api/escuelas/${schoolId}/dashboard`);
}

export async function fetchEnterpriseContratos(schoolId: string): Promise<EnterpriseContrato[]> {
  return apiGet<EnterpriseContrato[]>(`/api/escuelas/${schoolId}/contratos`);
}

export async function fetchEnterpriseReportes(schoolId: string): Promise<EnterpriseReporte[]> {
  return apiGet<EnterpriseReporte[]>(`/api/escuelas/${schoolId}/reportes`);
}

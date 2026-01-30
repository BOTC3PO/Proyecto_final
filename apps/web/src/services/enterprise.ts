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

export async function fetchEnterpriseStaff(): Promise<EnterpriseStaffMember[]> {
  return apiGet<EnterpriseStaffMember[]>("/api/enterprise/miembros");
}

export async function fetchEnterpriseDashboard(): Promise<EnterpriseDashboardData> {
  return apiGet<EnterpriseDashboardData>("/api/enterprise/dashboard");
}

export async function fetchEnterpriseContratos(): Promise<EnterpriseContrato[]> {
  return apiGet<EnterpriseContrato[]>("/api/enterprise/contratos");
}

export async function fetchEnterpriseReportes(): Promise<EnterpriseReporte[]> {
  return apiGet<EnterpriseReporte[]>("/api/enterprise/reportes");
}

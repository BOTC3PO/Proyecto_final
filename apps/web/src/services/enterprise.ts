import { apiGet } from "../lib/api";
import type { ClassroomListResponse } from "../domain/classroom/classroom.types";
import type { Module } from "../domain/module/module.types";

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

export type EnterprisePagedResponse<T> = {
  items: T[];
  limit: number;
  offset: number;
};

export type EnterpriseMensaje = {
  id?: string;
  _id?: string;
  motivo?: string;
  reason?: string;
  message?: string;
  contenido?: string;
  content?: string;
  createdAt?: string;
  created_at?: string;
  reporterName?: string;
  reporter?: string;
  userName?: string;
  user?: string;
  status?: string;
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

export async function fetchEnterpriseAulas(): Promise<ClassroomListResponse> {
  return apiGet<ClassroomListResponse>("/api/enterprise/aulas");
}

export async function fetchEnterpriseModulos(): Promise<EnterprisePagedResponse<Module>> {
  return apiGet<EnterprisePagedResponse<Module>>("/api/enterprise/modulos");
}

export async function fetchEnterpriseMensajes(): Promise<EnterprisePagedResponse<EnterpriseMensaje>> {
  return apiGet<EnterprisePagedResponse<EnterpriseMensaje>>("/api/enterprise/mensajes");
}

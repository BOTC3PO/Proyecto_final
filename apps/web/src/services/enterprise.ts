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

export async function fetchEnterpriseStaff(
  schoolId: string
): Promise<EnterpriseStaffMember[]> {
  const data = await apiGet<{ items: Array<{
    id: string; name: string; role: string; schoolId?: string;
  }> }>(`/api/usuarios?schoolId=${encodeURIComponent(schoolId)}&roles=TEACHER,DIRECTIVO`);
  return (data.items ?? []).map((u) => ({
    id: u.id,
    name: u.name,
    role: (u.role === "TEACHER" ? "TEACHER" : "ADMIN") as "TEACHER" | "ADMIN",
    schoolId: u.schoolId ?? schoolId,
  }));
}

export async function fetchEnterpriseDashboard(
  schoolId: string
): Promise<EnterpriseDashboardData> {
  const [aulasData, staffData] = await Promise.all([
    apiGet<{ items: unknown[] }>(`/api/aulas?schoolId=${encodeURIComponent(schoolId)}`),
    apiGet<{ items: unknown[] }>(`/api/usuarios?schoolId=${encodeURIComponent(schoolId)}`),
  ]);
  const aulas = aulasData.items ?? [];
  const usuarios = staffData.items ?? [];
  const alumnos = usuarios.filter((u: any) => u.role === "USER");
  const docentes = usuarios.filter((u: any) => u.role === "TEACHER");
  const directivos = usuarios.filter((u: any) => u.role === "DIRECTIVO");

  return {
    indicadores: [
      { id: "aulas", label: "Aulas activas", value: String(aulas.length) },
      { id: "alumnos", label: "Alumnos", value: String(alumnos.length) },
      { id: "docentes", label: "Docentes", value: String(docentes.length) },
      { id: "directivos", label: "Directivos", value: String(directivos.length) },
    ],
    acciones: [],
  };
}

export async function fetchEnterpriseAulas(
  schoolId: string
): Promise<ClassroomListResponse> {
  return apiGet<ClassroomListResponse>(
    `/api/aulas?schoolId=${encodeURIComponent(schoolId)}`
  );
}

export async function fetchEnterpriseModulos(
  schoolId?: string
): Promise<{ items: Module[] }> {
  const qs = schoolId
    ? `?visibility=escuela&schoolId=${encodeURIComponent(schoolId)}`
    : "?visibility=escuela";
  return apiGet<{ items: Module[] }>(`/api/modulos${qs}`);
}

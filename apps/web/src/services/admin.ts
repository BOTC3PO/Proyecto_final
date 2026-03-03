import { apiGet, apiPost, apiPatch } from "../lib/api";

export type AdminUsuario = {
  id: string;
  nombre: string;
  username: string;
  email: string;
  rol: string;
  estado: string;
  isBanned: boolean;
  warningCount: number;
  createdAt: string;
};

export type AdminCurso = {
  id: string;
  titulo: string;
  estado: string;
  estudiantes: number;
};

export type AdminMateria = {
  id: string;
  nombre: string;
  descripcion: string;
  nivel: string;
  activa: boolean;
};

export type AdminPanelRole = "schoolAdmin" | "teacher";

export type AdminPanelUser = {
  id: string;
  name: string;
  role: AdminPanelRole;
  schoolId: string;
  managedClassIds: string[];
};

export type AdminPanelClass = {
  id: string;
  name: string;
  grade: string;
  schoolId: string;
  studentsCount: number;
  teachers: string[];
};

export type AdminPanelThread = {
  id: string;
  studentName: string;
  parentName: string;
  parentRegistered: boolean;
  lastMessageFrom: "parent" | "admin";
  lastMessagePreview: string;
  unreadForAdmin: boolean;
};

export type AdminPanelTransfer = {
  id: string;
  studentName: string;
  fromSchool: string;
  toSchool: string;
  status: "pending" | "approved" | "rejected";
};

export type AdminPanelMission = {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  durationDays: number;
  rewardCoins: number;
  badgeLabel: string;
  scope: "school" | "class";
  active: boolean;
};

export type AdminPanelData = {
  currentUser: AdminPanelUser;
  classes: AdminPanelClass[];
  threads: AdminPanelThread[];
  transfers: AdminPanelTransfer[];
  missions: AdminPanelMission[];
};

export type AdminStats = {
  totalUsuarios: number;
  escuelasActivas: number;
  modulosPublicos: number;
  eventosModeracion: number;
};

export type AdminModulosCompletados = {
  publicos: number;
  privados: number;
  total: number;
};

export type AdminReportesGlobal = {
  registro: { periodo: number; total: number; porRol: Record<string, number> };
  usuarios: { total: number; activos: number; inactivos: number };
  topModulos: Array<{ moduloId: string; titulo: string; completados: number }>;
  eventosModeracion: Array<{ tipo: string; motivo: string; createdAt: string }>;
};

export type EconomiaConfig = {
  id: string;
  moneda: { codigo: string; nombre: string; simbolo: string };
  tasas: { pf: number; fci: number };
  limites: { emisionDiaria: number; recompensaMaxima: number; recompensaDiaria: number };
  inflacion: { tasa: number; activa: boolean };
  hiperinflacion: { tasa: number; activa: boolean; aceleracion: number };
  deflacion: { tasa: number; activa: boolean };
  updatedAt: string;
};

export type ClasePublica = {
  _id: string;
  nombre?: string;
  name?: string;
  accessType?: string;
  updatedAt?: string;
};

export type MensajeReportado = {
  _id: string;
  cuerpo?: string;
  body?: string;
  tipo?: string;
  createdAt?: string;
};

export type PromoteResult =
  | { ok: true; role: string }
  | { ok: false; requiresGovernance: true; error: string };

export async function fetchAdminUsuarios(params?: { q?: string; role?: string; limit?: number }): Promise<AdminUsuario[]> {
  const qs = new URLSearchParams();
  if (params?.q) qs.set("q", params.q);
  if (params?.role) qs.set("role", params.role);
  if (params?.limit) qs.set("limit", String(params.limit));
  const query = qs.toString();
  return apiGet<AdminUsuario[]>(`/api/admin/usuarios${query ? `?${query}` : ""}`);
}

export async function fetchAdminCursos(): Promise<AdminCurso[]> {
  return apiGet<AdminCurso[]>("/api/admin/cursos");
}

export async function fetchAdminPanelData(): Promise<AdminPanelData> {
  return apiGet<AdminPanelData>("/api/admin/panel");
}

export async function fetchAdminStats(): Promise<AdminStats> {
  return apiGet<AdminStats>("/api/admin/stats");
}

export async function fetchAdminModulosCompletados(userId: string): Promise<AdminModulosCompletados> {
  return apiGet<AdminModulosCompletados>(`/api/admin/usuarios/${userId}/modulos-completados`);
}

export async function fetchAdminReportesGlobal(dias = 30): Promise<AdminReportesGlobal> {
  return apiGet<AdminReportesGlobal>(`/api/admin/reportes-global?dias=${dias}`);
}

export async function promoteUsuario(userId: string, role: string): Promise<PromoteResult> {
  try {
    const result = await apiPatch<{ ok: boolean; role: string }>(`/api/admin/usuarios/${userId}/rol`, { role });
    return { ok: true, role: result.role };
  } catch (err: unknown) {
    const e = err as { status?: number; message?: string };
    if (e?.status === 403) {
      return { ok: false, requiresGovernance: true, error: e?.message ?? "Requiere gobernanza" };
    }
    throw err;
  }
}

export async function fetchAdminMaterias(): Promise<AdminMateria[]> {
  return apiGet<AdminMateria[]>("/api/admin/materias");
}

export async function createAdminMateria(data: { nombre: string; descripcion?: string; nivel?: string }): Promise<AdminMateria> {
  return apiPost<AdminMateria>("/api/admin/materias", data);
}

export async function updateAdminMateria(id: string, data: { nombre?: string; descripcion?: string; nivel?: string; activa?: boolean }): Promise<{ ok: boolean }> {
  return apiPatch<{ ok: boolean }>(`/api/admin/materias/${id}`, data);
}

export async function fetchClasesPublicas(limit = 20): Promise<ClasePublica[]> {
  const data = await apiGet<{ items: ClasePublica[] }>(`/api/moderacion/clases-publicas?limit=${limit}`);
  return data.items;
}

export async function fetchMensajesReportados(limit = 20): Promise<MensajeReportado[]> {
  const data = await apiGet<{ items: MensajeReportado[] }>(`/api/moderacion/mensajes-reportados?limit=${limit}`);
  return data.items;
}

export async function banUsuario(userId: string, motivo: string, duracionDias: number): Promise<{ ok: boolean }> {
  return apiPost<{ ok: boolean }>(`/api/moderacion/usuarios/${userId}/ban`, { motivo, duracionDias });
}

export async function advertenciaUsuario(userId: string, motivo: string, severidad: string): Promise<{ ok: boolean }> {
  return apiPost<{ ok: boolean }>(`/api/moderacion/usuarios/${userId}/advertencias`, { motivo, severidad });
}

export async function fetchEconomiaConfig(): Promise<EconomiaConfig> {
  return apiGet<EconomiaConfig>("/api/economia/config");
}

export async function updateEconomiaConfig(data: Partial<EconomiaConfig>): Promise<EconomiaConfig> {
  return apiPatch<EconomiaConfig>("/api/economia/config", data);
}

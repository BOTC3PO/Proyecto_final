import { apiFetch } from "./api";

export type AdminUsuario = {
  id: string;
  nombre: string;
  rol: string;
  estado: string;
};

export type AdminCurso = {
  id: string;
  titulo: string;
  estado: string;
  estudiantes: number;
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

export async function fetchAdminUsuarios(): Promise<AdminUsuario[]> {
  return apiFetch<AdminUsuario[]>("/api/admin/usuarios");
}

export async function fetchAdminCursos(): Promise<AdminCurso[]> {
  return apiFetch<AdminCurso[]>("/api/admin/cursos");
}

export async function fetchAdminPanelData(): Promise<AdminPanelData> {
  return apiFetch<AdminPanelData>("/api/admin/panel");
}

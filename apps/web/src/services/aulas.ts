import { apiDelete, apiGet, apiPatch, apiPost, apiPut } from "../lib/api";
import type { Classroom, ClassroomListResponse } from "../domain/classroom/classroom.types";

export type ClassroomStudentProgress = {
  id: string;
  name: string;
  completion: number;
  score: number;
  status: "al_dia" | "en_riesgo" | "destacado";
};

export type ClassroomProgressSnapshot = {
  classroomId: string;
  totalStudents: number;
  activeStudents: number;
  avgCompletion: number;
  avgScore: number;
  atRiskCount: number;
  students: ClassroomStudentProgress[];
  lastUpdate: string;
};

export async function fetchClassrooms(): Promise<ClassroomListResponse> {
  return apiGet<ClassroomListResponse>("/api/aulas");
}

export async function fetchClassroomDetail(classroomId: string): Promise<Classroom> {
  // FIX-TEST4-X05B-NOMBRES — el back ahora devuelve
  // `createdByName`, `teacherName`, `teacherOfRecordName` además
  // de los IDs. El tipo `Classroom` ya declara esos campos
  // opcionales, así que no hace falta extender la firma.
  return apiGet<Classroom>(`/api/aulas/${classroomId}`);
}

export async function createClassroom(payload: Classroom): Promise<{ id: string; classroomId: string }> {
  return apiPost<{ id: string; classroomId: string }>("/api/aulas", payload);
}

export async function updateClassroom(
  classroomId: string,
  payload: Partial<Omit<Classroom, "id" | "createdAt" | "createdBy">>
): Promise<{ ok: boolean }> {
  return apiPut<{ ok: boolean }>(`/api/aulas/${classroomId}`, payload);
}

export async function deleteClassroom(classroomId: string): Promise<void> {
  await apiDelete<void>(`/api/aulas/${classroomId}`);
}

export async function fetchClassroomProgressSnapshots(
  _classroomIds: string[]
): Promise<ClassroomProgressSnapshot[]> {
  return [];
}

// PLAN-U §6 — co-titulares de aula ("2 profesores, o 1 profesor + 1
// directivo"). El dueño original no se toca; el co-titular es una
// membresía TEACHER/DIRECTIVO extra.
export type Titular = { id: string; name: string; role?: string };

export async function fetchTitulares(
  classroomId: string
): Promise<{ owner: Titular | null; coTitulares: Titular[] }> {
  return apiGet(`/api/aulas/${classroomId}/titulares`);
}

export async function fetchTitularesCandidatos(
  classroomId: string
): Promise<{ items: Titular[] }> {
  return apiGet(`/api/aulas/${classroomId}/titulares-candidatos`);
}

export async function agregarTitular(classroomId: string, userId: string): Promise<{ ok: boolean }> {
  return apiPost(`/api/aulas/${classroomId}/titulares`, { userId });
}

export async function quitarTitular(classroomId: string, userId: string): Promise<void> {
  await apiDelete<void>(`/api/aulas/${classroomId}/titulares/${userId}`);
}

// PLAN-V §1 — períodos académicos del aula ("2 semestres + verano",
// bimestral, anual...). Sin agregación de notas todavía (eso es §3).
export type Periodo = {
  id: string;
  claseId: string;
  nombre: string;
  desde: string;
  hasta: string;
  orden: number;
};

export async function fetchPeriodos(classroomId: string): Promise<{ items: Periodo[] }> {
  return apiGet(`/api/aulas/${classroomId}/periodos`);
}

export async function crearPeriodo(
  classroomId: string,
  payload: { nombre: string; desde: string; hasta: string }
): Promise<Periodo> {
  return apiPost(`/api/aulas/${classroomId}/periodos`, payload);
}

export async function actualizarPeriodo(
  classroomId: string,
  periodoId: string,
  payload: Partial<{ nombre: string; desde: string; hasta: string }>
): Promise<{ ok: boolean }> {
  return apiPatch(`/api/aulas/${classroomId}/periodos/${periodoId}`, payload);
}

export async function eliminarPeriodo(classroomId: string, periodoId: string): Promise<void> {
  await apiDelete<void>(`/api/aulas/${classroomId}/periodos/${periodoId}`);
}

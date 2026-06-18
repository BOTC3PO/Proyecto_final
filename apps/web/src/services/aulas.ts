import { apiDelete, apiGet, apiPost, apiPut } from "../lib/api";
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

import { apiFetch } from "./api";
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
  return apiFetch<ClassroomListResponse>("/api/aulas");
}

export async function fetchClassroomDetail(classroomId: string): Promise<Classroom> {
  return apiFetch<Classroom>(`/api/aulas/${classroomId}`);
}

export async function createClassroom(payload: Classroom): Promise<{ id: string; classroomId: string }> {
  return apiFetch<{ id: string; classroomId: string }>("/api/aulas", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export async function updateClassroom(
  classroomId: string,
  payload: Partial<Omit<Classroom, "id" | "createdAt" | "createdBy">>
): Promise<{ ok: boolean }> {
  return apiFetch<{ ok: boolean }>(`/api/aulas/${classroomId}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  });
}

export async function deleteClassroom(classroomId: string): Promise<void> {
  await apiFetch<void>(`/api/aulas/${classroomId}`, {
    method: "DELETE"
  });
}

export async function fetchClassroomProgressSnapshots(
  classroomIds: string[]
): Promise<ClassroomProgressSnapshot[]> {
  const params = new URLSearchParams();
  if (classroomIds.length) params.set("classroomIds", classroomIds.join(","));
  return apiFetch<ClassroomProgressSnapshot[]>(`/api/aulas/progreso?${params.toString()}`);
}

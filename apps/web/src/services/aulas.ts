import { apiFetch } from "./api";
import type { Classroom, ClassroomListResponse } from "../domain/classroom/classroom.types";

export async function fetchClassrooms(): Promise<ClassroomListResponse> {
  return apiFetch<ClassroomListResponse>("/api/aulas");
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

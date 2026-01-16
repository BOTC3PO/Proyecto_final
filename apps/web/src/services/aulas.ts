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

import { apiFetch } from "./api";

export type TeacherTool = {
  id: string;
  label: string;
  to: string;
};

export async function fetchTeacherTools(): Promise<TeacherTool[]> {
  return apiFetch<TeacherTool[]>("/api/aulas/tools");
}

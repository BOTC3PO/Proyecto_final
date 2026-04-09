import { apiGet } from "../lib/api";

export type TeacherTool = {
  id: string;
  label: string;
  to: string;
};

export async function fetchTeacherTools(): Promise<TeacherTool[]> {
  return apiGet<TeacherTool[]>("/api/aulas/tools");
}

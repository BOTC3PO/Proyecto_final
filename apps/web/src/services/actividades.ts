import { apiDelete, apiGet, apiPost } from "../lib/api";

export type UpcomingActivity = {
  id: string;
  label: string;
  when: string;
  tipo?: "clase" | "evaluacion" | "evento";
  descripcion?: string;
  fecha?: string;
};

type UpcomingActivitiesResponse = {
  items: UpcomingActivity[];
};

export async function fetchUpcomingActivities(classroomId?: string): Promise<UpcomingActivity[]> {
  const query = classroomId ? `?classroomId=${encodeURIComponent(classroomId)}` : "";
  const response = await apiGet<UpcomingActivitiesResponse>(`/api/aula/actividades${query}`);
  return response.items;
}

export async function createActivity(data: {
  classroomId: string;
  tipo: "clase" | "evaluacion" | "evento";
  titulo: string;
  descripcion?: string;
  fecha: string;
}): Promise<void> {
  await apiPost("/api/aula/actividades", data);
}

export async function deleteActivity(id: string): Promise<void> {
  await apiDelete(`/api/aula/actividades/${id}`);
}

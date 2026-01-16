import { apiGet } from "../lib/api";

export type UpcomingActivity = {
  id: string;
  label: string;
  when: string;
};

type UpcomingActivitiesResponse = {
  items: UpcomingActivity[];
};

export async function fetchUpcomingActivities(classroomId?: string): Promise<UpcomingActivity[]> {
  const query = classroomId ? `?classroomId=${encodeURIComponent(classroomId)}` : "";
  const response = await apiGet<UpcomingActivitiesResponse>(`/api/aula/actividades${query}`);
  return response.items;
}

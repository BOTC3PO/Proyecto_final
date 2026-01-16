import { apiGet } from "../lib/api";

export type LeaderboardEntry = {
  id: string;
  name: string;
  points: number;
};

type LeaderboardResponse = {
  items: LeaderboardEntry[];
};

export async function fetchLeaderboard(classroomId?: string): Promise<LeaderboardEntry[]> {
  const query = classroomId ? `?classroomId=${encodeURIComponent(classroomId)}` : "";
  const response = await apiGet<LeaderboardResponse>(`/api/aula/leaderboard${query}`);
  return response.items;
}

import { apiFetch } from "./api";

export type CalendarioAgendaItem = {
  id: string;
  title: string;
  time: string;
  location: string;
  type: string;
  tone: string;
};

export type CalendarioBlock = {
  id: string;
  time: string;
  title: string;
  location: string;
};

export type CalendarioDay = {
  id: string;
  day: string;
  blocks: CalendarioBlock[];
};

export type CalendarioData = {
  agenda: CalendarioAgendaItem[];
  weeklySchedule: CalendarioDay[];
  reminders: string[];
};

export async function fetchCalendario(): Promise<CalendarioData> {
  return apiFetch<CalendarioData>("/api/calendario");
}

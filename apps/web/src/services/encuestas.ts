import { apiFetch } from "./api";

export type SurveyType = "normal" | "puntuacion" | "segunda_vuelta";
export type SurveyStatus = "borrador" | "activa" | "cerrada" | "archivada";

export type SurveyOption = {
  id: string;
  label: string;
};

export type Survey = {
  id: string;
  title: string;
  description: string;
  type: SurveyType;
  options: SurveyOption[];
  maxOptions?: number;
  startAt: string;
  endAt: string;
  showResultsBeforeClose?: boolean;
  showResultsRealtime?: boolean;
  status: SurveyStatus;
  responsesCount?: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  archivedAt?: string;
};

export type SurveyListResponse = {
  items: Survey[];
  limit: number;
  offset: number;
};

export async function fetchSurveys(): Promise<SurveyListResponse> {
  return apiFetch<SurveyListResponse>("/api/encuestas");
}

export async function createSurvey(payload: Survey): Promise<{ id: string; surveyId: string }> {
  return apiFetch<{ id: string; surveyId: string }>("/api/encuestas", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export async function deleteSurvey(id: string): Promise<void> {
  await apiFetch<void>(`/api/encuestas/${id}`, { method: "DELETE" });
}

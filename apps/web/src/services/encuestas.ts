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
  classroomId: string;
  classroomName?: string;
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

export type SurveyResultsOption = {
  id: string;
  label: string;
  count: number;
  percentage: number;
  scoreTotal?: number;
  averageScore?: number;
};

export type SurveyResultsRound = {
  round: number;
  totalVotes: number;
  counts: Array<{ id: string; label: string; count: number; percentage: number }>;
  eliminated?: { id: string; label: string };
  winner?: { id: string; label: string; count: number; percentage: number };
};

export type SurveyResults = {
  surveyId: string;
  totalVotes: number;
  options: SurveyResultsOption[];
  rounds?: SurveyResultsRound[];
  winner?: { id: string; label: string; count: number; percentage: number };
};

export type SurveyVotePayload =
  | { aulaId: string; optionId: string }
  | { aulaId: string; scores: Array<{ optionId: string; score: number }> }
  | { aulaId: string; ranking: string[] };

export async function fetchSurveys(aulaId: string): Promise<SurveyListResponse> {
  return apiFetch<SurveyListResponse>(`/api/encuestas?aulaId=${encodeURIComponent(aulaId)}`);
}

export async function createSurvey(payload: Survey): Promise<{ id: string; surveyId: string }> {
  return apiFetch<{ id: string; surveyId: string }>("/api/encuestas", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export async function updateSurvey(id: string, payload: Partial<Omit<Survey, "id" | "createdAt" | "createdBy">>) {
  return apiFetch<{ ok: boolean }>(`/api/encuestas/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload)
  });
}

export async function deleteSurvey(id: string): Promise<void> {
  await apiFetch<void>(`/api/encuestas/${id}`, { method: "DELETE" });
}

export async function voteSurvey(id: string, payload: SurveyVotePayload, usuarioId: string) {
  return apiFetch<{ ok: boolean }>(`/api/encuestas/${id}/votos`, {
    method: "POST",
    headers: {
      "x-usuario-id": usuarioId
    },
    body: JSON.stringify(payload)
  });
}

export async function fetchSurveyResults(id: string, aulaId: string) {
  return apiFetch<SurveyResults>(`/api/encuestas/${id}/resultados?aulaId=${encodeURIComponent(aulaId)}`);
}

import { apiGet, apiPost, apiDelete } from "../lib/api";

export type OrigenEvento = "escuela" | "aula";

export type TipoEventoEscuela =
  | "feriado" | "vacaciones" | "acto_escolar"
  | "evento_institucional" | "sin_clases";

export type TipoEventoAula =
  | "clase" | "evaluacion" | "evento"
  | "feriado" | "sin_clases";

export type TipoEvento = TipoEventoEscuela | TipoEventoAula;

export type EventoCalendario = {
  id: string;
  tipo: TipoEvento;
  titulo: string;
  descripcion: string | null;
  fechaInicio: string;
  fechaFin: string;
  origen: OrigenEvento;
  aulaId?: string;
  aulaNombre?: string;
  escuelaId?: string;
};

export async function fetchCalendarioUnificado(
  desde: string,
  hasta: string
): Promise<EventoCalendario[]> {
  const data = await apiGet<{ eventos: EventoCalendario[] }>(
    `/api/calendario/unificado?desde=${desde}&hasta=${hasta}`
  );
  return data.eventos ?? [];
}

export async function crearEventoEscuela(params: {
  tipo: TipoEventoEscuela;
  titulo: string;
  descripcion?: string;
  fechaInicio: string;
  fechaFin: string;
}): Promise<{ id: string }> {
  return apiPost("/api/calendario/escuela", params);
}

export async function eliminarEventoEscuela(id: string): Promise<void> {
  await apiDelete(`/api/calendario/escuela/${id}`);
}

export async function crearEventoAula(params: {
  aulaId: string;
  tipo: TipoEventoAula;
  titulo: string;
  descripcion?: string;
  fechaInicio: string;
  fechaFin?: string;
}): Promise<{ id: string }> {
  return apiPost("/api/calendario/aula", params);
}

export async function eliminarEventoAula(id: string): Promise<void> {
  await apiDelete(`/api/calendario/aula/${id}`);
}

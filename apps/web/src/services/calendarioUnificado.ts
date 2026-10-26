import { apiGet, apiPost, apiPatch, apiDelete } from "../lib/api";

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
  // FIX-CALENDARIO-B: opcional. Si viene, el evento queda acotado
  // a ese aula. Si se omite o viene vacío, el evento es global
  // (comportamiento histórico).
  aulaId?: string;
}): Promise<{ id: string; aulaId: string | null }> {
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

// FIX-TEST4-CALENDARIO-EDIT — antes el back no tenía PATCH. Ahora
// se editan eventos de escuela o de aula con los mismos campos
// parciales (PATCH, no PUT). Solo se actualizan los campos presentes.
export async function editarEventoEscuela(
  id: string,
  params: {
    tipo?: TipoEventoEscuela;
    titulo?: string;
    descripcion?: string;
    fechaInicio?: string;
    fechaFin?: string;
    aulaId?: string;
  },
): Promise<void> {
  await apiPatch(`/api/calendario/escuela/${id}`, params);
}

export async function editarEventoAula(
  id: string,
  params: {
    tipo?: TipoEventoAula;
    titulo?: string;
    descripcion?: string;
    fechaInicio?: string;
    fechaFin?: string;
  },
): Promise<void> {
  await apiPatch(`/api/calendario/aula/${id}`, params);
}

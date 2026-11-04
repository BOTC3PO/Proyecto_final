/** J8 — reventa de tickets de examen entre alumnos del aula. */
import { apiGet, apiPost } from "../lib/api";

export type OpcionesReventa = {
  companeros: Array<{ id: string; nombre: string }>;
  modulos: Array<{ moduloId: string; titulo: string; libres: number; ofertasPendientes: number }>;
  comisionPorcentaje: number;
};

export type OfertaReventa = {
  id: string;
  aulaId: string;
  moduloId: string;
  moduloTitulo: string;
  monto: number;
  neto: number;
  comision: number;
  soyVendedor: boolean;
  contraparte: string;
};

export const fetchOpcionesReventa = (aulaId: string) =>
  apiGet<OpcionesReventa>(`/api/economia/tickets/reventa/opciones?aulaId=${encodeURIComponent(aulaId)}`);

export const fetchOfertasReventa = async (aulaId: string) => {
  const r = await apiGet<{ items?: OfertaReventa[] }>("/api/economia/tickets/reventa");
  return (Array.isArray(r?.items) ? r.items : []).filter((o) => o.aulaId === aulaId);
};

export const ofrecerTicket = (body: { aulaId: string; moduloId: string; receptorId: string; precio: number }) =>
  apiPost<{ id: string; comision: number; netoParaElVendedor: number }>("/api/economia/tickets/reventa", body);

export const aceptarOferta = (id: string) => apiPost(`/api/economia/tickets/reventa/${encodeURIComponent(id)}/aceptar`, {});

export const cancelarOferta = (id: string) => apiPost(`/api/economia/tickets/reventa/${encodeURIComponent(id)}/cancelar`, {});

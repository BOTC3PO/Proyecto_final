import { apiGet, apiPost } from "../lib/api";

export type ExamenSubasta = {
  id: string;
  aulaId?: string;
  estado: "anunciado" | "cerrado";
  subastaActiva: boolean;
  maxCompra: number;
  impuestoTasa: number;
  fechaExamen?: string;
  precioPromedio?: number | null;
  precioPromedioAjustado?: number;
};

export type PujaItem = {
  id: string;
  examenId: string;
  usuarioId: string;
  puntos: number;
  montoPorPunto: number;
  estado: "pendiente" | "aceptada" | "rechazada";
};

export async function fetchSubastasActivas(
  aulaId: string
): Promise<ExamenSubasta[]> {
  const data = await apiGet<{ items: ExamenSubasta[] }>(
    `/api/economia/examenes?estado=anunciado`
  );
  return (data.items ?? []).filter(
    (e) => e.aulaId === aulaId && e.subastaActiva
  );
}

export async function fetchMisPujas(
  examenId: string,
  usuarioId: string
): Promise<PujaItem[]> {
  const data = await apiGet<{ items: PujaItem[] }>(
    `/api/economia/examenes/${examenId}/pujas?usuarioId=${usuarioId}`
  );
  return data.items ?? [];
}

export async function crearPuja(
  examenId: string,
  payload: {
    usuarioId: string;
    aulaId: string;
    schoolId: string;
    puntos: number;
    montoPorPunto: number;
  }
): Promise<{ id: string }> {
  return apiPost(`/api/economia/examenes/${examenId}/pujas`, payload);
}

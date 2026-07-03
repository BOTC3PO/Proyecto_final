import { apiGet, apiPatch } from "../lib/api";

export type EscuelaBranding = {
  logoUrl?: string | null;
  iconoUrl?: string | null;
  colorPrimario?: string | null;
  colorSecundario?: string | null;
};

export type Escuela = {
  id: string;
  name: string;
  code?: string | null;
  branding: EscuelaBranding | null;
};

export const fetchEscuela = (escuelaId: string) => apiGet<Escuela>(`/api/escuelas/${escuelaId}`);

export const actualizarBranding = (escuelaId: string, branding: EscuelaBranding) =>
  apiPatch<{ ok: boolean; branding: EscuelaBranding }>(`/api/escuelas/${escuelaId}/branding`, branding);

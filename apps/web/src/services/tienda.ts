import { apiGet, apiPost } from "../lib/api";

export type TiendaItem = {
  id: string;
  tipo: "tema" | "avatar" | "marco" | "animacion";
  nombre: string;
  descripcion: string;
  precio: number;
  moneda: string;
  asset_id: string | null;
  preview_css: string | null;
  activo: number;
  orden: number;
};

export type UsuarioItem = {
  item_id: string;
  comprado_at: string;
  origen: string;
  tipo: string;
  nombre: string;
  asset_id: string | null;
};

export type CompraResult = {
  ok: boolean;
  gratis?: boolean;
  saldoRestante?: number;
  error?: string;
  mensaje?: string;
};

export async function fetchCatalogo(
  tipo?: string
): Promise<TiendaItem[]> {
  const qs = tipo ? `?tipo=${encodeURIComponent(tipo)}` : "";
  const data = await apiGet<{ items: TiendaItem[] }>(
    `/api/tienda${qs}`
  );
  return data.items ?? [];
}

export async function fetchMisItems(): Promise<UsuarioItem[]> {
  const data = await apiGet<{ items: UsuarioItem[] }>(
    "/api/tienda/mis-items"
  );
  return data.items ?? [];
}

export async function comprarItem(
  itemId: string
): Promise<CompraResult> {
  return apiPost<CompraResult>("/api/tienda/comprar", { itemId });
}

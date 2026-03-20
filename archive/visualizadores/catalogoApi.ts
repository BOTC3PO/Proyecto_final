import { apiGet } from "../lib/api";
import type { VisualSpec } from "./types";

export type VisualizadorListadoItem = {
  id: string;
  title: string;
  description: string;
  kind: string | null;
};

export type VisualizadorDetalle = {
  id: string;
  title: string;
  description: string;
  spec: VisualSpec;
};

const listCache = new Map<string, VisualizadorListadoItem[]>();
const detailCache = new Map<string, VisualizadorDetalle>();

export async function listarVisualizadores(): Promise<VisualizadorListadoItem[]> {
  const cacheKey = "all";
  const cached = listCache.get(cacheKey);
  if (cached) return cached;

  const items = await apiGet<VisualizadorListadoItem[]>("/api/visualizadores");
  listCache.set(cacheKey, items);
  return items;
}

export async function obtenerVisualizador(id: string): Promise<VisualizadorDetalle> {
  const cached = detailCache.get(id);
  if (cached) return cached;

  const item = await apiGet<VisualizadorDetalle>(`/api/visualizadores/${encodeURIComponent(id)}`);
  detailCache.set(id, item);
  return item;
}

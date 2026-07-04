/**
 * Cliente para `GET /api/maps/geonames/buscar` — búsqueda de lugares
 * (países/ciudades) para el "Buscar lugar" del editor de mapas.
 */
import { apiGet } from "../api";

export type GeonameResultado = {
  geonameid: number;
  nombre: string;
  nombreAscii: string;
  pais: string;
  tipo: "pais" | "ciudad" | "otro";
  lat: number;
  lon: number;
  poblacion: number;
};

export async function buscarLugares(termino: string, limite = 8): Promise<GeonameResultado[]> {
  const q = termino.trim();
  if (q.length < 2) return [];
  const usp = new URLSearchParams({ q, limite: String(limite) });
  const res = await apiGet<{ items?: GeonameResultado[] }>(`/api/maps/geonames/buscar?${usp.toString()}`);
  return res.items ?? [];
}

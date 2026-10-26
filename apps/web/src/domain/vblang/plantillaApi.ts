/**
 * Cliente HTTP para las rutas REST de plantillas VBLang (Sprint 7).
 *
 * Usa los helpers existentes (`apiGet`, `apiPost`, ...) y propaga
 * `DslApiError` cuando la API devuelve un error de validación del DSL.
 */

import { apiDelete, apiGet, apiPost, apiPut, ApiError } from "../../lib/api";
import type {
  PlantillaCreateInput,
  PlantillaDetail,
  PlantillaForkInput,
  PlantillaListParams,
  PlantillaListResponse,
  PlantillaUpdateInput,
  PlantillaVersion,
} from "./plantilla.types";

export class DslApiError extends Error {
  line?: number;
  col?: number;
  constructor(message: string, line?: number, col?: number) {
    super(message);
    this.name = "DslApiError";
    if (line !== undefined) this.line = line;
    if (col !== undefined) this.col = col;
  }
}

interface DslErrorPayload {
  dslError?: { message?: string; line?: number; col?: number };
  error?: string;
}

function rethrowAsDslIfPossible(err: unknown): never {
  if (err instanceof ApiError && err.payload) {
    const payload = err.payload as DslErrorPayload;
    if (payload.dslError) {
      throw new DslApiError(
        payload.dslError.message ?? payload.error ?? "DSL inválido",
        payload.dslError.line,
        payload.dslError.col,
      );
    }
  }
  throw err;
}

function buildQuery(params: PlantillaListParams): string {
  const usp = new URLSearchParams();
  if (params.q) usp.set("q", params.q);
  if (params.materia) usp.set("materia", params.materia);
  if (params.visibility) usp.set("visibility", params.visibility);
  if (params.owner) usp.set("owner", params.owner);
  if (params.limit !== undefined) usp.set("limit", String(params.limit));
  if (params.offset !== undefined) usp.set("offset", String(params.offset));
  const qs = usp.toString();
  return qs ? `?${qs}` : "";
}

export async function listPlantillas(
  params: PlantillaListParams = {},
): Promise<PlantillaListResponse> {
  return apiGet<PlantillaListResponse>(`/api/plantillas${buildQuery(params)}`);
}

export async function getPlantilla(id: string): Promise<PlantillaDetail> {
  return apiGet<PlantillaDetail>(`/api/plantillas/${encodeURIComponent(id)}`);
}

export interface PlantillaBatchItem {
  id: string;
  nombre: string;
  materia?: string;
  version: number;
}

/**
 * Batch lookup para evitar N round-trips cuando solo necesitamos los nombres
 * (Sprint 10B · B8). El backend aplica los mismos filtros de visibilidad que
 * GET /api/plantillas y omite las que el usuario no puede ver.
 */
export async function batchGetPlantillas(
  ids: string[],
): Promise<PlantillaBatchItem[]> {
  if (ids.length === 0) return [];
  const res = await apiPost<{ items: PlantillaBatchItem[] }>(
    "/api/plantillas/batch",
    { ids },
  );
  return res.items;
}

export async function createPlantilla(
  input: PlantillaCreateInput,
): Promise<PlantillaDetail> {
  try {
    return await apiPost<PlantillaDetail>("/api/plantillas", input);
  } catch (err) {
    rethrowAsDslIfPossible(err);
  }
}

export async function updatePlantilla(
  id: string,
  input: PlantillaUpdateInput,
): Promise<PlantillaDetail> {
  try {
    return await apiPut<PlantillaDetail>(
      `/api/plantillas/${encodeURIComponent(id)}`,
      input,
    );
  } catch (err) {
    rethrowAsDslIfPossible(err);
  }
}

export async function deletePlantilla(id: string): Promise<{ ok: true }> {
  await apiDelete(`/api/plantillas/${encodeURIComponent(id)}`);
  return { ok: true };
}

export async function forkPlantilla(
  id: string,
  input: PlantillaForkInput = {},
): Promise<PlantillaDetail> {
  return apiPost<PlantillaDetail>(
    `/api/plantillas/${encodeURIComponent(id)}/fork`,
    input,
  );
}

/**
 * F6-01 — "Usar como base / Clonar para editar". Crea una copia editable de la
 * plantilla (típicamente una oficial) cuyo dueño es el solicitante; la original
 * queda intacta. Mismo contrato que `forkPlantilla` (alias semántico).
 */
export async function clonarPlantilla(
  id: string,
  input: PlantillaForkInput = {},
): Promise<PlantillaDetail> {
  return apiPost<PlantillaDetail>(
    `/api/plantillas/${encodeURIComponent(id)}/clonar`,
    input,
  );
}

export async function getPlantillaVersions(
  id: string,
): Promise<PlantillaVersion[]> {
  return apiGet<PlantillaVersion[]>(
    `/api/plantillas/${encodeURIComponent(id)}/versions`,
  );
}

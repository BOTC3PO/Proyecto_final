/**
 * Cliente HTTP para las rutas REST de datasets VBLang (Sprint 9B).
 *
 * Espejo de `plantillaApi.ts` pero contra `/api/vblang/datasets`. Reusa los
 * helpers existentes (`apiGet`, `apiPost`, ...).
 */

import { apiDelete, apiGet, apiPost, apiPut } from "../../lib/api";
import type {
  DatasetAddRowsResponse,
  DatasetCreateInput,
  DatasetDetail,
  DatasetListParams,
  DatasetListResponse,
  DatasetRefreshResponse,
  DatasetUpdateInput,
  DatasetUpdateRowResponse,
} from "./dataset.types";

function buildQuery(params: DatasetListParams): string {
  const usp = new URLSearchParams();
  if (params.q) usp.set("q", params.q);
  if (params.visibility) usp.set("visibility", params.visibility);
  if (params.owner) usp.set("owner", params.owner);
  if (params.limit !== undefined) usp.set("limit", String(params.limit));
  if (params.offset !== undefined) usp.set("offset", String(params.offset));
  const qs = usp.toString();
  return qs ? `?${qs}` : "";
}

export async function listDatasets(
  params: DatasetListParams = {},
): Promise<DatasetListResponse> {
  return apiGet<DatasetListResponse>(`/api/vblang/datasets${buildQuery(params)}`);
}

export async function getDataset(id: string): Promise<DatasetDetail> {
  return apiGet<DatasetDetail>(`/api/vblang/datasets/${encodeURIComponent(id)}`);
}

export async function createDataset(
  input: DatasetCreateInput,
): Promise<DatasetDetail> {
  return apiPost<DatasetDetail>("/api/vblang/datasets", input);
}

export async function updateDataset(
  id: string,
  input: DatasetUpdateInput,
): Promise<DatasetDetail> {
  return apiPut<DatasetDetail>(
    `/api/vblang/datasets/${encodeURIComponent(id)}`,
    input,
  );
}

export async function deleteDataset(id: string): Promise<{ ok: true }> {
  await apiDelete(`/api/vblang/datasets/${encodeURIComponent(id)}`);
  return { ok: true };
}

/** PLAN-E §20: baja la fuente externa y reemplaza todas las filas. */
export async function refreshDataset(id: string): Promise<DatasetRefreshResponse> {
  return apiPost<DatasetRefreshResponse>(
    `/api/vblang/datasets/${encodeURIComponent(id)}/refresh`,
    {},
  );
}

export async function addRows(
  id: string,
  filas: Array<Record<string, unknown>>,
): Promise<DatasetAddRowsResponse> {
  return apiPost<DatasetAddRowsResponse>(
    `/api/vblang/datasets/${encodeURIComponent(id)}/filas`,
    { filas },
  );
}

export async function updateRow(
  id: string,
  filaId: string,
  datos: Record<string, unknown>,
): Promise<DatasetUpdateRowResponse> {
  return apiPut<DatasetUpdateRowResponse>(
    `/api/vblang/datasets/${encodeURIComponent(id)}/filas/${encodeURIComponent(filaId)}`,
    { datos },
  );
}

export async function deleteRow(
  id: string,
  filaId: string,
): Promise<{ ok: true }> {
  await apiDelete(
    `/api/vblang/datasets/${encodeURIComponent(id)}/filas/${encodeURIComponent(filaId)}`,
  );
  return { ok: true };
}

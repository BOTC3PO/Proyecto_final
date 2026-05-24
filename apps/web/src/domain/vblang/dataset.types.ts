/**
 * Tipos compartidos del frontend para datasets VBLang (Sprint 9B).
 *
 * Espejan el shape devuelto por `/api/vblang/datasets` (api/src/routes/vblang-datasets.ts).
 *
 * NOTA: En el Sprint 7 el GET de detalle devolvía `filas: Record<string, unknown>[]`
 * sin id. Para que el editor pueda direccionar PUT/DELETE por `filaId`, el GET
 * fue extendido en Sprint 9B a `filas: Array<{ id, datos }>`. Si en el futuro
 * se necesita compatibilidad hacia atrás se puede aceptar ambos shapes acá.
 */

import type { Visibility } from "./plantilla.types";

export type ColumnaTipo = "string" | "number" | "boolean";

export type ColumnasMap = Record<string, ColumnaTipo>;

export interface DatasetListItem {
  id: string;
  nombre: string;
  descripcion?: string;
  visibility: Visibility;
  ownerUserId: string;
  schoolId?: string;
  columnas: ColumnasMap;
  filasCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface DatasetFila {
  id: string;
  datos: Record<string, unknown>;
}

export interface DatasetDetail extends Omit<DatasetListItem, "filasCount"> {
  filas: DatasetFila[];
}

export interface DatasetListParams {
  q?: string;
  visibility?: "todas" | "privadas" | "escuela" | "publicas";
  owner?: "todas" | "mias" | "otros";
  limit?: number;
  offset?: number;
}

export interface DatasetListResponse {
  items: DatasetListItem[];
  total: number;
}

export interface DatasetCreateInput {
  nombre: string;
  descripcion?: string;
  visibility: Visibility;
  columnas: ColumnasMap;
  filas?: Array<Record<string, unknown>>;
}

export interface DatasetUpdateInput {
  nombre?: string;
  descripcion?: string;
  visibility?: Visibility;
  /** ATENCIÓN: cambiar columnas en un dataset existente NO está soportado en v1. */
  columnas?: ColumnasMap;
}

export interface DatasetAddRowsResponse {
  ok: true;
  added: number;
}

export interface DatasetUpdateRowResponse {
  id: string;
  orden: number;
  datos: Record<string, unknown>;
}

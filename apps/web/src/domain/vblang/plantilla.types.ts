/**
 * Tipos compartidos del frontend para plantillas VBLang.
 *
 * Espejan el shape devuelto por las rutas Sprint 7 (`/api/plantillas`).
 */

export type Visibility = "privada" | "escuela" | "publica";

export interface PlantillaListItem {
  id: string;
  nombre: string;
  descripcion?: string;
  materia?: string;
  tags?: string[];
  visibility: Visibility;
  publicAprobado: boolean;
  /** F6-01 — true si es una plantilla oficial (dueño = sistema). Derivado por la API. */
  esOficial?: boolean;
  ownerUserId: string;
  ownerName?: string;
  schoolId?: string;
  version: number;
  basadoEn?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PlantillaDetail extends PlantillaListItem {
  codigoDsl: string;
}

export interface PlantillaCreateInput {
  nombre: string;
  descripcion?: string;
  materia?: string;
  tags?: string[];
  codigoDsl: string;
  visibility: Visibility;
}

export interface PlantillaUpdateInput {
  nombre?: string;
  descripcion?: string;
  materia?: string;
  tags?: string[];
  codigoDsl?: string;
  visibility?: Visibility;
  changelog?: string;
}

export interface PlantillaForkInput {
  nombre?: string;
  visibility?: Visibility;
}

export interface PlantillaVersion {
  id: string;
  version: number;
  changelog?: string;
  codigoDsl: string;
  createdAt: string;
  createdBy: string;
}

export interface PlantillaListParams {
  q?: string;
  materia?: string;
  visibility?: "todas" | "privadas" | "escuela" | "publicas";
  owner?: "todas" | "mias" | "otros";
  limit?: number;
  offset?: number;
}

export interface PlantillaListResponse {
  items: PlantillaListItem[];
  total: number;
}

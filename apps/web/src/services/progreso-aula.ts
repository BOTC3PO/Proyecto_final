/**
 * Servicio para la matriz de progreso del aula (Tarea 18).
 *
 * Consume GET /api/progreso/aula-matriz?aulaId=... (Tarea 17).
 * Devuelve los modulos asignados al aula y, para cada alumno, su status
 * en cada modulo (`iniciado` | `en_progreso` | `completado` | `null`).
 */

import { apiGet } from "../lib/api";

export type AulaMatrizStatus = "iniciado" | "en_progreso" | "completado" | null;

export type AulaMatrizModulo = {
  id: string;
  title: string;
};

export type AulaMatrizAlumno = {
  id: string;
  name: string;
  /** Mapa moduloId → status (o null si el alumno no tiene progreso). */
  progresos: Record<string, AulaMatrizStatus>;
};

export type AulaMatrizResponse = {
  modulos: AulaMatrizModulo[];
  alumnos: AulaMatrizAlumno[];
};

export async function fetchAulaMatriz(aulaId: string): Promise<AulaMatrizResponse> {
  return apiGet<AulaMatrizResponse>(
    `/api/progreso/aula-matriz?aulaId=${encodeURIComponent(aulaId)}`,
  );
}

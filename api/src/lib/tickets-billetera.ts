import type { prisma } from "./prisma";
import { topePorAlumno } from "./examen-tickets";

/**
 * Billeteras de tickets. Cada subasta cerrada guarda, por alumno, una fila
 * `{ usuarioId, examenId, tickets, canjeados }` en `economiaExamenPunto` (JSON). Un módulo de
 * examen puede tener varias subastas (una por ticket), así que lo que importa al alumno es la
 * suma de sus billeteras sobre todas las subastas de ese módulo.
 */
export type ExamenJson = {
  id: string;
  moduloId?: string;
  aulaId?: string;
  modo?: string;
  estado?: string;
  maxCompra?: number;
  updatedAt?: string;
};
export type BilleteraJson = {
  usuarioId?: string;
  examenId?: string;
  tickets?: number;
  canjeados?: number;
  puntos?: number;
  updatedAt?: string;
};
export type FilaBilletera = { examen: ExamenJson; fila: { id: string }; billetera: BilleteraJson };
export type ResumenTickets = {
  comprados: number;
  canjeados: number;
  disponibles: number;
  maximoCanjeable: number;
  restantesCanjeables: number;
};

type Db = Pick<typeof prisma, "economiaExamen" | "economiaExamenPunto">;

export const parseJson = <T,>(json: string | null | undefined, fallback: T): T => {
  try { return json ? (JSON.parse(json) as T) : fallback; } catch { return fallback; }
};

/** Todas las billeteras del alumno en subastas cerradas del módulo, de la más vieja a la más nueva. */
export async function billeterasDelModulo(db: Db, moduloId: string, usuarioId: string): Promise<FilaBilletera[]> {
  const examenes = (await db.economiaExamen.findMany({ where: {} }))
    .map((r) => parseJson<ExamenJson | null>(r.json, null))
    .filter((e): e is ExamenJson => !!e && e.moduloId === moduloId && e.estado === "cerrado")
    .sort((a, b) => String(a.updatedAt ?? "").localeCompare(String(b.updatedAt ?? "")));
  const salida: FilaBilletera[] = [];
  for (const examen of examenes) {
    const filas = await db.economiaExamenPunto.findMany({ where: { examenId: examen.id } });
    for (const fila of filas) {
      const billetera = parseJson<BilleteraJson>(fila.json, {});
      if (billetera.usuarioId === usuarioId) salida.push({ examen, fila, billetera });
    }
  }
  return salida;
}

export function resumenDe(bs: FilaBilletera[]): ResumenTickets {
  const comprados = bs.reduce((a, b) => a + Math.floor(b.billetera.tickets ?? 0), 0);
  const canjeados = bs.reduce((a, b) => a + (b.billetera.canjeados ?? 0), 0);
  const tope = bs.length ? Math.min(...bs.map((b) => topePorAlumno(b.examen.maxCompra))) : topePorAlumno(undefined);
  return {
    comprados,
    canjeados,
    disponibles: Math.max(0, comprados - canjeados),
    maximoCanjeable: tope,
    restantesCanjeables: Math.max(0, Math.min(comprados - canjeados, tope - canjeados))
  };
}

/** Tickets sin canjear de una billetera. */
export const libresDe = (b: BilleteraJson) => Math.max(0, Math.floor(b.tickets ?? 0) - (b.canjeados ?? 0));

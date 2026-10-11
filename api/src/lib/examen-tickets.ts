/**
 * Tickets de examen: reglas de negocio puras.
 *
 * Los tickets se compran en la subasta del examen (con la moneda de la plataforma) y, una vez
 * rendido el examen, se canjean por puntos de nota. Para que no sirvan para aprobar sin esfuerzo:
 *
 *  - cada alumno puede canjear como máximo MAX_TICKETS_CANJE_POR_ALUMNO tickets por examen;
 *  - la oferta total de tickets del examen es el 50% de los alumnos del aula, con mínimo 2.
 */

export const MAX_TICKETS_CANJE_POR_ALUMNO = 2;
export const PORCENTAJE_ALUMNOS_CUPO = 0.5;
export const CUPO_MINIMO = 2;
/** Cada ticket suma 1 punto de una escala de 1 a 10, o sea el 10% del puntaje máximo del examen. */
export const FRACCION_NOTA_POR_TICKET = 0.1;

/** El ticket arranca en este porcentaje de lo que tiene, en promedio, un alumno del aula. */
export const FRACCION_PRECIO_INICIAL = 0.25;

/**
 * Precio inicial (mínimo) por ticket: el promedio de monedas por alumno del aula × 25%.
 * Así el precio escala con la economía del aula: con pocas monedas en circulación el ticket es
 * barato, y con muchas hay que ahorrar más. Sin alumnos o sin monedas no hay piso (0).
 */
export function precioInicialTicket(monedasDelAula: number, alumnos: number): number {
  if (!(alumnos > 0) || !(monedasDelAula > 0)) return 0;
  return Math.round((monedasDelAula / alumnos) * FRACCION_PRECIO_INICIAL * 100) / 100;
}

/** Comisión de la reventa entre alumnos: se descuenta del precio y se quema (sale de circulación). */
export const COMISION_REVENTA = 0.1;
/** Tickets que un alumno puede tener por módulo (canjeados o no): evita acaparar la oferta. */
export const MAX_TICKETS_TENENCIA = 2;

/** Reparto del precio de una reventa: `neto` va al vendedor y `comision` se quema. */
export function repartoReventa(precio: number): { comision: number; neto: number } {
  const comision = Math.round(precio * COMISION_REVENTA * 100) / 100;
  return { comision, neto: Math.round((precio - comision) * 100) / 100 };
}

/** Tickets que existen para un examen según la cantidad de alumnos del aula. */
export function cupoTickets(alumnos: number): number {
  const n = Number.isFinite(alumnos) && alumnos > 0 ? Math.floor(alumnos) : 0;
  return Math.max(CUPO_MINIMO, Math.ceil(n * PORCENTAJE_ALUMNOS_CUPO));
}

/** Tope de tickets que un alumno puede comprar/canjear: el menor entre el del examen y el global. */
export function topePorAlumno(maxCompraExamen?: number | null): number {
  const m = typeof maxCompraExamen === "number" && maxCompraExamen > 0 ? Math.floor(maxCompraExamen) : Infinity;
  return Math.min(MAX_TICKETS_CANJE_POR_ALUMNO, m);
}

/** Puntaje (en la escala cruda del intento) que aportan `tickets` canjeados. */
export function bonusPorTickets(tickets: number, maxScore: number): number {
  if (!(maxScore > 0) || !(tickets > 0)) return 0;
  return tickets * FRACCION_NOTA_POR_TICKET * maxScore;
}

export type Puja = { id: string; usuarioId: string; puntos: number; montoPorPunto: number; createdAt?: string };

/**
 * Reparte el cupo entre las pujas pendientes: primero las que más pagan por ticket (a igualdad,
 * la más antigua). Una puja entra completa o no entra; si no cabe se salta y se sigue con las
 * siguientes. Devuelve los ids aceptados y rechazados.
 */
export function ordenarPujas<T extends Puja>(pujas: T[]): T[] {
  return [...pujas].sort(
    (a, b) =>
      b.montoPorPunto - a.montoPorPunto ||
      String(a.createdAt ?? "").localeCompare(String(b.createdAt ?? "")) ||
      a.id.localeCompare(b.id)
  );
}

export function repartirCupo(pujas: Puja[], cupo: number): { aceptadas: string[]; sinCupo: string[] } {
  const orden = ordenarPujas(pujas);
  let restante = cupo;
  const aceptadas: string[] = [];
  const sinCupo: string[] = [];
  for (const p of orden) {
    if (p.puntos <= restante) {
      aceptadas.push(p.id);
      restante -= p.puntos;
    } else {
      sinCupo.push(p.id);
    }
  }
  return { aceptadas, sinCupo };
}

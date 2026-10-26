/**
 * H11 — paginación común de los listados. `?limit=` (por defecto 200, máximo 500) y `?offset=`. Se pide una fila
 * de más para saber si hay otra página sin hacer un `count` aparte; la respuesta suma `hasMore`, `limit` y
 * `offset` a lo que ya devolvía, así que los clientes que no paginan siguen funcionando con la primera página.
 */
export type Pagina = { limit: number; offset: number; take: number; skip: number };

const entero = (v: unknown): number | null => {
  const n = typeof v === "string" ? Number(v) : typeof v === "number" ? v : NaN;
  return Number.isInteger(n) && n >= 0 ? n : null;
};

export function leerPagina(
  query: Record<string, unknown> | undefined,
  opciones: { porDefecto?: number; maximo?: number } = {}
): Pagina {
  const maximo = opciones.maximo ?? 500;
  const porDefecto = Math.min(opciones.porDefecto ?? 200, maximo);
  const pedido = entero(query?.limit);
  const limit = Math.min(Math.max(pedido ?? porDefecto, 1), maximo);
  const offset = entero(query?.offset) ?? 0;
  return { limit, offset, take: limit + 1, skip: offset };
}

/** Recorta la fila extra y arma los datos de paginación. */
export function recortar<T>(filas: T[], p: Pagina): { items: T[]; hasMore: boolean; limit: number; offset: number } {
  const hasMore = filas.length > p.limit;
  return { items: hasMore ? filas.slice(0, p.limit) : filas, hasMore, limit: p.limit, offset: p.offset };
}

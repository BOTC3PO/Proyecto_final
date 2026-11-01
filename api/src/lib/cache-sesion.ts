/**
 * D4 — caché corta de lo que `requireUser` lee en cada pedido: la fila del usuario y sus membresías.
 *
 * Cada pedido autenticado hacía 2 o 3 consultas solo para saber quién es y qué roles tiene. Acá se guardan
 * AUTH_CACHE_SEGUNDOS (15 por defecto en producción; 0 la apaga, como en desarrollo y pruebas). Cualquier escritura en `usuarios`
 * o `membresias` vacía la caché (lib/prisma.ts), así que un ban, una baja o un cambio de rol siguen valiendo
 * en el pedido siguiente dentro de este proceso. Con varias instancias (D5), en las otras vale a lo sumo
 * después del plazo.
 */
import { ENV } from "./env";

type Entrada<T> = { vence: number; valor: T };
const entradas = new Map<string, Entrada<unknown>>();
const MAX_ENTRADAS = 20_000;

export async function conCache<T>(clave: string, cargar: () => Promise<T>): Promise<T> {
  const ttl = ENV.AUTH_CACHE_SEGUNDOS * 1000;
  if (!(ttl > 0)) return cargar();
  const ahora = Date.now();
  const hit = entradas.get(clave);
  if (hit && hit.vence > ahora) return hit.valor as T;
  const valor = await cargar();
  if (entradas.size >= MAX_ENTRADAS) entradas.clear();
  entradas.set(clave, { vence: ahora + ttl, valor });
  return valor;
}

/** Se llama ante cualquier escritura en usuarios o membresías. */
export function vaciarCacheSesion() {
  entradas.clear();
}

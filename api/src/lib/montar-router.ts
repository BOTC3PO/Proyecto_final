/**
 * C6 — cada router declara rutas absolutas (`/api/aulas/:id`) y se monta en la raíz. Sin más, todo pedido
 * recorre los ~70 routers, y un `router.use(middleware)` sin ruta (como `profesor.use(requireUser)`) corría
 * para cualquier pedido que pasara por ahí, aunque no fuera de ese router.
 *
 * `soloSusRutas(router)` calcula los prefijos de sus rutas (los dos primeros segmentos: `/api/aulas`) y solo
 * le pasa los pedidos que empiezan con alguno. Las rutas no cambian. Si un router tiene una ruta sin prefijo
 * fijo (`/api/:algo`, una expresión regular), se monta como antes, sin filtro.
 *
 * El envoltorio conserva `stack` para que las pruebas que recorren la app (sec-c1, sec-c3) sigan viendo las rutas.
 */
import type { NextFunction, Request, Response, Router } from "express";

type Capa = { route?: { path?: unknown } };

const esFijo = (segmento: string | undefined) => Boolean(segmento) && !/[:*?()[\]{}+]/.test(segmento as string);

/** Prefijos (en minúsculas, como compara Express) de las rutas de un router; null si alguna no tiene uno fijo. */
export function prefijosDe(router: Router): string[] | null {
  const stack = (router as unknown as { stack?: Capa[] }).stack;
  if (!Array.isArray(stack)) return null; // un middleware suelto, no un router
  const prefijos = new Set<string>();
  for (const capa of stack) {
    if (!capa.route) continue;
    const rutas = Array.isArray(capa.route.path) ? capa.route.path : [capa.route.path];
    for (const ruta of rutas) {
      if (typeof ruta !== "string" || !ruta.startsWith("/")) return null;
      const [primero, segundo] = ruta.split("/").slice(1, 3);
      if (!esFijo(primero)) return null;
      if (primero === "api") {
        if (!esFijo(segundo)) return null;
        prefijos.add(`/api/${segundo}`.toLowerCase());
      } else {
        prefijos.add(`/${primero}`.toLowerCase());
      }
    }
  }
  return prefijos.size > 0 ? [...prefijos] : null;
}

export function soloSusRutas(router: Router) {
  const prefijos = prefijosDe(router);
  if (!prefijos) return router;
  const filtro = (req: Request, res: Response, next: NextFunction) => {
    const ruta = req.path.toLowerCase();
    if (prefijos.some((p) => ruta === p || ruta.startsWith(`${p}/`))) return router(req, res, next);
    return next();
  };
  return Object.assign(filtro, { stack: (router as unknown as { stack: unknown[] }).stack, prefijos });
}

import express, { type NextFunction, type Request, type RequestHandler, type Response } from "express";

/**
 * H9 — límite del cuerpo JSON según la ruta.
 *
 * Antes había un único parser global de 30 MB para toda la API (los `bodyLimitMB(...)` de cada
 * ruta nunca llegaban a aplicarse, porque el global ya había leído el cuerpo). Un pedido anónimo a
 * cualquier endpoint podía mandar 30 MB. Ahora el valor por defecto es chico y solo las rutas que
 * guardan contenido (módulos, libros, plantillas...) admiten uno grande.
 */
export type ReglaLimite = { patron: RegExp; mb: number };

export function reglasDeLimite(opts: { contenidoMb: number; defectoMb: number }): { reglas: ReglaLimite[]; defectoMb: number } {
  return {
    defectoMb: opts.defectoMb,
    reglas: [
      // Autoría de contenido: módulos, cuestionarios, libros, documentos de bloques, plantillas, datasets...
      {
        patron: /^\/api\/(modulos|quizzes|libros|block-documents|pages|plantillas|vblang|formulas|admin|progreso|sync)(\/|$)/,
        mb: opts.contenidoMb
      },
      // Respuestas y entrega de cuestionarios.
      { patron: /^\/api\/quiz-attempts(\/|$)/, mb: 2 },
      // Enlaces de recursos del aula.
      { patron: /^\/api\/aulas\/[^/]+\/resource-links(\/|$)/, mb: 5 },
      // Configuración de aulas y altas de hijos.
      { patron: /^\/api\/(aulas|enterprise\/aulas|hijos)(\/|$)/, mb: 2 }
    ]
  };
}

export function limiteParaRuta(ruta: string, cfg: ReturnType<typeof reglasDeLimite>): number {
  return cfg.reglas.find((r) => r.patron.test(ruta))?.mb ?? cfg.defectoMb;
}

/** Middleware que elige el parser JSON según la ruta. `verify` conserva el cuerpo crudo de los webhooks. */
export function jsonPorRuta(
  cfg: ReturnType<typeof reglasDeLimite>,
  verify?: (req: Request, res: Response, buf: Buffer) => void
): RequestHandler {
  const parsers = new Map<number, RequestHandler>();
  const parserDe = (mb: number) => {
    let p = parsers.get(mb);
    if (!p) {
      p = express.json({ limit: `${mb}mb`, ...(verify ? { verify: (req, res, buf) => verify(req as Request, res as Response, buf) } : {}) });
      parsers.set(mb, p);
    }
    return p;
  };
  return (req: Request, res: Response, next: NextFunction) => {
    const ruta = (req.originalUrl || req.url || "").split("?")[0];
    return parserDe(limiteParaRuta(ruta, cfg))(req, res, next);
  };
}

import express, { type NextFunction, type Request, type Response } from "express";
import compression from "compression";
import { ocultarErroresInternos, respuestaDeError } from "./lib/safe-error";
import { jsonPorRuta, reglasDeLimite } from "./lib/json-limits";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { ENV } from "./lib/env";
import { health } from "./routes/health";
import { pages } from "./routes/pages";
import { usuarios } from "./routes/usuarios";
import { escuelas } from "./routes/escuelas";
import { modulos } from "./routes/modulos";
import { progreso } from "./routes/progreso";
import { libros } from "./routes/libros";
import { blockDocuments } from "./routes/block-documents";
import { seed } from "./routes/seed";
import { auth } from "./routes/auth";
import { reportes } from "./routes/reportes";
import { reportesV2 } from "./routes/reportes-v2";
import { estadisticas } from "./routes/estadisticas";
import { encuestas } from "./routes/encuestas";
import { aulas } from "./routes/aulas";
import { economia } from "./routes/economia";
import { aulaFeed } from "./routes/aula-feed";
import { publicaciones } from "./routes/publicaciones";
import { moderacion } from "./routes/moderacion";
import { configuracion } from "./routes/configuracion";
import { enterprise } from "./routes/enterprise";
import { beneficios } from "./routes/beneficios";
import { profesor } from "./routes/profesor";
import { quizAttempts } from "./routes/quiz-attempts";
import { examenTickets } from "./routes/examen-tickets";
import { subastasTicket } from "./routes/subastas-ticket";
import { resourceLinks } from "./routes/resource-links";
import { payments } from "./routes/payments";
import { padres } from "./routes/padres";
import { codigosPadre } from "./routes/codigos-padre";
import { tienda } from "./routes/tienda";
import { consignas } from "./routes/consignas";
import { generators } from "./routes/generators";
import { generadoresAdmin } from "./routes/generadores-admin";
import { visualizadoresRouter } from "./routes/visualizadores";
import { herramientasRouter } from "./routes/herramientas";
import { assetsRouter } from "./routes/assets";
import { mediaRouter } from "./routes/media";
import { createRateLimiter } from "./lib/rate-limit";
import { dictionary } from "./routes/dictionary";
import { readonlyRouter } from "./routes/readonly";
import { registro } from "./routes/registro";
import { suggestions } from "./routes/suggestions";
import { roles as rolesRouter } from "./routes/roles";
import { adminGenerators } from "./routes/admin-generators";
import { adminRouter } from "./routes/admin";
import { tareasRouter } from "./routes/tareas";
import { mapsRouter } from "./routes/maps";
import { provinciasRouter } from "./maps/provincias";
import { geonamesRouter } from "./routes/geonames";
import { mensajeria } from "./routes/mensajeria";
import { suscripciones } from "./routes/suscripciones";
import { comisiones } from "./routes/comisiones";
import { instrumentos } from "./routes/instrumentos";
import { pedagogico } from "./routes/pedagogico";
import { boletin } from "./routes/boletin";
import { sync } from "./routes/sync";
import { calendario } from "./routes/calendario";
import { quizBanco } from "./routes/quiz-banco";
import { membresias } from "./routes/membresias";
import { materiales } from "./routes/materiales";
import { plantillas } from "./routes/plantillas";
import { vblangDatasets } from "./routes/vblang-datasets";
import { formulas } from "./routes/formulas";
import { asistencia } from "./routes/asistencia";
import { cobros } from "./routes/cobros";
import { escuelaPasarelas } from "./routes/escuela-pasarelas";
import { invitaciones } from "./routes/invitaciones";
import { revisionEscuela } from "./routes/revision-escuela";
import { verificacionPublica } from "./routes/verificacion-publica";
import { pushTokens } from "./routes/push-tokens";
import { requireUser } from "./lib/user-auth";

/**
 * La aplicación Express completa (middlewares y rutas), sin abrir ningún puerto. El arranque del
 * servidor está en `index.ts`; se separó para poder auditar y probar la aplicación real (C1).
 */
export const app = express();
// Detrás de Nginx (mismo host): TRUST_PROXY=loopback para que req.ip sea el cliente real
// (rate limit por IP) y no 127.0.0.1. Vacío = sin proxy (default).
if (process.env.TRUST_PROXY) app.set("trust proxy", process.env.TRUST_PROXY);
app.use(compression());
app.use((req, res, next) => {
  // API responses — no cachear
  if (req.path.startsWith("/api/")) {
    res.setHeader("Cache-Control", "no-store");
    return next();
  }
  // Assets estáticos con hash en el nombre (Vite los genera)
  if (/\.[0-9a-f]{8}\.(js|css|woff2?)$/i.test(req.path)) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    return next();
  }
  // HTML — revalidar siempre
  res.setHeader("Cache-Control", "no-cache");
  next();
});
// Helmet con defaults: X-Content-Type-Options: nosniff,
// X-Frame-Options: SAMEORIGIN, Strict-Transport-Security, y un CSP
// estricto (`default-src 'self'`) que blinda contra XSS inline
// incluso si un asset servido por /api/media filtrase contenido
// activo. CSP estaba apagado explícitamente — lo activamos (F-02).
app.use(helmet());
// B2 — ningún error interno (Prisma, rutas, trazas) sale al cliente: ver lib/safe-error.ts.
app.use(ocultarErroresInternos);
app.use(cors({ origin: ENV.CORS_ORIGIN, credentials: true }));
app.use(morgan("tiny"));
app.use("/api/payments/webhook", express.raw({ type: "application/json" }));
// PLAN-B Fase 3 — el webhook de cada pasarela (cobros escuela→familias)
// necesita el body crudo para verificar la firma (mismo motivo que
// /api/payments/webhook arriba).
app.use("/api/pasarelas/webhook", express.raw({ type: "application/json" }));
// FIX-BODY-LIMIT — el `express.json()` sin `limit` usa el default
// de body-parser (100kb). Como este parser corre ANTES de los
// routers, era el límite efectivo de TODOS los endpoints: cuando
// un libro/módulo/bloque crecía (típicamente por imágenes en
// base64), el global devolvía 413 ("request entity too large")
// antes de que llegara al handler, y los `bodyLimitMB(30)` que
// tienen rutas como `routes/libros.ts:68`, `routes/modulos.ts:478`,
// `routes/block-documents.ts:47`, etc. eran código muerto (la
// segunda llamada a `express.json()` no re-parsea si `req.body`
// ya está poblado).
//
// Ahora alineamos el global con `ENV.MAX_PAGE_MB` (30 por
// default, configurable via .env). Trade-off: las rutas que
// declaran un límite MÁS RESTRICTIVO (p.ej. quiz-attempts con
// `bodyLimitMB(1)`) pierden la capacidad de cap a nivel parser;
// esos endpoints siguen validando shape vía Zod, que es lo que
// efectivamente contiene payloads abusivos.
// H9 — el límite del cuerpo JSON depende de la ruta (ver lib/json-limits.ts): 1 MB por defecto y solo
// las rutas que guardan contenido admiten uno grande.
app.use(jsonPorRuta(
  reglasDeLimite({ contenidoMb: ENV.MAX_PAGE_MB, defectoMb: ENV.MAX_JSON_BODY_MB }),
  (req, _res, buf) => {
    if (
      req.originalUrl === "/api/payments/webhook" ||
      req.originalUrl.startsWith("/api/pasarelas/webhook/")
    ) {
      req.rawBody = Buffer.from(buf);
    }
  }
));
// VUL-3: rate limiters específicos para endpoints sensibles
app.use(
  "/api/auth/login",
  createRateLimiter({ windowMs: 15 * 60 * 1000, limit: 10 })
);
app.use(
  "/api/auth/register",
  createRateLimiter({ windowMs: 60 * 60 * 1000, limit: 5 })
);
app.use(
  "/api/sync/push",
  createRateLimiter({ windowMs: 15 * 60 * 1000, limit: 30 })
);
// Webhooks de pasarela: tráfico anónimo, así que `rateLimitKey` cae a la
// IP (lo correcto acá). El limiter global no los cubría en la práctica —
// cuenta por usuario autenticado y estos requests no traen JWT. 120/min
// deja lugar de sobra a las ráfagas de reintentos de MP/Cryptomus y corta
// la fuerza bruta de firmas o el sondeo de providerRef.
app.use(
  "/api/pasarelas/webhook",
  createRateLimiter({ windowMs: 60 * 1000, limit: 120 })
);
app.use(
  "/api/payments/webhook",
  createRateLimiter({ windowMs: 60 * 1000, limit: 120 })
);
app.use(
  "/api/auth/forgot-password",
  createRateLimiter({ windowMs: 60 * 60 * 1000, limit: 5 })
);

// Rate limiter global
// El cupo se cuenta por usuario autenticado (ver createRateLimiter),
// no por IP, así que 500/15min por actor era innecesariamente bajo
// para una SPA que dispara varias llamadas por navegación (contexto
// de escuela, listados, etc.) — un docente navegando normalmente
// podía agotarlo. 2000/15min sigue conteniendo abuso real por cuenta
// individual sin penalizar el uso legítimo.
app.use(
  createRateLimiter({
    windowMs: 15 * 60 * 1000,
    limit: 2000
  })
);
app.use(health);
app.use(consignas);
app.use(generators);
app.use("/api/assets", assetsRouter);
app.use("/api/media", mediaRouter);
app.use("/api/visualizadores", visualizadoresRouter);
app.use("/api/herramientas", herramientasRouter);
app.use("/api/maps", mapsRouter);
app.use("/api/maps/provincias", provinciasRouter);
app.use(geonamesRouter);
app.use(auth);
app.use(registro);

app.use(requireUser);

app.use(pages);
app.use(usuarios);
app.use(escuelas);
app.use(modulos);
app.use(progreso);
app.use(libros);
app.use(blockDocuments);
app.use(estadisticas);
if (ENV.ENABLE_SEED_ENDPOINT) {
  app.use(seed);
} else {
  app.use("/api/seed", (_req, res) => res.status(404).json({ error: "not found" }));
}
app.use(reportes);
app.use(reportesV2);
app.use(encuestas);
app.use(aulas);
app.use(asistencia);
app.use(cobros);
app.use(escuelaPasarelas);
app.use(invitaciones);
app.use(revisionEscuela);
app.use(verificacionPublica);
app.use(economia);
app.use(aulaFeed);
app.use(publicaciones);
app.use(moderacion);
app.use(configuracion);
app.use("/api/dictionary", createRateLimiter({ windowMs: 15 * 60 * 1000, limit: 5000 }));
app.use(dictionary);
app.use(enterprise);
app.use(beneficios);
app.use(profesor);
app.use(quizAttempts);
app.use(examenTickets);
app.use(subastasTicket);
app.use(quizBanco);
app.use(resourceLinks);
app.use(payments);
app.use(padres);
app.use(codigosPadre);
app.use(tienda);
app.use(generadoresAdmin);
app.use(suggestions);
app.use(rolesRouter);
app.use(adminGenerators);
app.use(adminRouter);
app.use(tareasRouter);
app.use(mensajeria);
app.use(suscripciones);
app.use(comisiones);
app.use(instrumentos);
app.use(pedagogico);
app.use(boletin);
app.use(sync);
app.use(calendario);
app.use(membresias);
app.use(materiales);
app.use(plantillas);
app.use(vblangDatasets);
app.use(formulas);
app.use(pushTokens);
app.use(readonlyRouter);
app.use((_req, res) => res.status(404).json({ error: "not found" }));
app.use((err: unknown, req: Request, res: Response, _next: NextFunction) => {
  const { status, cuerpo } = respuestaDeError(err, req);
  res.status(status).json(cuerpo);
});

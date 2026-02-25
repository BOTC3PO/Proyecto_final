import express, { type NextFunction, type Request, type Response } from "express";
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
import { seed } from "./routes/seed";
import { auth } from "./routes/auth";
import { reportes } from "./routes/reportes";
import { estadisticas } from "./routes/estadisticas";
import { encuestas } from "./routes/encuestas";
import { aulas } from "./routes/aulas";
import { economia } from "./routes/economia";
import { aulaFeed } from "./routes/aula-feed";
import { publicaciones } from "./routes/publicaciones";
import { moderacion } from "./routes/moderacion";
import { configuracion } from "./routes/configuracion";
import { diccionarios } from "./routes/diccionarios";
import { enterprise } from "./routes/enterprise";
import { beneficios } from "./routes/beneficios";
import { profesor } from "./routes/profesor";
import { quizAttempts } from "./routes/quiz-attempts";
import { resourceLinks } from "./routes/resource-links";
import { payments } from "./routes/payments";
import { padres } from "./routes/padres";
import { governance } from "./routes/governance";
import { consignas } from "./routes/consignas";
import { generadoresAdmin } from "./routes/generadores-admin";
import { visualizadoresRouter } from "./routes/visualizadores";
import { createRateLimiter } from "./lib/rate-limit";
import { scheduleDelinquencyJob } from "./lib/billing/delinquency";
import { markUsersWithoutUsablePasswordForReset } from "./lib/password-health";
import { dictionary } from "./routes/dictionary";
import { readonlyRouter } from "./routes/readonly";
import { registro } from "./routes/registro";
import { adminRouter } from "./routes/admin";
import { tareasRouter } from "./routes/tareas";
import { mapsRouter } from "./routes/maps";
import { requireUser } from "./lib/user-auth";
import { openSqlite } from "./lib/db";

const runStartupDataChecks = () => {
  try {
    const sqlite = openSqlite();
    const totalUsers = (sqlite.prepare("SELECT COUNT(*) AS c FROM usuarios").get() as { c: number }).c;
    if (totalUsers === 0) {
      console.warn("[startup-check] La DB no tiene usuarios. Ejecutá 'npm run db:init' para inicializar.");
      return;
    }
    const totalAdmins = (sqlite.prepare(
      "SELECT COUNT(*) AS c FROM usuarios WHERE role = ? AND is_deleted = 0"
    ).get("ADMIN") as { c: number }).c;
    if (totalAdmins === 0) {
      console.warn("[startup-check] La DB tiene usuarios pero ningún ADMIN activo.");
    }
  } catch (error) {
    console.warn("[startup-check] No se pudo verificar alineación de seed/admin en startup.", error);
  }
};

const app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: ENV.CORS_ORIGIN, credentials: true }));
app.use(morgan("tiny"));
app.use("/api/payments/webhook", express.raw({ type: "application/json" }));
app.use(express.json({
  verify: (req, _res, buf) => {
    const request = req as Request;
    if (request.originalUrl === "/api/payments/webhook") {
      request.rawBody = Buffer.from(buf);
    }
  }
}));
app.use(
  createRateLimiter({
    windowMs: 15 * 60 * 1000,
    limit: 500
  })
);
app.use(health);
app.use(consignas);
app.use("/api/visualizadores", visualizadoresRouter);
app.use("/api/maps", mapsRouter);
app.use(pages);
app.use(auth);
app.use(registro);

app.use(requireUser);

app.use(usuarios);
app.use(escuelas);
app.use(modulos);
app.use(progreso);
app.use(libros);
app.use(estadisticas);
if (ENV.ENABLE_SEED_ENDPOINT) {
  app.use(seed);
} else {
  app.use("/api/seed", (_req, res) => res.status(404).json({ error: "not found" }));
}
app.use(reportes);
app.use(encuestas);
app.use(aulas);
app.use(economia);
app.use(aulaFeed);
app.use(publicaciones);
app.use(moderacion);
app.use(configuracion);
app.use(diccionarios);
app.use(dictionary);
app.use(enterprise);
app.use(beneficios);
app.use(profesor);
app.use(quizAttempts);
app.use(resourceLinks);
app.use(payments);
app.use(padres);
app.use(governance);
app.use(generadoresAdmin);
app.use(adminRouter);
app.use(tareasRouter);
app.use(readonlyRouter);
app.use((_req, res) => res.status(404).json({ error: "not found" }));
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode =
    typeof err === "object" &&
    err !== null &&
    "status" in err &&
    typeof err.status === "number"
      ? err.status
      : 500;

  const message =
    typeof err === "object" &&
    err !== null &&
    "message" in err &&
    typeof err.message === "string" &&
    err.message.length > 0
      ? err.message
      : "internal server error";

  console.error("[api-error]", err);
  res.status(statusCode).json({ error: message });
});

const bootstrap = async () => {
  app.listen(ENV.PORT, () => {
    console.log(`API on http://localhost:${ENV.PORT}`);
  });
  scheduleDelinquencyJob();
  runStartupDataChecks();
  await markUsersWithoutUsablePasswordForReset({
    actorId: "system",
    reason: "startup-password-hash-migration"
  });
};

void bootstrap();

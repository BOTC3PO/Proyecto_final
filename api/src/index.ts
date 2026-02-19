import express, { type Request } from "express";
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
import { visualizadoresRouter } from "./routes/visualizadores";
import { createRateLimiter } from "./lib/rate-limit";
import { scheduleDelinquencyJob } from "./lib/billing/delinquency";
import { markUsersWithoutUsablePasswordForReset } from "./lib/password-health";
import { dictionary } from "./routes/dictionary";
import { readonlyRouter } from "./routes/readonly";
import { registro } from "./routes/registro";
import { mapsRouter } from "./routes/maps";
import { requireUser } from "./lib/user-auth";
import fs from "node:fs";
import path from "node:path";
import { getDb } from "./lib/db";

const SEED_ADMIN_EMAIL = "admin@escuela.com";

const runStartupDataChecks = async () => {
  if (ENV.DB_KIND !== "mongo") {
    return;
  }

  try {
    const db = await getDb();
    const usuarios = db.collection("usuarios");

    const [totalUsers, totalAdmins, seedAdmin] = await Promise.all([
      usuarios.estimatedDocumentCount(),
      usuarios.countDocuments({ role: "ADMIN", isDeleted: { $ne: true } }),
      usuarios.findOne({ email: SEED_ADMIN_EMAIL, isDeleted: { $ne: true } }, { projection: { _id: 1 } })
    ]);

    if (totalUsers === 0) {
      console.warn(
        `[startup-check] La DB '${ENV.DB_NAME}' no tiene usuarios. Ejecutá server/mongodb-setup.js en esta misma DB.`
      );
      return;
    }

    if (totalAdmins === 0) {
      console.warn(
        `[startup-check] La DB '${ENV.DB_NAME}' tiene usuarios pero ningún ADMIN activo. Revisá seed/migraciones.`
      );
    }

    if (!seedAdmin) {
      console.warn(
        `[startup-check] No existe el usuario semilla '${SEED_ADMIN_EMAIL}' en DB '${ENV.DB_NAME}'. Posible desalineación de DB_NAME o seed.`
      );
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
    limit: 100
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
app.use(readonlyRouter);
app.use((_req, res) => res.status(404).json({ error: "not found" }));

const bootstrap = async () => {
  if (ENV.DB_KIND === "sqlite") {
    const sqlitePath = path.isAbsolute(ENV.SQLITE_PATH) ? ENV.SQLITE_PATH : path.resolve(process.cwd(), ENV.SQLITE_PATH);
    if (!fs.existsSync(sqlitePath)) {
      throw new Error(`DB_KIND=sqlite but SQLITE_PATH does not exist: ${sqlitePath}`);
    }
    const sqliteModule = await import("./db/sqliteDictionary");
    sqliteModule.getSqliteDictionaryService();
  }

  app.listen(ENV.PORT, () => {
    console.log(`API on http://localhost:${ENV.PORT}`);
  });
  scheduleDelinquencyJob();
  await runStartupDataChecks();
  await markUsersWithoutUsablePasswordForReset({
    actorId: "system",
    reason: "startup-password-hash-migration"
  });
};

void bootstrap();

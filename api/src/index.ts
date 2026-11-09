import { existsSync, readFileSync } from "node:fs";
import { createServer as createHttpsServer } from "node:https";
import { app } from "./app";
import { ENV, assertSecretosDePago } from "./lib/env";
import { scheduleReconciliacionJob } from "./lib/pasarelas/reconciliacion";
import { scheduleRetencionMensajesJob } from "./lib/retencion-mensajes";
import { markUsersWithoutUsablePasswordForReset } from "./lib/password-health";
import { prisma } from "./lib/prisma";
import { crearApagadoOrdenado } from "./lib/apagado-ordenado";

const runStartupDataChecks = async () => {
  try {
    const totalUsers = await prisma.usuario.count();
    if (totalUsers === 0) {
      console.warn("[startup-check] La DB no tiene usuarios. Ejecutá 'npm run db:init' para inicializar.");
      return;
    }
    const totalAdmins = await prisma.usuario.count({
      where: { roles: { has: "ADMIN" }, isDeleted: false }
    });
    if (totalAdmins === 0) {
      console.warn("[startup-check] La DB tiene usuarios pero ningún ADMIN activo.");
    }
  } catch (error) {
    console.warn("[startup-check] No se pudo verificar alineación de seed/admin en startup.", error);
  }
};

// HTTPS local (mkcert) — sólo si los certs existen (`.certs/`, gitignored,
// mismo par que apps/web/.certs/). El front ahora corre en https:// y llama
// a la API directo (sin proxy, ver lib/api.ts); mixed content HTTP+HTTPS
// no es ideal aunque Chrome exima a localhost — y el redirect_uri de OAuth
// de MP también prefiere https.
const CERT_KEY = "./.certs/localhost-key.pem";
const CERT_FILE = "./.certs/localhost.pem";
const httpsCreds =
  existsSync(CERT_KEY) && existsSync(CERT_FILE)
    ? { key: readFileSync(CERT_KEY), cert: readFileSync(CERT_FILE) }
    : null;

// HOST=127.0.0.1 detrás de Nginx; sin definir "::" = todas las interfaces IPv4+IPv6 (igual que el default de Node).
const bootstrap = async () => {
  // Antes de aceptar un solo request: si hay pasarelas configuradas,
  // los secretos que las hacen seguras no pueden faltar.
  assertSecretosDePago();
  const servidor = httpsCreds
    ? createHttpsServer(httpsCreds, app).listen(ENV.PORT, process.env.HOST || "::", () => {
        console.log(`API on https://localhost:${ENV.PORT}`);
      })
    : app.listen(ENV.PORT, process.env.HOST || "::", () => {
        console.log(`API on http://localhost:${ENV.PORT}`);
      });
  servidor.keepAliveTimeout = ENV.KEEP_ALIVE_TIMEOUT_MS;
  servidor.headersTimeout = ENV.KEEP_ALIVE_TIMEOUT_MS + 1_000;
  // SIGTERM (systemctl stop/restart, baja automática de una instancia) y SIGINT: terminar lo pendiente antes de salir.
  const apagar = crearApagadoOrdenado(servidor, {
    drenajeMs: ENV.SHUTDOWN_DRAIN_MS,
    esperaMaximaMs: ENV.SHUTDOWN_TIMEOUT_MS,
    alCerrar: () => prisma.$disconnect(),
    salir: (codigo) => process.exit(codigo),
    log: (m) => console.log(m)
  });
  process.on("SIGTERM", () => apagar("SIGTERM"));
  process.on("SIGINT", () => apagar("SIGINT"));
  scheduleReconciliacionJob();
  scheduleRetencionMensajesJob();
  void runStartupDataChecks();
  await markUsersWithoutUsablePasswordForReset({
    actorId: "system",
    reason: "startup-password-hash-migration"
  });
};

void bootstrap();

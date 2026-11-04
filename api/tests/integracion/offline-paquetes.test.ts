/**
 * L8 — paquetes de la app sin conexión: índice y archivos públicos, y módulos de la escuela con el permiso firmado.
 */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { after, before, test } from "node:test";
import { prisma, seedUser, startServer } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
let carpeta: string;
let ENV: typeof import("../../src/lib/env").ENV;
let firmarPermiso: typeof import("../../src/lib/permiso-offline").firmarPermiso;
let privada: crypto.KeyObject;

before(async () => {
  carpeta = fs.mkdtempSync(path.join(os.tmpdir(), "offline-paquetes-"));
  const { privateKey } = crypto.generateKeyPairSync("ed25519");
  privada = privateKey;
  fs.writeFileSync(path.join(carpeta, "clave.pem"), privateKey.export({ type: "pkcs8", format: "pem" }));
  fs.mkdirSync(path.join(carpeta, "paquetes"));
  fs.writeFileSync(path.join(carpeta, "paquetes", "temario-fisica-1.0.sqlite.gz"), "contenido-del-paquete");
  fs.writeFileSync(path.join(carpeta, "secreto.txt"), "no se sirve");
  fs.writeFileSync(
    path.join(carpeta, "paquetes", "indice.json"),
    JSON.stringify({ formato: 1, paquetes: [{ id: "temario-fisica", archivo: "temario-fisica-1.0.sqlite.gz", tipo: "contenido" }] }),
  );
  ({ ENV } = await import("../../src/lib/env"));
  ({ firmarPermiso } = await import("../../src/lib/permiso-offline"));
  ENV.OFFLINE_PERMISO_CLAVE_ARCHIVO = path.join(carpeta, "clave.pem");
  ENV.OFFLINE_PAQUETES_DIR = path.join(carpeta, "paquetes");
  const { offlinePublico } = await import("../../src/routes/offline");
  ({ baseUrl, close } = await startServer([offlinePublico]));
});

after(async () => {
  if (close) await close();
  fs.rmSync(carpeta, { recursive: true, force: true });
});

const permisoPara = (sub: string, venceEnDias = 90, clave = privada) => {
  const ahora = Date.now();
  const { permiso, firma } = firmarPermiso(
    {
      v: 1, sub, username: sub, nombre: sub, email: null, roles: ["USER"], schoolId: null, menor: true,
      dispositivo: "dispositivo-de-prueba-0001", emitido: new Date(ahora).toISOString(),
      vence: new Date(ahora + venceEnDias * 86_400_000).toISOString(),
    },
    clave,
  );
  return `Permiso ${permiso}.${firma}`;
};

const modulo = (id: string, extra: Record<string, unknown>) => ({
  id, titulo: id, descripcion: null, subject: "fisica", level: null, category: null, slug: null, libroId: null,
  dependencies: null, ownerUserId: "profe-1", schoolId: null, visibility: "privado", theoryItems: "[]", scoringConfig: null,
  descatalogado: false, isDeleted: false, createdAt: "2026-11-01T00:00:00.000Z", updatedAt: "2026-11-01T00:00:00.000Z",
  ...extra,
});

test("L8: el índice y los archivos de los paquetes son públicos; solo se sirve lo que está en el índice", async () => {
  const indice = await (await fetch(`${baseUrl}/api/offline/paquetes`)).json();
  assert.equal(indice.paquetes[0].id, "temario-fisica");
  const archivo = await fetch(`${baseUrl}/api/offline/paquetes/archivo/temario-fisica-1.0.sqlite.gz`);
  assert.equal(archivo.status, 200);
  assert.equal(await archivo.text(), "contenido-del-paquete");
  assert.match(archivo.headers.get("cache-control") ?? "", /immutable/);
  assert.equal((await fetch(`${baseUrl}/api/offline/paquetes/archivo/indice.json`)).status, 404);
  assert.equal((await fetch(`${baseUrl}/api/offline/paquetes/archivo/..%2Fsecreto.txt`)).status, 404);
});

test("L8: los módulos de la escuela salen con el permiso firmado", async () => {
  seedUser({ id: "alumna-esc", role: "STUDENT", roles: ["USER"], schoolId: "esc-1" });
  prisma.membresia.rows.push({ usuarioId: "alumna-esc", escuelaId: "esc-2", rol: "STUDENT", estado: "activa", fechaBaja: null } as never);
  prisma.claseMiembro.rows.push({ claseId: "aula-9", usuarioId: "alumna-esc" } as never);
  prisma.claseModulo.rows.push({ claseId: "aula-9", moduloId: "asignado-privado" } as never);
  prisma.modulo.rows.push(
    modulo("de-mi-escuela", { visibility: "escuela", schoolId: "esc-1", updatedAt: "2026-11-03T00:00:00.000Z" }),
    modulo("de-mi-otra-escuela", { visibility: "escuela", schoolId: "esc-2" }),
    modulo("de-otra-escuela", { visibility: "escuela", schoolId: "esc-9" }),
    modulo("privado-ajeno", { schoolId: "esc-1" }),
    modulo("asignado-privado", { schoolId: "esc-9" }),
    modulo("descatalogado", { visibility: "escuela", schoolId: "esc-1", descatalogado: true }),
    modulo("borrado", { visibility: "escuela", schoolId: "esc-1", isDeleted: true }),
    modulo("cont-fis--oficial", { visibility: "escuela", schoolId: "esc-1" }),
  );
  const r = await fetch(`${baseUrl}/api/offline/escuela`, { headers: { Authorization: permisoPara("alumna-esc") } });
  assert.equal(r.status, 200);
  const d = await r.json();
  assert.deepEqual(d.modulos.map((m: { id: string }) => m.id).sort(), ["asignado-privado", "de-mi-escuela", "de-mi-otra-escuela"]);
  assert.equal(d.actualizado, "2026-11-03T00:00:00.000Z");
  assert.equal(d.modulos[0].theoryItems, "[]");
});

test("L8: sin permiso, con uno vencido o firmado por otra clave, no hay módulos de la escuela", async () => {
  const pedir = (auth?: string) => fetch(`${baseUrl}/api/offline/escuela`, { headers: auth ? { Authorization: auth } : {} });
  assert.equal((await pedir()).status, 401);
  assert.equal((await pedir(permisoPara("alumna-esc", -1))).status, 401);
  const otra = crypto.generateKeyPairSync("ed25519").privateKey;
  assert.equal((await pedir(permisoPara("alumna-esc", 90, otra))).status, 401);
});

test("L8: una cuenta suspendida recibe BANNED (la app bloquea el perfil)", async () => {
  seedUser({ id: "suspendida-esc", role: "STUDENT", roles: ["USER"] });
  (prisma.usuario.rows.find((u: { id: string }) => u.id === "suspendida-esc") as Record<string, unknown>).isBanned = true;
  const r = await fetch(`${baseUrl}/api/offline/escuela`, { headers: { Authorization: permisoPara("suspendida-esc") } });
  assert.equal(r.status, 403);
  assert.equal((await r.json()).code, "BANNED");
});

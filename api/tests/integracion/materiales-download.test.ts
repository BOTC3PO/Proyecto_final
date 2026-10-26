/**
 * QA-FIX-02 — Descarga de material didáctico (Q7).
 *
 * Cubre los dos bugs del síntoma Q7:
 *   1) Auth: el front debe poder descargar (el back exige userId vía
 *      requireUser → 401 si no hay token, 403 si el user no tiene
 *      permiso sobre el material).
 *   2) Filename: la respuesta setea Content-Disposition: attachment;
 *      filename="<titulo-sanitizado>.json" para que el archivo se llame
 *      por el nombre del material y no "download.json" (que es lo que
 *      hace el browser cuando la respuesta no trae Content-Disposition).
 *
 * Verifica también la sanitización del filename (sin caracteres
 * inválidos de filesystem).
 */

import {
  jsonRequest,
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";

import { materiales } from "../../src/routes/materiales";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const server = await startServer([materiales]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  await close();
});

beforeEach(() => {
  resetPrisma();
  // 4 usuarios en 2 escuelas distintas para validar reglas de visibilidad.
  seedUser({ id: "admin-1", role: "ADMIN", schoolId: "esc-A" });
  seedUser({ id: "teacher-A", role: "TEACHER", schoolId: "esc-A" });
  seedUser({ id: "teacher-A2", role: "TEACHER", schoolId: "esc-A" });
  seedUser({ id: "teacher-B", role: "TEACHER", schoolId: "esc-B" });
  seedUser({ id: "teacher-NS", role: "TEACHER", schoolId: null });
});

const tok = (id: string) => {
  const map: Record<string, { id: string; role: string; schoolId: string | null }> = {
    "admin-1": { id: "admin-1", role: "ADMIN", schoolId: "esc-A" },
    "teacher-A": { id: "teacher-A", role: "TEACHER", schoolId: "esc-A" },
    "teacher-A2": { id: "teacher-A2", role: "TEACHER", schoolId: "esc-A" },
    "teacher-B": { id: "teacher-B", role: "TEACHER", schoolId: "esc-B" },
    "teacher-NS": { id: "teacher-NS", role: "TEACHER", schoolId: null },
  };
  return tokenFor(map[id]);
};

/**
 * Fetch raw — devuelve status + headers + body como texto. Útil para
 * inspeccionar Content-Disposition, que jsonRequest no expone.
 */
async function rawRequest(
  method: "GET" | "POST",
  path: string,
  opts: { token?: string; body?: unknown } = {},
): Promise<{ status: number; headers: Headers; body: string }> {
  const headers: Record<string, string> = {};
  if (opts.token) headers.authorization = `Bearer ${opts.token}`;
  let body: string | undefined;
  if (opts.body !== undefined) {
    headers["content-type"] = "application/json";
    body = JSON.stringify(opts.body);
  }
  const res = await fetch(`${baseUrl}${path}`, { method, headers, body });
  const text = await res.text();
  return { status: res.status, headers: res.headers, body: text };
}

interface ModuloSeed {
  id: string;
  titulo: string;
  visibility: "private" | "escuela" | "publico";
  ownerUserId: string;
  schoolId: string | null;
}

async function seedModulo(m: ModuloSeed): Promise<void> {
  const { prisma } = await import("./_helpers/setup");
  await prisma.modulo.create({
    data: {
      id: m.id,
      titulo: m.titulo,
      visibility: m.visibility,
      ownerUserId: m.ownerUserId,
      schoolId: m.schoolId,
      isDeleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  });
}

// ─── Q7 — descarga de material ───

test("Q7: owner descarga su material → 200 con Content-Disposition y filename sanitizado", async () => {
  await seedModulo({
    id: "mat-1",
    titulo: "Sumas y Restas",
    visibility: "private",
    ownerUserId: "teacher-A",
    schoolId: "esc-A",
  });
  const r = await rawRequest("GET", "/api/materiales/mat-1/download", { token: tok("teacher-A") });
  assert.equal(r.status, 200);
  const cd = r.headers.get("content-disposition") ?? "";
  assert.match(cd, /attachment;\s*filename="Sumas_y_Restas\.json"/, `Content-Disposition inesperado: ${cd}`);
  // El body es JSON parseable que contiene el titulo.
  const parsed = JSON.parse(r.body);
  assert.equal(parsed.titulo, "Sumas y Restas");
});

test("Q7: staff (ADMIN) descarga material ajeno → 200", async () => {
  await seedModulo({
    id: "mat-2",
    titulo: "Material Admin",
    visibility: "private",
    ownerUserId: "teacher-A",
    schoolId: "esc-A",
  });
  const r = await rawRequest("GET", "/api/materiales/mat-2/download", { token: tok("admin-1") });
  assert.equal(r.status, 200);
  assert.match(r.headers.get("content-disposition") ?? "", /attachment;\s*filename="Material_Admin\.json"/);
});

test("Q7: teacher de la misma escuela descarga material visibility=escuela → 200", async () => {
  await seedModulo({
    id: "mat-3",
    titulo: "Compartido Escuela",
    visibility: "escuela",
    ownerUserId: "teacher-A",
    schoolId: "esc-A",
  });
  const r = await rawRequest("GET", "/api/materiales/mat-3/download", { token: tok("teacher-A2") });
  assert.equal(r.status, 200);
  assert.match(r.headers.get("content-disposition") ?? "", /filename="Compartido_Escuela\.json"/);
});

test("Q7: teacher de OTRA escuela descarga material visibility=escuela → 403", async () => {
  await seedModulo({
    id: "mat-4",
    titulo: "Solo Escuela A",
    visibility: "escuela",
    ownerUserId: "teacher-A",
    schoolId: "esc-A",
  });
  const r = await rawRequest("GET", "/api/materiales/mat-4/download", { token: tok("teacher-B") });
  assert.equal(r.status, 403, `status=${r.status} body=${r.body}`);
});

test("Q7: teacher de OTRA escuela descarga material visibility=private → 403", async () => {
  await seedModulo({
    id: "mat-5",
    titulo: "Privado de A",
    visibility: "private",
    ownerUserId: "teacher-A",
    schoolId: "esc-A",
  });
  const r = await rawRequest("GET", "/api/materiales/mat-5/download", { token: tok("teacher-B") });
  assert.equal(r.status, 403);
});

test("Q7: sin token → 401 (requireUser corta antes que la lógica de authz)", async () => {
  await seedModulo({
    id: "mat-6",
    titulo: "Cualquiera",
    visibility: "private",
    ownerUserId: "teacher-A",
    schoolId: "esc-A",
  });
  const r = await rawRequest("GET", "/api/materiales/mat-6/download", {});
  assert.equal(r.status, 401, `esperaba 401 sin token; recibió ${r.status}`);
});

test("Q7: modulo inexistente → 404", async () => {
  const r = await rawRequest("GET", "/api/materiales/no-existe/download", { token: tok("teacher-A") });
  assert.equal(r.status, 404);
});

test("Q7: modulo soft-deleted → 404", async () => {
  const { prisma } = await import("./_helpers/setup");
  await prisma.modulo.create({
    data: {
      id: "mat-del",
      titulo: "Soft Deleted",
      visibility: "private",
      ownerUserId: "teacher-A",
      schoolId: "esc-A",
      isDeleted: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  });
  const r = await rawRequest("GET", "/api/materiales/mat-del/download", { token: tok("teacher-A") });
  assert.equal(r.status, 404);
});

test("Q7: filename sanitiza caracteres inválidos de filesystem (acentos, espacios, slashes)", async () => {
  await seedModulo({
    id: "mat-acentos",
    titulo: "Matemática: Áreas y Perímetros / Guía 2024",
    visibility: "private",
    ownerUserId: "teacher-A",
    schoolId: "esc-A",
  });
  const r = await rawRequest("GET", "/api/materiales/mat-acentos/download", { token: tok("teacher-A") });
  assert.equal(r.status, 200);
  const cd = r.headers.get("content-disposition") ?? "";
  // Esperado: se normalizan acentos, espacios y slashes a '_'.
  // Acentos: Matematica, Areas, Perimetros, Guia.
  // ":" y "/" → "_". Runs de "_" se colapsan a uno solo.
  assert.match(
    cd,
    /filename="Matematica_Areas_y_Perimetros_Guia_2024\.json"/,
    `Content-Disposition inesperado: ${cd}`,
  );
});

test("Q7: filename con titulo vacío cae al default 'material.json'", async () => {
  await seedModulo({
    id: "mat-empty",
    titulo: "!!!",
    visibility: "private",
    ownerUserId: "teacher-A",
    schoolId: "esc-A",
  });
  // El sanitizador colapsa "!!!" a "" → cae al default "material".
  const r = await rawRequest("GET", "/api/materiales/mat-empty/download", { token: tok("teacher-A") });
  assert.equal(r.status, 200);
  const cd = r.headers.get("content-disposition") ?? "";
  assert.match(cd, /filename="material\.json"/, `Content-Disposition inesperado: ${cd}`);
});

test("Q7: GET /api/materiales/:id/download setea Content-Type application/json", async () => {
  await seedModulo({
    id: "mat-ct",
    titulo: "Tipo JSON",
    visibility: "private",
    ownerUserId: "teacher-A",
    schoolId: "esc-A",
  });
  const r = await rawRequest("GET", "/api/materiales/mat-ct/download", { token: tok("teacher-A") });
  assert.equal(r.status, 200);
  const ct = r.headers.get("content-type") ?? "";
  assert.match(ct, /application\/json/, `Content-Type inesperado: ${ct}`);
});

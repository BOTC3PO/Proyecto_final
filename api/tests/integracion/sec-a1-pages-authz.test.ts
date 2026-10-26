/**
 * A1 — Autorización y tope de tamaño en /api/pages.
 *
 *  - Sin token → 401 en POST, GET lista y GET :id.
 *  - STUDENT → 403 en POST (escritura es solo de personal); 200 en GET.
 *  - TEACHER → 201 en POST con un proyecto válido.
 *  - POST por encima de MAX_PAGES_POST_MB (5 por defecto) → 413; el parser global admite 30 MB.
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-vblang";
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import express from "express";
import type { Server } from "node:http";
import {
  seedUser,
  tokenFor,
  jsonRequest,
} from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const TEACHER_ID = "pages-teacher-1";
const STUDENT_ID = "pages-student-1";

const proyecto = (extra: Record<string, unknown> = {}) => ({
  version: "1",
  title: "Proyecto de prueba",
  width: 800,
  height: 600,
  assets: [],
  scene: [],
  ...extra,
});

before(async () => {
  seedUser({ id: TEACHER_ID, role: "TEACHER" });
  seedUser({ id: STUDENT_ID, role: "STUDENT" });
  const { pages } = await import("../../src/routes/pages");
  // Igual que api/src/index.ts: parser global de 30 MB, así el 413 que se
  // verifica sale del tope propio de la ruta y no del parser.
  const app = express();
  app.use(express.json({ limit: "30mb" }));
  app.use(pages);
  const server: Server = await new Promise((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("bind failed");
  baseUrl = `http://127.0.0.1:${address.port}`;
  close = () => new Promise((resolve) => server.close(() => resolve()));
});

after(async () => { await close(); });

test("A1: POST /api/pages sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/pages", { body: proyecto() });
  assert.equal(r.status, 401);
});

test("A1: GET /api/pages sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/pages");
  assert.equal(r.status, 401);
});

test("A1: GET /api/pages/:id sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/pages/cualquiera");
  assert.equal(r.status, 401);
});

test("A1: POST /api/pages con STUDENT → 403", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const r = await jsonRequest(baseUrl, "POST", "/api/pages", { token, body: proyecto() });
  assert.equal(r.status, 403);
});

test("A1: GET /api/pages con STUDENT → 200", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const r = await jsonRequest(baseUrl, "GET", "/api/pages", { token });
  assert.equal(r.status, 200);
});

test("A1: POST /api/pages con TEACHER → 201", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER" });
  const r = await jsonRequest(baseUrl, "POST", "/api/pages", { token, body: proyecto() });
  assert.equal(r.status, 201);
  assert.ok((r.body as { id?: string }).id);
});

test("A1: POST /api/pages por encima del tope → 413", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER" });
  const grande = proyecto({ scene: [{ blob: "x".repeat(6 * 1024 * 1024) }] });
  const r = await jsonRequest(baseUrl, "POST", "/api/pages", { token, body: grande });
  assert.equal(r.status, 413);
});

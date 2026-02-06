process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `moderacion_nonadmin_${Date.now()}_${Math.random().toString(16).slice(2)}`;
process.env.MONGO_REQUIRE_AUTH = "false";
process.env.MONGO_REQUIRE_TLS = "false";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import { after, before, beforeEach, test } from "node:test";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import { createAccessToken } from "../../src/lib/auth-token";

let client: MongoClient;
let app: express.Express;
let server: Server;
let baseUrl: string;
let targetUserId: ObjectId;

const nonAdminRole = "STUDENT";

const baseUserData = {
  email: "target@escuela.com",
  role: "USER",
  fullName: "Usuario Objetivo",
  warningCount: 0,
  isBanned: false,
  bannedAt: null,
  bannedUntil: null,
  lastWarningAt: null,
  lastWarningReason: null,
  lastWarningSeverity: null
};

const fetchWithRole = (path: string, token: string, options: RequestInit = {}) =>
  fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      ...(options.headers ?? {})
    }
  });

const getState = async () => {
  const db = client.db(process.env.DB_NAME);
  const eventos = await db.collection("moderacion_eventos").countDocuments();
  const usuario = await db.collection("usuarios").findOne({ _id: targetUserId });
  return { eventos, usuario };
};

const assertNoSideEffects = async (beforeState: Awaited<ReturnType<typeof getState>>) => {
  const afterState = await getState();
  assert.equal(afterState.eventos, beforeState.eventos);
  assert.deepEqual(afterState.usuario, beforeState.usuario);
};

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");
  const db = client.db(process.env.DB_NAME);
  targetUserId = new ObjectId();

  await db.collection("usuarios").insertOne({
    _id: targetUserId,
    ...baseUserData
  });

  const { moderacion } = await import("../../src/routes/moderacion");
  app = express();
  app.use(express.json());
  app.use(moderacion);
  server = app.listen(0);
  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Failed to bind test server");
  }
  baseUrl = `http://127.0.0.1:${address.port}`;
});

beforeEach(async () => {
  const db = client.db(process.env.DB_NAME);
  await db.collection("moderacion_eventos").deleteMany({});
  await db.collection("usuarios").replaceOne(
    { _id: targetUserId },
    { _id: targetUserId, ...baseUserData }
  );
});

after(async () => {
  if (client) {
    await client.db(process.env.DB_NAME).dropDatabase();
    await client.close();
  }
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
});

test("GET /api/moderacion/clases-publicas rechaza rol no-admin", async () => {
  const beforeState = await getState();
  const token = createAccessToken({ id: targetUserId.toString(), role: nonAdminRole }).token;
  const response = await fetchWithRole("/api/moderacion/clases-publicas", token);
  const body = await response.json();

  assert.equal(response.status, 403);
  assert.equal(body?.error, "admin role required");
  await assertNoSideEffects(beforeState);
});

test("GET /api/moderacion/mensajes-reportados rechaza rol no-admin", async () => {
  const beforeState = await getState();
  const token = createAccessToken({ id: targetUserId.toString(), role: nonAdminRole }).token;
  const response = await fetchWithRole("/api/moderacion/mensajes-reportados", token);
  const body = await response.json();

  assert.equal(response.status, 403);
  assert.equal(body?.error, "admin role required");
  await assertNoSideEffects(beforeState);
});

test("POST /api/moderacion/usuarios/:id/ban rechaza rol no-admin", async () => {
  const beforeState = await getState();
  const token = createAccessToken({ id: targetUserId.toString(), role: nonAdminRole }).token;
  const response = await fetchWithRole(`/api/moderacion/usuarios/${targetUserId.toString()}/ban`, token, {
    method: "POST",
    body: JSON.stringify({ motivo: "Motivo", duracionDias: 2 })
  });
  const body = await response.json();

  assert.equal(response.status, 403);
  assert.equal(body?.error, "admin role required");
  await assertNoSideEffects(beforeState);
});

test("POST /api/moderacion/usuarios/:id/advertencias rechaza rol no-admin", async () => {
  const beforeState = await getState();
  const token = createAccessToken({ id: targetUserId.toString(), role: nonAdminRole }).token;
  const response = await fetchWithRole(
    `/api/moderacion/usuarios/${targetUserId.toString()}/advertencias`,
    token,
    {
      method: "POST",
      body: JSON.stringify({ motivo: "Motivo", severidad: "alta" })
    }
  );
  const body = await response.json();

  assert.equal(response.status, 403);
  assert.equal(body?.error, "admin role required");
  await assertNoSideEffects(beforeState);
});

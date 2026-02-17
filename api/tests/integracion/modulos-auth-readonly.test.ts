process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `modulos_auth_${Date.now()}_${Math.random().toString(16).slice(2)}`;
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
let server: Server;
let baseUrl: string;
let userId: ObjectId;

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");
  const db = client.db(process.env.DB_NAME);
  userId = new ObjectId();

  await db.collection("usuarios").insertOne({
    _id: userId,
    email: "user@escuela.com",
    role: "USER",
    isDeleted: false
  });

  const { modulos } = await import("../../src/routes/modulos");
  const app = express();
  app.use(express.json());
  app.use(modulos);

  server = app.listen(0);
  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Failed to bind test server");
  }
  baseUrl = `http://127.0.0.1:${address.port}`;
});

beforeEach(async () => {
  const db = client.db(process.env.DB_NAME);
  await Promise.all([
    db.collection("aulas").deleteMany({}),
    db.collection("modulos").deleteMany({})
  ]);
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

test("GET /api/modulos funciona sin autenticación en modo lectura", async () => {
  const db = client.db(process.env.DB_NAME);
  await db.collection("modulos").insertOne({
    id: "mod-publico",
    title: "Modulo público",
    slug: "modulo-publico",
    category: "Math",
    status: "ACTIVE",
    level: "1",
    tags: [],
    durationMinutes: 10,
    visibility: "publico",
    schoolId: null,
    content: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  const response = await fetch(`${baseUrl}/api/modulos`);
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(Array.isArray(body.items), true);
  assert.equal(body.items.length, 1);
  assert.equal(body.items[0].id, "mod-publico");
});

for (const method of ["POST", "PUT", "PATCH", "DELETE"] as const) {
  test(`${method} /api/modulos requiere autenticación`, async () => {
    const db = client.db(process.env.DB_NAME);
    await db.collection("modulos").insertOne({
      id: "mod-privado",
      title: "Modulo privado",
      slug: "modulo-privado",
      category: "Math",
      status: "ACTIVE",
      level: "1",
      tags: [],
      durationMinutes: 10,
      visibility: "publico",
      schoolId: null,
      content: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    const path = method === "POST" ? "/api/modulos" : "/api/modulos/mod-privado";
    const payload =
      method === "POST"
        ? {
            id: "mod-new",
            title: "Nuevo módulo",
            slug: "nuevo-modulo",
            category: "Math",
            status: "ACTIVE",
            level: "1",
            tags: [],
            durationMinutes: 10,
            visibility: "publico",
            schoolId: null,
            content: []
          }
        : { title: "Actualizado" };

    const response = await fetch(`${baseUrl}${path}`, {
      method,
      headers: { "content-type": "application/json" },
      body: method === "DELETE" ? undefined : JSON.stringify(payload)
    });

    assert.ok([401, 403].includes(response.status));
  });
}

test("POST /api/modulos con token mantiene validación de aula en modo solo lectura", async () => {
  const db = client.db(process.env.DB_NAME);
  await db.collection("aulas").insertOne({
    id: "aula-archivada",
    status: "ARCHIVED"
  });

  const token = createAccessToken({ id: userId.toString(), role: "USER" }).token;
  const response = await fetch(`${baseUrl}/api/modulos`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      id: "mod-aula-archivada",
      title: "Modulo bloqueado",
      slug: "modulo-bloqueado",
      category: "Math",
      status: "ACTIVE",
      level: "1",
      tags: [],
      durationMinutes: 10,
      visibility: "publico",
      schoolId: null,
      aulaId: "aula-archivada",
      content: []
    })
  });

  const body = await response.json();
  assert.equal(response.status, 403);
  assert.equal(body.error, "classroom is read-only");
});

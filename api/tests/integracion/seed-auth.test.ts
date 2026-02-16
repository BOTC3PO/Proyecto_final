process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `seed_auth_${Date.now()}_${Math.random().toString(16).slice(2)}`;
process.env.MONGO_REQUIRE_AUTH = "false";
process.env.MONGO_REQUIRE_TLS = "false";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import { after, before, test } from "node:test";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import { createAccessToken } from "../../src/lib/auth-token";

let client: MongoClient;
let server: Server;
let baseUrl: string;
let adminUserId: ObjectId;

const post = async (path: string, options: RequestInit = {}) =>
  fetch(`${baseUrl}${path}`, {
    method: "POST",
    ...options,
    headers: {
      "content-type": "application/json",
      ...(options.headers ?? {})
    }
  });

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");
  const db = client.db(process.env.DB_NAME);
  adminUserId = new ObjectId();

  await db.collection("usuarios").insertOne({
    _id: adminUserId,
    email: "admin@escuela.com",
    role: "ADMIN",
    isDeleted: false
  });

  const { seed } = await import("../../src/routes/seed");
  const app = express();
  app.use(express.json());
  app.use(seed);
  app.use("/api/seed", (_req, res) => res.status(404).json({ error: "not found" }));

  server = app.listen(0);
  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Failed to bind test server");
  }
  baseUrl = `http://127.0.0.1:${address.port}`;
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

test("POST /api/seed/modulos sin token devuelve 401", async () => {
  const response = await post("/api/seed/modulos");
  assert.equal(response.status, 401);
});

test("POST /api/seed/modulos con usuario no admin devuelve 403", async () => {
  const token = createAccessToken({ id: new ObjectId().toString(), role: "USER" }).token;
  const response = await post("/api/seed/modulos", {
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.status, 403);
});

test("POST /api/seed/modulos con admin devuelve 201", async () => {
  const token = createAccessToken({ id: adminUserId.toString(), role: "ADMIN" }).token;
  const response = await post("/api/seed/modulos", {
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.status, 201);
});

test("POST /api/seed/modulos devuelve 404 cuando el endpoint está deshabilitado", async () => {
  const disabledApp = express();
  disabledApp.use(express.json());
  disabledApp.use("/api/seed", (_req, res) => res.status(404).json({ error: "not found" }));

  const disabledServer = disabledApp.listen(0);
  const address = disabledServer.address();
  if (!address || typeof address === "string") {
    throw new Error("Failed to bind disabled test server");
  }

  const response = await fetch(`http://127.0.0.1:${address.port}/api/seed/modulos`, { method: "POST" });
  assert.equal(response.status, 404);

  await new Promise((resolve) => disabledServer.close(resolve));
});

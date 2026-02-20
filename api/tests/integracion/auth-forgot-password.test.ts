process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `auth_forgot_${Date.now()}_${Math.random().toString(16).slice(2)}`;
process.env.MONGO_REQUIRE_AUTH = "false";
process.env.MONGO_REQUIRE_TLS = "false";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import { after, before, test } from "node:test";
import express from "express";
import { MongoClient } from "mongodb";

let client: MongoClient;
let server: Server;
let baseUrl: string;

const post = async (path: string, body: unknown) =>
  fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  });

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");
  const db = client.db(process.env.DB_NAME);

  await db.collection("usuarios").insertMany([
    {
      email: "usuario1@escuela.com",
      username: "usuario1",
      role: "USER",
      isDeleted: false
    },
    {
      email: "guest@escuela.com",
      username: "guest1",
      role: "GUEST",
      isDeleted: false
    }
  ]);

  const { auth } = await import("../../src/routes/auth");
  const app = express();
  app.use(express.json());
  app.use(auth);

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

test("POST /api/auth/forgot-password responde 200 para usuario existente", async () => {
  const response = await post("/api/auth/forgot-password", { email: "usuario1@escuela.com" });
  assert.equal(response.status, 200);
  const payload = (await response.json()) as { ok: boolean; message: string };
  assert.equal(payload.ok, true);
  assert.match(payload.message, /Si existe una cuenta con ese correo/);
});

test("POST /api/auth/forgot-password responde 200 para email inexistente", async () => {
  const response = await post("/api/auth/forgot-password", { email: "noexiste@escuela.com" });
  assert.equal(response.status, 200);
  const payload = (await response.json()) as { ok: boolean; message: string };
  assert.equal(payload.ok, true);
  assert.match(payload.message, /Si existe una cuenta con ese correo/);
});

test("POST /api/auth/forgot-password responde 400 para email faltante", async () => {
  const response = await post("/api/auth/forgot-password", {});
  assert.equal(response.status, 400);
});

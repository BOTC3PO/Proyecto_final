process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `readonly_catalogo_modulos_${Date.now()}_${Math.random().toString(16).slice(2)}`;
process.env.MONGO_REQUIRE_AUTH = "false";
process.env.MONGO_REQUIRE_TLS = "false";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import { after, before, beforeEach, test } from "node:test";
import express from "express";
import { MongoClient } from "mongodb";

let client: MongoClient;
let app: express.Express;
let server: Server;
let baseUrl: string;

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");

  const { readonlyRouter } = await import("../../src/routes/readonly");
  app = express();
  app.use(express.json());
  app.use(readonlyRouter);
  server = app.listen(0);
  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Failed to bind test server");
  }
  baseUrl = `http://127.0.0.1:${address.port}`;
});

beforeEach(async () => {
  const db = client.db(process.env.DB_NAME);
  await db.collection("modulos").deleteMany({});
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

test("GET /api/readonly/catalogo devuelve solo modulos activos", async () => {
  const db = client.db(process.env.DB_NAME);
  const nowIso = new Date().toISOString();

  await db.collection("modulos").insertMany([
    {
      id: "mod-active",
      title: "Activo",
      status: "ACTIVE",
      updatedAt: nowIso
    },
    {
      id: "mod-legacy-without-status",
      title: "Legacy",
      updatedAt: nowIso
    },
    {
      id: "mod-archived",
      title: "Archivado",
      status: "ARCHIVED",
      updatedAt: nowIso
    }
  ]);

  const response = await fetch(`${baseUrl}/api/readonly/catalogo`);
  assert.equal(response.status, 200);
  const body = await response.json();
  const moduleIds = (body.modulosActivos as Array<{ id: string }>).map((item) => item.id).sort();

  assert.deepEqual(moduleIds, ["mod-active", "mod-legacy-without-status"]);
});

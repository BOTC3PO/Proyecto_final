process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `economia_transacciones_${Date.now()}_${Math.random()
  .toString(16)
  .slice(2)}`;
process.env.MONGO_REQUIRE_AUTH = "false";
process.env.MONGO_REQUIRE_TLS = "false";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import { after, before, test } from "node:test";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";

let client: MongoClient;
let app: express.Express;
let server: Server;
let baseUrl: string;
let usuarioId: ObjectId;
let usuarioIdString: string;
let schoolId: string;
let aulaId: string;

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");
  const db = client.db(process.env.DB_NAME);
  usuarioId = new ObjectId();
  usuarioIdString = usuarioId.toString();
  schoolId = "school-economia";
  aulaId = "aula-economia";

  await db.collection("economia_config").insertOne({
    id: "general",
    moneda: {
      codigo: "TOK",
      nombre: "Tokens",
      simbolo: "T"
    },
    tasas: {
      pf: 0,
      fci: 0
    },
    limites: {
      emisionDiaria: 0,
      recompensaMaxima: 0,
      recompensaDiaria: 0
    },
    inflacion: {
      tasa: 0,
      activa: false
    },
    hiperinflacion: {
      tasa: 0,
      activa: false,
      aceleracion: 2
    },
    deflacion: {
      tasa: 0,
      activa: false
    },
    rankingFactors: [1, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5],
    updatedAt: new Date().toISOString()
  });

  await db.collection("escuelas").insertOne({
    _id: schoolId,
    plan: "ENTERPRISE_PLUS",
    subscriptionStatus: "ACTIVE"
  });

  await db.collection("usuarios").insertOne({
    _id: usuarioId,
    email: "admin@escuela.com",
    role: "ADMIN",
    escuelaId: schoolId
  });

  await db.collection("aulas").insertOne({
    id: aulaId,
    status: "ACTIVE",
    schoolId,
    members: [{ userId: usuarioIdString }]
  });

  await db.collection("economia_saldos").insertOne({
    usuarioId,
    saldo: 1000,
    moneda: "TOK",
    updatedAt: new Date().toISOString()
  });

  const { economia } = await import("../../src/routes/economia");
  app = express();
  app.use(express.json());
  app.use(economia);
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

test("POST /api/economia/transacciones rechaza moneda distinta a la configurada", async () => {
  const response = await fetch(`${baseUrl}/api/economia/transacciones`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-usuario-id": usuarioIdString
    },
    body: JSON.stringify({
      usuarioId: usuarioIdString,
      aulaId,
      schoolId,
      tipo: "debito",
      monto: 100,
      moneda: "OTRA",
      motivo: "ajuste"
    })
  });

  const body = await response.json();
  assert.equal(response.status, 400);
  assert.match(body?.error ?? "", /moneda/i);
});

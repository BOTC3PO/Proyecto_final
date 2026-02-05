process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `reportes_padre_${Date.now()}_${Math.random().toString(16).slice(2)}`;
process.env.MONGO_REQUIRE_AUTH = "false";
process.env.MONGO_REQUIRE_TLS = "false";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import { after, before, beforeEach, test } from "node:test";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";

let client: MongoClient;
let app: express.Express;
let server: Server;
let baseUrl: string;
let parentId: ObjectId;
let childId: ObjectId;

const adultoBirthdate = () => {
  const birthdate = new Date();
  birthdate.setFullYear(birthdate.getFullYear() - 20);
  return birthdate;
};

const callReporteEndpoints = async (childIdString: string, parentIdString: string) => {
  const estadisticasResponse = await fetch(`${baseUrl}/api/estadisticas/hijos/${childIdString}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-usuario-id": parentIdString
    }
  });
  const estadisticasBody = await estadisticasResponse.json();

  const informesResponse = await fetch(`${baseUrl}/api/informes/hijos/${childIdString}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-usuario-id": parentIdString
    }
  });
  const informesBody = await informesResponse.json();

  return {
    estadisticas: { response: estadisticasResponse, body: estadisticasBody },
    informes: { response: informesResponse, body: informesBody }
  };
};

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");
  parentId = new ObjectId();
  childId = new ObjectId();

  const { reportes } = await import("../../src/routes/reportes");
  app = express();
  app.use(express.json());
  app.use(reportes);
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
    db.collection("usuarios").deleteMany({}),
    db.collection("vinculos_padre_hijo").deleteMany({}),
    db.collection("eventos_reportes_padres").deleteMany({})
  ]);
  await db.collection("usuarios").insertMany([
    {
      _id: parentId,
      email: "parent@escuela.com",
      role: "PARENT",
      escuelaId: "school-reportes"
    },
    {
      _id: childId,
      email: "child@escuela.com",
      role: "USER",
      escuelaId: "school-reportes",
      birthdate: adultoBirthdate()
    }
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

test("GET /api/estadisticas e informes rechazan acceso sin vinculo", async () => {
  const db = client.db(process.env.DB_NAME);
  const eventCountBefore = await db.collection("eventos_reportes_padres").countDocuments();
  const parentIdString = parentId.toString();
  const childIdString = childId.toString();

  const { estadisticas, informes } = await callReporteEndpoints(childIdString, parentIdString);

  assert.equal(estadisticas.response.status, 403);
  assert.equal(estadisticas.body?.error, "no link");
  assert.equal(informes.response.status, 403);
  assert.equal(informes.body?.error, "no link");

  const eventCountAfter = await db.collection("eventos_reportes_padres").countDocuments();
  assert.equal(eventCountBefore, 0);
  assert.equal(eventCountAfter, 0);
});

test("GET /api/estadisticas e informes rechazan acceso con vinculo pendiente", async () => {
  const db = client.db(process.env.DB_NAME);
  await db.collection("vinculos_padre_hijo").insertOne({
    parentId,
    childId,
    estado: "pendiente",
    createdAt: new Date()
  });

  const eventCountBefore = await db.collection("eventos_reportes_padres").countDocuments();
  const parentIdString = parentId.toString();
  const childIdString = childId.toString();

  const { estadisticas, informes } = await callReporteEndpoints(childIdString, parentIdString);

  assert.equal(estadisticas.response.status, 403);
  assert.equal(estadisticas.body?.error, "approval required");
  assert.equal(informes.response.status, 403);
  assert.equal(informes.body?.error, "approval required");

  const eventCountAfter = await db.collection("eventos_reportes_padres").countDocuments();
  assert.equal(eventCountBefore, 0);
  assert.equal(eventCountAfter, 0);
});

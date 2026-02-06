process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `classroom_scope_${Date.now()}_${Math.random().toString(16).slice(2)}`;
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
let adminUserId: ObjectId;
let teacherUserId: ObjectId;
let otherTeacherUserId: ObjectId;
let schoolId: string;
let otherSchoolId: string;
let aulaId: string;

const seedClassroom = async () => {
  const db = client.db(process.env.DB_NAME);
  const nowIso = new Date().toISOString();
  await db.collection("aulas").insertOne({
    id: aulaId,
    name: "Clase de prueba",
    description: "Clase de prueba",
    accessType: "publica",
    status: "ACTIVE",
    createdBy: adminUserId.toString(),
    members: [
      { userId: adminUserId.toString(), roleInClass: "ADMIN", schoolId },
      { userId: teacherUserId.toString(), roleInClass: "TEACHER", schoolId }
    ],
    createdAt: nowIso,
    updatedAt: nowIso,
    schoolId
  });
};

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");
  const db = client.db(process.env.DB_NAME);
  adminUserId = new ObjectId();
  teacherUserId = new ObjectId();
  otherTeacherUserId = new ObjectId();
  schoolId = "school-scope-a";
  otherSchoolId = "school-scope-b";
  aulaId = "aula-scope";

  await db.collection("usuarios").insertMany([
    {
      _id: adminUserId,
      email: "admin@escuela.com",
      role: "ADMIN",
      escuelaId: schoolId
    },
    {
      _id: teacherUserId,
      email: "teacher@escuela.com",
      role: "TEACHER",
      escuelaId: schoolId
    },
    {
      _id: otherTeacherUserId,
      email: "teacher@otraescuela.com",
      role: "TEACHER",
      escuelaId: otherSchoolId
    }
  ]);

  const { aulas } = await import("../../src/routes/aulas");
  const { publicaciones } = await import("../../src/routes/publicaciones");
  const { resourceLinks } = await import("../../src/routes/resource-links");
  app = express();
  app.use(express.json());
  app.use(aulas);
  app.use(publicaciones);
  app.use(resourceLinks);
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
    db.collection("publicaciones").deleteMany({}),
    db.collection("resource_links").deleteMany({})
  ]);
  await seedClassroom();
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

test("PATCH /api/aulas/:id rechaza escritura entre escuelas", async () => {
  const token = createAccessToken({
    id: otherTeacherUserId.toString(),
    role: "TEACHER",
    schoolId: otherSchoolId
  }).token;
  const response = await fetch(`${baseUrl}/api/aulas/${aulaId}`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({ name: "Clase bloqueada" })
  });
  const body = await response.json();

  assert.equal(response.status, 403);
  assert.equal(body?.error, "forbidden");
});

test("GET /api/aulas/:id/publicaciones rechaza lectura entre escuelas", async () => {
  const token = createAccessToken({
    id: otherTeacherUserId.toString(),
    role: "TEACHER",
    schoolId: otherSchoolId
  }).token;
  const response = await fetch(`${baseUrl}/api/aulas/${aulaId}/publicaciones`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const body = await response.json();

  assert.equal(response.status, 403);
  assert.equal(body?.error, "forbidden");
});

test("POST /api/aulas/:id/resource-links rechaza escritura entre escuelas", async () => {
  const token = createAccessToken({
    id: otherTeacherUserId.toString(),
    role: "TEACHER",
    schoolId: otherSchoolId
  }).token;
  const response = await fetch(`${baseUrl}/api/aulas/${aulaId}/resource-links`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      type: "externo",
      url: "https://example.com/recurso",
      visibility: "publico"
    })
  });
  const body = await response.json();

  assert.equal(response.status, 403);
  assert.equal(body?.error, "forbidden");
});

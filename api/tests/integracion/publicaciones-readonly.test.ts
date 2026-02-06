process.env.NODE_ENV = "test";
process.env.MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
process.env.DB_NAME = `publicaciones_readonly_${Date.now()}_${Math.random().toString(16).slice(2)}`;
process.env.MONGO_REQUIRE_AUTH = "false";
process.env.MONGO_REQUIRE_TLS = "false";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret";

import assert from "node:assert/strict";
import type { Server } from "node:http";
import { after, before, beforeEach, test } from "node:test";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import { createAccessToken } from "../../src/lib/auth-token";

type ClassroomStatus = "ARCHIVED" | "archivada" | "LOCKED";

let client: MongoClient;
let app: express.Express;
let server: Server;
let baseUrl: string;
let adminUserId: ObjectId;
let studentUserId: ObjectId;
let schoolId: string;
let aulaId: string;

const seedClassroom = async (status: ClassroomStatus) => {
  const db = client.db(process.env.DB_NAME);
  await db.collection("aulas").insertOne({
    id: aulaId,
    status,
    schoolId,
    members: [
      { userId: adminUserId.toString(), roleInClass: "ADMIN" },
      { userId: studentUserId.toString(), roleInClass: "STUDENT" }
    ]
  });
};

const seedPublication = async () => {
  const db = client.db(process.env.DB_NAME);
  const nowIso = new Date().toISOString();
  const publicationId = `pub-${Date.now()}`;
  await db.collection("publicaciones").insertOne({
    id: publicationId,
    aulaId,
    authorInitials: "AA",
    title: "Publicación",
    body: "Contenido",
    links: [],
    archivos: [],
    publishedAtLabel: "Publicado recién",
    createdAt: nowIso,
    updatedAt: nowIso,
    isDeleted: false,
    deletedAt: null,
    deletedBy: null
  });
  return publicationId;
};

before(async () => {
  client = await MongoClient.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017");
  const db = client.db(process.env.DB_NAME);
  adminUserId = new ObjectId();
  studentUserId = new ObjectId();
  schoolId = "school-publicaciones";
  aulaId = "aula-publicaciones";

  await db.collection("usuarios").insertMany([
    {
      _id: adminUserId,
      email: "admin@escuela.com",
      role: "ADMIN",
      escuelaId: schoolId
    },
    {
      _id: studentUserId,
      email: "student@escuela.com",
      role: "USER",
      escuelaId: schoolId,
      fullName: "Estudiante Uno"
    }
  ]);

  const { publicaciones } = await import("../../src/routes/publicaciones");
  app = express();
  app.use(express.json());
  app.use(publicaciones);
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
    db.collection("comentarios").deleteMany({}),
    db.collection("moderacion_eventos").deleteMany({})
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

const classroomStatuses: ClassroomStatus[] = ["ARCHIVED", "archivada", "LOCKED"];

for (const status of classroomStatuses) {
  test(`POST /api/aulas/:id/publicaciones rechaza aulas en modo solo lectura (${status})`, async () => {
    const db = client.db(process.env.DB_NAME);
    await seedClassroom(status);

    const countBefore = await db.collection("publicaciones").countDocuments();
    const token = createAccessToken({ id: adminUserId.toString(), role: "ADMIN", schoolId }).token;
    const response = await fetch(`${baseUrl}/api/aulas/${aulaId}/publicaciones`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        contenido: "Nueva publicación",
        title: "Anuncio",
        authorInitials: "AP"
      })
    });

    const body = await response.json();
    const countAfter = await db.collection("publicaciones").countDocuments();

    assert.equal(response.status, 403);
    assert.equal(body?.error, "classroom is read-only");
    assert.equal(countAfter, countBefore);
  });

  test(`POST /api/aulas/:id/publicaciones/:pubId/comentarios rechaza aulas en modo solo lectura (${status})`, async () => {
    const db = client.db(process.env.DB_NAME);
    await seedClassroom(status);
    const publicationId = await seedPublication();

    const publicacionesBefore = await db.collection("publicaciones").countDocuments();
    const comentariosBefore = await db.collection("comentarios").countDocuments();

    const token = createAccessToken({ id: studentUserId.toString(), role: "USER", schoolId }).token;
    const response = await fetch(
      `${baseUrl}/api/aulas/${aulaId}/publicaciones/${publicationId}/comentarios`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          contenido: "Comentario"
        })
      }
    );

    const body = await response.json();
    const publicacionesAfter = await db.collection("publicaciones").countDocuments();
    const comentariosAfter = await db.collection("comentarios").countDocuments();

    assert.equal(response.status, 403);
    assert.equal(body?.error, "classroom is read-only");
    assert.equal(publicacionesAfter, publicacionesBefore);
    assert.equal(comentariosAfter, comentariosBefore);
  });
}

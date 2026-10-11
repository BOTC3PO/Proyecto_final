/**
 * B2 — los errores internos no llegan al cliente.
 */

process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, describe, test } from "node:test";
import type { Server } from "node:http";
import express from "express";
import type { NextFunction, Request, Response } from "express";
import {
  esErrorInternoPorTipo,
  MENSAJE_GENERICO,
  ocultarErroresInternos,
  parecErrorInterno,
  respuestaDeError,
} from "../../src/lib/safe-error";

describe("detección", () => {
  test("mensajes internos típicos se reconocen", () => {
    const internos = [
      "\nInvalid `prisma.usuario.findMany()` invocation:\n\nUnknown argument `foo`",
      "Unique constraint failed on the fields: (`email`)",
      "Foreign key constraint violated on the constraint: `clases_escuela_id_fkey`",
      "Can't reach database server at `localhost:5432`",
      "Cannot read properties of undefined (reading 'id')",
      "x.foo is not a function",
      "ENOENT: no such file or directory, open '/home/javier/proyectos/monolitico/app/api/.env'",
      "connect ECONNREFUSED 127.0.0.1:5432",
      "relation \"usuarios\" does not exist",
      "    at Object.<anonymous> (/app/api/src/routes/x.ts:10:5)",
      "SqliteError: no such table: entries",
      "Unexpected token } in JSON at position 12",
    ];
    for (const m of internos) assert.equal(parecErrorInterno(m), true, m);
  });

  test("mensajes pensados para el usuario pasan", () => {
    const publicos = [
      "invalid payload",
      "saldo insuficiente",
      "usuario no pertenece al aula",
      "La contraseña debe tener al menos 10 caracteres.",
      "limite de compra excedido",
      "[{\"code\":\"invalid_type\",\"path\":[\"monto\"],\"message\":\"Required\"}]",
      "Missing authentication",
      "no autenticado",
    ];
    for (const m of publicos) assert.equal(parecErrorInterno(m), false, m);
    assert.equal(parecErrorInterno(undefined), false);
    assert.equal(parecErrorInterno(42), false);
  });

  test("por tipo: Prisma, TypeError y códigos de sistema", () => {
    class PrismaClientKnownRequestError extends Error {}
    assert.equal(esErrorInternoPorTipo(new PrismaClientKnownRequestError("x")), true);
    assert.equal(esErrorInternoPorTipo(new TypeError("x")), true);
    assert.equal(esErrorInternoPorTipo(Object.assign(new Error("x"), { code: "ENOENT" })), true);
    assert.equal(esErrorInternoPorTipo(new Error("regla de negocio")), false);
    assert.equal(esErrorInternoPorTipo(null), false);
  });
});

describe("respuestaDeError (manejador global)", () => {
  const req = { method: "GET", originalUrl: "/api/x?y=1" } as Pick<Request, "method" | "originalUrl">;

  test("error con status 4xx y mensaje público se informa tal cual", () => {
    const r = respuestaDeError(Object.assign(new Error("request entity too large"), { status: 413 }), req);
    assert.deepEqual([r.status, r.cuerpo], [413, { error: "request entity too large" }]);
  });

  test("JSON mal formado: 400 con mensaje claro", () => {
    const err = Object.assign(new SyntaxError("Unexpected token } in JSON at position 3"), { status: 400, type: "entity.parse.failed" });
    const r = respuestaDeError(err, req);
    assert.equal(r.status, 400);
    assert.match((r.cuerpo as { error: string }).error, /JSON válido/);
  });

  test("error inesperado: 500 genérico con referencia", () => {
    const r = respuestaDeError(new Error("algo se rompió en la base: relation \"x\" does not exist"), req);
    assert.equal(r.status, 500);
    assert.equal((r.cuerpo as { error: string }).error, MENSAJE_GENERICO);
    assert.match((r.cuerpo as { referencia: string }).referencia, /^[0-9a-f]{8}$/);
  });

  test("un error 4xx con mensaje interno tampoco se filtra", () => {
    const r = respuestaDeError(Object.assign(new Error("Invalid `prisma.x.create()` invocation"), { status: 400 }), req);
    assert.equal((r.cuerpo as { error: string }).error, MENSAJE_GENERICO);
  });
});

describe("filtro de respuestas", () => {
  let baseUrl: string;
  let server: Server;

  before(async () => {
    const app = express();
    app.use(ocultarErroresInternos);
    app.use(express.json());
    // Rutas que responden como lo hacen las de la API: `res.status(400).json({ error: e.message })`.
    app.get("/prisma", (_req, res) => {
      const e = new Error("\nInvalid `prisma.usuario.findMany()` invocation:\n\nUnknown argument `foo`. Available: id, email");
      res.status(400).json({ error: e.message });
    });
    app.get("/validacion", (_req, res) => res.status(400).json({ error: "invalid payload" }));
    app.get("/ok", (_req, res) => res.json({ error: "Invalid `prisma`", ok: true })); // 200: no se toca
    app.get("/lanza", () => { throw new Error("connect ECONNREFUSED 127.0.0.1:5432"); });
    app.use((err: unknown, req: Request, res: Response, _next: NextFunction) => {
      const { status, cuerpo } = respuestaDeError(err, req);
      res.status(status).json(cuerpo);
    });
    server = await new Promise<Server>((resolve) => { const s = app.listen(0, () => resolve(s)); });
    const a = server.address();
    if (!a || typeof a === "string") throw new Error("bind");
    baseUrl = `http://127.0.0.1:${a.port}`;
  });
  after(async () => { await new Promise((r) => server.close(() => r(null))); });

  const pedir = async (path: string) => {
    const r = await fetch(`${baseUrl}${path}`);
    return { status: r.status, body: (await r.json()) as Record<string, unknown> };
  };

  test("un error de Prisma devuelto como 400 sale como 500 genérico y sin detalles", async () => {
    const r = await pedir("/prisma");
    assert.equal(r.status, 500);
    assert.equal(r.body.error, MENSAJE_GENERICO);
    assert.ok(r.body.referencia);
    assert.ok(!JSON.stringify(r.body).includes("usuario"));
    assert.ok(!JSON.stringify(r.body).includes("prisma"));
  });

  test("un mensaje de validación pasa intacto", async () => {
    const r = await pedir("/validacion");
    assert.deepEqual([r.status, r.body], [400, { error: "invalid payload" }]);
  });

  test("una respuesta exitosa no se toca aunque contenga la palabra", async () => {
    const r = await pedir("/ok");
    assert.deepEqual([r.status, r.body.ok], [200, true]);
  });

  test("una excepción no atrapada sale genérica", async () => {
    const r = await pedir("/lanza");
    assert.equal(r.status, 500);
    assert.equal(r.body.error, MENSAJE_GENERICO);
    assert.ok(!JSON.stringify(r.body).includes("ECONNREFUSED"));
  });
});

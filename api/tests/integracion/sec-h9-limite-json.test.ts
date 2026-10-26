/**
 * H9 — el límite del cuerpo JSON depende de la ruta.
 */

process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, describe, test } from "node:test";
import type { Server } from "node:http";
import express from "express";
import type { NextFunction, Request, Response } from "express";
import { jsonPorRuta, limiteParaRuta, reglasDeLimite } from "../../src/lib/json-limits";
import { respuestaDeError } from "../../src/lib/safe-error";

const cfg = reglasDeLimite({ contenidoMb: 30, defectoMb: 1 });

describe("límite por ruta", () => {
  const casos: Array<[string, number]> = [
    ["/api/modulos", 30],
    ["/api/modulos/abc", 30],
    ["/api/quizzes/q1/preguntas", 30],
    ["/api/libros/x", 30],
    ["/api/block-documents", 30],
    ["/api/admin/plantillas", 30],
    ["/api/quiz-attempts/abc/submit", 2],
    ["/api/aulas/a1/resource-links", 5],
    ["/api/aulas/a1/resource-links/r1", 5],
    ["/api/aulas", 2],
    ["/api/economia/transacciones", 1],
    ["/api/auth/login", 1],
    ["/api/mensajeria/enviar", 1],
    ["/api/tienda/comprar", 1],
    ["/api/modulos-falso", 1], // el prefijo tiene que coincidir completo
  ];
  for (const [ruta, mb] of casos) {
    test(`${ruta} → ${mb} MB`, () => assert.equal(limiteParaRuta(ruta, cfg), mb));
  }
});

describe("el parser aplica el límite de cada ruta", () => {
  let baseUrl: string;
  let server: Server;

  before(async () => {
    const app = express();
    app.use(jsonPorRuta(cfg));
    app.post(/.*/, (req, res) => res.json({ ok: true, bytes: JSON.stringify(req.body).length }));
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

  const mandar = async (ruta: string, mb: number) => {
    const r = await fetch(`${baseUrl}${ruta}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ relleno: "x".repeat(Math.floor(mb * 1024 * 1024)) }),
    });
    return { status: r.status, body: (await r.json()) as Record<string, unknown> };
  };

  test("una ruta común rechaza 1,5 MB con 413 y mensaje claro", async () => {
    const r = await mandar("/api/economia/transacciones", 1.5);
    assert.equal(r.status, 413);
    assert.match(String(r.body.error), /too large/i);
  });

  test("una ruta común acepta 0,5 MB", async () => {
    assert.equal((await mandar("/api/economia/transacciones", 0.5)).status, 200);
  });

  test("las rutas de contenido siguen aceptando cuerpos grandes", async () => {
    assert.equal((await mandar("/api/modulos", 3)).status, 200);
    assert.equal((await mandar("/api/libros", 3)).status, 200);
  });

  test("un intento de cuestionario admite 1,5 MB pero no 3 MB", async () => {
    assert.equal((await mandar("/api/quiz-attempts/a1/submit", 1.5)).status, 200);
    assert.equal((await mandar("/api/quiz-attempts/a1/submit", 3)).status, 413);
  });

  test("el login (anónimo) no admite cuerpos grandes", async () => {
    assert.equal((await mandar("/api/auth/login", 2)).status, 413);
  });
});

/** C6 — montaje de routers por prefijo (lib/montar-router.ts). */
import assert from "node:assert/strict";
import { test } from "node:test";
import express from "express";
import { prefijosDe, soloSusRutas } from "./montar-router";

test("los prefijos salen de los dos primeros segmentos de cada ruta", () => {
  const r = express.Router();
  r.get("/api/aulas/:id", (_q, s) => s.end());
  r.post("/api/Admin/aulas", (_q, s) => s.end());
  r.get("/health", (_q, s) => s.end());
  assert.deepEqual(prefijosDe(r)?.sort(), ["/api/admin", "/api/aulas", "/health"]);
});

test("una ruta sin prefijo fijo deja el router sin filtro", () => {
  const r = express.Router();
  r.get("/api/:cualquiera", (_q, s) => s.end());
  assert.equal(prefijosDe(r), null);
  assert.equal(soloSusRutas(r), r);
});

test("un use() sin ruta ya no corre para pedidos de otros routers", async () => {
  let corridas = 0;
  const profesor = express.Router();
  profesor.use((_q, _s, next) => { corridas++; next(); });
  profesor.get("/api/profesor/menu", (_q, s) => s.json({ ok: "profesor" }));
  const otro = express.Router();
  otro.get("/api/otro", (_q, s) => s.json({ ok: "otro" }));

  const app = express();
  app.use(soloSusRutas(profesor));
  app.use(soloSusRutas(otro));
  const srv = app.listen(0);
  try {
    const base = `http://127.0.0.1:${(srv.address() as { port: number }).port}`;
    assert.deepEqual(await (await fetch(`${base}/api/otro`)).json(), { ok: "otro" });
    assert.equal(corridas, 0);
    assert.deepEqual(await (await fetch(`${base}/API/Profesor/menu`)).json(), { ok: "profesor" }, "Express no distingue mayúsculas");
    assert.equal(corridas, 1);
  } finally {
    await new Promise<void>((resolve) => srv.close(() => resolve()));
  }
});

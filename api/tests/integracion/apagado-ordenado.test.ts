/**
 * Apagado ordenado de la API: drena avisando `Connection: close`, no acepta lo nuevo al terminar el drenaje, termina lo
 * pendiente, es idempotente y tiene tope de espera.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import http from "node:http";
import { test } from "node:test";
import { crearApagadoOrdenado } from "../../src/lib/apagado-ordenado";

const nuevo = () => {
  const log: string[] = [];
  const salidas: number[] = [];
  let cerrada = 0;
  const hacer = (servidor: http.Server, drenajeMs = 50, esperaMaximaMs = 2000) =>
    crearApagadoOrdenado(servidor, {
      drenajeMs, esperaMaximaMs, alCerrar: () => { cerrada++; }, salir: (c) => salidas.push(c), log: (m) => log.push(m)
    });
  return { log, salidas, hacer, cerradas: () => cerrada };
};
const escuchar = (srv: http.Server) => new Promise<number>((r) => srv.listen(0, "127.0.0.1", () => r((srv.address() as { port: number }).port)));
const espera = (ms: number) => new Promise((r) => setTimeout(r, ms));
const pedir = (port: number, agent?: http.Agent) =>
  new Promise<{ cuerpo: string; conexion: string | undefined }>((res, rej) =>
    http.get({ port, host: "127.0.0.1", agent }, (r) => { let b = ""; r.on("data", (c) => (b += c)); r.on("end", () => res({ cuerpo: b, conexion: r.headers.connection })); }).on("error", rej));

test("un pedido en curso termina bien aunque llegue SIGTERM, y después sale con 0", async () => {
  const t = nuevo();
  const srv = http.createServer((_q, s) => setTimeout(() => s.end("completo"), 300));
  const port = await escuchar(srv);
  const agent = new http.Agent({ keepAlive: true });
  const respuesta = pedir(port, agent);
  await espera(30);
  t.hacer(srv)("SIGTERM");
  assert.equal((await respuesta).cuerpo, "completo");
  await espera(150);
  agent.destroy();
  await espera(100);
  assert.deepEqual(t.salidas, [0]);
  assert.equal(t.cerradas(), 1);
});

test("durante el drenaje sigue atendiendo pedidos nuevos y los avisa con Connection: close", async () => {
  const t = nuevo();
  const srv = http.createServer((_q, s) => s.end("ok"));
  const port = await escuchar(srv);
  const agent = new http.Agent({ keepAlive: true });
  const antes = await pedir(port, agent);
  assert.equal(antes.conexion, "keep-alive");
  t.hacer(srv, 400)("SIGTERM");
  await espera(30);
  const durante = await pedir(port, agent);
  assert.equal(durante.cuerpo, "ok");
  assert.equal(durante.conexion, "close");
  agent.destroy();
  await espera(600);
  assert.deepEqual(t.salidas, [0]);
});

test("pasado el drenaje no se aceptan conexiones nuevas", async () => {
  const t = nuevo();
  const srv = http.createServer((_q, s) => s.end("ok"));
  const port = await escuchar(srv);
  t.hacer(srv, 30)("SIGTERM");
  await espera(200);
  await assert.rejects(() => pedir(port), /ECONNREFUSED/);
});

test("una segunda señal no repite el apagado", async () => {
  const t = nuevo();
  const srv = http.createServer((_q, s) => s.end("ok"));
  await escuchar(srv);
  const apagar = t.hacer(srv);
  apagar("SIGTERM"); apagar("SIGINT"); apagar("SIGTERM");
  await espera(250);
  assert.equal(t.log.filter((l) => l.includes("aviso a los clientes")).length, 1);
  assert.deepEqual(t.salidas, [0]);
});

test("si un pedido no termina, sale con código 1 al agotarse la espera", async () => {
  const t = nuevo();
  const srv = http.createServer(() => { /* nunca responde */ });
  const port = await escuchar(srv);
  const q = http.get({ port, host: "127.0.0.1" }); q.on("error", () => {});
  await espera(50);
  t.hacer(srv, 20, 250)("SIGTERM");
  await espera(500);
  assert.deepEqual(t.salidas, [1]);
  assert.ok(t.log.some((l) => l.includes("se agotó la espera")));
  q.destroy(); srv.closeAllConnections?.();
});

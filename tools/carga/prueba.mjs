/**
 * L16 — prueba de carga contra una API de PRUEBA (nunca producción).
 *   node tools/carga/prueba.mjs <baseUrl> <tokens.json> <usuarios> <segundos> [pausaMs]
 *
 * Cada usuario virtual recorre en bucle lo que pide la app al entrar y al navegar (perfil, aulas, progreso,
 * tareas, cuotas, mensajes, encuestas, módulos), con una pausa entre pedidos para imitar a una persona.
 * Informa pedidos por segundo, errores y latencias (p50, p95, p99) por endpoint.
 */
import { readFileSync } from "node:fs";

const [base, archivo, usuariosArg, segundosArg, pausaArg] = process.argv.slice(2);
if (!base || !archivo) {
  console.error("uso: node prueba.mjs <baseUrl> <tokens.json> <usuarios> <segundos> [pausaMs]");
  process.exit(1);
}
if (/virtualbook\.com|:443|https:/.test(base)) {
  console.error("Esto parece producción: la prueba de carga solo se corre contra un entorno de prueba.");
  process.exit(1);
}
const tokens = JSON.parse(readFileSync(archivo, "utf8"));
const usuarios = Math.min(Number(usuariosArg ?? 50), tokens.length);
const duracionMs = Number(segundosArg ?? 30) * 1000;
const pausaMs = Number(pausaArg ?? 1000);

const RUTAS = [
  "/api/perfil",
  "/api/aulas",
  "/api/progreso/estudiante",
  "/api/tareas",
  "/api/cuotas/mias",
  "/api/mensajeria/no-leidos",
  "/api/encuestas?aulaId=cls-demo-mat-3a",
  "/api/modulos?limit=20"
];

const medidas = new Map(RUTAS.map((r) => [r, []]));
const errores = new Map();
let total = 0;
const fin = Date.now() + duracionMs;
const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

async function usuario(token, i) {
  await dormir(Math.random() * pausaMs); // que no arranquen todos juntos
  let k = i % RUTAS.length;
  while (Date.now() < fin) {
    const ruta = RUTAS[k++ % RUTAS.length];
    const t0 = performance.now();
    try {
      const r = await fetch(base + ruta, { headers: { Authorization: `Bearer ${token}` } });
      await r.arrayBuffer();
      medidas.get(ruta).push(performance.now() - t0);
      if (!r.ok) errores.set(`${ruta} ${r.status}`, (errores.get(`${ruta} ${r.status}`) ?? 0) + 1);
    } catch (e) {
      errores.set(`${ruta} ${e.code ?? e.message}`, (errores.get(`${ruta} ${e.code ?? e.message}`) ?? 0) + 1);
    }
    total++;
    await dormir(pausaMs * (0.5 + Math.random()));
  }
}

const pct = (xs, p) => {
  if (!xs.length) return 0;
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.min(s.length - 1, Math.floor((p / 100) * s.length))];
};

const t0 = Date.now();
await Promise.all(tokens.slice(0, usuarios).map((t, i) => usuario(t, i)));
const seg = (Date.now() - t0) / 1000;
const todas = [...medidas.values()].flat();
const nErr = [...errores.values()].reduce((a, b) => a + b, 0);
console.log(JSON.stringify({
  usuarios,
  segundos: Math.round(seg),
  pedidos: total,
  pedidosPorSegundo: Math.round(total / seg),
  errores: nErr,
  porcentajeErrores: total ? +((nErr / total) * 100).toFixed(2) : 0,
  latenciaMs: { p50: Math.round(pct(todas, 50)), p95: Math.round(pct(todas, 95)), p99: Math.round(pct(todas, 99)) },
  porRuta: Object.fromEntries([...medidas].map(([r, xs]) => [r, { n: xs.length, p50: Math.round(pct(xs, 50)), p95: Math.round(pct(xs, 95)) }])),
  detalleErrores: Object.fromEntries(errores)
}, null, 2));

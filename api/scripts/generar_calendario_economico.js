/**
 * Genera un calendario económico con ciclos aleatorios
 * desde 2024 hasta 2100.
 *
 * Reglas:
 * - Cada ciclo dura entre 7 y 30 días
 * - Cada ciclo tiene un valor de intensidad entre 1 y 10
 * - Los tipos se alternan con algo de aleatoriedad:
 *   normal → inflacion → normal → deflacion → normal → ...
 * - Intensidad >= 8 puede disparar hiperinflacion
 *
 * Uso: node api/scripts/generar_calendario_economico.js
 * Output: api/src/base/calendario_economico.json
 */

const fs = require("fs");
const path = require("path");

const SEED = 42; // reproducible
let state = SEED;

// LCG simple para resultados reproducibles
function rand() {
  state = (state * 1664525 + 1013904223) & 0xffffffff;
  return (state >>> 0) / 0xffffffff;
}

function randInt(min, max) {
  return Math.floor(rand() * (max - min + 1)) + min;
}

function randFloat(min, max, decimals = 2) {
  return parseFloat((rand() * (max - min) + min).toFixed(decimals));
}

const TIPOS = ["normal", "inflacion", "deflacion", "hiperinflacion"];

// Pesos de transición desde cada tipo
const TRANSICIONES = {
  normal:        { normal: 0.4, inflacion: 0.35, deflacion: 0.25, hiperinflacion: 0 },
  inflacion:     { normal: 0.5, inflacion: 0.2,  deflacion: 0.1,  hiperinflacion: 0.2 },
  deflacion:     { normal: 0.6, inflacion: 0.1,  deflacion: 0.2,  hiperinflacion: 0.1 },
  hiperinflacion:{ normal: 0.7, inflacion: 0.2,  deflacion: 0.1,  hiperinflacion: 0 },
};

function nextTipo(actual) {
  const pesos = TRANSICIONES[actual];
  const r = rand();
  let acum = 0;
  for (const [tipo, peso] of Object.entries(pesos)) {
    acum += peso;
    if (r <= acum) return tipo;
  }
  return "normal";
}

function generarTasa(tipo, intensidad) {
  switch (tipo) {
    case "inflacion":
      return randFloat(0.01 * intensidad, 0.03 * intensidad);
    case "deflacion":
      return randFloat(0.01 * intensidad, 0.025 * intensidad);
    case "hiperinflacion":
      return randFloat(0.05 * intensidad, 0.15 * intensidad);
    default:
      return 0;
  }
}

const ciclos = [];
let fechaActual = new Date("2024-01-01");
const fechaFin = new Date("2100-12-31");
let tipoActual = "normal";
let numeroCiclo = 1;

while (fechaActual < fechaFin) {
  const duracion = randInt(7, 30);
  const intensidad = randInt(1, 10);
  const tasa = generarTasa(tipoActual, intensidad);

  const fechaInicio = fechaActual.toISOString().slice(0, 10);
  const fechaFinCiclo = new Date(fechaActual);
  fechaFinCiclo.setDate(fechaFinCiclo.getDate() + duracion - 1);

  // No sobrepasar 2100
  if (fechaFinCiclo > fechaFin) {
    fechaFinCiclo.setTime(fechaFin.getTime());
  }

  ciclos.push({
    id: numeroCiclo,
    tipo: tipoActual,
    intensidad,
    tasa: parseFloat(tasa.toFixed(4)),
    duracion,
    inicio: fechaInicio,
    fin: fechaFinCiclo.toISOString().slice(0, 10),
  });

  fechaActual = new Date(fechaFinCiclo);
  fechaActual.setDate(fechaActual.getDate() + 1);
  tipoActual = nextTipo(tipoActual);
  numeroCiclo++;
}

const output = {
  version: 1,
  generado: new Date().toISOString(),
  seed: SEED,
  totalCiclos: ciclos.length,
  rango: { inicio: "2024-01-01", fin: "2100-12-31" },
  ciclos,
};

const outPath = path.resolve(
  __dirname, "../src/base/calendario_economico.json"
);
fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`✓ Generados ${ciclos.length} ciclos → ${outPath}`);

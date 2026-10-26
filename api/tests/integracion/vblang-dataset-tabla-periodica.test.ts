/**
 * F6-06 — Dataset oficial "tabla_periodica".
 *
 * 1. El dataset sembrado (`SYSTEM_OWNER_ID`, `visibility: "publica"`) es
 *    visible para cualquier docente vía `GET /api/vblang/datasets/by-name`.
 * 2. Las filas devueltas son usables desde VBLang con
 *    `dataset: tabla_periodica` + `uno_de(tabla_periodica)` (nombre IDENT
 *    válido — a diferencia de los datasets demo "Capitales de América").
 */
import {
  jsonRequest,
  prisma,
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";

import { vblangDatasets } from "../../src/routes/vblang-datasets";
import { SYSTEM_OWNER_ID } from "../../src/lib/vblang-types";
import {
  TABLA_PERIODICA_COLUMNAS,
  TABLA_PERIODICA_FILAS,
  TABLA_PERIODICA_NOMBRE,
} from "../../src/lib/tabla-periodica-dataset";
import { compile, generate, parse } from "@vb/vblang";
import type { GeneradorAsistidoProvider } from "@vb/vblang";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const server = await startServer([vblangDatasets]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  await close();
});

const now = new Date().toISOString();

async function seedTablaPeriodica() {
  await prisma.vblangDataset.create({
    data: {
      id: "ds-oficial-tabla-periodica",
      ownerUserId: SYSTEM_OWNER_ID,
      schoolId: null,
      visibility: "publica",
      nombre: TABLA_PERIODICA_NOMBRE,
      descripcion: "Tabla periódica oficial",
      columnas: JSON.stringify(TABLA_PERIODICA_COLUMNAS),
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
    },
  });
  await prisma.vblangDatasetFila.createMany({
    data: TABLA_PERIODICA_FILAS.map((datos, i) => ({
      id: `ds-oficial-tabla-periodica-fila-${i}`,
      datasetId: "ds-oficial-tabla-periodica",
      orden: i,
      datos: JSON.stringify(datos),
      createdAt: now,
    })),
  });
}

beforeEach(async () => {
  resetPrisma();
  seedUser({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });
  await seedTablaPeriodica();
});

const tok = () => tokenFor({ id: "teacher-1", role: "TEACHER", schoolId: "esc-1" });

test("GET by-name: dataset oficial publico visible para cualquier docente, 16 elementos", async () => {
  const r = await jsonRequest(
    baseUrl,
    "GET",
    `/api/vblang/datasets/by-name/${TABLA_PERIODICA_NOMBRE}`,
    { token: tok() },
  );
  assert.equal(r.status, 200);

  const body = r.body as { filas: Array<{ datos: Record<string, unknown> }> };
  assert.equal(body.filas.length, 16);

  const hidrogeno = body.filas.find((f) => f.datos.simbolo === "H")?.datos;
  assert.deepEqual(hidrogeno, {
    Z: 1,
    simbolo: "H",
    nombre: "hidrógeno",
    config: "1s¹",
    electronegatividad: 2.20,
    radio: 53,
  });
});

test("dataset: tabla_periodica + uno_de(tabla_periodica) es usable desde VBLang", () => {
  const src = `
dataset: tabla_periodica
variables:
  el: uno_de(tabla_periodica)
enunciado: "Electronegatividad de {el.simbolo} ({el.nombre})"
respuesta: el.electronegatividad
tipo: input
tolerancia_abs: 0.001
`;
  const provider: GeneradorAsistidoProvider = {
    generar: () => null,
    obtenerDataset: (nombre) =>
      nombre === TABLA_PERIODICA_NOMBRE
        ? TABLA_PERIODICA_FILAS.map((f) => ({ ...f }))
        : null,
  };

  const compiled = compile(parse(src));
  for (const seed of ["t1", "t2", "t3", "t4", "t5"]) {
    const r = generate(compiled, { seed, provider });
    const el = r.variables.el as { Z: number; simbolo: string; electronegatividad: number };

    const esperado = TABLA_PERIODICA_FILAS.find((f) => f.simbolo === el.simbolo);
    assert.ok(esperado, `elemento ${el.simbolo} pertenece a la tabla periódica`);
    assert.equal(el.electronegatividad, esperado!.electronegatividad);
    assert.equal(r.respuesta, esperado!.electronegatividad);
    assert.ok(r.enunciado.includes(el.simbolo));
  }
});

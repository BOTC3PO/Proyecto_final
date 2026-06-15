import {
  jsonRequest,
  resetPrisma,
  seedUser,
  startServer,
  tokenFor,
} from "./_helpers/setup";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";

import { vblangDatasets } from "../../src/routes/vblang-datasets";

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

beforeEach(() => {
  resetPrisma();
  // 3 users en 3 escuelas distintas (incluye un admin para comparar).
  seedUser({ id: "admin-1", role: "ADMIN", schoolId: "esc-admin" });
  seedUser({ id: "teacher-A", role: "TEACHER", schoolId: "esc-A" });
  seedUser({ id: "teacher-A2", role: "TEACHER", schoolId: "esc-A" });
  seedUser({ id: "teacher-B", role: "TEACHER", schoolId: "esc-B" });
  seedUser({ id: "teacher-C", role: "TEACHER", schoolId: "esc-C" });
  // teacher-NOSCHOOL — sin schoolId (caso borde para validar la rama 3
  // cuando el requester no tiene escuela).
  seedUser({ id: "teacher-NS", role: "TEACHER", schoolId: null });
});

const tok = (id: string) => {
  const map: Record<string, { id: string; role: string; schoolId: string | null }> = {
    "admin-1": { id: "admin-1", role: "ADMIN", schoolId: "esc-admin" },
    "teacher-A": { id: "teacher-A", role: "TEACHER", schoolId: "esc-A" },
    "teacher-A2": { id: "teacher-A2", role: "TEACHER", schoolId: "esc-A" },
    "teacher-B": { id: "teacher-B", role: "TEACHER", schoolId: "esc-B" },
    "teacher-C": { id: "teacher-C", role: "TEACHER", schoolId: "esc-C" },
    "teacher-NS": { id: "teacher-NS", role: "TEACHER", schoolId: null },
  };
  return tokenFor(map[id]);
};

const COLUMNAS = { nombre: "string" } as const;

async function createDataset(opts: {
  tokenId: string;
  nombre: string;
  visibility: "privada" | "escuela" | "publica";
}) {
  const r = await jsonRequest(baseUrl, "POST", "/api/vblang/datasets", {
    token: tok(opts.tokenId),
    body: {
      nombre: opts.nombre,
      visibility: opts.visibility,
      columnas: COLUMNAS,
      filas: [{ nombre: opts.nombre }],
    },
  });
  assert.equal(r.status, 201, `crear ${opts.nombre}: status=${r.status} body=${JSON.stringify(r.body)}`);
  return r.body as { id: string; nombre: string; visibility: string };
}

async function list(opts: { tokenId: string; q?: string; visibility?: string; owner?: string }) {
  const params = new URLSearchParams();
  if (opts.q) params.set("q", opts.q);
  if (opts.visibility) params.set("visibility", opts.visibility);
  if (opts.owner) params.set("owner", opts.owner);
  const qs = params.toString();
  const r = await jsonRequest(
    baseUrl,
    "GET",
    `/api/vblang/datasets${qs ? `?${qs}` : ""}`,
    { token: tok(opts.tokenId) },
  );
  assert.equal(r.status, 200);
  return r.body as { items: Array<{ id: string; nombre: string; visibility: string; ownerUserId: string }>; total: number };
}

// ─── Q5 — datasets públicos ajenos deben ser visibles en el LISTADO ───

test("Q5: GET /:id de un PUBLICO ajeno (otra escuela) → 200 (canReadDataset true)", async () => {
  const created = await createDataset({ tokenId: "teacher-B", nombre: "publico_b", visibility: "publica" });
  const id = created.id;
  const r = await jsonRequest(baseUrl, "GET", `/api/vblang/datasets/${id}`, {
    token: tok("teacher-A"),
  });
  assert.equal(r.status, 200, `teacher-A debería poder LEER el público de teacher-B. body=${JSON.stringify(r.body)}`);
});

test("Q5: GET /:id de un PRIVADO ajeno (otra escuela) → 403 (canReadDataset false)", async () => {
  const created = await createDataset({ tokenId: "teacher-B", nombre: "privado_b", visibility: "privada" });
  const id = created.id;
  const r = await jsonRequest(baseUrl, "GET", `/api/vblang/datasets/${id}`, {
    token: tok("teacher-A"),
  });
  assert.equal(r.status, 403, `teacher-A NO debería poder LEER el privado de teacher-B. status=${r.status} body=${JSON.stringify(r.body)}`);
});

test("Q5: GET /:id de un PUBLICO ajeno sin schoolId propio → 200", async () => {
  const created = await createDataset({ tokenId: "teacher-A", nombre: "publico_de_a", visibility: "publica" });
  const id = created.id;
  const r = await jsonRequest(baseUrl, "GET", `/api/vblang/datasets/${id}`, {
    token: tok("teacher-NS"),
  });
  assert.equal(r.status, 200, `teacher-NS (sin escuela) debería poder LEER el público de teacher-A. body=${JSON.stringify(r.body)}`);
});

test("Q5: dataset PUBLICO de OTRA escuela aparece en el listado del teacher de otra escuela", async () => {
  await createDataset({ tokenId: "teacher-B", nombre: "publico_b", visibility: "publica" });
  const body = await list({ tokenId: "teacher-A" });
  const nombres = body.items.map((i) => i.nombre);
  assert.ok(
    nombres.includes("publico_b"),
    `teacher-A (esc-A) debería ver el público de teacher-B (esc-B). Vio: ${JSON.stringify(nombres)}`,
  );
});

test("Q5: dataset PUBLICO de escuela con schoolId=null aparece en el listado de teacher de otra escuela", async () => {
  // teacher-NS crea público sin schoolId. teacher-A debería verlo.
  await createDataset({ tokenId: "teacher-NS", nombre: "publico_ns", visibility: "publica" });
  const body = await list({ tokenId: "teacher-A" });
  const nombres = body.items.map((i) => i.nombre);
  assert.ok(
    nombres.includes("publico_ns"),
    `teacher-A (esc-A) debería ver el público de teacher-NS (sin escuela). Vio: ${JSON.stringify(nombres)}`,
  );
});

test("Q5: dataset PUBLICO ajeno también aparece cuando el requester NO tiene schoolId", async () => {
  // teacher-A (esc-A) crea público. teacher-NS (sin escuela) debería verlo.
  await createDataset({ tokenId: "teacher-A", nombre: "publico_de_a", visibility: "publica" });
  const body = await list({ tokenId: "teacher-NS" });
  const nombres = body.items.map((i) => i.nombre);
  assert.ok(
    nombres.includes("publico_de_a"),
    `teacher-NS (sin escuela) debería ver el público de teacher-A. Vio: ${JSON.stringify(nombres)}`,
  );
});

test("Q5: dataset PRIVADO ajeno NO aparece en el listado de otro teacher", async () => {
  await createDataset({ tokenId: "teacher-B", nombre: "privado_b", visibility: "privada" });
  const body = await list({ tokenId: "teacher-A" });
  const nombres = body.items.map((i) => i.nombre);
  assert.ok(
    !nombres.includes("privado_b"),
    `teacher-A NO debería ver el privado de teacher-B. Vio: ${JSON.stringify(nombres)}`,
  );
});

test("Q5: dataset ESCUELA de OTRA escuela NO aparece en el listado", async () => {
  await createDataset({ tokenId: "teacher-B", nombre: "escuela_b", visibility: "escuela" });
  const body = await list({ tokenId: "teacher-A" });
  const nombres = body.items.map((i) => i.nombre);
  assert.ok(
    !nombres.includes("escuela_b"),
    `teacher-A NO debería ver el escuela de teacher-B (escuelas distintas). Vio: ${JSON.stringify(nombres)}`,
  );
});

test("Q5: dataset ESCUELA de la PROPIA escuela SÍ aparece en el listado", async () => {
  // teacher-A2 (esc-A) crea visibilidad=escuela. teacher-A (esc-A, misma
  // escuela) debería verlo vía la rama "schoolId=tu_escuela".
  await createDataset({ tokenId: "teacher-A2", nombre: "escuela_compartida", visibility: "escuela" });
  const body = await list({ tokenId: "teacher-A" });
  const nombres = body.items.map((i) => i.nombre);
  assert.ok(
    nombres.includes("escuela_compartida"),
    `teacher-A (esc-A) SÍ debería ver el escuela de teacher-A2 (esc-A, misma escuela). Vio: ${JSON.stringify(nombres)}`,
  );
});

test("Q5: filtro visibility=publicas incluye públicos ajenos y propios", async () => {
  await createDataset({ tokenId: "teacher-A", nombre: "pub_a", visibility: "publica" });
  await createDataset({ tokenId: "teacher-B", nombre: "pub_b", visibility: "publica" });
  await createDataset({ tokenId: "teacher-B", nombre: "priv_b", visibility: "privada" });
  const body = await list({ tokenId: "teacher-A", visibility: "publicas" });
  const nombres = body.items.map((i) => i.nombre);
  assert.ok(nombres.includes("pub_a"), `debería ver pub_a. Vio: ${JSON.stringify(nombres)}`);
  assert.ok(nombres.includes("pub_b"), `debería ver pub_b. Vio: ${JSON.stringify(nombres)}`);
  assert.ok(!nombres.includes("priv_b"), `NO debería ver priv_b. Vio: ${JSON.stringify(nombres)}`);
});

test("Q5: filtro owner=otros incluye públicos ajenos Y escuelas de la propia escuela", async () => {
  await createDataset({ tokenId: "teacher-A", nombre: "mio_a_pub", visibility: "publica" });
  await createDataset({ tokenId: "teacher-B", nombre: "otro_b_pub", visibility: "publica" });
  await createDataset({ tokenId: "teacher-A2", nombre: "otro_a2_esc", visibility: "escuela" });
  await createDataset({ tokenId: "teacher-B", nombre: "otro_b_priv", visibility: "privada" });
  const body = await list({ tokenId: "teacher-A", owner: "otros" });
  const nombres = body.items.map((i) => i.nombre);
  assert.ok(nombres.includes("otro_b_pub"), `otros debería incluir público ajeno. Vio: ${JSON.stringify(nombres)}`);
  assert.ok(nombres.includes("otro_a2_esc"), `otros debería incluir escuela de mi escuela. Vio: ${JSON.stringify(nombres)}`);
  assert.ok(!nombres.includes("otro_b_priv"), `otros NO debería incluir privado ajeno. Vio: ${JSON.stringify(nombres)}`);
  assert.ok(!nombres.includes("mio_a_pub"), `otros NO debería incluir mis propios. Vio: ${JSON.stringify(nombres)}`);
});

test("Q5: filtro owner=mias incluye TODAS mis visibilidades", async () => {
  await createDataset({ tokenId: "teacher-A", nombre: "mia_pub", visibility: "publica" });
  await createDataset({ tokenId: "teacher-A", nombre: "mia_priv", visibility: "privada" });
  await createDataset({ tokenId: "teacher-A", nombre: "mia_esc", visibility: "escuela" });
  await createDataset({ tokenId: "teacher-B", nombre: "otro_b_pub", visibility: "publica" });
  const body = await list({ tokenId: "teacher-A", owner: "mias" });
  const nombres = body.items.map((i) => i.nombre);
  assert.ok(nombres.includes("mia_pub"));
  assert.ok(nombres.includes("mia_priv"));
  assert.ok(nombres.includes("mia_esc"));
  assert.ok(!nombres.includes("otro_b_pub"), `mias NO debería incluir ajeno. Vio: ${JSON.stringify(nombres)}`);
});

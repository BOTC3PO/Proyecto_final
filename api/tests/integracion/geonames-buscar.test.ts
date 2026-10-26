/**
 * PLAN-G ítem 45.b — GET /api/maps/geonames/buscar.
 *
 * `geonames_index.sqlite` (505 países/ciudades + 63k nombres alternativos
 * en distintos idiomas) existía en el repo pero ningún endpoint lo
 * consultaba. Estos tests cubren la búsqueda usada por "Buscar lugar" en
 * el editor de mapas (`MapaEditorFull.tsx`).
 *
 * Se crea un .sqlite real pequeño en /tmp con la misma shape
 * (geoname_feature/alternate_name) que el archivo real, mismo patrón que
 * `dictionary-lookup.test.ts`. A diferencia de ese test, acá NO hace
 * falta invalidar ningún cache de módulo: la ruta lee
 * `process.env.GEONAMES_SQLITE_PATH` en cada request (no hay un objeto
 * ENV cacheado de por medio), así que alcanza con setear la env var
 * antes de la primera llamada.
 *
 * Cubre:
 *  (a) búsqueda por nombre principal (asciiname) → 200 con el lugar.
 *  (b) búsqueda por nombre alternativo en español → matchea igual.
 *  (c) con dos alternativos válidos (distinto idioma), gana 'es'.
 *  (d) término de 1 char → items: [] (no explota, no pega contra la DB).
 *  (e) sin resultados → items: [].
 *  (f) dedup: un lugar con varios alternate_name que matchean aparece 1 sola vez.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { after, before, test } from "node:test";

import { startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
let tmpSqlitePath: string;

before(async () => {
  tmpSqlitePath = path.join(os.tmpdir(), `geonames-test-${Date.now()}.sqlite`);
  const Database = (await import("better-sqlite3")).default;
  const db = new Database(tmpSqlitePath);
  db.exec(`
    CREATE TABLE geoname_feature (
      geonameid        INTEGER PRIMARY KEY,
      name             TEXT,
      asciiname        TEXT,
      latitude         REAL,
      longitude        REAL,
      feature_class    TEXT,
      feature_code     TEXT,
      country_code     TEXT,
      admin1_code      TEXT,
      population       INTEGER,
      timezone         TEXT,
      modification_date TEXT
    );
    CREATE TABLE alternate_name (
      alternateNameId  INTEGER PRIMARY KEY,
      geonameid        INTEGER NOT NULL,
      isolanguage      TEXT,
      alternate_name   TEXT,
      isPreferredName  INTEGER,
      isShortName      INTEGER,
      isColloquial     INTEGER,
      isHistoric       INTEGER
    );
    INSERT INTO geoname_feature (geonameid, name, asciiname, latitude, longitude, feature_class, feature_code, country_code, population)
    VALUES
      (1, 'Federative Republic of Brazil', 'Federative Republic of Brazil', -10, -55, 'A', 'PCLI', 'BR', 209469333),
      (2, 'Mogadishu', 'Mogadishu', 2.03711, 45.34375, 'P', 'PPLC', 'SO', 2587183);
    INSERT INTO alternate_name (geonameid, isolanguage, alternate_name) VALUES
      (1, 'es', 'Brasil'),
      (1, 'nl', 'Brasilië'),
      (1, '', 'Brazil (short)'),
      (2, 'es', 'Mogadiscio');
  `);
  db.close();

  process.env.GEONAMES_SQLITE_PATH = tmpSqlitePath;

  const { geonamesRouter } = await import("../../src/routes/geonames");
  const server = await startServer([geonamesRouter]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  await close();
  try {
    fs.unlinkSync(tmpSqlitePath);
  } catch {
    // ignore
  }
});

test("(a) búsqueda por asciiname del feature", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/maps/geonames/buscar?q=Mogadishu");
  assert.equal(r.status, 200, JSON.stringify(r.body));
  const body = r.body as { items: Array<{ nombre: string; pais: string; lat: number; lon: number }> };
  assert.equal(body.items.length, 1);
  assert.equal(body.items[0].pais, "SO");
  assert.equal(body.items[0].lat, 2.03711);
});

test("(b) búsqueda por nombre alternativo en español", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/maps/geonames/buscar?q=mogadiscio");
  assert.equal(r.status, 200);
  const body = r.body as { items: Array<{ nombre: string; pais: string }> };
  assert.equal(body.items.length, 1);
  assert.equal(body.items[0].nombre, "Mogadiscio");
  assert.equal(body.items[0].pais, "SO");
});

test("(c) con alternativos en varios idiomas, gana el nombre en español", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/maps/geonames/buscar?q=brasil");
  assert.equal(r.status, 200);
  const body = r.body as { items: Array<{ nombre: string; pais: string; tipo: string }> };
  assert.equal(body.items.length, 1, JSON.stringify(body.items));
  assert.equal(body.items[0].nombre, "Brasil");
  assert.equal(body.items[0].tipo, "pais");
});

test("(d) término de 1 caracter → items vacío (no pega contra la DB)", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/maps/geonames/buscar?q=b");
  assert.equal(r.status, 200);
  assert.deepEqual(r.body, { items: [] });
});

test("(e) sin resultados → items vacío", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/maps/geonames/buscar?q=zzzznadaquematchee");
  assert.equal(r.status, 200);
  assert.deepEqual(r.body, { items: [] });
});

test("(f) dedup: un lugar con varios nombres que matchean aparece una sola vez", async () => {
  // "bra" matchea el nombre principal, 'Brasil' (es) y 'Brasilië' (nl) —
  // las 3 filas son el MISMO geonameid.
  const r = await jsonRequest(baseUrl, "GET", "/api/maps/geonames/buscar?q=bra");
  assert.equal(r.status, 200);
  const body = r.body as { items: Array<{ geonameid: number }> };
  const ids = body.items.map((i) => i.geonameid);
  assert.equal(new Set(ids).size, ids.length, "no debe haber geonameid duplicado");
});

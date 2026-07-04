/**
 * geonames.ts
 *
 * Búsqueda de lugares (países + ciudades principales) para el editor de
 * mapas: el docente escribe un nombre ("Mogadiscio", "República Rwandesa")
 * y obtiene coordenadas reales en vez de tener que hacer click a ojo sobre
 * un mapamundi de baja resolución.
 *
 * Los datos ya existían en `geonames_index.sqlite` (505 features: países +
 * capitales, con 63k+ nombres alternativos en distintos idiomas) pero
 * ningún endpoint los consultaba — quedaban sin usar. Esta es la primera
 * vía de consumo.
 *
 * Nota de nombres: `CONTENT_SQLITE_PATH` (usado por `maps/catalog.ts` para
 * el manifest cache de TopoJSON) apunta HOY a este mismo archivo, pero
 * espera una tabla `map_assets` que no existe acá — son dos usos
 * distintos del mismo path por coincidencia/legado, no relacionados. Para
 * no tocar ese código (falla en silencio y cae a `express.static`, sigue
 * funcionando), esta búsqueda usa su PROPIA variable de entorno
 * (`GEONAMES_SQLITE_PATH`), con el mismo default de archivo.
 */
import path from "node:path";

export type GeonameResultado = {
  geonameid: number;
  nombre: string;
  nombreAscii: string;
  pais: string;
  tipo: "pais" | "ciudad" | "otro";
  lat: number;
  lon: number;
  poblacion: number;
};

type BetterSqlite3Ctor = new (
  file: string,
  options?: { readonly?: boolean; fileMustExist?: boolean }
) => {
  prepare: (sql: string) => {
    all: (...params: unknown[]) => unknown[];
  };
};

export const DEFAULT_GEONAMES_SQLITE_PATH = path.resolve(
  process.cwd(),
  "src/maps/geonames_index.sqlite"
);

let cachedCtor: BetterSqlite3Ctor | null = null;
const getBetterSqlite3 = (): BetterSqlite3Ctor => {
  if (cachedCtor) return cachedCtor;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  cachedCtor = require("better-sqlite3") as BetterSqlite3Ctor;
  return cachedCtor;
};

const resolveDbPath = () =>
  path.resolve(process.cwd(), process.env.GEONAMES_SQLITE_PATH ?? DEFAULT_GEONAMES_SQLITE_PATH);

const featureTipo = (featureClass: string, featureCode: string): GeonameResultado["tipo"] => {
  if (featureClass === "A" && featureCode.startsWith("PCL")) return "pais";
  if (featureClass === "P") return "ciudad";
  return "otro";
};

type RawRow = {
  geonameid: number;
  name: string;
  asciiname: string;
  latitude: number;
  longitude: number;
  feature_class: string;
  feature_code: string;
  country_code: string;
  population: number;
  matched_name: string;
};

/**
 * Busca lugares por nombre (nombre principal, ascii, o cualquier nombre
 * alternativo/traducido en `alternate_name`). Ordena por: coincidencia de
 * prefijo primero, después por población descendente (los lugares más
 * relevantes/conocidos aparecen antes). Deduplica por `geonameid` (un
 * lugar puede matchear por varios nombres alternativos a la vez).
 */
export function buscarGeonames(termino: string, limite = 10): GeonameResultado[] {
  const q = termino.trim();
  if (q.length < 2) return [];

  const Ctor = getBetterSqlite3();
  const db = new Ctor(resolveDbPath(), { readonly: true, fileMustExist: true });

  const like = `%${q}%`;
  const prefijo = `${q}%`;

  // UNION de: (a) nombre/asciiname del feature, (b) nombre alternativo.
  // `matched_name` guarda CON QUÉ nombre matcheó, para poder mostrar
  // "Mogadiscio (Mogadishu)" cuando el match fue por un alias. `idioma`
  // permite preferir el nombre en español entre varios alternativos
  // igual de válidos para el mismo lugar (ej. "brasil" matchea tanto
  // "Brasil" en es como "Brasilië" en nl — sin esto, cuál gana es
  // arbitrario).
  const rows = db
    .prepare(
      `
      SELECT * FROM (
        SELECT geonameid, name, asciiname, latitude, longitude, feature_class,
               feature_code, country_code, population, name AS matched_name,
               '' AS idioma
        FROM geoname_feature
        WHERE name LIKE @like OR asciiname LIKE @like
        UNION ALL
        SELECT gf.geonameid, gf.name, gf.asciiname, gf.latitude, gf.longitude,
               gf.feature_class, gf.feature_code, gf.country_code, gf.population,
               an.alternate_name AS matched_name, an.isolanguage AS idioma
        FROM alternate_name an
        JOIN geoname_feature gf ON gf.geonameid = an.geonameid
        WHERE an.alternate_name LIKE @like
      )
      ORDER BY
        CASE WHEN LOWER(matched_name) = LOWER(@q) THEN 0
             WHEN matched_name LIKE @prefijo THEN 1
             ELSE 2 END,
        CASE WHEN idioma = 'es' THEN 0 ELSE 1 END,
        population DESC
      LIMIT @limite
      `
    )
    .all({ like, prefijo, q, limite: Math.max(1, Math.min(50, limite)) * 4 }) as RawRow[];

  const porId = new Map<number, GeonameResultado>();
  for (const r of rows) {
    if (porId.has(r.geonameid)) continue;
    porId.set(r.geonameid, {
      geonameid: r.geonameid,
      nombre: r.matched_name || r.name,
      nombreAscii: r.asciiname,
      pais: r.country_code,
      tipo: featureTipo(r.feature_class, r.feature_code),
      lat: r.latitude,
      lon: r.longitude,
      poblacion: r.population ?? 0,
    });
    if (porId.size >= limite) break;
  }

  return [...porId.values()];
}

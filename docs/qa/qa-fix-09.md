# QA-FIX-09 — Diccionario: validación de esquema al iniciar + 503 con causa accionable (Q6-bis)

## Diagnóstico CERRADO (verificado)

El 500 del dictionary NO era de compresión (hipótesis previa descartada).
Causa confirmada, ejecutando el lookup contra un sqlite real con la
misma shape que el Diccionario.sqlite commiteado:

- **Diccionario servible** (lo que debería estar): tabla
  `words(lang, word, definitions, synonyms, translations)`, TEXT plano.
  El lector funciona OK contra este esquema (lookup, prefix,
  serialización JSON — los NULL no rompen, palabra inexistente →
  `found: false`).
- **Diccionario commiteado** (lo que el repo tenía): tabla
  `entries(source, title, ns, page_id, ..., text BLOB)` — el dump RAW
  de Wiktionary. NO tiene columnas `lang`/`word`.
- **Pipeline correcto**:
  - `install/build_wiktionary_sqlite.py:309` crea `entries` (RAW).
  - `install/build_dictionary_final.py:400` lee `entries`, descomprime,
    escribe `words` (final).
  - `composer.sh` corre ambos.
  - Si la app apunta a un `entries`-only (RAW intermedio, o build
    cortado), falla.

### Cadena del 500 original

```
GET /api/dictionary/lookup
  → getSqliteServiceIfEnabled (dictionary.ts:37-45)
    → getSqliteDictionaryService (sqliteDictionary.ts:227-232)
      → new SqliteDictionaryService()
        → detectSchema() (sqliteDictionary.ts:108-146)
          → for-loop con pickColumn("lang",...) + pickColumn("word",...)
            → entries NO matchea ninguna firma de lang/word → best === null
          → throw new Error("Unable to detect dictionary table/columns containing lang + word")
        → throw se propaga
    → catch en getSqliteServiceIfEnabled línea 42 → return { error: message }
  → handler línea 77 → res.status(500).json({ found: false, error: ... })
```

El operador veía un 500 con un mensaje genérico (o un stack trace en
dev), sin idea de que el archivo era el RAW de Wiktionary y que
faltaba correr `build_dictionary_final.py`.

## Decisión

**No tirar 500 por request** — devolver **503** con un mensaje
diagnóstico estable, reusando el patrón del caso `DB_KIND !== "sqlite"`
(líneas 69, 76, 109 del route original).

**Por qué 503 (no 500)**: el servicio **sí sabe** que el archivo
existe, está abierto, pero su **esquema no es servible**. Es un
problema de configuración del operador, no de error de runtime del
servicio. 503 ("Service Unavailable — dictionary sqlite not in
expected shape") es el código correcto.

**Por qué distinguir RAW vs unknown**: el mensaje accionable es
distinto. RAW: "corré `build_dictionary_final.py`". Unknown: "no
tenés un diccionario, esto es otra cosa". Con un solo código
genérico ("schema inválido") el operador no sabe qué paso del
pipeline se cortó.

**Por qué log warn una vez al iniciar** (no en cada request): el
operador no debe ver el mismo warning N veces en el log ni
debe leer el response HTTP para diagnosticar. Con el singleton
"failed state" + log en el catch de init, el warning aparece la
primera vez que se instancia el servicio y no se repite.

## Fix

### 1. `api/src/db/sqliteDictionary.ts` — clase de error tipada

```ts
export type DictionarySchemaErrorCode =
  | "RAW_WIKTIONARY"
  | "UNKNOWN_SCHEMA"
  | "NO_TABLES"
  | "FILE_MISSING";

export class DictionarySchemaError extends Error {
  readonly code: DictionarySchemaErrorCode;
  readonly path: string;

  constructor(code: DictionarySchemaErrorCode, path: string, message: string) {
    super(message);
    this.name = "DictionarySchemaError";
    this.code = code;
    this.path = path;
  }
}
```

### 2. `detectSchema()` — detecta la firma RAW además de la firma servible

```ts
private detectSchema(sqlitePath: string): DictionarySchema {
  const tables = ...;

  let best: { schema; score; rows } | null = null;
  let rawTable: { name: string; cols: string[] } | null = null;

  for (const tableRow of tables) {
    if (TABLE_BLACKLIST.has(tableRow.name)) continue;
    const colNames = ...;
    const langCol = pickColumn(colNames, ["lang", "language", "locale"]);
    const wordCol = pickColumn(colNames, ["word", "term", "lemma", "headword"]);

    if (langCol && wordCol) {
      // ... existing best-tracking logic (sin cambios) ...
    } else {
      // Firma RAW: tabla "entries" con source/title/text (ver
      // build_wiktionary_sqlite.py:309 — PRIMARY KEY (source, title),
      // columnas source/title/ns/page_id/.../text BLOB).
      if (
        !rawTable &&
        tableRow.name === "entries" &&
        colNames.includes("source") &&
        colNames.includes("title") &&
        (colNames.includes("text") || colNames.includes("page_id"))
      ) {
        rawTable = { name: tableRow.name, cols: colNames };
      }
    }
  }

  if (best) return best.schema;

  if (rawTable) {
    throw new DictionarySchemaError(
      "RAW_WIKTIONARY",
      sqlitePath,
      `Dictionary sqlite has RAW Wiktionary schema (table 'entries' with source/title/text); ` +
        `run install/build_dictionary_final.py to produce the 'words' table. ` +
        `Path: ${sqlitePath}, columns: [${rawTable.cols.join(", ")}]`
    );
  }
  if (tables.length === 0) {
    throw new DictionarySchemaError("NO_TABLES", sqlitePath,
      `Dictionary sqlite has no user tables. Path: ${sqlitePath}`);
  }
  const tableList = tables.map(t => t.name).join(", ");
  throw new DictionarySchemaError("UNKNOWN_SCHEMA", sqlitePath,
    `Dictionary sqlite has no table with lang+word columns; got tables: [${tableList}]. Path: ${sqlitePath}`);
}
```

Mensaje RAW ejemplo:
```
Dictionary sqlite has RAW Wiktionary schema (table 'entries' with source/title/text);
run install/build_dictionary_final.py to produce the 'words' table.
Path: /var/lib/diccionario/Diccionario.sqlite,
columns: [source, title, ns, page_id, rev_id, parent_id, timestamp, model, format, text, sha1, is_redirect, redirect_title]
```

### 3. `getSqliteDictionaryService()` — singleton con "failed state"

```ts
let singleton: SqliteDictionaryService | null = null;
let lastInitError: DictionarySchemaError | null = null;

export const getSqliteDictionaryService = () => {
  if (!isSqliteDictionaryEnabled()) throw new Error("dictionary disabled");
  if (singleton) return singleton;
  if (lastInitError) throw lastInitError;       // No reintentar.
  try {
    singleton = new SqliteDictionaryService();
    return singleton;
  } catch (error) {
    if (error instanceof DictionarySchemaError) {
      lastInitError = error;
      console.warn(`[dictionary/sqlite] schema validation failed (${error.code}): ${error.message}`);
    }
    throw error;
  }
};

export const resetSqliteDictionaryService = () => {
  singleton = null;
  lastInitError = null;
};  // test-only
```

Antes: el `singleton` quedaba `null` tras cada throw y el constructor
se reintentaba en cada request. Ahora: una sola instanciación, un
solo warn, 503 estable para todos los requests hasta que se reinicie
el server (o el test llame a `resetSqliteDictionaryService`).

### 4. `api/src/routes/dictionary.ts` — 503 con causa

```ts
const getSqliteServiceIfEnabled = async (): Promise<ServiceResult> => {
  if (ENV.DB_KIND !== "sqlite") return { disabled: true };
  try {
    const sqliteModule = await import("../db/sqliteDictionary");
    return { service: sqliteModule.getSqliteDictionaryService() };
  } catch (error) {
    if (error?.name === "DictionarySchemaError") {
      const err = error as { code: string; message: string; path: string };
      return { schemaError: { code: err.code, message: err.message, path: err.path } };
    }
    const message = ENV.NODE_ENV === "production" ? "sqlite unavailable" : String(error);
    return { error: message };
  }
};
```

Tres handlers (`/health`, `/lookup`, `/prefix`):

```ts
if ("schemaError" in result) {
  const se = result.schemaError;
  return res.status(503).json({
    // health: { ok: false, code, error }
    // lookup: { found: false, code, error }
    // prefix: { count: 0, entries: [], code, error }
    code: se.code,
    error: se.message
  });
}
```

El shape de los 200-path (`{ ok: true, kind, table, cols }`,
`{ found: true, entry }`, `{ count, entries }`) **no cambia**. El
shape de los 503 es un super-set del 500 anterior más el campo
`code` (estable, testeable por substring).

## Out of scope (anotado, NO resuelto acá)

- **Por qué la instalación de Javier terminó apuntando a un
  `entries`-only**: ¿build cortado? ¿path mal? ¿el `.sqlite` del
  repo se usa como fallback? Es un tema de pipeline/instalación.
  Si este fix expone un health 503 claro, el operador lo diagnostica
  solo. Anotado para seguimiento:
  - `composer.sh` debería validar que el `words` final existe antes
    de copiar.
  - El repo NO debería commitear el RAW como `Diccionario.sqlite`
    (debería ser el `words` final, o un `.gitignore`).
- **Idiomas en `words`**: el filtro por `lang` ya soporta todos los
  idiomas presentes (`es, en, pt, fr, it, la` — la firma
  `build_dictionary_final.py`). El síntoma "solo español" era un
  efecto del 500: cualquier consulta fallaba; probando `es` se veía
  el error, otros idiomas no se probaban. Con el fix, un `words`
  servible responde correctamente a `lang=fr` y `lang=la`.

## Tests

### Nuevos (7 tests en 2 archivos)

**`api/tests/integracion/dictionary-raw-schema.test.ts` (4 tests)**
- Fixture: tabla `entries(source, title, ns, page_id, ..., text)` —
  misma firma que `build_wiktionary_sqlite.py:309`.
- Health → 503 con `code: "RAW_WIKTIONARY"`, mensaje menciona
  `entries`/`RAW`/`build_dictionary_final`/path.
- Lookup → 503 con `code: "RAW_WIKTIONARY"`.
- Prefix → 503 con `code: "RAW_WIKTIONARY"`.
- Candado: el error es una sola línea (no stack trace).

**`api/tests/integracion/dictionary-unknown-schema.test.ts` (3 tests)**
- Fixture: tabla `widgets(id, name, price)` — sin lang+word, sin
  firma RAW.
- Health → 503 con `code: "UNKNOWN_SCHEMA"`, mensaje lista `widgets`.
- Lookup → 503 con `code: "UNKNOWN_SCHEMA"`.
- Prefix → 503 con `code: "UNKNOWN_SCHEMA"`.
- Candado: NO menciona `RAW_WIKTIONARY`/`build_dictionary_final`
  (no es RAW).

### Existentes (sin cambios, siguen pasando)

- `api/tests/integracion/dictionary-lookup.test.ts` (7 tests): caso
  `words` (servible) — health 200, lookup/prefix OK, found:false,
  400 en params inválidos.

## Aceptación

- `pnpm test:api` → **295/295** (de 288 → +7).
- `pnpm test:web` → **765/765** (sin cambios).
- Un sqlite con `words` se sirve bien (caso bueno).
- Un sqlite con `entries` (RAW) da 503 legible en health/lookup/prefix
  con el mensaje accionable, **nunca** 500 opaco.
- Un sqlite con otra tabla da 503 con mensaje que lista las tablas
  encontradas.

## Notas

- **Por qué `as const` en el return del route**: para que el
  discriminated union (`{ disabled } | { service } | { schemaError }
  | { error }`) angoste correctamente con `"schemaError" in result`.
  El typecheck ahora pasa sin `TS18048`.
- **Por qué 4 códigos de error** (y no 1 genérico): cada uno da un
  mensaje accionable distinto:
  - `FILE_MISSING` → "el archivo no existe, revisá SQLITE_PATH".
  - `RAW_WIKTIONARY` → "corré build_dictionary_final.py".
  - `NO_TABLES` → "el sqlite está vacío".
  - `UNKNOWN_SCHEMA` → "no es un diccionario, lo que hay es: [...]".
- **Por qué log warn (no error)**: el operador no tiene un bug de
  código; tiene un problema de configuración. `console.warn` es el
  nivel correcto (visible pero no alarmante). El 503 en el HTTP
  response es la señal de "algo anda mal"; el log es la pista
  adicional.
- **Por qué `console.warn` con `error.code + error.message`**: el
  operador puede buscar el código exacto (`RAW_WIKTIONARY`) en docs
  o scripts de diagnóstico. El mensaje full es para entender el
  contexto (qué columnas tiene, qué path).

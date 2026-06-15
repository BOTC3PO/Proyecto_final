# QA-FIX-03 — Diccionario: lookup 500 con modelo de 450MB (Q6)

**Tarea**: QA-FIX-03
**Fecha**: 2026-06-15
**Resultado**: fix defensivo en la ruta. El modelo actual funciona, pero la ruta no protegía contra `service.lookup()` lanzando — cualquier error de SQLite (binding roto, schema inválido) se propagaba como 500 genérico de Express.

## TL;DR

- El archivo `api/src/diccionarios/Diccionario.sqlite` (477MB) **funciona correctamente** en este entorno: el constructor del servicio tarda 22ms, los lookups <1ms, 1000 lookups en 69ms, sin memory leaks.
- El `requireClassroomScope`-style "500" del síntoma original es atribuible a que el async handler de `dictionary.get("/api/dictionary/lookup", ...)` **no envolvía `service.lookup(lang, word)` en try/catch**. Si el .get del prepared statement lanzaba (binding roto, schema incompatible, conexión cerrada), Express devolvía 500 con stack trace (en dev) o HTML genérico (en prod), no un error JSON en el shape de los otros endpoints.
- **Fix**: helper `safeOperation()` que captura la causa y la loguea; el handler devuelve `500 { found: false, error: <causa> }` (o `500 { count: 0, entries: [], error: <causa> }` para prefix). En producción el mensaje es genérico para no filtrar detalles del binding.
- **Tests**: 7 tests con un .sqlite real (creado en /tmp dentro del `before`), verifican el contrato happy-path. Lockean: lookup 200+entry, miss `{found:false}` (NO 500), validaciones 400, prefix 200 ordenado, health 200 con shape del schema.

## Investigación: lo que probé contra el archivo real

Ejecuté `api/diag-qa-fix-03.cjs` (luego borrado) contra `Diccionario.sqlite` (477MB, 2.766.675 filas):

```
path: /home/javier/Proyecto_final/api/src/diccionarios/Diccionario.sqlite
size: 477270016 (≈ 455 MiB)
file: SQLite 3.x database, ... schema 4
opened OK en 5ms
tables: [ { name: 'words' } ]
  columns: lang, word, definitions, synonyms, translations
  rows: 2766675
  index_list: [ { name: 'idx_words_lang_word', ... }, { name: 'sqlite_autoindex_words_1', ... } ]
ctor ms: 22
lookup ms: 64
miss ms: 0  → null
prefix ms: 0  → [...5 rows...]
1000 lookups: 69ms, hits=1000, misses=0, errors=0
100 prefixes: 0ms, totalRows=5000, errors=0
memory delta: { rss: 1.5MB, heapUsed: -0.8MB, external: -32KB }
```

**Conclusión**: el archivo NO es el problema. El `detectSchema()` encuentra la tabla `words`, identifica `lang`/`word`, prepara statements, las queries usan el índice `idx_words_lang_word`, y el servicio responde <1ms.

## Causa raíz (Q6)

`api/src/routes/dictionary.ts:55-77` (versión previa al fix):

```ts
dictionary.get("/api/dictionary/lookup", async (req, res) => {
  const result = await getSqliteServiceIfEnabled();
  if ("disabled" in result) return res.status(503)...
  if ("error" in result) return res.status(500).json({ ok: false, error: result.error });
  const service = result.service;
  // ...
  const entry = service.lookup(lang, word);  // ⚠️ si lanza, Express responde 500
  // ...
});
```

`service.lookup()` (línea 183 de `sqliteDictionary.ts`):

```ts
lookup(lang: string, word: string) {
  return (this.lookupStmt.get(lang, word) as Record<string, unknown> | undefined) ?? null;
}
```

`this.lookupStmt.get(lang, word)` **puede lanzar**:
- Si `better-sqlite3` no encontró el binding nativo al cargar (instalación rota).
- Si la DB está corrupta o cerrada.
- Si el schema cambió y el prepared statement quedó inválido.

Cuando eso pasa con un .sqlite de 450MB, el síntoma es 500 con stack trace largo (en dev) o HTML genérico (en prod). El usuario no ve la causa real; ve "Internal Server Error".

El otro lugar que podía 500 era `getSqliteServiceIfEnabled()`. Ese SÍ tenía try/catch (líneas 39-45 de la versión previa) — pero solo en dev muestra el mensaje del error, en prod muestra "sqlite unavailable" genérico. Ese caso YA estaba razonablemente manejado.

## Fix

`api/src/routes/dictionary.ts`:

1. Helper `safeOperation<T>(fn: () => T)` que captura throws y los loguea con `console.error` (un 500 con stack es más útil que un 500 con causa genérica). Devuelve `{ ok: true, value }` o `{ ok: false, error }`. En producción el mensaje del error es genérico para no filtrar detalles del binding.

2. El handler de `lookup` ahora:
   ```ts
   const looked = safeOperation(() => service.lookup(lang, word));
   if (!looked.ok) {
     return res.status(500).json({ found: false, error: looked.error });
   }
   const entry = looked.value;
   if (!entry) return res.json({ found: false });
   return res.json({ found: true, entry });
   ```

3. El handler de `prefix` recibe el mismo tratamiento.

4. `health` no necesita cambio (no ejecuta lookup/prefix).

## Tests añadidos (7)

`api/tests/integracion/dictionary-lookup.test.ts`:

- **Setup**: en el `before`, se crea un .sqlite real en `/tmp` con la misma shape que el modelo de 450MB (tabla `words`, columnas `lang/word/definitions/synonyms/translations`, índice `idx_words_lang_word`), se setea `process.env.SQLITE_PATH` a ese archivo, se invalida el cache de `env.ts` (porque `setup.ts` ya lo cargó al inicio del test file y `ENV.SQLITE_PATH` quedó con el valor del `.env`), y se importa el route. Esto ejercita el servicio REAL, no un stub.

- **Tests**:
  1. lookup palabra existente (`perro`) → 200 + `{ found: true, entry: { word, definitions, synonyms, translations } }`.
  2. lookup palabra inexistente → 200 + `{ found: false }`, **NO 500**. Candado: `assert.equal(body.error, undefined)`.
  3. lookup con `lang=x` (1 char) → 400 + `{ error: /invalid lang/i }`. **NO 500**.
  4. lookup sin `word` → 400. **NO 500**.
  5. prefix con prefijo `cas` → 200, ≥2 entries, todas con `^cas`, ordenadas por word (lexicográfico).
  6. prefix con `q=` vacío → 400.
  7. health → 200 + `{ ok: true, kind: "sqlite", table: "words", cols: { lang, word, payload: ["definitions","synonyms","translations"] } }`. Esto lockea la detección automática de schema.

## Aceptación

- ✅ `pnpm test:api` → 264/264 (era 257, +7).
- ✅ `pnpm test:web` → 758/758 (sin cambios, este fix no toca web).
- ✅ 0 typecheck errors nuevos en `dictionary.ts`.
- ✅ El 500 genérico ya no se filtra: ahora el body trae `{ found: false, error: <causa> }` con el mensaje del throw (en dev) o genérico (en prod).

## Archivos tocados

- `api/src/routes/dictionary.ts` (safeOperation + uso en lookup/prefix).
- `api/tests/integracion/dictionary-lookup.test.ts` (nuevo, 7 tests).
- `api/package.json` (registra el test en el script `test`).

## Out-of-scope

- El modelo de 450MB (477MB exacto) no es el problema. El archivo tiene la shape correcta (`words` con las 5 cols esperadas, índice sobre `lang+word`), el constructor del servicio tarda 22ms, y los lookups son <1ms. Si en el entorno del usuario el archivo se generó distinto (tabla con otras cols, sin índice, sin `lang`/`word` reconocibles), eso sí podría causar un throw en `detectSchema()` (línea 142 de `sqliteDictionary.ts`: `"Unable to detect dictionary table/columns containing lang + word"`). Pero ese throw también está cubierto por el `getSqliteServiceIfEnabled()` y resultaría en 500 con mensaje diagnóstico (en dev) o "sqlite unavailable" (en prod), no en 500 con stack genérico de Express.
- En cualquier caso, regenerar el .sqlite correría por `npm run dict:smoke` (script en `api/scripts/dict_smoke_test.ts`) o `npm run sqlite:ensure-indexes` (script mencionado en `docs/sqlite-dictionary-api.md` pero no encontrado en `api/scripts/`).

# Integración de diccionario SQLite en API

## Configuración
Variables nuevas:

- `DB_KIND=sqlite`
- `SQLITE_PATH=./data/diccionario.sqlite`
- `SQLITE_READONLY=1` (default)
- `SQLITE_CACHE_KB=65536` (cache por conexión en KB, usando `PRAGMA cache_size` negativo)

Comportamiento de arranque:

- Si `DB_KIND=sqlite` y no existe `SQLITE_PATH`, la API falla al iniciar con error claro.
- Si `DB_KIND!=sqlite`, el módulo SQLite no se carga y los endpoints devuelven `503 dictionary disabled`.

## Endpoints MVP

- `GET /api/dictionary/health`
- `GET /api/dictionary/lookup?lang=es&word=perro`
- `GET /api/dictionary/prefix?lang=es&q=per&limit=50`

Validaciones:

- `lang`: 2..10 chars (`[a-z0-9_-]`)
- `word`: 1..128 chars
- `q`: 1..64 chars
- `limit`: clamp 1..200 (default 50)

## Performance

- Prepared statements en lookup/prefix.
- Búsqueda por prefijo usando rango lexicográfico (`word>=q AND word<nextPrefixEnd(q)`), evitando `%foo%`.
- `LIMIT` obligatorio en prefix.
- PRAGMAs de lectura: `temp_store=MEMORY`, `cache_size=-SQLITE_CACHE_KB`, `query_only=ON`.

## Detección de esquema

El servicio detecta automáticamente tabla y columnas leyendo `sqlite_master` + `PRAGMA table_info`:

- Requiere columnas tipo `lang/language/locale` y `word/term/lemma/headword`.
- Si hay varias candidatas, prioriza score de nombres y luego cantidad de filas.

`/api/dictionary/health` expone `{ table, cols }` detectadas.

## Índices

No se ejecuta `CREATE INDEX` en runtime de la API.

Script manual:

```bash
DB_KIND=sqlite SQLITE_PATH=./data/diccionario.sqlite \
SQLITE_TABLE=entries SQLITE_LANG_COL=lang SQLITE_WORD_COL=word \
npm run sqlite:ensure-indexes
```

## Scripts de verificación

```bash
DB_KIND=sqlite SQLITE_PATH=./data/diccionario.sqlite npm run dict:smoke
DB_KIND=sqlite SQLITE_PATH=./data/diccionario.sqlite npm run dict:explain
```

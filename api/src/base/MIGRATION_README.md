# Migración MongoDB → SQLite

## Instalación de dependencias

```bash
npm install mongodb better-sqlite3 dotenv
npm install -D @types/better-sqlite3 @types/node ts-node typescript
```

## Scripts a agregar en `api/package.json`

```json
{
  "scripts": {
    "db:sqlite:init": "ts-node src/scripts/sqlite_init.ts",
    "db:migrate:mongo_to_sqlite": "ts-node src/scripts/migrate_mongo_to_sqlite.ts",
    "db:migrate:mongo_to_sqlite:fresh": "ts-node src/scripts/migrate_mongo_to_sqlite.ts --fresh"
  }
}
```

## Variables de entorno (`.env`)

```env
MONGO_URI=mongodb://localhost:27017/educational_platform
SQLITE_PATH=./data/core.db
```

## Uso

```bash
# 1. Crear/actualizar schema (idempotente)
npm run db:sqlite:init

# 2. Migrar datos desde MongoDB (upsert - idempotente)
npm run db:migrate:mongo_to_sqlite

# 3. Migración limpia (borra y recrea la DB)
npm run db:migrate:mongo_to_sqlite:fresh
```

## Archivos generados

| Archivo | Descripción |
|---|---|
| `src/db/core_schema.sql` | DDL SQLite — tablas, índices, FK, `user_version=1` |
| `src/scripts/sqlite_init.ts` | Crea DB y aplica schema (sin datos) |
| `src/scripts/migrate_mongo_to_sqlite.ts` | ETL completo Mongo → SQLite |

## Tablas SQLite

| Tabla SQLite | Origen Mongo |
|---|---|
| `escuelas` | `escuelas` |
| `usuarios` | `usuarios` |
| `membresias` | `membresias_escuela` |
| `clases` | `clases` |
| `clase_miembros` | `clases.teacherIds / adminIds / studentIds` |
| `clase_modulos` | `clases.modules[]` |
| `clase_publicaciones` | `clases.publications[]` |
| `conversaciones` | `mensajes` (entidad padre) |
| `mensajes_items` | `mensajes.messages[]` |
| `transferencias` | `transferencias` |
| `economia_config` | `economia_config` |
| `saldos_usuario` | `billeteras` + `economia_saldos` (fusión) |
| `ledger_movimientos` | `movimientos_billetera` + `economia_transacciones` (fusión) |
| `economia_recompensas` | `economia_recompensas` |
| `economia_modulos` | `economia_modulos` |
| `economia_eventos` | `economia_eventos` |
| `economia_riesgo_cursos` | `economia_riesgo_cursos` |

## Decisiones de diseño

- **IDs**: `TEXT` 24 chars (hex de ObjectId). Nunca se generan IDs nuevos para entidades con `_id` de Mongo.
- **IDs derivados** (publicaciones, mensajes_items): `sha1(campos relevantes).slice(0,24)` — determinista, idempotente.
- **Fechas**: ISO 8601 UTC como `TEXT`.
- **Arrays**: normalizados a tablas hijas, nunca como JSON (excepto `links_json` en publicaciones y `json` en economia_config que es config compleja).
- **Dangling references**: se loguean como `[DANGLING]` y se saltan sin abortar.
- **Idempotencia**: `INSERT OR REPLACE` / `INSERT OR IGNORE` en todos los pasos.
- **FK durante carga**: `PRAGMA foreign_keys = OFF` durante la migración (para permitir orden flexible); se activa al final para verificación con `PRAGMA foreign_key_check`.
- **NO migrado**: `cursos` (feature no activado según spec).

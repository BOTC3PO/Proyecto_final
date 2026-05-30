# Migraciones y seed — Backend

| | |
|---|---|
| **Versión** | 1.0 |
| **Estado** | Vigente |
| **Audiencia** | Backend, DevOps |
| **Última actualización** | 2026-05-30 |
| **Fuente de verdad** | `api/prisma/migrations/`, `api/prisma/seed.ts`, `api/package.json` |

## Conceptos

El esquema se gestiona con **Prisma Migrate** sobre **PostgreSQL** (`migration_lock.toml` →
`provider = "postgresql"`). Las migraciones son SQL versionado en
`api/prisma/migrations/<timestamp>_<nombre>/migration.sql` y se aplican en orden cronológico.

## Flujo de trabajo

Scripts reales (`api/package.json`), ejecutables con `pnpm --filter api <script>`:

| Comando | Acción |
|---|---|
| `pnpm --filter api db:generate` | `prisma generate` — genera el cliente Prisma. |
| `pnpm --filter api exec prisma migrate dev` | Crea/aplica migraciones en desarrollo (y dispara el seed). |
| `pnpm --filter api db:migrate` | `prisma migrate deploy` — aplica migraciones pendientes (entornos no-dev). |
| `pnpm --filter api db:push` | `prisma db push` — sincroniza el schema sin crear migración (prototipado). |
| `pnpm --filter api db:studio` | `prisma studio` — explorador visual. |
| `pnpm --filter api db:seed` / `seed:demo` | Ejecuta el seed (`scripts/seed_demo.ts`). |
| `pnpm --filter api db:init` | Inicializa estructura base (`scripts/init_db.ts`). |

### Seed

`api/prisma/seed.ts` es el orquestador que Prisma ejecuta en `prisma migrate reset` y
`prisma db seed` (declarado en `package.json` → `prisma.seed`). Corre en tres pasos:

1. **`runInitDb`** (`scripts/init_db.ts`) — estructura base: escuela + usuarios.
2. **`runSeedDemo`** (`scripts/seed_demo.ts`) — datos de demostración: módulos, quizzes, etc.
3. **`seedTienda`** (`scripts/seed_tienda.ts`) — ítems de tienda.

> En el arranque del servidor (`api/src/index.ts`) se ejecutan chequeos no-bloqueantes: avisan por
> consola si la DB no tiene usuarios o no hay ningún ADMIN activo (`runStartupDataChecks`).

## Historial de migraciones

Cinco migraciones, en orden:

### 1. `20260520171543_init`

Migración inicial (~1250 líneas). Crea todo el esquema base: `escuelas`, `usuarios`, `membresias`,
`clases` y derivadas, módulos/teoría/libros, quizzes y attempts, economía, governance, mensajería,
encuestas, sync, etc., con sus índices y claves foráneas. Es el punto de partida del modelo
documentado en [`modelo-de-datos.md`](./modelo-de-datos.md).

### 2. `20260521034216_modulo_opcional`

Agrega cuatro columnas opcionales a `modulos`: `category`, `duration_minutes`, `level`, `subject`.
(Metadatos pedagógicos experimentales del módulo.)

### 3. `20260522172905_add_vblang_models`

Introduce el subsistema **VBLang de plantillas**: agrega `plantilla_id` a `quiz_versions` y crea las
tablas `plantillas_ejercicio` y `plantillas_ejercicio_versiones` (con sus índices y FKs). Habilita
plantillas de ejercicio paramétricas vinculables a versiones de quiz.

### 4. `20260523184108_vblang_models`

**Revierte** las cuatro columnas agregadas en la migración 2 (`category`, `duration_minutes`,
`level`, `subject` se eliminan de `modulos`). Los metadatos experimentales se descartaron en favor
del enfoque basado en plantillas/datasets VBLang. (La cabecera del SQL lista explícitamente la
pérdida de datos de esas columnas.)

> Nota: las tablas `vblang_datasets` y `vblang_dataset_filas` del modelo actual provienen del
> esquema VBLang; el nombre de esta migración alude al mismo subsistema, pero su efecto concreto es
> el drop de columnas de `modulos`. Confirmar el detalle completo en el SQL si se necesita el
> alcance exacto: `api/prisma/migrations/20260523184108_vblang_models/migration.sql`.

### 5. `20260529000000_comision_escuela`

**Fase 5.1 — modelo de comisión por escuela.** Agrega a `escuelas` las columnas `modo_gestion`
(default `'centralizado'`) y `comision_pct`, y crea dos tablas nuevas con índice por `escuela_id` y
FK a `escuelas`:

- `transacciones_escuela` — cobros de escuelas autogestionadas (`monto_total`, `comision_vb`,
  `monto_neto`, `estado` default `'registrada'`, `mp_payment_id`).
- `liquidaciones_escuela` — liquidaciones periódicas (`periodo`, `monto_liquidado`,
  `cant_transacc`, `metodo`).

Soporta el flujo de comisiones documentado en [`../pagos/`](../pagos/).

## Archivos fuente documentados

- `api/prisma/migrations/20260520171543_init/migration.sql`
- `api/prisma/migrations/20260521034216_modulo_opcional/migration.sql`
- `api/prisma/migrations/20260522172905_add_vblang_models/migration.sql`
- `api/prisma/migrations/20260523184108_vblang_models/migration.sql`
- `api/prisma/migrations/20260529000000_comision_escuela/migration.sql`
- `api/prisma/migrations/migration_lock.toml`
- `api/prisma/seed.ts` y `api/package.json` (scripts `db:*`).

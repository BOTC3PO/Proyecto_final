# Migraciones y seed — Backend

| | |
|---|---|
| **Versión** | 1.1 |
| **Estado** | Vigente |
| **Audiencia** | Backend, DevOps |
| **Última actualización** | 2026-07-18 — fusión con `documentacion V2/docs/`: narradas las 25 migraciones posteriores a la 1.0 (de `20260617000000_calendario_escuela_aula_id` a `20260714000000_drop_governance`, la única destructiva del historial). |
| **Fuente de verdad** | `api/prisma/migrations/` (**30 migraciones**), `api/prisma/seed.ts`, `api/package.json` |

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

**30 migraciones en total.** Las primeras cinco (mayo 2026) están narradas en detalle abajo
(versión 1.0 de este documento); las 25 restantes (junio-julio 2026) se resumen en la tabla que
sigue — más compactas porque en su mayoría son aditivas de una sola tabla/columna, salvo donde se
indica lo contrario.

### 1. `20260520171543_init`

Migración inicial (~1250 líneas). Crea todo el esquema base: `escuelas`, `usuarios`, `membresias`,
`clases` y derivadas, módulos/teoría/libros, quizzes y attempts, economía, governance (`proposals`/
`votes` — **dropeadas en la migración #30**, ver abajo), mensajería, encuestas, sync, etc., con sus
índices y claves foráneas. Es el punto de partida del modelo documentado en
[`modelo-de-datos.md`](./modelo-de-datos.md).

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

### 6-15. Módulo y seguridad (junio 2026)

| # | Migración | Qué hizo |
|---|---|---|
| 6 | `20260617000000_calendario_escuela_aula_id` | `CalendarioEscuela.aulaId` nullable — un evento pasa de ser siempre global a poder acotarse a **un** aula (decisión: global-o-un-aula, no M:N). |
| 7 | `20260617010000_modulo_subject` | Agrega `Modulo.subject` (materia). Nullable aditiva. |
| 8 | `20260617020000_modulo_theory_items` | Agrega `Modulo.theoryItems` (JSON de teoría embebida). Nullable aditiva. |
| 9 | `20260617030000_sec_libro_ownership` | Agrega ownership/visibilidad a `Libro` (`ownerUserId`, `visibility`, `schoolId`) — SEC-LIBRO: sin dueño, sólo ADMIN edita. |
| 10 | `20260617040000_modulo_level` | Agrega `Modulo.level` (nivel educativo). Nullable aditiva. |
| 11 | `20260617050000_multirol_usuario_roles` | **Multirol.** Agrega `Usuario.roles String[]` con backfill `roles = [role]` para todas las filas existentes. `role` (singular) se mantiene como columna espejo. Ver [`auth-y-roles.md#21-multirol`](./auth-y-roles.md#21-multirol-🆕-apisrclibrolests-multirol-01). |
| 12 | `20260618000000_modulo_category_duration` | Agrega `Modulo.category` y `durationMinutes`. Nullable aditivas. |
| 13 | `20260619000000_cuenta_espejo_vinculada` | Crea **`CuentaVinculada`** (puente simétrico) + `Usuario.tipoCuenta`. Base de las cuentas espejo staff↔alumno. |
| 14 | `20260620000000_modulo_scoring_config` | Agrega `Modulo.scoringConfig` (JSON: escala de notas por módulo, WO-3). Fallback histórico (scale-0-100) si es `null`. |
| 15 | `20260623022846_wo13_provenance` | Agrega columnas de procedencia de copia (`clonedFromId`, `clonedFromTitle`, `clonedFromOwnerUserId`) a `Modulo` y `Libro` (WO-13). |

### 16-30. Cobros reales y aula completa (julio 2026)

| # | Migración | Qué hizo |
|---|---|---|
| 16 | `20260703120000_add_asistencia` | Crea **`Asistencia`** (`@@unique([claseId, alumnoId, fecha])`). Antes `GET /api/profesor/asistencia` devolvía `[]` hardcodeado. |
| 17 | `20260703130000_add_cobros_escuela` | Crea **`CobroEscuela`** y **`CuotaAlumno`** — núcleo del pivot de negocio a comisiones (PLAN-B Fase 2). |
| 18 | `20260703140000_escuela_saldo_inicial_alumno` | Agrega `Escuela.saldoInicialAlumno` (`@default(50)`), backfileado a 50 para las escuelas existentes. |
| 19 | `20260703150000_add_escuela_pasarela` | Crea **`EscuelaPasarela`** (MP/Stripe/Cryptomus por escuela, PLAN-B Fase 3). |
| 20 | `20260703160000_fase4_conciliacion` | Agrega `TransaccionEscuela.provider` y el campo `tipo` de `LiquidacionEscuela` (manual vs. split nativo) — conciliación multi-pasarela. |
| 21 | `20260703170000_escuela_branding` | Agrega `Escuela.branding` (JSON: logo/ícono/colores por escuela, PLAN-C §4). |
| 22 | `20260703180000_quiz_standalone` | `Quiz.moduleId` pasa a nullable + agrega `ownerUserId` — un quiz puede existir "suelto" sin módulo (PLAN-CORRECCIONES C2). |
| 23 | `20260704000000_material_versionado` | Crea **`Material`** y **`MaterialVersion`** (patrón padre+versión, PLAN-G §1) para mapas/timelines/interactivos/presentaciones guardados. |
| 24 | `20260706000000_dataset_source_url` | Agrega `VblangDataset.sourceUrl` (refresco manual desde URL externa CSV/JSON, PLAN-E §20). |
| 25 | `20260706010000_banco_formulas` | Crea **`Formula`** (banco compartido nombre+LaTeX+materia, PLAN-E §19). |
| 26 | `20260709020000_push_tokens` | Crea **`PushToken`** (Expo, PLAN-R Parte 5). `@@unique` sobre el token, no sobre `userId`. |
| 27 | `20260709030000_vinculo_padre_hijo_unique` | Agrega `@@unique([parentId, childId])` a `ProgresoModuloVinculo`. |
| 28 | `20260709040000_clase_periodos` | Crea **`ClasePeriodo`** (períodos académicos libres por aula, PLAN-V §1) — insumo directo del boletín. |
| 29 | `20260712000000_modulo_descatalogado` | Agrega `Modulo.descatalogado` (bool) + crea **`ModuloInvitacion`** — ocultar un módulo de listados sin borrarlo ni afectar a alumnos ya invitados (PLAN-X §7). |
| 30 | `20260714000000_drop_governance` | ⚠️ **Única migración destructiva del historial.** `DROP TABLE proposals, votes`. Retiro completo y deliberado del sistema de gobernanza por votación (decisión del usuario, 2026-07-14) — los datos se descartaron a propósito junto con el feature, no es una pérdida accidental. |

## Archivos fuente documentados

- `api/prisma/migrations/20260520171543_init/migration.sql`
- `api/prisma/migrations/20260521034216_modulo_opcional/migration.sql`
- `api/prisma/migrations/20260522172905_add_vblang_models/migration.sql`
- `api/prisma/migrations/20260523184108_vblang_models/migration.sql`
- `api/prisma/migrations/20260529000000_comision_escuela/migration.sql`
- `api/prisma/migrations/2026061{7,8,9}*/migration.sql`, `2026062{0,3}*/migration.sql` — módulo y seguridad (#6-15).
- `api/prisma/migrations/202607*/migration.sql` — cobros y aula completa (#16-30).
- `api/prisma/migrations/migration_lock.toml`
- `api/prisma/seed.ts` y `api/package.json` (scripts `db:*`).

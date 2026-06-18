# DIAG-MIGRACIONES-PENDIENTES — Columnas faltantes en DB (más allá del `level`)

**Fecha**: 2026-06-17
**Origen**: error en aula del lado del profesor (`GET /api/modulos?aulaId=...`):
```
Invalid `prisma.modulo.findMany()` invocation in /home/javier/Proyecto_final/api/src/routes/modulos.ts:158:27
The column `modulos.level` does not exist in the current database
```
**Alcance**: este documento describe el **estado de las migraciones** de
Prisma, identifica **qué columnas faltan** en la base de datos real
(postgres) y por qué los **3 tests anteriores no detectaron el problema**.

---

## TL;DR

- **Causa raíz**: la base de datos real tiene aplicadas las migraciones
  hasta `20260529000000_comision_escuela`. Las **5 migraciones nuevas**
  (todas con timestamp `20260617…`) **no están aplicadas**.
- **Síntoma visible**: el GET de la lista de módulos del aula tira 500
  con "column `modulos.level` does not exist" en
  `api/src/routes/modulos.ts:158`.
- **Por qué los 3 tests anteriores pasaron**: el helper de tests
  (`api/tests/integracion/_helpers/in-memory-prisma.ts:583-666`) usa un
  Prisma en memoria que **no valida la existencia de columnas en la DB
  real** — acepta y devuelve cualquier campo. Los tests verifican la
  lógica del código, no el estado del schema.
- **Fix inmediato**: `cd api && npx prisma migrate deploy` (aplica las
  5 migraciones pendientes).
- **Bugs colaterales que SÍ se van a disparar al aplicar las 5
  migraciones** (no son bugs nuevos del fix, son *gotchas* del estado
  histórico del schema que conviene revisar):
  1. `modulos.subject` también falta → mismo tipo de 500 en cualquier
     ruta que liste módulos.
  2. `modulos.theory_items` también falta.
  3. `libros.owner_user_id` / `libros.visibility` / `libros.school_id`
     faltan → 500 en `/api/libros` (la lista filtrada por permisos de
     SEC-LIBRO).
  4. `calendario_escuela.aula_id` falta → 500 en cualquier
     `prisma.calendarioEscuela.findMany`.
  5. `category` y `duration_minutes` en `modulos` **nunca se
     re-agregaron** desde que se dropearon en
     `20260523184108_vblang_models`. El front los usa (ver
     `useModuloEditor.ts:25, 80`) y el Zod schema los exige
     (`api/src/schema/modulo.ts:209-211`) pero la fila `Modulo` no tiene
     esas columnas. El back los ignora silenciosamente (Zod los
     acepta, modulos.ts no los persiste, GET no los devuelve). **Este
     es un bug pre-existente**, no introducido por las migraciones
     nuevas, pero conviene anotarlo porque confunde al QA.

---

## 1. Inventario de migraciones y su impacto

### 1.1 Estado actual del directorio `api/prisma/migrations/`

```
20260520171543_init                  (init — crea modulos SIN category/duration/level/subject)
20260521034216_modulo_opcional       (ADD COLUMN category, duration_minutes, level, subject)
20260522172905_add_vblang_models      (Crea plantillas_ejercicio + vblang_datasets, etc.)
20260523184108_vblang_models         (DROP COLUMN category, duration_minutes, level, subject)  ← ¡OJO!
20260529000000_comision_escuela      (Comisión, transacciones, liquidaciones)
20260617000000_calendario_escuela_aula_id   (ADD COLUMN aula_id a calendario_escuela)  ← PENDIENTE
20260617010000_modulo_subject              (ADD COLUMN subject a modulos)         ← PENDIENTE
20260617020000_modulo_theory_items         (ADD COLUMN theory_items a modulos)    ← PENDIENTE
20260617030000_sec_libro_ownership         (ADD COLUMN owner_user_id, visibility, school_id a libros)  ← PENDIENTE
20260617040000_modulo_level                (ADD COLUMN level a modulos)          ← PENDIENTE
```

### 1.2 Detalle de la migración trampa: `20260523184108_vblang_models`

`api/prisma/migrations/20260523184108_vblang_models/migration.sql` (líneas 1-14):

```sql
/*
  Warnings:

  - You are about to drop the column `category` on the `modulos` table. All the data in the column will be lost.
  - You are about to drop the column `duration_minutes` on the `modulos` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `modulos` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `modulos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "modulos" DROP COLUMN "category",
DROP COLUMN "duration_minutes",
DROP COLUMN "level",
DROP COLUMN "subject";
```

Esta migración **dropeó** las 4 columnas que `20260521034216_modulo_opcional`
acababa de agregar. Es histórica — pasó en mayo. Las migraciones del
17 de junio (`20260617010000_modulo_subject`,
`20260617040000_modulo_level`) **re-agregan** `subject` y `level` (porque
el front los necesita), pero **nadie re-agregó** `category` ni
`duration_minutes`.

### 1.3 Estado de la DB según lo que el código asume

| Columna en `modulos` | DB real (migrado hasta 20260529) | ¿Schema Prisma la declara? | ¿La usa el front? | ¿La persiste el back? |
|---|---|---|---|---|
| `subject` (TEXT) | ❌ NO existe | ✅ `subject: String? @map("subject")` | ✅ Sí | ✅ Sí (FIX-GUARDADO) |
| `theory_items` (TEXT) | ❌ NO existe | ✅ `theoryItems: String? @map("theory_items")` | ✅ Sí | ✅ Sí (FIX-GUARDADO) |
| `level` (TEXT) | ❌ NO existe | ✅ `level: String? @map("level")` | ✅ Sí | ✅ Sí (FIX-MODULO-CRASH-LEVEL) |
| `category` (TEXT) | ❌ NO existe | ❌ NO está en schema | ✅ Sí | ❌ NO |
| `duration_minutes` (INTEGER) | ❌ NO existe | ❌ NO está en schema | ✅ Sí | ❌ NO |
| `teoria_id` (TEXT) | ✅ existe | ✅ `teoriaId String? @map("teoria_id")` | ❌ (legacy) | ❌ NO |
| `tuesday_doc_id` (TEXT) | ✅ existe | ✅ `tuesdayDocId String? @map("tuesday_doc_id")` | ❌ | ❌ NO |
| `libro_id` (TEXT) | ✅ existe | ✅ `libroId String? @map("libro_id")` | ❌ | ❌ NO |

| Columna en `libros` | DB real | Schema | Back la usa | ¿Falla al llamar? |
|---|---|---|---|---|
| `owner_user_id` | ❌ NO existe | ✅ `ownerUserId String? @map("owner_user_id")` | ✅ Sí (SEC-LIBRO) | ✅ Sí, en cualquier `prisma.libro.findFirst` |
| `visibility` | ❌ NO existe | ✅ `visibility String @default("privado")` | ✅ Sí | ✅ Sí |
| `school_id` | ❌ NO existe | ✅ `schoolId String? @map("school_id")` | ✅ Sí | ✅ Sí |

| Columna en `calendario_escuela` | DB real | Schema | Back la usa | ¿Falla al llamar? |
|---|---|---|---|---|
| `aula_id` (TEXT) | ❌ NO existe | ✅ `aulaId String? @map("aula_id")` | ✅ Sí (FIX-CALENDARIO-B) | ✅ Sí, en `findMany`/`create` |

**Resumen**: TODAS las columnas agregadas por las 5 migraciones
pendientes faltan en la DB. La única que el usuario está viendo
dispararse AHORA es `modulos.level` porque el aula del profesor
(disparador del error) es el primer flujo que toca
`prisma.modulo.findMany` con un `select` que incluye `level`. Apenas se
toque otra ruta que lea `subject`, `theory_items`, etc., se va a
disparar la misma clase de error.

---

## 2. Por qué los 3 tests anteriores NO detectaron el problema

### 2.1 Los 3 tests de "modulo guardado" usan in-memory Prisma

Los 3 tests recientes que verifican la persistencia de
`subject`/`theoryItems`/`level` son:

- `api/tests/integracion/modulo-get-subject.test.ts` (FIX-MODULO-CRASH)
- `api/tests/integracion/modulo-guardado-theory-subject.test.ts` (FIX-GUARDADO)
- `api/tests/integracion/modulo-guardado-level.test.ts` (FIX-MODULO-CRASH-LEVEL)

Los 3 importan el helper de setup:

```ts
import { prisma, resetPrisma, ... } from "./_helpers/setup";
```

`api/tests/integracion/_helpers/setup.ts:20`:

```ts
export const prisma = new InMemoryPrisma();
```

Y `api/tests/integracion/_helpers/in-memory-prisma.ts:583` define la
clase `InMemoryPrisma` que **NO toca la DB real**:

```ts
export class InMemoryPrisma {
  plantillaEjercicio = new Table<PlantillaRow>(...);
  ...
  modulo = new Table<ModuloRow>("modulo");
  ...
  async $transaction<T>(fn: (tx: this) => Promise<T>): Promise<T> {
    // Sequential, no rollback (sufficient for happy/sad path tests).
    return fn(this);
  }
}
```

El `Table<ModuloRow>` (líneas 141-311) es un `Array<Row>` con un
`findMany` que hace `rowMatches(row, where)` (línea 99). **No hay
ningún `SELECT` SQL real, ninguna conexión a Postgres, ninguna
validación de que la columna exista en la DB**.

`ModuloRow` (línea 436) declara `subject`, `theoryItems` y `level` como
campos opcionales (`string | null`), así que el test puede `push` un
row con esos campos y el `findMany` los devuelve. **El test verifica
que la lógica del handler funciona, no que la DB tenga esas columnas**.

### 2.2 Consecuencia: tests verdes ≠ schema aplicado

| Test verifica | Test verifica la DB real |
|---|---|
| Que `POST /api/modulos` con `level: "secundaria"` en el payload llame a `tx.modulo.create({ data: { ..., level } })` | ❌ NO |
| Que el GET subsiguiente incluya `level` en el `moduleDto` | ❌ NO |
| Que un módulo legacy (sin `level` en la fila) devuelva `level: null` | ❌ NO (es un `push` al array en memoria) |
| Que `npx prisma migrate deploy` se haya corrido contra el Postgres real | ❌ NO |

Los tests son válidos para lo que prueban (lógica del back), pero son
**ciegos al estado del schema en la DB real**. Eso es estructural: el
helper de tests es un stub en memoria, no un Prisma contra Postgres.

### 2.3 Implicación para futuras verificaciones

- Los tests son útiles para regresión de la lógica, pero **no pueden
  sustituir** un smoke test E2E contra la DB real.
- Cada vez que se agregue una migración con `ALTER TABLE`, hay que
  **correr `npx prisma migrate deploy`** (o `prisma db push` en dev) y
  verificar con un `psql` o un SELECT crudo que la columna esté.
- Convendría (futuro) agregar un test de integración que use **Postgres
  real** o un schema dedicado para verificar que las migraciones se
  aplican en orden. Por ahora la cobertura es: el comment del fix
  menciona la migración + el in-memory prisma acepta el campo. El gap
  está en la verificación end-to-end del schema.

---

## 3. Síntomas adicionales que se van a disparar (los "más" que mencionaste)

Una vez que se intente usar las features que el código ya consulta en
la DB, van a aparecer errores del mismo tipo. Listo los disparadores
concretos (todos desde el rol TEACHER / aula del profesor, mismo
contexto del bug actual):

### 3.1 `subject` también falta → `/api/modulos` (lista general) 500

Disparador: cualquier GET que liste módulos y los devuelva con
`subject` poblado en el DTO. El handler
`api/src/routes/modulos.ts:103-109` ya devuelve `subject` (vía
`withDefaultStatus` no toca `subject`, pero el back lo consultó y va a
fallaar):

```ts
items = (
  await prisma.modulo.findMany({ where: where as any, ... })
).map(withDefaultStatus);
```

`findMany` sin `select` hace `SELECT *` → Postgres rechaza con
"column `modulos.subject` does not exist" en cuanto se ejecute.

**El usuario todavía no lo vio** porque en el aula del profesor el
flujo que rompe primero es el de la línea 158 (filtrado por `aulaId`),
que arma la query con `id: { in: moduloIds }`. Esa rama corre primero
y rompe con `level` (la última columna que Postgres chequea en el
plan). Apenas se evite esa rama (o se aplique el fix), el siguiente
acceso va a reventar con `subject` o `theory_items`.

### 3.2 `libros` — `GET /api/libros` 500

Disparador: el profesor entra a "Biblioteca" (cualquier ruta que llame
`/api/libros`). El handler
`api/src/routes/libros.ts:332-339` hace:

```ts
const [rows, total] = await Promise.all([
  prisma.libro.findMany({
    where,
    orderBy: { updatedAt: "desc" },
    take: pageSize,
    skip: (page - 1) * pageSize,
  }),
  prisma.libro.count({ where }),
]);
```

Postgres rechaza con "column `libros.owner_user_id` does not exist" (o
`visibility` o `school_id`).

### 3.3 `calendario_escuela` — `GET /api/calendario/escuela` 500

Disparador: el profesor entra a "Calendario" del aula.
`api/src/routes/calendario.ts:76` y `:243` hacen `findMany` sin
`select` → Postgres rechaza con "column `calendario_escuela.aula_id`
does not exist".

### 3.4 `category` y `duration_minutes` — bug pre-existente, no de migraciones nuevas

`category` y `duration_minutes` fueron dropeadas en
`20260523184108_vblang_models` y **nunca** se re-agregaron. La DB real
no las tiene. Sin embargo:

- El front las usa intensivamente
  (`apps/web/src/pages/modulos/ModulosList.tsx:46-47`,
  `MenuProfesor.tsx:158-160`, `ModuloDetail.tsx:522, 588, 612`,
  `ReproductorModulos.tsx:404-410`, etc.).
- El Zod schema las exige como `min(1)` y `int().positive()`
  (`api/src/schema/modulo.ts:209-211`).
- El handler `api/src/routes/modulos.ts:485-615` (POST) y
  `applyModuleUpdate` (líneas 617-772, PUT) **no las persisten** ni
  las devuelve en el GET.

Resultado: el front manda `category` y `durationMinutes` en el payload
del POST, el Zod los valida, pero el handler los **ignora
silenciosamente** (Zod los parsea, modulos.ts no los escribe). El GET
devuelve el módulo sin esos campos → el front muestra `?? "?"` o
fallback ("Sin materia", "Sin categoría"). La UI parece funcionar pero
los datos están vacíos.

**No es un 500** (no es un bug de columna faltante en la DB), es un
**bug silencioso de datos**. Como `category` y `duration_minutes` no
están en el schema Prisma, Prisma **silenciosamente los descarta** al
construir la query SQL. No rompe nada, pero el docente ve la UI
"vacía" sin pista de por qué.

**Para cerrar este bug hay que decidir**:
- **Opción A**: re-agregar las columnas al schema + nueva migración
  (`20260617XXXXXX_modulo_category_duration` aditiva nullable) +
  persistir en POST/PUT + devolver en GET. **Trabajo: ~30 min**.
  Es la opción alineada con el patrón que ya se aplicó para
  `subject`/`level`/`theory_items`.
- **Opción B**: aceptar la realidad de que no se persisten y ajustar
  el front + el Zod para tratar `category`/`durationMinutes` como
  derivados de `subject` (categoría = subject si no hay, duración =
  default 30 min). **Trabajo: ~20 min, pero requiere согласия con UX**.

Recomendación: **A**, porque mantiene paridad con el patrón reciente y
el front ya asume que existen.

### 3.5 `teoriaId` y `libroId` — referenciados pero sin persistencia

`api/src/schema/modulo.ts:202-238` (`ModuleSchema`) **no incluye**
`teoriaId` ni `libroId` (lo verificó
`docs/qa/diagnostico_guardado.md:166-181`). Zod los descarta
silenciosamente. El handler no los persiste. La fila `Modulo` SÍ tiene
las columnas (`teoria_id`, `libro_id` desde el init) pero siempre
quedan en `null`. **No es un bug nuevo**, es el mismo patrón que
`category`/`duration_minutes`/`teoriaId`/`libroId` arrastrado desde el
inicio. Solo lo menciono porque es un "más" del mismo tipo: campos que
el modelo de datos dice tener pero que el código no usa.

---

## 4. Fix inmediato (lo que destraba el aula del profesor)

### 4.1 Aplicar las 5 migraciones pendientes

```bash
cd api
npx prisma migrate deploy
```

Esto corre las migraciones en orden contra el Postgres configurado en
`api/.env` (DATABASE_URL). Cada migración es ADITIVA y NULLABLE, así
que no rompe filas existentes.

Resultado esperado: las 5 columnas agregadas (`modulos.subject`,
`modulos.theory_items`, `modulos.level`, `libros.owner_user_id`,
`libros.visibility`, `libros.school_id`,
`calendario_escuela.aula_id`) existen en la DB. El 500 del aula del
profesor desaparece.

### 4.2 Verificación post-fix (smoke test E2E)

Después del `migrate deploy`, los siguientes endpoints deben dejar de
tirar 500:

```bash
# Antes (500 con "column does not exist"):
curl -sS -b cookies.txt "http://localhost:5050/api/modulos?aulaId=<aulaId-del-profe>"  # GET de la lista
curl -sS -b cookies.txt "http://localhost:5050/api/libros"                              # GET de la biblioteca
curl -sS -b cookies.txt "http://localhost:5050/api/calendario/escuela?escuelaId=<id>"   # GET del calendario

# Después (200 con datos):
# 1. Verificar que la respuesta tenga items[]
# 2. Verificar que cada item de modulo tenga `subject`, `level`, `theoryItems`
# 3. Verificar que cada item de libro tenga `ownerUserId`, `visibility`, `schoolId`
# 4. Verificar que cada item de calendario_escuela tenga `aulaId` (puede ser null)
```

### 4.3 Re-generar el cliente Prisma

`api/prisma/schema.prisma` ya incluye las columnas (subject, level,
theoryItems). El cliente Prisma generado ya las conoce (los tipos están
bien). Pero por las dudas, después de `migrate deploy`:

```bash
cd api
npx prisma generate
```

### 4.4 El fix NO requiere tocar código

- `api/src/routes/modulos.ts:158, 169` (el `prisma.modulo.findMany`) ya
  tiene el código correcto. Solo le falta la columna en la DB.
- `api/src/routes/libros.ts` (filtros de `ownerUserId`/`visibility`/
  `schoolId`) ya tiene el código correcto. Solo le faltan las columnas.
- `api/src/routes/calendario.ts:279-301` (persistir `aulaId`) ya tiene
  el código correcto. Solo le falta la columna.

Es decir: **el código está bien, el schema está bien, las migraciones
están bien. Lo que falta es aplicarlas al Postgres real**.

---

## 5. Tests que ayudarían a no repetir este bug

(Para que las próximas tandas de fixes no se "pase" esto de nuevo.)

### 5.1 Smoke E2E contra Postgres real (nuevo, recomendado)

Agregar un test que:
1. Levante un contenedor Postgres efímero (testcontainers / docker).
2. Corra `prisma migrate deploy` contra ese Postgres.
3. Levante la API contra ese Postgres.
4. Haga los 3 GET de arriba y verifique que devuelven 200 con los
   campos esperados.

Beneficio: detecta migraciones faltantes sin tener que ir a producción
a probarlo. Costo: 1 suite nueva, ~2-4 horas de setup.

### 5.2 Test que verifique `prisma migrate status` post-deploy

Más barato: agregar un script en
`api/scripts/verify_migrations.ts` que corra `prisma migrate status` y
falle si hay migraciones pendientes. Se corre como parte del
`db:health-check` o del CI.

### 5.3 In-memory prisma: simular el "column missing" para casos negativos

Mejorar el helper para que, opcionalmente, lance un error si una
columna "esperada" no está en el row. Útil para testear el camino de
"DB desactualizada" sin necesidad de Postgres real. Costo: 1-2 horas.

---

## 6. Conclusión

- **Causa raíz del bug actual**: las 5 migraciones nuevas
  (`20260617000000` a `20260617040000`) no se aplicaron al Postgres
  real. El primer síntoma visible es
  `modulos.level` porque es la última columna del SELECT que dispara
  el flujo del aula del profesor.
- **Los 3 tests anteriores no lo detectaron** porque usan un
  in-memory Prisma que no valida el schema de la DB. Los tests
  verifican la lógica del código, no el estado del schema en Postgres.
- **Fix**: `cd api && npx prisma migrate deploy` (1 comando, sin
  tocar código).
- **"Más" bugs que se van a disparar** (mismo síntoma, distintas
  columnas): `subject`, `theory_items`, `libros.owner_user_id`,
  `libros.visibility`, `libros.school_id`, `calendario_escuela.aula_id`
  → todos se arreglan con el mismo comando.
- **Bug pre-existente colateral**: `category` y `duration_minutes` no
  existen en la DB ni en el schema, pero el front y el Zod las
  esperan. No es un 500, es un "dato silenciosamente vacío". Cierra
  con una migración + persistencia, análoga a la de `level`.

## Aceptación del diagnóstico

- [x] Identificada la causa del error del aula del profesor.
- [x] Inventariadas TODAS las columnas faltantes (no solo `level`).
- [x] Explicado por qué los 3 tests anteriores no lo detectaron
      (in-memory prisma).
- [x] Listado de síntomas adicionales que se van a disparar.
- [x] Fix concreto (1 comando).
- [x] Recomendación de tests futuros para no repetir el bug.

# F6-04 — Upgrade PARAMETRIZABLE: EconomiaAR a plantillas VBLang oficiales

Convierte los 3 subtipos PARAMETRIZABLE de mayor valor demo de
`apps/web/src/generadoresV2/economia/EconomiaAR.ts` (señalados por
`docs/AUDITORIA_GENERADORES.md`) en plantillas VBLang **oficiales**
(F6-01) con cómputo real, parámetros sorteados y explicación paso a
paso (F2-02/F2-03).

## 1. Subtipos migrados y su lógica original

| Subtipo | Origen (`EconomiaAR.ts`) | Qué hacía antes | Tablas/datos involucrados |
|---|---|---|---|
| `recibo_basico` | `CASOS_RECIBO` (líneas 6-72) | Pool de 5 preguntas conceptuales de opción fija sobre conceptos de un recibo de sueldo (ya migrado a banco estático en F6-02, `economia_ar_recibo_basico`) | — |
| `descuentos_obligatorios` | `CASOS_DESCUENTOS` (líneas 76-105) | Pool de 4 preguntas conceptuales sobre los descuentos obligatorios (banco `economia_ar_descuentos_obligatorios`) | Jubilación 11%, Obra Social 3%, PAMI 3% (total 17%) |
| `monotributo` | `CASOS_MONOTRIBUTO` (líneas 141-190) | Pool de 4 preguntas conceptuales sobre categorías del Monotributo (banco `economia_ar_monotributo`) | Tabla de 5 categorías A-E (límite de facturación anual → cuota mensual) |

Los tres eran "pool disfrazado": preguntas de opción fija sobre un
tema, sin parámetros sorteados ni cómputo verificable. F6-02 ya
extrajo esas preguntas conceptuales a bancos estáticos (siguen
disponibles para quien quiera el enfoque conceptual). F6-04 agrega,
en paralelo, una plantilla VBLang **paramétrica** por subtipo donde
el alumno resuelve un cálculo numérico real:

- **`recibo_basico`**: dado un sueldo básico, años de antigüedad y
  horas extra, calcular el sueldo bruto. Las fórmulas (antigüedad =
  1% del básico por año, hora extra = básico/200 × 1,5) replican las
  que ya usan los subtipos paramétricos vecinos `aportes_17` /
  `neto_desde_bruto` del mismo generador (líneas ~200-280), que
  también parten de un `bruto` en el mismo rango ($60.000-$150.000).
- **`descuentos_obligatorios`**: dado un sueldo bruto, calcular el
  descuento de Jubilación (11%), Obra Social (3%), PAMI (3%) o el
  total de aportes obligatorios (17%) — la misma tabla de alícuotas
  que usa `genAportes17` (`totalAportes = Math.round(bruto * 0.17)`).
- **`monotributo`**: dados los ingresos anuales facturados, determinar
  la categoría aplicable (A-E) y su cuota mensual, según una tabla
  simplificada de límites de facturación.

## 2. Capacidades del DSL: confirmación

Investigación previa a la implementación (sin necesidad de FRENAR):

- **`variables:` con expresiones aritméticas** (`random`, `redondear`,
  `*`, `/`, `+`) — usado por los subtipos paramétricos existentes,
  cubre `recibo_basico` y `descuentos_obligatorios` directamente.
- **`uno_de(array)`** sobre un array de objetos literal —
  `concepto: uno_de([{ nombre: ..., porcentaje: ... }, ...])` — sortea
  el concepto de descuento y expone `concepto.nombre` /
  `concepto.porcentaje` vía field access.
- **Lookup de categoría sin if/else**: VBLang no tiene
  if/else/ternario. El patrón `primero(filtrar(arr, item.campo OP
  valor))` resuelve la búsqueda de la categoría de Monotributo:
  `categoria: primero(filtrar(categorias, item.limite >= ingresos_anuales))`.
  `filtrar` preserva el orden del array (A, B, C, D, E de menor a
  mayor límite) y `primero` devuelve la primera categoría cuyo límite
  cubre los ingresos — exactamente la semántica de "categoría más baja
  que alcanza".
- **`tolerancia_abs:` (F2-04)** y **`explicacion:`/`pasos:`
  (F2-02/F2-03)** — confirmados implementados y testeados
  (`docs/vblang/f2-03-explicacion.md`, `docs/vblang/f2-04-tolerancia-abs.md`).

**Ninguna capacidad faltó** — no aplica la cláusula de "FRENAR y
reportar" del issue.

### Detalle no obvio: `{respuesta}` no es interpolable

`respuesta:` es un bloque separado, no una variable de `variables:` —
no puede referenciarse como `{respuesta}` dentro de `pasos:` /
`explicacion:` (falla con `var-undef` en el linter y en runtime). Para
`recibo_basico`, donde el último paso necesita mostrar el resultado
final, se agregó una variable `sueldo_bruto` (= la suma) y
`respuesta: sueldo_bruto`; los pasos/explicación interpolan
`{sueldo_bruto}`. `descuentos_obligatorios` y `monotributo` ya tenían
una variable (`descuento`, `categoria.cuota`) equivalente a la
respuesta, así que no requirieron este ajuste.

## 3. Decisión: tablas como CONSTANTES, no `dataset:`

Las tablas de alícuotas (`descuentos_obligatorios`) y de categorías
de Monotributo (`monotributo`) se declaran como arrays de objetos
**literales dentro de `variables:`**, no como `dataset: <X>` +
`uno_de(X)`.

Justificación:

1. **F2-01 (`docs/vblang/diagnostico_datasets.md`)** confirmó que
   `dataset: <X>` + `uno_de(X)` solo funciona si `<X>` es un IDENT
   válido (snake_case sin espacios/acentos), y que el fix para
   datasets sembrados con nombres "humanos" (ej. "Capitales de
   América") no fue aplicado. Usar un dataset nuevo heredaría ese
   riesgo o forzaría un nombre de dataset poco descriptivo.
2. Crear un dataset implica sembrarlo en `VblangDataset`/Prisma —
   trabajo de `pnpm test:api`, explícitamente **fuera del alcance**
   de F6-04 (la aceptación es `pnpm --filter ./packages/vblang test`
   + `pnpm test:web`).
3. Las tablas son **chicas** (≤5 filas), **normativas** (alícuotas de
   AFIP, categorías de Monotributo) y de **cambio poco frecuente** —
   el perfil ideal para una constante versionada junto a la plantilla.
4. Declararlas en `variables:` las deja **autocontenidas**: no
   dependen de la DB ni del runtime de datasets, y un docente que
   clone la plantilla puede editar los valores (alícuotas, límites,
   cuotas) como cualquier otra constante del DSL — cumple el
   requisito de "parámetros editables por el docente" sin pasos
   adicionales de seed.

## 4. Las 3 plantillas

Archivo: `packages/vblang/src/templates/economia-ar-oficiales.ts`,
export `ECONOMIA_AR_OFICIALES: PlantillaOficialEconomiaAR[]`.

### `oficial-economia-ar-recibo-basico`

```
basico             = random(6, 15) * 10000        // $60.000 - $150.000, múltiplo de $10.000
anios_antiguedad   = random(1, 15)
horas_extra        = random(0, 8)
adicional_antiguedad = redondear(basico * anios_antiguedad * 0.01, 0)
valor_hora_extra     = redondear(basico / 200 * 1.5, 0)
pago_horas_extra     = horas_extra * valor_hora_extra
sueldo_bruto         = basico + adicional_antiguedad + pago_horas_extra
respuesta            = sueldo_bruto
```

`tolerancia_abs: 1` (margen de redondeo). `pasos:` desglosa cada
componente; `explicacion:` resume la fórmula completa.

### `oficial-economia-ar-descuentos-obligatorios`

```
bruto    = random(60, 150) * 1000                 // $60.000 - $150.000, múltiplo de $1.000
concepto = uno_de([
  { nombre: "Jubilación", porcentaje: 11 },
  { nombre: "Obra Social", porcentaje: 3 },
  { nombre: "PAMI", porcentaje: 3 },
  { nombre: "el total de aportes obligatorios", porcentaje: 17 },
])
descuento = redondear(bruto * concepto.porcentaje / 100, 0)
respuesta = descuento
```

El enunciado pregunta por el descuento del `concepto` sorteado;
`pasos:`/`explicacion:` interpolan `{concepto.nombre}` y
`{concepto.porcentaje}`.

### `oficial-economia-ar-monotributo`

```
categorias = [
  { nombre: "A", limite:  6000000, cuota: 30000 },
  { nombre: "B", limite:  9000000, cuota: 35000 },
  { nombre: "C", limite: 12000000, cuota: 45000 },
  { nombre: "D", limite: 15000000, cuota: 58000 },
  { nombre: "E", limite: 18000000, cuota: 73000 },
]
ingresos_anuales = random(40, 180) * 100000        // $4.000.000 - $18.000.000
categoria = primero(filtrar(categorias, item.limite >= ingresos_anuales))
respuesta = categoria.cuota
```

El rango de `ingresos_anuales` (hasta $18.000.000) coincide con el
límite de la categoría E, por lo que `filtrar(...)` siempre encuentra
al menos una categoría — `primero(...)` nunca recibe un array vacío.

## 5. Tests

`packages/vblang/tests/templates/economia-ar-oficiales.test.ts`:

- Pipeline completo `parse → lint → compile → validate({iterations:
  100})` sin errores para cada una de las 3 plantillas (`report.pass
  === true`, `passedSimulations === 100`).
- **Paridad de cálculo** (recalculado de forma independiente en el
  test, sin depender del runtime VBLang):
  - `recibo_basico`: `sueldo_bruto = basico + redondear(basico *
    anios_antiguedad * 0.01) + horas_extra * redondear(basico / 200 *
    1.5)`, verificado en 5 seeds.
  - `descuentos_obligatorios`: `descuento = redondear(bruto *
    concepto.porcentaje / 100)` para los 4 conceptos posibles
    (11/3/3/17%), verificado en 8 seeds; además se chequea que
    11+3+3 = 17 (paridad con la fórmula `genAportes17` de
    `EconomiaAR.ts`).
  - `monotributo`: la `categoria` resuelta coincide con "la primera
    categoría A-E cuyo límite ≥ ingresos", verificado en 10 seeds; y
    que `ingresos_anuales` (múltiplo de $100.000 entre $4M y $18M)
    siempre cae dentro de alguna categoría.
- Rango/forma de los parámetros sorteados (múltiplos correctos, límites
  correctos).
- `explicacion:`/`pasos:` materializados con los valores generados.
- Adapter `toModuleQuizQuestion`: `questionType === "input"`,
  `unidades.resultado === "$"`, `toleranciaAbsoluta === 1`,
  `explanation` presente (proviene de `explicacion:`, F2-03) y
  `answerKey` coincide con `String(respuesta)`.

### Resultados

- `pnpm --filter ./packages/vblang test` → **719/719** (era 704 antes
  de F6-04 + 15 tests nuevos). 0 fallidos, 0 regresiones.
- `pnpm test:web` → **716/716**, sin regresiones (F6-04 es aditivo en
  `packages/vblang`, no toca `apps/web`).

## 6. Exports

`packages/vblang/src/index.ts` re-exporta `ECONOMIA_AR_OFICIALES` y el
tipo `PlantillaOficialEconomiaAR` para que `apps/web` (o un futuro
script de seed) pueda consumir las plantillas.

## 7. Lo que F6-04 no cubre

- **Seed en DB como `PlantillaEjercicio`** (F6-01: `ownerUserId =
  SYSTEM_OWNER_ID`, `visibility: "publica"`, `publicAprobado: true`).
  `ECONOMIA_AR_OFICIALES` deja `id`/`nombre`/`descripcion`/`tags`/
  `materia` listos para ese seed, pero no hay script de seed en F6-04
  (no está en la aceptación: `pnpm test:api` no corre).
- **Borrado de `EconomiaAR.ts`** ni de sus bancos estáticos (F6-02).
  Los pools conceptuales conviven con las nuevas plantillas
  paramétricas; el borrado de los `.ts` originales es F6-06.

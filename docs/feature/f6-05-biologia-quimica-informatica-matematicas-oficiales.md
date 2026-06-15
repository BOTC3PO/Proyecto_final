# F6-05 — Upgrade PARAMETRIZABLE: mendel, booleana, química, etc.

Convierte los 6 subtipos PARAMETRIZABLE restantes señalados por
`docs/AUDITORIA_GENERADORES.md` (biología, química, informática,
matemáticas) en plantillas VBLang **oficiales** (F6-01) con cómputo
real, parámetros sorteados y explicación paso a paso (F2-02/F2-03).
Mismo enfoque que F6-04 (EconomiaAR), aplicado a 4 generadores nuevos.

## 1. Subtipos migrados y su lógica original

| Subtipo | Origen | Qué hacía antes | Nota del audit |
|---|---|---|---|
| `genetica_mendel` | `Biologia.ts` (`CRUCES`) | Pool de cruces con proporciones precalculadas (`FRACCIONES`) | "cuadros de Punnett son computables — upgrade muy lindo pedagógicamente" |
| `piramide_biomasas` | `Biologia.ts` (`genPiramideBiomasas`) | 3 ramas de dificultad con multiplicación/división fija por 10 | "regla del 10% con valores sorteados" |
| `algebra_booleana` | `Informatica.ts` (`genAlgebraBooleana`) | Pool de reglas de simplificación (REGLAS_BASICO/INTERMEDIO/AVANZADO) con opciones fijas | "generar expresiones booleanas y evaluarlas es exactamente lo que un generador debería hacer" |
| `particulas_subatomicas` | `AtomosEnlaces.ts` (`genParticulasSubatomicas`) | Pool MC sobre p/n/e de `ELEMENTOS` | "p/n/e desde Z y A es resta" |
| `configuracion_electronica` | `AtomosEnlaces.ts` (`genConfigElectronica`) | Aufbau con distractores fijos, `.slice(0,3)` sin barajar | "computable desde Z con Aufbau" + bug: siempre los mismos 3 distractores |
| `probabilidad_simple` | `Aritmetica.ts` (`genProbabilidadSimple`) | Pool de experimentos con fracción precalculada (`mcd`) | "sortear el experimento y computar la probabilidad — raro que esté como pool" |

## 2. Investigación de capacidades del DSL: ningún FRENAR

El issue pedía **STOP y reportar** si algún subtipo requería
capacidades que el DSL no tiene (p.ej. cuadros de Punnett con un motor
combinatorio general). Tras explorar el parser/evaluator/linter, **los
6 subtipos son factibles con el DSL actual + F2** — no aplica la
cláusula de FRENAR.

Capacidades clave confirmadas (algunas no documentadas hasta ahora):

- **Indexado dinámico de objetos `obj[clave_calculada]`**: en runtime
  (`evaluator.ts`, caso `"index"`) un objeto indexado con una
  expresión devuelve `(target as Record<string,unknown>)[String(key)]`.
  En el linter (`infer.ts`, caso `"index"`), si el tipo del target es
  `object`, el resultado se tipa como `unknown` **sin reportar error**.
  Esto resuelve, sin if/else, el patrón "elegir uno de varios campos
  precalculados según una clave sorteada":
  - `genetica_mendel`: `cruce[aspecto.clave]` (proporción según el
    aspecto preguntado: dominante/recesivo/AA/Aa/aa).
  - `particulas_subatomicas`: `el[particula.clave]` (proton/neutron/electron
    según la partícula preguntada).
- **`tipo: input` acepta `respuesta` de tipo string** (p.ej. `"3/4"`):
  el chequeo `respuesta-tipo` solo exige numérico para `mc` sin
  `opciones_explicitas` y booleano para `vf`; `input` no tiene esa
  restricción. Esto permite que `genetica_mendel` responda
  proporciones como `"1/4"`, `"1/2"`, etc., tal como las anota
  `Biologia.ts` (`FRACCIONES`).
- **Operadores lógicos `y`/`o`/`no` y literales `verdadero`/`falso`**:
  funcionan con expresiones arbitrarias; `!=` actúa como XOR entre
  booleanos. Un array literal `[{ texto: "...", valor: (a y b) o c },
  ...]` infiere el tipo de elemento `{ texto: string, valor: boolean
  }`, por lo que `uno_de(...)` + `.valor` produce `boolean`,
  satisfaciendo `vf-requires-boolean` para `algebra_booleana`.
- **`^` (potencia) y `%` (módulo)** operan correctamente con operandos
  variables; `10 ^ niveles_descenso` da enteros exactos para los
  exponentes chicos usados en `piramide_biomasas`.
- **`filtrar`/`primero`** (ya usados en F6-04 para `monotributo`):
  resuelven el lookup de Aufbau de `configuracion_electronica`
  (`primero(filtrar(niveles, item.hasta >= z))`), igual que el lookup
  de categoría de Monotributo.

### Gap encontrado (no bloqueante): sin `mcd`/GCD

VBLang no tiene un builtin de máximo común divisor para simplificar
fracciones. `genProbabilidadSimple` original simplificaba
`favorables/total` con `mcd`. En vez de forzar una implementación de
GCD vía recursión (no soportada — VBLang no tiene funciones
definidas por el usuario), `probabilidad_simple` expresa la respuesta
como **cociente decimal** `redondear(favorables/total, 4)` con
`tolerancia_abs: 0.0001` — sigue siendo un cómputo real y verificable,
solo que en formato decimal. No es un FRENAR: el subtipo es
plenamente parametrizable, solo cambia el formato de la respuesta.

## 3. Las 6 plantillas

### `oficial-biologia-genetica-mendel` (`biologia-oficiales.ts`)

Tabla `cruces` con las **6 combinaciones posibles** de cruces
monohíbridos (AA×AA, AA×Aa, AA×aa, Aa×Aa, Aa×aa, aa×aa), cada una con
las proporciones resultantes de genotipos (AA/Aa/aa) y fenotipos
(dominante/recesivo) — resultados de un cuadro de Punnett, fijos y
verificables (no arbitrarios). Tabla `aspectos` con 5 opciones
(dominante, recesivo, AA, Aa, aa). Se sortean **ambos** (`cruce` y
`aspecto`): 30 combinaciones posibles.

```
cruce     = uno_de(cruces)
aspecto   = uno_de(aspectos)
resultado = cruce[aspecto.clave]
respuesta = resultado
```

`tipo: input`, `respuesta` es un string ("0", "1/4", "1/2", "3/4", "1").

### `oficial-biologia-piramide-biomasas` (`biologia-oficiales.ts`)

```
niveles_descenso = random(1, 3)
base             = random(1, 500)
productor        = base * 10 ^ niveles_descenso
consumidor       = productor / 10 ^ niveles_descenso   // == base
respuesta        = consumidor
```

Aplica la regla del 10% de forma genuina: `consumidor` se recalcula
desde `productor` dividiendo por `10^niveles_descenso`, no se reutiliza
`base` directamente. `nivel_nombre` (consumidores primarios/secundarios/
terciarios) se indexa con `nombres_niveles[niveles_descenso - 1]`.
`unidad: "kg"`, `tolerancia_abs: 0.01`.

### `oficial-informatica-algebra-booleana` (`informatica-oficiales.ts`)

```
a, b, c = uno_de([verdadero, falso])  // 3 sorteos independientes
expresiones = [
  { texto: "(A Y B) O C",        valor: (a y b) o c },
  { texto: "(A O B) Y (NO C)",    valor: (a o b) y (no c) },
  { texto: "A Y (B O C)",         valor: a y (b o c) },
  { texto: "NO (A Y B)",          valor: no (a y b) },
  { texto: "A distinto de B (XOR)", valor: a != b },
  { texto: "(NO A) O (NO B)",     valor: (no a) o (no b) },
]
expr = uno_de(expresiones)
respuesta = expr.valor
```

`tipo: vf` — el linter infiere `expr.valor: boolean` del array literal,
satisfaciendo `vf-requires-boolean`. 3×6 = 18 combinaciones posibles de
(A,B,C,expresión).

### `oficial-quimica-particulas-subatomicas` (`quimica-oficiales.ts`)

Tabla `elementos` con 11 elementos (H, He, Li, C, N, O, Na, Mg, Cl, Ca,
Fe — subconjunto de `ELEMENTOS` de `AtomosEnlaces.ts`) con
proton/neutron/electron. Tabla `particulas` (protones/neutrones/electrones).

```
el        = uno_de(elementos)
particula = uno_de(particulas)
masa      = el.proton + el.neutron       // A, calculado
resultado = el[particula.clave]
respuesta = resultado
```

El enunciado da Z y A (calculado, A = p+n) y pregunta por
protones/neutrones/electrones — exactamente el cómputo "p/n/e desde Z
y A" pedido por el audit. 11×3 = 33 combinaciones posibles.

### `oficial-quimica-configuracion-electronica` (`quimica-oficiales.ts`)

```
z = random(1, 20)
niveles = [
  { orbital: "1s", hasta: 2,  base: 0  },
  { orbital: "2s", hasta: 4,  base: 2  },
  { orbital: "2p", hasta: 10, base: 4  },
  { orbital: "3s", hasta: 12, base: 10 },
  { orbital: "3p", hasta: 18, base: 12 },
  { orbital: "4s", hasta: 20, base: 18 },
]
nivel_actual = primero(filtrar(niveles, item.hasta >= z))
electrones_subnivel = z - nivel_actual.base
respuesta = electrones_subnivel
```

Aufbau real (no distractores fijos): el subnivel donde "cae" Z y los
electrones que le corresponden se calculan a partir de Z. El rango
`Z ∈ [1,20]` (H a Ca) se eligió para evitar las excepciones de Aufbau
de Cr/Cu (Z≥24), donde el orden de llenado real difiere del orden
ingenuo 1s,2s,2p,3s,3p,4s,3d...

### `oficial-matematicas-probabilidad-simple` (`matematicas-oficiales.ts`)

Tabla `casos` con 7 experimentos clásicos (dado de 6 caras ×3 eventos,
moneda, baraja española ×2 eventos, bolsa numerada), cada uno con
`favorables`/`total` — cubre dado/moneda/cartas como el generador
original.

```
caso        = uno_de(casos)
probabilidad = redondear(caso.favorables / caso.total, 4)
respuesta    = probabilidad
```

`tipo: input`, `tolerancia_abs: 0.0001`. Ver sección 2 sobre por qué la
respuesta es decimal y no fracción simplificada.

## 4. Organización del código

`packages/vblang/src/templates/types.ts` define la interfaz
`PlantillaOficial` (mismo shape que `PlantillaOficialEconomiaAR` de
F6-04), compartida por los 4 archivos nuevos:

- `biologia-oficiales.ts` → `BIOLOGIA_OFICIALES` (`genetica_mendel`,
  `piramide_biomasas`)
- `quimica-oficiales.ts` → `QUIMICA_OFICIALES` (`particulas_subatomicas`,
  `configuracion_electronica`)
- `informatica-oficiales.ts` → `INFORMATICA_OFICIALES` (`algebra_booleana`)
- `matematicas-oficiales.ts` → `MATEMATICAS_OFICIALES` (`probabilidad_simple`)

Todos re-exportados desde `packages/vblang/src/index.ts`, junto con el
tipo `PlantillaOficial`.

## 5. Tests

Un archivo de test por módulo (`tests/templates/{biologia,quimica,
informatica,matematicas}-oficiales.test.ts`), siguiendo el patrón de
`economia-ar-oficiales.test.ts`:

- Pipeline completo `parse → lint → compile → validate({iterations:
  100})` sin errores para cada una de las 6 plantillas (`report.pass
  === true`, `passedSimulations === 100`).
- **Paridad de cálculo** (recalculado de forma independiente en el
  test):
  - `genetica_mendel`: el `cruce`/`aspecto` sorteados pertenecen a las
    tablas de 6/5 entradas, y `respuesta === cruce[aspecto.clave]`
    (12 seeds).
  - `piramide_biomasas`: `productor === base * 10^niveles_descenso` y
    `consumidor === base` (regla del 10% exacta, 8 seeds).
  - `algebra_booleana`: `expr.valor` coincide con la evaluación
    booleana independiente de `expr.texto` para A/B/C dados (12 seeds,
    las 6 expresiones).
  - `particulas_subatomicas`: `masa === el.proton + el.neutron` y
    `respuesta === el[particula.clave]` (10 seeds).
  - `configuracion_electronica`: `nivel_actual` = primer subnivel con
    `hasta >= z`, `electrones_subnivel === z - nivel_actual.base`
    (10 seeds, Z siempre en 1..20).
  - `probabilidad_simple`: `probabilidad === redondear(favorables/total,
    4)` para los 7 casos posibles (14 seeds), siempre en `[0,1]`.
- Adapter `toModuleQuizQuestion`: tipos (`input`/`vf`), `unidades`,
  `toleranciaAbsoluta`, `explanation` (F2-03) y `answerKey` coherentes
  con `respuesta`/`opciones`.

### Resultados

- `pnpm --filter ./packages/vblang test` → **742/742** (era 719 antes
  de F6-05 + 23 tests nuevos). 0 fallidos, 0 regresiones.
- `pnpm test:web` → **716/716**, sin regresiones (F6-05 es aditivo en
  `packages/vblang`, no toca `apps/web`).

## 6. Lo que F6-05 no cubre

- **Seed en DB como `PlantillaEjercicio`** (F6-01: `ownerUserId =
  SYSTEM_OWNER_ID`, `visibility: "publica"`, `publicAprobado: true`).
  Las 6 plantillas dejan `id`/`nombre`/`descripcion`/`tags`/`materia`
  listos para ese seed, pero no hay script de seed en F6-05 (no está
  en la aceptación: `pnpm test:api` no corre).
- **Borrado de los `.ts` originales** (`Biologia.ts`, `Informatica.ts`,
  `AtomosEnlaces.ts`, `Aritmetica.ts`) ni de sus bancos estáticos
  (F6-02/F6-03). Conviven con las nuevas plantillas paramétricas; el
  borrado es F6-06.
- **Extensión del DSL**: no se requirió ninguna — ningún subtipo
  necesitó FRENAR (ver sección 2).

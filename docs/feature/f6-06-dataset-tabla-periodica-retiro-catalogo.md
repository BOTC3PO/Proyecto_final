# F6-06 — Dataset "tabla periódica" + retiro de subtipos migrados del catálogo

Cierre de la migración F6-02..F6-05: (a) sembrar el dataset oficial
"tabla periódica" que sirve a plantillas VBLang de química, (b) retirar
del catálogo de CREACIÓN (`getStaticCatalog()`) los subtipos cuyo
contenido ya tiene un reemplazo cableado como plantilla VBLang oficial.

## 1. Investigación: catálogo y compatibilidad hacia atrás

### 1.1 `getStaticCatalog()` (`apps/web/src/generadoresV2/catalog.ts`)

Agrega `GeneratorDescriptor[]` de 7 módulos (`biologia`, `fisica`,
`matematicas`, `quimica`, `economia`, `informatica`, `basic`) y los mapea
a `CatalogItem[]` con `{id, materia, label, subtipos: {id,label}[]}`. Es
consumido por `EditorCuestionarios.tsx`, `EditorCuestionariosV2.tsx` y
`QuizEditorGenerated.tsx` como fallback cuando `/api/generators` no
devuelve items — es decir, es el catálogo de "qué generador puedo elegir
para un cuestionario nuevo".

### 1.2 ¿Qué le pasa a un quiz que referencia un subtipo retirado?

Nada: `BaseGenerador.toDescriptor()` (`core/baseGenerador.ts`) expone
`generate(dificultad, prng, subtipo, enunciadoTemplate)`. Cuando se pasa
`subtipo` explícito (el caso de un quiz ya generado, que guarda el
`subtipo` en sus metadatos), `generate()` llama directamente a
`this.generarEjercicio(subtipo, ...)` — **no** filtra por
`this.subtipos`. Retirar un id de `CatalogItem.subtipos` solo afecta el
selector de "nuevo generador"; el switch-case de `generarEjercicio` y el
array `subtipos` de la clase (usado para sorteo aleatorio sin `subtipo`
explícito) quedan intactos. Por lo tanto:

- Quiz legacy con `subtipo: "genetica_mendel"` → sigue regenerando con
  `Biologia.genetica_mendel` sin cambios.
- Selector de generador nuevo → ya no ofrece `genetica_mendel` como
  opción dentro de `biologia/biologia`.

### 1.3 Hallazgo: los ~55 bancos F6-02/F6-03 NO están cableados en ningún catálogo

El issue asume que los "70 subtipos migrados" (F6-02 + F6-03 + F6-05) ya
"viven en bancos/plantillas" desde la perspectiva del catálogo. Al
investigar se encontró que:

- `registerBancosEconomia()`, `registerBancosQuimica()`,
  `registerBancosBiologia()`, `registerBancosMatematicas()`
  (`economia/bancos/index.ts`, etc.) **solo se llaman desde sus propios
  `__tests__`**. En producción `TEMPLATE_REGISTRY` (`basic/banco.ts`)
  está vacío.
- `getDescriptoresBasic(prng)` devuelve `listBancoTemplates().map(...)`,
  que con el registro vacío es `[]`.
- Por lo tanto `getStaticCatalog()` actualmente **no** expone ninguno de
  los 55 bancos de F6-02/F6-03 (economía: 29, química/biología/álgebra:
  26).

Retirar esos 55 subtipos de sus generadores originales (`EconomiaAR`,
`Finanzas`, `Contabilidad`, `EconomiaGeneral`, `AtomosEnlaces`,
`Seguridad`, `AcidoBase`, `Equilibrio`, `Biologia`, `Algebra`) los dejaría
**sin ninguna forma de crearse** como ejercicio nuevo — exactamente el
problema de "contenido huérfano" que el punto 2 de la investigación del
issue pide evitar (aplicado a contenido nuevo, no solo a quizzes legacy).

### 1.4 Decisión de alcance F6-06

Se retiran del catálogo **únicamente los 6 subtipos de F6-05**
(PARAMETRIZABLE → plantilla VBLang oficial), porque su reemplazo SÍ está
cableado en un flujo de creación real (`PlantillaEjercicio`,
`ownerUserId: SYSTEM_OWNER_ID`, `visibility: "publica"`,
`publicAprobado: true`, listable como "plantilla oficial" para clonar):

| Generador | Subtipo retirado | Reemplazo oficial (F6-05) |
|---|---|---|
| `biologia/biologia` | `genetica_mendel` | `oficial-biologia-genetica-mendel` |
| `biologia/biologia` | `piramide_biomasas` | `oficial-biologia-piramide-biomasas` |
| `informatica/informatica` | `algebra_booleana` | `oficial-informatica-algebra-booleana` |
| `quimica/atomos_enlaces` | `particulas_subatomicas` | `oficial-quimica-particulas-subatomicas` |
| `quimica/atomos_enlaces` | `configuracion_electronica` | `oficial-quimica-configuracion-electronica` |
| `matematicas/aritmetica` | `probabilidad_simple` | `oficial-matematicas-probabilidad-simple` |

Ninguno de los 4 generadores afectados queda con `subtipos: []` tras el
retiro (`biologia/biologia` conserva `clasificacion_seres_vivos`,
`informatica/informatica` conserva `conversion_bases` y
`operaciones_logicas`, `quimica/atomos_enlaces` conserva 24 subtipos más,
`matematicas/aritmetica` conserva 20 subtipos más).

Los **55 subtipos BANCO de F6-02/F6-03 quedan en el catálogo sin
cambios**, funcionando como hasta ahora (generador PARAM/pool original).
Su retiro queda pendiente de un trabajo de wiring previo:
`registerBancosEconomia/Quimica/Biologia/Matematicas()` deben llamarse en
la inicialización real (o `getStaticCatalog()` debe registrarlos) para
que `getDescriptoresBasic()` los exponga como `CatalogItem`s — solo
entonces tiene sentido retirar los 55 originales sin perder la
posibilidad de crear ese contenido.

### 1.5 Por qué "6" y no "70"

El issue cita "70 subtipos ya migrados", heredado de la estimación de
`AUDITORIA_GENERADORES.md` (~48 BANCO + ~22 PARAMETRIZABLE "pool
disfrazado", antes de F6-02..05). El recuento real de subtipos
concretamente migrados con reemplazo es:

- F6-02: 29 (economía → bancos).
- F6-03: 26 (química/biología/álgebra → bancos).
- F6-05: 6 (biología/química/informática/matemáticas → plantillas
  oficiales).
- **Total migrado: 61** (no 70 — el resto del "pool disfrazado" original
  quedó documentado como "no migrado" en F6-03 con razones explícitas:
  `precipitacion_tipo`, `equipos_proteccion`, etc.).

De esos 61, **solo 6 (F6-05) tienen reemplazo cableado en un catálogo de
creación** (ver 1.3/1.4). F6-06 retira esos 6. Los 55 restantes quedan
documentados como pendientes (1.4).

## 2. Catálogo: cambios

`apps/web/src/generadoresV2/catalog.ts` agrega
`SUBTIPOS_RETIRADOS: Record<string, string[]>` (generador `id` →
subtipos retirados) y filtra `d.subtipos` en `getStaticCatalog()` antes
de mapear a `CatalogItem.subtipos`. No se modifica `descriptor.subtipos`
en sí (el array de la clase `BaseGenerador`), ni el switch-case de
`generarEjercicio` — solo la vista que ofrece el catálogo de creación.

### Tests (`apps/web/src/generadoresV2/__tests__/catalog.spec.ts`)

- `getStaticCatalog()` no ofrece ninguno de los 6 subtipos retirados en
  sus respectivos `CatalogItem`s.
- Los 4 generadores afectados conservan sus subtipos restantes (no
  quedan con `subtipos: []`).
- Compatibilidad: para cada uno de los 6 `{generatorId, subtipo}`
  retirados, `descriptor.generate("basico", prng, subtipo)` (subtipo
  explícito, como lo haría la regeneración de un quiz legacy) sigue
  devolviendo un `Ejercicio` válido con `subtipo` y `enunciado`
  presentes.

## 3. Dataset oficial "tabla_periodica"

### 3.1 Datos

`api/src/lib/tabla-periodica-dataset.ts` exporta el subconjunto de
`ELEMENTOS` (`quimica/AtomosEnlaces.ts`, 16 elementos: H, He, Li, C, N, O,
F, Na, Mg, Al, Si, Cl, Ca, Fe, Cu, Br) con las columnas pedidas por el
issue:

```ts
TABLA_PERIODICA_COLUMNAS = {
  Z: "number", simbolo: "string", nombre: "string",
  config: "string", electronegatividad: "number", radio: "number",
}
```

`nombre` (config electrónica legible) se incluye además de las 5
columnas pedidas porque sin él `uno_de(tabla_periodica)` + interpolación
de enunciado no podría nombrar el elemento sorteado.

### 3.2 Restricción de nombre: IDENT snake_case

`docs/vblang/diagnostico_datasets.md` (F2-01) confirmó que
`dataset: <X>` + `uno_de(X)` solo funciona si `<X>` es un IDENT válido
(sin espacios/acentos) — los datasets demo "Capitales de América" /
"Ciudades de Argentina" (sembrados por `seedDatasetsMapa()`) son
**inusables** desde plantillas VBLang por esta razón. El dataset de F6-06
se siembra con `nombre: "tabla_periodica"` (snake_case, IDENT válido),
evitando ese bug.

### 3.3 Seed

`api/scripts/seed_demo.ts` agrega `seedDatasetTablaPeriodica()` (mismo
patrón idempotente que `seedDatasetsMapa()`: borra la versión previa por
`id` y re-crea). A diferencia de los datasets de mapas (owner
`usr-teach-001`, `schoolId: "esc-0001"`), el dataset de tabla periódica
usa el patrón "oficial" de F6-01: `ownerUserId: SYSTEM_OWNER_ID`,
`schoolId: null`, `visibility: "publica"` — visible para cualquier
docente vía `GET /api/vblang/datasets/by-name/tabla_periodica` (rama
`{ visibility: "publica" }` del endpoint, sin requerir aprobación: a
diferencia de `PlantillaEjercicio`, `VblangDataset` no tiene
`publicAprobado`).

### 3.4 Tests (`api/tests/integracion/vblang-dataset-tabla-periodica.test.ts`)

- `GET /api/vblang/datasets/by-name/tabla_periodica` como docente
  cualquiera (no owner) → 200, 16 filas, fila de hidrógeno con el shape
  exacto esperado.
- Pipeline `parse → compile → generate` con un snippet
  `dataset: tabla_periodica` / `variables: el: uno_de(tabla_periodica)` /
  `respuesta: el.electronegatividad` y un provider que devuelve
  `TABLA_PERIODICA_FILAS`: para 5 seeds, `el` pertenece a la tabla y
  `respuesta === el.electronegatividad` — confirma que el dataset es
  usable end-to-end desde el DSL (cierra el caso "D" de
  `diagnostico-f2-01.test.ts`, ahora con datos reales).

Agregado a la lista de `api/package.json` `test` (no se ejecuta
automáticamente con `node --test` por glob).

## 4. Resultados

- `pnpm test:web` → **724/724** (era 716; +8 de `catalog.spec.ts`). 0
  regresiones.
- `pnpm test:api` → **234/234** (era 232; +2 de
  `vblang-dataset-tabla-periodica.test.ts`). 0 regresiones.

## 5. Lo que F6-06 no cubre

- **Retiro de los 55 subtipos BANCO de F6-02/F6-03**: pendiente de que
  `registerBancosEconomia/Quimica/Biologia/Matematicas()` se invoquen en
  la inicialización real y `getStaticCatalog()`/`getDescriptoresBasic()`
  los expongan (ver 1.4). Sin ese wiring, retirarlos deja el contenido
  sin forma de crearse.
- **`precipitacion_tipo` y `equipos_proteccion`**: seguían en limbo desde
  F6-03 (BANCO por código, no listados en el audit). F6-06 no los toca.
- **Borrado de los `.ts` originales**: ninguno de los generadores
  afectados se borra ni se modifica su `generarEjercicio`/`subtipos` —
  solo cambia lo que `getStaticCatalog()` expone.

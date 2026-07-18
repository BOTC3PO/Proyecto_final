# Frontend — Generadores de ejercicios (`generadoresV2`)

| | |
|---|---|
| **Estado** | Vigente |
| **Audiencia** | Frontend, contenido, autores de generadores |
| **Última actualización** | 2026-07-18 — fusión con `documentacion V2/docs/`: verificado el catálogo de materias/generadores contra el código actual (sin cambios respecto a 2026-05-30) y agregada la conexión con el editor Tiza (PLAN-Y). |
| **Fuente de verdad** | `apps/web/src/generadoresV2/`, `apps/web/src/vblang/` |

> Documentación de arquitectura derivada del código. El **catálogo de prompts por generador**
> (488 entradas) ya está generado y **no se rederiva aquí**: vive en
> [`../audits/generated/generador_prompt_catalog.json`](../audits/generated/generador_prompt_catalog.json)
> (validado en `generador_prompt_validation_report.md`). La **especificación del lenguaje VBLang**
> está en [`../vblang/`](../vblang/) — este doc solo describe los *adapters* web, sin duplicar la spec.

## Conceptos

`generadoresV2` es el subsistema cliente que produce **ejercicios paramétricos** de forma
**determinista** (misma seed → mismo ejercicio). Se organiza en:

- **`core/`** — abstracciones compartidas (tipos, PRNG, clase base, helpers).
- **`<materia>/`** — generadores concretos por materia (física, matemáticas, química, economía,
  biología, informática), cada uno como subclase de `BaseGenerador`.
- **`basic/`** — framework paralelo para **bancos de preguntas no paramétricos** (pool fijo).
- **`catalog.ts`** — agrega todos los descriptores en un catálogo consumible por la UI.
- **`vblang/`** (en `apps/web/src/vblang/`) — adapters que conectan VBLang con `generadoresV2`.

## Arquitectura core (`generadoresV2/core/`)

`index.ts` re-exporta `types`, `shared`, `prng` y `BaseGenerador`.

### `types.ts` — modelo de dominio

- **Materias:** `MateriaConMotor = "fisica" | "matematicas" | "quimica" | "economia"`; `Materia` lo
  amplía a `string` (admite biología/informática, sin motor de cálculo).
- **Dificultad:** `"basico" | "intermedio" | "avanzado"`, con `DIFICULTAD_LABELS`, `dificultadFactor`
  (0.8 / 1 / 1.2) y `ajustarRango(min, max, d, minFloor)` para escalar rangos numéricos.
- **Ejercicios:** `EjercicioBase` + tres variantes discriminadas por `tipo`:
  - `EjercicioQuiz` — `opciones` + `indiceCorrecto`.
  - `EjercicioNumerico` — `datos`, `resultado: number | string | number[]`, `toleranciaRelativa`, `unidades`.
  - `EjercicioCompletar` — `respuestaCorrecta`.
  - Union `Ejercicio`; todos pueden llevar `visual?: VisualSpec`.
- **Specs visuales** (`VisualSpec`, `CircuitSpec`, `LatexSpec`, `LineChartSpec`, `StaticImageSpec`,
  `TimelineSpec`, `VectorDiagramSpec`) se **importan y re-exportan desde `@vb/vblang`** (no se definen
  acá), para que el adapter del paquete pueda tiparlas sin depender de `apps/web`.
- **Calculadora:** `CalculoRequest`/`CalculoResponse` y la interface `Calculator { calcular(req): CalculoResponse }`.
- **`GeneratorDescriptor`** — contrato central del catálogo:
  `{ id: string; version: number; materia: Materia; subtipos: string[]; generate: GeneratorFn }`,
  con `GeneratorFn = (dificultad?, prng?, subtipo?, enunciadoTemplate?) => Ejercicio`.
- **Registro dinámico:** `MateriaCapacidad = "basic" | "calculado" | "mixto"`, `TemaManifest`, `MateriaManifest`.

### `prng.ts` — aleatoriedad determinista

Interface `PRNG` (`next`, `int`, `shuffle`, `sample`) e implementación **`DeterministicPrng`**
(seedable y determinista). El constructor toma `seed: string | number` y la hashea (`hashSeed`).
`next()` es un LCG (`state = (state*1664525 + 1013904223) >>> 0`, normalizado a `/0x100000000`);
`int`, `shuffle` (Fisher–Yates) y `sample` derivan de `next`. **La misma seed produce siempre la
misma secuencia.** Factory `createPrng(seed)`.

### `shared.ts` — helpers stateless

Reciben el `PRNG`: `redondear`, `randInt`, `randFloat`, `pickOne`, `shuffle`,
`generarOpcionesIncorrectas` (distractores numéricos), `crearQuiz` (baraja opciones y recalcula
`indiceCorrecto`), `renderTemplate` (`{{key}}`) y los motores de plantilla de enunciado
`applyEnunciadoTemplate` / `applyEnunciadoTemplateExt` (tokens `{key}`, `{key|unit}`, `{key|N}`
decimales, `{key.sub}` con path anidado; dejan intacto lo no encontrado). `placeholder(...)` produce
un `EjercicioCompletar` "[Próximamente]".

### `baseGenerador.ts` — clase base

Clase abstracta **`BaseGenerador`**, contrato de cada generador por materia:

- Campos abstractos `id`, `materia`, `subtipos`; `version = 1`; `prng` inyectado por constructor.
- Método abstracto `generarEjercicio(subtipo, dificultad, calc): Ejercicio` (lógica concreta).
- `generate(...)` envuelve `generarEjercicio` añadiendo `generatorId`/`generatorVersion`.
- **`toDescriptor(): GeneratorDescriptor`** — puente al catálogo: si no se pasa `subtipo`, elige uno
  con `pickOne`; invoca `generarEjercicio` con una calculadora stub; si hay `enunciadoTemplate`,
  reconstruye el enunciado con `applyEnunciadoTemplateExt`.
- Helpers protegidos que delegan en `shared` con `this.prng` (`randInt`, `randFloat`, `pickOne`,
  `shuffle`, `redondear`, `generarOpcionesIncorrectas`, `crearQuiz`, `renderTemplate`).

> Convención: el `id` de cada generador es `materia/tema` (p. ej. `fisica/cinematica`,
> `matematicas/aritmetica`, `biologia/biologia`).

## Generadores básicos (`generadoresV2/basic/`)

Framework paralelo para **bancos de preguntas no paramétricos** (pool fijo), distinto del contrato
`BaseGenerador`/`GeneratorDescriptor`.

- **`types.ts`:** cuatro tipos de pregunta discriminados por `type` — `MCQuestion` (opciones con
  `correct`/`because`), `TFQuestion` (`answer` + `becauseTrue`/`becauseFalse`), `MatchQuestion`
  (`pairs` left/right), `FillBlankQuestion` (`template` con `{{marcadores}}` + `blanks` con
  `correctAnswers`). Union `Question`. Más `SelectionConfig` (`mode: "random"|"fixed"|"byTags"`),
  `QuizTemplate` (`schema`, `metadata`, `settings`, `pool`) y salidas
  `GeneratedQuestion`/`QuizInstance`/`QuizAnswers`.
- **`basicGenerador.ts`:** tabla `HANDLERS` con `{ generate, validate }` por tipo. Clase
  **`QuizGenerator`** (`id` desde `template.metadata.id`): `generate({ seed, displayCount?, selection?,
  shuffleOptions? })` crea `createPrng(\`${id}:${seed}\`)`, selecciona preguntas (`byTags`/`fixed`/
  `sample`) y devuelve un `QuizInstance`; `validateAnswers(seed, answers)` regenera con la misma seed
  y corrige (con `normalize`: trim + lowercase + sin tildes para fill-blank).
- **`index.ts`:** re-exporta `QuizGenerator`. **No se registra** en el catálogo ni en el provider
  VBLang (no implementa `GeneratorDescriptor` y aún no hay origen de `QuizTemplate`). Plan en
  [`../vblang/roadmap-basic-generators.md`](../vblang/roadmap-basic-generators.md).

## Catálogo (`catalog.ts`)

Agrega los descriptores de todas las materias importando `getDescriptores<Materia>(prng)` de los seis
índices.

- **`CatalogItem`:** `{ id; materia; label; subtipos: { id; label; tieneGrafico?; variablesDisponibles? }[]; enunciadosPersonalizados? }`.
- **`GENERATOR_LABELS`:** mapa `descriptorId → etiqueta legible` ("Física — Cinemática", etc.).
- **`MATERIA_LABELS`:** `materiaId → nombre` en español.
- **`getStaticCatalog()`:** instancia `new DeterministicPrng(0)`, concatena todos los descriptores y
  los mapea a `CatalogItem` (resolviendo materia/label con los mapas y subtipos con `labelFromId`).
- `getDescriptoresFromModule(mod, prng)`: helper genérico que prueba `getDescriptores`/`getDescriptores<Materia>`.

> `GENERATOR_LABELS` incluye una entrada `"basic/quiz_generator"` aunque ese generador **no** se
> agrega al catálogo — `POR CONFIRMAR (catalog.ts)`: el label existe pero `getStaticCatalog` no lo
> produce.

## Generadores por materia

Cada `<materia>/index.ts` expone las clases generadoras, un `crear<Materia>(prng)` que las instancia
y un `getDescriptores<Materia>(prng)` que mapea a `GeneratorDescriptor[]` vía `toDescriptor()`.

| Materia | Módulos / generadores (archivos) | Notas |
|---|---|---|
| **Física** | `Cinematica`, `Dinamica`, `Energia`, `Termodinamica`, `Electricidad`, `Ondas`, `Fluidos` | Única materia con **motor de cálculo**: `calculadora.ts` → `crearCalculadoraFisica()`. `index.ts` inyecta la calc: `new G(prng, calc)`. Ver [`calculador.md`](./calculador.md). |
| **Matemáticas** | `Aritmetica`, `Algebra`, `AnalisisYAvanzado`, `Calculo` | `helpers/` con utilidades: `calculo.ts`, `estadistica.ts`, `polinomios.ts`, `trigonometria.ts`. |
| **Química** | `Estequiometria`, `Gases`, `Termoquimica`, `AcidoBase`, `Equilibrio`, `AtomosEnlaces`, `Seguridad` | Sin calculadora externa (`new G(prng)`). |
| **Economía** | `Contabilidad`, `Finanzas`, `EconomiaAR`, `EconomiaGeneral` | `new G(prng)`. |
| **Biología** | `Biologia` | Un generador (`biologia/biologia`; subtipos `genetica_mendel`, `piramide_biomasas`, `clasificacion_seres_vivos`). |
| **Informática** | `Informatica` | Un generador (`informatica/informatica`; subtipos `conversion_bases`, `operaciones_logicas`, `algebra_booleana`). |

## Adapters VBLang web (`apps/web/src/vblang/`)

Son **adapters** que conectan la web app con el paquete `@vb/vblang`. La spec del lenguaje (DSL,
parser, runtime) vive en el paquete y se documenta en [`../vblang/`](../vblang/); acá solo el rol de
cada archivo.

| Archivo | Rol |
|---|---|
| `provider.ts` | Implementa la interface `GeneradorAsistidoProvider` de `@vb/vblang` (puente VBLang → generadoresV2). `getAllDescriptors(prng)` reúne los descriptores de las 6 materias (excluye `basic/QuizGenerator`). `resolverDescriptor` resuelve `<id>` o `<id>/<subtipo>`. `generar(id, seed, dificultad)` crea `new DeterministicPrng(seed)`, genera y normaliza con `ejercicioToVblangShape`. |
| `runPlantilla.ts` | Helper end-to-end: `runPlantilla(codigoDsl, { seed, focus? })` hace `parse → compile → generate(...{ provider }) → toModuleQuizQuestion`. Conecta el provider de generadoresV2 cuando la plantilla usa `generador: <id>`. |
| `listGeneradores.ts` | Lista los generadores para el picker de UI: `listGeneradores()` reúne descriptores (seed fija `"picker"`), mapea a `GeneradorInfo { id, materia, materiaLabel, subtipos }` y cachea en memoria. |
| `examples.ts` | `SPRINT_9B_EXAMPLES`: plantillas VBLang de ejemplo (DSL) para los 4 tipos especiales (`ordenar`, `marcar_mapa`, `analisis_sintactico`, `identificar_palabras`). No se persisten; validadas por `__tests__/examples.spec.ts`. |
| `datasetCache.ts` | Cache in-memory de datasets (la interface `obtenerDataset` del runtime es síncrona). `precargarDataset(nombre)` hace `apiGet /api/vblang/datasets/by-name/:nombre` (cachea `null` en 404); `obtenerDatasetSync`, `limpiarCacheDatasets`, `invalidarDataset`. |
| `llmPrompt.ts` | Exporta `VBLANG_LLM_SYSTEM_PROMPT` (prompt de sistema para que un LLM escriba plantillas VBLang). Espejo en [`../vblang/llm-system-prompt.md`](../vblang/llm-system-prompt.md) — `POR CONFIRMAR (llmPrompt.ts)`: relación exacta con ese doc. |
| `utils.ts` | `extractDatasetName(plantilla)`: recorre `plantilla.bloques` y devuelve el `nombre` del bloque `dataset`, o `null` (para precargar el dataset antes de compilar). |

> El front consume plantillas/datasets VBLang vía `domain/vblang/plantillaApi.ts` y `datasetApi.ts`
> (endpoints `/api/plantillas/*` y `/api/vblang/datasets/*`, ver
> [`../backend/api-reference.md`](../backend/api-reference.md#dominio-vblang-plantillas-fórmulas-y-datasets)).

## Consumo desde el editor Tiza 🆕 (PLAN-Y)

El catálogo de `generadoresV2` (vía el provider VBLang de arriba) alimenta **"Importar plantilla
del banco"** en el rail del editor Tiza (`pages/PlantillaEditorTiza`) — las plantillas se importan
**dentro** del cuestionario que se está editando, no como referencia externa (el legacy
`plantilla:X` de los editores V1/V2 archivados se conserva sólo para cuestionarios viejos que aún
lo usan). La configuración del quiz (sorteo opcional de preguntas, listas con puestos) vive
únicamente en Tiza — `ModuloEditor` ya no la duplica.

## Archivos fuente documentados

- `apps/web/src/generadoresV2/core/*`, `basic/*`, `catalog.ts`
- `apps/web/src/generadoresV2/{fisica,matematicas,quimica,economia,biologia,informatica}/*`
- `apps/web/src/vblang/*`
- Catálogo generado: `docs/audits/generated/generador_prompt_catalog.json`
- Spec del lenguaje: `docs/vblang/`

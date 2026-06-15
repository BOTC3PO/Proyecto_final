# F6-07 — Cablear los bancos de F6-02/F6-03 al catálogo de producción

Plan K1/G3 (cierre del wiring dejado pendiente por F6-06). F6-02/F6-03
migraron ~55 subtipos BANCO a bancos estáticos, pero quedaron como
arrays exportados que SOLO sus tests ejercitaban: las
`registerBancosXxx()` se invocaban únicamente desde los `__tests__`,
nunca desde producción. F6-06 retiró del catálogo SOLO los 6 de
F6-05 (que sí tienen reemplazo cableado como plantillas oficiales) y
dejó los ~55 en el catálogo viejo: retirarlos sin este wiring
dejaría el contenido sin forma de crearse. F6-07 tiende ese cable.

## Estado antes / después

### Antes (F6-06)

`getStaticCatalog()` en `apps/web/src/generadoresV2/catalog.ts` ya
llamaba a `getDescriptoresBasic(prng)`, pero el
`TEMPLATE_REGISTRY` estaba vacío (nadie llamaba las
`registerBancosXxx()` en producción). El comentario
`docs/feature/f6-03-…` advertía exactamente este gap y mencionaba
F6-08 como trabajo futuro (retirar subtipos viejos equivalentes al
banco).

### Después (F6-07)

- `TEMPLATE_REGISTRY` se popula en cuanto se carga
  `apps/web/src/generadoresV2/bancos-init.ts` (side-effect a nivel
  de módulo). 5 consumidores lo importan para cablear el wiring:
  1. `catalog.ts` (catálogo estático) — los bancos aparecen en
     `getStaticCatalog()`.
  2. `EditorCuestionarios.tsx` (runtime legacy) — resuelve
     `basic/<bank_id>`.
  3. `EditorCuestionariosV2.tsx` (runtime V2) — idem.
  4. `ModuloDetail.tsx` (preview del módulo) — idem.
  5. (implícito) `getDescriptoresBasic(prng)` en catalog.ts:97 — ya
     estaba, ahora devuelve los 55 bancos.

## Investigación previa (resumen)

### `getStaticCatalog()` antes de F6-07

```ts
const all: GeneratorDescriptor[] = [
  ...getDescriptoresBiologia(prng),  // 1 generador, sin subtipos retirados
  ...getDescriptoresFisica(prng),    // 7 generadores
  ...getDescriptoresMatematicas(prng),// 4 generadores
  ...getDescriptoresQuimica(prng),   // 5 generadores
  ...getDescriptoresEconomia(prng),  // 4 generadores
  ...getDescriptoresInformatica(prng),// 1 generador
  ...getDescriptoresBasic(prng),     // [] — registry vacío
];
```

### Flujo docente (cómo CREAR contenido)

1. **Editor** (catalog step): el docente abre el editor de
   cuestionarios. `apps/web/src/components/modulos/QuizEditorGenerated.tsx`
   consume el catálogo:
   - `apiGet("/api/generators")` (preferente, pero el endpoint
     sirve GENERATORS de la DB — no los bancos).
   - Fallback: `getStaticCatalog()` (cuando el API falla o devuelve
     vacío).
2. **Picking**: el docente elige un item del catálogo, setea
   `dificultad`, `count`, y opcionalmente un subtipo (subtipos del
   pool).
3. **Storage**: el `ModuleQuizQuestion[]` se persiste con
   `generatorId: "basic/<bank_id>"` para bancos, o
   `generatorId: "economia/economia_general"` para parametric
   generators.
4. **Runtime resolution** (preview/take): cuando el sistema necesita
   resolver el `generatorId`, llama
   `loadGeneratorModule(materia) + getDescriptoresFromModule(mod, prng) + descriptor.generate(...)`.
   Para bancos, `materia = "basic"` — el switch no lo manejaba
   antes de F6-07.

### Decisión: bancos como "descriptores" equivalentes a un generador

Cada banco se expone como un `GeneratorDescriptor` con
`id: "basic/<bank_id>"`, `subtipos: []`, y
`generate: (_dificultad, prng) => pickOneEjercicio(template, prng)`.
Sale GRATIS del `bancoDescriptor(template)` pre-existente en
`apps/web/src/generadoresV2/basic/banco.ts:343-351`. NO se introduce
una nueva categoría "bancos" en el catálogo: los bancos aparecen
junto a los parametric generators, agrupados por materia
(economía/química/biología/matemáticas). Decisión justificada por:

- **UX unificada**: el docente ve una sola grilla
  "Generadores disponibles" sin tener que aprender dos
  taxonomías. El único "look different" es que un banco no tiene
  pool de subtipos (porque es atómico: un banco = un pool = un
  item del catálogo, no varios subtipos).
- **Modelo de slots F3 ya consume `basic/<bank_id>`** (lo vimos en
  `runtime/types.ts`: la `id` puede ser `<módulo>/<gen>` o
  `basic/<bank_id>`, indistintamente, como `generatorId` en
  `ModuleQuiz`).
- **No se duplica UI**: `QuizEditorGenerated` ya renderiza bien
  bancos con `subtipos: []` (sólo aparece el botón "Aleatorio
  (todos)" — perfecto para bancos).

### Idempotencia de las `registerBancosXxx()`

`registerBancoTemplate` usa `Map.set(id, t)` (no `Map.add`), por lo
que llamar las 4 funciones N veces produce el mismo estado final
(reemplazan por sí mismos). El test
"los bancos están EN el TEMPLATE_REGISTRY (idempotente vía bancos-init)"
verifica esto: reimporta `bancos-init` y la cantidad de templates no
cambia. Tests que necesitan un registry limpio pueden usar
`clearBancoTemplates()` en `beforeEach` (los tests de F6-02/F6-03 ya
lo hacen y siguen pasando).

## Decisiones de diseño

### 1) `bancos-init.ts` separado, no side-effect en cada `index.ts` de banco

Si los `index.ts` de `economia/bancos/`, `quimica/bancos/`, etc.
ejecutaran `registerBancosXxx()` al importarse, los tests
unitarios de cada uno registrarían también los bancos de los
otros (acoplamiento). El init centralizado en
`apps/web/src/generadoresV2/bancos-init.ts` mantiene la separación:
un test que quiere ver SOLO los bancos de química llama
explícitamente `registerBancosQuimica()` (o no llama nada y
verifica que el registry está vacío).

### 2) `case "basic"` en `loadGeneratorModule` de las 3 páginas runtime

`EditorCuestionarios.tsx`, `EditorCuestionariosV2.tsx` y
`ModuloDetail.tsx` tienen un `loadGeneratorModule(materia)` con un
`switch` por materia. Antes de F6-07, `materia = "basic"` caía en
`default → reject`. F6-07 agrega un `case "basic"` que retorna un
synthetic module `{ getDescriptores: (prng) => getDescriptoresBasic(prng) }`.
La función helper `loadBasicGeneratorModule()` se extrajo a
top-level para evitar un cast de tipo (`as unknown as Awaited<...>`
era problemático para el typecheck de TypeScript — ver
sección "Aprendizajes").

### 3) Label map para los bancos

`GeneratorDescriptor` no carga el título del banco (sólo
`materia`, `subtipos`, `generate`). F6-07 construye un
`bancoLabels: Map<id, titulo>` en `getStaticCatalog()` iterando
`listBancoTemplates()` y leyendo `tpl.metadata.titulo`. Esto le da
al docente una UI legible: "Clasificación de bienes" en vez de
"economia_general_clasificacion_bienes".

### 4) Sin cambios en el API endpoint `/api/generators`

El endpoint API (`api/src/routes/generators.ts:42`) lee de la
tabla `GeneratorConfig` de Prisma. Los bancos son inline en TS y
no se persisten en la DB. F6-07 no los agrega al endpoint API
— eso requeriría una migración de DB o mover los datos a
`@vb/vblang` (compartido API/web), lo cual es ortogonal al wiring.

Implicación práctica: en PRODUCCIÓN, si el endpoint API responde
con items (parametric generators), el cliente los usa (sin bancos).
Si el endpoint API falla o devuelve vacío, el cliente cae al
`getStaticCatalog()` (con bancos). Es el MISMO flujo que ya se
usaba como fallback en F5-04/F5-05/F6-05. La alternativa (mover
los bancos al endpoint API) queda como follow-up fuera de F6-07.

### 5) Sin cambios en F6-06 retiros

`SUBTIPOS_RETIRADOS` en `catalog.ts:80-85` sigue con los 6
retirados (los de F6-05 con reemplazo cableado). F6-07 es
estrictamente ADITIVO: añade bancos, no quita subtipos viejos.
F6-08 (futuro) será quien retire los ~55 subtipos viejos
equivalentes, una vez validado que el wiring de F6-07 funciona.

## Cambios por archivo

### NEW `apps/web/src/generadoresV2/bancos-init.ts` (24 líneas)

Side-effect a nivel de módulo: llama las 4 `registerBancosXxx()`.
Idempotente. Exporta nada (sólo side-effects).

### `apps/web/src/generadoresV2/catalog.ts` (modified, +27 líneas)

- Importa `./bancos-init` (triggers side-effect).
- Importa `listBancoTemplates` de `basic/banco`.
- En `getStaticCatalog()`: construye `bancoLabels: Map<id, titulo>` y
  lo usa en la prioridad de `label` antes de `GENERATOR_LABELS[d.id]`.

### 3 páginas runtime (modified)

- `EditorCuestionarios.tsx` (+24 líneas): import `getDescriptoresBasic`,
  helper `loadBasicGeneratorModule()`, `case "basic"` en el switch.
- `EditorCuestionariosV2.tsx` (idéntico).
- `ModuloDetail.tsx` (idéntico).

### NEW `apps/web/src/generadoresV2/__tests__/bancos-cableados.spec.ts` (200 líneas, 16 tests)

Cubre: 55 bancos en `getStaticCatalog()`, label humano, materia
correcta, `subtipos: []`, idempotencia, runtime descriptors con
generate funcional, y compatibilidad con F6-06 (los 6 retiros siguen
retirados).

## Aceptación

- `pnpm test:web` → **753/753** (era 716; +37 F6-07: 16 tests
  nuevos + 21 que estaban latentes). 0 fallidos, 0 regresiones.
- `pnpm test:api` → **234/234** (sin cambios).
- Typecheck web: 0 errores introducidos por F6-07 (los 22 errores
  pre-existentes siguen ahí, ortogonales).

## Lo que F6-07 **no** cubre (seguidores)

### F6-08 (futuro)

Una vez validado que el wiring de F6-07 funciona en producción
(los docentes efectivamente arman cuestionarios usando bancos),
se pueden retirar los ~55 subtipos viejos del catálogo de
creación sin perder contenido (los bancos son su reemplazo). El
mecanismo ya está: agregar entradas a `SUBTIPOS_RETIRADOS` en
`catalog.ts:80`. F6-08 es iterativo: 1) retirar 1 subtipo (ej.
`politica_fiscal_monetaria`), 2) monitorear que ningún quiz legacy
referencie ese subtipo (debería seguir funcionando vía
`BaseGenerador.toDescriptor().generate(subtipo)`), 3) repetir.

### Endpoint API `/api/generators`

El endpoint sirve generators de la DB. Para incluir bancos:

- (a) Mover los datos a `@vb/vblang` (compartido API/web) — el API
  puede importarlos directamente. Implica refactor mediano.
- (b) Sembrar en `GeneratorConfig` con un seed (`seed_demo.ts` o
  similar) — implica migración de DB.
- (c) Crear un nuevo endpoint `/api/bancos` que el cliente web
  llama y mergea con `/api/generators`. La opción menos invasiva,
  pero requiere cambio en el cliente.

Esto queda para F6-09+ o similar.

### Pinch-zoom en `marcar_mapa` (gap conocido de M7)

Ortogonal a F6-07. Pendiente.

### Keyboard nav de países en `marcar_mapa` (gap a11y)

Ortogonal a F6-07. Pendiente.

## Aprendizajes

### Cast problemático en `case "basic"` del switch

Primera versión:
```ts
case "basic":
  return import("../generadoresV2/bancos-init").then(() => ({
    getDescriptores: ...,
  })) as unknown as Promise<Awaited<ReturnType<typeof import("../generadoresV2/biologia/index")>>>;
```

TypeScript rechaza: `Awaited<ReturnType<typeof import(".../biologia/index")>>`
es el tipo del módulo, no una función. La signature de `Promise<T>`
requiere `T extends Function` (por la constraint de los promises
antiguos en TS). El cast con `as unknown as` no ayudó porque TS
igual chequea la constraint.

Solución: extraer `loadBasicGeneratorModule()` como helper
top-level con return type `Promise<unknown>`. TypeScript acepta
un `Promise<unknown>` mezclado con `Promise<typeof biologiaModule>`
(la constraint `(...args: any) => any` se cumple con `unknown`).

Lecciones:
- Cuando un switch retorna tipos heterogéneos, extraer helpers
  con return types `Promise<unknown>` o `Promise<any>` y dejar que
  el caller haga el narrowing.
- TypeScript no es feliz con dynamic imports encadenados con
  `as` cuando los tipos divergen. Mejor un helper explícito.

## Limitaciones

- **API endpoint no expone los bancos**. En producción, si el API
  responde con items (parametric generators), el cliente los
  prefiere (sin bancos). Solo en fallback aparecen los bancos.
- **Bancos con `subtipos: []` no muestran pool UI**. El docente
  sólo puede elegir "Aleatorio (todos)". Correcto por diseño (un
  banco ES un pool, no tiene subtipos), pero puede confundir si
  el docente espera ver variantes.
- **Preview muestra la misma pregunta N veces** (mismo PRNG, no
  se avanza entre preguntas). El sistema real de take usa otro
  PRNG flow, no este preview.
- **No se testeó con quiz activo real**. F6-07 valida el wiring
  estático y el runtime en preview. El test de smoke
  end-to-end (docente crea → estudiante toma) queda para
  verificación manual.

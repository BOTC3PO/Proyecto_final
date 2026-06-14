# F2-01 — Diagnóstico end-to-end de datasets VBLang

> Tarea: **DIAGNÓSTICO** (no implementación). Confirmar o refutar que el flujo
> `dataset:` + `uno_de` + acceso por punto funciona de punta a punta, porque
> toda la migración de la Fase 6 depende de esto.

**TL;DR — BUG CONFIRMADO**: Los datasets sembrados por `seedDatasetsMapa` con
los nombres reales (`"Capitales de América"`, `"Ciudades de Argentina"`) **no
se pueden usar** desde una plantilla VBLang con la sintaxis actual. Cualquier
intento de `uno_de(...)` contra esos nombres produce error en evaluación.
La causa raíz es una incompatibilidad entre la forma del nombre sembrado y lo
que el evaluador espera como nombre de variable.

---

## 1. Cómo se siembran los datasets (M6)

`api/scripts/seed_demo.ts:589` define `seedDatasetsMapa()`. Inserta en la
tabla `vblangDataset` con `visibility: "publica"`, `ownerUserId: "usr-teach-001"`,
`schoolId: "esc-0001"` y los siguientes nombres (`api/scripts/seed_demo.ts:605` y `:632`):

| id (interno) | `nombre` (visible) | columnas | filas |
|---|---|---|---|
| `ds-demo-capitales-america` | **"Capitales de América"** | `lat`, `lon`, `nombre` | 20 |
| `ds-demo-ciudades-argentina` | **"Ciudades de Argentina"** | `lat`, `lon`, `nombre` | 15 |

> Importante: el **id interno** (`ds-demo-capitales-america`) NO es lo que se
> expone al DSL. El DSL referencia por **nombre** (la columna `nombre` de la
> tabla), que sí tiene espacios y acentos.

Las filas se guardan en `vblangDatasetFila.datos` (JSON) con la forma
`{ nombre, lat, lon }`.

---

## 2. Cadena de resolución DSL → provider

| Paso | Archivo:línea | Qué hace |
|---|---|---|
| 1. Lexer | `packages/vblang/src/lexer/lexer.ts:241-267` | Tokeniza. Para `dataset: "Capitales de América"` produce `KW_DATASET COLON STRING("Capitales de América")`. Para `uno_de("Capitales de América")` produce `IDENT("uno_de") LPAREN STRING("Capitales de América") RPAREN`. |
| 2. Parser | `packages/vblang/src/parser/blocks.ts:527-544` | `parseDatasetBloque` acepta el nombre como `IDENT` o `STRING` y devuelve `DatasetBloque.nombre`. |
| 3. Compile | `packages/vblang/src/runtime/compile.ts:73-74` | Copia `b.nombre` a `compiled.dataset: string`. |
| 4. Editor hook | `apps/web/src/hooks/usePlantillaCompilation.ts:58-61` | `extractDatasetName(plantilla)` → `precargarDataset(nombre)` → `GET /api/vblang/datasets/by-name/<nombre>`. |
| 5. Backend | `api/src/routes/vblang-datasets.ts:179-224` | `prisma.vblangDataset.findFirst({ where: { nombre, isDeleted:false, OR: [owner / publica / escuela] } })` → devuelve `{filas: [{datos}, …]}`. |
| 6. Cache FE | `apps/web/src/vblang/datasetCache.ts:12-37` | `Map<nombre, filas | null>`. `precargarDataset` llena; `obtenerDatasetSync(nombre)` lee. |
| 7. Provider | `apps/web/src/vblang/provider.ts:88-90` | `obtenerDataset(nombre)` delega a `obtenerDatasetSync(nombre)`. |
| 8. Runtime | `packages/vblang/src/runtime/generate.ts:237-246` | Llama `options.provider?.obtenerDataset?.(nombre)`. Si retorna `null` → `EvalError("dataset <nombre> no encontrado")`. Si retorna filas → `scope.set(nombre, filas)`. |
| 9. Evaluador | `packages/vblang/src/evaluator/evaluator.ts:61-69` | Una `var` expression resuelve `scope.get(expr.name)`. **Solo acepta tokens `IDENT`**, no strings literales. |
| 10. Builtin | `packages/vblang/src/evaluator/builtins.ts:25-33` | `uno_de(arr)` exige que el argumento sea `Array.isArray`. Si llega `string`, lanza `EvalError("uno_de espera un array")`. |

**Punto crítico de la cadena**: el paso 8 setea la variable en scope con la
misma clave que el `dataset:` del DSL. Y el paso 9/10 sólo sabe resolver
variables que vienen de un token `IDENT` del lexer. Si el `dataset:` del DSL
tiene un nombre que no es un IDENT válido (espacios, acentos, símbolos), la
variable queda en scope pero **no se puede escribir** desde el DSL.

---

## 3. ¿Por nombre, id, o slug?

**Por `nombre`** (campo de la tabla `vblangDataset`, valor de la columna que el
usuario ve y edita como "Nombre del dataset"). Confirmado en tres lugares:

- `parseDatasetBloque` (`packages/vblang/src/parser/blocks.ts:541`):
  `compiled.dataset = tok.value` (lo que el usuario escribió).
- Backend `by-name/:nombre` (`api/src/routes/vblang-datasets.ts:200-205`):
  `findFirst({ where: { nombre, … } })` — case-sensitive exact match.
- Cache FE (`apps/web/src/vblang/datasetCache.ts:22`):
  `encodeURIComponent(nombre)` como clave del Map y de la URL.

El **id interno** (`ds-demo-capitales-america`) y el **slug derivado** NO se
usan en el flujo del runtime. El DSL referencia siempre por el `nombre`
visible.

---

## 4. Prueba funcional (con paquete `@vb/vblang` + vitest)

Se creó `packages/vblang/tests/runtime/diagnostico-f2-01.test.ts` con seis
casos reproducibles. Resumen de salida (de vitest 4.1.6, 6/6 ✅):

| # | Plantilla | Resultado | Mensaje exacto |
|---|---|---|---|
| **A** | `dataset: "Capitales de América"` + `uno_de("Capitales de América")` | ❌ | `uno_de espera un array` |
| **B** | `dataset: "Capitales de América"` + `uno_de(Capitales_de_America)` | ❌ | `variable indefinida: Capitales_de_America` |
| **C** | `dataset: capitales_mundo` + `uno_de(dataset)` (mismo patrón que la fixture `16_5_capitales.vblang`) | ❌ | `variable indefinida: dataset` |
| **D** | `dataset: capitales` + `uno_de(capitales)` (nombre IDENT válido) | ✅ | `Capital: Santiago` / `Santiago` |
| **E** | `dataset: "capitales"` + `uno_de(capitales)` (quoted IDENT) | ✅ | `Capital: Santiago` / `Santiago` |
| **F** | `dataset: "Capitales de América"` + `uno_de(Capitales_de_America)` | ❌ | `variable indefinida: Capitales_de_America` |

**Conclusiones de la prueba**:

1. **D y E** son la prueba de que el mecanismo funciona perfectamente cuando
   el nombre es un IDENT válido (con o sin comillas es indistinto — el parser
   acepta ambos para `dataset:` y `scope.set` recibe el string puro).
2. **A** es el patrón que un usuario "naturalmente" escribiría al copiar el
   nombre del `DatasetExplorer`. Falla: `uno_de` recibe un string, no el array
   que está guardado bajo la clave `"Capitales de América"` en el scope.
3. **B y F** son intentos de "traducir" el nombre a un IDENT (slug). Falla:
   `scope.set` se hizo bajo la clave con espacios, no bajo el slug.
4. **C** revela que la **fixture oficial** `packages/vblang/tests/fixtures/valid/16_5_capitales.vblang`
   también está rota: usa `uno_de(dataset)` esperando que `dataset` sea una
   variable en scope, pero la variable en scope es `capitales_mundo`. Pasa
   los tests de parse/compile porque esos no ejecutan el runtime; sólo lo
   descubriríamos al ejecutar el preview o validar 100 simulaciones.

### Sobre "100 simulaciones al guardar" y "asignación a módulo"

No se completó la parte "live" de la prueba (la API no está corriendo en
`localhost:4000`; los servicios detectados están en 3030/5050/5173 y no
responden a `api/health`). Pero el camino estático es el mismo: `runPlantilla`
(`apps/web/src/vblang/runPlantilla.ts:22-33`) → `generate` → `scope.set(nombre, filas)` →
`uno_de(nombre)`. Si en el paso de `uno_de` la variable no es resoluble, `generate`
lanza `EvalError` y:

- `usePlantillaValidation` (`apps/web/src/hooks/usePlantillaValidation.ts:38-41`)
  cuenta esa simulación como fallida. El reporte `validate()` muestra
  `passedSimulations=0/100` y un `code: "eval-error"` con el mensaje.
- `usePlantillaCompilation` lo captura y muestra el `EvalError` en el panel
  de errores. El preview queda en "parse-error".
- La asignación a módulo y la generación como alumno dependen del mismo
  `generate()` (vía los endpoints `instrumentos`/`modulos` que ya delegan al
  adapter), por lo que fallan exactamente en el mismo punto.

No se puede completar la prueba funcional con los nombres reales del seed
**por el bug diagnosticado en §5**, no por falta de setup. El bug es
anterior: no existe forma de escribir la plantilla que use esos datasets.

---

## 5. Diagnóstico de causa raíz

Hay **una causa raíz** y **dos amplificadores** que se retroalimentan:

### 5.1 Causa raíz: el scope usa el `nombre` como clave IDENT

`packages/vblang/src/runtime/generate.ts:245`:

```ts
scope.set(nombre, filas);
```

Donde `nombre` es exactamente el string del bloque `dataset: <X>` del DSL. El
evaluador (`evaluator.ts:61-69`) sólo resuelve variables que son tokens
`IDENT` válidos. Por lo tanto: el nombre de dataset debe ser un IDENT para
ser usable en `uno_de(...)`.

El lexer (`lexer.ts:241`) define IDENT como
`[a-záéíóúñA-ZÁÉÍÓÚÑ_][a-záéíóúñA-ZÁÉÍÓÚÑ_0-9]*` — sin espacios.

### 5.2 Amplificador 1: el seed inserta nombres con espacios y acentos

`api/scripts/seed_demo.ts:605` y `:632` ponen `nombre: "Capitales de América"`
y `nombre: "Ciudades de Argentina"`. Ambos:
- Tienen **espacios** → no son IDENTs.
- Tienen **acentos** ("é") → el lexer los acepta en IDENTs, pero…
- La validación Zod del POST (`api/src/lib/vblang-types.ts:31-35`) usa
  `regex(/^[a-z_][a-z0-9_]*$/i, "nombre debe ser un identificador válido")`,
  que **no permite acentos**. Hay desalineación entre el lexer y la
  validación de API: el lexer permite `Capitales_de_América` (sin espacio),
  la validación Zod no lo aceptaría por la `é`.

### 5.3 Amplificador 2: la UI sugiere el nombre visible al usuario

`apps/web/src/components/vblang/DatasetExplorer.tsx:78`:
> `Usalos con dataset: "<nombre>".`

Y el ejemplo de los docs (`docs/VBLang.md:1075-1086`):
```vblang
dataset: paises_sudamerica
variables:
  pais: uno_de(paises_sudamerica)
```

Estos ejemplos sólo funcionan si el `nombre` del dataset es snake_case. Para
los seeds actuales, no hay forma sintáctica de escribir el `uno_de(...)`
correcto.

### 5.4 La fixture `16_5_capitales.vblang` está desactualizada

`packages/vblang/tests/fixtures/valid/16_5_capitales.vblang:1-4`:
```vblang
dataset: capitales_mundo
variables:
  pais: uno_de(dataset)
```

Esto no puede correr en runtime (caso C del test). Sobrevive porque los
tests que la usan (`tests/parser/blocks.test.ts:120`) sólo parsean/compilan,
no generan.

---

## 6. Fix propuesto (NO aplicado, conforme al alcance de la tarea)

**Opción recomendada — mínima, clara, sin tocar runtime**:

Renombrar los `nombre` de los datasets sembrados a un identificador válido,
manteniendo el texto legible como `descripcion` (o como un futuro campo
`displayName` separado). El `dataset:` del DSL referenciaría el identificador,
que es lo único que el evaluador puede resolver. En el editor y en la UI se
mostraría el texto "Capitales de América" pero la API y el scope usarían
`capitales_america`.

Concretos (cambios de seed solamente, ~6 líneas):

```ts
// api/scripts/seed_demo.ts
const datasets = [
  {
    id: "ds-demo-capitales-america",
    nombre: "capitales_america",            // <- antes: "Capitales de América"
    descripcion: "Capitales de América…",  // descripcion conserva el texto
    filas: [/* … */],
  },
  {
    id: "ds-demo-ciudades-argentina",
    nombre: "ciudades_argentina",           // <- antes: "Ciudades de Argentina"
    descripcion: "Ciudades principales…",
    filas: [/* … */],
  },
];
```

Después, las plantillas VBLang se escriben como:

```vblang
dataset: capitales_america
variables:
  fila: uno_de(capitales_america)
enunciado: "Decí el nombre de una capital: {fila.nombre}"
respuesta: fila.nombre
tipo: completar
```

(Y el `DatasetExplorer.tsx` puede seguir mostrando "Capitales de América" como
display, leyendo el campo `descripcion` o un futuro `displayName`; eso queda
fuera del fix mínimo de 1-2 líneas.)

**Por qué este fix y no otro**:
- Tocar el runtime (`generate.ts`) para hacer `scope.set(alias, filas)` con
  un alias es un cambio invasivo que arrastra al parser y al editor.
- Cambiar la regex de Zod para permitir espacios es estrictamente peor: hace
  al sistema más permisivo y vuelve a fallar en el lexer.
- Agregar un campo `slug` o `identificador` es más limpio arquitectónicamente
  pero excede "1-2 líneas".

La opción de renombrar el seed es: 2 líneas cambiadas en `seed_demo.ts`, 0
cambios de runtime/parser, 0 cambios de UI. La UI de display puede ajustarse
después (Fase 6+) sin tocar el flujo de evaluación.

**Si se prefiere atacar el problema desde la raíz del runtime** (no
recomendado para este ticket), el fix sería en
`packages/vblang/src/runtime/generate.ts:245`:

```ts
// Antes:
scope.set(nombre, filas);

// Después: también exponer bajo la palabra clave `dataset` para que
// el usuario pueda escribir `uno_de(dataset)` independientemente del nombre.
scope.set("dataset", filas);
scope.set(nombre, filas);
```

Esto **NO resuelve** el caso de "Capitales de América" (no hay forma
sintáctica de escribir `uno_de("Capitales de América")` que no falle por
"uno_de espera un array"). Sólo arregla la fixture rota `16_5_capitales.vblang`.

---

## 7. Resumen ejecutivo

- **El flujo `dataset: <X>` + `uno_de(X)` + acceso por punto funciona** cuando
  `<X>` es un IDENT válido (ver casos D y E).
- **No funciona** con los nombres reales del seed (`"Capitales de América"`,
  `"Ciudades de Argentina"`). Tres mensajes de error posibles, todos en el
  evaluador: "uno_de espera un array", "variable indefinida: dataset", o
  "variable indefinida: <slug>".
- **Causa raíz**: el runtime pone las filas en `scope` bajo la clave
  `nombre` (string puro), y el evaluador sólo resuelve variables que son
  tokens IDENT. La desalineación es entre el contrato de
  `DatasetCreateSchema` (regex `^[a-z_][a-z0-9_]*$`) y los nombres
  efectivamente sembrados (con espacios y acentos).
- **Fix recomendado**: renombrar `nombre` en el seed a snake_case; mover el
  texto legible a `descripcion` o un futuro `displayName`. 2 líneas en
  `seed_demo.ts`, sin tocar runtime ni parser.
- **No se modificó código** fuera del archivo de tests de diagnóstico
  (`packages/vblang/tests/runtime/diagnostico-f2-01.test.ts`), que documenta
  los 6 casos reproducibles. Total actual: 597/597 tests pasan.

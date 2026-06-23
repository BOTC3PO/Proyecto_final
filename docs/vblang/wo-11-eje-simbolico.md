# WO-11 — Eje simbólico: respuesta y equivalencia algebraica

> Estado: implementado. Este documento cumple el paso "documentar antes de
> codear" de WO-11. Construye la capacidad simbólica del DSL (eje 2 del
> objetivo B) sobre la base numérica de WO-7/7b/8. Desbloquea el porting
> masivo de Álgebra, Cálculo y Análisis (~76 subtipos hoy bloqueados).

## 1. Contexto y motivación

El DSL sabe producir y comparar respuestas **numéricas** con tolerancia
(`respuesta:` + `tolerancia:`/`tolerancia_abs:`) y respuestas **literales**
exactas (texto, fracción simplificada, etc.). Los subtipos de **Álgebra
(45), Cálculo (15) y Análisis (16)** — listados en
`docs/vblang/porting-generadores.md` §"Algebra/Calculo/Analisis" — tienen
respuesta **simbólica** (expresiones algebraicas como string, derivadas,
factorizaciones) que el DSL hoy **no sabe**:

1. Producir/representar una expresión simbólica como respuesta.
2. Validar que la respuesta del alumno es **equivalente** a la correcta
   (`"2x+4" ≡ "2(x+2)"` y NO `"2x+4" ≡ "2x+5"`).

Esta tarea NO porta los 76 subtipos. Construye la capacidad + chequeo de
equivalencia, y porta 2-3 subtipos de Álgebra como prueba de que
funciona end-to-end. El porting masivo posterior es mecánico.

## 2. Objetivos concretos

1. El DSL puede declarar una respuesta como **expresión simbólica**.
2. `"2x+4"` y `"2(x+2)"` se reconocen **equivalentes**.
3. `"2x+4"` y `"2x+5"` se reconocen **NO equivalentes**.
4. La respuesta numérica/exacta existente sigue funcionando igual.
5. 2-3 subtipos de Álgebra portados con test de equivalencia contra el
   generador original pasando.
6. Lista de subtipos simbólicos restantes lista para el porting masivo
   posterior.

## 3. Estrategia de equivalencia: híbrida numérica + simbólica

**Decisión**: usar la combinación de **evaluación numérica en N puntos
aleatorios** + **verificación simbólica con `math.simplify`**. Cada una
sola tiene debilidades conocidas; combinadas son robustas para polinomios
(que es el caso del 90% de los subtipos simbólicos a portar).

### 3.1 Por qué NO solo `simplify(a - b) == 0`

Problema 1 — `math.simplify` no siempre expande productos. Probado
(`mathjs@15.2.0`):

```
simplify("(2*x+4) - (2*(x+2))")     → "2*x+4 - 2*(x+2)"  (NO cero)
simplify("(2*x+4) - (2*x+5)")      → "-1"                (cero ✓)
simplify("(x+1)^2 - (x^2+2*x+1)")  → "(x+1)^2 - 2*x - (x^2+1)"  (NO cero)
```

La forma `2x + 4 - 2(x+2)` no se reduce a `0` porque `math.simplify` por
defecto NO distribuye el producto sobre la suma. **Aun aplicando
manualmente una regla de distribución, el resultado es `2*x + 4 - (2*x
+ 2*2)`, y `2*2` no se pliega a `4` en la misma pasada** — requiere
encadenar dos pasadas: distribución + default simplify. Frágil.

Problema 2 — Expresiones no polinomiales (trig, log, sqrt) tienen
dominios acotados y `simplify` no siempre puede reducir su diferencia.

Problema 3 — Riesgo de falsos positivos con un solo punto. Con 1 punto
aleatorio y `simplify` roto, una expresión como `2x+4` y `2x+5` podrían
nunca matchear (correcto), pero con un test frágil cualquier rotura
puede colar.

### 3.2 Estrategia adoptada

```
sonEquivalentes(a, b):
  1. Normalizar: trim, colapsar espacios. Si son idénticos → true.
  2. Parsear ambos con math.parse. Si alguno falla → false.
  3. Evaluación numérica en N=10 puntos aleatorios enteros (rango
     [-11, 11] evitando -1, 0, 1 para reducir colisiones accidentales
     con polinomios de grado bajo). Si en algún punto los valores
     difieren → false. Si en todos coinciden → "numéricamente ok".
  4. Verificación simbólica:
       diff = parse("(a) - (b)")
       s    = simplify(diff, [reglasDistribución])
       s    = simplify(s)  // pasada de plegado de constantes
       si s.toString() === "0" → "simbólicamente ok".
  5. Resultado:
     - Si ambos ok → equivalente (true).
     - Si solo numérico ok → usar numérico (true) + warning.
     - Si solo simbólico ok → usar simbólico (true) + warning.
     - Si ninguno ok → false.
```

**Schwartz-Zippel** garantiza que para polinomios de grado `d` sobre
primos `p`, la prob. de falso positivo con 1 punto es ≤ `d/p`. Con
N=10 puntos y primos {2,3,5,7,11,13,17,19,23,29}, la probabilidad cae a
`(d/p_max)^N` ≈ `(d/29)^10` — despreciable para `d ≤ 4` (caso de la
inmensa mayoría de subtipos a portar).

### 3.3 Puntos de prueba

`[-11, -7, -5, -3, 2, 3, 5, 7, 11, 13]` (enteros, no triviales, evitan
denominadores cero típicos). Fijos y deterministas (no aleatorios) para
que la verificación sea reproducible y testeable.

### 3.4 Lo que el chequeo NO cubre (anotación honesta)

- **Expresiones no polinomiales con dominios restringidos** (sqrt, log,
  trig): la numérica sigue funcionando SI los puntos están en el dominio
  (lo aseguramos eligiendo puntos no negativos para sqrt). Si el alumno
  escribe `sqrt(x^2)` y el sistema espera `|x|`, la equivalencia falla en
  x negativos — aceptable, son dominios diferentes.
- **Equivalencia módulo identidad trig** (`sin^2 + cos^2 = 1`): no
  soportado. math.js no lo hace sin reglas extra. Anotar como gap.
- **Equivalencia con constantes universales** (`pi`, `e`): no soportado
  en esta primera versión. Las plantillas simbólicas futuras que las
  requieran usarán `tipo: input` con tolerancia numérica.

## 4. Cambios al DSL

### 4.1 Nuevo bloque `respuesta_expr:`

Paralelo a `respuesta:`, `respuesta_iso:`, etc. Su forma es:

```
respuesta_expr: <expresión>     # expresión que devuelve un STRING
```

**Semántica**:

- El valor evaluado debe ser un `string` (no un número). Es la
  representación textual de la expresión simbólica esperada (ej.
  `"2(x+2)"`, `"x^2 + 2x + 1"`).
- Se infiere automáticamente `tipoInferido = "expresion"` si no se
  declara `tipo:`. Si la plantilla usa `tipo: expresion` explícito, se
  valida que esté el `respuesta_expr:`.
- Aritmética/strings siguen funcionando igual: `respuesta_expr:
  concatenar(factor, "(", a, "x", b >= 0 ? `+ ${b}` : `- ${-b}`, ")")`
  produce un string ensamblado con la fórmula.

### 4.2 Nuevo `tipo: "expresion"`

En `parser/ast.ts` se agrega `"expresion"` a `TipoPregunta`. El parser
lo acepta como `tipo:` explícito. El adapter lo mapea a un nuevo
`ModuleQuizQuestionType = "expresion"`.

El adapter propaga `answerKey` igual que en `input` (string del
resultado) y **no** aplica tolerancia numérica — el server decide
usando la función `gradeSymbolic`.

### 4.3 Lexer / parser

- `KW_RESPUESTA_EXPR` en `lexer/tokens.ts`.
- `BLOCK_KEYWORDS.respuesta_expr = KW_RESPUESTA_EXPR`.
- `parseRespuestaExprBloque` en `parser/blocks.ts`.
- `RespuestaExprBloque` interface en `parser/ast.ts`.
- `parseBloque` dispatch.
- Inclusión en `Bloque` union y re-exports.
- `isBlockKeyword`.
- `compile()` switch.
- `inferExprType` valida que `respuesta_expr` evalúe a `string`.
- `lint` chequea que `tipo: expresion` se use sólo con `respuesta_expr`
  (o `respuesta:` que evalúe a string).
- `tipoInferido = "expresion"` si hay `respuesta_expr` (sin
  `respuesta:`).

## 5. Motor de equivalencia simbólica

`packages/vblang/src/evaluator/symbolic.ts`. **NUEVO**.

```ts
export function sonEquivalentes(
  a: string,
  b: string,
  puntos?: number[],   // default: 10 puntos fijos [-11..13]
): { eq: boolean; metodo: "trivial" | "numerico" | "simbolico" | "ambos" }
```

Implementación según §3.2.

### 5.1 Habilitar `simplify` y `derivative` para uso interno

El sandbox de `createIsolatedMath` en `evaluator/math-setup.ts` bloquea
`simplify`, `derivative`, `evaluate`, `parse`, `import`, `createUnit`.
**Estos bloqueos son para que el DSL no los llame como builtins** (serían
un agujero de meta-programación: `evaluate` evaluaría código arbitrario).

**Decisión**: mantener el bloqueo. El módulo `symbolic.ts` usa su
PROPIA instancia de `mathjs` (`create(all)` directo, sin overrides) o
extiende `createIsolatedMath` con un flag que habilite las funciones de
álgebra para uso interno (no expuestas como builtins del DSL).

Concreto: un helper `createAlgebraMath()` en `evaluator/math-setup.ts`
que devuelve una instancia CON `simplify`/`derivative`/`parse`/`evaluate`
habilitados. Solo lo usa `symbolic.ts`. El DSL sigue usando
`createIsolatedMath()` para su sandbox.

### 5.2 Builtins simbólicos (opcionales, no requeridos para 2-3 ports)

Aunque los 2-3 ports a demostrar no los necesitan, los agrego para
desbloquear subtipos futuros (Cálculo = derivadas, Análisis =
simplificación, factorización). Los hago **first-class** en
`createBuiltins`:

| Builtin              | Firma                          | Implementación              |
|----------------------|--------------------------------|-----------------------------|
| `derivar(expr, var)` | `(string, string) -> string`   | `math.derivative`           |
| `simplificar_expr(expr)` | `(string) -> string`        | `math.simplify` (default)   |
| `evaluar_en(expr, var, valor)` | `(string, string, number) -> number` | `node.evaluate({var: valor})` |

Todos reciben un string (expresión), devuelven string o number. El
linter los firma con `T.string` o `T.number`. NO exponen `math.parse`
ni `math.evaluate` directamente (esos quedan internos a
`createAlgebraMath`).

## 6. Cambios en la API y el adapter

### 6.1 Adapter

- `ModuleQuizQuestionType` agrega `"expresion"`.
- `toModuleQuizQuestion` propaga `questionType: "expresion"`.
- `answerKey` = string del `respuesta_expr:` (igual que `input`).
- Sin `toleranciaRelativa` / `toleranciaAbsoluta`.

### 6.2 API (`api/src/routes/quiz-attempts.ts`)

Nueva función `gradeSymbolic(response: string, expected: string)`:

```ts
const gradeSymbolic = (response: string, expected: string): boolean => {
  // Importa @vb/vblang runtime helper
  return sonEquivalentes(response, expected).eq;
};
```

`gradeAnswers` y `buildFeedback` ramifican según `questionType`:

- `"input"`: `gradeNumeric` actual.
- `"expresion"`: `gradeSymbolic`.
- resto: igualdad de string (default).

Caveat: `gradeSymbolic` es pesada (~10 evaluaciones con math.js) — se
acepta porque la cantidad de preguntas de tipo `expresion` por quiz
será baja (la mayoría son numéricas).

## 7. Subtipos a portar (3, prueba de capacidad)

De `apps/web/src/generadoresV2/matematicas/Algebra.ts`, ramo `basico`:

| subtipoOriginal             | rama  | fórmula portada                            | método |
|-----------------------------|-------|--------------------------------------------|--------|
| `terminos_semejantes`       | basico| agrupar y reducir                          | suma de monomios, respuesta string |
| `multiplicacion_monomios`   | basico| `k · (a·x + b) = (ka)x + kb`               | distributiva, respuesta string |
| `factorizacion_basica`      | basico| factor común `k·ax + k·b = k(ax + b)`      | factor común, respuesta string |

Son los 3 más representativos: reducción, distributiva, factor común. La
factorización es el caso interesante porque la respuesta es una forma
**factorizada** (no expandida), y el chequeo simbólico debe aceptar
tanto `6(x+2)` como `6x+12` como equivalentes — esto ejercita la
función `sonEquivalentes` con un test real.

Cada port sigue el patrón de `docs/vblang/porting-generadores.md`:
`PlantillaOficial` en
`packages/vblang/src/templates/matematicas-algebra-oficiales.ts`,
registrada en `index.ts`, con test de validez DSL (parsea + lintea +
compila + 100 simulaciones sin error) en
`packages/vblang/tests/templates/matematicas-algebra-oficiales.test.ts`
y test de **equivalencia generador↔plantilla** (oráculo compartido) en
`apps/web/src/generadoresV2/__tests__/algebra-equivalencia.spec.ts`.

## 8. Lista de subtipos simbólicos restantes (para WO posterior)

Desbloqueados por WO-11 (símbolos), pendientes de porting mecánico:

### Álgebra (42 subtipos restantes de 45)

- `lenguaje_algebraico` (3 ramas) — respuesta string, formato canónico
- `evaluacion_expresiones` (3 ramas) — respuesta numérica (ya porta con WO-7b)
- `suma_resta_polinomios` (3 ramas) — respuesta string
- `grado_coeficientes` (3 ramas) — respuesta numérica
- `productos_notables` (3 ramas) — respuesta string (expandir o factorizar)
- `ecuaciones_lineales` (3 ramas) — respuesta numérica (con `resolver`)
- `ecuaciones_parametros` (3 ramas) — respuesta numérica
- `inecuaciones_simples` (3 ramas) — respuesta string (con signo y fracción)
- `sistemas_2x2` (3 ramas) — respuesta numérica o string `x = .., y = ..`
- `ecuaciones_cuadraticas` (3 ramas) — respuesta string o numérica
- `sistemas_3x3` (1 rama) — respuesta string
- `racionales_simples` (3 ramas) — respuesta string
- `simplificacion_algebraica` (4 ramas) — respuesta string
- `ecuaciones_fracciones` (3 ramas) — respuesta numérica
- `funciones_lineales` (3 ramas) — respuesta numérica
- `funcion_afin` (3 ramas) — respuesta numérica
- `ecuacion_recta` (3 ramas) — respuesta string
- `multiplicacion_polinomios` (3 ramas) — respuesta string
- `division_polinomios` (3 ramas) — respuesta string
- `identidad_ecuacion` (3 ramas) — mixta
- `intervalos_soluciones` (3 ramas) — respuesta string
- `valor_absoluto_ec` (3 ramas) — mixta
- `valor_absoluto_dist` (3 ramas) — respuesta string
- `potencias_exponentes` (6 reglas) — respuesta string
- `radicales_simplificacion` (3 ramas) — respuesta string
- `ecuaciones_rad_pot` (3 ramas) — respuesta string
- `notacion_cientifica` (3 ramas) — respuesta string
- `interes` (3 ramas) — respuesta numérica
- `estadistica_descriptiva` (4 tipos) — mixta
- `tendencias` (4 tipos) — mixta
- `probabilidad_visual` (3 ramas) — mixta (fracciones)
- `combinatoria_basica` (3 ramas) — respuesta numérica

### Cálculo (15 subtipos)

Pendiente de investigación específica; incluye derivadas, integrales,
límites, máximos/mínimos.

### Análisis y Avanzado (16 subtipos)

Pendiente de investigación específica; incluye sucesiones, series,
funciones, geometría analítica, combinatoria.

**Total estimado desbloqueado**: ~76 subtipos paramétricos que
actualmente resuelve el generador legado. El porting masivo es
mecánico con el patrón de WO-7b; la capacidad simbólica de WO-11 cubre
todos los casos.

## 9. Limitaciones documentadas

- **No hay equivalencia con constantes universales** (`pi`, `e`). Las
  plantillas que las necesiten (ej. círculo) usan `tipo: input` con
  tolerancia numérica hasta que se agregue soporte.
- **No hay equivalencia módulo identidades trig** (`sin^2 + cos^2 = 1`).
  math.js no lo hace sin reglas adicionales. Anotado como gap; si se
  necesita, agregar reglas custom a `simplify`.
- **El chequeo simbólico puede ser lento** (~5-10ms por comparación).
  Aceptable para el caso de uso (corrección server-side, batch
  pequeño).
- **El parser de math.js es estricto**: inputs con formato no estándar
  (ej. `"2x"` sin espacio) pueden no parsear. La función
  `normalizarExpresion` puede agregar espacios (`"2x"` → `"2*x"`).
  Decisión: documentar la sintaxis esperada como "notación math.js" y
  dejar que el alumno use `*` para productos, `^` para potencias,
  paréntesis para agrupar. Si hace falta una capa de tolerancia a
  formato, se puede agregar en una iteración futura.

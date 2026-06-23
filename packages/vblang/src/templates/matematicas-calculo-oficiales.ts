/**
 * WO-11d — Plantillas VBLang OFICIALES para Matemáticas (Cálculo).
 *
 * Cada plantilla reproduce la FÓRMULA de un subtipo PARAMÉTRICO de
 * `apps/web/src/generadoresV2/matematicas/Calculo.ts` cuya respuesta es
 * una EXPRESIÓN simbólica o un valor NUMÉRICO.
 *
 * Patrón: ver `docs/vblang/porting-generadores.md` y
 * `docs/vblang/wo-11-eje-simbolico.md`. Para simbólicas se usa
 * `respuesta_expr:` + `tipo: expresion` + `sonEquivalentes`; para
 * numéricas se usa `respuesta:` + `tipo: input` + `tolerancia_abs:`.
 *
 * Subtipos portados (10, todos rama basico):
 *  - limites_funciones         (num.)    — límite de polinomio (sustitución directa)
 *  - derivada_definicion       (num.)    — f'(x0) por definición (cuadrática)
 *  - derivadas_basicas         (simb.)   — f'(x) de polinomio (sólo fórmula, sin eval)
 *  - reglas_derivacion         (simb.)   — regla del producto (binomios)
 *  - integral_indefinida       (simb.)   — ∫ coef·x^n dx (sin "+C" en respuesta)
 *  - integral_definida         (num.)    — ∫[0,b] x^n dx
 *  - aplicaciones_integrales   (simb.)   — área entre y=x e y=x² en [0,1] (1/6)
 *  - probabilidad_avanzada     (num.)    — P(A∩B) para independientes
 *  - variables_aleatorias      (num.)    — E(X) distribución discreta
 *  - distribuciones            (num.)    — P(X=k) binomial
 *
 * Subtipos NO portados (5) — gaps documentados:
 *  - continuidad               — MC conceptual ("¿es continua?", "tipo de
 *                                  discontinuidad"). No hay fórmula — son
 *                                  opciones de texto fijo.
 *  - aplicaciones_derivadas    — respuesta multi-statement ("x=0 y x=2.67").
 *                                  CAS no parsea este formato.
 *  - ecuaciones_diferenciales  — solución general con constante libre (C):
 *                                  "y = Ce^(kx)". math.js trata C como
 *                                  símbolo desconocido.
 *  - estadistica_inferencial   — MC conceptual + intervalo ("IC 95%").
 *  - regresion_correlacion     — MC conceptual (categoría de correlación).
 *
 * Verificación:
 *  - validez DSL: `tests/templates/matematicas-calculo-oficiales.test.ts`
 *  - equivalencia con generador: `apps/web/.../calculo-equivalencia.spec.ts`
 */
import type { PlantillaOficial } from "./types.js";

// ── 1. limites_funciones (basico) ────────────────────────────────────────

/**
 * limites_funciones (basico):
 *   El generador sortea a ∈ [-3, 3], coef ∈ [1, 5], c ∈ [-5, 5].
 *   Polinomio: coef·x² + c. Límite: lim(x→a) [coef·x² + c] = coef·a² + c.
 *   Patrón NUMÉRICO: sustitución directa del polinomio en x=a.
 */
const LIMITES_FUNCIONES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["limites_funciones", "calculo", "limite"]

variables:
  a: random(-3, 3)
  coef: random(1, 5)
  c: random(-5, 5)
  pol_str: concatenar(coef, "*x^2+", c)
  resultado: coef * a * a + c

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Calcula: lim(x→{a}) [{pol_str}]"

pasos:
  - "El polinomio es continuo en todo ℝ, así que sustituimos x = {a}:"
  - "{coef}·({a})² + {c} = {coef * a * a} + {c} = {resultado}"

explicacion: |
  Como el polinomio coef·x² + c es continuo, basta sustituir x = {a}:
  {coef}·({a})² + {c} = {coef * a * a} + {c} = {resultado}.
`;

// ── 2. derivada_definicion (basico) ──────────────────────────────────────

/**
 * derivada_definicion (basico):
 *   El generador sortea a ∈ [1, 4], c ∈ [1, 5], x0 ∈ [1, 3].
 *   Función: f(x) = a·x² + c. Derivada: f'(x) = 2·a·x.
 *   Evaluación: f'(x0) = 2·a·x0.
 *   Patrón NUMÉRICO.
 */
const DERIVADA_DEFINICION_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["derivada_definicion", "calculo", "limite"]

variables:
  a: random(1, 4)
  c: random(1, 5)
  x0: random(1, 3)
  resultado: 2 * a * x0

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Usando f'(x) = lim[h→0] (f(x+h)-f(x))/h, calcula f'({x0}) si f(x) = {a}x² + {c}."

pasos:
  - "f(x+h) = {a}(x+h)² + {c} = {a}x² + {2 * a}xh + {a}h² + {c}"
  - "(f(x+h)-f(x))/h = ({2 * a}xh + {a}h²)/h = {2 * a}x + {a}h"
  - "Cuando h→0: f'(x) = {2 * a}x"
  - "f'({x0}) = {2 * a}·{x0} = {resultado}"

explicacion: |
  Por la definición, f'(x) = 2·a·x. Con a = {a}: f'(x) = {2 * a}x.
  En x = {x0}: f'({x0}) = {2 * a}·{x0} = {resultado}.
`;

// ── 3. derivadas_basicas (basico) ────────────────────────────────────────

/**
 * derivadas_basicas (basico):
 *   El generador sortea un polinomio de grado 2 con 2 términos, coefs
 *   ∈ [1, 5]. Pregunta por la derivada y su evaluación en x0 ∈ [1, 3].
 *   Respuesta del generador (formato): "f'(x) = {derivStr}; f'({x0})
 *   = {valorDeriv}".
 *   La plantilla produce SOLO la fórmula de la derivada (no la eval
 *   numérica) — la equivalencia simbólica compara ese polinomio. La
 *   evaluación numérica se mueve a la explicación.
 */
const DERIVADAS_BASICAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["derivadas_basicas", "calculo", "derivada"]

variables:
  coef_x2: random(1, 5)
  coef_x: random(1, 5)
  x0: random(1, 3)
  deriv_x: 2 * coef_x2
  deriv_0: coef_x
  valor_deriv: deriv_x * x0 + deriv_0
  pol_str: concatenar(coef_x2, "*x^2+", coef_x, "*x")
  deriv_str: concatenar(deriv_x, "*x+", deriv_0)

respuesta_expr: deriv_str
tipo: expresion

enunciado: "Usando la regla de la potencia, ¿cuál es la derivada de f(x) = {pol_str}? Evalúa f'({x0})."

pasos:
  - "Regla de la potencia: d/dx[a·x^n] = n·a·x^(n-1)"
  - "d/dx[{coef_x2}·x²] = {deriv_x}·x"
  - "d/dx[{coef_x}·x] = {deriv_0}"
  - "f'(x) = {deriv_str}"
  - "f'({x0}) = {deriv_x}·{x0} + {deriv_0} = {valor_deriv}"

explicacion: |
  Por la regla de la potencia: f'(x) = {deriv_str}. Evaluando en
  x = {x0}: f'({x0}) = {valor_deriv}.
`;

// ── 4. reglas_derivacion (basico, producto) ─────────────────────────────

/**
 * reglas_derivacion (basico, producto):
 *   El generador sortea a, c ∈ [1, 4], b, d ∈ [1, 5]. Función:
 *   f(x) = (ax + b)(cx + d). Derivada: f'(x) = 2acx + (ad + bc).
 *   En basico, sólo cubre la regla del producto.
 */
const REGLAS_DERIVACION_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["reglas_derivacion", "calculo", "producto"]

variables:
  a: random(1, 4)
  b: random(1, 5)
  c: random(1, 4)
  d: random(1, 5)
  r2: 2 * a * c
  r1: a * d + b * c
  resp_str: concatenar(r2, "*x+", r1)

respuesta_expr: resp_str
tipo: expresion

enunciado: "Deriva usando la regla del producto: f(x) = ({a}x + {b})({c}x + {d})"

pasos:
  - "Regla del producto: d/dx[u·v] = u'·v + u·v'"
  - "u = {a}x + {b}, u' = {a}; v = {c}x + {d}, v' = {c}"
  - "f'(x) = {a}·({c}x+{d}) + ({a}x+{b})·{c}"
  - "= {a * c}x + {a * d} + {a * c}x + {b * c}"
  - "= {r2}x + {r1}"

explicacion: |
  f'(x) = u'v + uv' = {a}·({c}x+{d}) + ({a}x+{b})·{c}
         = {r2}x + {r1}.
`;

// ── 5. integral_indefinida (basico) ──────────────────────────────────────

/**
 * integral_indefinida (basico):
 *   El generador sortea n ∈ [1, 3], coef ∈ [1, 5]. Pregunta por
 *   ∫ coef·x^n dx. Respuesta (formato): "(sn/sd)·x^(n+1) + C" donde
 *   sn/sd es la fracción coef/(n+1) simplificada.
 *   La plantilla produce SOLO el polinomio (sin "+C") — la equivalencia
 *   simbólica compara ese polinomio. El "+C" se menciona en
 *   la explicación.
 */
const INTEGRAL_INDEFINIDA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["integral_indefinida", "calculo", "integral"]

variables:
  n: random(1, 3)
  coef: random(1, 5)
  new_exp: n + 1
  resp_str: concatenar("(", coef, "/", new_exp, ")*x^", new_exp)

respuesta_expr: resp_str
tipo: expresion

enunciado: "Calcula la antiderivada: ∫ {coef}x^{n} dx"

pasos:
  - "Regla de la potencia inversa: ∫x^n dx = x^(n+1)/(n+1) + C"
  - "∫{coef}x^{n} dx = {coef}·x^{n + 1}/{n + 1} + C"

explicacion: |
  Por la regla de la potencia inversa: ∫{coef}x^{n} dx = ({coef}/{new_exp})·x^{new_exp} + C.
`;

// ── 6. integral_definida (basico) ───────────────────────────────────────

/**
 * integral_definida (basico):
 *   El generador sortea n = 1, b ∈ [2, 5]. Integral: ∫[0, b] x^1 dx = b²/2.
 *   Patrón NUMÉRICO.
 */
const INTEGRAL_DEFINIDA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["integral_definida", "calculo", "integral"]

variables:
  b: random(2, 5)
  resultado: b * b / 2

respuesta: resultado
tipo: input
tolerancia_abs: 0.01

enunciado: "Calcula: ∫[0,{b}] x^1 dx (área bajo la curva entre x=0 y x={b})"

pasos:
  - "∫[0,{b}] x dx = [x²/2] de 0 a {b}"
  - "= ({b})²/2 - 0 = {b * b}/2 = {resultado}"

explicacion: |
  ∫[0,{b}] x dx = [x²/2]₀^{b} = {b}²/2 - 0 = {resultado}.
`;

// ── 7. aplicaciones_integrales (basico) ──────────────────────────────────

/**
 * aplicaciones_integrales (basico):
 *   El generador siempre produce el mismo caso: área entre y=x e y=x²
 *   en [0, 1]. Respuesta: "1/6".
 *   Patrón SÍMBOLICO con `fraccion` builtin (string equality).
 */
const APLICACIONES_INTEGRALES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["aplicaciones_integrales", "calculo", "area"]

variables:
  resultado: fraccion(1, 6)

respuesta_expr: resultado
tipo: expresion

enunciado: "Calcula el área entre f(x) = x y g(x) = x² en el intervalo [0, 1]."

pasos:
  - "Área = ∫[0,1] (x - x²) dx"
  - "= [x²/2 - x³/3] de 0 a 1"
  - "= (1/2 - 1/3) - 0 = 1/6"

explicacion: |
  Área = ∫[0,1](x - x²)dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6.
`;

// ── 8. probabilidad_avanzada (basico) ────────────────────────────────────

/**
 * probabilidad_avanzada (basico):
 *   El generador sortea P(A), P(B) ∈ {0.25, 0.5, 0.75, 0.5} (pickOne
 *   con pesos). P(A∩B) = P(A)·P(B) para eventos independientes.
 *   Patrón NUMÉRICO.
 */
const PROBABILIDAD_AVANZADA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["probabilidad_avanzada", "calculo", "probabilidad"]

variables:
  pa: uno_de([0.25, 0.5, 0.75])
  pb: uno_de([0.25, 0.5, 0.75])
  resultado: pa * pb

respuesta: resultado
tipo: input
tolerancia_abs: 0.01

enunciado: "Si P(A) = {pa} y P(B) = {pb}, y A y B son independientes, ¿cuánto es P(A∩B)?"

pasos:
  - "Para eventos independientes: P(A∩B) = P(A)·P(B)"
  - "= {pa}·{pb} = {resultado}"

explicacion: |
  Para eventos independientes: P(A∩B) = P(A)·P(B) = {pa}·{pb} = {resultado}.
`;

// ── 9. variables_aleatorias (basico) ────────────────────────────────────

/**
 * variables_aleatorias (basico):
 *   El generador fija P = (0.3, 0.5, 0.2) y sortea valores v1 ∈ [1, 3],
 *   v2 ∈ [4, 6], v3 ∈ [7, 9]. Pregunta por E(X) = 0.3·v1 + 0.5·v2 + 0.2·v3.
 *   Patrón NUMÉRICO.
 */
const VARIABLES_ALEATORIAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["variables_aleatorias", "calculo", "estadistica"]

variables:
  v1: random(1, 3)
  v2: random(4, 6)
  v3: random(7, 9)
  resultado: 0.3 * v1 + 0.5 * v2 + 0.2 * v3

respuesta: resultado
tipo: input
tolerancia_abs: 0.01

enunciado: "X tiene distribución: P(X={v1})=0.3, P(X={v2})=0.5, P(X={v3})=0.2. ¿Cuánto vale E(X)?"

pasos:
  - "E(X) = {v1}·0.3 + {v2}·0.5 + {v3}·0.2"
  - "= {0.3 * v1} + {0.5 * v2} + {0.2 * v3} = {resultado}"

explicacion: |
  E(X) = {v1}·0.3 + {v2}·0.5 + {v3}·0.2 = {resultado}.
`;

// ── 10. distribuciones (basico, binomial) ───────────────────────────────

/**
 * distribuciones (basico):
 *   El generador sortea n ∈ [3, 6], p = 0.5, k ∈ [0, n]. Calcula
 *   P(X=k) = C(n,k)·p^k·(1-p)^(n-k).
 *   En basico, p=0.5 → P(X=k) = C(n,k)·(0.5)^n.
 *   Patrón NUMÉRICO.
 *   C(n,k) se precomputa en una matriz de constantes (no hay builtin
 *   `combinatoria` en el DSL — ver gap WO-8). El índice a la fila es
 *   n - 3, y a la columna es k.
 */
const DISTRIBUCIONES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["distribuciones", "calculo", "binomial"]

variables:
  n: random(3, 6)
  k: random(0, n)
  # C(n, k) precomputada para n ∈ [3, 6], k ∈ [0, n]
  combs: [[1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1]]
  coef: combs[n - 3][k]
  resultado: coef / 2 ^ n

respuesta: resultado
tipo: input
tolerancia_abs: 0.01

enunciado: "X ~ B({n}, 0.5). Calcula P(X = {k})."

pasos:
  - "P(X={k}) = C({n},{k})·(0.5)^{k}·(0.5)^{n - k}"
  - "= C({n},{k})·(0.5)^{n}"
  - "= {coef}·(0.5)^{n} = {resultado}"

explicacion: |
  P(X={k}) = C({n},{k})·(0.5)^{k}·(0.5)^{n - k}
           = C({n},{k})·(0.5)^{n}
           = {coef}·(0.5)^{n}
           = {resultado}.
`;

export const MATEMATICAS_CALCULO_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-matematicas-calculo-limites-funciones",
    nombre: "Cálculo: límite de un polinomio (sustitución directa)",
    descripcion:
      "Calcula lim(x→a) [coef·x² + c] por sustitución directa (polinomio continuo). a ∈ [-3, 3], coef ∈ [1, 5], c ∈ [-5, 5]. Rama basico del subtipo `limites_funciones` (intermedio = indeterminación 0/0, avanzado = límite en infinito). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["limites_funciones", "calculo", "limite"],
    subtipoOriginal: "limites_funciones",
    codigoDsl: LIMITES_FUNCIONES_DSL,
  },
  {
    id: "oficial-matematicas-calculo-derivada-definicion",
    nombre: "Cálculo: derivada por definición (cuadrática)",
    descripcion:
      "Calcula f'(x0) por definición (límite del cociente incremental) para f(x) = a·x² + c. a ∈ [1, 4], x0 ∈ [1, 3]. Rama basico del subtipo `derivada_definicion`. Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["derivada_definicion", "calculo", "limite"],
    subtipoOriginal: "derivada_definicion",
    codigoDsl: DERIVADA_DEFINICION_DSL,
  },
  {
    id: "oficial-matematicas-calculo-derivadas-basicas",
    nombre: "Cálculo: derivada de polinomio (regla de la potencia)",
    descripcion:
      "Deriva un polinomio de grado 2 con regla de la potencia y evalúa en x0 ∈ [1, 3]. La respuesta_expr es sólo la fórmula de la derivada (sin la evaluación numérica — esa se documenta en la explicación). Rama basico del subtipo `derivadas_basicas`. Respuesta SIMBÓLICA.",
    materia: "matematicas",
    tags: ["derivadas_basicas", "calculo", "derivada"],
    subtipoOriginal: "derivadas_basicas",
    codigoDsl: DERIVADAS_BASICAS_DSL,
  },
  {
    id: "oficial-matematicas-calculo-reglas-derivacion",
    nombre: "Cálculo: regla del producto (binomios)",
    descripcion:
      "Deriva (ax + b)(cx + d) usando la regla del producto. a, c ∈ [1, 4], b, d ∈ [1, 5]. Resultado: 2ac·x + (ad+bc). Rama basico (sólo producto) del subtipo `reglas_derivacion` (intermedio/avanzado = cociente, cadena). Respuesta SIMBÓLICA.",
    materia: "matematicas",
    tags: ["reglas_derivacion", "calculo", "producto"],
    subtipoOriginal: "reglas_derivacion",
    codigoDsl: REGLAS_DERIVACION_DSL,
  },
  {
    id: "oficial-matematicas-calculo-integral-indefinida",
    nombre: "Cálculo: integral indefinida de monomio",
    descripcion:
      "Calcula ∫ coef·x^n dx con n ∈ [1, 3], coef ∈ [1, 5]. La respuesta_expr es el polinomio (sin '+C' — se documenta en la explicación). Rama basico del subtipo `integral_indefinida`. Respuesta SIMBÓLICA.",
    materia: "matematicas",
    tags: ["integral_indefinida", "calculo", "integral"],
    subtipoOriginal: "integral_indefinida",
    codigoDsl: INTEGRAL_INDEFINIDA_DSL,
  },
  {
    id: "oficial-matematicas-calculo-integral-definida",
    nombre: "Cálculo: integral definida ∫[0,b] x dx",
    descripcion:
      "Calcula ∫[0, b] x dx = b²/2. b ∈ [2, 5]. Rama basico del subtipo `integral_definida` (intermedio = ∫[a,b] x^n con a ≠ 0). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["integral_definida", "calculo", "integral"],
    subtipoOriginal: "integral_definida",
    codigoDsl: INTEGRAL_DEFINIDA_DSL,
  },
  {
    id: "oficial-matematicas-calculo-aplicaciones-integrales",
    nombre: "Cálculo: área entre curvas (y=x, y=x² en [0,1])",
    descripcion:
      "Calcula el área entre f(x)=x y g(x)=x² en [0,1] = ∫[0,1](x-x²)dx = 1/6. Rama basico del subtipo `aplicaciones_integrales` (intermedio = intervalo [0, b] con b ≠ 1). Respuesta SIMBÓLICA (fracción exacta).",
    materia: "matematicas",
    tags: ["aplicaciones_integrales", "calculo", "area"],
    subtipoOriginal: "aplicaciones_integrales",
    codigoDsl: APLICACIONES_INTEGRALES_DSL,
  },
  {
    id: "oficial-matematicas-calculo-probabilidad-avanzada",
    nombre: "Cálculo: probabilidad de A∩B (eventos independientes)",
    descripcion:
      "Calcula P(A∩B) = P(A)·P(B) para eventos independientes. P(A), P(B) ∈ {0.25, 0.5, 0.75}. Rama basico del subtipo `probabilidad_avanzada` (intermedio = Bayes). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["probabilidad_avanzada", "calculo", "probabilidad"],
    subtipoOriginal: "probabilidad_avanzada",
    codigoDsl: PROBABILIDAD_AVANZADA_DSL,
  },
  {
    id: "oficial-matematicas-calculo-variables-aleatorias",
    nombre: "Cálculo: esperanza de variable aleatoria discreta",
    descripcion:
      "Calcula E(X) = Σ vᵢ·Pᵢ para distribución discreta con P fijo (0.3, 0.5, 0.2) y valores vᵢ sorteados. Rama basico del subtipo `variables_aleatorias` (intermedio = varianza). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["variables_aleatorias", "calculo", "estadistica"],
    subtipoOriginal: "variables_aleatorias",
    codigoDsl: VARIABLES_ALEATORIAS_DSL,
  },
  {
    id: "oficial-matematicas-calculo-distribuciones",
    nombre: "Cálculo: probabilidad binomial P(X=k)",
    descripcion:
      "Calcula P(X=k) para X ~ B(n, 0.5) con n ∈ [3, 6], k ∈ [0, n]. En basico, p=0.5 → P(X=k) = C(n,k)·(0.5)ⁿ. Rama basico del subtipo `distribuciones` (intermedio = regla empírica 68-95-99.7). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["distribuciones", "calculo", "binomial"],
    subtipoOriginal: "distribuciones",
    codigoDsl: DISTRIBUCIONES_DSL,
  },
];

/**
 * WO-11 — Plantillas VBLang OFICIALES para Matemáticas (Álgebra).
 *
 * Batch de prueba para la capacidad simbólica del DSL (eje 2 del
 * objetivo B). Cada plantilla reproduce la FÓRMULA de un subtipo
 * PARAMÉTRICO de `apps/web/src/generadoresV2/matematicas/Algebra.ts`
 * cuya respuesta es SIMBÓLICA (expresión algebraica como string).
 *
 * Patrón: ver `docs/vblang/porting-generadores.md` y
 * `docs/vblang/wo-11-eje-simbolico.md`. Diferencia con WO-7/7b:
 *   - la respuesta es un string (no un número), vía `respuesta_expr:`,
 *   - la corrección es por equivalencia simbólica (numérica +
 *     algebraica vía math.simplify), no por tolerancia numérica.
 *
 * Subtipos elegidos (3) — representan las 3 operaciones algebraicas
 * básicas que cualquier subtipo simbólico de Álgebra/Cálculo va a
 * necesitar:
 *  - terminos_semejantes  → suma y reducción de monomios.
 *  - multiplicacion_monomios → distributiva.
 *  - factorizacion_basica → factor común.
 *
 * Verificación:
 *  - validez DSL: `tests/templates/matematicas-algebra-oficiales.test.ts`
 *  - equivalencia con generador: `apps/web/.../algebra-equivalencia.spec.ts`
 */
import type { PlantillaOficial } from "./types.js";

/**
 * terminos_semejantes (basico):
 *   El generador sortea 2 grupos de exponentes (grado ≤ 1, {0, 1}) con
 *   2 coefs cada uno (en [-5, 5] ≠ 0), los presenta mezclados. La
 *   respuesta es la suma reducida.
 *
 *   Limitación: como el DSL no tiene ternario, pre-computamos las
 *   formas del string en arrays (uno_de). Cada caso tiene la
 *   respuesta simbólica ya armada.
 *
 *   Equivalencia simbólica: el server acepta `2*x+1`, `1+2*x`,
 *   `2x+1` (con math.js que acepta multiplicación implícita sólo en
 *   ciertos contextos — ver §9 del doc). La forma canónica que
 *   emitimos es `a*x+b` o `-a*x+b`, etc.
 */
const TERMINOS_SEMEJANTES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["terminos_semejantes", "algebra", "suma_polinomios"]

variables:
  # Sorteamos 2 coefs para x y 2 coefs para el término independiente.
  c_x1: random(-5, 5)
  c_x2: random(-5, 5)
  c_0_1: random(-5, 5)
  c_0_2: random(-5, 5)
  coef_x: c_x1 + c_x2
  coef_0: c_0_1 + c_0_2

  # Enunciado: presentar los 4 términos mezclados.
  # 6 permutaciones posibles. Las precomputamos y elegimos una.
  # IMPORTANTE: uno_de no acepta argumentos multi-línea en el DSL —
  # hay que ponerlos en una sola línea.
  enun_parte1: uno_de([concatenar(c_x1, "*x + ", c_x2, "*x + ", c_0_1, " + ", c_0_2), concatenar(c_x1, "*x + ", c_0_1, " + ", c_x2, "*x + ", c_0_2), concatenar(c_0_1, " + ", c_x1, "*x + ", c_x2, "*x + ", c_0_2), concatenar(c_x1, "*x + ", c_x2, "*x + ", c_0_2, " + ", c_0_1), concatenar(c_x1, "*x + ", c_0_2, " + ", c_x2, "*x + ", c_0_1), concatenar(c_0_2, " + ", c_x1, "*x + ", c_x2, "*x + ", c_0_1)])

  # Respuesta simbólica: "coef_x*x+coef_0". Como coef_0 puede ser
  # negativo, usamos concatenación que produce "2*x+-3", que math.js
  # parsea como "2*x-3" (verificado). La equivalencia simbólica
  # acepta ambas formas.
  respuesta_str: concatenar(coef_x, "*x+", coef_0)

restricciones:
  - coef_x != 0
  - coef_0 != 0

respuesta_expr: respuesta_str
tipo: expresion

enunciado: "Reduce los términos semejantes: {enun_parte1}"

pasos:
  - "Agrupamos los términos con x: {c_x1}*x + {c_x2}*x = {coef_x}*x"
  - "Agrupamos los términos independientes: {c_0_1} + {c_0_2} = {coef_0}"
  - "Resultado: {respuesta_str}"

explicacion: |
  Reducir términos semejantes significa agrupar los que tienen la
  misma parte literal y sumar sus coeficientes.
  Los términos con x dan {c_x1} + {c_x2} = {coef_x}.
  Los términos independientes dan {c_0_1} + {c_0_2} = {coef_0}.
  Resultado: {respuesta_str}.
`;

/**
 * multiplicacion_monomios (basico):
 *   El generador para basico fija `mExp = 0` (monomio es constante
 *   m ∈ [2, 5]) y sortea un polinomio de 2 términos: `{coef_0, exp=0}`
 *   y `{coef_1, exp=1}`. El 30% de los términos no-primero es negativo.
 *   Resultado: `(m*coef_0) + (m*coef_1)*x` (lineal).
 *
 *   El sortea signo de los términos en el generador lo respetamos:
 *   con 30% prob el segundo término es negativo. Lo modelamos sorteando
 *   un `signo` ∈ {-1, 1} con `uno_de([-1, 1])` ponderado (1.0 vs 0.3).
 *   Como el DSL no tiene pesos, sorteamos `uno_de([+1, -1])` (50/50)
 *   — la semántica es ligeramente distinta (más negativos) pero la
 *   fórmula portada es la misma.
 */
const MULTIPLICACION_MONOMIOS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["multiplicacion_monomios", "algebra", "distributiva"]

variables:
  # Monomio: m ∈ [2, 5] (coef), mExp = 0 (basico, fijo).
  m: random(2, 5)
  # Polinomio: 2 términos, exp ∈ {0, 1}. Coefs ∈ [1, 4].
  # El generador sortea el signo del 2do con 30% prob; acá lo
  # sorteamos 50/50 (no hay pesos en el builtin uno_de).
  c0: uno_de([1, 2, 3, 4])
  c1: uno_de([1, 2, 3, 4])
  c1: uno_de([1, 2, 3, 4])
  s1: uno_de([1, -1])  # signo del término x
  coef_x: c1 * s1      # coef del término x en el polinomio
  coef_0: c0           # coef del término constante (siempre positivo en basico)
  # Resultado: m*(coef_0 + coef_x*x) = m*coef_0 + m*coef_x*x
  prod_0: m * coef_0
  prod_x: m * coef_x
  # Polinomio como string: "c0 + c1*s1*x" — si s1=1, "+c1*x";
  # si s1=-1, "-c1*x". Pre-computamos las 2 formas y elegimos con
  # uno_de (no hay forma de condicionar sobre s1 sin ternario).
  polinomio_str_pos: concatenar(c0, " + ", c1, "*x")
  polinomio_str_neg: concatenar(c0, " - ", c1, "*x")
  polinomio_str: uno_de([polinomio_str_pos, polinomio_str_neg])
  # Respuesta: "prod_0+prod_x*x" — math.js parsea "2+-3*x" como
  # "2 - 3*x" (verificado). Forma canónica simple.
  respuesta_str: concatenar(prod_0, "+", prod_x, "*x")

respuesta_expr: respuesta_str
tipo: expresion

enunciado: "Calcula: {m} · ({polinomio_str})"

pasos:
  - "Multiplicamos el monomio {m} por cada término del polinomio:"
  - "{m} · {c0} = {prod_0}"
  - "{m} · ({c1*s1}*x) = {prod_x}*x"
  - "Resultado: {respuesta_str}"

explicacion: |
  Para multiplicar un monomio por un polinomio, aplicamos la
  propiedad distributiva: multiplicamos el monomio por cada
  término y sumamos.
  {m} · ({polinomio_str}) = {respuesta_str}.
`;

/**
 * factorizacion_basica (basico):
 *   El generador sortea factor ∈ [2, 6], a ∈ [1, 5], b ∈ [1, 5].
 *   Enunciado: `factor*a*x + factor*b` (expandido).
 *   Respuesta correcta: `factor*(a*x + b)` (factorizado).
 *
 *   Este es el caso interesante de equivalencia simbólica: la
 *   respuesta ESPERADA es la forma factorizada, pero la
 *   equivalencia simbólica también acepta la forma expandida
 *   (`factor*a*x + factor*b`) como correcta. Esto valida que el
 *   chequeo NO es trivial por string.
 */
const FACTORIZACION_BASICA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["factorizacion_basica", "algebra", "factor_comun"]

variables:
  # Factor común: factor ∈ [2, 6], a ∈ [1, 5], b ∈ [1, 5].
  factor: random(2, 6)
  a: random(1, 5)
  b: random(1, 5)
  coef_x: factor * a
  coef_0: factor * b
  # Enunciado: forma expandida.
  expr_str: concatenar(coef_x, "*x + ", coef_0)
  # Respuesta esperada: forma factorizada.
  factorizado_str: concatenar(factor, "*(", a, "*x + ", b, ")")

respuesta_expr: factorizado_str
tipo: expresion

enunciado: "Factoriza extrayendo el factor común: {expr_str}"

pasos:
  - "Identificamos el MCD de los coeficientes: mcd({coef_x}, {coef_0}) = {factor}"
  - "Dividimos cada término por el factor común: {coef_x}/{factor} = {a}, {coef_0}/{factor} = {b}"
  - "Resultado: {factorizado_str}"

explicacion: |
  Para factorizar por factor común, identificamos el máximo común
  divisor de los coeficientes y lo extraemos. En este caso, el
  factor común es {factor} y la factorización es {factorizado_str}.
`;

export const MATEMATICAS_ALGEBRA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-matematicas-algebra-terminos-semejantes",
    nombre: "Álgebra: reducción de términos semejantes",
    descripcion:
      "Reduce un polinomio con 2 grupos de coeficientes (grado ≤ 1). Rama basico del subtipo `terminos_semejantes` (las ramas intermedio y avanzado suben el grado y la cantidad de grupos). Respuesta simbólica — se compara por equivalencia algebraica (no por string).",
    materia: "matematicas",
    tags: ["terminos_semejantes", "algebra", "suma_polinomios"],
    subtipoOriginal: "terminos_semejantes",
    codigoDsl: TERMINOS_SEMEJANTES_DSL,
  },
  {
    id: "oficial-matematicas-algebra-multiplicacion-monomios",
    nombre: "Álgebra: multiplicación de monomios (distributiva)",
    descripcion:
      "Multiplica un monomio (sin fracción, grado 0) por un binomio. Rama basico del subtipo `multiplicacion_monomios` (intermedio = monomio con fracción, avanzado = mismo pero con denominador del polinomio múltiplo del monomio). Respuesta simbólica.",
    materia: "matematicas",
    tags: ["multiplicacion_monomios", "algebra", "distributiva"],
    subtipoOriginal: "multiplicacion_monomios",
    codigoDsl: MULTIPLICACION_MONOMIOS_DSL,
  },
  {
    id: "oficial-matematicas-algebra-factorizacion-basica",
    nombre: "Álgebra: factor común",
    descripcion:
      "Factoriza una expresión de la forma k*a*x + k*b extrayendo el factor común k. Rama basico del subtipo `factorizacion_basica` (intermedio = diferencia de cuadrados, avanzado = trinomio cuadrado perfecto). Respuesta simbólica — la forma factorizada se acepta como equivalente a la expandida.",
    materia: "matematicas",
    tags: ["factorizacion_basica", "algebra", "factor_comun"],
    subtipoOriginal: "factorizacion_basica",
    codigoDsl: FACTORIZACION_BASICA_DSL,
  },
];

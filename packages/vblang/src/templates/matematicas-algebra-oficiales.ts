/**
 * WO-11 / WO-11b — Plantillas VBLang OFICIALES para Matemáticas (Álgebra).
 *
 * Cada plantilla reproduce la FÓRMULA de un subtipo PARAMÉTRICO de
 * `apps/web/src/generadoresV2/matematicas/Algebra.ts` cuya respuesta es
 * una EXPRESIÓN algebraica (string) o un valor NUMÉRICO.
 *
 * Patrón: ver `docs/vblang/porting-generadores.md` y
 * `docs/vblang/wo-11-eje-simbolico.md`. Diferencia con WO-7/7b:
 *   - respuesta simbólica: string vía `respuesta_expr:` + `tipo: expresion`
 *     y corrección por equivalencia simbólica (`sonEquivalentes`).
 *   - respuesta numérica: `respuesta:` + `tipo: input` + `tolerancia_abs:`.
 *
 * WO-11 (3 subtipos semilla, todas basico, simbólicas):
 *  - terminos_semejantes  → suma y reducción de monomios.
 *  - multiplicacion_monomios → distributiva.
 *  - factorizacion_basica → factor común.
 *
 * WO-11b (9 subtipos, todas basico, mezcla simbólica + numérica):
 *  - suma_resta_polinomios    (simb.)
 *  - multiplicacion_polinomios (simb.)
 *  - productos_notables       (simb.)
 *  - lenguaje_algebraico      (simb.)
 *  - racionales_simples       (simb.)
 *  - division_polinomios      (simb.)
 *  - simplificacion_algebraica (simb., caso "producto")
 *  - evaluacion_expresiones   (num.)
 *  - grado_coeficientes       (num.)
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

// ── WO-11b: 9 subtipos adicionales (mezcla simbólica + numérica) ──────

/**
 * suma_resta_polinomios (basico):
 *   El generador sortea 2 polinomios lineales con coefs en [-5, 5] \ {0}:
 *   p1 = c0 + c1*x, p2 = d0 + d1*x. Sortea 50/50 si es suma o resta.
 *   Resultado: (c0 + s*d0) + (c1 + s*d1)*x, con s = +1 (suma) o -1 (resta).
 *
 *   Como el DSL no tiene ternario, usamos el truco del array + índice:
 *   `ops: ["+", "−"]` y `op: ops[esResta]`. El `esResta` se sortea con
 *   `uno_de([0, 1])` (0 = suma, 1 = resta) y la misma variable se usa
 *   para aritmética: `coef_x = c1 + (1 - 2*esResta) * d1`.
 */
const SUMA_RESTA_POLINOMIOS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["suma_resta_polinomios", "algebra", "polinomios"]

variables:
  c0: random(-5, 5)
  c1: random(-5, 5)
  d0: random(-5, 5)
  d1: random(-5, 5)
  esResta: uno_de([0, 1])
  ops: ["+", "−"]
  op: ops[esResta]
  # signo = +1 si esResta=0 (suma), -1 si esResta=1 (resta)
  coef_x: c1 + (1 - 2 * esResta) * d1
  coef_0: c0 + (1 - 2 * esResta) * d0
  p1_str: concatenar(c1, "*x + ", c0)
  p2_str: concatenar(d1, "*x + ", d0)
  respuesta_str: concatenar(coef_x, "*x+", coef_0)

restricciones:
  - c0 != 0
  - c1 != 0
  - d0 != 0
  - d1 != 0

respuesta_expr: respuesta_str
tipo: expresion

enunciado: "Calcula: ({p1_str}) {op} ({p2_str})"

pasos:
  - "Agrupamos términos con x: {c1}*x {op} {d1}*x = {coef_x}*x"
  - "Agrupamos constantes: {c0} {op} {d0} = {coef_0}"
  - "Resultado: {respuesta_str}"

explicacion: |
  Para sumar o restar polinomios, agrupamos los términos semejantes.
  Términos con x: {c1} {op} {d1} = {coef_x}. Constantes: {c0} {op} {d0} = {coef_0}.
  Resultado: {respuesta_str}.
`;

/**
 * multiplicacion_polinomios (basico):
 *   El generador sortea 2 polinomios de grado 1 con coefs en [-4, 4] \ {0}:
 *   p1 = c0 + c1*x, p2 = d0 + d1*x. Producto: (c0*d0) + (c0*d1+c1*d0)*x +
 *   c1*d1*x². Coefs en [-4,4], forzando ≠ 0 con `|| 1`.
 */
const MULTIPLICACION_POLINOMIOS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["multiplicacion_polinomios", "algebra", "producto"]

variables:
  c0: random(-4, 4)
  c1: random(-4, 4)
  d0: random(-4, 4)
  d1: random(-4, 4)
  coef_xx: c1 * d1
  coef_x: c0 * d1 + c1 * d0
  coef_0: c0 * d0
  p1_str: concatenar(c1, "*x + ", c0)
  p2_str: concatenar(d1, "*x + ", d0)
  # Forma canónica ordenada por grado descendente. Si coef_xx == 0
  # el resultado es solo lineal, pero la forma "{coef_xx}*x^2+..."
  # sigue siendo equivalente (math.simplify la colapsa).
  respuesta_str: concatenar(coef_xx, "*x^2+", coef_x, "*x+", coef_0)

restricciones:
  - c0 != 0
  - c1 != 0
  - d0 != 0
  - d1 != 0

respuesta_expr: respuesta_str
tipo: expresion

enunciado: "Calcula el producto: ({p1_str}) · ({p2_str})"

pasos:
  - "Aplicamos distributiva:"
  - "{c0}·{d0} = {coef_0}"
  - "{c0}·{d1}*x + {c1}*x·{d0} = {coef_x}*x"
  - "{c1}*x·{d1}*x = {coef_xx}*x^2"
  - "Resultado: {respuesta_str}"

explicacion: |
  Multiplicar dos polinomios aplica la propiedad distributiva: cada
  término de p1 multiplica cada término de p2.
  {c0}·{d0} = {coef_0}, {c0}·{d1}+{c1}·{d0} = {coef_x}, {c1}·{d1} = {coef_xx}.
  Resultado: {respuesta_str}.
`;

/**
 * productos_notables (basico, cuadrado de la suma):
 *   El generador sortea b ∈ [2, 8] y arma (x + b)² = x² + 2bx + b².
 *   En basico siempre pide EXPANDIR. La forma factorizada "(x + b)^2"
 *   también se acepta como equivalente.
 */
const PRODUCTOS_NOTABLES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["productos_notables", "algebra", "cuadrado_binomio"]

variables:
  b: random(2, 8)
  coef_x: 2 * b
  coef_0: b * b
  # Forma canónica expandida (lo que el generador produce).
  expandida_str: concatenar("x^2+", coef_x, "*x+", coef_0)

respuesta_expr: expandida_str
tipo: expresion

enunciado: "Expande: (x + {b})²"

pasos:
  - "(x + b)² = x² + 2·b·x + b²"
  - "Con b = {b}: x² + {coef_x}·x + {coef_0}"

explicacion: |
  El cuadrado de un binomio (x + b)² = x² + 2bx + b².
  Con b = {b}: resultado {expandida_str}.
`;

/**
 * lenguaje_algebraico (basico):
 *   El generador sortea una frase verbal de un pool pre-definido y arma
 *   4 opciones. La correcta es la expresión algebraica. La respuesta
 *   simbólica se compara por equivalencia con `sonEquivalentes` (así
 *   "2x" ≡ "x*2" y "x + 5" ≡ "5 + x").
 */
const LENGUAJE_ALGEBRAICO_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["lenguaje_algebraico", "algebra", "traduccion"]

variables:
  casos: [{ verbal: "el doble de x", expr: "2*x" }, { verbal: "la mitad de x", expr: "x/2" }, { verbal: "cinco más x", expr: "x+5" }, { verbal: "x menos tres", expr: "x-3" }, { verbal: "el triple de x", expr: "3*x" }, { verbal: "x más diez", expr: "x+10" }, { verbal: "el cuádruplo de x", expr: "4*x" }]
  caso: uno_de(casos)

respuesta_expr: caso.expr
tipo: expresion

enunciado: "Traduce la expresión verbal al lenguaje algebraico: «{caso.verbal}»"

pasos:
  - "Identificamos la operación: {caso.verbal}"
  - "Expresión algebraica: {caso.expr}"

explicacion: |
  La frase "{caso.verbal}" se traduce como {caso.expr}.
`;

/**
 * racionales_simples (basico):
 *   El generador sortea k ∈ [2, 5], a ∈ [1, 5], b ∈ [2, 5]. El enunciado
 *   es "{k*a}x / {k*b}" (fracción algebraica con factor común). La
 *   respuesta es "{a/b}x" o "{a}x/{b}" según si b == 1 (no aplica acá
 *   porque b ∈ [2, 5]).
 *
 *   OJO: el generador produce "{a}x/{b}" SIN simplificar la fracción
 *   a/b (no usa mcd). Pero la equivalencia simbólica acepta ambas
 *   formas: "ax/b" ≡ "(a/g)x/(b/g)".
 */
const RACIONALES_SIMPLES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["racionales_simples", "algebra", "fracciones_algebraicas"]

variables:
  k: random(2, 5)
  a: random(1, 5)
  b: random(2, 5)
  num: k * a
  den: k * b
  # Forma simplificada: ax / b (sin simplificar a/b).
  resp_str: concatenar(a, "*x/", b)

respuesta_expr: resp_str
tipo: expresion

enunciado: "Simplifica la fracción algebraica: {num}x / {den}"

pasos:
  - "Factorizamos numerador y denominador: {num} = {k}·{a}, {den} = {k}·{b}"
  - "Cancelamos el factor común {k}: {a}·x / {b}"

explicacion: |
  Dividimos numerador y denominador por el factor común {k}:
  ({num}·x) / {den} = ({a}·x) / {b}.
  Resultado: {resp_str}.
`;

/**
 * division_polinomios (basico):
 *   El generador sortea r ∈ [-4, 4] \ {0}, qa ∈ [1, 4], qb ∈ [-5, 5],
 *   rem = 0 (basico, sin resto). Construye el dividendo
 *   (x - r)(qa*x + qb) y pregunta por el cociente. Resultado: qa*x + qb.
 *
 *   El dividendo es: qa*x² + (qb - qa*r)*x + (-qb*r).
 */
const DIVISION_POLINOMIOS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["division_polinomios", "algebra", "division"]

variables:
  r: random(-4, 4)
  qa: random(1, 4)
  qb: random(-5, 5)
  coef_xx: qa
  coef_x: qb - qa * r
  coef_0: -qb * r
  # Usamos concatenar con "+" siempre — math.js parsea "x-2", "x--3",
  # "5*x^2+-3*x+2" correctamente. Sin ternario.
  divisor_str: concatenar("x-", r)
  dividendo_str: concatenar(coef_xx, "*x^2+", coef_x, "*x+", coef_0)
  cociente_str: concatenar(qa, "*x+", qb)

restricciones:
  - r != 0

respuesta_expr: cociente_str
tipo: expresion

enunciado: "Divide: ({dividendo_str}) ÷ ({divisor_str}). ¿Cuál es el cociente?"

pasos:
  - "El dividendo se factoriza como ({divisor_str})·({cociente_str})"
  - "Cociente: {cociente_str}"

explicacion: |
  El dividendo ({dividendo_str}) = ({divisor_str})·({cociente_str}).
  Por lo tanto el cociente de la división es {cociente_str}.
`;

/**
 * simplificacion_algebraica (basico, "producto" de potencias):
 *   El generador sortea m, n ∈ [2, 5] y pide simplificar x^m · x^n.
 *   Resultado: x^(m+n). En esta rama cubrimos solo "producto" (la más
 *   representativa); las otras 3 ramas (cociente, potencia, raíz) son
 *   continuación mecánica.
 *
 *   OJO: math.js representa "x^5" como "x^5" (no como "x**5"). El CAS
 *   acepta "x^5", "x**5", "(x)^5" como equivalentes.
 */
const SIMPLIFICACION_ALGEBRAICA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["simplificacion_algebraica", "algebra", "potencias"]

variables:
  m: random(2, 5)
  n: random(2, 5)
  expo: m + n
  resp_str: concatenar("x^", expo)

respuesta_expr: resp_str
tipo: expresion

enunciado: "Simplifica: x^{m} · x^{n}"

pasos:
  - "Por la ley del producto: x^m · x^n = x^(m+n)"
  - "Con m = {m}, n = {n}: x^{expo}"

explicacion: |
  Por la ley del producto de potencias de igual base, x^m · x^n = x^(m+n).
  Con m = {m} y n = {n}: x^({m}) · x^({n}) = x^{expo}.
`;

/**
 * evaluacion_expresiones (basico):
 *   El generador sortea 2 términos con exps únicos ∈ {0, 1} y coefs en
 *   [-4, 4] (con `|| 1` para no cero), más un x ∈ [-3, 3] \ {0}.
 *   La respuesta es el valor numérico del polinomio evaluado en x.
 *   Patrón NUMÉRICO: `tipo: input` + `tolerancia_abs: 0`.
 */
const EVALUACION_EXPRESIONES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["evaluacion_expresiones", "algebra", "evaluacion"]

variables:
  c0: random(-4, 4)
  c1: random(-4, 4)
  x: random(-3, 3)
  resultado: c0 + c1 * x
  pol_str: concatenar(c0, " + ", c1, "*x")

restricciones:
  - c0 != 0
  - c1 != 0
  - x != 0

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Evalúa la expresión {pol_str} cuando x = {x}"

pasos:
  - "Sustituimos x = {x} en {pol_str}:"
  - "{c0} + {c1}·({x}) = {c0} + {c1*x} = {resultado}"

explicacion: |
  Sustituyendo x = {x} en {pol_str} se obtiene {c0} + {c1}·{x} = {resultado}.
`;

/**
 * grado_coeficientes (basico):
 *   El generador sortea 2 términos con exps únicos ∈ {0, 1, 2} y coefs
 *   en [-8, 8] \ {0}, y sortea UNO de 3 aspectos a preguntar:
 *   grado, coeficiente_principal, término_independiente. La respuesta
 *   es numérica.
 *
 *   Como el DSL no tiene ternario, sorteamos el aspecto con `uno_de`
 *   y usamos el truco del array indexado: `aspectos[aspecto_idx]`
 *   elige el nombre, y pre-computamos los 3 valores en un array.
 */
const GRADO_COEFICIENTES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["grado_coeficientes", "algebra", "polinomio"]

variables:
  c0: random(-8, 8)
  c1: random(-8, 8)
  grado: 1
  coef_principal: c1
  termino_ind: c0
  # Sorteamos qué aspecto preguntar (0=grado, 1=coef_principal, 2=termino_ind).
  aspectos_nombre: ["grado", "coeficiente_principal", "termino_independiente"]
  valores: [grado, coef_principal, termino_ind]
  aspecto_idx: uno_de([0, 1, 2])
  aspecto: aspectos_nombre[aspecto_idx]
  resultado: valores[aspecto_idx]
  pol_str: concatenar(c1, "*x + ", c0)

restricciones:
  - c0 != 0
  - c1 != 0

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Para el polinomio {pol_str}: ¿cuál es {aspecto}?"

pasos:
  - "Polinomio: {pol_str}"
  - "Grado: 1 (mayor exponente)"
  - "Coeficiente principal: {coef_principal}"
  - "Término independiente: {termino_ind}"

explicacion: |
  El polinomio {pol_str} tiene grado 1, coeficiente principal
  {coef_principal} y término independiente {termino_ind}.
`;

// ── WO-11c: ecuaciones, funciones, recta ─────────────────────────────────

/**
 * ecuaciones_lineales (basico):
 *   El generador sortea a ∈ [1, 5], xVal ∈ [1, 10], b ∈ [0, 10].
 *   c = a*xVal + b. Enunciado: "Resuelve: ax + b = c". Respuesta: xVal.
 *   Mecanismo: NUMÉRICO (la solución es un entero).
 */
const ECUACIONES_LINEALES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["ecuaciones_lineales", "algebra", "ecuaciones"]

variables:
  a: random(1, 5)
  xVal: random(1, 10)
  b: random(0, 10)
  c: a * xVal + b

respuesta: xVal
tipo: input
tolerancia_abs: 0

enunciado: "Resuelve: {a}x + {b} = {c}"

pasos:
  - "{a}x = {c} - {b} = {c - b}"
  - "x = {c - b}/{a} = {xVal}"

explicacion: |
  Despejamos x: {a}x = {c} - {b} = {c - b}, luego x = {c - b}/{a} = {xVal}.
`;

/**
 * ecuaciones_parametros (basico):
 *   El generador sortea solucion ∈ [1, 5], k ∈ [2, 6], c = k * solucion.
 *   Enunciado: "¿Qué valor de k hace que kx = c tenga solución x = solucion?"
 *   Respuesta: k (numérico).
 */
const ECUACIONES_PARAMETROS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["ecuaciones_parametros", "algebra", "parametros"]

variables:
  solucion: random(1, 5)
  k: random(2, 6)
  c: k * solucion

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué valor de k hace que kx = {c} tenga solución x = {solucion}?"

pasos:
  - "Si x = {solucion}: k·{solucion} = {c}"
  - "k = {c}/{solucion} = {k}"

explicacion: |
  Sustituyendo x = {solucion} en kx = {c}: k·{solucion} = {c}, entonces k = {c}/{solucion} = {k}.
`;

/**
 * ecuaciones_fracciones (basico):
 *   El generador sortea b ∈ [1, 5], c ∈ [b+1, b+5], xVal ∈ [1, 5].
 *   a = (c - b) * xVal. Enunciado: "Resuelve: a/x + b = c (x ≠ 0)".
 *   Respuesta: xVal (numérico).
 */
const ECUACIONES_FRACCIONES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["ecuaciones_fracciones", "algebra", "fracciones"]

variables:
  b: random(1, 5)
  c: random(2, 10)
  xVal: random(1, 5)
  diff: c - b
  a: diff * xVal

restricciones:
  - diff > 0

respuesta: xVal
tipo: input
tolerancia_abs: 0

enunciado: "Resuelve: {a}/x + {b} = {c}  (x ≠ 0)"

pasos:
  - "Multiplicando por x: {a} + {b}x = {c}x"
  - "{a} = {c}x - {b}x = {diff}x"
  - "x = {a}/{diff} = {xVal}"

explicacion: |
  Multiplicando ambos lados por x: {a} + {b}x = {c}x.
  Despejando: {a} = ({c} - {b})x = {diff}x, entonces x = {a}/{diff} = {xVal}.
`;

/**
 * funciones_lineales (basico):
 *   El generador sortea m ∈ [-4, 4] \ {0}, b ∈ [-5, 5]. En basico
 *   pregunta por la ordenada al origen (y-intercept). Respuesta: b (numérico).
 */
const FUNCIONES_LINEALES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["funciones_lineales", "algebra", "funciones"]

variables:
  m: random(-4, 4)
  b: random(-5, 5)

restricciones:
  - m != 0

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "Para f(x) = {m}x + {b}, ¿cuál es la ordenada al origen?"

pasos:
  - "La ordenada al origen es f(0) = {m}·0 + {b} = {b}"

explicacion: |
  La ordenada al origen de f(x) = mx + b es el valor de f(0), que es b = {b}.
`;

/**
 * funcion_afin (basico):
 *   El generador sortea m ∈ [2, 8], b ∈ [10, 50], xPred ∈ [5, 15].
 *   Contexto de aplicación (taxi, vela). Respuesta: m*xPred + b (numérico).
 *
 *   Para simplificar (sin contextos negativos), portamos sólo la variante
 *   "taxi" (pendiente positiva): f(x) = m*x + b, resultado = m*xPred + b.
 */
const FUNCION_AFIN_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["funcion_afin", "algebra", "aplicacion"]

variables:
  m: random(2, 8)
  b: random(10, 50)
  xPred: random(5, 15)
  resultado: m * xPred + b

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Un taxi cobra una tarifa fija de {b} pesos más {m} pesos por kilómetro. Si el modelo es f(x) = {m}x + {b}, ¿cuánto cuesta un viaje de {xPred} km?"

pasos:
  - "f({xPred}) = {m}·{xPred} + {b}"
  - "= {m * xPred} + {b} = {resultado}"

explicacion: |
  Evaluamos f({xPred}) = {m}·{xPred} + {b} = {m * xPred} + {b} = {resultado}.
`;

/**
 * ecuacion_recta (basico):
 *   El generador sortea m ∈ [-4, 4] \ {0}, b ∈ [-5, 5]. Enunciado:
 *   "Escribe la ecuación de la recta con pendiente m y ordenada b".
 *   Respuesta: y = mx + b.
 *
 *   Mecanismo: SIMBÓLICO. El enunciado ya da m y b; la plantilla pide
 *   el lado derecho de "y = ..." como expresión. `sonEquivalentes`
 *   compara `m*x + b` con la respuesta del alumno (acepta reordenamientos
 *   y formas equivalentes como `b + m*x`).
 */
const ECUACION_RECTA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["ecuacion_recta", "algebra", "recta"]

variables:
  m: random(-4, 4)
  b: random(-5, 5)
  respuesta_str: concatenar(m, "*x+", b)

restricciones:
  - m != 0

respuesta_expr: respuesta_str
tipo: expresion

enunciado: "Escribe la ecuación de la recta con pendiente m = {m} y ordenada al origen b = {b}. Escribe la expresión del lado derecho de y = ..."

pasos:
  - "La forma pendiente-ordenada es y = mx + b"
  - "Con m = {m} y b = {b}: y = {respuesta_str}"

explicacion: |
  La ecuación de la recta en forma pendiente-ordenada es y = mx + b.
  Sustituyendo m = {m} y b = {b}: y = {respuesta_str}.
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
  {
    id: "oficial-matematicas-algebra-suma-resta-polinomios",
    nombre: "Álgebra: suma y resta de polinomios",
    descripcion:
      "Suma o resta dos polinomios lineales (c0 + c1*x) ± (d0 + d1*x). El generador sortea 50/50 entre suma y resta. Rama basico del subtipo `suma_resta_polinomios` (intermedio y avanzado suben el grado a 2-3). Respuesta simbólica.",
    materia: "matematicas",
    tags: ["suma_resta_polinomios", "algebra", "polinomios"],
    subtipoOriginal: "suma_resta_polinomios",
    codigoDsl: SUMA_RESTA_POLINOMIOS_DSL,
  },
  {
    id: "oficial-matematicas-algebra-multiplicacion-polinomios",
    nombre: "Álgebra: multiplicación de polinomios",
    descripcion:
      "Multiplica dos polinomios de grado 1 (binomios). El producto es un polinomio de grado 2. Rama basico del subtipo `multiplicacion_polinomios` (intermedio y avanzado suben el grado). Respuesta simbólica.",
    materia: "matematicas",
    tags: ["multiplicacion_polinomios", "algebra", "producto"],
    subtipoOriginal: "multiplicacion_polinomios",
    codigoDsl: MULTIPLICACION_POLINOMIOS_DSL,
  },
  {
    id: "oficial-matematicas-algebra-productos-notables",
    nombre: "Álgebra: cuadrado de la suma (producto notable)",
    descripcion:
      "Expande (x + b)² = x² + 2bx + b² con b ∈ [2, 8]. Rama basico del subtipo `productos_notables` (intermedio y avanzado mezclan cuadrado de la suma/resta, dif. de cuadrados y factorización; acá solo cuadrado de la suma). Respuesta simbólica.",
    materia: "matematicas",
    tags: ["productos_notables", "algebra", "cuadrado_binomio"],
    subtipoOriginal: "productos_notables",
    codigoDsl: PRODUCTOS_NOTABLES_DSL,
  },
  {
    id: "oficial-matematicas-algebra-lenguaje-algebraico",
    nombre: "Álgebra: lenguaje algebraico (traducción verbal → simbólica)",
    descripcion:
      "Traduce una frase verbal a expresión algebraica. Pool de 7 frases para basico (doble, mitad, suma/resta, triple, cuádruplo). La equivalencia simbólica acepta reordenamientos. Rama basico del subtipo `lenguaje_algebraico` (intermedio y avanzado agregan variables múltiples y potencias).",
    materia: "matematicas",
    tags: ["lenguaje_algebraico", "algebra", "traduccion"],
    subtipoOriginal: "lenguaje_algebraico",
    codigoDsl: LENGUAJE_ALGEBRAICO_DSL,
  },
  {
    id: "oficial-matematicas-algebra-racionales-simples",
    nombre: "Álgebra: simplificación de fracciones algebraicas (factor común)",
    descripcion:
      "Simplifica (k·a·x) / (k·b) cancelando el factor común k. k ∈ [2, 5], a ∈ [1, 5], b ∈ [2, 5]. Rama basico del subtipo `racionales_simples` (intermedio = dif. de cuadrados, avanzado = factor cuadrático). Respuesta simbólica.",
    materia: "matematicas",
    tags: ["racionales_simples", "algebra", "fracciones_algebraicas"],
    subtipoOriginal: "racionales_simples",
    codigoDsl: RACIONALES_SIMPLES_DSL,
  },
  {
    id: "oficial-matematicas-algebra-division-polinomios",
    nombre: "Álgebra: división de polinomios (sin resto)",
    descripcion:
      "Divide un polinomio de grado 2 entre un binomio lineal (x - r), sin resto. Cociente: qa·x + qb. Rama basico del subtipo `division_polinomios` (intermedio/avanzado = con resto). Respuesta simbólica — solo el cociente.",
    materia: "matematicas",
    tags: ["division_polinomios", "algebra", "division"],
    subtipoOriginal: "division_polinomios",
    codigoDsl: DIVISION_POLINOMIOS_DSL,
  },
  {
    id: "oficial-matematicas-algebra-simplificacion-algebraica",
    nombre: "Álgebra: simplificación (ley del producto de potencias)",
    descripcion:
      "Simplifica x^m · x^n = x^(m+n) con m, n ∈ [2, 5]. Solo rama 'producto' de la simplificación algebraica; las otras 3 (cociente, potencia de potencia, raíz) son continuación mecánica. Respuesta simbólica.",
    materia: "matematicas",
    tags: ["simplificacion_algebraica", "algebra", "potencias"],
    subtipoOriginal: "simplificacion_algebraica",
    codigoDsl: SIMPLIFICACION_ALGEBRAICA_DSL,
  },
  {
    id: "oficial-matematicas-algebra-evaluacion-expresiones",
    nombre: "Álgebra: evaluación de expresiones en un punto",
    descripcion:
      "Evalúa un polinomio lineal (c0 + c1·x) en un punto x ∈ [-3, 3] \\ {0}. Coefs en [-4, 4]. Rama basico del subtipo `evaluacion_expresiones` (intermedio/avanzado suben el grado). Respuesta NUMÉRICA (tolerancia_abs: 0).",
    materia: "matematicas",
    tags: ["evaluacion_expresiones", "algebra", "evaluacion"],
    subtipoOriginal: "evaluacion_expresiones",
    codigoDsl: EVALUACION_EXPRESIONES_DSL,
  },
  {
    id: "oficial-matematicas-algebra-grado-coeficientes",
    nombre: "Álgebra: grado y coeficientes de un polinomio",
    descripcion:
      "Para un polinomio lineal, identifica una de 3 propiedades: grado, coeficiente principal, término independiente (sorteo 33/33/33). Coefs en [-8, 8]. Rama basico del subtipo `grado_coeficientes` (intermedio/avanzado suben el grado). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["grado_coeficientes", "algebra", "polinomio"],
    subtipoOriginal: "grado_coeficientes",
    codigoDsl: GRADO_COEFICIENTES_DSL,
  },
  // ── WO-11c: ecuaciones, funciones, recta ──────────────────────────────
  {
    id: "oficial-matematicas-algebra-ecuaciones-lineales",
    nombre: "Álgebra: ecuaciones lineales (resolución numérica)",
    descripcion:
      "Resuelve ax + b = c con a ∈ [1, 5], xVal ∈ [1, 10], b ∈ [0, 10]. Rama basico del subtipo `ecuaciones_lineales` (intermedio = coefs negativos, avanzado = variable en ambos lados). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["ecuaciones_lineales", "algebra", "ecuaciones"],
    subtipoOriginal: "ecuaciones_lineales",
    codigoDsl: ECUACIONES_LINEALES_DSL,
  },
  {
    id: "oficial-matematicas-algebra-ecuaciones-parametros",
    nombre: "Álgebra: ecuaciones con parámetro (hallar k)",
    descripcion:
      "Halla el valor de k tal que kx = c tenga solución x = s. k ∈ [2, 6], solucion ∈ [1, 5]. Rama basico del subtipo `ecuaciones_parametros` (intermedio/avanzado = kx + b = c). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["ecuaciones_parametros", "algebra", "parametros"],
    subtipoOriginal: "ecuaciones_parametros",
    codigoDsl: ECUACIONES_PARAMETROS_DSL,
  },
  {
    id: "oficial-matematicas-algebra-ecuaciones-fracciones",
    nombre: "Álgebra: ecuaciones con fracciones",
    descripcion:
      "Resuelve a/x + b = c (con solución entera). b ∈ [1, 5], c > b, xVal ∈ [1, 5]. Rama basico del subtipo `ecuaciones_fracciones` (intermedio/avanzado = denominadores polinomiales). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["ecuaciones_fracciones", "algebra", "fracciones"],
    subtipoOriginal: "ecuaciones_fracciones",
    codigoDsl: ECUACIONES_FRACCIONES_DSL,
  },
  {
    id: "oficial-matematicas-algebra-funciones-lineales",
    nombre: "Álgebra: funciones lineales (ordenada al origen)",
    descripcion:
      "Identifica la ordenada al origen de f(x) = mx + b. m ∈ [-4, 4] \\ {0}, b ∈ [-5, 5]. Rama basico del subtipo `funciones_lineales` (intermedio = pendiente, avanzado = evaluar en punto). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["funciones_lineales", "algebra", "funciones"],
    subtipoOriginal: "funciones_lineales",
    codigoDsl: FUNCIONES_LINEALES_DSL,
  },
  {
    id: "oficial-matematicas-algebra-funcion-afin",
    nombre: "Álgebra: función afín (aplicación)",
    descripcion:
      "Evalúa un modelo lineal f(x) = mx + b en un contexto de aplicación (taxi). m ∈ [2, 8], b ∈ [10, 50], x ∈ [5, 15]. Rama basico del subtipo `funcion_afin` (intermedio/avanzado = hallar la función dados 2 puntos). Respuesta NUMÉRICA.",
    materia: "matematicas",
    tags: ["funcion_afin", "algebra", "aplicacion"],
    subtipoOriginal: "funcion_afin",
    codigoDsl: FUNCION_AFIN_DSL,
  },
  {
    id: "oficial-matematicas-algebra-ecuacion-recta",
    nombre: "Álgebra: ecuación de la recta (pendiente-ordenada)",
    descripcion:
      "Escribe la expresión mx + b de la recta dada la pendiente y la ordenada. m ∈ [-4, 4] \\ {0}, b ∈ [-5, 5]. Rama basico del subtipo `ecuacion_recta` (intermedio = punto-pendiente, avanzado = dos puntos). Respuesta SIMBÓLICA (la expresión del lado derecho de y = ...).",
    materia: "matematicas",
    tags: ["ecuacion_recta", "algebra", "recta"],
    subtipoOriginal: "ecuacion_recta",
    codigoDsl: ECUACION_RECTA_DSL,
  },
];

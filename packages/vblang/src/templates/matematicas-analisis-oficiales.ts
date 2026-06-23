/**
 * WO-11e — Plantillas VBLang OFICIALES para Matemáticas (Análisis y Avanzado).
 *
 * Cierre del eje 2 (porting simbólico masivo). Cada plantilla reproduce
 * la FÓRMULA de un subtipo PARAMÉTRICO de
 * `apps/web/src/generadoresV2/matematicas/AnalisisYAvanzado.ts` cuya
 * respuesta es una EXPRESIÓN simbólica, un valor NUMÉRICO o un STRING
 * de formato fijo.
 *
 * Patrón: ver `docs/vblang/porting-generadores.md` y
 * `docs/vblang/wo-11-eje-simbolico.md`. Para simbólicas se usa
 * `respuesta_expr:` + `tipo: expresion` + `sonEquivalentes`; para
 * numéricas se usa `respuesta:` + `tipo: input` + `tolerancia_abs:`.
 *
 * Subtipos portados (16, todos rama basico):
 *  - trigonometria_basica          (simb.) — sen/cos de ángulos notables
 *  - trigonometria_aplicada        (num.)  — cateto opuesto en triángulo
 *  - identidades_trigonometricas   (simb.) — sen²+cos²=1 (conceptual)
 *  - ecuaciones_trigonometricas    (simb.) — soluciones en [0°, 360°]
 *  - funciones_exponenciales       (num.)  — f(x) = b^x
 *  - funciones_logaritmicas        (num.)  — log_base(x)
 *  - ecuaciones_exponenciales      (num.)  — b^x = c
 *  - ecuaciones_logaritmicas       (num.)  — log(x) = k
 *  - numeros_complejos             (num.)  — parte real (basico) / módulo (avanz)
 *  - operaciones_complejos         (simb.) — suma/resta de complejos
 *  - matrices_basico               (simb.) — dimensión (basico) / suma 2x2 (avanz)
 *  - determinantes_basico          (num.)  — det 2x2 (basico/intermedio) / 3x3 (avanz)
 *  - sistemas_matrices             (num.)  — Cramer 2x2
 *  - vectores_basico               (num.)  — módulo / producto escalar / suma
 *  - geometria_espacial            (num.)  — vol/superficie de sólidos
 *  - conicas                       (simb.) — circunferencia (basico) / parábola/elipse
 *
 * Notas:
 *  - 4 subtipos tienen respuesta conceptual/fixed-string
 *    (identidades_trigonometricas, conicas, matrices_basico en basico,
 *    ecuaciones_trigonometricas). Se portan con `respuesta_expr` y
 *    se comparan con `sonEquivalentes` (trivial string match cuando
 *    los strings son idénticos).
 *  - `operaciones_complejos` (basico) cubre sólo `suma` (la versión
 *    50/50 del generador con resta la sorteamos con `uno_de([+1, -1])`
 *    y aplicamos a las partes).
 *  - En `numeros_complejos` basico preguntamos por la parte real;
 *    el módulo (sqrt(a²+b²)) requiere `sqrt` builtin que ya está.
 *
 * Verificación:
 *  - validez DSL: `tests/templates/matematicas-analisis-oficiales.test.ts`
 *  - equivalencia con generador: `apps/web/.../analisis-equivalencia.spec.ts`
 */
import type { PlantillaOficial } from "./types.js";

// ── 1. trigonometria_basica (basico) ─────────────────────────────────────

/**
 * trigonometria_basica (basico):
 *   El generador sortea un ángulo ∈ {0, 30, 45, 60, 90} y una función
 *   ∈ {seno, coseno} (sin tangente en basico). Devuelve el valor exacto
 *   del par (ángulo, función).
 *
 *   Tabla de constantes notables (notación math.js: `sqrt(2)/2`, etc.):
 *   - 0°:  sen=0,   cos=1
 *   - 30°: sen=1/2, cos=√3/2
 *   - 45°: sen=√2/2, cos=√2/2
 *   - 60°: sen=√3/2, cos=1/2
 *   - 90°: sen=1,   cos=0
 */
const TRIGONOMETRIA_BASICA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["trigonometria_basica", "analisis", "trigonometria"]

variables:
  casos: [{ angulo: 0, funcion: "seno", expr: "0" }, { angulo: 30, funcion: "seno", expr: "1/2" }, { angulo: 45, funcion: "seno", expr: "sqrt(2)/2" }, { angulo: 60, funcion: "seno", expr: "sqrt(3)/2" }, { angulo: 90, funcion: "seno", expr: "1" }, { angulo: 0, funcion: "coseno", expr: "1" }, { angulo: 30, funcion: "coseno", expr: "sqrt(3)/2" }, { angulo: 45, funcion: "coseno", expr: "sqrt(2)/2" }, { angulo: 60, funcion: "coseno", expr: "1/2" }, { angulo: 90, funcion: "coseno", expr: "0" }]
  caso: uno_de(casos)

respuesta_expr: caso.expr
tipo: expresion

enunciado: "¿Cuál es el {caso.funcion} de {caso.angulo}°?"

pasos:
  - "{caso.funcion}({caso.angulo}°) = {caso.expr}"

explicacion: |
  {caso.funcion}({caso.angulo}°) = {caso.expr} (valor notable).
`;

// ── 2. trigonometria_aplicada (basico) ──────────────────────────────────

/**
 * trigonometria_aplicada (basico):
 *   El generador sortea ángulo ∈ {30, 45, 60} e hipotenusa ∈ [5, 10].
 *   Calcula el cateto opuesto = hipotenusa × sen(ángulo).
 */
const TRIGONOMETRIA_APLICADA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["trigonometria_aplicada", "analisis", "triangulo"]

variables:
  # sen(30°) = 0.5, sen(45°) = √2/2 ≈ 0.7071, sen(60°) = √3/2 ≈ 0.8660
  # Indexamos angulo y sen_val con el mismo idx para que estén coordinados.
  idx: uno_de([0, 1, 2])
  angulos: [30, 45, 60]
  sen_vals: [0.5, 0.7071067811865475, 0.8660254037844386]
  angulo: angulos[idx]
  sen_val: sen_vals[idx]
  hip: random(5, 10)
  opuesto: redondear(hip * sen_val, 2)

respuesta: opuesto
tipo: input
tolerancia_abs: 0.01

enunciado: "En un triángulo rectángulo con hipotenusa = {hip} y ángulo = {angulo}°, ¿cuánto mide el cateto opuesto?"

pasos:
  - "cateto opuesto = hipotenusa × sen({angulo}°)"
  - "= {hip} × {sen_val} ≈ {opuesto}"

explicacion: |
  Por la definición de seno: cateto opuesto = hipotenusa × sen({angulo}°)
  = {hip} × {sen_val} ≈ {opuesto}.
`;

// ── 3. identidades_trigonometricas (basico) ─────────────────────────────

/**
 * identidades_trigonometricas (basico):
 *   El generador siempre pregunta: "Verifica sen²(θ) + cos²(θ) para θ = ...
 *   ¿Cuánto vale?" Respuesta: "1" (identidad pitagórica).
 *   Patrón SÍMBOLICO con string fijo (trivial compare).
 */
const IDENTIDADES_TRIGONOMETRICAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["identidades_trigonometricas", "analisis", "identidad"]

variables:
  angulo: uno_de([30, 45, 60])
  resultado: "1"

respuesta_expr: resultado
tipo: expresion

enunciado: "Verifica: sen²(θ) + cos²(θ) para θ = {angulo}°. ¿Cuánto vale?"

pasos:
  - "La identidad pitagórica: sen²(θ) + cos²(θ) = 1"
  - "Es válida para todo θ (en particular, θ = {angulo}°)."

explicacion: |
  La identidad fundamental de la trigonometría: sen²(θ) + cos²(θ) = 1,
  para todo θ. En particular, con θ = {angulo}°, vale 1.
`;

// ── 4. ecuaciones_trigonometricas (basico) ──────────────────────────────

/**
 * ecuaciones_trigonometricas (basico):
 *   El generador sortea ángulo ∈ {30, 45, 60} y función ∈ {sen, cos}
 *   (50/50). Devuelve las 2 soluciones en [0°, 360°]:
 *   - sen(x) = v: x = α o x = 180-α
 *   - cos(x) = v: x = α o x = 360-α
 *   Patrón SÍMBOLICO con string multi-statement.
 */
const ECUACIONES_TRIGONOMETRICAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["ecuaciones_trigonometricas", "analisis", "trigonometria"]

variables:
  # sen: soluciones = α y 180-α. cos: soluciones = α y 360-α.
  # El idx coordina funcion y es_sen (0=sen, 1=cos).
  idx: uno_de([0, 1])
  funciones: ["sen", "cos"]
  funcion: funciones[idx]
  es_sen: 1 - idx
  angulo: uno_de([30, 45, 60])
  sol1: angulo
  sol2: angulo + (180 - 2 * angulo) * es_sen + (360 - 2 * angulo) * (1 - es_sen)
  resp_str: concatenar("x = ", sol1, "° o x = ", sol2, "°")

respuesta_expr: resp_str
tipo: expresion

enunciado: "Resuelve en [0°, 360°]: {funcion}(x) = sen({angulo}°) (asumimos los valores notables)"

pasos:
  - "Si {funcion}(x) = sen({angulo}°), las soluciones en [0°, 360°] son:"
  - "x = {sol1}° y x = {sol2}°"

explicacion: |
  {funcion}(x) = sen({angulo}°) tiene dos soluciones en [0°, 360°]:
  x = {sol1}° o x = {sol2}°.
`;

// ── 5. funciones_exponenciales (basico) ─────────────────────────────────

/**
 * funciones_exponenciales (basico):
 *   El generador sortea base ∈ {2, 3, 10} y x ∈ [1, 4]. Calcula f(x) = b^x.
 */
const FUNCIONES_EXPONENCIALES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["funciones_exponenciales", "analisis", "exponencial"]

variables:
  base: uno_de([2, 3, 10])
  x: random(1, 4)
  resultado: base ^ x

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Si f(x) = {base}^x, ¿cuánto vale f({x})? La base {base} > 1, por lo que la función es creciente."

pasos:
  - "f({x}) = {base}^{x}"
  - "= {resultado}"

explicacion: |
  f({x}) = {base}^{x} = {resultado}. Con base {base} > 1 la función
  es creciente (crece al infinito).
`;

// ── 6. funciones_logaritmicas (basico) ──────────────────────────────────

/**
 * funciones_logaritmicas (basico):
 *   El generador sortea base ∈ {2, 10} y exp ∈ [1, 4]. Calcula
 *   log_base(base^exp) = exp.
 */
const FUNCIONES_LOGARITMICAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["funciones_logaritmicas", "analisis", "logaritmo"]

variables:
  base: uno_de([2, 10])
  exp: random(1, 4)
  x: base ^ exp
  resultado: exp

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Calcula: log_{base}({x})"

pasos:
  - "log_{base}({x}) = exp tal que {base}^exp = {x}"
  - "= {resultado}"

explicacion: |
  log_{base}({x}) = {resultado}, porque {base}^{resultado} = {x}.
  El logaritmo es el exponente al que hay que elevar la base.
`;

// ── 7. ecuaciones_exponenciales (basico) ─────────────────────────────────

/**
 * ecuaciones_exponenciales (basico):
 *   El generador sortea base ∈ {2, 3, 5} y exp ∈ [2, 5]. Resuelve
 *   base^x = base^exp → x = exp.
 */
const ECUACIONES_EXPONENCIALES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["ecuaciones_exponenciales", "analisis", "exponencial"]

variables:
  base: uno_de([2, 3, 5])
  exp: random(2, 5)
  b: base ^ exp
  resultado: exp

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Resuelve: {base}^x = {b}"

pasos:
  - "{base}^x = {b} = {base}^{exp}"
  - "Por la inyectividad: x = {resultado}"

explicacion: |
  {base}^x = {b} → x = log_{base}({b}) = {exp}, ya que {base}^{exp} = {b}.
`;

// ── 8. ecuaciones_logaritmicas (basico) ─────────────────────────────────

/**
 * ecuaciones_logaritmicas (basico):
 *   En basico, base = 10. El generador sortea k ∈ [1, 3]. Resuelve
 *   log_10(x) = k → x = 10^k.
 */
const ECUACIONES_LOGARITMICAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["ecuaciones_logaritmicas", "analisis", "logaritmo"]

variables:
  base: 10
  k: random(1, 3)
  x: base ^ k
  resultado: x

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Resuelve: log(x) = {k}. Verifica que x > 0."

pasos:
  - "log(x) = {k} → x = 10^{k}"
  - "= {resultado}"
  - "Verificación: log({resultado}) = {k} ✓ y x = {resultado} > 0 ✓"

explicacion: |
  log(x) = {k} → x = 10^{k} = {resultado}. Verificación: x = {resultado} > 0 ✓.
`;

// ── 9. numeros_complejos (basico) ───────────────────────────────────────

/**
 * numeros_complejos (basico):
 *   En basico, el generador sortea a ∈ [-5, 5] \ {0}, b ∈ [1, 8].
 *   Enuncia z = a + bi y pregunta por la parte real (respuesta: a).
 *   El módulo |z| = sqrt(a² + b²) es la rama avanzado — no portada acá
 *   (necesita sqrt con math.js — sí está, pero el `redondear` del
 *   generador hace que el test sea de tolerancia, no simbólico).
 */
const NUMEROS_COMPLEJOS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["numeros_complejos", "analisis", "complejos"]

variables:
  a: random(-5, 5)
  b: random(1, 8)
  parte_real: a

restricciones:
  - a != 0

respuesta: parte_real
tipo: input
tolerancia_abs: 0

enunciado: "Para z = {a} + {b}i, ¿cuál es la parte real?"

pasos:
  - "z = {a} + {b}i tiene parte real {a} y parte imaginaria {b}."

explicacion: |
  En z = a + bi, la parte real es a y la parte imaginaria es b.
  Con a = {a}, b = {b}: parte real = {a}.
`;

// ── 10. operaciones_complejos (basico, suma) ────────────────────────────

/**
 * operaciones_complejos (basico, suma):
 *   El generador sortea a1, b1, a2, b2 ∈ [-3, 4] y op ∈ {suma, resta}
 *   (en basico, 50/50). Calcula (a1 + a2) + (b1 + b2)i (suma) o
 *   (a1 - a2) + (b1 - b2)i (resta).
 *   Notación: el generador produce "ra + rbi" (con `+` siempre, ej.
 *   "0 + -3i"). Para el CAS esto es "ra+r*b*i".
 */
const OPERACIONES_COMPLEJOS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["operaciones_complejos", "analisis", "complejos"]

variables:
  a1: random(-3, 4)
  b1: random(-3, 4)
  a2: random(-3, 4)
  b2: random(-3, 4)
  es_resta: uno_de([0, 1])
  s: 1 - 2 * es_resta
  ra: a1 + s * a2
  rb: b1 + s * b2
  # Operador para mostrar: "+" si es suma, "-" si es resta.
  ops: ["+", "-"]
  op: ops[es_resta]
  # Siempre usamos formato "ra+rbi" (con `+` y el signo absorbido
  # en rb). math.js parsea "0+-3*i" como "0 - 3*i" (verificado).
  resp_str: concatenar("(", ra, ")+(", rb, ")*i")

respuesta_expr: resp_str
tipo: expresion

enunciado: "Calcula: ({a1} + {b1}i) {op} ({a2} + {b2}i)"

pasos:
  - "{a1} + {b1}i {op} {a2} + {b2}i = ({a1} {op} {a2}) + ({b1} {op} {b2})i"
  - "= {ra} + {rb}i"

explicacion: |
  ({a1}+{b1}i) {op} ({a2}+{b2}i)
  = ({a1}{op}{a2}) + ({b1}{op}{b2})i
  = {ra} + {rb}i.
`;

// ── 11. matrices_basico (basico) ─────────────────────────────────────────

/**
 * matrices_basico (basico):
 *   El generador sortea filas ∈ [2, 4], cols ∈ [2, 4] y pregunta
 *   por la dimensión de la matriz. Respuesta: "filas×cols".
 *   Patrón SÍMBOLICO con string fijo (trivial compare).
 */
const MATRICES_BASICO_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["matrices_basico", "analisis", "matrices"]

variables:
  filas: random(2, 4)
  cols: random(2, 4)
  resp_str: concatenar(filas, "x", cols)

respuesta_expr: resp_str
tipo: expresion

enunciado: "Una matriz tiene {filas} filas y {cols} columnas. ¿Cuál es su dimensión?"

pasos:
  - "La dimensión de una matriz se expresa como filas×columnas = {filas}×{cols}."

explicacion: |
  La dimensión de una matriz se expresa como filas×columnas.
  Con {filas} filas y {cols} columnas: {filas}×{cols}.
`;

// ── 12. determinantes_basico (basico) ──────────────────────────────────

/**
 * determinantes_basico (basico, intermedio):
 *   El generador sortea una matriz 2×2 con coefs en [-4, 5] y calcula
 *   det = a*e - b*c. En avanzado, det 3×3 (no portada — Sarrus).
 */
const DETERMINANTES_BASICO_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["determinantes_basico", "analisis", "matrices"]

variables:
  a: random(-4, 5)
  b: random(-4, 5)
  c: random(-4, 5)
  e: random(-4, 5)
  det: a * e - b * c

respuesta: det
tipo: input
tolerancia_abs: 0

enunciado: "Calcula el determinante 2×2: |{a} {b}; {c} {e}| = ?"

pasos:
  - "det = {a}·{e} - {b}·{c}"
  - "= {a * e} - {b * c} = {det}"

explicacion: |
  det = {a}·{e} - {b}·{c} = {a * e} - {b * c} = {det}.
`;

// ── 13. sistemas_matrices (basico) ──────────────────────────────────────

/**
 * sistemas_matrices (basico):
 *   Cramer para un sistema 2×2. El generador construye desde una
 *   solución (x, y) y coefs a, b, c, e sorteados. Responde x.
 */
const SISTEMAS_MATRICES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["sistemas_matrices", "analisis", "cramer"]

variables:
  x_sol: random(1, 4)
  y_sol: random(1, 4)
  a: random(1, 3)
  b: random(1, 3)
  c: random(1, 3)
  e: random(1, 3)
  det: a * e - b * c
  e1: a * x_sol + b * y_sol
  e2: c * x_sol + e * y_sol

restricciones:
  - det != 0

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resuelve usando Cramer: {a}x + {b}y = {e1}, {c}x + {e}y = {e2}. ¿Cuánto vale x?"

pasos:
  - "Det(A) = {a}·{e} - {b}·{c} = {det}"
  - "Det(Ax) = {e1}·{e} - {b}·{e2} = {x_sol * det}"
  - "x = Det(Ax)/Det(A) = {x_sol * det}/{det} = {x_sol}"

explicacion: |
  Por regla de Cramer: Det(A) = {det}, Det(Ax) = {x_sol * det},
  x = Det(Ax)/Det(A) = {x_sol}.
`;

// ── 14. vectores_basico (basico, módulo) ────────────────────────────────

/**
 * vectores_basico (basico):
 *   En basico, el generador sortea v1 = (dx1, dy1) con coefs en [-4, 5]
 *   y pregunta por el módulo |v1| = sqrt(dx1² + dy1²). redondeado a 2.
 *   La variante "escalar" o "suma" es intermedio/avanzado.
 */
const VECTORES_BASICO_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["vectores_basico", "analisis", "vectores"]

variables:
  dx1: random(-4, 5)
  dy1: random(-4, 5)
  modulo: redondear(sqrt(dx1 * dx1 + dy1 * dy1), 2)

restricciones:
  - dx1 != 0
  - dy1 != 0

respuesta: modulo
tipo: input
tolerancia_abs: 0.01

enunciado: "Calcula el módulo del vector v₁ = ({dx1}, {dy1})."

pasos:
  - "|v₁| = √({dx1}² + {dy1}²)"
  - "= √{dx1 * dx1 + dy1 * dy1}"
  - "≈ {modulo}"

explicacion: |
  |v₁| = √({dx1}² + {dy1}²) = √{dx1 * dx1 + dy1 * dy1} ≈ {modulo}.
`;

// ── 15. geometria_espacial (basico, cubo volumen) ──────────────────────

/**
 * geometria_espacial (basico, cubo):
 *   En basico, el generador siempre sortea "cubo" y pregunta por el
 *   volumen = lado³. La superficie (6·lado²) y otras figuras
 *   (esfera, cilindro, cono) son intermedio/avanzado.
 */
const GEOMETRIA_ESPACIAL_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["geometria_espacial", "analisis", "geometria"]

variables:
  lado: random(2, 8)
  volumen: lado * lado * lado

respuesta: volumen
tipo: input
tolerancia_abs: 0

enunciado: "Calcula el volumen de un cubo con lado = {lado}."

pasos:
  - "Volumen del cubo = lado³"
  - "= {lado}³ = {volumen}"

explicacion: |
  El volumen de un cubo de lado {lado} es {lado}³ = {volumen}.
`;

// ── 16. conicas (basico, circunferencia) ───────────────────────────────

/**
 * conicas (basico, circunferencia):
 *   En basico, el generador sortea h, k ∈ [-3, 3] y radio r ∈ [1, 5].
 *   Enunciado: (x-h)² + (y-k)² = r². Respuesta: "Circunferencia:
 *   centro (h, k), radio r". Parábola y elipse son intermedio/avanzado.
 *   Patrón SÍMBOLICO con string de identificación (trivial compare).
 */
const CONICAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["conicas", "analisis", "geometria_analitica"]

variables:
  h: random(-3, 3)
  k: random(-3, 3)
  r: random(1, 5)
  r2: r * r
  # Para mantener el formato canónico (x - h)² + (y - k)² = r², el
  # signo del término siempre es "-" (con h o k absorbiendo el signo
  # propio). El test extrae h, k, r del enunciado generado y compara
  # con esta misma respuesta.
  resp_str: concatenar("Circunferencia: centro (", h, ",", k, "), radio ", r)

respuesta_expr: resp_str
tipo: expresion

enunciado: "Identifica la cónica: (x - {h})² + (y - {k})² = {r2}"

pasos:
  - "La forma (x-h)² + (y-k)² = r² representa una circunferencia con centro (h, k) y radio r."
  - "Con h = {h}, k = {k}, r = {r}: centro ({h}, {k}), radio {r}."

explicacion: |
  La forma canónica (x-h)² + (y-k)² = r² representa una
  circunferencia con centro (h, k) y radio r. Acá: centro ({h}, {k}),
  radio {r}.
`;

export const MATEMATICAS_ANALISIS_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-matematicas-analisis-trigonometria-basica",
    nombre: "Análisis: trigonometría básica (ángulos notables)",
    descripcion:
      "Pregunta el seno o coseno de un ángulo notable (0°, 30°, 45°, 60°, 90°). Respuesta SIMBÓLICA (constantes exactas: 0, 1/2, √2/2, √3/2, 1). Rama basico del subtipo `trigonometria_basica` (avanzado agrega tangente).",
    materia: "matematicas",
    tags: ["trigonometria_basica", "analisis", "trigonometria"],
    subtipoOriginal: "trigonometria_basica",
    codigoDsl: TRIGONOMETRIA_BASICA_DSL,
  },
  {
    id: "oficial-matematicas-analisis-trigonometria-aplicada",
    nombre: "Análisis: trigonometría aplicada (cateto opuesto)",
    descripcion:
      "Calcula el cateto opuesto en un triángulo rectángulo: cateto_op = hipotenusa × sen(ángulo). ángulo ∈ {30, 45, 60}, hipotenusa ∈ [5, 10]. Respuesta NUMÉRICA (redondeada a 2 decimales). Rama basico.",
    materia: "matematicas",
    tags: ["trigonometria_aplicada", "analisis", "triangulo"],
    subtipoOriginal: "trigonometria_aplicada",
    codigoDsl: TRIGONOMETRIA_APLICADA_DSL,
  },
  {
    id: "oficial-matematicas-analisis-identidades-trigonometricas",
    nombre: "Análisis: identidad pitagórica (sen²+cos²=1)",
    descripcion:
      "Verifica la identidad trigonométrica fundamental: sen²(θ) + cos²(θ) = 1 para todo θ. Respuesta SIMBÓLICA (string '1', trivial compare). Rama basico (intermedio/avanzado = pregunta por tan(θ) con valores numéricos).",
    materia: "matematicas",
    tags: ["identidades_trigonometricas", "analisis", "identidad"],
    subtipoOriginal: "identidades_trigonometricas",
    codigoDsl: IDENTIDADES_TRIGONOMETRICAS_DSL,
  },
  {
    id: "oficial-matematicas-analisis-ecuaciones-trigonometricas",
    nombre: "Análisis: ecuaciones trigonométricas (sen/cos en [0°, 360°])",
    descripcion:
      "Resuelve sen(x) = v o cos(x) = v en [0°, 360°] (2 soluciones). Respuesta SIMBÓLICA con string multi-statement ('x = α° o x = β°'). Rama basico (intermedio/avanzado = dominios acotados).",
    materia: "matematicas",
    tags: ["ecuaciones_trigonometricas", "analisis", "trigonometria"],
    subtipoOriginal: "ecuaciones_trigonometricas",
    codigoDsl: ECUACIONES_TRIGONOMETRICAS_DSL,
  },
  {
    id: "oficial-matematicas-analisis-funciones-exponenciales",
    nombre: "Análisis: funciones exponenciales f(x) = b^x",
    descripcion:
      "Evalúa f(x) = b^x con base ∈ {2, 3, 10} y x ∈ [1, 4]. Respuesta NUMÉRICA. Rama basico (intermedio/avanzado = base ∈ {2, 3, 5, 10}, x ∈ [2, 6]).",
    materia: "matematicas",
    tags: ["funciones_exponenciales", "analisis", "exponencial"],
    subtipoOriginal: "funciones_exponenciales",
    codigoDsl: FUNCIONES_EXPONENCIALES_DSL,
  },
  {
    id: "oficial-matematicas-analisis-funciones-logaritmicas",
    nombre: "Análisis: funciones logarítmicas log_base(x)",
    descripcion:
      "Calcula log_base(base^exp) = exp con base ∈ {2, 10} y exp ∈ [1, 4]. Respuesta NUMÉRICA. Rama basico (intermedio/avanzado = base ∈ {2, 3, 10}, exp ∈ [1, 6]).",
    materia: "matematicas",
    tags: ["funciones_logaritmicas", "analisis", "logaritmo"],
    subtipoOriginal: "funciones_logaritmicas",
    codigoDsl: FUNCIONES_LOGARITMICAS_DSL,
  },
  {
    id: "oficial-matematicas-analisis-ecuaciones-exponenciales",
    nombre: "Análisis: ecuaciones exponenciales b^x = c",
    descripcion:
      "Resuelve b^x = c con base ∈ {2, 3, 5} y exp ∈ [2, 5]. Respuesta NUMÉRICA. Rama basico (intermedio/avanzado = exp ∈ [2, 8]).",
    materia: "matematicas",
    tags: ["ecuaciones_exponenciales", "analisis", "exponencial"],
    subtipoOriginal: "ecuaciones_exponenciales",
    codigoDsl: ECUACIONES_EXPONENCIALES_DSL,
  },
  {
    id: "oficial-matematicas-analisis-ecuaciones-logaritmicas",
    nombre: "Análisis: ecuaciones logarítmicas log(x) = k",
    descripcion:
      "Resuelve log(x) = k en basico (base = 10 fija). k ∈ [1, 3]. Respuesta NUMÉRICA. Rama basico (intermedio/avanzado = base ∈ {2, 3, 10}).",
    materia: "matematicas",
    tags: ["ecuaciones_logaritmicas", "analisis", "logaritmo"],
    subtipoOriginal: "ecuaciones_logaritmicas",
    codigoDsl: ECUACIONES_LOGARITMICAS_DSL,
  },
  {
    id: "oficial-matematicas-analisis-numeros-complejos",
    nombre: "Análisis: números complejos (parte real)",
    descripcion:
      "Para z = a + bi con a ∈ [-5, 5] \\ {0}, b ∈ [1, 8], pregunta por la parte real. Respuesta NUMÉRICA. Rama basico (avanzado = pregunta por el módulo |z|).",
    materia: "matematicas",
    tags: ["numeros_complejos", "analisis", "complejos"],
    subtipoOriginal: "numeros_complejos",
    codigoDsl: NUMEROS_COMPLEJOS_DSL,
  },
  {
    id: "oficial-matematicas-analisis-operaciones-complejos",
    nombre: "Análisis: operaciones con complejos (suma y resta)",
    descripcion:
      "Suma o resta (a1 + b1i) ± (a2 + b2i) con coefs en [-3, 4]. Respuesta SIMBÓLICA (string '(ra)+(rb)*i'). Rama basico (intermedio/avanzado = multiplicación, conjugado).",
    materia: "matematicas",
    tags: ["operaciones_complejos", "analisis", "complejos"],
    subtipoOriginal: "operaciones_complejos",
    codigoDsl: OPERACIONES_COMPLEJOS_DSL,
  },
  {
    id: "oficial-matematicas-analisis-matrices-basico",
    nombre: "Análisis: matrices básico (dimensión filas×columnas)",
    descripcion:
      "Identifica la dimensión de una matriz con filas ∈ [2, 4] y cols ∈ [2, 4]. Respuesta SIMBÓLICA (string 'filas×cols', trivial compare). Rama basico (avanzado = suma de matrices 2×2).",
    materia: "matematicas",
    tags: ["matrices_basico", "analisis", "matrices"],
    subtipoOriginal: "matrices_basico",
    codigoDsl: MATRICES_BASICO_DSL,
  },
  {
    id: "oficial-matematicas-analisis-determinantes-basico",
    nombre: "Análisis: determinantes 2×2 (regla de Sarrus no)",
    descripcion:
      "Calcula det 2×2 = a·e - b·c con coefs en [-4, 5]. Respuesta NUMÉRICA. Rama basico/intermedio (avanzado = det 3×3, no portada).",
    materia: "matematicas",
    tags: ["determinantes_basico", "analisis", "matrices"],
    subtipoOriginal: "determinantes_basico",
    codigoDsl: DETERMINANTES_BASICO_DSL,
  },
  {
    id: "oficial-matematicas-analisis-sistemas-matrices",
    nombre: "Análisis: sistemas 2×2 (regla de Cramer)",
    descripcion:
      "Resuelve sistema 2×2 por regla de Cramer. Genera desde solución (x, y) ∈ [1, 4] y coefs a, b, c, e ∈ [1, 3]. Responde x. Respuesta NUMÉRICA. Sólo basico.",
    materia: "matematicas",
    tags: ["sistemas_matrices", "analisis", "cramer"],
    subtipoOriginal: "sistemas_matrices",
    codigoDsl: SISTEMAS_MATRICES_DSL,
  },
  {
    id: "oficial-matematicas-analisis-vectores-basico",
    nombre: "Análisis: vectores (módulo en 2D)",
    descripcion:
      "Calcula |v| = √(dx² + dy²) con dx, dy ∈ [-4, 5] \\ {0}. Respuesta NUMÉRICA (redondeada a 2 decimales). Rama basico (intermedio/avanzado = producto escalar, suma de vectores).",
    materia: "matematicas",
    tags: ["vectores_basico", "analisis", "vectores"],
    subtipoOriginal: "vectores_basico",
    codigoDsl: VECTORES_BASICO_DSL,
  },
  {
    id: "oficial-matematicas-analisis-geometria-espacial",
    nombre: "Análisis: geometría espacial (volumen del cubo)",
    descripcion:
      "Volumen de un cubo de lado ∈ [2, 8]. Respuesta NUMÉRICA. Rama basico (intermedio/avanzado = esferas, cilindros, conos, superficies).",
    materia: "matematicas",
    tags: ["geometria_espacial", "analisis", "geometria"],
    subtipoOriginal: "geometria_espacial",
    codigoDsl: GEOMETRIA_ESPACIAL_DSL,
  },
  {
    id: "oficial-matematicas-analisis-conicas",
    nombre: "Análisis: cónicas (circunferencia)",
    descripcion:
      "Identifica la cónica a partir de la forma canónica. En basico siempre es circunferencia con centro (h, k) ∈ [-3, 3]² y radio ∈ [1, 5]. Respuesta SIMBÓLICA (string 'Circunferencia: centro (h,k), radio r', trivial compare). Rama basico (intermedio/avanzado = parábolas, elipses, hipérbolas).",
    materia: "matematicas",
    tags: ["conicas", "analisis", "geometria_analitica"],
    subtipoOriginal: "conicas",
    codigoDsl: CONICAS_DSL,
  },
];

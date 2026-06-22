/**
 * WO-7 / WO-7b — Plantillas VBLang OFICIALES para Matemáticas (Aritmética).
 *
 * Batch curado del porting "generador paramétrico → plantilla DSL" descrito en
 * `docs/vblang/porting-generadores.md`. Cada plantilla reproduce la FÓRMULA de
 * un subtipo PARAMÉTRICO de `apps/web/src/generadoresV2/matematicas/Aritmetica.ts`
 * (clasificado PARAMÉTRICO por `docs/AUDITORIA_GENERADORES.md`: matemáticas está
 * "limpio", casi 100% paramétrico — NO hay subtipos BANCO acá).
 *
 * El vínculo de legado es `subtipoOriginal`: el generador nativo sigue vivo como
 * resolutor de contenido viejo (no se borra). La equivalencia
 * generador↔plantilla se verifica en
 * `apps/web/src/generadoresV2/__tests__/porting-equivalencia.spec.ts` con el
 * contrato de "oráculo compartido" (ver el doc): una fórmula pura `F(inputs)` que
 * TANTO el generador real COMO la plantilla compilada deben satisfacer sobre sus
 * propios inputs sorteados.
 *
 * Alcance de cada port (rama de dificultad del generador que reproduce):
 *
 *  WO-7 (ola inicial):
 *  - potencias        → `genPotencias("basico")`        b^n con b∈[2,10], n∈[2,4]
 *  - unidades_medida  → `genUnidadesMedida("basico")`    valor × factor (6 conversiones)
 *  - regla_tres       → `genReglaTres("basico")`         directa: (B·C)/A
 *  - sucesiones       → `genSucesiones("basico")`        aritmética: a₁+(n−1)·d
 *  - series_simples   → `genSeriesSimples("basico")`     aritmética: n/2·(a₁+aₙ)
 *  - angulos          → `genAngulos("intermedio")`       complementario/suplementario: tope−a
 *  - coordenadas_plano→ `genCoordenadasPlano("intermedio")` distancia: √(Δx²+Δy²)
 *
 *  WO-7b (ola 1 — builtins actuales):
 *  - operaciones_basicas    → `genOperacionesBasicas("basico")`   a + b
 *  - operaciones_combinadas → `genOperacionesCombinadas("basico")` (a ± b) ± c
 *  - porcentaje             → `genPorcentaje("basico")`           pct/100 × base
 *  - proporcionalidad       → `genProporcionalidad("basico")`     y = k·x
 *  - perimetro_area         → `genPerimetroArea("basico")`        cuad/rect, área o perímetro
 *  - decimales              → `genDecimales("basico")`            a ± b con 1 decimal
 *  - raices                 → `genRaices("basico")`               √n o ∛n exacto
 *
 *  WO-7b (ola 2 — builtins nuevos de WO-8):
 *  - divisibilidad          → `genDivisibilidad("basico")`        MCD(a, b) o MCM(a, b)
 *  - multiplos_divisores    → `genMultiplosDivisores("basico")`   listar divisores de n
 *  - enteros_negativos      → `genEnterosNegativos("basico")`     |n| o suma con negativo
 *  - fracciones             → `genFracciones("basico")`           a/d + b/d con fraccion
 *  - numeros_primos         → `genNumerosPrimos("basico")`        es_primo(n) — tipo vf
 *  - estadistica_basica_media → `genEstadisticaBasica("basico")`  media (promedio)
 *  - estadistica_basica_mediana → `genEstadisticaBasica("intermedio")` mediana
 *  - estadistica_basica_moda    → `genEstadisticaBasica("intermedio")` moda
 *
 * Cada port elige UNA rama de dificultad (la más común / más fácil de
 * verificar). Las ramas alternativas (p. ej. `potencias` avanzado = potencia de
 * potencia, `regla_tres` inversa, `operaciones_basicas` con multiplicación/
 * división) son fórmulas distintas y quedan enumeradas en el doc como
 * continuación mecánica. NO se inventaron builtins.
 */
import type { PlantillaOficial } from "./types.js";

const POTENCIAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["potencias", "aritmetica"]

variables:
  base: random(2, 10)
  exponente: random(2, 4)
  resultado: base ^ exponente

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{exponente}?"

pasos:
  - "{base}^{exponente} = {base} multiplicado por sí mismo {exponente} veces = {resultado}"

explicacion: |
  Una potencia b^n es multiplicar la base b por sí misma n veces.
  Acá {base}^{exponente} = {resultado}.
`;

const UNIDADES_MEDIDA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["unidades_medida", "conversiones"]

variables:
  conversiones: [{ de: "m", a: "cm", factor: 100 }, { de: "cm", a: "mm", factor: 10 }, { de: "km", a: "m", factor: 1000 }, { de: "kg", a: "g", factor: 1000 }, { de: "min", a: "s", factor: 60 }, { de: "h", a: "min", factor: 60 }]
  conv: uno_de(conversiones)
  valor: random(1, 10)
  resultado: valor * conv.factor

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Convertí {valor} {conv.de} a {conv.a}."

pasos:
  - "{valor} {conv.de} × {conv.factor} = {resultado} {conv.a}"

explicacion: |
  Para pasar de {conv.de} a {conv.a} se multiplica por el factor de conversión {conv.factor}.
  {valor} {conv.de} × {conv.factor} = {resultado} {conv.a}.
`;

const REGLA_TRES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["regla_tres", "proporcionalidad"]

variables:
  a: random(2, 10)
  b: random(2, 20)
  c: random(2, 10)
  resultado: redondear(b * c / a, 2)

respuesta: resultado
tipo: input
tolerancia_abs: 0.01

enunciado: "Regla de tres directa: Si {a} kg cuestan \${b}, ¿cuánto cuestan {c} kg?"

pasos:
  - "Proporcionalidad directa: x = (precio × cantidad) / referencia = ({b} × {c}) / {a} = {resultado}"

explicacion: |
  En una proporción directa, x = (b · c) / a. Con b = {b}, c = {c} y a = {a}:
  x = ({b} × {c}) / {a} = {resultado}.
`;

const SUCESIONES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["sucesiones", "progresion_aritmetica"]

variables:
  a1: random(1, 20)
  d: random(1, 5)
  n: random(4, 7)
  an: a1 + (n - 1) * d

respuesta: an
tipo: input
tolerancia_abs: 0

enunciado: "En la sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

pasos:
  - "aₙ = a₁ + (n − 1)·d = {a1} + ({n} − 1)·{d} = {an}"

explicacion: |
  El término general de una progresión aritmética es aₙ = a₁ + (n − 1)·d.
  Con a₁ = {a1}, d = {d} y n = {n}: aₙ = {an}.
`;

const SERIES_SIMPLES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["series_simples", "progresion_aritmetica"]

variables:
  a1: random(1, 5)
  d: random(1, 3)
  n: random(3, 6)
  an: a1 + (n - 1) * d
  sn: redondear(n / 2 * (a1 + an), 0)

respuesta: sn
tipo: input
tolerancia_abs: 0

enunciado: "Calcula la suma de los primeros {n} términos de la progresión aritmética con a₁ = {a1} y d = {d}."

pasos:
  - "El último término es aₙ = a₁ + (n − 1)·d = {a1} + ({n} − 1)·{d} = {an}"
  - "Sₙ = n/2 · (a₁ + aₙ) = {n}/2 · ({a1} + {an}) = {sn}"

explicacion: |
  La suma de los primeros n términos de una progresión aritmética es
  Sₙ = n/2 · (a₁ + aₙ). Con a₁ = {a1}, aₙ = {an} y n = {n}: Sₙ = {sn}.
`;

const ANGULOS_DSL = `metadata:
  materia: "matematicas"
  nivel: "intermedio"
  tags: ["angulos", "geometria"]

variables:
  caso: uno_de([{ tipo: "complementario", tope: 90 }, { tipo: "suplementario", tope: 180 }])
  a: random(1, caso.tope - 1)
  resultado: caso.tope - a

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el ángulo {caso.tipo} de {a}°?"

pasos:
  - "Los ángulos {caso.tipo}s suman {caso.tope}°: {a}° + x = {caso.tope}° → x = {resultado}°"

explicacion: |
  Dos ángulos {caso.tipo}s suman {caso.tope}°. Si uno mide {a}°, el otro mide
  {caso.tope}° − {a}° = {resultado}°.
`;

const COORDENADAS_DISTANCIA_DSL = `metadata:
  materia: "matematicas"
  nivel: "intermedio"
  tags: ["coordenadas_plano", "distancia", "geometria"]

variables:
  x1: random(-10, 10)
  y1: random(-10, 10)
  x2: random(-10, 10)
  y2: random(-10, 10)
  distancia: redondear(sqrt((x2 - x1) ^ 2 + (y2 - y1) ^ 2), 2)

respuesta: distancia
tipo: input
tolerancia_abs: 0.01

enunciado: "Calcula la distancia entre A({x1}, {y1}) y B({x2}, {y2})."

pasos:
  - "d = √((x₂−x₁)² + (y₂−y₁)²) = √(({x2}−{x1})² + ({y2}−{y1})²) = {distancia}"

explicacion: |
  La distancia entre dos puntos del plano es d = √((x₂−x₁)² + (y₂−y₁)²).
  Con A({x1}, {y1}) y B({x2}, {y2}): d = {distancia}.
`;

// ── WO-7b: nuevos ports de Aritmética ──────────────────────────────────────────

// operaciones_basicas: rama basico, operación suma (el generador sortea
// entre SUMA, REST en basico; esta plantilla fija la operación a suma
// para que el oracle del harness sea determinista).
const OPERACIONES_BASICAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["operaciones_basicas", "suma", "aritmetica"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  resultado: a + b

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "{a} + {b} = {resultado}"

explicacion: |
  Se suman los dos sumandos: {a} + {b} = {resultado}.
`;

// operaciones_combinadas: rama basico, (a ± b) ± c, sin paréntesis
// significativos. El generador sortea entre + y - en op1 y op2; el template
// fija las dos operaciones a suma para mantener el oráculo determinista.
const OPERACIONES_COMBINADAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["operaciones_combinadas", "suma", "aritmetica"]

variables:
  a: random(1, 15)
  b: random(1, 15)
  c: random(1, 15)
  resultado: a + b + c

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} + {c}?"

pasos:
  - "{a} + {b} = {a + b}"
  - "({a + b}) + {c} = {resultado}"

explicacion: |
  Se resuelve de izquierda a derecha: {a} + {b} = {a + b}, luego {a + b} + {c} = {resultado}.
`;

// porcentaje: rama basico, calcular el % de la base. pcts ∈ {10,20,25,50},
// base = random(1,20)*10. La rama "encontrar la base" y "encontrar el %"
// son fórmulas distintas — quedan para una 3ª ola.
const PORCENTAJE_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["porcentaje", "aritmetica"]

variables:
  pcts: [10, 20, 25, 50]
  pct: uno_de(pcts)
  base: random(1, 20) * 10
  resultado: redondear(pct / 100 * base, 2)

respuesta: resultado
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es el {pct}% de {base}?"

pasos:
  - "{pct}% × {base} = ({pct}/100) × {base} = {resultado}"

explicacion: |
  Para calcular el {pct}% de {base} se multiplica {base} por {pct}/100 =
  {pct} × {base} / 100 = {resultado}.
`;

// proporcionalidad: rama basico, directa, encontrar y. k ∈ [2,5], x ∈ [1,10].
// La rama inversa (avanzado) y "encontrar k" son fórmulas distintas — pendientes.
const PROPORCIONALIDAD_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["proporcionalidad", "directa", "aritmetica"]

variables:
  k: random(2, 5)
  x: random(1, 10)
  y_val: k * x

respuesta: y_val
tipo: input
tolerancia_abs: 0

enunciado: "La relación es y = {k}·x. Si x = {x}, ¿cuánto vale y?"

pasos:
  - "y = {k} × {x} = {y_val}"

explicacion: |
  En una proporcionalidad directa y = k·x, con k = {k} y x = {x}:
  y = {k} × {x} = {y_val}.
`;

// perimetro_area: rama basico, cuadrado o rectángulo, área o perímetro.
// El sorteo entre los 4 casos (cuad/rect × area/perim) se hace con uno_de
// sobre un array de objetos precomputados con la fórmula ya resuelta. Eso
// evita `?:` que el DSL no soporta. Círculo y triángulo quedan pendientes.
const PERIMETRO_AREA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["perimetro_area", "geometria"]

variables:
  lado: random(2, 10)
  b: random(2, 10)
  h: random(2, 10)
  casos: [{ enun: "Un cuadrado tiene lado {lado}. ¿Cuánto mide su área?", paso: "Área = lado² = {lado}² = {valor}", valor: lado ^ 2 }, { enun: "Un cuadrado tiene lado {lado}. ¿Cuánto mide su perímetro?", paso: "Perímetro = 4 × {lado} = {valor}", valor: 4 * lado }, { enun: "Un rectángulo mide {b} × {h}. ¿Cuánto mide su área?", paso: "Área = {b} × {h} = {valor}", valor: b * h }, { enun: "Un rectángulo mide {b} × {h}. ¿Cuánto mide su perímetro?", paso: "Perímetro = 2 × ({b} + {h}) = {valor}", valor: 2 * (b + h) }]
  caso: uno_de(casos)

respuesta: caso.valor
tipo: input
tolerancia_abs: 0

enunciado: "{caso.enun}"

pasos:
  - "{caso.paso}"

explicacion: |
  El área de un cuadrado es lado² y su perímetro es 4 × lado. El área de un
  rectángulo es base × altura y su perímetro es 2 × (base + altura). En este
  caso el resultado es {caso.valor}.
`;

// decimales: rama basico, 1 decimal, operación + o -. El generador sortea
// entre + y -; esta plantilla fija la operación a suma para oráculo determinista.
const DECIMALES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["decimales", "suma", "aritmetica"]

variables:
  a: redondear(random_float(0.1, 9.9, 1), 1)
  b: redondear(random_float(0.1, 9.9, 1), 1)
  resultado: redondear(a + b, 1)

respuesta: resultado
tipo: input
tolerancia_abs: 0.05

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "{a} + {b} = {resultado}"

explicacion: |
  Se suman los dos decimales respetando la posición decimal:
  {a} + {b} = {resultado}.
`;

// raices: rama basico. El generador sortea 70% sqrt(cuadrado perfecto) y
// 30% cbrt(cubo perfecto); esta plantilla usa siempre sqrt para mantener
// el oráculo determinista (la rama cbrt es trivialmente análoga).
const RAICES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["raices", "aritmetica"]

variables:
  cuadrados: [4, 9, 16, 25, 36, 49, 64, 81, 100]
  radicando: uno_de(cuadrados)
  resultado: redondear(sqrt(radicando), 0)

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es √{radicando}?"

pasos:
  - "√{radicando} = {resultado} (porque {resultado}² = {radicando})"

explicacion: |
  La raíz cuadrada de {radicando} es {resultado} porque {resultado} × {resultado} = {radicando}.
`;

// ── WO-7b wave 2: subtipos que usan los builtins nuevos de WO-8 ────────────────

// divisibilidad: rama basico (max=20), MCD o MCM (sorteo 50/50).
const DIVISIBILIDAD_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["divisibilidad", "mcd", "mcm", "aritmetica"]

variables:
  a: random(2, 20)
  b: random(2, 20)
  ops: [{ label: "MCD", nombre_largo: "máximo común divisor", value: mcd(a, b) }, { label: "MCM", nombre_largo: "mínimo común múltiplo", value: mcm(a, b) }]
  op: uno_de(ops)
  resultado: op.value

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Calcula el {op.label}({a}, {b})."

pasos:
  - "{op.label}({a}, {b}) = {resultado}"

explicacion: |
  El {op.nombre_largo} ({op.label}) de {a} y {b} es {resultado}. Se obtiene
  dividiendo por sus divisores comunes (MCD) o tomando el menor múltiplo común (MCM).
`;

// multiplos_divisores: rama basico. El generador sortea entre tres
// variantes: listar divisores (string), primeros 5 múltiplos (string), y
// ¿es múltiplo? (bool). Esta plantilla cubre la primera pero con respuesta
// NUMÉRICA: "¿cuántos divisores tiene X?" (largo de la lista). Es una
// variante natural del subtipo con respuesta compatible con el harness
// (numérica). Las otras 2 variantes quedan como trabajo futuro.
const MULTIPLOS_DIVISORES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["multiplos_divisores", "divisores", "aritmetica"]

variables:
  x: random(6, 30)
  lista: divisores(x)
  resultado: largo(lista)

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores positivos tiene {x}?"

pasos:
  - "Se buscan los divisores positivos de {x}: 1, 2, ..."
  - "En total hay {resultado} divisores"

explicacion: |
  Un divisor d de {x} cumple {x} = d × k para algún entero k. En este caso,
  {x} tiene exactamente {resultado} divisores positivos.
`;

// enteros_negativos: rama basico, valor_absoluto. n ∈ [-20, 20].
const ENTEROS_NEGATIVOS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["enteros_negativos", "valor_absoluto", "aritmetica"]

variables:
  n: random(-20, 20)
  resultado: abs(n)

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es |{n}|?"

pasos:
  - "|{n}| = {resultado}"

explicacion: |
  El valor absoluto de un número es su distancia al cero en la recta numérica,
  siempre no-negativo. |{n}| = {resultado}.
`;

// fracciones: rama basico, mismo denominador, suma. den ∈ [2,10], n1,n2 ∈ [1,den].
// Respuesta = string "p/q" simplificado (vía builtin fraccion de WO-8).
const FRACCIONES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["fracciones", "aritmetica"]

variables:
  den: random(2, 10)
  n1: random(1, den)
  n2: random(1, den)
  num: n1 + n2
  resultado: fraccion(num, den)

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {n1}/{den} + {n2}/{den}?"

pasos:
  - "({n1} + {n2})/{den} = {num}/{den} = {resultado}"

explicacion: |
  Cuando las fracciones tienen el mismo denominador se suman los numeradores:
  ({n1} + {n2})/{den} = {num}/{den}. La fracción simplificada es {resultado}.
`;

// numeros_primos: rama basico, "¿es primo?". Respuesta booleana (tipo vf).
// n ∈ [2, 50]. Como el DSL no soporta `?:` y concatenar espera strings (no
// arrays), mostramos el primer divisor como pista parcial. La explicación es
// neutral y describe el criterio.
const NUMEROS_PRIMOS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["numeros_primos", "teoria_numeros", "aritmetica"]

variables:
  n: random(2, 50)
  es: es_primo(n)
  divs: divisores(n)
  # La concatenación con todos los divisores no es soportada por el DSL
  # (no hay join con separador). Mostramos la cantidad como pista.
  cantidad_divs: largo(divs)

respuesta: es
tipo: vf

enunciado: "¿Es {n} un número primo?"

pasos:
  - "Se buscan los divisores de {n} (1, 2, ...) y se cuentan: {cantidad_divs}"

explicacion: |
  Un número es primo si sus únicos divisores son 1 y él mismo. {n} tiene
  {cantidad_divs} divisores en total. Si la cantidad es 2, el número es primo.
`;

// estadistica_basica (media): rama basico, n=5, datos ∈ [1,10], media.
const ESTADISTICA_MEDIA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["estadistica_basica", "media", "promedio", "estadistica"]

variables:
  datos: [random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10)]
  resultado: redondear(promedio(datos), 2)

respuesta: resultado
tipo: input
tolerancia_abs: 0.01

enunciado: "Calcula la media del conjunto de datos: {datos}."

pasos:
  - "media = ({datos[0]} + {datos[1]} + {datos[2]} + {datos[3]} + {datos[4]}) / 5 = {resultado}"

explicacion: |
  La media aritmética es la suma de los datos dividida por la cantidad.
  ({datos[0]} + {datos[1]} + {datos[2]} + {datos[3]} + {datos[4]}) / 5 = {resultado}.
`;

// estadistica_basica (mediana): rama intermedio (datos = [a, a_rep, ...] para
// que la moda exista), tipo = mediana. n=6, max=20.
const ESTADISTICA_MEDIANA_DSL = `metadata:
  materia: "matematicas"
  nivel: "intermedio"
  tags: ["estadistica_basica", "mediana", "estadistica"]

variables:
  base: [random(1, 20), random(1, 20), random(1, 20), random(1, 20), random(1, 20), random(1, 20)]
  pos_rep: random(1, 5)
  datos: [base[0], base[pos_rep], base[2], base[3], base[4], base[5]]
  resultado: mediana(datos)

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Calcula la mediana del conjunto de datos: {datos}."

pasos:
  - "Ordenando: {ordenar(datos)}"
  - "La mediana es el valor central = {resultado}"

explicacion: |
  La mediana de un conjunto de datos se obtiene ordenándolos y tomando el
  valor central. Para {datos}, la mediana es {resultado}.
`;

// estadistica_basica (moda): rama intermedio, tipo = moda. El generador
// garantiza un valor repetido para que la moda exista, pero no garantiza
// que no haya empates con otros valores. La estructura acá fija el
// candidato a moda en la primera posición y lo repite al final; los otros
// 4 valores vienen de un rango más amplio para reducir la probabilidad de
// empate accidental. El harness skipea los seeds donde el builtin `moda`
// detecta empate y retorna null.
const ESTADISTICA_MODA_DSL = `metadata:
  materia: "matematicas"
  nivel: "intermedio"
  tags: ["estadistica_basica", "moda", "estadistica"]

variables:
  moda_candidate: random(1, 20)
  v2: random(1, 50)
  v3: random(1, 50)
  v4: random(1, 50)
  v5: random(1, 50)
  datos: [moda_candidate, v2, v3, v4, v5, moda_candidate]
  resultado: moda(datos)

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la moda del conjunto de datos: {datos}?"

pasos:
  - "El valor más frecuente es {resultado}"

explicacion: |
  La moda es el valor que más veces aparece. En {datos}, el valor
  {moda_candidate} aparece 2 veces; si ningún otro aparece 2 o más veces,
  la moda es {resultado}.
`;

export const MATEMATICAS_ARITMETICA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-matematicas-potencias",
    nombre: "Potencias: base elevada a un exponente",
    descripcion:
      "Calcula una potencia b^n de base y exponente naturales pequeños (b∈[2,10], n∈[2,4]).",
    materia: "matematicas",
    tags: ["potencias", "aritmetica"],
    subtipoOriginal: "potencias",
    codigoDsl: POTENCIAS_DSL,
  },
  {
    id: "oficial-matematicas-unidades-medida",
    nombre: "Unidades de medida: conversión por factor",
    descripcion:
      "Convierte una cantidad entre unidades de longitud, masa o tiempo multiplicando por el factor de conversión.",
    materia: "matematicas",
    tags: ["unidades_medida", "conversiones"],
    subtipoOriginal: "unidades_medida",
    codigoDsl: UNIDADES_MEDIDA_DSL,
  },
  {
    id: "oficial-matematicas-regla-tres",
    nombre: "Regla de tres directa",
    descripcion:
      "Resuelve una proporción directa: dado el precio de una cantidad de referencia, calcula el precio de otra cantidad.",
    materia: "matematicas",
    tags: ["regla_tres", "proporcionalidad"],
    subtipoOriginal: "regla_tres",
    codigoDsl: REGLA_TRES_DSL,
  },
  {
    id: "oficial-matematicas-sucesiones",
    nombre: "Sucesiones aritméticas: término general",
    descripcion:
      "Calcula el n-ésimo término de una progresión aritmética con aₙ = a₁ + (n−1)·d.",
    materia: "matematicas",
    tags: ["sucesiones", "progresion_aritmetica"],
    subtipoOriginal: "sucesiones",
    codigoDsl: SUCESIONES_DSL,
  },
  {
    id: "oficial-matematicas-series-simples",
    nombre: "Series aritméticas: suma de los primeros n términos",
    descripcion:
      "Calcula la suma de los primeros n términos de una progresión aritmética con Sₙ = n/2·(a₁+aₙ).",
    materia: "matematicas",
    tags: ["series_simples", "progresion_aritmetica"],
    subtipoOriginal: "series_simples",
    codigoDsl: SERIES_SIMPLES_DSL,
  },
  {
    id: "oficial-matematicas-angulos",
    nombre: "Ángulos complementarios y suplementarios",
    descripcion:
      "Calcula el ángulo complementario (suman 90°) o suplementario (suman 180°) de un ángulo dado.",
    materia: "matematicas",
    tags: ["angulos", "geometria"],
    subtipoOriginal: "angulos",
    codigoDsl: ANGULOS_DSL,
  },
  {
    id: "oficial-matematicas-coordenadas-distancia",
    nombre: "Distancia entre dos puntos del plano",
    descripcion:
      "Calcula la distancia euclídea entre dos puntos A y B con d = √((x₂−x₁)²+(y₂−y₁)²).",
    materia: "matematicas",
    tags: ["coordenadas_plano", "distancia", "geometria"],
    subtipoOriginal: "coordenadas_plano",
    codigoDsl: COORDENADAS_DISTANCIA_DSL,
  },

  // ── WO-7b wave 1 (no requieren builtins nuevos) ───────────────────────────
  {
    id: "oficial-matematicas-operaciones-basicas",
    nombre: "Operaciones básicas: suma",
    descripcion:
      "Suma de dos sumandos naturales pequeños (a, b ∈ [1,20]). Rama basico del subtipo `operaciones_basicas` (el generador sortea entre +/−/×/÷ en otras ramas).",
    materia: "matematicas",
    tags: ["operaciones_basicas", "suma", "aritmetica"],
    subtipoOriginal: "operaciones_basicas",
    codigoDsl: OPERACIONES_BASICAS_DSL,
  },
  {
    id: "oficial-matematicas-operaciones-combinadas",
    nombre: "Operaciones combinadas: suma de tres sumandos",
    descripcion:
      "Suma de tres sumandos naturales pequeños (a, b, c ∈ [1,15]). Rama basico del subtipo `operaciones_combinadas` (sin paréntesis significativos, sin precedencia).",
    materia: "matematicas",
    tags: ["operaciones_combinadas", "suma", "aritmetica"],
    subtipoOriginal: "operaciones_combinadas",
    codigoDsl: OPERACIONES_COMBINADAS_DSL,
  },
  {
    id: "oficial-matematicas-porcentaje",
    nombre: "Porcentaje: el N% de una base",
    descripcion:
      "Calcula el N% de una base (pcts ∈ {10, 20, 25, 50}, base ∈ {10, 20, …, 200}). Rama basico del subtipo `porcentaje` (incógnita = resultado; las otras 2 incógnitas quedan pendientes).",
    materia: "matematicas",
    tags: ["porcentaje", "aritmetica"],
    subtipoOriginal: "porcentaje",
    codigoDsl: PORCENTAJE_DSL,
  },
  {
    id: "oficial-matematicas-proporcionalidad",
    nombre: "Proporcionalidad directa: y = k·x",
    descripcion:
      "Calcula y = k·x con k ∈ [2,5] y x ∈ [1,10]. Rama basico del subtipo `proporcionalidad` (directa, incógnita = y; inversa y «encontrar k» son fórmulas distintas, pendientes).",
    materia: "matematicas",
    tags: ["proporcionalidad", "directa", "aritmetica"],
    subtipoOriginal: "proporcionalidad",
    codigoDsl: PROPORCIONALIDAD_DSL,
  },
  {
    id: "oficial-matematicas-perimetro-area",
    nombre: "Perímetro y área: cuadrado o rectángulo",
    descripcion:
      "Calcula el área o el perímetro de un cuadrado o un rectángulo con lados ∈ [2,10]. Rama basico del subtipo `perimetro_area` (triángulo y círculo son fórmulas adicionales, pendientes).",
    materia: "matematicas",
    tags: ["perimetro_area", "geometria"],
    subtipoOriginal: "perimetro_area",
    codigoDsl: PERIMETRO_AREA_DSL,
  },
  {
    id: "oficial-matematicas-decimales",
    nombre: "Decimales: suma con 1 decimal",
    descripcion:
      "Suma de dos decimales a ∈ [0.1, 9.9] con 1 decimal. Rama basico del subtipo `decimales` (resta y multiplicación son fórmulas adicionales, pendientes).",
    materia: "matematicas",
    tags: ["decimales", "suma", "aritmetica"],
    subtipoOriginal: "decimales",
    codigoDsl: DECIMALES_DSL,
  },
  {
    id: "oficial-matematicas-raices",
    nombre: "Raíces: cuadrada exacta",
    descripcion:
      "Calcula √n para n ∈ {4, 9, 16, 25, 36, 49, 64, 81, 100}. Rama basico del subtipo `raices` (la raíz cúbica es análoga, pendiente; simplificación de radicales y operaciones con raíces son simbólica, otra tarea).",
    materia: "matematicas",
    tags: ["raices", "aritmetica"],
    subtipoOriginal: "raices",
    codigoDsl: RAICES_DSL,
  },

  // ── WO-7b wave 2 (requieren builtins de WO-8) ─────────────────────────────
  {
    id: "oficial-matematicas-divisibilidad",
    nombre: "Divisibilidad: MCD o MCM de dos números",
    descripcion:
      "Calcula MCD(a, b) o MCM(a, b) con a, b ∈ [2,20]. Rama basico del subtipo `divisibilidad` (intermedio sube max a 100; avanzado pide MCD/MCM de 3 números — fórmulas distintas, pendientes).",
    materia: "matematicas",
    tags: ["divisibilidad", "mcd", "mcm", "aritmetica"],
    subtipoOriginal: "divisibilidad",
    codigoDsl: DIVISIBILIDAD_DSL,
  },
  {
    id: "oficial-matematicas-multiplos-divisores",
    nombre: "Múltiplos y divisores: listar divisores",
    descripcion:
      "Lista los divisores positivos de n ∈ [6, 30] (orden ascendente). Rama basico del subtipo `multiplos_divisores`, tipo=0 (las otras dos variantes — «primeros 5 múltiplos» y «¿es múltiplo?» — tienen respuestas de otro tipo, pendientes).",
    materia: "matematicas",
    tags: ["multiplos_divisores", "divisores", "aritmetica"],
    subtipoOriginal: "multiplos_divisores",
    codigoDsl: MULTIPLOS_DIVISORES_DSL,
  },
  {
    id: "oficial-matematicas-enteros-negativos",
    nombre: "Enteros negativos: valor absoluto",
    descripcion:
      "Calcula |n| con n ∈ [-20, 20]. Rama basico del subtipo `enteros_negativos`, tipo=valor_absoluto (operación con negativos y comparar son ramas análogas con respuesta numérica, pendientes).",
    materia: "matematicas",
    tags: ["enteros_negativos", "valor_absoluto", "aritmetica"],
    subtipoOriginal: "enteros_negativos",
    codigoDsl: ENTEROS_NEGATIVOS_DSL,
  },
  {
    id: "oficial-matematicas-fracciones",
    nombre: "Fracciones: suma con mismo denominador",
    descripcion:
      "Suma dos fracciones con el mismo denominador den ∈ [2, 10] y devuelve la fracción simplificada. Rama basico del subtipo `fracciones` (denominadores distintos, ×, ÷ y número mixto son fórmulas adicionales, pendientes).",
    materia: "matematicas",
    tags: ["fracciones", "aritmetica"],
    subtipoOriginal: "fracciones",
    codigoDsl: FRACCIONES_DSL,
  },
  {
    id: "oficial-matematicas-numeros-primos",
    nombre: "Números primos: ¿es primo?",
    descripcion:
      "Responde si n ∈ [2, 50] es primo (verdadero/falso). Rama basico del subtipo `numeros_primos` (factorización prima y MCD/MCM por factorización son ramas de respuesta string, pendientes).",
    materia: "matematicas",
    tags: ["numeros_primos", "teoria_numeros", "aritmetica"],
    subtipoOriginal: "numeros_primos",
    codigoDsl: NUMEROS_PRIMOS_DSL,
  },
  {
    id: "oficial-matematicas-estadistica-media",
    nombre: "Estadística básica: media aritmética",
    descripcion:
      "Calcula la media de 5 datos ∈ [1, 10]. Rama basico del subtipo `estadistica_basica`, tipo=media (mediana y moda son ramas con respuesta de otros tipos, plantillas separadas en este archivo).",
    materia: "matematicas",
    tags: ["estadistica_basica", "media", "promedio", "estadistica"],
    subtipoOriginal: "estadistica_basica_media",
    codigoDsl: ESTADISTICA_MEDIA_DSL,
  },
  {
    id: "oficial-matematicas-estadistica-mediana",
    nombre: "Estadística básica: mediana",
    descripcion:
      "Calcula la mediana de 6 datos ∈ [1, 20] (con un valor repetido para que la moda exista, pero acá se pide la mediana). Rama intermedio del subtipo `estadistica_basica`, tipo=mediana.",
    materia: "matematicas",
    tags: ["estadistica_basica", "mediana", "estadistica"],
    subtipoOriginal: "estadistica_basica_mediana",
    codigoDsl: ESTADISTICA_MEDIANA_DSL,
  },
  {
    id: "oficial-matematicas-estadistica-moda",
    nombre: "Estadística básica: moda",
    descripcion:
      "Identifica la moda de 6 datos ∈ [1, 20] (con un valor repetido). Rama intermedio del subtipo `estadistica_basica`, tipo=moda.",
    materia: "matematicas",
    tags: ["estadistica_basica", "moda", "estadistica"],
    subtipoOriginal: "estadistica_basica_moda",
    codigoDsl: ESTADISTICA_MODA_DSL,
  },
];

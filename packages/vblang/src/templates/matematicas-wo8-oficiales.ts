/**
 * WO-8 — Plantilla de cobertura de los builtins nuevos de teoría de números,
 * estadística, valor absoluto y salida de fracción simplificada.
 *
 * Cada `variables:` ejercita al menos un builtin nuevo, de modo que un solo
 * parse + lint + compile + generate cubre la traza end-to-end de los nueve
 * builtins que esta tarea agrega:
 *
 *   abs, mcd, mcm, es_primo, divisores, factorizar,
 *   mediana, moda, fraccion
 *
 * NO es una plantilla pedagógica para producción: existe como verificación de
 * WO-8 ("una plantilla que use cada builtin nuevo parsea, typechequea y
 * evalúa"). El porting real de `divisibilidad` / `numeros_primos` /
 * `estadistica_basica` / `enteros_negativos` / `probabilidad_simple` es la
 * 2ª ola de WO-7b y queda fuera del alcance de WO-8 (esta tarea sólo entrega
 * los builtins, no subtipos enteros).
 */
import type { PlantillaOficial } from "./types.js";

const COBERTURA_WO8_DSL = `metadata:
  materia: "matematicas"
  nivel: "intermedio"
  tags: ["wo8", "cobertura_builtins", "teoria_numeros", "estadistica", "fracciones"]

variables:
  # --- abs: distancia 1D y enteros negativos
  x: random(-50, 50)
  distancia_al_5: abs(x - 5)

  # --- mcd / mcm: divisibilidad
  a_div: random(2, 20)
  b_div: random(2, 20)
  max_comun_divisor: mcd(a_div, b_div)
  min_comun_multiplo: mcm(a_div, b_div)

  # --- es_primo / divisores / factorizar: teoría de números
  n_primo: random(10, 50)
  es_n_primo: es_primo(n_primo)
  lista_divisores: divisores(n_primo)
  factores: factorizar(uno_de([12, 18, 24, 30, 36, 48]))

  # --- mediana / moda: estadística
  datos: [3, 7, 7, 2, 5, 7, 1, 9]
  med: mediana(datos)
  mod: moda(datos)

  # --- fraccion: salida de fracción simplificada
  casos_prob: [{ esp: "dado de 6", fav: 3, tot: 6 }, { esp: "moneda", fav: 1, tot: 2 }, { esp: "baraja de 40", fav: 4, tot: 40 }]
  caso_prob: uno_de(casos_prob)
  fraccion_prob: fraccion(caso_prob.fav, caso_prob.tot)

  # Respuesta: usamos la fracción simplificada (es string) — el alumno tipea "1/2".
  # Tolerancia_abs 0 → comparación exacta por string.

respuesta: fraccion_prob
tipo: input
tolerancia_abs: 0

enunciado: |
  Al elegir al azar de un {caso_prob.esp}, si los casos favorables son {caso_prob.fav}
  sobre {caso_prob.tot} posibles, ¿qué fracción simplificada representa la probabilidad?

pasos:
  - "La probabilidad es casos_favorables / casos_totales = {caso_prob.fav}/{caso_prob.tot}"
  - "Simplificando con mcd: {fraccion_prob}"

explicacion: |
  P = favorables / totales. Se simplifica dividiendo numerador y denominador por
  mcd(favorables, totales). Acá mcd({caso_prob.fav}, {caso_prob.tot}) da el factor
  de reducción y la fracción irreducible es {fraccion_prob}.
`;

export const MATEMATICAS_WO8_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-matematicas-wo8-cobertura-builtins",
    nombre: "Cobertura de builtins nuevos (WO-8): teoría de números, estadística, fracción",
    descripcion:
      "Plantilla de verificación end-to-end de los builtins agregados en WO-8: abs, mcd, mcm, es_primo, divisores, factorizar, mediana, moda, fraccion. La respuesta es la fracción simplificada del caso sorteado (string).",
    materia: "matematicas",
    tags: ["wo8", "cobertura_builtins", "teoria_numeros", "estadistica", "fracciones"],
    subtipoOriginal: "wo8_cobertura_builtins",
    codigoDsl: COBERTURA_WO8_DSL,
  },
];

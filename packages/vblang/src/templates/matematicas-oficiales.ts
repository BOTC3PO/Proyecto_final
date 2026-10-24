/**
 * F6-05 — Plantillas VBLang OFICIALES para Matemáticas.
 *
 * Upgrade del subtipo PARAMETRIZABLE `probabilidad_simple` señalado por
 * `docs/AUDITORIA_GENERADORES.md` en
 * `apps/web/src/generadoresV2/matematicas/Aritmetica.ts`
 * (`genProbabilidadSimple`, pool de experimentos con probabilidad
 * precalculada y simplificada con `mcd`).
 *
 * VBLang no tiene un builtin `mcd`/GCD para simplificar la fracción
 * `favorables/total` (gap identificado durante la investigación de F6-05).
 * En vez de eso, la respuesta se expresa como el cociente decimal
 * `redondear(favorables/total, 4)` con `tolerancia_abs: 0.0001` — sigue
 * siendo un cómputo real y verificable, solo que en formato decimal en
 * lugar de fracción simplificada.
 *
 * Se sortea uno de 7 experimentos clásicos (dado, moneda, baraja española,
 * bolsa numerada) con sus `favorables`/`total`, cubriendo dado/moneda/cartas
 * como en el generador original.
 */
import type { PlantillaOficial } from "./types.js";

const PROBABILIDAD_SIMPLE_DSL = `metadata:
  materia: "matematicas"
  nivel: "intermedio"
  tags: ["probabilidad_simple", "probabilidad"]

variables:
  casos: [{ espacio: "un dado de 6 caras", evento: "un número par", favorables: 3, total: 6 }, { espacio: "un dado de 6 caras", evento: "un número mayor que 4", favorables: 2, total: 6 }, { espacio: "un dado de 6 caras", evento: "el número 3", favorables: 1, total: 6 }, { espacio: "una moneda", evento: "cara", favorables: 1, total: 2 }, { espacio: "una baraja española de 40 cartas", evento: "un as", favorables: 4, total: 40 }, { espacio: "una baraja española de 40 cartas", evento: "una figura (sota, caballo o rey)", favorables: 12, total: 40 }, { espacio: "una bolsa con 10 bolitas numeradas del 1 al 10", evento: "un número menor que 4", favorables: 3, total: 10 }]
  caso: uno_de(casos)
  probabilidad: redondear(caso.favorables / caso.total, 4)

enunciado: "Al elegir al azar de {caso.espacio}, ¿cuál es la probabilidad de obtener {caso.evento}? (expresá el resultado como un número decimal entre 0 y 1, con hasta 4 decimales)"
tipo: input
respuesta: probabilidad
tolerancia_abs: 0.0001

pasos:
  - "P = casos favorables / casos totales = {caso.favorables} / {caso.total} = {probabilidad}"

explicacion: |
  La probabilidad de un evento simple es P = casos favorables / casos totales.
  Acá hay {caso.favorables} casos favorables sobre {caso.total} posibles, así que
  P = {caso.favorables}/{caso.total} = {probabilidad}.
`;

export const MATEMATICAS_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-matematicas-probabilidad-simple",
    nombre: "Probabilidad simple: casos favorables sobre casos totales",
    descripcion:
      "Dado un experimento aleatorio simple (dado, moneda, cartas, bolsas numeradas), calcula la probabilidad de un evento como casos favorables sobre casos totales.",
    materia: "matematicas",
    tags: ["probabilidad_simple", "probabilidad"],
    subtipoOriginal: "probabilidad_simple",
    codigoDsl: PROBABILIDAD_SIMPLE_DSL,
  },
];

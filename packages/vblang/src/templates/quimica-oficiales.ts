/**
 * F6-05 — Plantillas VBLang OFICIALES para Química.
 *
 * Upgrade de 2 subtipos PARAMETRIZABLE señalados por
 * `docs/AUDITORIA_GENERADORES.md` en
 * `apps/web/src/generadoresV2/quimica/AtomosEnlaces.ts`: `particulas_subatomicas`
 * y `configuracion_electronica`.
 *
 * `particulas_subatomicas`: tabla de 11 elementos (subconjunto de
 * `ELEMENTOS` de `AtomosEnlaces.ts`, H a Fe) con protones/neutrones/electrones.
 * Se sortea el elemento Y cuál de las 3 partículas se pregunta, e indexa
 * dinámicamente `el[particula.clave]` (mismo patrón de F6-04/F6-05
 * `genetica_mendel`). El número másico A = p + n se calcula (no es un dato
 * de la tabla), reforzando el cómputo p/n/e desde Z y A que pedía el issue.
 *
 * `configuracion_electronica`: la auditoría señalaba que el original tenía
 * "distractores fijos, `.slice(0,3)` sin barajar, siempre los mismos 3".
 * Acá Z se sortea en 1..20 (H a Ca, antes de las excepciones de Aufbau de
 * Cr/Cu en Z>=24) y se aplica Aufbau real: una tabla de 6 subniveles (1s,
 * 2s, 2p, 3s, 3p, 4s) con límites acumulados de electrones, más
 * `primero(filtrar(...))` para encontrar el subnivel donde cae Z (mismo
 * patrón de lookup que `monotributo` en F6-04).
 */
import type { PlantillaOficial } from "./types.js";

const PARTICULAS_SUBATOMICAS_DSL = `metadata:
  materia: "quimica"
  nivel: "intermedio"
  tags: ["particulas_subatomicas", "atomo"]

variables:
  elementos: [{ simbolo: "H", nombre: "hidrógeno", Z: 1, proton: 1, neutron: 0, electron: 1 }, { simbolo: "He", nombre: "helio", Z: 2, proton: 2, neutron: 2, electron: 2 }, { simbolo: "Li", nombre: "litio", Z: 3, proton: 3, neutron: 4, electron: 3 }, { simbolo: "C", nombre: "carbono", Z: 6, proton: 6, neutron: 6, electron: 6 }, { simbolo: "N", nombre: "nitrógeno", Z: 7, proton: 7, neutron: 7, electron: 7 }, { simbolo: "O", nombre: "oxígeno", Z: 8, proton: 8, neutron: 8, electron: 8 }, { simbolo: "Na", nombre: "sodio", Z: 11, proton: 11, neutron: 12, electron: 11 }, { simbolo: "Mg", nombre: "magnesio", Z: 12, proton: 12, neutron: 12, electron: 12 }, { simbolo: "Cl", nombre: "cloro", Z: 17, proton: 17, neutron: 18, electron: 17 }, { simbolo: "Ca", nombre: "calcio", Z: 20, proton: 20, neutron: 20, electron: 20 }, { simbolo: "Fe", nombre: "hierro", Z: 26, proton: 26, neutron: 30, electron: 26 }]
  el: uno_de(elementos)
  particulas: [{ nombre: "protones", clave: "proton" }, { nombre: "neutrones", clave: "neutron" }, { nombre: "electrones", clave: "electron" }]
  particula: uno_de(particulas)
  masa: el.proton + el.neutron
  resultado: el[particula.clave]

enunciado: "El {el.nombre} ({el.simbolo}, Z={el.Z}) tiene número másico A={masa}. ¿Cuántos {particula.nombre} tiene?"
tipo: input
respuesta: resultado

pasos:
  - "Z = {el.Z} = número de protones = número de electrones."
  - "N = A − Z = {masa} − {el.Z} = {el.neutron} neutrones."

explicacion: |
  El {el.nombre} tiene {el.proton} protones, {el.neutron} neutrones y {el.electron} electrones (átomo neutro: protones = electrones = Z).
`;

const CONFIGURACION_ELECTRONICA_DSL = `metadata:
  materia: "quimica"
  nivel: "avanzado"
  tags: ["configuracion_electronica", "aufbau"]

variables:
  z: random(1, 20)
  niveles: [{ orbital: "1s", hasta: 2, base: 0 }, { orbital: "2s", hasta: 4, base: 2 }, { orbital: "2p", hasta: 10, base: 4 }, { orbital: "3s", hasta: 12, base: 10 }, { orbital: "3p", hasta: 18, base: 12 }, { orbital: "4s", hasta: 20, base: 18 }]
  nivel_actual: primero(filtrar(niveles, item.hasta >= z))
  electrones_subnivel: z - nivel_actual.base

enunciado: "Un átomo tiene número atómico Z={z}. Según el principio de Aufbau, ¿cuántos electrones hay en el subnivel {nivel_actual.orbital} (el último en llenarse)?"
tipo: input
respuesta: electrones_subnivel

pasos:
  - "Orden de llenado (Aufbau): 1s, 2s, 2p, 3s, 3p, 4s..."
  - "Los subniveles anteriores a {nivel_actual.orbital} están completos ({nivel_actual.base} electrones en total)."
  - "Electrones restantes para {nivel_actual.orbital}: {z} − {nivel_actual.base} = {electrones_subnivel}."

explicacion: |
  Con Z={z}, llenando los subniveles en el orden de Aufbau (1s, 2s, 2p, 3s, 3p, 4s, ...),
  el subnivel {nivel_actual.orbital} es el último en ocuparse, con {electrones_subnivel} electrones.
`;

export const QUIMICA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-quimica-particulas-subatomicas",
    nombre: "Partículas subatómicas: protones, neutrones y electrones",
    descripcion:
      "A partir del número atómico Z y el número másico A de un elemento, calcula la cantidad de protones, neutrones o electrones que se pregunten.",
    materia: "quimica",
    tags: ["particulas_subatomicas", "atomo"],
    subtipoOriginal: "particulas_subatomicas",
    codigoDsl: PARTICULAS_SUBATOMICAS_DSL,
  },
  {
    id: "oficial-quimica-configuracion-electronica",
    nombre: "Configuración electrónica: principio de Aufbau",
    descripcion:
      "Dado el número atómico Z de un elemento (Z entre 1 y 20), determina cuántos electrones ocupan el último subnivel en llenarse según el principio de Aufbau.",
    materia: "quimica",
    tags: ["configuracion_electronica", "aufbau"],
    subtipoOriginal: "configuracion_electronica",
    codigoDsl: CONFIGURACION_ELECTRONICA_DSL,
  },
];

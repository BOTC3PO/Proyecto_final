/**
 * WO-7b-ext — Plantillas VBLang OFICIALES para Física/Ondas.
 *
 * Continuación del porting numérico de Física. Cubre los 3 subtipos del
 * generador `apps/web/src/generadoresV2/fisica/Ondas.ts` (rama `basico`):
 *
 *  - velocidad_ondas  (v = f · λ, con 3 variantes: v / f / λ)
 *  - longitud_onda    (λ = v / f para sonido en aire/agua, con 2 variantes: λ / f)
 *  - frecuencia_periodo (f = 1 / T, con 2 variantes: f desde T / T desde f)
 *
 * Verificación: `apps/web/src/generadoresV2/__tests__/porting-fisica-ondas-equivalencia.spec.ts`
 * (oráculo compartido generador real ≡ oráculo ≡ plantilla real).
 *
 * Decisión: igual que en `fisica-dinamica-oficiales.ts` y
 * `fisica-electricidad-oficiales.ts`, las variantes múltiples
 * precomputan todos los inputs numéricos en `variables:` y seleccionan
 * (enunciado, respuesta, unidad) por índice.
 */
import type { PlantillaOficial } from "./types.js";

// velocidad_ondas: 3 variantes (v / f / λ). f ∈ [100, 1000] Hz,
// λ ∈ [1, 10] m.
const ONDAS_VELOCIDAD_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["ondas", "velocidad_ondas", "fisica"]

variables:
  f: random(100, 1000)
  lambda: redondear(random_float(1, 10, 2), 2)
  v: redondear(f * lambda, 2)
  enun_v: "Una onda tiene f=" + f + " Hz y λ=" + lambda + " m. ¿Cuál es su velocidad?"
  enun_f: "Una onda viaja a " + v + " m/s con λ=" + lambda + " m. ¿Cuál es su frecuencia?"
  enun_l: "Una onda viaja a " + v + " m/s con f=" + f + " Hz. ¿Cuál es su longitud de onda?"
  enuns: [enun_v, enun_f, enun_l]
  respuestas: [v, f, lambda]
  unidades: ["m/s", "Hz", "m"]
  pasos_list: ["v = f · λ = " + f + " · " + lambda + " = " + v + " m/s", "f = v / λ = " + v + " / " + lambda + " = " + f + " Hz", "λ = v / f = " + v + " / " + f + " = " + lambda + " m"]
  idx: uno_de([0, 1, 2])
  enun: enuns[idx]
  valor: respuestas[idx]
  unit: unidades[idx]
  paso: pasos_list[idx]

respuesta: valor
tipo: input
tolerancia_abs: 0.01
unidad: "{unit}"

enunciado: "{enun}"

pasos:
  - "{paso}"

explicacion: |
  La velocidad de onda es v = f · λ. Dados dos de los tres, se despeja el
  tercero. En este caso f = {f} Hz y λ = {lambda} m, luego v = {v} m/s.
`;

// longitud_onda: 2 variantes (λ / f) con velocidad del sonido en
// aire (340 m/s) o agua (1500 m/s). f ∈ [20, 500] Hz. Las respuestas
// se COMPUTAN desde la fórmula (igual que el `calculadora.ts` del
// generador) para absorber el drift del redondeo de λ a 4 decimales.
const ONDAS_LONGITUD_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["ondas", "longitud_onda", "fisica"]

variables:
  f: random(20, 500)
  medios: [{ nombre: "aire", v: 340 }, { nombre: "agua", v: 1500 }]
  medio: uno_de(medios)
  v: medio.v
  nombre: medio.nombre
  lambda: redondear(v / f, 4)
  enun_l: "El sonido en " + nombre + " (v=" + v + " m/s) tiene f=" + f + " Hz. ¿Cuál es su longitud de onda?"
  enun_f: "El sonido en " + nombre + " (v=" + v + " m/s) tiene λ=" + lambda + " m. ¿Cuál es su frecuencia?"
  enuns: [enun_l, enun_f]
  respuestas: [lambda, redondear(v / lambda, 3)]
  unidades: ["m", "Hz"]
  pasos_list: ["λ = v / f = " + v + " / " + f + " = " + lambda + " m", "f = v / λ = " + v + " / " + lambda + " = " + redondear(v / lambda, 3) + " Hz"]
  idx: uno_de([0, 1])
  enun: enuns[idx]
  valor: respuestas[idx]
  unit: unidades[idx]
  paso: pasos_list[idx]

respuesta: valor
tipo: input
tolerancia_abs: 0.01
unidad: "{unit}"

enunciado: "{enun}"

pasos:
  - "{paso}"

explicacion: |
  En una onda, λ = v / f. En {nombre} la velocidad del sonido es
  v = {v} m/s, por lo que con f = {f} Hz la longitud de onda es
  λ = {lambda} m.
`;

// frecuencia_periodo: 2 variantes (f desde T / T desde f). f ∈ [1, 100] Hz.
// Las respuestas se COMPUTAN desde 1/x con redondeo a 6 decimales
// (igual que el `calculadora.ts` del generador) para absorber el
// drift del redondeo de T a 6 decimales.
const ONDAS_FREC_PERIODO_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["ondas", "frecuencia_periodo", "fisica"]

variables:
  f: random(1, 100)
  T: redondear(1 / f, 6)
  enun_f: "Una onda tiene período T=" + T + " s. ¿Cuál es su frecuencia?"
  enun_T: "Una onda tiene frecuencia f=" + f + " Hz. ¿Cuál es su período?"
  enuns: [enun_f, enun_T]
  respuestas: [redondear(1 / T, 6), T]
  unidades: ["Hz", "s"]
  pasos_list: ["f = 1 / T = 1 / " + T + " = " + redondear(1 / T, 6) + " Hz", "T = 1 / f = 1 / " + f + " = " + T + " s"]
  idx: uno_de([0, 1])
  enun: enuns[idx]
  valor: respuestas[idx]
  unit: unidades[idx]
  paso: pasos_list[idx]

respuesta: valor
tipo: input
tolerancia_abs: 0.0001
unidad: "{unit}"

enunciado: "{enun}"

pasos:
  - "{paso}"

explicacion: |
  La frecuencia y el período se relacionan por f = 1 / T. Con f = {f} Hz
  el período es T = {T} s, y recíprocamente.
`;

export const FISICA_ONDAS_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-fisica-ondas-velocidad",
    nombre: "Velocidad de onda: v = f·λ (3 variantes)",
    descripcion:
      "Calcula velocidad / frecuencia / longitud de onda sorteando la incógnita. f ∈ [100, 1000] Hz, λ ∈ [1, 10] m. Rama basico del subtipo `velocidad_ondas` de Ondas.",
    materia: "fisica",
    tags: ["ondas", "velocidad_ondas", "fisica"],
    subtipoOriginal: "velocidad_ondas",
    codigoDsl: ONDAS_VELOCIDAD_DSL,
  },
  {
    id: "oficial-fisica-ondas-longitud",
    nombre: "Longitud de onda: λ = v/f (sonido en aire/agua)",
    descripcion:
      "Calcula longitud / frecuencia con la velocidad del sonido en aire (340 m/s) o agua (1500 m/s). f ∈ [20, 500] Hz. Rama basico del subtipo `longitud_onda` de Ondas.",
    materia: "fisica",
    tags: ["ondas", "longitud_onda", "fisica"],
    subtipoOriginal: "longitud_onda",
    codigoDsl: ONDAS_LONGITUD_DSL,
  },
  {
    id: "oficial-fisica-ondas-frecuencia-periodo",
    nombre: "Relación frecuencia-período: f = 1/T",
    descripcion:
      "Calcula frecuencia o período a partir del otro. f ∈ [1, 100] Hz. Rama basico del subtipo `frecuencia_periodo` de Ondas.",
    materia: "fisica",
    tags: ["ondas", "frecuencia_periodo", "fisica"],
    subtipoOriginal: "frecuencia_periodo",
    codigoDsl: ONDAS_FREC_PERIODO_DSL,
  },
];

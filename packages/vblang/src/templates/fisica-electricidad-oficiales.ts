/**
 * WO-7b-ext — Plantillas VBLang OFICIALES para Física/Electricidad.
 *
 * Continuación del porting numérico de Física. Cubre 3 subtipos del
 * generador `apps/web/src/generadoresV2/fisica/Electricidad.ts` (rama
 * `basico`):
 *
 *  - ley_ohm (3 variantes: V / I / R)
 *  - potencia_electrica (P = V · I)
 *  - consumo_electrico (E = (P · t) / 1000 [kWh])
 *
 * **Gaps documentados (insumo WO-8):**
 *
 *  - `resistencia_serie` (Rt = ΣRi) y `resistencia_paralelo`
 *    (1/Rt = Σ(1/Ri)) reciben un array de tamaño variable
 *    (`resistencias: number[]` con 2-4 elementos sorteados). El DSL no
 *    soporta `reduce` ni arrays de tamaño variable en `variables:`.
 *    No se fuerzan con hacks. Resolutor de legado queda como está.
 *
 * Verificación: `apps/web/src/generadoresV2/__tests__/porting-fisica-electricidad-equivalencia.spec.ts`
 * (oráculo compartido generador real ≡ oráculo ≡ plantilla real).
 *
 * Decisión: igual que en `fisica-dinamica-oficiales.ts`, las 3 variantes
 * de `ley_ohm` precomputan todos los inputs numéricos (V, I, R) y
 * seleccionan (enunciado, respuesta, unidad) por índice.
 */
import type { PlantillaOficial } from "./types.js";

// ley_ohm: 3 variantes (V / I / R). V ∈ [3, 24], R ∈ [10, 100].
// Las respuestas se computan desde la fórmula (igual que el
// `calculadora.ts` del generador) en vez de devolver el valor
// pre-sorteado, para reproducir el drift introducido por el
// redondeo de I a 3 decimales (V=R*I sin redondeo, I=round2(V/R,3),
// R=round2(V/I,3)).
const ELECTRICIDAD_OHM_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["electricidad", "ley_ohm", "fisica"]

variables:
  V: random(3, 24)
  R: random(10, 100)
  I: redondear(V / R, 3)
  enun_V: "Por una resistencia de " + R + " Ω circula " + I + " A. ¿Cuál es el voltaje?"
  enun_I: "Un circuito tiene " + V + " V y " + R + " Ω. ¿Qué corriente circula?"
  enun_R: "Con " + V + " V circulan " + I + " A. ¿Cuál es la resistencia?"
  enuns: [enun_V, enun_I, enun_R]
  respuestas: [R * I, I, redondear(V / I, 3)]
  unidades: ["V", "A", "Ω"]
  pasos_list: ["V = I · R = " + I + " · " + R + " = " + R * I + " V", "I = V / R = " + V + " / " + R + " = " + I + " A", "R = V / I = " + V + " / " + I + " = " + redondear(V / I, 3) + " Ω"]
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
  La ley de Ohm relaciona voltaje, corriente y resistencia: V = I · R.
  Dados dos de los tres, se despeja el tercero. En este caso V = {V} V,
  I = {I} A, R = {R} Ω.
`;

// potencia_electrica: P = V · I. V ∈ [12, 120], I ∈ [1, 10].
const ELECTRICIDAD_POTENCIA_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["electricidad", "potencia_electrica", "fisica"]

variables:
  V: random(12, 120)
  I: random(1, 10)
  P: V * I

respuesta: P
tipo: input
tolerancia_abs: 0
unidad: "W"

enunciado: "Un dispositivo opera a {V} V y consume {I} A. ¿Cuál es la potencia?"

pasos:
  - "P = V · I = {V} · {I} = {P} W"

explicacion: |
  La potencia eléctrica se calcula como P = V · I (voltaje por corriente).
  Con V = {V} V e I = {I} A: P = {V} · {I} = {P} W.
`;

// consumo_electrico: E = (P · t) / 1000 [kWh]. P ∈ [100, 1000] W,
// t ∈ [1, 8] h.
const ELECTRICIDAD_CONSUMO_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["electricidad", "consumo_electrico", "fisica"]

variables:
  P: random(100, 1000)
  t: random(1, 8)
  E: redondear((P * t) / 1000, 4)

respuesta: E
tipo: input
tolerancia_abs: 0.001
unidad: "kWh"

enunciado: "Un aparato de {P} W funciona {t} h. ¿Cuántos kWh consume?"

pasos:
  - "E = (P · t) / 1000 = ({P} · {t}) / 1000 = {E} kWh"

explicacion: |
  El consumo eléctrico en kWh se obtiene dividiendo la potencia en watts
  por el tiempo en horas y luego por 1000. Con P = {P} W y t = {t} h:
  E = ({P} · {t}) / 1000 = {E} kWh.
`;

export const FISICA_ELECTRICIDAD_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-fisica-electricidad-ley-ohm",
    nombre: "Ley de Ohm: V = I·R (3 variantes)",
    descripcion:
      "Calcula voltaje / corriente / resistencia sorteando la incógnita. V ∈ [3, 24] V, R ∈ [10, 100] Ω. Rama basico del subtipo `ley_ohm` de Electricidad.",
    materia: "fisica",
    tags: ["electricidad", "ley_ohm", "fisica"],
    subtipoOriginal: "ley_ohm",
    codigoDsl: ELECTRICIDAD_OHM_DSL,
  },
  {
    id: "oficial-fisica-electricidad-potencia",
    nombre: "Potencia eléctrica: P = V·I",
    descripcion:
      "Calcula la potencia eléctrica P = V·I con V ∈ [12, 120] V e I ∈ [1, 10] A. Rama basico del subtipo `potencia_electrica` de Electricidad.",
    materia: "fisica",
    tags: ["electricidad", "potencia_electrica", "fisica"],
    subtipoOriginal: "potencia_electrica",
    codigoDsl: ELECTRICIDAD_POTENCIA_DSL,
  },
  {
    id: "oficial-fisica-electricidad-consumo",
    nombre: "Consumo eléctrico: E = (P·t)/1000 kWh",
    descripcion:
      "Calcula el consumo en kWh con P ∈ [100, 1000] W y t ∈ [1, 8] h. Rama basico del subtipo `consumo_electrico` de Electricidad.",
    materia: "fisica",
    tags: ["electricidad", "consumo_electrico", "fisica"],
    subtipoOriginal: "consumo_electrico",
    codigoDsl: ELECTRICIDAD_CONSUMO_DSL,
  },
];

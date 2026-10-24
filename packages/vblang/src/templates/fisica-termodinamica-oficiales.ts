/**
 * WO-7b-ext — Plantillas VBLang OFICIALES para Física/Termodinámica.
 *
 * Continuación del porting numérico de Física. Cubre los 4 subtipos del
 * generador `apps/web/src/generadoresV2/fisica/Termodinamica.ts` (rama
 * `basico`):
 *
 *  - calor                  (Q = m · c · ΔT, con 3 variantes: Q / m / ΔT)
 *  - conversion_temperatura (°C ↔ °F, °C ↔ K; 4 variantes)
 *  - cambios_estado         (Q = m · L, fusión o vaporización del agua)
 *  - dilatacion_termica     (ΔL = L0 · α · ΔT)
 *
 * Verificación: `apps/web/src/generadoresV2/__tests__/porting-fisica-termodinamica-equivalencia.spec.ts`
 * (oráculo compartido generador real ≡ oráculo ≡ plantilla real).
 *
 * Decisión: las variantes múltiples precomputan todos los inputs en
 * `variables:` y seleccionan (enunciado, respuesta, unidad) por índice
 * (mismo patrón que `fisica-dinamica-oficiales.ts`).
 *
 * Nota sobre `calor`: el calor específico c se sortea entre 4 metales
 * (agua, cobre, aluminio, hierro) usando el mismo c del generador:
 *  - agua       4.18 J/(g·°C)
 *  - cobre      0.385 J/(g·°C)
 *  - aluminio   0.9 J/(g·°C)
 *  - hierro     0.45 J/(g·°C)
 *
 * Nota sobre `conversion_temperatura`: el generador sortea entre
 * C→F / F→C / C→K / K→C, con rangos distintos para las direcciones
 * "hacia X" (F→C entra a [32, 212], K→C a [273, 573]). La plantilla
 * reproduce la asimetría usando arrays de rangos por variante.
 */
import type { PlantillaOficial } from "./types.js";

// calor: 3 variantes (Q / m / ΔT). masa ∈ [100, 500] g, ΔT ∈ [10, 50]°C.
const TERMO_CALOR_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["termodinamica", "calor", "fisica"]

variables:
  masa: random(100, 500)
  deltaT: random(10, 50)
  cs: [{ c: 4.18, n: "agua" }, { c: 0.385, n: "cobre" }, { c: 0.9, n: "aluminio" }, { c: 0.45, n: "hierro" }]
  pick: uno_de(cs)
  c: pick.c
  nombre: pick.n
  Q: redondear(masa * c * deltaT, 2)
  enun_Q: "¿Cuánto calor se necesita para elevar " + masa + " g de una sustancia (c=" + c + " J/g°C) en " + deltaT + "°C?"
  enun_m: "Se absorben " + Q + " J con c=" + c + " J/g°C y ΔT=" + deltaT + "°C. ¿Cuál es la masa?"
  enun_dT: Q + " J calientan " + masa + " g de una sustancia (c=" + c + " J/g°C). ¿En cuánto sube la temperatura?"
  enuns: [enun_Q, enun_m, enun_dT]
  respuestas: [Q, masa, deltaT]
  unidades: ["J", "g", "°C"]
  pasos_list: ["Q = m · c · ΔT = " + masa + " · " + c + " · " + deltaT + " = " + Q + " J", "m = Q / (c · ΔT) = " + Q + " / (" + c + " · " + deltaT + ") = " + masa + " g", "ΔT = Q / (m · c) = " + Q + " / (" + masa + " · " + c + ") = " + deltaT + " °C"]
  idx: uno_de([0, 1, 2])
  enun: enuns[idx]
  valor: respuestas[idx]
  unit: unidades[idx]
  paso: pasos_list[idx]

respuesta: valor
tipo: input
tolerancia_abs: 0.05
unidad: "{unit}"

enunciado: "{enun}"

pasos:
  - "{paso}"

explicacion: |
  El calor sensible es Q = m · c · ΔT, con c el calor específico (en
  J/(g·°C)). Dados dos de los tres, se despeja el tercero. En este caso,
  con m = {masa} g de {nombre} (c = {c} J/g°C) y ΔT = {deltaT}°C, se
  obtiene Q = {Q} J.
`;

// conversion_temperatura: 4 variantes. El generador sortea entre
// C→F / F→C / C→K / K→C, con entrada restringida por dirección.
const TERMO_CONV_TEMP_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["termodinamica", "conversion_temperatura", "fisica"]

variables:
  tC: random(0, 100)
  tF: random(32, 212)
  tK: random(273, 573)
  rCF: redondear(tC * (9 / 5) + 32, 2)
  rFC: redondear((tF - 32) * (5 / 9), 2)
  rCK: redondear(tC + 273.15, 2)
  rKC: redondear(tK - 273.15, 2)
  cands: [{ f: "F = (C × 9/5) + 32", r: rCF, enun_in: tC, desde: "°C", hasta: "°F" }, { f: "C = (F − 32) × 5/9", r: rFC, enun_in: tF, desde: "°F", hasta: "°C" }, { f: "K = C + 273.15", r: rCK, enun_in: tC, desde: "°C", hasta: "K" }, { f: "C = K − 273.15", r: rKC, enun_in: tK, desde: "K", hasta: "°C" }]
  pick: uno_de(cands)
  enun_in: pick.enun_in
  enun_desde: pick.desde
  enun_hasta: pick.hasta
  r: pick.r
  formula: pick.f

respuesta: r
tipo: input
tolerancia_abs: 0.01
unidad: "{enun_hasta}"

enunciado: "Convierte {enun_in} {enun_desde} a {enun_hasta}."

pasos:
  - "{formula} = {r} {enun_hasta}"

explicacion: |
  Las conversiones entre escalas de temperatura son:
  °C a °F — F = (C × 9/5) + 32;  °F a °C — C = (F − 32) × 5/9;
  °C a K — K = C + 273.15;  K a °C — C = K − 273.15.
  En este caso {enun_in} {enun_desde} equivalen a {r} {enun_hasta}.
`;

// cambios_estado: Q = m · L. masa ∈ [100, 500] g. Proceso: fusión (L=334)
// o vaporización (L=2260).
const TERMO_CAMBIO_ESTADO_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["termodinamica", "cambios_estado", "fisica"]

variables:
  masa: random(100, 500)
  procs: [{ nombre: "fundir", L: 334 }, { nombre: "vaporizar", L: 2260 }]
  proc: uno_de(procs)
  L: proc.L
  nombre: proc.nombre
  Q: redondear(masa * L, 2)

respuesta: Q
tipo: input
tolerancia_abs: 0.01
unidad: "J"

enunciado: "¿Cuánto calor se necesita para {nombre} {masa} g de agua (L={L} J/g)?"

pasos:
  - "Q = m · L = {masa} · {L} = {Q} J"

explicacion: |
  El calor latente de cambio de estado es Q = m · L, con L el calor
  latente específico (J/g). Para fundir hielo L = 334 J/g, para
  vaporizar agua L = 2260 J/g. Con m = {masa} g, Q = {masa} · {L} = {Q} J.
`;

// dilatacion_termica: ΔL = L0 · α · ΔT. L0 ∈ [0.5, 5] m, ΔT ∈ [10, 50]°C.
// α ∈ {acero 1.2e-5, aluminio 2.3e-5, cobre 1.7e-5}.
const TERMO_DILATACION_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["termodinamica", "dilatacion_termica", "fisica"]

variables:
  L0: redondear(random_float(0.5, 5, 1), 1)
  deltaT: random(10, 50)
  mats: [{ nombre: "acero", alfa: 1.2e-5 }, { nombre: "aluminio", alfa: 2.3e-5 }, { nombre: "cobre", alfa: 1.7e-5 }]
  mat: uno_de(mats)
  alfa: mat.alfa
  nombre: mat.nombre
  deltaL: redondear(L0 * alfa * deltaT, 4)

respuesta: deltaL
tipo: input
tolerancia_abs: 1e-6
unidad: "m"

enunciado: "Una barra de {nombre} de {L0} m se calienta {deltaT}°C (α={alfa} 1/°C). ¿Cuánto se dilata?"

pasos:
  - "ΔL = L0 · α · ΔT = {L0} · {alfa} · {deltaT} = {deltaL} m"

explicacion: |
  La dilatación lineal es ΔL = L0 · α · ΔT, con α el coeficiente de
  dilatación lineal del material. Para {nombre} α = {alfa} 1/°C. Con
  L0 = {L0} m y ΔT = {deltaT}°C: ΔL = {L0} · {alfa} · {deltaT} = {deltaL} m.
`;

export const FISICA_TERMODINAMICA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-fisica-termodinamica-calor",
    nombre: "Calor sensible: Q = m·c·ΔT (3 variantes)",
    descripcion:
      "Calcula calor / masa / ΔT sorteando la incógnita, con c ∈ {agua 4.18, cobre 0.385, aluminio 0.9, hierro 0.45} J/(g·°C). masa ∈ [100, 500] g, ΔT ∈ [10, 50]°C. Rama basico del subtipo `calor` de Termodinamica.",
    materia: "fisica",
    tags: ["termodinamica", "calor", "fisica"],
    subtipoOriginal: "calor",
    codigoDsl: TERMO_CALOR_DSL,
  },
  {
    id: "oficial-fisica-termodinamica-conversion-temperatura",
    nombre: "Conversión de temperatura: °C ↔ °F, °C ↔ K",
    descripcion:
      "Convierte entre °C, °F y K sorteando entre las 4 direcciones (con rangos distintos por dirección). Rama basico del subtipo `conversion_temperatura` de Termodinamica.",
    materia: "fisica",
    tags: ["termodinamica", "conversion_temperatura", "fisica"],
    subtipoOriginal: "conversion_temperatura",
    codigoDsl: TERMO_CONV_TEMP_DSL,
  },
  {
    id: "oficial-fisica-termodinamica-cambios-estado",
    nombre: "Cambio de estado: Q = m·L (fusión/vaporización)",
    descripcion:
      "Calcula el calor latente Q = m·L con m ∈ [100, 500] g, L = 334 (fusión) o 2260 (vaporización) J/g. Rama basico del subtipo `cambios_estado` de Termodinamica.",
    materia: "fisica",
    tags: ["termodinamica", "cambios_estado", "fisica"],
    subtipoOriginal: "cambios_estado",
    codigoDsl: TERMO_CAMBIO_ESTADO_DSL,
  },
  {
    id: "oficial-fisica-termodinamica-dilatacion",
    nombre: "Dilatación térmica lineal: ΔL = L0·α·ΔT",
    descripcion:
      "Calcula ΔL = L0·α·ΔT para acero/aluminio/cobre. L0 ∈ [0.5, 5] m, ΔT ∈ [10, 50]°C. Rama basico del subtipo `dilatacion_termica` de Termodinamica.",
    materia: "fisica",
    tags: ["termodinamica", "dilatacion_termica", "fisica"],
    subtipoOriginal: "dilatacion_termica",
    codigoDsl: TERMO_DILATACION_DSL,
  },
];

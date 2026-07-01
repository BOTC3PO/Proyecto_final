/**
 * WO-7b-ext — Plantillas VBLang OFICIALES para Física/Fluidos.
 *
 * Continuación del porting numérico de Física. Cubre los 4 subtipos del
 * generador `apps/web/src/generadoresV2/fisica/Fluidos.ts` (rama `basico`):
 *
 *  - densidad              (ρ = m / V, con 3 variantes: ρ / m / V)
 *  - presion               (P = F / A, con 3 variantes: P / F / A)
 *  - presion_hidrostatica  (P = ρ · g · h)
 *  - caudal                (Q = A · v)
 *
 * Verificación: `apps/web/src/generadoresV2/__tests__/porting-fisica-fluidos-equivalencia.spec.ts`
 * (oráculo compartido generador real ≡ oráculo ≡ plantilla real).
 *
 * Decisión: las variantes múltiples precomputan todos los inputs en
 * `variables:` y seleccionan (enunciado, respuesta, unidad) por índice
 * (mismo patrón que `fisica-dinamica-oficiales.ts`).
 *
 * Nota sobre `densidad`: el generador sortea `masa ∈ [100, 2000] g`
 * y `volL ∈ [1, 10] L` y luego convierte a SI: `masaKg = masa/1000`,
 * `volM3 = volL/1000`, `densidad = masaKg/volM3 = masa/(volL*1000)`.
 * La plantilla reproduce el mismo flujo de conversión explícito.
 */
import type { PlantillaOficial } from "./types.js";

// densidad: 3 variantes (ρ / m / V). masa ∈ [100, 2000] g, volL ∈ [1, 10] L.
const FLUIDOS_DENSIDAD_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["fluidos", "densidad", "fisica"]

variables:
  masa: random(100, 2000)
  volL: redondear(random_float(1, 10, 2), 2)
  masaKg: masa / 1000
  volM3: volL / 1000
  rho: redondear(masaKg / volM3, 2)
  enun_rho: "Un objeto pesa " + masaKg + " kg y ocupa " + volM3 + " m³. ¿Cuál es su densidad?"
  enun_m: "Un fluido de densidad " + rho + " kg/m³ ocupa " + volM3 + " m³. ¿Cuál es su masa?"
  enun_V: "Un fluido de densidad " + rho + " kg/m³ tiene masa " + masaKg + " kg. ¿Cuál es su volumen?"
  enuns: [enun_rho, enun_m, enun_V]
  respuestas: [rho, masaKg, volM3]
  unidades: ["kg/m³", "kg", "m³"]
  pasos_list: ["ρ = m / V = " + masaKg + " / " + volM3 + " = " + rho + " kg/m³", "m = ρ · V = " + rho + " · " + volM3 + " = " + masaKg + " kg", "V = m / ρ = " + masaKg + " / " + rho + " = " + volM3 + " m³"]
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
  La densidad es ρ = m / V (con m en kg y V en m³ para obtener kg/m³).
  Dados dos de los tres, se despeja el tercero. En este caso
  m = {masaKg} kg y V = {volM3} m³, luego ρ = {rho} kg/m³.
`;

// presion: 3 variantes (P / F / A). F ∈ [10, 500] N, A ∈ [0.01, 1] m².
const FLUIDOS_PRESION_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["fluidos", "presion", "fisica"]

variables:
  F: random(10, 500)
  A: redondear(random_float(0.01, 1, 2), 2)
  P: redondear(F / A, 2)
  enun_P: "Una fuerza de " + F + " N actúa sobre un área de " + A + " m². ¿Cuál es la presión?"
  enun_F: "Una presión de " + P + " Pa actúa sobre " + A + " m². ¿Cuál es la fuerza?"
  enun_A: "Una fuerza de " + F + " N genera una presión de " + P + " Pa. ¿Cuál es el área?"
  enuns: [enun_P, enun_F, enun_A]
  respuestas: [P, F, A]
  unidades: ["Pa", "N", "m²"]
  pasos_list: ["P = F / A = " + F + " / " + A + " = " + P + " Pa", "F = P · A = " + P + " · " + A + " = " + F + " N", "A = F / P = " + F + " / " + P + " = " + A + " m²"]
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
  La presión es P = F / A. Dados dos de los tres, se despeja el tercero.
  En este caso F = {F} N y A = {A} m², luego P = {P} Pa.
`;

// presion_hidrostatica: P = ρ · g · h. h ∈ [1, 10] m. ρ ∈ {1000 (agua),
// 1025 (agua de mar)}. Misma nota sobre G = 9.8 vs g global.
const FLUIDOS_PRESION_HIDRO_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["fluidos", "presion_hidrostatica", "fisica"]

variables:
  h: random(1, 10)
  medios: [{ nombre: "agua", rho: 1000 }, { nombre: "agua de mar", rho: 1025 }]
  medio: uno_de(medios)
  rho: medio.rho
  nombre: medio.nombre
  P: redondear(rho * 9.8 * h, 2)

respuesta: P
tipo: input
tolerancia_abs: 0.05
unidad: "Pa"

enunciado: "¿Cuál es la presión hidrostática a {h} m de profundidad en {nombre} (ρ={rho} kg/m³, g=9.8 m/s²)?"

pasos:
  - "P = ρ · g · h = {rho} · 9.8 · {h} = {P} Pa"

explicacion: |
  La presión hidrostática es P = ρ · g · h. Con ρ = {rho} kg/m³,
  g = 9.8 m/s² y h = {h} m, P = {rho} · 9.8 · {h} = {P} Pa.
`;

// caudal: Q = A · v. A ∈ [0.01, 0.5] m², v ∈ [1, 10] m/s.
const FLUIDOS_CAUDAL_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["fluidos", "caudal", "fisica"]

variables:
  A: redondear(random_float(0.01, 0.5, 3), 3)
  v: random(1, 10)
  Q: redondear(A * v, 4)

respuesta: Q
tipo: input
tolerancia_abs: 0.001
unidad: "m³/s"

enunciado: "Un tubo de sección {A} m² conduce fluido a {v} m/s. ¿Cuál es el caudal?"

pasos:
  - "Q = A · v = {A} · {v} = {Q} m³/s"

explicacion: |
  El caudal es Q = A · v (área de la sección transversal por velocidad del
  fluido). Con A = {A} m² y v = {v} m/s: Q = {A} · {v} = {Q} m³/s.
`;

export const FISICA_FLUIDOS_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-fisica-fluidos-densidad",
    nombre: "Densidad: ρ = m/V (3 variantes)",
    descripcion:
      "Calcula densidad / masa / volumen sorteando la incógnita. masa ∈ [100, 2000] g, vol ∈ [1, 10] L (convertidos a kg/m³). Rama basico del subtipo `densidad` de Fluidos.",
    materia: "fisica",
    tags: ["fluidos", "densidad", "fisica"],
    subtipoOriginal: "densidad",
    codigoDsl: FLUIDOS_DENSIDAD_DSL,
  },
  {
    id: "oficial-fisica-fluidos-presion",
    nombre: "Presión: P = F/A (3 variantes)",
    descripcion:
      "Calcula presión / fuerza / área sorteando la incógnita. F ∈ [10, 500] N, A ∈ [0.01, 1] m². Rama basico del subtipo `presion` de Fluidos.",
    materia: "fisica",
    tags: ["fluidos", "presion", "fisica"],
    subtipoOriginal: "presion",
    codigoDsl: FLUIDOS_PRESION_DSL,
  },
  {
    id: "oficial-fisica-fluidos-presion-hidrostatica",
    nombre: "Presión hidrostática: P = ρ·g·h",
    descripcion:
      "Calcula la presión hidrostática en agua o agua de mar a h ∈ [1, 10] m de profundidad. Rama basico del subtipo `presion_hidrostatica` de Fluidos.",
    materia: "fisica",
    tags: ["fluidos", "presion_hidrostatica", "fisica"],
    subtipoOriginal: "presion_hidrostatica",
    codigoDsl: FLUIDOS_PRESION_HIDRO_DSL,
  },
  {
    id: "oficial-fisica-fluidos-caudal",
    nombre: "Caudal: Q = A·v",
    descripcion:
      "Calcula el caudal Q = A·v con A ∈ [0.01, 0.5] m² y v ∈ [1, 10] m/s. Rama basico del subtipo `caudal` de Fluidos.",
    materia: "fisica",
    tags: ["fluidos", "caudal", "fisica"],
    subtipoOriginal: "caudal",
    codigoDsl: FLUIDOS_CAUDAL_DSL,
  },
];

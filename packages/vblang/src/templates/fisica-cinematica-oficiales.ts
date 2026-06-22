/**
 * WO-7b — Plantillas VBLang OFICIALES para Física (Cinemática).
 *
 * Primer bloque de Física portada al DSL, con el mismo contrato de
 * equivalencia (oráculo compartido) que Matemáticas/Aritmética
 * (`apps/web/src/generadoresV2/__tests__/porting-equivalencia.spec.ts`).
 *
 * Cada plantilla reproduce la FÓRMULA de un subtipo PARAMÉTRICO de
 * `apps/web/src/generadoresV2/fisica/Cinematica.ts`. La dificultad cubre
 * las 3 ramas (basico/intermedio/avanzado) pero con un único patrón por
 * subtipo (el "caso central"): las variantes (p. ej. `caida_libre` con
 * cálculo de altura máxima vs. tiempo de caída) son fórmulas distintas y
 * quedan enumeradas en el doc.
 *
 * Constante: `g = 9.8` m/s² ya está disponible como `g` en
 * `CONSTANTES_GLOBALES` (ver `evaluator/constants.ts`), por lo que las
 * plantillas no la redeclaran.
 *
 * Alcance del port:
 *  - cinematica-mru     → MRU: x = v·t
 *  - cinematica-mruv    → MRUV (velocidad final): vf = v0 + a·t
 *  - cinematica-caida-libre → caida libre: v = g·t
 *  - cinematica-relacion-dt → d/v/t según el caso sorteado
 *  - cinematica-conversion-unidades → conversión km/h ↔ m/s
 *
 * Decisión: para `relacion_distancia_tiempo` la plantilla cubre las 3
 * variantes (encontrar d, v o t) usando `uno_de` con un array de objetos
 * precomputados (mismo patrón que `perimetro_area`: el DSL no soporta
 * `?:`).
 */
import type { PlantillaOficial } from "./types.js";

const CINEMATICA_MRU_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["cinematica", "mru", "fisica"]

variables:
  v: random(10, 60)
  t: random(1, 5)
  distancia: v * t

respuesta: distancia
tipo: input
tolerancia_abs: 0.5
unidad: "m"

enunciado: "Un vehículo se desplaza a {v} m/s durante {t} s. ¿Qué distancia recorre?"

pasos:
  - "d = v · t = {v} · {t} = {distancia} m"

explicacion: |
  En movimiento rectilíneo uniforme (MRU) la distancia recorrida es
  d = v · t. Con v = {v} m/s y t = {t} s, d = {v} × {t} = {distancia} m.
`;

const CINEMATICA_MRUV_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["cinematica", "mruv", "fisica"]

variables:
  v0: random(0, 10)
  a: random(1, 5)
  t: random(1, 5)
  vf: v0 + a * t

respuesta: vf
tipo: input
tolerancia_abs: 0
unidad: "m/s"

enunciado: "Un objeto parte con v₀ = {v0} m/s y acelera a = {a} m/s². ¿Cuál es su velocidad tras {t} s?"

pasos:
  - "vf = v0 + a · t = {v0} + {a} · {t} = {vf} m/s"

explicacion: |
  En movimiento rectilíneo uniformemente variado (MRUV) la velocidad final
  es vf = v0 + a · t. Con v0 = {v0} m/s, a = {a} m/s² y t = {t} s:
  vf = {v0} + {a} × {t} = {vf} m/s.
`;

const CINEMATICA_CAIDA_LIBRE_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["cinematica", "caida_libre", "fisica"]

variables:
  t: random(1, 5)
  # g es 9.8 (CONSTANTES_GLOBALES).
  v: g * t

respuesta: v
tipo: input
tolerancia_abs: 0.01
unidad: "m/s"

enunciado: "Un objeto cae libremente durante {t} s (g = 9.8 m/s²). ¿Cuál es su velocidad al impactar?"

pasos:
  - "v = g · t = 9.8 · {t} = {v} m/s"

explicacion: |
  En caída libre (partiendo del reposo) la velocidad al cabo de t segundos
  es v = g · t. Con g = 9.8 m/s² y t = {t} s: v = 9.8 × {t} = {v} m/s.
`;

// relacion_distancia_tiempo cubre las 3 variantes (encontrar d, v o t).
// IMPORTANTE: el DSL no interpola dentro de variables (sólo en `enunciado:`,
// `pasos:`, `explicacion:`), así que los strings se arman con `+` y los
// `uno_de` eligen el índice para acceder al array correcto. La unidad
// también se selecciona con el mismo índice.
const CINEMATICA_RELACION_DT_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["cinematica", "relacion_distancia_tiempo", "fisica"]

variables:
  v: random(10, 60)
  t: random(1, 5)
  d: v * t
  # Strings pre-armadas por variante con concatenación (no interpolación).
  enun_d: "Un móvil va a " + v + " m/s durante " + t + " s. ¿Qué distancia recorre?"
  paso_d: "d = v · t = " + v + " · " + t + " = " + d + " m"
  enun_v: "Un móvil recorre " + d + " m en " + t + " s. ¿Cuál es su velocidad?"
  paso_v: "v = d / t = " + d + " / " + t + " = " + d / t + " m/s"
  enun_t: "Un móvil a " + v + " m/s recorre " + d + " m. ¿Cuánto tarda?"
  paso_t: "t = d / v = " + d + " / " + v + " = " + d / v + " s"
  enuns: [enun_d, enun_v, enun_t]
  pasos_list: [paso_d, paso_v, paso_t]
  valores: [d, d / t, d / v]
  unidades_list: ["m", "m/s", "s"]
  idx: uno_de([0, 1, 2])
  enun: enuns[idx]
  paso: pasos_list[idx]
  valor: valores[idx]
  unit: unidades_list[idx]

respuesta: valor
tipo: input
tolerancia_abs: 0.01
unidad: "{unit}"

enunciado: "{enun}"

pasos:
  - "{paso}"

explicacion: |
  Las tres magnitudes del MRU se relacionan por d = v · t. Dadas dos de
  ellas, se despeja la tercera. En este caso se pide {unit}, que
  resulta {valor}.
`;

// conversion_unidades: km/h ↔ m/s. Factor 3.6. El generador sortea 50/50
// entre "hacia km/h" y "hacia m/s".
const CINEMATICA_CONVERSION_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["cinematica", "conversion_unidades", "fisica"]

variables:
  v: random(10, 60)
  conversiones: [{ origen: "m/s", destino: "km/h", factor: 3.6 }, { origen: "km/h", destino: "m/s", factor: 1 / 3.6 }]
  conv: uno_de(conversiones)
  resultado: v * conv.factor

respuesta: resultado
tipo: input
tolerancia_abs: 0.01
unidad: "{conv.destino}"

enunciado: "Convierte {v} {conv.origen} a {conv.destino}."

pasos:
  - "{v} {conv.origen} × {conv.factor} = {resultado} {conv.destino}"

explicacion: |
  Para convertir entre m/s y km/h se multiplica por 3.6 (m/s → km/h) o
  se divide por 3.6 (km/h → m/s). {v} {conv.origen} × {conv.factor}
  = {resultado} {conv.destino}.
`;

export const FISICA_CINEMATICA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-fisica-cinematica-mru",
    nombre: "MRU: distancia = velocidad × tiempo",
    descripcion:
      "Calcula la distancia recorrida por un móvil en MRU (d = v·t) con v ∈ [10, 60] m/s y t ∈ [1, 5] s. Rama basico del subtipo `MRU` de Cinematica.",
    materia: "fisica",
    tags: ["cinematica", "mru", "fisica"],
    subtipoOriginal: "MRU",
    codigoDsl: CINEMATICA_MRU_DSL,
  },
  {
    id: "oficial-fisica-cinematica-mruv",
    nombre: "MRUV: velocidad final = v0 + a·t",
    descripcion:
      "Calcula la velocidad final en MRUV (vf = v0 + a·t) con v0 ∈ [0, 10] m/s, a ∈ [1, 5] m/s² y t ∈ [1, 5] s. Rama basico del subtipo `MRUV` de Cinematica.",
    materia: "fisica",
    tags: ["cinematica", "mruv", "fisica"],
    subtipoOriginal: "MRUV",
    codigoDsl: CINEMATICA_MRUV_DSL,
  },
  {
    id: "oficial-fisica-cinematica-caida-libre",
    nombre: "Caída libre: velocidad = g·t",
    descripcion:
      "Calcula la velocidad de un objeto en caída libre al cabo de t segundos (v = g·t) con g = 9.8 m/s² y t ∈ [1, 5] s. Rama basico del subtipo `caida_libre` de Cinematica.",
    materia: "fisica",
    tags: ["cinematica", "caida_libre", "fisica"],
    subtipoOriginal: "caida_libre",
    codigoDsl: CINEMATICA_CAIDA_LIBRE_DSL,
  },
  {
    id: "oficial-fisica-cinematica-relacion-dt",
    nombre: "Relación distancia-tiempo-velocidad",
    descripcion:
      "Variantes mixtas de MRU: encontrar d, v o t dados los otros dos. Cubre las 3 variantes que el generador sortea con `uno_de`. Rama basico del subtipo `relacion_distancia_tiempo` de Cinematica.",
    materia: "fisica",
    tags: ["cinematica", "relacion_distancia_tiempo", "fisica"],
    subtipoOriginal: "relacion_distancia_tiempo",
    codigoDsl: CINEMATICA_RELACION_DT_DSL,
  },
  {
    id: "oficial-fisica-cinematica-conversion",
    nombre: "Conversión de unidades: m/s ↔ km/h",
    descripcion:
      "Convierte entre m/s y km/h multiplicando o dividiendo por 3.6. v ∈ [10, 60]. Rama basico del subtipo `conversion_unidades` de Cinematica.",
    materia: "fisica",
    tags: ["cinematica", "conversion_unidades", "fisica"],
    subtipoOriginal: "conversion_unidades",
    codigoDsl: CINEMATICA_CONVERSION_DSL,
  },
];

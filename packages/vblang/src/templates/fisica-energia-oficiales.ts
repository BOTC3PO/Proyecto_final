/**
 * WO-7b-ext — Plantillas VBLang OFICIALES para Física/Energía.
 *
 * Continuación del porting numérico de Física. Cubre los 5 subtipos del
 * generador `apps/web/src/generadoresV2/fisica/Energia.ts` (rama `basico`):
 *
 *  - trabajo_mecanico       W = F · d · cos(θ)
 *  - energia_cinetica       Ec = ½ · m · v²
 *  - energia_potencial      Ep = m · g · h
 *  - conservacion_energia   v = √(2·g·h)
 *  - potencia_mecanica      P = W / t
 *
 * Verificación: `apps/web/src/generadoresV2/__tests__/porting-fisica-energia-equivalencia.spec.ts`
 * (oráculo compartido generador real ≡ oráculo ≡ plantilla real).
 *
 * Nota: el generador sortea `angulo ∈ {0, 30, 45, 60}` para
 * `trabajo_mecanico` y agrega "(θ=X°)" al enunciado sólo cuando es
 * distinto de 0°. La plantilla reproduce esta asimetría precomputando
 * ambas versiones del enunciado (con y sin la aclaración angular) y
 * seleccionando por `idx` (mismo truco que en `relacion_distancia_tiempo`).
 * El cálculo de `W` siempre incluye `cos_deg(angulo)` (cos(0°) = 1, da
 * el mismo resultado que sin ángulo).
 */
import type { PlantillaOficial } from "./types.js";

// trabajo_mecanico: W = F · d · cos(θ). F ∈ [5, 50], d ∈ [1, 20],
// θ ∈ {0, 30, 45, 60}. El generador sortea el ángulo con `pickOne` y
// omite la aclaración "(θ=X°)" del enunciado cuando θ = 0°. Reproducimos
// esto precomputando las 4 tuplas (angulo, enun) en un array y eligiendo
// con `uno_de` (mismo patrón que `conversion_unidades`).
const ENERGIA_TRABAJO_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["energia", "trabajo_mecanico", "fisica"]

variables:
  F: random(5, 50)
  d: random(1, 20)
  cands: [{ a: 0, e: "" }, { a: 30, e: " (θ=30°)" }, { a: 45, e: " (θ=45°)" }, { a: 60, e: " (θ=60°)" }]
  pick: uno_de(cands)
  angulo: pick.a
  sufijo: pick.e
  enun: "Una fuerza de " + F + " N" + sufijo + " desplaza un objeto " + d + " m. ¿Cuánto trabajo realiza?"
  W: redondear(F * d * cos_deg(angulo), 2)

respuesta: W
tipo: input
tolerancia_abs: 0.05
unidad: "J"

enunciado: "{enun}"

pasos:
  - "W = F · d · cos(θ) = {F} · {d} · cos({angulo}°) = {W} J"

explicacion: |
  El trabajo mecánico es W = F · d · cos(θ). Con F = {F} N, d = {d} m y
  θ = {angulo}°, W = {F} · {d} · cos({angulo}°) = {W} J.
`;

// energia_cinetica: Ec = ½ · m · v². m ∈ [1, 20], v ∈ [1, 10].
const ENERGIA_EC_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["energia", "energia_cinetica", "fisica"]

variables:
  m: random(1, 20)
  v: random(1, 10)
  Ec: redondear(0.5 * m * v * v, 2)

respuesta: Ec
tipo: input
tolerancia_abs: 0.01
unidad: "J"

enunciado: "Un objeto de {m} kg se mueve a {v} m/s. ¿Cuál es su energía cinética?"

pasos:
  - "Ec = ½ · m · v² = ½ · {m} · {v}² = {Ec} J"

explicacion: |
  La energía cinética es Ec = ½ · m · v². Con m = {m} kg y v = {v} m/s:
  Ec = ½ · {m} · {v}² = {Ec} J.
`;

// energia_potencial: Ep = m · g · h. m ∈ [1, 20], h ∈ [1, 10].
// Nota: el generador hardcodea G = 9.8 m/s² en `Energia.ts`, no usa
// el `g` global (9.80665). Reproducimos 9.8 explícito.
const ENERGIA_EP_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["energia", "energia_potencial", "fisica"]

variables:
  m: random(1, 20)
  h: random(1, 10)
  Ep: redondear(m * 9.8 * h, 2)

respuesta: Ep
tipo: input
tolerancia_abs: 0.01
unidad: "J"

enunciado: "Un objeto de {m} kg está a {h} m de altura. ¿Cuál es su energía potencial gravitatoria?"

pasos:
  - "Ep = m · g · h = {m} · 9.8 · {h} = {Ep} J"

explicacion: |
  La energía potencial gravitatoria es Ep = m · g · h. Con m = {m} kg,
  g = 9.8 m/s² y h = {h} m: Ep = {m} · 9.8 · {h} = {Ep} J.
`;

// conservacion_energia: v = √(2·g·h). h ∈ [1, 10]. Misma nota sobre
// G = 9.8 vs g global.
const ENERGIA_CONSERV_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["energia", "conservacion_energia", "fisica"]

variables:
  h: random(1, 10)
  v: redondear(sqrt(2 * 9.8 * h), 2)

respuesta: v
tipo: input
tolerancia_abs: 0.01
unidad: "m/s"

enunciado: "Un objeto cae desde {h} m de altura. Usando conservación de energía, ¿cuál es su velocidad al llegar al suelo?"

pasos:
  - "v = √(2 · g · h) = √(2 · 9.8 · {h}) = {v} m/s"

explicacion: |
  Por conservación de la energía, la energía potencial inicial se convierte
  totalmente en cinética al llegar al suelo: ½ · m · v² = m · g · h,
  de donde v = √(2·g·h). Con h = {h} m: v = √(2 · 9.8 · {h}) = {v} m/s.
`;

// potencia_mecanica: P = W / t. W ∈ [100, 1000] J, t ∈ [1, 10] s.
const ENERGIA_POTENCIA_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["energia", "potencia_mecanica", "fisica"]

variables:
  W: random(100, 1000)
  t: random(1, 10)
  P: redondear(W / t, 2)

respuesta: P
tipo: input
tolerancia_abs: 0.01
unidad: "W"

enunciado: "Se realiza un trabajo de {W} J en {t} s. ¿Cuál es la potencia desarrollada?"

pasos:
  - "P = W / t = {W} / {t} = {P} W"

explicacion: |
  La potencia mecánica es P = W / t. Con W = {W} J y t = {t} s:
  P = {W} / {t} = {P} W.
`;

export const FISICA_ENERGIA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-fisica-energia-trabajo-mecanico",
    nombre: "Trabajo mecánico: W = F·d·cos(θ)",
    descripcion:
      "Calcula el trabajo W = F·d·cos(θ) con F ∈ [5, 50] N, d ∈ [1, 20] m, θ ∈ {0°, 30°, 45°, 60°}. Rama basico del subtipo `trabajo_mecanico` de Energia.",
    materia: "fisica",
    tags: ["energia", "trabajo_mecanico", "fisica"],
    subtipoOriginal: "trabajo_mecanico",
    codigoDsl: ENERGIA_TRABAJO_DSL,
  },
  {
    id: "oficial-fisica-energia-cinetica",
    nombre: "Energía cinética: Ec = ½·m·v²",
    descripcion:
      "Calcula la energía cinética Ec = ½·m·v² con m ∈ [1, 20] kg y v ∈ [1, 10] m/s. Rama basico del subtipo `energia_cinetica` de Energia.",
    materia: "fisica",
    tags: ["energia", "energia_cinetica", "fisica"],
    subtipoOriginal: "energia_cinetica",
    codigoDsl: ENERGIA_EC_DSL,
  },
  {
    id: "oficial-fisica-energia-potencial",
    nombre: "Energía potencial gravitatoria: Ep = m·g·h",
    descripcion:
      "Calcula la energía potencial Ep = m·g·h con m ∈ [1, 20] kg y h ∈ [1, 10] m. Rama basico del subtipo `energia_potencial` de Energia.",
    materia: "fisica",
    tags: ["energia", "energia_potencial", "fisica"],
    subtipoOriginal: "energia_potencial",
    codigoDsl: ENERGIA_EP_DSL,
  },
  {
    id: "oficial-fisica-energia-conservacion",
    nombre: "Conservación de la energía: v = √(2·g·h)",
    descripcion:
      "Calcula la velocidad por conservación de la energía (v = √(2·g·h)) con h ∈ [1, 10] m. Rama basico del subtipo `conservacion_energia` de Energia.",
    materia: "fisica",
    tags: ["energia", "conservacion_energia", "fisica"],
    subtipoOriginal: "conservacion_energia",
    codigoDsl: ENERGIA_CONSERV_DSL,
  },
  {
    id: "oficial-fisica-energia-potencia-mecanica",
    nombre: "Potencia mecánica: P = W/t",
    descripcion:
      "Calcula la potencia mecánica P = W/t con W ∈ [100, 1000] J y t ∈ [1, 10] s. Rama basico del subtipo `potencia_mecanica` de Energia.",
    materia: "fisica",
    tags: ["energia", "potencia_mecanica", "fisica"],
    subtipoOriginal: "potencia_mecanica",
    codigoDsl: ENERGIA_POTENCIA_DSL,
  },
];

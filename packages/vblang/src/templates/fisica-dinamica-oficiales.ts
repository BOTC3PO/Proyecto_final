/**
 * WO-7b-ext — Plantillas VBLang OFICIALES para Física/Dinámica.
 *
 * Continuación del porting numérico de Física (Cinemática ya portada en
 * `fisica-cinematica-oficiales.ts`). Cubre 4 subtipos del generador
 * `apps/web/src/generadoresV2/fisica/Dinamica.ts` (rama `basico`):
 *
 *  - peso (variantes: calcular peso / calcular masa)
 *  - friccion (variantes: Fr / μ / N)
 *  - plano_inclinado (1 variante)
 *  - ley_hooke (variantes: F / k / x)
 *
 * `suma_fuerzas` recibe un array de tamaño variable (`fuerzas: number[]` con
 * 2 o 3 elementos sorteados) — no entra con los builtins actuales (el DSL
 * no soporta `reduce` ni arrays de tamaño variable en `variables:`).
 * Queda como **gap documentado** en `docs/vblang/porting-generadores.md`
 * (insumo WO-8), no se fuerza.
 *
 * Verificación: `apps/web/src/generadoresV2/__tests__/porting-fisica-dinamica-equivalencia.spec.ts`
 * (oráculo compartido generador real ≡ oráculo ≡ plantilla real).
 *
 * Decisión: cada subtipo multi-variante precomputa TODOS los inputs
 * numéricos en el bloque `variables:` y luego selecciona con `uno_de`
 * el par (enunciado, respuesta, unidad) — mismo patrón que
 * `relacion_distancia_tiempo` y `perimetro_area` de Cinemática/Aritmética.
 */
import type { PlantillaOficial } from "./types.js";

// peso: 2 variantes (calcular peso / calcular masa). Enunciados y
// pasos precomputados con concatenación (no interpolación dentro de
// variables, ver `docs/vblang/porting-generadores.md` §Limitaciones).
// Nota: el generador hardcodea G = 9.8 m/s² en `Dinamica.ts`, no usa
// el `g` global (9.80665). Reproducimos 9.8 explícito para que el
// match generador↔plantilla sea exacto dentro de tolerancia 0.01.
const DINAMICA_PESO_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["dinamica", "peso", "fisica"]

variables:
  masa: random(1, 20)
  peso: masa * 9.8
  enun_peso: "Un objeto tiene masa " + masa + " kg. ¿Cuál es su peso (g=9.8 m/s²)?"
  enun_masa: "Un objeto pesa " + peso + " N (g=9.8 m/s²). ¿Cuál es su masa?"
  enuns: [enun_peso, enun_masa]
  respuestas: [peso, masa]
  unidades: ["N", "kg"]
  pasos_list: ["P = m · g = " + masa + " · 9.8 = " + peso + " N", "m = P / g = " + peso + " / 9.8 = " + masa + " kg"]
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
  El peso es la fuerza gravitatoria P = m · g, con g = 9.8 m/s². En este
  caso {masa} kg producen un peso de {peso} N (o equivalentemente, {peso} N
  corresponden a {masa} kg de masa).
`;

// friccion: 3 variantes (Fr / μ / N). Los inputs (N, μ, Fr) se sortean y
// computan ambos.
const DINAMICA_FRICCION_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["dinamica", "friccion", "fisica"]

variables:
  N: random(10, 100)
  mu: redondear(random_float(0.1, 0.8, 2), 2)
  Fr: redondear(mu * N, 2)
  enun_Fr: "μ=" + mu + ", N=" + N + " N. ¿Cuál es la fuerza de fricción?"
  enun_mu: "Fr=" + Fr + " N, N=" + N + " N. ¿Cuál es el coeficiente de fricción?"
  enun_N: "Fr=" + Fr + " N, μ=" + mu + ". ¿Cuál es la fuerza normal?"
  enuns: [enun_Fr, enun_mu, enun_N]
  respuestas: [Fr, mu, N]
  unidades: ["N", "", "N"]
  pasos_list: ["Fr = μ · N = " + mu + " · " + N + " = " + Fr + " N", "μ = Fr / N = " + Fr + " / " + N + " = " + mu, "N = Fr / μ = " + Fr + " / " + mu + " = " + N + " N"]
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
  La fuerza de fricción es Fr = μ · N (con μ el coeficiente y N la normal).
  Dados dos de los tres, se despeja el tercero. En este caso, con
  N = {N} N y μ = {mu}, la fricción es Fr = {Fr} N.
`;

// plano_inclinado: 1 variante. F = m·g·sin(θ) usando `sin_deg`.
const DINAMICA_PLANO_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["dinamica", "plano_inclinado", "fisica"]

variables:
  masa: random(1, 10)
  angulo: random(20, 60)
  F: redondear(masa * 9.8 * sin_deg(angulo), 2)

respuesta: F
tipo: input
tolerancia_abs: 0.05
unidad: "N"

enunciado: "Un bloque de {masa} kg está en un plano inclinado {angulo}°. ¿Cuál es la componente paralela del peso?"

pasos:
  - "F = m · g · sin(θ) = {masa} · 9.8 · sin({angulo}°) = {F} N"

explicacion: |
  En un plano inclinado, la componente del peso paralela al plano es
  F = m · g · sin(θ). Con m = {masa} kg, g = 9.8 m/s² y θ = {angulo}°,
  F = {masa} · 9.8 · sin({angulo}°) = {F} N.
`;

// ley_hooke: 3 variantes (F / k / x). k ∈ [10, 100], x ∈ [1, 10].
const DINAMICA_HOOKE_DSL = `metadata:
  materia: "fisica"
  nivel: "basico"
  tags: ["dinamica", "ley_hooke", "fisica"]

variables:
  k: random(10, 100)
  x: random(1, 10)
  F: k * x
  enun_F: "Un resorte con k=" + k + " N/m se comprime " + x + " cm. ¿Cuál es la fuerza?"
  enun_k: "Una fuerza de " + F + " N produce una deformación de " + x + " cm. ¿Cuál es la constante del resorte?"
  enun_x: "Una fuerza de " + F + " N actúa sobre un resorte (k=" + k + " N/m). ¿Cuánto se deforma?"
  enuns: [enun_F, enun_k, enun_x]
  respuestas: [F, k, x]
  unidades: ["N", "N/m", "cm"]
  pasos_list: ["F = k · x = " + k + " · " + x + " = " + F + " N", "k = F / x = " + F + " / " + x + " = " + k + " N/m", "x = F / k = " + F + " / " + k + " = " + x + " cm"]
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
  La ley de Hooke relaciona la fuerza aplicada a un resorte con su
  deformación: F = k · x. Dados dos de los tres, se despeja el tercero.
  En este caso k = {k} N/m y x = {x} cm producen F = {F} N.
`;

export const FISICA_DINAMICA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-fisica-dinamica-peso",
    nombre: "Peso: P = m·g (variantes: calcular peso o masa)",
    descripcion:
      "Calcula el peso P = m·g o la masa m = P/g, sorteando la incógnita. masa ∈ [1, 20] kg, g = 9.8 m/s². Rama basico del subtipo `peso` de Dinamica.",
    materia: "fisica",
    tags: ["dinamica", "peso", "fisica"],
    subtipoOriginal: "peso",
    codigoDsl: DINAMICA_PESO_DSL,
  },
  {
    id: "oficial-fisica-dinamica-friccion",
    nombre: "Fricción: Fr = μ·N (3 variantes)",
    descripcion:
      "Calcula fricción / coeficiente / normal sorteando la incógnita. N ∈ [10, 100] N, μ ∈ [0.1, 0.8] con 2 decimales. Rama basico del subtipo `friccion` de Dinamica.",
    materia: "fisica",
    tags: ["dinamica", "friccion", "fisica"],
    subtipoOriginal: "friccion",
    codigoDsl: DINAMICA_FRICCION_DSL,
  },
  {
    id: "oficial-fisica-dinamica-plano-inclinado",
    nombre: "Plano inclinado: F = m·g·sin(θ)",
    descripcion:
      "Calcula la componente paralela del peso en un plano inclinado. masa ∈ [1, 10] kg, ángulo ∈ [20, 60]°. Rama basico del subtipo `plano_inclinado` de Dinamica.",
    materia: "fisica",
    tags: ["dinamica", "plano_inclinado", "fisica"],
    subtipoOriginal: "plano_inclinado",
    codigoDsl: DINAMICA_PLANO_DSL,
  },
  {
    id: "oficial-fisica-dinamica-ley-hooke",
    nombre: "Ley de Hooke: F = k·x (3 variantes)",
    descripcion:
      "Calcula fuerza / constante / deformación sorteando la incógnita. k ∈ [10, 100] N/m, x ∈ [1, 10] cm. Rama basico del subtipo `ley_hooke` de Dinamica.",
    materia: "fisica",
    tags: ["dinamica", "ley_hooke", "fisica"],
    subtipoOriginal: "ley_hooke",
    codigoDsl: DINAMICA_HOOKE_DSL,
  },
];

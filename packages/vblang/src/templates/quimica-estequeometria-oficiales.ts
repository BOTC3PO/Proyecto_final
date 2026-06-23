/**
 * WO-7c — Plantillas VBLang OFICIALES para Química (Estequiometría
 * y Termoquímica).
 *
 * Patrón: ver `docs/vblang/porting-generadores.md` y
 * `docs/vblang/wo-11-eje-simbolico.md`. Cada plantilla reproduce la
 * FÓRMULA de un subtipo PARAMÉTRICO de
 * `apps/web/src/generadoresV2/quimica/Estequiometria.ts` y
 * `Termoquimica.ts` con respuesta NUMÉRICA.
 *
 * Cobertura (rama basico):
 *  - Estequiometria: `calculo_moles`, `calculo_masa`,
 *    `relaciones_molares`, `molaridad`, `diluciones`.
 *  - Termoquimica: `calor`, `cambio_entalpia`, `energia_reaccion`,
 *    `poder_calorifico`.
 *
 * Las ramas intermedio/avanzado son fórmulas distintas (rangos
 * diferentes, a veces distintas ecuaciones) y quedan como
 * continuación mecánica con el mismo patrón. Los subtipos con
 * respuesta string (factorización prima, balanceo) o MC
 * (reactivo_limitante) son ramas más complejas — algunas se
 * pueden portar con la misma forma (string respuesta), otras
 * requieren MC explícito.
 *
 * Verificación:
 *  - validez DSL: `tests/templates/quimica-estequeometria-oficiales.test.ts`
 *  - equivalencia con generador: `apps/web/.../quimica-equivalencia.spec.ts`
 */
import type { PlantillaOficial } from "./types.js";

// ── ESTEQUIOMETRIA ────────────────────────────────────────────────────

/**
 * calculo_moles (basico): n = m / M
 * Sorteamos masa en [10, 50] g y sustancia con masa molar fija.
 */
const CALCULO_MOLES_DSL = `metadata:
  materia: "quimica"
  nivel: "basico"
  tags: ["estequiometria", "calculo_moles", "moles", "masa_molar"]

variables:
  sustancias: [{ nombre: "agua", formula: "H₂O", M: 18.02 }, { nombre: "cloruro de sodio", formula: "NaCl", M: 58.44 }, { nombre: "glucosa", formula: "C₆H₁₂O₆", M: 180.16 }, { nombre: "dióxido de carbono", formula: "CO₂", M: 44.01 }, { nombre: "amoniaco", formula: "NH₃", M: 17.03 }, { nombre: "ácido clorhídrico", formula: "HCl", M: 36.46 }, { nombre: "hidróxido de sodio", formula: "NaOH", M: 40.00 }, { nombre: "sulfato de cobre", formula: "CuSO₄", M: 159.61 }]
  s: uno_de(sustancias)
  masa: random_float(10, 50, 1)
  M: s.M
  resultado: redondear(masa / M, 3)

respuesta: resultado
tipo: input
tolerancia_abs: 0.005

enunciado: "¿Cuántos moles hay en {masa} g de {s.nombre} ({s.formula}, M = {M} g/mol)?"

pasos:
  - "Usamos la relación: n = m / M"
  - "n = {masa} g / {M} g/mol = {resultado} mol"

explicacion: |
  Para calcular los moles a partir de la masa, usamos la fórmula
  n = m / M, donde m es la masa en gramos y M es la masa molar en
  g/mol. Con m = {masa} g y M = {M} g/mol, n = {resultado} mol.
`;

/**
 * calculo_masa (basico): m = n × M
 */
const CALCULO_MASA_DSL = `metadata:
  materia: "quimica"
  nivel: "basico"
  tags: ["estequiometria", "calculo_masa", "moles", "masa_molar"]

variables:
  sustancias: [{ nombre: "agua", formula: "H₂O", M: 18.02 }, { nombre: "cloruro de sodio", formula: "NaCl", M: 58.44 }, { nombre: "glucosa", formula: "C₆H₁₂O₆", M: 180.16 }, { nombre: "dióxido de carbono", formula: "CO₂", M: 44.01 }, { nombre: "amoniaco", formula: "NH₃", M: 17.03 }, { nombre: "ácido clorhídrico", formula: "HCl", M: 36.46 }, { nombre: "hidróxido de sodio", formula: "NaOH", M: 40.00 }, { nombre: "sulfato de cobre", formula: "CuSO₄", M: 159.61 }]
  s: uno_de(sustancias)
  moles: random_float(0.5, 3, 2)
  M: s.M
  resultado: redondear(moles * M, 2)

respuesta: resultado
tipo: input
tolerancia_abs: 0.05

enunciado: "¿Cuántos gramos hay en {moles} mol de {s.nombre} ({s.formula}, M = {M} g/mol)?"

pasos:
  - "Usamos la relación: m = n × M"
  - "m = {moles} mol × {M} g/mol = {resultado} g"

explicacion: |
  Para calcular la masa a partir de los moles, usamos m = n × M.
  Con n = {moles} mol y M = {M} g/mol, m = {resultado} g.
`;

/**
 * relaciones_molares (basico): estequiometría directa.
 * n(producto) = n(reactivo) × (coefP / coefR)
 */
const RELACIONES_MOLARES_DSL = `metadata:
  materia: "quimica"
  nivel: "basico"
  tags: ["estequiometria", "relaciones_molares", "estequiometria_basica"]

variables:
  reacciones: [{ ecuacion: "N₂ + 3H₂ → 2NH₃", reactivo: "N₂", producto: "NH₃", coefR: 1, coefP: 2 }, { ecuacion: "2H₂ + O₂ → 2H₂O", reactivo: "H₂", producto: "H₂O", coefR: 2, coefP: 2 }, { ecuacion: "2Na + Cl₂ → 2NaCl", reactivo: "Na", producto: "NaCl", coefR: 2, coefP: 2 }, { ecuacion: "4Fe + 3O₂ → 2Fe₂O₃", reactivo: "Fe", producto: "Fe₂O₃", coefR: 4, coefP: 2 }]
  r: uno_de(reacciones)
  nReactivo: random_float(1, 5, 2)
  resultado: redondear(nReactivo * r.coefP / r.coefR, 3)

respuesta: resultado
tipo: input
tolerancia_abs: 0.01

enunciado: "Dada la reacción {r.ecuacion}, ¿cuántos moles de {r.producto} se forman a partir de {nReactivo} mol de {r.reactivo}?"

pasos:
  - "La relación estequiométrica es: {r.coefR} mol {r.reactivo} → {r.coefP} mol {r.producto}"
  - "n({r.producto}) = {nReactivo} × ({r.coefP} / {r.coefR}) = {resultado} mol"

explicacion: |
  Por la estequiometría de la reacción, {r.coefR} moles de {r.reactivo}
  producen {r.coefP} moles de {r.producto}. Por lo tanto, con
  {nReactivo} moles de {r.reactivo}, se obtienen {resultado} moles
  de {r.producto}.
`;

/**
 * molaridad (basico): C = n / V = (m / M) / V
 */
const MOLARIDAD_DSL = `metadata:
  materia: "quimica"
  nivel: "basico"
  tags: ["estequiometria", "molaridad", "concentracion", "soluciones"]

variables:
  solutos: [{ nombre: "NaCl", M: 58.44 }, { nombre: "NaOH", M: 40.00 }, { nombre: "KCl", M: 74.55 }, { nombre: "CaCl₂", M: 110.98 }, { nombre: "HCl", M: 36.46 }, { nombre: "H₂SO₄", M: 98.08 }, { nombre: "MgSO₄", M: 120.37 }]
  s: uno_de(solutos)
  masa: random_float(5, 30, 1)
  vol: random_float(0.25, 1.50, 2)
  resultado: redondear((masa / s.M) / vol, 3)

respuesta: resultado
tipo: input
tolerancia_abs: 0.005

enunciado: "¿Cuál es la molaridad de una solución que contiene {masa} g de {s.nombre} (M = {s.M} g/mol) en {vol} L de solución?"

pasos:
  - "n = {masa} / {s.M} = {redondear(masa / s.M, 4)} mol"
  - "C = n / V = {redondear(masa / s.M, 4)} / {vol} = {resultado} mol/L"

explicacion: |
  La molaridad se calcula como n / V. Primero hallamos los moles
  n = m / M = {masa} / {s.M} = {redondear(masa / s.M, 4)} mol. Luego
  C = n / V = {redondear(masa / s.M, 4)} / {vol} = {resultado} mol/L.
`;

/**
 * diluciones (basico): C₁V₁ = C₂V₂ → C₂ = C₁V₁/V₂
 */
const DILUCIONES_DSL = `metadata:
  materia: "quimica"
  nivel: "basico"
  tags: ["estequiometria", "diluciones", "concentracion"]

variables:
  C1: random_float(2, 5, 1)
  V1: random_float(10, 50, 0)
  V2: random_float(V1 * 2, V1 * 10, 0)
  resultado: redondear(C1 * V1 / V2, 3)

respuesta: resultado
tipo: input
tolerancia_abs: 0.01

enunciado: "Se toman {V1} mL de una solución {C1} mol/L y se diluye hasta {V2} mL. ¿Cuál es la concentración final?"

pasos:
  - "Se aplica la ley de dilución: C₁V₁ = C₂V₂"
  - "C₂ = ({C1} × {V1}) / {V2} = {resultado} mol/L"

explicacion: |
  La ley de dilución dice que la cantidad de soluto se conserva:
  C₁V₁ = C₂V₂. Entonces C₂ = (C₁ × V₁) / V₂ = {resultado} mol/L.
`;

// ── TERMOQUIMICA ─────────────────────────────────────────────────────

/**
 * calor (basico): Q = m · c · ΔT
 * Sorteamos sustancia (con calor específico c), masa en g y ΔT en °C.
 */
const CALOR_DSL = `metadata:
  materia: "quimica"
  nivel: "basico"
  tags: ["termoquimica", "calor", "calor_especifico", "termodinamica"]

variables:
  sustancias: [{ nombre: "agua", formula: "H₂O", c: 4.184 }, { nombre: "aluminio", formula: "Al", c: 0.900 }, { nombre: "hierro", formula: "Fe", c: 0.449 }, { nombre: "cobre", formula: "Cu", c: 0.385 }, { nombre: "etanol", formula: "C₂H₅OH", c: 2.440 }]
  s: uno_de(sustancias)
  masa: random(50, 200)
  deltaT: random(5, 30)
  resultado: redondear(masa * s.c * deltaT, 0)

respuesta: resultado
tipo: input
tolerancia_abs: 1

enunciado: "¿Cuánto calor se necesita para calentar {masa} g de {s.nombre} (c = {s.c} J/g·°C) en {deltaT} °C?"

pasos:
  - "Usamos Q = m · c · ΔT"
  - "Q = {masa} × {s.c} × {deltaT} = {resultado} J"

explicacion: |
  La fórmula del calor sensible es Q = m · c · ΔT, donde m es la
  masa, c es el calor específico y ΔT es la variación de temperatura.
  Con m = {masa} g, c = {s.c} J/g·°C y ΔT = {deltaT} °C, se obtiene
  Q = {resultado} J.
`;

/**
 * cambio_entalpia (basico): ΔH = n · ΔH° = (masa/M) · ΔH°
 * Sorteamos combustible, masa, y devolvemos el calor liberado (negativo).
 */
const CAMBIO_ENTALPIA_DSL = `metadata:
  materia: "quimica"
  nivel: "basico"
  tags: ["termoquimica", "entalpia", "combustion", "termodinamica"]

variables:
  combustibles: [{ nombre: "metano", formula: "CH₄", M: 16.04, dH: -890.3 }, { nombre: "etanol", formula: "C₂H₅OH", M: 46.07, dH: -1366.8 }, { nombre: "propano", formula: "C₃H₈", M: 44.10, dH: -2220.0 }, { nombre: "glucosa", formula: "C₆H₁₂O₆", M: 180.16, dH: -2803.0 }]
  c: uno_de(combustibles)
  masa: random_float(5, 20, 1)
  n: masa / c.M
  resultado: redondear(n * c.dH, 1)

respuesta: resultado
tipo: input
tolerancia_abs: 0.5

enunciado: "La combustión de {c.nombre} ({c.formula}) tiene ΔH° = {c.dH} kJ/mol. ¿Cuánto calor se libera al quemar {masa} g? (M = {c.M} g/mol)"

pasos:
  - "n = {masa} / {c.M} = {redondear(n, 4)} mol"
  - "ΔH = {redondear(n, 4)} × ({c.dH}) = {resultado} kJ"

explicacion: |
  Calculamos los moles de combustible quemados: n = m / M =
  {masa} / {c.M} = {redondear(n, 4)} mol. El cambio de entalpía es
  ΔH = n × ΔH° = {redondear(n, 4)} × {c.dH} = {resultado} kJ. El
  signo negativo indica que la reacción es exotérmica.
`;

/**
 * energia_reaccion (basico): ΔH_total = n × ΔH°
 * Reacción conocida con ΔH° fijo. Multiplicar por moles.
 */
const ENERGIA_REACCION_DSL = `metadata:
  materia: "quimica"
  nivel: "basico"
  tags: ["termoquimica", "energia_reaccion", "combustion"]

variables:
  reacciones: [{ texto: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)", dH: -890.3, desc: "combustión del metano" }, { texto: "N₂(g) + 3H₂(g) → 2NH₃(g)", dH: -92.4, desc: "síntesis del amoniaco" }, { texto: "H₂(g) + ½O₂(g) → H₂O(l)", dH: -285.8, desc: "formación del agua" }, { texto: "C(s) + O₂(g) → CO₂(g)", dH: -393.5, desc: "combustión del carbono" }]
  r: uno_de(reacciones)
  n: random_float(1, 3, 1)
  resultado: redondear(r.dH * n, 1)

respuesta: resultado
tipo: input
tolerancia_abs: 0.5

enunciado: "La {r.desc} libera {r.dH} kJ/mol. ¿Cuánta energía se libera en {n} mol de reacción? ({r.texto})"

pasos:
  - "ΔH_total = n × ΔH° = {n} × ({r.dH}) = {resultado} kJ"
  - "El signo negativo indica que la reacción es exotérmica"

explicacion: |
  La energía liberada en {n} moles de reacción es ΔH_total =
  n × ΔH° = {n} × {r.dH} = {resultado} kJ. El signo negativo
  indica que la reacción es exotérmica (libera calor).
`;

/**
 * poder_calorifico (basico): E = masa × PCI
 */
const PODER_CALORIFICO_DSL = `metadata:
  materia: "quimica"
  nivel: "basico"
  tags: ["termoquimica", "poder_calorifico", "combustion"]

variables:
  combustibles: [{ nombre: "carbón", pci: 29.3 }, { nombre: "madera", pci: 15.0 }, { nombre: "gas natural", pci: 55.5 }, { nombre: "gasolina", pci: 44.0 }]
  c: uno_de(combustibles)
  masa: random_float(1, 5, 1)
  resultado: redondear(masa * c.pci, 2)

respuesta: resultado
tipo: input
tolerancia_abs: 0.05

enunciado: "El poder calorífico del {c.nombre} es {c.pci} MJ/kg. ¿Cuánta energía se libera al quemar {masa} kg?"

pasos:
  - "Energía = masa × poder calorífico"
  - "E = {masa} kg × {c.pci} MJ/kg = {resultado} MJ"

explicacion: |
  El poder calorífico expresa cuánta energía libera cada kg de
  combustible al quemarse. Con masa = {masa} kg y PCI = {c.pci} MJ/kg,
  la energía liberada es E = {masa} × {c.pci} = {resultado} MJ.
`;

export const QUIMICA_ESTEQUEOMETRIA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-quimica-calculo-moles",
    nombre: "Química: cálculo de moles a partir de la masa",
    descripcion:
      "Calcula los moles de una sustancia a partir de su masa y masa molar. Rama basico del subtipo `calculo_moles` (intermedio/avanzado sube los rangos de masa).",
    materia: "quimica",
    tags: ["estequiometria", "calculo_moles", "moles", "masa_molar"],
    subtipoOriginal: "calculo_moles",
    codigoDsl: CALCULO_MOLES_DSL,
  },
  {
    id: "oficial-quimica-calculo-masa",
    nombre: "Química: cálculo de masa a partir de moles",
    descripcion:
      "Calcula la masa de una sustancia a partir de su cantidad en moles. Rama basico del subtipo `calculo_masa`.",
    materia: "quimica",
    tags: ["estequiometria", "calculo_masa", "moles", "masa_molar"],
    subtipoOriginal: "calculo_masa",
    codigoDsl: CALCULO_MASA_DSL,
  },
  {
    id: "oficial-quimica-relaciones-molares",
    nombre: "Química: relaciones molares estequiométricas",
    descripcion:
      "Calcula los moles de producto a partir de los moles de reactivo usando la estequiometría de la reacción. Rama basico del subtipo `relaciones_molares`.",
    materia: "quimica",
    tags: ["estequiometria", "relaciones_molares"],
    subtipoOriginal: "relaciones_molares",
    codigoDsl: RELACIONES_MOLARES_DSL,
  },
  {
    id: "oficial-quimica-molaridad",
    nombre: "Química: molaridad de una solución",
    descripcion:
      "Calcula la molaridad de una solución a partir de la masa de soluto, su masa molar y el volumen. Rama basico del subtipo `molaridad`.",
    materia: "quimica",
    tags: ["estequiometria", "molaridad", "soluciones"],
    subtipoOriginal: "molaridad",
    codigoDsl: MOLARIDAD_DSL,
  },
  {
    id: "oficial-quimica-diluciones",
    nombre: "Química: dilución C₁V₁ = C₂V₂",
    descripcion:
      "Aplica la ley de dilución para calcular la concentración final. Rama basico del subtipo `diluciones`.",
    materia: "quimica",
    tags: ["estequiometria", "diluciones"],
    subtipoOriginal: "diluciones",
    codigoDsl: DILUCIONES_DSL,
  },
  {
    id: "oficial-quimica-calor",
    nombre: "Química: calor sensible Q = m·c·ΔT",
    descripcion:
      "Calcula el calor necesario para variar la temperatura de una masa conocida de sustancia. Rama basico del subtipo `calor`.",
    materia: "quimica",
    tags: ["termoquimica", "calor", "calor_especifico"],
    subtipoOriginal: "calor",
    codigoDsl: CALOR_DSL,
  },
  {
    id: "oficial-quimica-cambio-entalpia",
    nombre: "Química: cambio de entalpía de una combustión",
    descripcion:
      "Calcula el calor liberado en una combustión a partir de la masa quemada y el ΔH° molar. Rama basico del subtipo `cambio_entalpia`.",
    materia: "quimica",
    tags: ["termoquimica", "entalpia", "combustion"],
    subtipoOriginal: "cambio_entalpia",
    codigoDsl: CAMBIO_ENTALPIA_DSL,
  },
  {
    id: "oficial-quimica-energia-reaccion",
    nombre: "Química: energía total de una reacción",
    descripcion:
      "Calcula la energía total liberada en N moles de una reacción conocida. Rama basico del subtipo `energia_reaccion`.",
    materia: "quimica",
    tags: ["termoquimica", "energia_reaccion"],
    subtipoOriginal: "energia_reaccion",
    codigoDsl: ENERGIA_REACCION_DSL,
  },
  {
    id: "oficial-quimica-poder-calorifico",
    nombre: "Química: poder calorífico",
    descripcion:
      "Calcula la energía liberada al quemar una masa de combustible conocida, dado su PCI. Rama basico del subtipo `poder_calorifico`.",
    materia: "quimica",
    tags: ["termoquimica", "poder_calorifico"],
    subtipoOriginal: "poder_calorifico",
    codigoDsl: PODER_CALORIFICO_DSL,
  },
];

/**
 * WO-7 — Plantillas VBLang OFICIALES para Matemáticas (Aritmética).
 *
 * Batch curado del porting "generador paramétrico → plantilla DSL" descrito en
 * `docs/vblang/porting-generadores.md`. Cada plantilla reproduce la FÓRMULA de
 * un subtipo PARAMÉTRICO de `apps/web/src/generadoresV2/matematicas/Aritmetica.ts`
 * (clasificado PARAMÉTRICO por `docs/AUDITORIA_GENERADORES.md`: matemáticas está
 * "limpio", casi 100% paramétrico — NO hay subtipos BANCO acá).
 *
 * El vínculo de legado es `subtipoOriginal`: el generador nativo sigue vivo como
 * resolutor de contenido viejo (no se borra). La equivalencia
 * generador↔plantilla se verifica en
 * `apps/web/src/generadoresV2/__tests__/porting-equivalencia.spec.ts` con el
 * contrato de "oráculo compartido" (ver el doc): una fórmula pura `F(inputs)` que
 * TANTO el generador real COMO la plantilla compilada deben satisfacer sobre sus
 * propios inputs sorteados.
 *
 * Alcance de cada port (rama de dificultad del generador que reproduce):
 *  - potencias        → `genPotencias("basico")`        b^n con b∈[2,10], n∈[2,4]
 *  - unidades_medida  → `genUnidadesMedida("basico")`    valor × factor (6 conversiones)
 *  - regla_tres       → `genReglaTres("basico")`         directa: (B·C)/A
 *  - sucesiones       → `genSucesiones("basico")`        aritmética: a₁+(n−1)·d
 *  - series_simples   → `genSeriesSimples("basico")`     aritmética: n/2·(a₁+aₙ)
 *  - angulos          → `genAngulos("intermedio")`       complementario/suplementario: tope−a
 *  - coordenadas_plano→ `genCoordenadasPlano("intermedio")` distancia: √(Δx²+Δy²)
 *
 * Las ramas de OTRAS dificultades (p. ej. `potencias` avanzado = potencia de
 * potencia, `regla_tres` inversa) son fórmulas distintas y quedan enumeradas en
 * el doc como continuación mecánica. NO se inventaron builtins: todo usa
 * `random`, `uno_de`, `redondear`, `sqrt`, `^` y aritmética ya disponibles.
 */
import type { PlantillaOficial } from "./types.js";

const POTENCIAS_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["potencias", "aritmetica"]

variables:
  base: random(2, 10)
  exponente: random(2, 4)
  resultado: base ^ exponente

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{exponente}?"

pasos:
  - "{base}^{exponente} = {base} multiplicado por sí mismo {exponente} veces = {resultado}"

explicacion: |
  Una potencia b^n es multiplicar la base b por sí misma n veces.
  Acá {base}^{exponente} = {resultado}.
`;

const UNIDADES_MEDIDA_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["unidades_medida", "conversiones"]

variables:
  conversiones: [{ de: "m", a: "cm", factor: 100 }, { de: "cm", a: "mm", factor: 10 }, { de: "km", a: "m", factor: 1000 }, { de: "kg", a: "g", factor: 1000 }, { de: "min", a: "s", factor: 60 }, { de: "h", a: "min", factor: 60 }]
  conv: uno_de(conversiones)
  valor: random(1, 10)
  resultado: valor * conv.factor

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Convertí {valor} {conv.de} a {conv.a}."

pasos:
  - "{valor} {conv.de} × {conv.factor} = {resultado} {conv.a}"

explicacion: |
  Para pasar de {conv.de} a {conv.a} se multiplica por el factor de conversión {conv.factor}.
  {valor} {conv.de} × {conv.factor} = {resultado} {conv.a}.
`;

const REGLA_TRES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["regla_tres", "proporcionalidad"]

variables:
  a: random(2, 10)
  b: random(2, 20)
  c: random(2, 10)
  resultado: redondear(b * c / a, 2)

respuesta: resultado
tipo: input
tolerancia_abs: 0.01

enunciado: "Regla de tres directa: Si {a} kg cuestan \${b}, ¿cuánto cuestan {c} kg?"

pasos:
  - "Proporcionalidad directa: x = (precio × cantidad) / referencia = ({b} × {c}) / {a} = {resultado}"

explicacion: |
  En una proporción directa, x = (b · c) / a. Con b = {b}, c = {c} y a = {a}:
  x = ({b} × {c}) / {a} = {resultado}.
`;

const SUCESIONES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["sucesiones", "progresion_aritmetica"]

variables:
  a1: random(1, 20)
  d: random(1, 5)
  n: random(4, 7)
  an: a1 + (n - 1) * d

respuesta: an
tipo: input
tolerancia_abs: 0

enunciado: "En la sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

pasos:
  - "aₙ = a₁ + (n − 1)·d = {a1} + ({n} − 1)·{d} = {an}"

explicacion: |
  El término general de una progresión aritmética es aₙ = a₁ + (n − 1)·d.
  Con a₁ = {a1}, d = {d} y n = {n}: aₙ = {an}.
`;

const SERIES_SIMPLES_DSL = `metadata:
  materia: "matematicas"
  nivel: "basico"
  tags: ["series_simples", "progresion_aritmetica"]

variables:
  a1: random(1, 5)
  d: random(1, 3)
  n: random(3, 6)
  an: a1 + (n - 1) * d
  sn: redondear(n / 2 * (a1 + an), 0)

respuesta: sn
tipo: input
tolerancia_abs: 0

enunciado: "Calcula la suma de los primeros {n} términos de la progresión aritmética con a₁ = {a1} y d = {d}."

pasos:
  - "El último término es aₙ = a₁ + (n − 1)·d = {a1} + ({n} − 1)·{d} = {an}"
  - "Sₙ = n/2 · (a₁ + aₙ) = {n}/2 · ({a1} + {an}) = {sn}"

explicacion: |
  La suma de los primeros n términos de una progresión aritmética es
  Sₙ = n/2 · (a₁ + aₙ). Con a₁ = {a1}, aₙ = {an} y n = {n}: Sₙ = {sn}.
`;

const ANGULOS_DSL = `metadata:
  materia: "matematicas"
  nivel: "intermedio"
  tags: ["angulos", "geometria"]

variables:
  caso: uno_de([{ tipo: "complementario", tope: 90 }, { tipo: "suplementario", tope: 180 }])
  a: random(1, caso.tope - 1)
  resultado: caso.tope - a

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el ángulo {caso.tipo} de {a}°?"

pasos:
  - "Los ángulos {caso.tipo}s suman {caso.tope}°: {a}° + x = {caso.tope}° → x = {resultado}°"

explicacion: |
  Dos ángulos {caso.tipo}s suman {caso.tope}°. Si uno mide {a}°, el otro mide
  {caso.tope}° − {a}° = {resultado}°.
`;

const COORDENADAS_DISTANCIA_DSL = `metadata:
  materia: "matematicas"
  nivel: "intermedio"
  tags: ["coordenadas_plano", "distancia", "geometria"]

variables:
  x1: random(-10, 10)
  y1: random(-10, 10)
  x2: random(-10, 10)
  y2: random(-10, 10)
  distancia: redondear(sqrt((x2 - x1) ^ 2 + (y2 - y1) ^ 2), 2)

respuesta: distancia
tipo: input
tolerancia_abs: 0.01

enunciado: "Calcula la distancia entre A({x1}, {y1}) y B({x2}, {y2})."

pasos:
  - "d = √((x₂−x₁)² + (y₂−y₁)²) = √(({x2}−{x1})² + ({y2}−{y1})²) = {distancia}"

explicacion: |
  La distancia entre dos puntos del plano es d = √((x₂−x₁)² + (y₂−y₁)²).
  Con A({x1}, {y1}) y B({x2}, {y2}): d = {distancia}.
`;

export const MATEMATICAS_ARITMETICA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-matematicas-potencias",
    nombre: "Potencias: base elevada a un exponente",
    descripcion:
      "Calcula una potencia b^n de base y exponente naturales pequeños (b∈[2,10], n∈[2,4]).",
    materia: "matematicas",
    tags: ["potencias", "aritmetica"],
    subtipoOriginal: "potencias",
    codigoDsl: POTENCIAS_DSL,
  },
  {
    id: "oficial-matematicas-unidades-medida",
    nombre: "Unidades de medida: conversión por factor",
    descripcion:
      "Convierte una cantidad entre unidades de longitud, masa o tiempo multiplicando por el factor de conversión.",
    materia: "matematicas",
    tags: ["unidades_medida", "conversiones"],
    subtipoOriginal: "unidades_medida",
    codigoDsl: UNIDADES_MEDIDA_DSL,
  },
  {
    id: "oficial-matematicas-regla-tres",
    nombre: "Regla de tres directa",
    descripcion:
      "Resuelve una proporción directa: dado el precio de una cantidad de referencia, calcula el precio de otra cantidad.",
    materia: "matematicas",
    tags: ["regla_tres", "proporcionalidad"],
    subtipoOriginal: "regla_tres",
    codigoDsl: REGLA_TRES_DSL,
  },
  {
    id: "oficial-matematicas-sucesiones",
    nombre: "Sucesiones aritméticas: término general",
    descripcion:
      "Calcula el n-ésimo término de una progresión aritmética con aₙ = a₁ + (n−1)·d.",
    materia: "matematicas",
    tags: ["sucesiones", "progresion_aritmetica"],
    subtipoOriginal: "sucesiones",
    codigoDsl: SUCESIONES_DSL,
  },
  {
    id: "oficial-matematicas-series-simples",
    nombre: "Series aritméticas: suma de los primeros n términos",
    descripcion:
      "Calcula la suma de los primeros n términos de una progresión aritmética con Sₙ = n/2·(a₁+aₙ).",
    materia: "matematicas",
    tags: ["series_simples", "progresion_aritmetica"],
    subtipoOriginal: "series_simples",
    codigoDsl: SERIES_SIMPLES_DSL,
  },
  {
    id: "oficial-matematicas-angulos",
    nombre: "Ángulos complementarios y suplementarios",
    descripcion:
      "Calcula el ángulo complementario (suman 90°) o suplementario (suman 180°) de un ángulo dado.",
    materia: "matematicas",
    tags: ["angulos", "geometria"],
    subtipoOriginal: "angulos",
    codigoDsl: ANGULOS_DSL,
  },
  {
    id: "oficial-matematicas-coordenadas-distancia",
    nombre: "Distancia entre dos puntos del plano",
    descripcion:
      "Calcula la distancia euclídea entre dos puntos A y B con d = √((x₂−x₁)²+(y₂−y₁)²).",
    materia: "matematicas",
    tags: ["coordenadas_plano", "distancia", "geometria"],
    subtipoOriginal: "coordenadas_plano",
    codigoDsl: COORDENADAS_DISTANCIA_DSL,
  },
];

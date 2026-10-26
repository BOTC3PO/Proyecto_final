import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { serialize } from "../../src/serializer/serialize.js";
import type { Plantilla } from "../../src/parser/ast.js";

/**
 * Compara dos ASTs estructuralmente, ignorando todas las propiedades `loc`
 * (que dependen de columnas/líneas y obviamente cambian si el serializer
 * imprime con otro formato que el source original).
 */
function stripLoc<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map(stripLoc) as unknown as T;
  }
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(value as Record<string, unknown>)) {
      if (k === "loc") continue;
      out[k] = stripLoc((value as Record<string, unknown>)[k]);
    }
    return out as unknown as T;
  }
  return value;
}

function roundTrip(src: string): { original: Plantilla; reparsed: Plantilla } {
  const original = parse(src);
  const serialized = serialize(original);
  const reparsed = parse(serialized);
  return { original, reparsed };
}

function expectRoundTrip(src: string): void {
  const { original, reparsed } = roundTrip(src);
  expect(stripLoc(reparsed)).toEqual(stripLoc(original));
}

describe("serializer / round-trip básico", () => {
  it("plantilla input simple (suma)", () => {
    expectRoundTrip(`variables:
  a: random(1, 10)
  b: random(1, 10)

enunciado: "Cuánto es {a} + {b}?"
respuesta: a + b
tipo: input
`);
  });

  it("plantilla mc con opciones_explicitas", () => {
    expectRoundTrip(`variables:
  capital: uno_de(["Buenos Aires", "Brasilia", "Santiago"])

enunciado: "Capital de Argentina:"
opciones_explicitas: ["Buenos Aires", "Brasilia", "Santiago", "Lima"]
respuesta: "Buenos Aires"
tipo: mc
`);
  });

  it("plantilla vf con booleano", () => {
    expectRoundTrip(`variables:
  n: random(1, 100)

enunciado: "{n} es par?"
respuesta: n % 2 == 0
tipo: vf
`);
  });

  it("plantilla completar", () => {
    expectRoundTrip(`variables:
  pal: "guitarra"

enunciado: "Las cuerdas de la {pal} producen sonido."
respuesta: "guitarra"
tipo: completar
`);
  });

  it("plantilla ordenar con opciones_explicitas + respuesta_orden", () => {
    expectRoundTrip(`variables:
  eventos: ["WW1", "WW2", "Luna"]

enunciado: "Ordená cronológicamente:"
opciones_explicitas: eventos
respuesta_orden: eventos
tipo: ordenar
`);
  });

  it("plantilla marcar_mapa con respuesta_iso", () => {
    expectRoundTrip(`mapa: world_countries

variables:
  pais: uno_de(mapa)

enunciado: "Marcá {pais.nombre}"
respuesta_iso: pais.iso
tipo: marcar_mapa
`);
  });

  it("plantilla analisis_sintactico con etiquetas_pedidas", () => {
    expectRoundTrip(`variables:
  texto: "El perro come pan"

enunciado: "Etiquetá las palabras:"
texto_analizar: texto
etiquetas_pedidas:
  - { id: "p1", palabra: "El", etiqueta: "articulo" }
  - { id: "p2", palabra: "perro", etiqueta: "sustantivo" }
tipo: analisis_sintactico
`);
  });

  it("plantilla identificar_palabras", () => {
    expectRoundTrip(`variables:
  texto: "El niño juega con la pelota"

enunciado: "Marcá los sustantivos:"
texto_analizar: texto
respuestas_validas:
  - "niño"
  - "pelota"
tipo: identificar_palabras
`);
  });

  it("plantilla con dataset", () => {
    expectRoundTrip(`dataset: paises_capitales

variables:
  fila: uno_de(dataset)

enunciado: "Capital de {fila.pais}:"
respuesta: fila.capital
tipo: input
`);
  });

  it("plantilla con generador asistido (sin respuesta)", () => {
    expectRoundTrip(`generador: fisica/cinematica/MRU
enunciado: "(stub)"
`);
  });
});

describe("serializer / expresiones", () => {
  it("aritmética compleja con precedencia", () => {
    expectRoundTrip(`variables:
  p: 2 + 3 * 4
  q: (2 + 3) * 4
  r: 2 ^ 3 ^ 2

enunciado: "{p} {q} {r}"
respuesta: p + q + r
tipo: input
`);
  });

  it("llamadas con argumentos compuestos", () => {
    expectRoundTrip(`variables:
  d: sqrt(b * b - 4 * a * c)
  a: 1
  b: 5
  c: 6

enunciado: "{d}"
respuesta: d
tipo: input
`);
  });

  it("strings con comillas internas", () => {
    expectRoundTrip(`variables:
  msg: "él dijo \\"hola\\""

enunciado: "{msg}"
respuesta: "ok"
tipo: completar
`);
  });

  it("arrays anidados", () => {
    expectRoundTrip(`variables:
  m: [[1, 2], [3, 4]]

enunciado: "{m}"
respuesta: m
tipo: input
`);
  });

  it("objetos anidados", () => {
    expectRoundTrip(`variables:
  pais: { nombre: "Argentina", iso: "ARG", capital: { nombre: "Buenos Aires" } }

enunciado: "{pais.capital.nombre}"
respuesta: pais.capital.nombre
tipo: input
`);
  });

  it("for-comprehension con rango", () => {
    expectRoundTrip(`variables:
  cuadrados: [for i in 1..10: i * i]

enunciado: "{cuadrados}"
respuesta: cuadrados
tipo: input
`);
  });

  it("for-comprehension sobre array", () => {
    expectRoundTrip(`variables:
  xs: [1, 2, 3]
  ys: [for x in xs: x * 2]

enunciado: "{ys}"
respuesta: ys
tipo: input
`);
  });

  it("comparaciones con `y` / `o` / `no`", () => {
    expectRoundTrip(`variables:
  a: random(1, 10)
  b: random(1, 10)

restricciones:
  - a > 0 y b > 0
  - no (a == b)

enunciado: "{a} {b}"
respuesta: a + b
tipo: input
`);
  });

  it("acceso por índice", () => {
    expectRoundTrip(`variables:
  arr: [10, 20, 30]
  primer: arr[0]

enunciado: "{primer}"
respuesta: primer
tipo: input
`);
  });

  it("interpolación con modificador", () => {
    expectRoundTrip(`variables:
  x: 3.14159

enunciado: "pi = {x | n2}"
respuesta: x
tipo: input
`);
  });
});

describe("serializer / casos especiales", () => {
  it("metadata + tolerancia + unidad", () => {
    expectRoundTrip(`metadata:
  nombre: "MRU básico"
  materia: "fisica"

variables:
  v: random(10, 30)
  t: random(2, 8)

enunciado: "v={v} m/s, t={t} s. Distancia?"
respuesta: v * t
unidad: "m"
tolerancia: 5%
tipo: input
`);
  });

  it("pasos con interpolaciones", () => {
    expectRoundTrip(`variables:
  a: 3
  b: 4

enunciado: "Hipotenusa con catetos {a} y {b}?"
respuesta: sqrt(a * a + b * b)
pasos:
  - "calculamos {a}^2 + {b}^2"
  - "raíz cuadrada del resultado"
tipo: input
`);
  });

  it("visual + bloque opciones", () => {
    expectRoundTrip(`variables:
  a: random(2, 9)
  b: random(2, 9)

enunciado: "{a} * {b}?"
respuesta: a * b
tipo: mc
opciones: 4
visual:
  kind: "latex"
  content: "a \\\\times b"
`);
  });

  it("texto con llaves literales escapadas como {{ y }}", () => {
    // En el AST queda un texto plano con `{` literal; el serializer debe
    // emitir `{{` / `}}` para que el round-trip funcione.
    const { original, reparsed } = roundTrip(`enunciado: "f(x) = {{x | 0}}"
respuesta: 0
tipo: input
`);
    expect(stripLoc(reparsed)).toEqual(stripLoc(original));
  });

  it("mapa con encuadre round-trip", () => {
    expectRoundTrip(`mapa: world_countries encuadre [-80, -55, -30, 15]
enunciado: "Marcá un país."
respuesta_iso: "ARG"
tipo: marcar_mapa
`);
  });

  it("mapa sin encuadre round-trip", () => {
    expectRoundTrip(`mapa: world_countries
enunciado: "Marcá un país."
respuesta_iso: "ARG"
tipo: marcar_mapa
`);
  });

  it("marcar_mapa con respuesta_nombre sola round-trip", () => {
    expectRoundTrip(`mapa: world_states_provinces
enunciado: "Marcá la provincia."
respuesta_nombre: "Córdoba"
tipo: marcar_mapa
`);
  });
});

/**
 * WO-2 / F4-03 — Mutaciones del cuestionario por posiciones + continuidad con
 * el sorteo sin-repetición (`sorteo.ts`) y la migración del modelo viejo.
 */
import { describe, expect, it } from "vitest";
import {
  migrarCuestionario,
  validarCuestionario,
  type CuestionarioPosiciones,
} from "../posiciones";
import {
  agregarPosicion,
  agregarTema,
  agregarVariante,
  cambiarOrigenVariante,
  cambiarPuntaje,
  cambiarTema,
  cambiarTipo,
  quitarPosicion,
  quitarVariante,
  reordenarPosicion,
} from "../posicionesMutations";
import { sortearCuestionario } from "../sorteo";

function vacio(): CuestionarioPosiciones {
  return migrarCuestionario({ questions: [], composition: null });
}

/** El cuestionario editado debe seguir siendo válido tras cada mutación. */
function expectValido(c: CuestionarioPosiciones) {
  expect(validarCuestionario(c).ok).toBe(true);
}

describe("posicionesMutations · posiciones", () => {
  it("agrega posiciones al final y renumera 1..N", () => {
    let c = vacio();
    c = agregarPosicion(c, { tipo: "fijo" });
    c = agregarPosicion(c, { tipo: "obligatorio" });
    expect(c.posiciones.map((p) => p.numero)).toEqual([1, 2]);
    expect(c.posiciones[1].tipo).toBe("obligatorio");
    expectValido(c);
  });

  it("inserta una posición después de `despuesDe` y renumera", () => {
    let c = vacio();
    c = agregarPosicion(c, { tipo: "fijo" }); // 1
    c = agregarPosicion(c, { tipo: "fijo" }); // 2
    c = agregarPosicion(c, { despuesDe: 1, tipo: "relleno" }); // entre 1 y 2
    expect(c.posiciones.map((p) => p.tipo)).toEqual(["fijo", "relleno", "fijo"]);
    expect(c.posiciones.map((p) => p.numero)).toEqual([1, 2, 3]);
  });

  it("quita y reordena posiciones", () => {
    let c = vacio();
    c = agregarPosicion(c, { tipo: "fijo" });
    c = agregarPosicion(c, { tipo: "obligatorio" });
    c = agregarPosicion(c, { tipo: "relleno" });
    c = reordenarPosicion(c, 1, "abajo");
    expect(c.posiciones.map((p) => p.tipo)).toEqual([
      "obligatorio",
      "fijo",
      "relleno",
    ]);
    c = quitarPosicion(c, 2);
    expect(c.posiciones.map((p) => p.tipo)).toEqual(["obligatorio", "relleno"]);
    expect(c.posiciones.map((p) => p.numero)).toEqual([1, 2]);
  });
});

describe("posicionesMutations · variantes (alternativas)", () => {
  it("agregar una variante a una posición fija la promueve a pool", () => {
    let c = agregarPosicion(vacio(), { tipo: "fijo" });
    c = agregarVariante(c, 1);
    expect(c.posiciones[0].tipo).toBe("obligatorio");
    expect(c.posiciones[0].variantes.map((v) => v.letra)).toEqual(["a", "b"]);
    expectValido(c);
  });

  it("pasar a fijo recorta el pool a una sola variante", () => {
    let c = agregarPosicion(vacio(), { tipo: "obligatorio" });
    c = agregarVariante(c, 1);
    c = agregarVariante(c, 1);
    expect(c.posiciones[0].variantes).toHaveLength(3);
    c = cambiarTipo(c, 1, "fijo");
    expect(c.posiciones[0].variantes).toHaveLength(1);
    expectValido(c);
  });

  it("no deja una posición sin variantes", () => {
    let c = agregarPosicion(vacio(), { tipo: "fijo" });
    c = quitarVariante(c, 1, "a");
    expect(c.posiciones[0].variantes).toHaveLength(1);
  });

  it("mezcla orígenes (banco + plantilla + generador) en una posición", () => {
    let c = agregarPosicion(vacio(), { tipo: "obligatorio" });
    c = agregarVariante(c, 1);
    c = agregarVariante(c, 1);
    c = cambiarOrigenVariante(c, 1, "a", { origen: "banco", questionId: "q1" });
    c = cambiarOrigenVariante(c, 1, "b", {
      origen: "plantilla",
      plantillaId: "pl-1",
      plantillaVersion: 2,
    });
    c = cambiarOrigenVariante(c, 1, "c", {
      origen: "generador",
      generatorId: "gen-x",
    });
    const origenes = c.posiciones[0].variantes.map((v) => v.origen.origen);
    expect(origenes).toEqual(["banco", "plantilla", "generador"]);
    expectValido(c);
  });
});

describe("posicionesMutations · puntaje y temas", () => {
  it("cambia el puntaje (clamp a ≥ 0)", () => {
    let c = agregarPosicion(vacio(), { tipo: "fijo" });
    c = cambiarPuntaje(c, 1, 5);
    expect(c.posiciones[0].puntaje).toBe(5);
    c = cambiarPuntaje(c, 1, -3);
    expect(c.posiciones[0].puntaje).toBe(0);
  });

  it("agrega un tema y lo asigna a una posición", () => {
    let c = agregarPosicion(vacio(), { tipo: "fijo" });
    c = agregarTema(c, "Álgebra lineal");
    const tema = c.temas.find((t) => t.nombre === "Álgebra lineal");
    expect(tema).toBeDefined();
    c = cambiarTema(c, 1, tema!.id);
    expect(c.posiciones[0].temaPrincipal).toBe(tema!.id);
    expectValido(c);
  });

  it("ignora un tema con nombre vacío", () => {
    const c = agregarTema(vacio(), "   ");
    expect(c.temas).toHaveLength(1); // sólo el tema general
  });
});

describe("WO-2 · pool conceptual no se repite entre alumnos (sorteo.ts)", () => {
  it("una posición de pool con 3 alternativas distintas reparte variantes", () => {
    // Pregunta conceptual SIN variables: 3 alternativas materializadas en banco.
    let c = agregarPosicion(vacio(), { tipo: "obligatorio" });
    c = agregarVariante(c, 1);
    c = agregarVariante(c, 1);
    c = cambiarOrigenVariante(c, 1, "a", { origen: "banco", questionId: "qa" });
    c = cambiarOrigenVariante(c, 1, "b", { origen: "banco", questionId: "qb" });
    c = cambiarOrigenVariante(c, 1, "c", { origen: "banco", questionId: "qc" });

    // Distintos alumnos → el sorteo determinista elige (posiblemente) distinta
    // letra; sobre muchos alumnos, las 3 alternativas se usan (no queda 1 sola).
    const letras = new Set<string>();
    for (let i = 0; i < 40; i += 1) {
      const res = sortearCuestionario(c, {
        alumnoId: `alumno-${i}`,
        quizId: "quiz-1",
      });
      letras.add(res.selecciones[0].letra);
    }
    expect(letras.size).toBeGreaterThan(1);
  });
});

describe("WO-2 · migración composition → posiciones", () => {
  it("migra un quiz viejo (questions + composition) a posiciones fijas", () => {
    const c = migrarCuestionario({
      questions: [
        { id: "q1", points: 2 },
        { id: "q2" },
      ],
      composition: { pesoPorDefecto: 3 },
    });
    expect(c.posiciones).toHaveLength(2);
    expect(c.posiciones[0]).toMatchObject({
      numero: 1,
      tipo: "fijo",
      puntaje: 2,
    });
    // sin points propio → cae al pesoPorDefecto de la composición.
    expect(c.posiciones[1].puntaje).toBe(3);
    expect(c.posiciones[0].variantes[0].origen).toMatchObject({
      origen: "banco",
      questionId: "q1",
    });
    expectValido(c);
  });

  it("es idempotente: migrar dos veces no re-migra", () => {
    const once = migrarCuestionario({ questions: [{ id: "q1" }] });
    const twice = migrarCuestionario(once);
    expect(twice).toEqual(once);
  });
});

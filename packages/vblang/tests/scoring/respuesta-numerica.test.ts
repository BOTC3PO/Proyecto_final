/**
 * PLAN casos-limite §7 — tolerancia por defecto y coma decimal.
 *
 * Los valores esperados de acá salen de una sonda real sobre `generate` +
 * `toModuleQuizQuestion`: `formatoDefault` redondea a 4 decimales, así que
 * `1/3` llega al grading como `"0.3333"` y `sqrt(2)` como `"1.4142"`.
 */
import { describe, expect, it } from "vitest";
import {
  respuestaNumericaCorrecta as ok,
  toleranciaEfectiva,
  usaToleranciaPorDefecto,
} from "../../src/scoring/respuesta-numerica.js";

describe("respuestaNumericaCorrecta / sin tolerancia declarada", () => {
  it("una respuesta no entera acepta cualquier redondeo a 2+ decimales", () => {
    // 1/3 serializado por formatoDefault.
    expect(ok("0.3333", "0.3333")).toBe(true);
    expect(ok("0.333", "0.3333")).toBe(true);
    expect(ok("0.33", "0.3333")).toBe(true);
    // sqrt(2).
    expect(ok("1.4142", "1.4142")).toBe(true);
    expect(ok("1.414", "1.4142")).toBe(true);
    expect(ok("1.41", "1.4142")).toBe(true);
  });

  it("pero no acepta una respuesta gruesa de más ni una equivocada", () => {
    expect(ok("0.3", "0.3333")).toBe(false);
    expect(ok("0.34", "0.3333")).toBe(false);
    expect(ok("0", "0.3333")).toBe(false);
    expect(ok("1.4", "1.4142")).toBe(false);
    expect(ok("1.5", "1.4142")).toBe(false);
  });

  it("una respuesta ENTERA sigue exigiendo el valor exacto", () => {
    expect(ok("7", "7")).toBe(true);
    expect(ok("7.001", "7")).toBe(false);
    expect(ok("6.999", "7")).toBe(false);
    expect(ok("8", "7")).toBe(false);
  });

  it("el cero exige cero (la holgura fija aceptaría cualquier cosa cerca)", () => {
    expect(ok("0", "0")).toBe(true);
    expect(ok("0.004", "0")).toBe(false);
  });

  it("valores chicos no reciben una ventana absurda (el tramo del 2 %)", () => {
    // Con una ventana fija de 0.005, el 0 pasaría por correcto para 0.0001.
    expect(ok("0", "0.0001")).toBe(false);
    expect(ok("0.0001", "0.0001")).toBe(true);
    // 2 % de 0.05 = 0.001.
    expect(ok("0.0505", "0.05")).toBe(true);
    expect(ok("0.06", "0.05")).toBe(false);
  });

  it("el ruido de punto flotante no reprueba a nadie", () => {
    // El caso que el plan citaba: `0.1 + 0.2`. formatoDefault ya lo deja en
    // "0.3", pero si algún camino pasa el valor crudo, tampoco falla.
    expect(ok("0.3", "0.30000000000000004")).toBe(true);
    expect(ok("2.1", "2.0999999999999996")).toBe(true);
  });
});

describe("respuestaNumericaCorrecta / coma decimal", () => {
  it("acepta la coma como separador (convención es-AR)", () => {
    expect(ok("0,3", "0.3")).toBe(true);
    expect(ok("1,4142", "1.4142")).toBe(true);
    expect(ok("7", "7")).toBe(true);
    expect(ok("1.234,5", "1234.5")).toBe(false); // separador de miles: no se adivina
  });
});

describe("respuestaNumericaCorrecta / tolerancia declarada", () => {
  it("la declarada gana, incluso si es más chica que la de por defecto", () => {
    // tol_abs 0.0001 sobre 0.3333: 0.33 ya no entra.
    expect(ok("0.33", "0.3333", undefined, 0.0001)).toBe(false);
    expect(ok("0.3333", "0.3333", undefined, 0.0001)).toBe(true);
  });

  it("la declarada también se aplica a respuestas enteras", () => {
    expect(ok("102", "100", 0.05)).toBe(true); // ±5 %
    expect(ok("106", "100", 0.05)).toBe(false);
  });

  it("criterio combinado `max(|e|·rel, abs)`", () => {
    expect(toleranciaEfectiva(100, 0.01, 0.5)).toBe(1); // rel gana
    expect(toleranciaEfectiva(10, 0.01, 0.5)).toBe(0.5); // abs gana
  });
});

describe("usaToleranciaPorDefecto", () => {
  it("sólo con respuesta no entera, distinta de cero y nada declarado", () => {
    expect(usaToleranciaPorDefecto(0.3333)).toBe(true);
    expect(usaToleranciaPorDefecto(7)).toBe(false);
    expect(usaToleranciaPorDefecto(0)).toBe(false);
    expect(usaToleranciaPorDefecto(0.3333, 0.01)).toBe(false);
    expect(usaToleranciaPorDefecto(0.3333, undefined, 0.001)).toBe(false);
  });
});

describe("respuestaNumericaCorrecta / no numéricos", () => {
  it("cae a igualdad de string normalizada", () => {
    expect(ok("  buenos  aires ", "buenos aires")).toBe(true);
    expect(ok("Buenos Aires", "buenos aires")).toBe(false); // case-sensitive, como antes
    expect(ok("abc", "0.3333")).toBe(false);
    expect(ok("", "0.3333")).toBe(false);
    expect(ok("3abc", "3")).toBe(false); // no se acepta basura al final
  });
});

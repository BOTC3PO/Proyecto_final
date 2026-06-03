import { describe, expect, it } from "vitest";
import {
  pctToCanonical10,
  passingCutoffPct,
  resolveGrade,
  gradeFromConfig,
} from "../../src/scoring/convert.js";
import { getScoringSystem } from "../../src/scoring/catalog.js";
import type { ScoringSystem } from "../../src/scoring/types.js";

const sys = (id: string): ScoringSystem => {
  const s = getScoringSystem(id);
  if (!s) throw new Error(`missing system ${id}`);
  return s;
};

describe("pctToCanonical10", () => {
  it("mapea linealmente 0%→1.0 y 100%→10.0", () => {
    expect(pctToCanonical10(0)).toBe(1);
    expect(pctToCanonical10(1)).toBe(10);
    expect(pctToCanonical10(0.5)).toBe(5.5);
  });
  it("acota fuera de rango", () => {
    expect(pctToCanonical10(-0.2)).toBe(1);
    expect(pctToCanonical10(1.5)).toBe(10);
  });
});

describe("resolveGrade — maxScore = 0 (rawRatio null)", () => {
  it("devuelve 'sin nota', nunca Desaprobado", () => {
    for (const id of ["scale-0-100", "pass-fail", "scale-es"]) {
      const g = resolveGrade(null, sys(id));
      expect(g.display).toBe("—");
      expect(g.canonical10).toBeNull();
      expect(g.passing).toBeNull();
    }
  });
});

// ── numeric ────────────────────────────────────────────────────────────────
describe("scale-1-10 (numeric)", () => {
  const s = sys("scale-1-10");
  it("display interpola 1..10", () => {
    expect(resolveGrade(0, s).display).toBe("1.0");
    expect(resolveGrade(1, s).display).toBe("10.0");
    expect(resolveGrade(0.6, s).display).toBe("6.4");
  });
  it("passing por defecto ~ nota 6 (55.56%)", () => {
    expect(resolveGrade(0.56, s).passing).toBe(true);
    expect(resolveGrade(0.55, s).passing).toBe(false);
  });
});

describe("scale-0-100 (numeric)", () => {
  const s = sys("scale-0-100");
  it("display = porcentaje", () => {
    expect(resolveGrade(0.73, s).display).toBe("73");
    expect(resolveGrade(0, s).display).toBe("0");
    expect(resolveGrade(1, s).display).toBe("100");
  });
  it("passing por defecto en 60", () => {
    expect(resolveGrade(0.6, s).passing).toBe(true);
    expect(resolveGrade(0.59, s).passing).toBe(false);
  });
});

describe("scale-gpa (numeric) — GPA 0.0 NO aprueba (bug viejo corregido)", () => {
  const s = sys("scale-gpa");
  it("display interpola 0.0..4.0", () => {
    expect(resolveGrade(0, s).display).toBe("0.00");
    expect(resolveGrade(1, s).display).toBe("4.00");
    expect(resolveGrade(0.5, s).display).toBe("2.00");
  });
  it("un 0.0 reprueba; el corte por defecto es 2.0 (50%)", () => {
    expect(resolveGrade(0, s).passing).toBe(false);
    expect(resolveGrade(0.5, s).passing).toBe(true);
    expect(resolveGrade(0.49, s).passing).toBe(false);
  });
});

// ── binary ───────────────────────────────────────────────────────────────────
describe("pass-fail (binary)", () => {
  const s = sys("pass-fail");
  it("display y passing según el corte (default 60)", () => {
    expect(resolveGrade(0.6, s)).toMatchObject({ display: "Aprobado", passing: true });
    expect(resolveGrade(0.5, s)).toMatchObject({ display: "Desaprobado", passing: false });
  });
  it("minPassingScore numérico mueve el corte", () => {
    expect(passingCutoffPct(s, { systemId: "pass-fail", minPassingScore: "70" })).toBe(70);
    expect(resolveGrade(0.65, s, { systemId: "pass-fail", minPassingScore: "70" }).passing).toBe(false);
  });
});

// ── banded: letras (% explícitos) ────────────────────────────────────────────
describe("scale-a-f (banded)", () => {
  const s = sys("scale-a-f");
  it("display por banda", () => {
    expect(resolveGrade(0.95, s).display).toBe("A");
    expect(resolveGrade(0.85, s).display).toBe("B");
    expect(resolveGrade(0.75, s).display).toBe("C");
    expect(resolveGrade(0.65, s).display).toBe("D");
    expect(resolveGrade(0.3, s).display).toBe("F");
  });
  it("bordes deterministas (semiabiertos)", () => {
    expect(resolveGrade(0.9, s).display).toBe("A");
    expect(resolveGrade(0.8999, s).display).toBe("B");
    expect(resolveGrade(0.6, s).display).toBe("D");
    expect(resolveGrade(0.5999, s).display).toBe("F");
  });
  it("passing por defecto en D (60%)", () => {
    expect(resolveGrade(0.6, s).passing).toBe(true);
    expect(resolveGrade(0.59, s).passing).toBe(false);
  });
});

describe("scale-s-f (banded)", () => {
  const s = sys("scale-s-f");
  it("display por banda y passing en D (55%)", () => {
    expect(resolveGrade(0.97, s).display).toBe("S");
    expect(resolveGrade(0.9, s).display).toBe("A");
    expect(resolveGrade(0.8, s).display).toBe("B");
    expect(resolveGrade(0.7, s).display).toBe("C");
    expect(resolveGrade(0.6, s).display).toBe("D");
    expect(resolveGrade(0.5, s).display).toBe("F");
    expect(resolveGrade(0.55, s).passing).toBe(true);
    expect(resolveGrade(0.54, s).passing).toBe(false);
  });
});

// ── banded: equivalencias 1–10 → % ───────────────────────────────────────────
describe("scale-s-a-b-c-d (banded, sin reprobación)", () => {
  const s = sys("scale-s-a-b-c-d");
  it("display por banda", () => {
    expect(resolveGrade(0.5, s).display).toBe("D");
    expect(resolveGrade(0.65, s).display).toBe("C");
    expect(resolveGrade(0.78, s).display).toBe("B");
    expect(resolveGrade(0.9, s).display).toBe("A");
    expect(resolveGrade(1, s).display).toBe("S");
  });
  it("la banda mínima (D) aprueba: cualquier puntaje pasa por defecto", () => {
    expect(resolveGrade(0, s).passing).toBe(true);
    expect(resolveGrade(0.01, s).passing).toBe(true);
  });
  it("con minPassingScore explícito el corte sube (ej. C)", () => {
    const cfg = { systemId: "scale-s-a-b-c-d", minPassingScore: "C" };
    expect(resolveGrade(0.65, s, cfg).passing).toBe(true);
    expect(resolveGrade(0.6, s, cfg).passing).toBe(false);
  });
});

describe("scale-canadian (banded)", () => {
  const s = sys("scale-canadian");
  it("display por banda", () => {
    expect(resolveGrade(0.1, s).display).toBe("F");
    expect(resolveGrade(0.3, s).display).toBe("D");
    expect(resolveGrade(0.55, s).display).toBe("C");
    expect(resolveGrade(0.65, s).display).toBe("C+");
    expect(resolveGrade(0.8, s).display).toBe("B");
    expect(resolveGrade(0.9, s).display).toBe("A");
    expect(resolveGrade(0.97, s).display).toBe("A+");
  });
  it("passing por defecto en C (~50%)", () => {
    expect(resolveGrade(0.5, s).passing).toBe(true);
    expect(resolveGrade(0.49, s).passing).toBe(false);
  });
});

describe("scale-es (cualitativa) — computa, no sólo muestra", () => {
  const s = sys("scale-es");
  it("display por banda", () => {
    expect(resolveGrade(0.05, s).display).toBe("Reprobado");
    expect(resolveGrade(0.2, s).display).toBe("Insuficiente");
    expect(resolveGrade(0.5, s).display).toBe("Suficiente");
    expect(resolveGrade(0.65, s).display).toBe("Bueno");
    expect(resolveGrade(0.8, s).display).toBe("Muy Bueno");
    expect(resolveGrade(0.9, s).display).toBe("Excelente");
    expect(resolveGrade(0.97, s).display).toBe("Sobresaliente");
  });
  it("passing por defecto en Suficiente (~38.9%)", () => {
    expect(resolveGrade(0.4, s).passing).toBe(true);
    expect(resolveGrade(0.38, s).passing).toBe(false);
  });
});

describe("scale-rarity (banded)", () => {
  const s = sys("scale-rarity");
  it("display por banda", () => {
    expect(resolveGrade(0.1, s).display).toBe("Común");
    expect(resolveGrade(0.3, s).display).toBe("Poco común");
    expect(resolveGrade(0.5, s).display).toBe("Raro");
    expect(resolveGrade(0.65, s).display).toBe("Muy raro");
    expect(resolveGrade(0.8, s).display).toBe("Épico");
    expect(resolveGrade(0.9, s).display).toBe("Legendario");
    expect(resolveGrade(0.97, s).display).toBe("Mítico");
  });
  it("passing por defecto en Raro (~44.4%)", () => {
    expect(resolveGrade(0.45, s).passing).toBe(true);
    expect(resolveGrade(0.44, s).passing).toBe(false);
  });
});

// ── wiring helper + reconciliación de umbral ─────────────────────────────────
describe("gradeFromConfig", () => {
  it("cae al sistema 0-100 si el systemId no existe", () => {
    const g = gradeFromConfig(0.7, { systemId: "desconocido" });
    expect(g.display).toBe("70");
    expect(g.passing).toBe(true);
  });
  it("minPassingScore es la fuente de verdad del corte", () => {
    const g = gradeFromConfig(0.5, { systemId: "scale-0-100", minPassingScore: "40" });
    expect(g.passing).toBe(true);
    const g2 = gradeFromConfig(0.5, { systemId: "scale-0-100", minPassingScore: "60" });
    expect(g2.passing).toBe(false);
  });
  it("convierte desde el ratio crudo (sin doble redondeo)", () => {
    // 0.005 ratio → 0.5% interno; canonical10 = 1 + 0.005*9 = 1.045 → 1.05
    expect(gradeFromConfig(0.005, { systemId: "scale-0-100" }).canonical10).toBe(1.05);
  });
});

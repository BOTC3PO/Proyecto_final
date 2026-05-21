import { describe, expect, it } from "vitest";
import { createPrng } from "../../src/runtime/prng.js";

describe("PRNG / determinismo", () => {
  it("dos instancias con mismo seed producen la misma secuencia", () => {
    const a = createPrng("seed-1");
    const b = createPrng("seed-1");
    const seqA = Array.from({ length: 10 }, () => a.next());
    const seqB = Array.from({ length: 10 }, () => b.next());
    expect(seqA).toEqual(seqB);
  });

  it("dos instancias con mismo seed shuffleean igual", () => {
    const a = createPrng("test");
    const b = createPrng("test");
    expect(a.shuffle([1, 2, 3, 4, 5])).toEqual(b.shuffle([1, 2, 3, 4, 5]));
  });

  it("dos instancias con seeds distintos generan secuencias distintas", () => {
    const a = createPrng("alpha");
    const b = createPrng("beta");
    let differ = false;
    for (let i = 0; i < 5; i++) {
      if (a.next() !== b.next()) {
        differ = true;
        break;
      }
    }
    expect(differ).toBe(true);
  });
});

describe("PRNG / int", () => {
  it("siempre cae en [min, max] inclusive", () => {
    const prng = createPrng("range-test");
    for (let i = 0; i < 200; i++) {
      const v = prng.int(1, 10);
      expect(Number.isInteger(v)).toBe(true);
      expect(v).toBeGreaterThanOrEqual(1);
      expect(v).toBeLessThanOrEqual(10);
    }
  });

  it("cubre suficiente variedad con 100 seeds distintos", () => {
    const valores = new Set<number>();
    for (let i = 0; i < 100; i++) {
      valores.add(createPrng(`seed-${i}`).int(1, 100));
    }
    // Por el birthday paradox sobre [1,100], 100 muestras dan ~63 únicos en promedio.
    expect(valores.size).toBeGreaterThan(55);
  });

  it("int(5, 5) siempre devuelve 5", () => {
    const prng = createPrng("x");
    for (let i = 0; i < 10; i++) {
      expect(prng.int(5, 5)).toBe(5);
    }
  });
});

describe("PRNG / float", () => {
  it("respeta los límites", () => {
    const prng = createPrng("float-test");
    for (let i = 0; i < 100; i++) {
      const v = prng.float(0, 1);
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });

  it("decimals redondea correctamente", () => {
    const prng = createPrng("float-dec");
    for (let i = 0; i < 20; i++) {
      const v = prng.float(0, 10, 2);
      expect(Math.round(v * 100) / 100).toBe(v);
    }
  });
});

describe("PRNG / pick", () => {
  it("devuelve un elemento del array", () => {
    const prng = createPrng("pick");
    for (let i = 0; i < 50; i++) {
      const v = prng.pick([10, 20, 30]);
      expect([10, 20, 30]).toContain(v);
    }
  });

  it("array vacío lanza error", () => {
    const prng = createPrng("pick-empty");
    expect(() => prng.pick([])).toThrow(/vacío/);
  });
});

describe("PRNG / sample", () => {
  it("devuelve n elementos únicos", () => {
    const prng = createPrng("sample");
    const result = prng.sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
    expect(result).toHaveLength(5);
    expect(new Set(result).size).toBe(5);
    for (const v of result) {
      expect(v).toBeGreaterThanOrEqual(1);
      expect(v).toBeLessThanOrEqual(10);
    }
  });

  it("n mayor que el array lanza error", () => {
    const prng = createPrng("x");
    expect(() => prng.sample([1, 2], 5)).toThrow();
  });
});

describe("PRNG / shuffle", () => {
  it("preserva todos los elementos", () => {
    const prng = createPrng("shuffle");
    const result = prng.shuffle([1, 2, 3, 4, 5]);
    expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5]);
  });

  it("no muta el array original", () => {
    const original = [1, 2, 3, 4, 5];
    const prng = createPrng("shuffle-2");
    prng.shuffle(original);
    expect(original).toEqual([1, 2, 3, 4, 5]);
  });
});

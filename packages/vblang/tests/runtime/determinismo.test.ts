import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURE_DIR = resolve(__dirname, "../fixtures/valid");

const FIXTURES = [
  "16_1_mru.vblang",
  // 16_3 necesita maxRetries alto; lo testeamos por separado en generate.test.ts.
  "16_4_energia.vblang",
];

describe("runtime / determinismo cross-fixture", () => {
  for (const f of FIXTURES) {
    it(`${f}: mismo seed → JSON idéntico`, () => {
      const src = readFileSync(resolve(FIXTURE_DIR, f), "utf8");
      const compiled = compile(parse(src));
      const a = generate(compiled, { seed: "deterministic-A" });
      const b = generate(compiled, { seed: "deterministic-A" });
      expect(JSON.stringify(a)).toBe(JSON.stringify(b));
    });
  }

  it("seeds distintos producen resultados distintos en la mayoría de casos", () => {
    const src = readFileSync(
      resolve(FIXTURE_DIR, "16_1_mru.vblang"),
      "utf8",
    );
    const compiled = compile(parse(src));
    const seeds = Array.from({ length: 20 }, (_, i) => `seed-${i}`);
    const results = seeds.map((s) =>
      JSON.stringify(generate(compiled, { seed: s })),
    );
    const unique = new Set(results);
    // Esperamos al menos 18/20 distintos.
    expect(unique.size).toBeGreaterThanOrEqual(18);
  });
});
